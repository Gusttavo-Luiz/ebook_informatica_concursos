// Motor das videoaulas: monta a linha do tempo a partir do roteiro e
// permite renderizar qualquer instante com irPara(tempo).

const FPS = 30;
const VINHETA = 5.5;          // duração da vinheta de abertura (s)
const ENTRADA_CORTINA = 1.0;  // pausa antes da 1ª fala, após a cortina
const ENTRADA_SUAVE = 0.6;    // pausa antes da 1ª fala, após troca suave
const INTERVALO = 0.38;       // pausa entre frases
const SAIDA = 1.1;            // pausa depois da última frase
const FINAL = 2.5;            // tempo do quadro final

gsap.registerPlugin(DrawSVGPlugin);

const serie = {
  roteiro: null,
  capitulo(def) { this.roteiro = def; },
};

let LINHA = null;     // timeline principal (gsap)
let AGENDA = null;    // tempos calculados (exportados para o áudio)
let ENVELOPE = [];    // volume da narração por quadro (para a boca do Bit)
let BIT = null;

function textoDaFala(f) { return typeof f === "string" ? f : f.texto; }
function falaDaFala(f) { return typeof f === "string" ? f : (f.falar || f.texto); }

// Duração estimada quando ainda não há áudio (pré-visualização).
function estimar(texto) { return Math.max(1.2, texto.length / 15); }

function falasDoRoteiro() {
  return serie.roteiro.cenas.map((cena) => ({
    id: cena.id,
    falas: (cena.falas || []).map((f) => ({ texto: textoDaFala(f), falar: falaDaFala(f) })),
  }));
}

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function posicionar(elemento, estilo = {}) {
  for (const [k, v] of Object.entries(estilo)) {
    elemento.style[k] = typeof v === "number" ? `${v}px` : v;
  }
  return elemento;
}

// ---------- Personagem ----------

function criarBit(palco) {
  const caixa = el(`<div class="bit" style="position:absolute;left:0;top:0;width:300px;height:380px;z-index:8"></div>`);
  caixa.innerHTML = bitSVG();
  palco.appendChild(caixa);
  const q = (s) => caixa.querySelector(s);
  return {
    caixa,
    corpo: q(".corpo-bit"),
    olhos: q(".olhos-bit"),
    boca: q(".boca-bit"),
    sorriso: q(".sorriso-bit"),
    luz: q(".luz-bit"),
    bracoDir: q(".braco-dir"),
    bracoEsq: q(".braco-esq"),
  };
}

function posicaoBit(p) {
  // p = {x, y, s}: x,y = centro dos pés na tela; s = escala.
  return { x: p.x - 150, y: p.y - 380, scale: p.s ?? 1, transformOrigin: "50% 100%" };
}

// ---------- Contexto de cada cena ----------

function contexto(cena, def, tl, palco) {
  const c = {
    el: cena.el,
    inicio: cena.inicio,
    fim: cena.fim,
    tl,
    t: (i, d = 0) => cena.falas[i].inicio + d,
    f: (i, d = 0) => cena.falas[i].fim + d,
    dur: (i) => cena.falas[i].fim - cena.falas[i].inicio,

    novo(html, estilo) {
      const e = posicionar(el(html), estilo);
      if (!e.classList.contains("abs") && !e.style.position) e.style.position = "absolute";
      cena.el.appendChild(e);
      return e;
    },

    entra(e, t, tipo = "baixo", dur = 0.6) {
      const de = {
        baixo: { y: 40 }, cima: { y: -40 }, esquerda: { x: -60 }, direita: { x: 60 },
        zoom: { scale: 0.85 }, pop: { scale: 0.4 }, fade: {},
      }[tipo];
      const ease = tipo === "pop" ? "back.out(1.7)" : "power3.out";
      tl.fromTo(e, { autoAlpha: 0, ...de }, { autoAlpha: 1, x: 0, y: 0, scale: 1, duration: tipo === "pop" ? 0.5 : dur, ease, immediateRender: true }, t);
      return e;
    },

    sai(e, t, dur = 0.4) {
      tl.to(e, { autoAlpha: 0, duration: dur, ease: "power2.in" }, t);
      return e;
    },

    destaque(e, t) {
      tl.to(e, { scale: 1.07, duration: 0.25, ease: "power2.out", yoyo: true, repeat: 1 }, t);
      return e;
    },

    desenhar(alvo, t, dur = 0.8) {
      tl.fromTo(alvo, { drawSVG: "0%" }, { drawSVG: "100%", duration: dur, ease: "power2.inOut", immediateRender: true }, t);
      return alvo;
    },

    seta(x1, y1, x2, y2, t, opcoes = {}) {
      const cor = opcoes.cor || "var(--cor)";
      const largura = opcoes.largura || 8;
      const ang = Math.atan2(y2 - y1, x2 - x1);
      const ponta = 22;
      const px1 = x2 - ponta * Math.cos(ang - 0.45), py1 = y2 - ponta * Math.sin(ang - 0.45);
      const px2 = x2 - ponta * Math.cos(ang + 0.45), py2 = y2 - ponta * Math.sin(ang + 0.45);
      const caminho = opcoes.curva
        ? `M${x1} ${y1} Q${(x1 + x2) / 2} ${Math.min(y1, y2) - opcoes.curva} ${x2} ${y2}`
        : `M${x1} ${y1} L${x2} ${y2}`;
      const s = c.novo(`<svg class="abs" style="left:0;top:0;width:1920px;height:1080px;pointer-events:none" viewBox="0 0 1920 1080">
        <path class="linha" d="${caminho}" stroke="${cor}" stroke-width="${largura}" stroke-linecap="round" fill="none"/>
        <path class="ponta" d="M${px1} ${py1} L${x2} ${y2} L${px2} ${py2}" stroke="${cor}" stroke-width="${largura}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </svg>`);
      c.desenhar(s.querySelector(".linha"), t, opcoes.dur || 0.7);
      tl.fromTo(s.querySelector(".ponta"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.15, immediateRender: true }, t + (opcoes.dur || 0.7) - 0.1);
      return s;
    },

    titulo(rotulo, titulo, estilo, t, opcoes = {}) {
      const bloco = c.novo(`<div class="abs">
        ${rotulo ? `<div class="rotulo">${rotulo}</div>` : ""}
        <div class="${opcoes.medio ? "titulo-medio" : "titulo"}" style="margin-top:18px">${titulo}</div>
      </div>`, estilo);
      c.entra(bloco, t, "baixo", 0.7);
      return bloco;
    },

    texto(html, estilo, t, tipo = "baixo") {
      return c.entra(c.novo(`<div class="texto abs">${html}</div>`, estilo), t, tipo);
    },

    lista(itens, estilo, tempos) {
      const ul = c.novo(`<ul class="lista">${itens.map((i) => `<li><span>${i}</span></li>`).join("")}</ul>`, estilo);
      [...ul.children].forEach((li, i) => c.entra(li, tempos[i], "esquerda", 0.55));
      return [...ul.children];
    },

    cartao(opcoes, estilo, t, tipo = "baixo") {
      const e = c.novo(`<div class="cartao">
        ${opcoes.icone ? icone(opcoes.icone) : ""}
        ${opcoes.titulo ? `<h3>${opcoes.titulo}</h3>` : ""}
        ${opcoes.texto ? `<p>${opcoes.texto}</p>` : ""}
      </div>`, estilo);
      if (opcoes.cor) e.style.setProperty("--cor", opcoes.cor);
      return c.entra(e, t, tipo);
    },

    no(opcoes, estilo, t, tipo = "pop") {
      const e = c.novo(`<div class="no">
        ${opcoes.icone ? icone(opcoes.icone) : ""}
        <strong>${opcoes.titulo}</strong>
        ${opcoes.texto ? `<span>${opcoes.texto}</span>` : ""}
      </div>`, estilo);
      return c.entra(e, t, tipo);
    },

    quadro(tipo, html, estilo, t) {
      const rotulos = { resumo: "Resumo estratégico", prova: "Pegadinha de banca", dica: "Memorize" };
      const e = c.novo(`<div class="quadro ${tipo}">
        <div class="rotulo">${rotulos[tipo]}</div>
        <p>${html}</p>
      </div>`, estilo);
      return c.entra(e, t, "direita", 0.7);
    },

    tabela(cabecalho, linhas, estilo, tCab, tempos) {
      const tab = c.novo(`<table class="tabela">
        <thead><tr>${cabecalho.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
        <tbody>${linhas.map((l) => `<tr>${l.map((d) => `<td>${d}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>`, estilo);
      c.entra(tab.querySelector("thead"), tCab, "fade", 0.4);
      tl.fromTo(tab, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out", immediateRender: true }, tCab);
      [...tab.querySelectorAll("tbody tr")].forEach((tr, i) => {
        tl.fromTo(tr, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.45, immediateRender: true }, tempos[i]);
      });
      return tab;
    },

    contar(e, de, ate, t, dur = 1.2, formatar = (v) => Math.round(v).toLocaleString("pt-BR")) {
      const estado = { v: de };
      e.textContent = formatar(de);
      tl.to(estado, { v: ate, duration: dur, ease: "power2.out", onUpdate: () => { e.textContent = formatar(estado.v); } }, t);
      return e;
    },

    chave(html, t, tFim) {
      const e = c.novo(`<div class="chave">${html}</div>`);
      tl.fromTo(e, { autoAlpha: 0, x: 0, y: 30, xPercent: -50 }, { autoAlpha: 1, x: 0, y: 0, xPercent: -50, duration: 0.5, ease: "power3.out", immediateRender: true }, t);
      if (tFim) tl.to(e, { autoAlpha: 0, duration: 0.3 }, tFim);
      return e;
    },

    bit: {
      ir(t, p, dur = 0.8) { tl.to(BIT.caixa, { ...posicaoBit(p), duration: dur, ease: "power3.inOut" }, t); },
      acenar(t, vezes = 3) {
        tl.to(BIT.bracoDir, { rotation: -115, duration: 0.3, ease: "power2.out" }, t);
        tl.to(BIT.bracoDir, { rotation: -85, duration: 0.25, yoyo: true, repeat: vezes * 2 - 1, ease: "sine.inOut" }, t + 0.3);
        tl.to(BIT.bracoDir, { rotation: 0, duration: 0.35, ease: "power2.inOut" }, t + 0.3 + vezes * 0.5);
      },
      apontar(t, lado = "direita", dur = 1.6) {
        const braco = lado === "direita" ? BIT.bracoDir : BIT.bracoEsq;
        const ang = lado === "direita" ? -70 : 70;
        tl.to(braco, { rotation: ang, duration: 0.35, ease: "back.out(2)" }, t);
        tl.to(braco, { rotation: 0, duration: 0.35, ease: "power2.inOut" }, t + dur);
      },
      pular(t) {
        tl.to(BIT.corpo, { y: -26, duration: 0.22, ease: "power2.out", yoyo: true, repeat: 1 }, t);
      },
    },
  };
  return c;
}

// ---------- Construção ----------

function construir(duracoes) {
  const roteiro = serie.roteiro;
  const palco = document.getElementById("palco");
  palco.style.setProperty("--cor", roteiro.cor);
  document.documentElement.style.setProperty("--cor", roteiro.cor);
  palco.innerHTML = "";

  // Formas de fundo
  const fundo = el(`<div class="camada" id="fundo">
    <div class="bolha" style="width:900px;height:900px;left:-260px;top:-380px"></div>
    <div class="bolha" style="width:620px;height:620px;right:-180px;bottom:-260px"></div>
  </div>`);
  palco.appendChild(fundo);
  const conteudo = el(`<div class="camada" id="conteudo"></div>`);
  palco.appendChild(conteudo);

  // Agenda: calcula o início e o fim de cada frase e de cada cena.
  let t = VINHETA;
  const agenda = { fps: FPS, cenas: [], duracao: 0 };
  roteiro.cenas.forEach((def, ic) => {
    const anterior = roteiro.cenas[ic - 1];
    const transicao = def.transicao || (!anterior || anterior.secao !== def.secao ? "cortina" : "suave");
    const cena = { id: def.id, secao: def.secao, transicao, inicio: t, falas: [] };
    let cursor = t + (transicao === "cortina" ? ENTRADA_CORTINA : ENTRADA_SUAVE);
    (def.falas || []).forEach((f, i) => {
      const d = duracoes ? duracoes[ic][i] : estimar(falaDaFala(f));
      cena.falas.push({ inicio: cursor, fim: cursor + d, texto: textoDaFala(f), falar: falaDaFala(f) });
      cursor += d + (def.pausas?.[i] ?? INTERVALO);
    });
    cena.fim = cursor - INTERVALO + SAIDA + (def.espera || 0);
    t = cena.fim;
    agenda.cenas.push(cena);
  });
  agenda.duracao = t + FINAL;
  AGENDA = agenda;

  const tl = gsap.timeline({ paused: true });
  LINHA = tl;

  // HUD
  const secoes = [...new Set(roteiro.cenas.map((c) => c.secao))];
  const hud = el(`<div id="hud">
    <div class="marca"><i>IC</i><span>Capítulo ${roteiro.numero} · <b>${roteiro.titulo}</b></span></div>
    <div id="trilha">${secoes.map(() => "<span></span>").join("")}</div>
  </div>`);
  palco.appendChild(hud);
  tl.set(hud, { autoAlpha: 0 }, 0);
  tl.to(hud, { autoAlpha: 1, duration: 0.6 }, VINHETA + 0.4);
  secoes.forEach((s, i) => {
    const cenas = agenda.cenas.filter((c) => c.secao === s);
    const barra = hud.querySelectorAll("#trilha span")[i];
    tl.fromTo(barra, { "--p": "0%" }, { "--p": "100%", ease: "none", duration: cenas.at(-1).fim - cenas[0].inicio, immediateRender: true }, cenas[0].inicio);
  });

  // Personagem
  BIT = criarBit(palco);
  tl.set(BIT.caixa, { autoAlpha: 0, ...posicaoBit({ x: 960, y: 1000, s: 1 }) }, 0);

  // Cortina
  const cortina = el(`<div id="cortina"></div>`);
  palco.appendChild(cortina);

  montarVinheta(palco, tl, roteiro);

  agenda.cenas.forEach((cena, ic) => {
    const def = roteiro.cenas[ic];
    cena.el = el(`<div class="cena" data-cena="${cena.id}"></div>`);
    conteudo.appendChild(cena.el);

    // Visibilidade da cena e transições
    if (cena.transicao === "cortina") {
      tl.fromTo(cortina, { scale: 0 }, { scale: 1, duration: 0.45, ease: "power2.in", immediateRender: false }, cena.inicio - 0.45);
      tl.set(cena.el, { autoAlpha: 1 }, cena.inicio);
      tl.to(cortina, { scale: 0, duration: 0.55, ease: "power2.out" }, cena.inicio + 0.02);
    } else {
      tl.fromTo(cena.el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.35, immediateRender: false }, cena.inicio);
    }
    const proxima = agenda.cenas[ic + 1];
    if (proxima && proxima.transicao === "cortina") {
      tl.set(cena.el, { autoAlpha: 0 }, cena.fim);
    } else {
      tl.to(cena.el, { autoAlpha: 0, duration: 0.35, ease: "power2.in" }, cena.fim - 0.35);
    }

    // Posição do Bit
    if (def.bit) {
      const dur = cena.transicao === "cortina" ? 0.01 : 0.8;
      tl.to(BIT.caixa, { autoAlpha: 1, ...posicaoBit(def.bit), duration: dur, ease: "power3.inOut" }, cena.inicio);
    } else {
      tl.to(BIT.caixa, { autoAlpha: 0, duration: 0.3 }, cena.inicio - (cena.transicao === "cortina" ? 0 : 0.3));
    }

    const c = contexto(cena, def, tl, palco);
    def.montar?.(c);
  });

  // Quadro final
  const fim = el(`<div class="camada" style="background:var(--fundo)"></div>`);
  palco.appendChild(fim);
  tl.fromTo(fim, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.2, immediateRender: true }, agenda.duracao - FINAL + 0.6);

  tl.set({}, {}, agenda.duracao);
  irPara(0);
  return exportarAgenda();
}

function exportarAgenda() {
  return {
    fps: AGENDA.fps,
    duracao: AGENDA.duracao,
    vinheta: VINHETA,
    cenas: AGENDA.cenas.map((c) => ({
      id: c.id, secao: c.secao, transicao: c.transicao, inicio: c.inicio, fim: c.fim,
      falas: c.falas.map((f) => ({ inicio: f.inicio, fim: f.fim, texto: f.texto, falar: f.falar })),
    })),
  };
}

function montarVinheta(palco, tl, roteiro) {
  const v = el(`<div class="camada" style="background:var(--serie);z-index:30;display:grid;place-items:center">
    <div style="text-align:center;color:#fff">
      <div class="vin-logo" style="display:inline-grid;place-items:center;width:150px;height:150px;border-radius:36px;background:#fff;color:var(--serie);font:800 64px var(--sans)">IC</div>
      <div class="vin-serie" style="margin-top:36px;font:700 34px var(--sans);letter-spacing:.16em;text-transform:uppercase;opacity:.85">Informática para Concursos · Videoaulas</div>
      <div class="vin-cap" style="margin-top:56px;display:inline-block;padding:14px 34px;border-radius:999px;background:var(--cor);font:800 34px var(--sans);letter-spacing:.1em;text-transform:uppercase">Capítulo ${roteiro.numero}</div>
      <div class="vin-titulo" style="margin-top:26px;font:700 96px var(--serif)">${roteiro.titulo}</div>
    </div>
  </div>`);
  palco.appendChild(v);
  const q = (s) => v.querySelector(s);
  tl.fromTo(q(".vin-logo"), { scale: 0, rotation: -20 }, { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.8)", immediateRender: true }, 0.3);
  tl.fromTo(q(".vin-serie"), { autoAlpha: 0, y: 20 }, { autoAlpha: 0.85, y: 0, duration: 0.6, immediateRender: true }, 0.9);
  tl.fromTo(q(".vin-cap"), { autoAlpha: 0, scale: 0.6 }, { autoAlpha: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)", immediateRender: true }, 1.7);
  tl.fromTo(q(".vin-titulo"), { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", immediateRender: true }, 2.1);
  tl.to(v, { yPercent: -100, duration: 0.8, ease: "power3.inOut" }, VINHETA - 0.8);
}

// Renderiza o instante t (em segundos).
function irPara(t) {
  LINHA.seek(t, false);
  if (!BIT) return;
  const quadro = Math.round(t * FPS);
  const vol = ENVELOPE[quadro] || 0;
  const aberta = vol > 0.05;
  BIT.boca.style.opacity = aberta ? 1 : 0;
  BIT.sorriso.style.opacity = aberta ? 0 : 1;
  BIT.boca.style.transform = `scaleY(${0.25 + 0.75 * Math.min(1, vol * 1.6)})`;
  const fase = t % 3.7;
  BIT.olhos.style.transform = fase > 3.55 ? "scaleY(0.12)" : "scaleY(1)";
  BIT.caixa.querySelector(".bit-svg").style.transform = `translateY(${Math.sin(t * 1.7) * 6}px)`;
  BIT.luz.style.opacity = 0.65 + 0.35 * Math.sin(t * 3);
}

function definirEnvelope(valores) { ENVELOPE = valores; }

window.serie = serie;
window.construir = construir;
window.irPara = irPara;
window.definirEnvelope = definirEnvelope;
window.falasDoRoteiro = falasDoRoteiro;
