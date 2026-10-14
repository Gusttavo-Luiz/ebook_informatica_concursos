// Roteiro da videoaula do Capítulo 8 — Lógica de Programação.
// Cada cena tem a narração (falas) e a montagem visual (montar).
// c.t(i) = instante em que começa a fala i da cena.
// Dentro de montar, quando(c, this)(i, "trecho") = instante em que a fala i
// chega ao trecho indicado (proporcional ao texto), para sincronizar detalhes.

const BIT_CANTO = { x: 1720, y: 1020, s: 0.58 };
const BIT_GRANDE = { x: 470, y: 990, s: 1.3 };

// ---------------------------------------------------------------- Ícones extras
if (typeof ICONES !== "undefined") {
  Object.assign(ICONES, {
    decisao: `<path class="c1" d="M60 6l54 54-54 54L6 60z"/>
      <path class="sb" d="M49 48a11 11 0 1 1 15 10c-3 1.5-4 3.5-4 6.5v3"/><circle class="cb" cx="60" cy="81" r="5"/>`,
    ordem: `<rect class="cs" x="8" y="14" width="104" height="92" rx="14"/>
      ${[36, 60, 84].map((y, i) => `<circle class="c1" cx="30" cy="${y}" r="10"/><text x="30" y="${y + 5}" text-anchor="middle" font-family="Inter" font-weight="800" font-size="14" fill="#fff">${i + 1}</text><rect class="c2" x="48" y="${y - 5}" width="${i === 2 ? 34 : 50}" height="10" rx="5"/>`).join("")}`,
    bandeira: `<rect class="cn" x="22" y="10" width="9" height="102" rx="4"/>
      <path class="c1" d="M31 14h70l-14 22 14 22H31z"/>
      <rect class="cb" x="39" y="21" width="11" height="11" rx="2"/><rect class="cb" x="61" y="21" width="11" height="11" rx="2"/>
      <rect class="cb" x="50" y="32" width="11" height="11" rx="2"/><rect class="cb" x="72" y="32" width="11" height="11" rx="2"/>
      <rect class="cb" x="39" y="43" width="11" height="11" rx="2"/><rect class="cb" x="61" y="43" width="11" height="11" rx="2"/>`,
    cafe: `<path class="c1" d="M20 46h66v28a30 30 0 0 1-30 30h-6a30 30 0 0 1-30-30z"/>
      <path class="s1" d="M86 54h4a13 13 0 0 1 0 26h-6"/>
      <rect class="c2" x="10" y="106" width="86" height="8" rx="4"/>
      <path class="s1" style="stroke:var(--cor-media)" d="M38 12c-7 8 7 13 0 22M54 12c-7 8 7 13 0 22M70 12c-7 8 7 13 0 22"/>`,
    chaleira: `<path class="s1" style="stroke:var(--cor-media)" d="M42 40c0-20 36-20 36 0"/>
      <path class="c1" d="M32 44h56l12 52a10 10 0 0 1-10 12H30a10 10 0 0 1-10-12z"/>
      <path class="c2" d="M24 64L4 50l6 28 12 6z"/>
      <rect class="cs" x="40" y="62" width="40" height="9" rx="4"/>`,
    ciclo: `<circle class="cs" cx="60" cy="60" r="52"/>
      <path class="s1" d="M30 64a30 30 0 0 1 50-27"/><path class="s1" d="M82 22v17H65"/>
      <path class="s1" d="M90 56a30 30 0 0 1-50 27"/><path class="s1" d="M38 98V81h17"/>`,
    funcao: `<path class="s1" style="stroke:var(--cor-media)" d="M6 60h22M20 51l9 9-9 9"/>
      <rect class="c1" x="32" y="26" width="56" height="68" rx="12"/>
      <text x="60" y="73" text-anchor="middle" font-family="Source Serif 4, serif" font-style="italic" font-weight="700" font-size="38" fill="#fff">f</text>
      <path class="s1" d="M92 60h22M106 51l9 9-9 9"/>`,
    lupa: `<circle class="cs" cx="50" cy="50" r="34"/><circle class="s1" cx="50" cy="50" r="34"/>
      <path class="s1" style="stroke-width:16" d="M76 76l30 30"/>`,
  });
}

// ---------------------------------------------------------------- Pronúncia
// Palavras em CAIXA ALTA (palavras-chave do pseudocódigo) são lidas em
// minúsculas pela voz; algumas ganham grafia própria.
const FALA_TROCA = { MOD: "mód", DIV: "div", FIMSE: "fim-se", FIMPARA: "fim-para", FIMENQUANTO: "fim-enquanto", OUTROCASO: "outro caso" };
function falaCap8(f) {
  const texto = typeof f === "string" ? f : f.texto;
  const base = typeof f === "string" ? f : (f.falar || f.texto);
  const dito = base.replace(/(?<!\p{L})(\p{Lu}{2,})(?!\p{L})/gu, (m) => FALA_TROCA[m] || m.toLowerCase());
  return dito === texto ? texto : { texto, falar: dito };
}

// ---------------------------------------------------------------- Auxiliares
// Instante proporcional dentro de uma fala: quando(c, this)(i, "trecho", extra)
function quando(c, def) {
  return (i, trecho, extra = 0) => {
    const f = def.falas[i];
    const txt = typeof f === "string" ? f : f.texto;
    const p = txt.indexOf(trecho);
    if (p < 0) throw new Error(`Trecho não encontrado na fala ${i} da cena ${def.id}: ${trecho}`);
    return c.t(i) + c.dur(i) * (p / txt.length) + extra;
  };
}

const PSEUDO_CHAVES = new Set(("INÍCIO FIM ESCREVA LEIA SE ENTÃO SENÃO FIMSE ENQUANTO FAÇA FIMENQUANTO PARA DE ATÉ FIMPARA " +
  "REPITA ESCOLHA CASO OUTROCASO FIMESCOLHA FUNÇÃO FIMFUNÇÃO RETORNE E OU NÃO DIV MOD VERDADEIRO FALSO").split(" "));

function escaparCap8(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

// Realce de sintaxe do pseudocódigo (palavras-chave, textos e comentários).
function pseudoHTML(linha) {
  return linha.replace(/("[^"]*")|(\/\/.*$)|([\p{L}_][\p{L}\p{N}_]*)|([\s\S])/gu, (m, str, com, pal) => {
    if (str) return `<span style="color:#2f8a5b">${escaparCap8(str)}</span>`;
    if (com) return `<span style="color:var(--texto-fraco);font-style:italic">${escaparCap8(com)}</span>`;
    if (pal && PSEUDO_CHAVES.has(pal)) return `<span style="color:var(--cor);font-weight:700">${pal}</span>`;
    return escaparCap8(m);
  });
}

// Bloco de pseudocódigo em cartão; devolve o cartão e as linhas.
function pseudo(c, linhas, estilo, t, opcoes = {}) {
  const fonte = opcoes.fonte || 28;
  const e = c.novo(`<div class="cartao" style="padding:${opcoes.pad || "24px 20px"};font-family:var(--mono);font-size:${fonte}px;line-height:1.5;color:var(--texto)">${
    opcoes.titulo ? `<div class="rotulo" style="font-family:var(--sans);font-size:22px;margin:0 0 8px 14px">${opcoes.titulo}</div>` : ""}${
    linhas.map((l) => `<div class="ln" style="white-space:pre;padding:0 14px;border-radius:10px;background-color:rgba(162,28,175,0)">${l === "" ? " " : pseudoHTML(l)}</div>`).join("")}</div>`, estilo);
  if (t !== null && t !== undefined) c.entra(e, t, opcoes.tipo || "baixo");
  return { e, ln: [...e.querySelectorAll(".ln")] };
}

// Destaca linha(s) de código entre t e tFim.
function realce(c, linhas, t, tFim) {
  const alvo = Array.isArray(linhas) ? linhas : [linhas];
  c.tl.to(alvo, { backgroundColor: "rgba(162,28,175,0.15)", duration: 0.25 }, t);
  if (tFim !== undefined) c.tl.to(alvo, { backgroundColor: "rgba(162,28,175,0)", duration: 0.3 }, tFim);
}

// Troca o conteúdo de um elemento no instante t (funciona ao avançar e ao voltar).
function mudarTexto(c, alvo, antes, depois, t, pulso = true) {
  const o = { v: 0 };
  c.tl.fromTo(o, { v: 0 }, { v: 1, duration: 0.2, immediateRender: false, onUpdate: () => { alvo.innerHTML = o.v < 0.5 ? antes : depois; } }, t);
  if (pulso) c.tl.fromTo(alvo, { scale: 1 }, { scale: 1.18, duration: 0.15, yoyo: true, repeat: 1, immediateRender: false }, t);
}

// Caixa de variável: etiqueta com o nome e valor dentro.
function caixaVar(c, nome, valor, x, y, t, opcoes = {}) {
  const w = opcoes.w || 260, h = opcoes.h || 120, fonte = opcoes.fonte || 52;
  const e = c.novo(`<div class="abs" style="left:${x}px;top:${y}px;width:${w}px">
    <div class="mono" style="font-size:${opcoes.fonteNome || 28}px;font-weight:700;color:var(--cor);margin:0 0 8px 8px">${nome}</div>
    <div class="vcaixa" style="height:${h}px;border-radius:22px;background:#fff;box-shadow:var(--sombra);border:${opcoes.tracejada ? "4px dashed" : "4px solid"} var(--cor-media);display:grid;place-items:center;font-family:var(--mono);font-weight:700;font-size:${fonte}px;color:var(--texto)"><span class="val" style="display:inline-block">${valor}</span></div></div>`);
  if (t !== null && t !== undefined) c.entra(e, t, "pop");
  return { e, val: e.querySelector(".val"), caixa: e.querySelector(".vcaixa") };
}

// Formas de fluxograma: terminal, processo, decisao, es, conector.
function formaSVG(tipo, w, h, s = 4) {
  if (tipo === "terminal") return `<ellipse cx="${w / 2}" cy="${h / 2}" rx="${w / 2 - s}" ry="${h / 2 - s}"/>`;
  if (tipo === "processo") return `<rect x="${s}" y="${s}" width="${w - 2 * s}" height="${h - 2 * s}" rx="8"/>`;
  if (tipo === "decisao") return `<polygon points="${w / 2},${s} ${w - s},${h / 2} ${w / 2},${h - s} ${s},${h / 2}"/>`;
  if (tipo === "es") { const k = h * 0.32; return `<polygon points="${k + s},${s} ${w - s},${s} ${w - k - s},${h - s} ${s},${h - s}"/>`; }
  if (tipo === "conector") return `<circle cx="${w / 2}" cy="${h / 2}" r="${Math.min(w, h) / 2 - s}"/>`;
  return "";
}
function forma(c, tipo, html, x, y, w, h, t, opcoes = {}) {
  const e = c.novo(`<div class="abs" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;display:grid;place-items:center;text-align:center;font-size:${opcoes.fonte || 28}px;font-weight:700;line-height:1.15;color:var(--texto)">
    <svg style="position:absolute;left:0;top:0;width:${w}px;height:${h}px;filter:drop-shadow(0 10px 16px rgba(26,34,48,.12))" viewBox="0 0 ${w} ${h}"><g fill="${opcoes.fundo || "#fff"}" stroke="${opcoes.borda || "var(--cor)"}" stroke-width="6" stroke-linejoin="round">${formaSVG(tipo, w, h)}</g></svg>
    <div style="position:relative;padding:0 ${opcoes.pad ?? 18}px">${html}</div></div>`);
  if (t !== null && t !== undefined) c.entra(e, t, opcoes.tipo || "pop");
  return e;
}

// Linha com cotovelos e ponta de seta no fim.
function caminho(c, pts, t, opcoes = {}) {
  const cor = opcoes.cor || "var(--cor)", larg = opcoes.largura || 6, dur = opcoes.dur || 0.6;
  const [x1, y1] = pts[pts.length - 2], [x2, y2] = pts[pts.length - 1];
  const ang = Math.atan2(y2 - y1, x2 - x1), p = 18;
  const a = [x2 - p * Math.cos(ang - 0.45), y2 - p * Math.sin(ang - 0.45)];
  const b = [x2 - p * Math.cos(ang + 0.45), y2 - p * Math.sin(ang + 0.45)];
  const s = c.novo(`<svg class="abs" style="left:0;top:0;width:1920px;height:1080px;pointer-events:none" viewBox="0 0 1920 1080">
    <path class="linha" d="M${pts.map((q) => q.join(" ")).join(" L")}" stroke="${cor}" stroke-width="${larg}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path class="ponta" d="M${a.join(" ")} L${x2} ${y2} L${b.join(" ")}" stroke="${cor}" stroke-width="${larg}" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`);
  c.desenhar(s.querySelector(".linha"), t, dur);
  c.tl.fromTo(s.querySelector(".ponta"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.15, immediateRender: true }, t + dur - 0.1);
  return s;
}

// Etiqueta curta posicionada (rótulos de setas, índices etc.).
function etiqueta(c, html, x, y, t, estilo = "", tipo = "fade") {
  const e = c.novo(`<div class="abs" style="left:${x}px;top:${y}px;font:700 26px var(--sans);color:var(--cor);${estilo}">${html}</div>`);
  if (t !== null && t !== undefined) c.entra(e, t, tipo);
  return e;
}

// Quadro do e-book com rótulo próprio (ex.: “Dica do mestre”).
function quadroCap8(c, tipo, rotulo, html, estilo, t) {
  const e = c.novo(`<div class="quadro ${tipo}"><div class="rotulo">${rotulo}</div><p>${html}</p></div>`, estilo);
  return c.entra(e, t, "direita", 0.7);
}

function sairTodos(c, elementos, t) { elementos.forEach((e) => c.sai(e, t)); }

const VERDE = "#2f8a5b", VERMELHO = "#c2412f", AMBAR = "#c27c0e", MAGENTA = "#a21caf";
const celulaVF = (v) => `<span class="mono" style="font-weight:800;color:${v === "V" ? VERDE : VERMELHO}">${v}</span>`;

// ================================================================ Roteiro
const CENAS_CAP8 = [
  // ------------------------------------------------------------ Abertura
  {
    id: "abertura",
    visual: "Bit grande à esquerda acena. À direita surgem o rótulo “Capítulo 8” e o título “Lógica de Programação”. Um roteiro de 5 tópicos aparece item por item, cada um na frase que o anuncia. Na última frase, Bit dá um pulinho.",
    secao: "Abertura",
    bit: BIT_GRANDE,
    falas: [
      "Olá! Eu sou o Bit, e chegamos ao último capítulo da série.",
      "Agora, é a vez da Lógica de Programação: a forma de pensar que vem antes de qualquer código.",
      "Você vai ver o que é um algoritmo, o pseudocódigo e o fluxograma.",
      "Depois, variáveis, operadores e a tabela-verdade, além das estruturas de decisão e de repetição.",
      "E, para fechar, vetores, funções, recursividade, algoritmos clássicos e o Python.",
      "Vamos lá?",
    ],
    montar(c) {
      const em = quando(c, this);
      c.bit.acenar(c.t(0, 0.2));
      c.titulo("Capítulo 8", "Lógica de<br>Programação", { left: 900, top: 190 }, c.t(1));
      c.lista([
        "<b>Algoritmos</b>, pseudocódigo e fluxogramas",
        "<b>Variáveis</b>, <b>operadores</b> e tabela-verdade",
        "<b>Decisão</b>, <b>repetição</b> e teste de mesa",
        "<b>Vetores</b>, <b>funções</b> e recursividade",
        "<b>Algoritmos clássicos</b> e <b>Python</b>",
      ], { left: 900, top: 520, width: 900 }, [c.t(2), c.t(3), em(3, "além das"), c.t(4), em(4, "algoritmos clássicos")]);
      c.bit.pular(c.t(5));
    },
  },

  // ------------------------------------------------ Lógica e algoritmos
  {
    id: "logica",
    visual: "Título “O que é lógica de programação?”. A definição aparece com “correta, clara e eficiente” marcados. Em seguida, a figura da estrutura base de um algoritmo: Entrada → Processamento → Decisão → Saída, com setas, e a legenda “Antes do código, existe o raciocínio”. Faixa “Lógica primeiro → qualquer linguagem fica mais fácil” e, por fim, o quadro azul “Resumo estratégico”.",
    secao: "Lógica e algoritmos",
    bit: BIT_CANTO,
    falas: [
      "Afinal, o que é lógica de programação?",
      "É a capacidade de pensar, organizar e descrever os passos para resolver um problema de forma correta, clara e eficiente.",
      "Antes de Python, Java ou qualquer linguagem, existe a lógica por trás da solução. Programar começa entendendo o problema.",
      "Por isso, quem domina a lógica aprende qualquer linguagem com mais facilidade.",
      "Resumo estratégico: a linguagem é a ferramenta; a lógica é a estrutura mental da solução.",
    ],
    montar(c) {
      const em = quando(c, this);
      c.titulo("Lógica de programação", "O que é lógica de programação?", { left: 140, top: 150 }, c.t(0), { medio: true });
      c.texto("<b>Pensar</b>, <b>organizar</b> e <b>descrever</b> uma sequência de passos para resolver um problema de forma <b class=\"marca-texto\">correta</b>, <b class=\"marca-texto\">clara</b> e <b class=\"marca-texto\">eficiente</b>.", { left: 140, top: 310, width: 1480 }, c.t(1));
      const passos = [["Entrada", "teclado"], ["Processamento", "engrenagem"], ["Decisão", "decisao"], ["Saída", "monitor"]];
      passos.forEach((p, i) => {
        const x = 140 + i * 370;
        const e = c.novo(`<div class="no" style="left:${x}px;top:470px;width:300px;height:210px">
          <div class="rotulo" style="position:absolute;left:22px;top:16px;font-size:24px">${i + 1}</div>${icone(p[1])}<strong style="font-size:32px">${p[0]}</strong></div>`);
        e.querySelector(".icone").style.cssText = "width:84px;height:84px;margin-bottom:12px";
        c.entra(e, em(2, "existe a lógica", i * 0.5), "pop");
        if (i > 0) c.seta(x - 62, 575, x - 10, 575, em(2, "existe a lógica", i * 0.5 - 0.2), { largura: 6 });
      });
      const leg = c.texto("Antes do código, existe o <b>raciocínio</b>.", { left: 140, top: 710 }, em(2, "Programar começa"));
      c.chave("Lógica primeiro → <em>qualquer linguagem</em> fica mais fácil", em(3, "aprende"), c.t(4) - 0.3);
      c.sai(leg, c.t(4) - 0.4);
      c.quadro("resumo", "A <b>linguagem</b> é a ferramenta; a <b>lógica</b> é a estrutura mental da solução.", { left: 140, top: 730, width: 1380 }, c.t(4));
    },
  },
  {
    id: "cafe",
    visual: "Quatro cartões numerados entram na ordem da narração, como uma receita: 01 Pegar os ingredientes (pacote), 02 Preparar o ambiente (chaleira), 03 Executar a sequência (relógio) e 04 Obter o resultado (xícara de café). Faixa final: “Computador: instruções detalhadas, na ordem correta”.",
    secao: "Lógica e algoritmos",
    bit: BIT_CANTO,
    falas: [
      "Pense em fazer café. Primeiro, você separa água, filtro e pó. Depois, esquenta a água e organiza o filtro.",
      "Em seguida, despeja a água e espera o café passar. E o café pronto é a saída da sequência.",
      "No computador é igual: ele precisa de instruções detalhadas, na ordem correta.",
    ],
    montar(c) {
      const em = quando(c, this);
      c.titulo("Exemplo do dia a dia", "Fazer café é um algoritmo", { left: 140, top: 150 }, c.t(0), { medio: true });
      const passos = [
        ["pacote", "Pegar os ingredientes", "Água, filtro e pó de café.", em(0, "Primeiro")],
        ["chaleira", "Preparar o ambiente", "Esquentar a água e organizar o filtro.", em(0, "Depois")],
        ["relogio", "Executar a sequência", "Despejar a água e esperar o café passar.", c.t(1)],
        ["cafe", "Obter o resultado", "O café pronto é a <b>saída</b>.", em(1, "E o café pronto")],
      ];
      passos.forEach((p, i) => {
        const e = c.novo(`<div class="cartao" style="left:${140 + i * 415}px;top:320px;width:385px;height:420px;padding:34px">
          <div class="rotulo">Passo 0${i + 1}</div>${icone(p[0])}<h3 style="font-size:34px">${p[1]}</h3><p style="font-size:28px">${p[2]}</p></div>`);
        e.querySelector(".icone").style.margin = "18px 0 18px";
        c.entra(e, p[3], "baixo");
      });
      c.chave("Computador: instruções <em>detalhadas</em>, na <em>ordem correta</em>", c.t(2));
    },
  },
  {
    id: "algoritmo",
    visual: "Título “O que é um algoritmo?” e a definição. Quatro cartões de características entram na ordem falada: Claro (alvo), Ordenado (lista numerada), Executável (engrenagem) e Finito (bandeira de chegada). Depois, o título muda para “Pseudocódigo” e surge a figura Problema (entender) → Pseudocódigo (organizar) → Código real (implementar), ligada por setas.",
    secao: "Lógica e algoritmos",
    bit: BIT_CANTO,
    falas: [
      "Essa sequência de passos tem um nome: algoritmo.",
      "Um algoritmo é uma sequência finita, ordenada e lógica de passos para resolver um problema.",
      "Ele deve ser claro, sem ambiguidades; ordenado; executável, com ações possíveis; e finito, com começo, meio e fim.",
      "Uma forma de escrevê-lo é o pseudocódigo: uma escrita estruturada, que não depende da sintaxe de nenhuma linguagem.",
      "Primeiro, você entende o problema; depois, organiza a solução em pseudocódigo; e, por fim, implementa no código real.",
    ],
    montar(c) {
      const em = quando(c, this);
      const t1 = c.titulo("Algoritmo", "O que é um algoritmo?", { left: 140, top: 150 }, c.t(0), { medio: true });
      const def = c.texto("Sequência <b class=\"marca-texto\">finita</b>, <b class=\"marca-texto\">ordenada</b> e <b class=\"marca-texto\">lógica</b> de passos para resolver um problema.", { left: 140, top: 320, width: 1480 }, c.t(1));
      const caracts = [
        ["alvo", "Claro", "Sem ambiguidades.", em(2, "claro")],
        ["ordem", "Ordenado", "Cada passo respeita a sequência.", em(2, "ordenado")],
        ["engrenagem", "Executável", "Ações que podem ser realizadas.", em(2, "executável")],
        ["bandeira", "Finito", "Começo, meio e fim.", em(2, "finito")],
      ];
      const cartoes = caracts.map((k, i) => c.cartao({ icone: k[0], titulo: k[1], texto: k[2] }, { left: 140 + i * 415, top: 440, width: 385, height: 320 }, k[3]));
      sairTodos(c, [t1, def, ...cartoes], c.t(3) - 0.4);

      c.titulo("Pseudocódigo", "Do pensamento ao código", { left: 140, top: 150 }, c.t(3), { medio: true });
      c.texto("Escrita <b>estruturada</b> da lógica, <b>sem depender</b> da sintaxe de uma linguagem.", { left: 140, top: 320, width: 1480 }, c.t(3, 0.8));
      const xs = [140, 720, 1300];
      [
        { icone: "lampada", titulo: "Problema", texto: "entender" },
        { icone: "documento", titulo: "Pseudocódigo", texto: "organizar" },
        { icone: "codigo", titulo: "Código real", texto: "implementar" },
      ].forEach((n, i) => c.no(n, { left: xs[i], top: 450, width: 440, height: 300 }, em(4, ["entende", "organiza", "implementa"][i], -0.3)));
      c.seta(590, 600, 710, 600, em(4, "organiza", -0.5));
      c.seta(1170, 600, 1290, 600, em(4, "implementa", -0.5));
    },
  },
  {
    id: "soma",
    visual: "À esquerda, o pseudocódigo “Somar dois números” com realce de sintaxe; as linhas acendem conforme a narração. À direita, três cartões entram um por frase: Entrada (ler nota, nome, idade), Processamento (somar, comparar, dividir, verificar condição) e Saída (mostrar média, situação, mensagem). No fim, quadro verde “Dica do mestre”: o que entra? o que acontece? o que sai?",
    secao: "Lógica e algoritmos",
    bit: BIT_CANTO,
    falas: [
      "Veja um exemplo em pseudocódigo: somar dois números.",
      "Na entrada, o algoritmo pede e lê os dois números.",
      "No processamento, soma recebe número um mais número dois. A seta indica atribuição.",
      "E, na saída, escreve o resultado na tela.",
      "Quase todo algoritmo tem essas três partes: a entrada recebe dados, o processamento manipula, e a saída exibe o resultado.",
      "Dica do mestre: quando travar, pergunte: o que entra? O que acontece com isso? O que sai no final?",
    ],
    montar(c) {
      const em = quando(c, this);
      c.titulo("Entrada, processamento e saída", "Exemplo: somar dois números", { left: 140, top: 150 }, c.t(0), { medio: true });
      const cod = pseudo(c, [
        "INÍCIO",
        '    ESCREVA "Digite o primeiro número:"',
        "    LEIA numero1",
        '    ESCREVA "Digite o segundo número:"',
        "    LEIA numero2",
        "    soma <- numero1 + numero2",
        '    ESCREVA "A soma é: ", soma',
        "FIM",
      ], { left: 140, top: 320, width: 800 }, c.t(0, 1));
      realce(c, cod.ln.slice(1, 5), em(1, "o algoritmo"), c.f(1));
      realce(c, cod.ln[5], c.t(2), c.f(2));
      realce(c, cod.ln[6], c.t(3), c.f(3));
      const partes = [
        ["Entrada", "Recebe dados do usuário ou do sistema.", "ler nota, nome, idade", c.t(1)],
        ["Processamento", "Manipula os dados recebidos.", "somar, comparar, dividir, verificar condição", c.t(2)],
        ["Saída", "Exibe o resultado final.", "mostrar média, situação, mensagem", c.t(3)],
      ];
      const cards = partes.map((p, i) => {
        const e = c.novo(`<div class="cartao" style="left:1000px;top:${320 + i * 160}px;width:560px;height:150px;padding:18px 26px;border-left:10px solid var(--cor)">
          <h3 style="font-size:32px;margin:0 0 4px">${p[0]}</h3><p style="font-size:23px;line-height:1.3">${p[1]}<br><i>${p[2]}</i></p></div>`);
        return c.entra(e, p[3], "direita");
      });
      c.destaque(cards[0], em(4, "a entrada"));
      c.destaque(cards[1], em(4, "o processamento"));
      c.destaque(cards[2], em(4, "e a saída"));
      quadroCap8(c, "dica", "Dica do mestre", "O que <b>entra</b>? O que <b>acontece</b> com isso? O que <b>sai</b> no final?", { left: 140, top: 812, width: 1400, padding: "30px 44px" }, c.t(5));
    },
  },

  // ------------------------------------------- Fluxogramas e variáveis
  {
    id: "fluxograma",
    visual: "Grade de seis cartões com os símbolos do fluxograma desenhados, entrando na ordem falada: Terminal (oval), Processo (retângulo), Decisão (losango), Entrada/saída (paralelogramo), Conector (círculo) e Linha de fluxo (seta). No fim, o cartão do losango ganha contorno e destaque, e entra o quadro verde “Memorize”.",
    secao: "Fluxogramas e variáveis",
    bit: BIT_CANTO,
    falas: [
      "Outra forma de representar um algoritmo é o fluxograma: símbolos ligados por setas. E as provas cobram o significado de cada um.",
      "O oval, ou terminal, marca o início ou o fim. O retângulo é o processo: um cálculo ou uma atribuição.",
      "O losango é a decisão: um teste lógico, com saídas sim e não.",
      "O paralelogramo é a entrada ou saída de dados. O círculo é o conector, que liga partes do fluxograma. E a seta indica a ordem de execução.",
      "Memorize: decisão é o losango, onde o fluxo se divide em dois caminhos.",
    ],
    montar(c) {
      const em = quando(c, this);
      c.titulo("Fluxogramas", "Os símbolos do fluxograma", { left: 140, top: 150 }, c.t(0), { medio: true });
      const seta = `<line x1="14" y1="50" x2="140" y2="50" stroke="var(--cor)" stroke-width="7" stroke-linecap="round"/><path d="M118 30 L146 50 L118 70" stroke="var(--cor)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
      const simbolos = [
        ["terminal", "Terminal", "oval", "início ou fim", c.t(1)],
        ["processo", "Processo", "retângulo", "cálculo ou atribuição", em(1, "O retângulo")],
        ["decisao", "Decisão", "losango", "teste lógico: sim / não", c.t(2)],
        ["es", "Entrada/saída", "paralelogramo", "leitura ou exibição", c.t(3)],
        ["conector", "Conector", "círculo", "liga partes do fluxo", em(3, "O círculo")],
        ["seta", "Linha de fluxo", "seta", "ordem de execução", em(3, "E a seta")],
      ];
      const cards = simbolos.map((s, i) => {
        const col = i % 3, lin = Math.floor(i / 3);
        const desenho = s[0] === "seta" ? seta : `<g fill="var(--cor-suave)" stroke="var(--cor)" stroke-width="6" stroke-linejoin="round">${formaSVG(s[0] === "conector" ? "conector" : s[0], 160, 100)}</g>`;
        const e = c.novo(`<div class="cartao" style="left:${140 + col * 475}px;top:${320 + lin * 220}px;width:455px;height:196px;padding:24px;display:flex;align-items:center;gap:22px">
          <svg viewBox="0 0 160 100" style="width:160px;height:100px;flex-shrink:0">${desenho}</svg>
          <div><div class="rotulo" style="font-size:20px">${s[2]}</div><h3 style="font-size:32px;margin:6px 0 4px">${s[1]}</h3><p style="font-size:24px;line-height:1.3">${s[3]}</p></div></div>`);
        return c.entra(e, s[4], "pop");
      });
      c.tl.set(cards[2], { outline: "6px solid var(--cor)" }, c.t(4));
      c.destaque(cards[2], c.t(4, 0.2));
      c.quadro("dica", "Decisão = <b>losango</b>: é nele que o fluxo se divide em <b>dois caminhos</b>.", { left: 140, top: 790, width: 1380 }, c.t(4, 0.4));
    },
  },
  {
    id: "variaveis",
    visual: "Definição de variável. Caixas com etiqueta surgem uma a uma: idade = 20 (Inteiro: 5 · 18 · 120), nota = 8.5 (Real: 7.5 · 1.85 · 99.99), nome = \"Gustavo\" (Texto) e aprovado = VERDADEIRO (Lógico), cada uma com a atribuição em pseudocódigo embaixo. Depois, quatro faixas de regras de nomes: ✗ nota final / ✓ nota_final, ✓ notaFinal; palavras reservadas riscadas (SE, ENQUANTO, if, while); Nota ≠ nota; e a constante PI <- 3.14 com cadeado.",
    secao: "Fluxogramas e variáveis",
    bit: BIT_CANTO,
    falas: [
      "Variáveis são espaços de memória com valores que podem ser usados e alterados durante a execução.",
      "Pense em uma caixa com etiqueta: o nome fica na etiqueta, e o valor fica dentro.",
      "O tipo inteiro guarda números como cinco, dezoito ou cento e vinte. O real tem parte decimal, como sete e meio.",
      "O texto vem entre aspas, como um nome. E o lógico só tem dois valores: verdadeiro ou falso.",
      { texto: "Nos nomes, comece com letra ou sublinhado, sem espaços: nota_final ou notaFinal.", falar: "Nos nomes, comece com letra ou sublinhado, sem espaços: nota sublinhado final, ou nota final, tudo junto." },
      { texto: "Palavras reservadas, como SE ou while, são proibidas. E, em muitas linguagens, Nota e nota são variáveis diferentes.", falar: "Palavras reservadas, como se ou uáil, são proibidas. E, em muitas linguagens, Nota, com N maiúsculo, e nota, com N minúsculo, são variáveis diferentes." },
      { texto: "Já a constante não muda durante a execução, como PI recebe três vírgula catorze." },
    ],
    montar(c) {
      const em = quando(c, this);
      c.titulo("Variáveis e tipos de dados", "Variáveis", { left: 140, top: 150 }, c.t(0), { medio: true });
      const def = c.texto("Espaço de <b>memória</b> que guarda um valor que pode ser <b>usado</b> e <b>alterado</b>.", { left: 140, top: 310, width: 1480 }, c.t(0, 1.5));
      const tipos = [
        ["Inteiro", "idade", "20", "5 · 18 · 120", "idade &lt;- 20", c.t(1), c.t(2), 52],
        ["Real", "nota", "8.5", "7.5 · 1.85 · 99.99", "nota &lt;- 8.5", em(2, "O real"), em(2, "O real"), 52],
        ["Texto", "nome", "\"Gustavo\"", "\"Gustavo\" · \"Aluno aprovado\"", "nome &lt;- \"Gustavo\"", c.t(3), c.t(3), 40],
        ["Lógico", "aprovado", "VERDADEIRO", "VERDADEIRO ou FALSO", "aprovado &lt;- VERDADEIRO", em(3, "E o lógico"), em(3, "E o lógico"), 34],
      ];
      const parteA = [def];
      tipos.forEach((k, i) => {
        const x = 140 + i * 370;
        const cx = caixaVar(c, k[1], "", x, 450, k[5], { w: 340, h: 120, fonte: k[7] });
        if (i === 0) {
          mudarTexto(c, cx.val, "", k[2], em(1, "e o valor"));
        } else {
          cx.val.innerHTML = k[2];
        }
        const pil = c.novo(`<div class="abs pilula" style="left:${x}px;top:380px">${k[0]}</div>`);
        c.entra(pil, k[6], "pop");
        const ex = c.novo(`<div class="abs" style="left:${x + 6}px;top:640px;width:340px;font-size:24px;color:var(--texto-suave)">${k[3]}</div>`);
        c.entra(ex, k[6] + 0.4, "fade");
        const cod = c.novo(`<div class="abs mono" style="left:${x + 6}px;top:690px;width:340px;font-size:24px;font-weight:700;color:var(--texto)">${pseudoHTML(k[4].replace("&lt;", "<"))}</div>`);
        c.entra(cod, k[6] + 0.8, "fade");
        parteA.push(cx.e, pil, ex, cod);
      });
      sairTodos(c, parteA, c.t(4) - 0.4);

      const regra = (y, esquerda, direita, t) => {
        const e = c.novo(`<div class="cartao" style="left:140px;top:${y}px;width:1400px;height:120px;padding:0 36px;display:flex;align-items:center;justify-content:space-between;gap:30px">
          <div style="font-size:32px;color:var(--texto);white-space:nowrap">${esquerda}</div><div style="display:flex;gap:18px;align-items:center">${direita}</div></div>`);
        return c.entra(e, t, "baixo");
      };
      const tk = (txt, ok) => `<span class="mono" style="white-space:nowrap;font-size:28px;font-weight:700;padding:8px 18px;border-radius:14px;background:${ok === true ? "#e9f6ef" : ok === false ? "#fbe9e6" : "var(--cor-suave)"};color:${ok === true ? VERDE : ok === false ? VERMELHO : "var(--cor)"};${ok === false ? "text-decoration:line-through" : ""}">${ok === true ? "✓ " : ok === false ? "✗ " : ""}${txt}</span>`;
      regra(330, "Começa com <b>letra</b> ou <b>_</b>, <b>sem espaços</b>", tk("nota final", false) + tk("nota_final", true) + tk("notaFinal", true), c.t(4));
      regra(470, "Não pode ser <b>palavra reservada</b>", tk("SE", false) + tk("ENQUANTO", false) + tk("if", false) + tk("while", false), c.t(5));
      regra(610, "Maiúsculas e minúsculas <b>fazem diferença</b>", tk("Nota") + `<span style="font-size:40px;font-weight:800;color:var(--texto-fraco)">≠</span>` + tk("nota"), em(5, "E, em muitas"));
      const cons = regra(750, `<span style="display:inline-flex;align-items:center;gap:18px">${icone("cadeado")}<span><b>Constante</b>: não muda durante a execução</span></span>`, `<span class="mono" style="font-size:34px;font-weight:700">PI &lt;- 3.14</span>`, c.t(6));
      cons.querySelector(".icone").style.cssText = "width:60px;height:60px";
    },
  },

  // ---------------------------------------------------------- Operadores
  {
    id: "operadores",
    visual: "Três cartões: Aritméticos (+ - * / DIV MOD), Relacionais (= <> > < >= <=, com “resultado: VERDADEIRO ou FALSO”) e Lógicos (E, OU, NÃO). Cada operador aparece como peça quando é citado.",
    secao: "Operadores",
    bit: BIT_CANTO,
    falas: [
      "Os operadores servem para calcular, comparar e montar expressões lógicas. São três grupos.",
      "Os aritméticos fazem as contas: soma, subtração, multiplicação, divisão, e ainda o DIV e o MOD.",
      "Os relacionais comparam valores: igual, diferente, maior, menor, maior ou igual e menor ou igual. E o resultado é sempre verdadeiro ou falso.",
      "Os lógicos, E, OU e NÃO, combinam ou invertem condições.",
    ],
    montar(c) {
      const em = quando(c, this);
      c.titulo("Operadores", "Calcular, comparar e combinar", { left: 140, top: 150 }, c.t(0), { medio: true });
      const grupos = [
        ["Aritméticos", "fazem as contas", ["+", "-", "*", "/", "DIV", "MOD"], c.t(1), ["soma", "subtração", "multiplicação", "divisão", "DIV", "MOD"], 1],
        ["Relacionais", "comparam valores", ["=", "&lt;&gt;", "&gt;", "&lt;", "&gt;=", "&lt;="], c.t(2), ["igual", "diferente", "maior,", "menor,", "maior ou igual", "menor ou igual"], 2],
        ["Lógicos", "combinam ou invertem condições", ["E", "OU", "NÃO"], c.t(3), null, 3],
      ];
      grupos.forEach((g, gi) => {
        const x = 140 + gi * 475;
        const card = c.novo(`<div class="cartao" style="left:${x}px;top:320px;width:455px;height:420px;padding:34px">
          <div class="rotulo">${g[0]}</div><p style="margin-top:8px;font-size:28px">${g[1]}</p>
          <div class="pecas" style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:26px"></div></div>`);
        c.entra(card, g[3], "baixo");
        const pecas = card.querySelector(".pecas");
        g[2].forEach((op, i) => {
          const p = el8(`<div class="mono" style="height:${gi === 2 ? 120 : 84}px;border-radius:16px;background:var(--cor-suave);color:var(--cor);display:grid;place-items:center;font-size:${op.length > 3 ? 30 : 36}px;font-weight:800">${op}</div>`);
          pecas.appendChild(p);
          const t = g[4] ? em(g[5], g[4][i], -0.1) : em(3, ["E,", "OU", "NÃO"][i]);
          c.entra(p, Math.max(g[3] + 0.3, t), "pop");
        });
        if (gi === 2) pecas.style.gridTemplateColumns = "repeat(3,1fr)";
      });
      const res = c.novo(`<div class="abs" style="left:${140 + 475 + 34}px;top:650px;font-size:26px;font-weight:700;color:var(--texto)">resultado: <span style="color:${VERDE}">VERDADEIRO</span> ou <span style="color:${VERMELHO}">FALSO</span></div>`);
      c.entra(res, em(2, "E o resultado"), "baixo");
    },
  },
  {
    id: "divmod",
    visual: "Duas pílulas: “DIV → quociente” e “MOD → resto”. Dezessete bolinhas surgem; três grupos de cinco acendem na cor do capítulo, numerados 1, 2, 3, e aparece “17 DIV 5 = 3”. As duas que sobram ficam âmbar e aparece “17 MOD 5 = 2”. Por fim, cartão “numero MOD 2 = 0 → par”.",
    secao: "Operadores",
    bit: BIT_CANTO,
    falas: [
      "DIV e MOD caem muito em prova. Na divisão inteira, o DIV devolve o quociente, e o MOD devolve o resto.",
      "Em dezessete dividido por cinco, o cinco cabe três vezes. Então, dezessete DIV cinco é três.",
      "E sobram dois. Então, dezessete MOD cinco é dois.",
      "Uso clássico: um número é par quando número MOD dois é igual a zero.",
    ],
    montar(c) {
      const em = quando(c, this);
      c.titulo("Divisão inteira", "DIV e MOD", { left: 140, top: 150 }, c.t(0), { medio: true });
      c.entra(c.novo(`<div class="abs pilula" style="left:140px;top:320px;font-size:34px"><span class="mono">DIV</span> → quociente</div>`), em(0, "o DIV devolve"), "pop");
      c.entra(c.novo(`<div class="abs pilula" style="left:520px;top:320px;font-size:34px;background:#fdf3e1;color:${AMBAR}"><span class="mono">MOD</span> → resto</div>`), em(0, "e o MOD"), "pop");
      const bolas = [];
      for (let k = 0; k < 17; k++) {
        const g = Math.floor(k / 5), j = k % 5;
        const x = 140 + g * 402 + j * 74;
        const b = c.novo(`<div class="abs" style="left:${x}px;top:450px;width:60px;height:60px;border-radius:50%;background-color:#e8d2eb"></div>`);
        c.entra(b, c.t(1, 0.3 + k * 0.05), "pop");
        bolas.push(b);
      }
      for (let g = 0; g < 3; g++) {
        const t = em(1, "cabe três", g * 0.6);
        c.tl.to(bolas.slice(g * 5, g * 5 + 5), { backgroundColor: MAGENTA, duration: 0.3 }, t);
        const chaveG = c.novo(`<div class="abs" style="left:${140 + g * 402}px;top:528px;width:356px;height:20px;border:5px solid var(--cor);border-top:none;border-radius:0 0 14px 14px"></div>`);
        c.entra(chaveG, t, "fade");
        etiqueta(c, `${g + 1}`, 140 + g * 402 + 166, 556, t, "font-size:32px", "pop");
      }
      const dv = c.novo(`<div class="abs mono" style="left:140px;top:640px;font-size:60px;font-weight:700">17 <span style="color:var(--cor)">DIV</span> 5 = <span style="color:var(--cor)">3</span></div>`);
      c.entra(dv, em(1, "Então"), "baixo");
      c.tl.to(bolas.slice(15), { backgroundColor: AMBAR, duration: 0.3 }, c.t(2, 0.2));
      const chaveR = c.novo(`<div class="abs" style="left:1346px;top:528px;width:134px;height:20px;border:5px solid ${AMBAR};border-top:none;border-radius:0 0 14px 14px"></div>`);
      c.entra(chaveR, c.t(2, 0.2), "fade");
      etiqueta(c, "resto", 1366, 556, c.t(2, 0.2), `color:${AMBAR};font-size:30px`, "pop");
      const md = c.novo(`<div class="abs mono" style="left:820px;top:640px;font-size:60px;font-weight:700">17 <span style="color:${AMBAR}">MOD</span> 5 = <span style="color:${AMBAR}">2</span></div>`);
      c.entra(md, em(2, "Então"), "baixo");
      const par = c.novo(`<div class="cartao" style="left:140px;top:780px;width:1300px;padding:28px 40px;display:flex;align-items:center;gap:30px">
        <span class="pilula">uso clássico</span><span class="mono" style="font-size:44px;font-weight:700">numero <span style="color:var(--cor)">MOD</span> 2 = 0</span>
        <span style="font-size:44px;font-weight:800;color:var(--texto-fraco)">→</span><span style="font-size:44px;font-weight:800;color:${VERDE}">par</span></div>`);
      c.entra(par, c.t(3), "baixo");
    },
  },
  {
    id: "tabela-verdade",
    visual: "Tabela-verdade montada célula a célula, com V em verde e F em vermelho: colunas A e B; depois A E B e A OU B, linha por linha; por fim, a coluna NÃO A. À direita, quadro verde “Memorize”.",
    secao: "Operadores",
    bit: BIT_CANTO,
    falas: [
      "Os operadores lógicos seguem a tabela-verdade. Considere duas condições, A e B.",
      "Com A e B verdadeiras, A E B é verdadeiro, e A OU B também.",
      "Se só uma é verdadeira, o E já dá falso, mas o OU continua verdadeiro; e, com as duas falsas, os dois dão falso.",
      "O NÃO inverte: se A é verdadeiro, NÃO A é falso; se A é falso, NÃO A é verdadeiro.",
      "Memorize: o E só é verdadeiro se tudo for verdadeiro; o OU só é falso se tudo for falso; e o NÃO inverte.",
    ],
    montar(c) {
      const em = quando(c, this);
      c.titulo("Operadores lógicos", "Tabela-verdade", { left: 140, top: 150 }, c.t(0), { medio: true });
      const cols = [["A", 150], ["B", 150], ["A E B", 220], ["A OU B", 220], ["NÃO A", 220]];
      const linhas = [["V", "V", "V", "V", "F"], ["V", "F", "F", "V", "F"], ["F", "V", "F", "V", "V"], ["F", "F", "F", "F", "V"]];
      const x0 = 140, y0 = 320, h = 96;
      const xs = []; let acc = x0; cols.forEach((k) => { xs.push(acc); acc += k[1] + 8; });
      const tCol = [em(0, "Considere"), em(0, "Considere"), em(1, "A E B"), em(1, "A OU B"), c.t(3)];
      cols.forEach((k, j) => {
        const e = c.novo(`<div class="abs mono" style="left:${xs[j]}px;top:${y0}px;width:${k[1]}px;height:${h - 8}px;border-radius:16px;background:var(--cor);color:#fff;display:grid;place-items:center;font-size:30px;font-weight:800">${k[0]}</div>`);
        c.entra(e, tCol[j], "pop");
      });
      const tempo = (i, j) => {
        if (j < 2) return em(0, "A e B.", -0.6 + i * 0.25 + j * 0.1);
        if (j === 2) return i === 0 ? em(1, "A E B") : i === 3 ? em(2, "com as duas") : em(2, "o E já", (i - 1) * 0.3);
        if (j === 3) return i === 0 ? em(1, "A OU B") : i === 3 ? em(2, "com as duas", 0.4) : em(2, "mas o OU", (i - 1) * 0.3);
        return i < 2 ? em(3, "se A é verdadeiro", i * 0.3) : em(3, "se A é falso", (i - 2) * 0.3);
      };
      linhas.forEach((l, i) => l.forEach((v, j) => {
        const e = c.novo(`<div class="abs mono" style="left:${xs[j]}px;top:${y0 + (i + 1) * h}px;width:${cols[j][1]}px;height:${h - 8}px;border-radius:16px;background:${v === "V" ? "#e9f6ef" : "#fbe9e6"};color:${v === "V" ? VERDE : VERMELHO};display:grid;place-items:center;font-size:44px;font-weight:800">${v}</div>`);
        c.entra(e, tempo(i, j), "pop");
      }));
      const qm = c.quadro("dica", "<b>E</b>: só é V se <b>tudo</b> for V.<br><b>OU</b>: só é F se <b>tudo</b> for F.<br><b>NÃO</b>: inverte o valor.", { left: 1190, top: 320, width: 600, padding: "36px 40px" }, c.t(4));
      qm.querySelector("p").style.fontSize = "32px";
    },
  },
  {
    id: "precedencia",
    visual: "À esquerda, a ordem de precedência numerada de 1 a 6: parênteses; aritméticos (* / DIV MOD antes de + -); relacionais; NÃO; E; OU. À direita, a expressão (x + 2 * 3 > y) OU (y MOD 3 = 1) com x = 4 e y = 10, avaliada em dois cartões (FALSO e VERDADEIRO) e o resultado “FALSO OU VERDADEIRO → VERDADEIRO”. No fim, o lado direito dá lugar ao quadro âmbar “Pegadinha de banca: 10 > 10 é falso”.",
    secao: "Operadores",
    bit: BIT_CANTO,
    falas: [
      "Quando uma expressão mistura operadores, vale a precedência. Primeiro, os parênteses. Depois, os aritméticos.",
      "Multiplicação, divisão, DIV e MOD vêm antes de soma e subtração. Em seguida, os relacionais. Por último, NÃO, depois E, depois OU.",
      "Vamos avaliar esta expressão, com x igual a quatro e y igual a dez.",
      "No primeiro parêntese, a multiplicação vem antes: dois vezes três dá seis, e quatro mais seis, dez. Dez é maior que dez? Não: falso.",
      "No segundo, dez MOD três é um, e um igual a um é verdadeiro. Falso OU verdadeiro: verdadeiro.",
      "Pegadinha: dez maior que dez é falso; só dez maior ou igual a dez seria verdadeiro. As bancas adoram o limite exato.",
    ],
    montar(c) {
      const em = quando(c, this);
      c.titulo("Ordem de precedência", "Quem é avaliado primeiro?", { left: 140, top: 150 }, c.t(0), { medio: true });
      const itens = [
        ["Parênteses", "", em(0, "Primeiro")],
        ["Aritméticos", "<span class=\"mono\">* / DIV MOD</span> antes de <span class=\"mono\">+ -</span>", em(0, "Depois")],
        ["Relacionais", "<span class=\"mono\">= &lt;&gt; &gt; &lt; &gt;= &lt;=</span>", em(1, "Em seguida")],
        ["NÃO", "", em(1, "NÃO")],
        ["E", "", em(1, "depois E")],
        ["OU", "", em(1, "depois OU")],
      ];
      let y = 320;
      const linhas = itens.map((k, i) => {
        const alto = k[1] ? 104 : 66;
        const e = c.novo(`<div class="cartao" style="left:140px;top:${y}px;width:540px;height:${alto}px;padding:0 24px;display:flex;align-items:center;gap:20px">
          <span style="flex-shrink:0;width:42px;height:42px;border-radius:12px;background:var(--cor);color:#fff;display:grid;place-items:center;font-weight:800;font-size:24px">${i + 1}</span>
          <div><div style="font-size:30px;font-weight:800">${k[0]}</div>${k[1] ? `<div style="font-size:22px;color:var(--texto-suave);margin-top:2px">${k[1]}</div>` : ""}</div></div>`);
        y += alto + 12;
        return c.entra(e, k[2], "esquerda");
      });
      const expr = c.novo(`<div class="cartao mono" style="left:740px;top:320px;width:800px;padding:24px 30px;font-size:30px;font-weight:700;text-align:center">${pseudoHTML("(x + 2 * 3 > y) OU (y MOD 3 = 1)")}</div>`);
      c.entra(expr, c.t(2), "baixo");
      const vars = c.novo(`<div class="abs" style="left:740px;top:420px;display:flex;gap:16px"><span class="pilula mono">x = 4</span><span class="pilula mono">y = 10</span></div>`);
      c.entra(vars, em(2, "com x"), "pop");
      const passo = (y0, l1, l2, cor, t1, t2) => {
        const e = c.novo(`<div class="cartao mono" style="left:740px;top:${y0}px;width:800px;padding:18px 30px;font-size:28px;line-height:1.5">
          <div>${l1}</div><div class="r2" style="font-weight:800;color:${cor}">${l2}</div></div>`);
        c.entra(e, t1, "baixo");
        c.entra(e.querySelector(".r2"), t2, "fade");
        return e;
      };
      c.destaque(linhas[1], em(3, "a multiplicação"));
      const p1 = passo(500, "x + 2 * 3 → 4 + 6 = 10", "10 &gt; 10 → FALSO", VERMELHO, em(3, "dois vezes"), em(3, "Dez é maior"));
      c.destaque(linhas[2], em(3, "Dez é maior"));
      const p2 = passo(640, "y MOD 3 → 10 MOD 3 = 1", "1 = 1 → VERDADEIRO", VERDE, c.t(4), em(4, "e um igual"));
      const res = c.novo(`<div class="abs mono" style="left:740px;top:790px;font-size:32px;font-weight:800"><span style="color:${VERMELHO}">FALSO</span> <span style="color:var(--cor)">OU</span> <span style="color:${VERDE}">VERDADEIRO</span> → <span class="marca-texto">VERDADEIRO</span></div>`);
      c.entra(res, em(4, "Falso OU"), "zoom");
      c.destaque(linhas[5], em(4, "Falso OU"));
      sairTodos(c, [expr, vars, p1, p2, res], c.t(5) - 0.4);
      quadroCap8(c, "prova", "Pegadinha de banca", "<span class=\"mono\">10 &gt; 10</span> é <b>falso</b>.<br>Só <span class=\"mono\">10 &gt;= 10</span> seria verdadeiro.<br>Cuidado com a condição no <b>limite exato</b>.", { left: 740, top: 360, width: 800 }, c.t(5));
    },
  },

  // ---------------------------------------------- Sequência e decisão
  {
    id: "sequencial",
    visual: "À esquerda, o pseudocódigo da área do retângulo; as linhas acendem em sequência, uma após a outra. À direita, quatro passos ligados por setas entram conforme a narração: Ler base → Ler altura → Calcular área → Exibir resultado.",
    secao: "Sequência e decisão",
    bit: BIT_CANTO,
    falas: [
      "Agora, as estruturas. Na sequencial, as instruções são executadas uma após a outra, na ordem em que aparecem.",
      "Na área do retângulo, o algoritmo lê a base, depois lê a altura, calcula base vezes altura e exibe o resultado.",
    ],
    montar(c) {
      const em = quando(c, this);
      c.titulo("Estrutura sequencial", "Uma instrução após a outra", { left: 140, top: 150 }, c.t(0), { medio: true });
      const cod = pseudo(c, [
        "INÍCIO",
        '    ESCREVA "Digite a base:"',
        "    LEIA base",
        '    ESCREVA "Digite a altura:"',
        "    LEIA altura",
        "    area <- base * altura",
        '    ESCREVA "A área do retângulo é: ", area',
        "FIM",
      ], { left: 140, top: 320, width: 840 }, em(0, "Na sequencial"));
      const t0 = em(0, "uma após");
      cod.ln.forEach((l, i) => realce(c, l, t0 + i * 0.3, t0 + i * 0.3 + 0.35));
      const passos = [["Passo 1", "Ler base", em(1, "lê a base"), [1, 2]], ["Passo 2", "Ler altura", em(1, "depois lê"), [3, 4]], ["Passo 3", "Calcular área", em(1, "calcula"), [5]], ["Passo 4", "Exibir resultado", em(1, "e exibe"), [6]]];
      const tf = [em(1, "depois lê"), em(1, "calcula"), em(1, "e exibe"), c.f(1)];
      passos.forEach((p, i) => {
        const e = c.novo(`<div class="cartao" style="left:1060px;top:${320 + i * 128}px;width:480px;height:96px;padding:0 28px;display:flex;align-items:center;gap:22px">
          <span class="rotulo" style="font-size:22px;flex-shrink:0">${p[0]}</span><h3 style="font-size:32px;margin:0">${p[1]}</h3></div>`);
        c.entra(e, p[2], "direita");
        if (i > 0) c.seta(1300, 320 + i * 128 - 30, 1300, 320 + i * 128 - 4, p[2] - 0.2, { largura: 6, dur: 0.3 });
        realce(c, p[3].map((k) => cod.ln[k]), p[2], tf[i]);
      });
    },
  },
  {
    id: "condicional",
    visual: "À esquerda, o pseudocódigo “maior de idade” com SE/SENÃO; as linhas acendem com a narração. À direita, o fluxograma é montado: paralelogramo “LEIA idade” → losango “idade >= 18?” → saída “sim” (maior de idade) e “não” (menor de idade). No fim, quadro âmbar “Armadilha da banca”: x <- 10 é atribuição, x = 10 é comparação.",
    secao: "Sequência e decisão",
    bit: BIT_CANTO,
    falas: [
      "As estruturas condicionais permitem que o programa tome decisões com base em testes lógicos.",
      "Aqui, o algoritmo lê a idade e testa: ela é maior ou igual a dezoito?",
      "Se for verdadeira, escreve: maior de idade. Se for falsa, segue o outro caminho e escreve: menor de idade.",
      "Armadilha: não confunda x recebe dez com x igual a dez. O primeiro é atribuição; o segundo, comparação.",
    ],
    montar(c) {
      const em = quando(c, this);
      c.titulo("Estruturas condicionais", "O programa toma decisões", { left: 140, top: 150 }, c.t(0), { medio: true });
      const cod = pseudo(c, [
        "INÍCIO",
        '    ESCREVA "Digite sua idade:"',
        "    LEIA idade",
        "    SE idade >= 18 ENTÃO",
        '        ESCREVA "Você é maior de idade."',
        "    SENÃO",
        '        ESCREVA "Você é menor de idade."',
        "    FIMSE",
        "FIM",
      ], { left: 140, top: 320, width: 680 }, c.t(0, 1), { fonte: 24 });
      realce(c, cod.ln.slice(1, 3), c.t(1), em(1, "e testa"));
      realce(c, cod.ln[3], em(1, "e testa"), c.f(1));
      realce(c, cod.ln[4], c.t(2), em(2, "Se for falsa"));
      realce(c, cod.ln.slice(5, 7), em(2, "Se for falsa"), c.f(2));
      forma(c, "es", "<span class=\"mono\" style=\"font-size:26px\"><b style=\"color:var(--cor)\">LEIA</b> idade</span>", 1050, 320, 300, 84, c.t(1));
      caminho(c, [[1200, 408], [1200, 456]], em(1, "e testa", -0.2), { dur: 0.3 });
      forma(c, "decisao", "<span class=\"mono\" style=\"font-size:24px\">idade &gt;= 18?</span>", 1040, 460, 320, 160, em(1, "e testa"), { pad: 0 });
      caminho(c, [[1040, 540], [960, 540], [960, 682]], c.t(2, 0.2));
      etiqueta(c, "sim", 970, 496, c.t(2, 0.3), `color:${VERDE}`);
      forma(c, "es", "maior de idade", 830, 690, 260, 84, em(2, "escreve"), { fonte: 24, pad: 30 });
      caminho(c, [[1360, 540], [1440, 540], [1440, 682]], em(2, "Se for falsa", -0.2));
      etiqueta(c, "não", 1380, 496, em(2, "Se for falsa"), `color:${VERMELHO}`);
      forma(c, "es", "menor de idade", 1310, 690, 260, 84, em(2, "o outro caminho"), { fonte: 24, pad: 30 });
      quadroCap8(c, "prova", "Armadilha da banca", "<span class=\"mono\">x &lt;- 10</span> é <b>atribuição</b>; <span class=\"mono\">x = 10</span> é <b>comparação</b>.", { left: 140, top: 812, width: 1400, padding: "30px 44px" }, c.t(3));
    },
  },
  {
    id: "encadeadas",
    visual: "À esquerda, uma escada de losangos: nota >= 9? → sim: Excelente; não → nota >= 7? → Aprovado; não → nota >= 5? → Recuperação; não → Reprovado. À direita, o pseudocódigo da estrutura ESCOLHA (dia da semana), com CASO 1, CASO 7 e OUTROCASO acendendo na narração.",
    secao: "Sequência e decisão",
    bit: BIT_CANTO,
    falas: [
      "Com mais de duas possibilidades, podemos encadear condições, uma dentro da outra.",
      "Na nota: com nove ou mais, excelente. Senão, com sete ou mais, aprovado. Senão, com cinco ou mais, recuperação. E, se nenhum teste passar, reprovado.",
      "Quando a mesma variável é comparada com vários valores fixos, a estrutura ESCOLHA fica mais limpa que vários SE encadeados.",
      "No dia da semana: no CASO um, escreve domingo; no CASO sete, sábado.",
      "E o OUTROCASO roda quando nenhum caso corresponde ao valor: aqui, dia útil.",
    ],
    montar(c) {
      const em = quando(c, this);
      c.titulo("Condições encadeadas", "Mais de dois caminhos", { left: 140, top: 150 }, c.t(0), { medio: true });
      const testes = [["nota &gt;= 9?", "Excelente", VERDE], ["nota &gt;= 7?", "Aprovado", VERDE], ["nota &gt;= 5?", "Recuperação", AMBAR]];
      const tTeste = [em(0, "encadear"), em(1, "Senão, com sete"), em(1, "Senão, com cinco")];
      const tRes = [em(1, "excelente"), em(1, "aprovado"), em(1, "recuperação")];
      testes.forEach((k, i) => {
        const cy = 380 + i * 150;
        forma(c, "decisao", `<span class="mono" style="font-size:22px">${k[0]}</span>`, 140, cy - 58, 250, 116, tTeste[i], { pad: 0 });
        caminho(c, [[390, cy], [462, cy]], tRes[i] - 0.3, { dur: 0.3 });
        etiqueta(c, "sim", 400, cy - 40, tRes[i] - 0.3, `font-size:22px;color:${VERDE}`);
        c.entra(c.novo(`<div class="abs" style="left:470px;top:${cy - 34}px;width:250px;height:68px;border-radius:999px;background:#fff;box-shadow:var(--sombra);display:grid;place-items:center;font-size:28px;font-weight:800;color:${k[2]}">${k[1]}</div>`), tRes[i], "pop");
        const tDesce = i < 2 ? tTeste[i + 1] - 0.3 : em(1, "E, se nenhum", -0.3);
        caminho(c, [[265, cy + 58], [265, cy + 88]], tDesce, { dur: 0.25 });
        etiqueta(c, "não", 280, cy + 56, tDesce, `font-size:22px;color:${VERMELHO}`);
      });
      c.entra(c.novo(`<div class="abs" style="left:150px;top:${380 + 3 * 150 - 58}px;width:230px;height:68px;border-radius:999px;background:#fbe9e6;display:grid;place-items:center;font-size:28px;font-weight:800;color:${VERMELHO}">Reprovado</div>`), em(1, "E, se nenhum"), "pop");

      etiqueta(c, "ESCOLHA / CASO", 900, 316, c.t(2), "font-size:24px;letter-spacing:.14em");
      const cod = pseudo(c, [
        "LEIA dia",
        "ESCOLHA dia",
        "    CASO 1",
        '        ESCREVA "Domingo"',
        "    CASO 7",
        '        ESCREVA "Sábado"',
        "    OUTROCASO",
        '        ESCREVA "Dia útil"',
        "FIMESCOLHA",
      ], { left: 900, top: 360, width: 600 }, c.t(2, 0.6));
      realce(c, cod.ln[1], em(2, "a estrutura ESCOLHA"), c.f(2));
      realce(c, cod.ln.slice(2, 4), em(3, "no CASO um"), em(3, "no CASO sete"));
      realce(c, cod.ln.slice(4, 6), em(3, "no CASO sete"), c.f(3));
      realce(c, cod.ln.slice(6, 8), c.t(4), c.f(4));
    },
  },

  // ------------------------------------------------------------ Repetição
  {
    id: "enquanto",
    visual: "À esquerda, o pseudocódigo ENQUANTO que conta de 1 a 5. À direita, a caixa da variável contador, o teste “contador <= 5?” com selo V/F e uma tela escura. A cada volta, as linhas acendem: o teste dá V, o número aparece na tela e o contador aumenta. Com 6, o teste dá F e o laço termina. Faixa: “Definir contador → executar e atualizar → encerrar quando a condição falhar”.",
    secao: "Repetição",
    bit: BIT_CANTO,
    falas: [
      "As estruturas de repetição executam um bloco várias vezes, sem reescrever a mesma lógica.",
      "No ENQUANTO, o bloco se repete enquanto a condição for verdadeira. Aqui, ele conta de um até cinco, e o contador começa em um.",
      "A cada volta, testa se o contador é menor ou igual a cinco. Se for, escreve o contador e soma um. Assim, a tela mostra de um a cinco.",
      "Com seis, a condição fica falsa e a repetição termina. Ou seja: definir o contador, executar e atualizar, e encerrar quando a condição falhar.",
    ],
    montar(c) {
      const em = quando(c, this);
      c.titulo("Estruturas de repetição", "ENQUANTO: repete enquanto for verdade", { left: 140, top: 150 }, c.t(0), { medio: true });
      const cod = pseudo(c, [
        "INÍCIO",
        "    contador <- 1",
        "    ENQUANTO contador <= 5 FAÇA",
        "        ESCREVA contador",
        "        contador <- contador + 1",
        "    FIMENQUANTO",
        "FIM",
      ], { left: 140, top: 320, width: 700 }, c.t(1), { fonte: 30 });
      const cx = caixaVar(c, "contador", "1", 900, 320, em(1, "começa em um"), { w: 240, h: 110, fonte: 60 });
      realce(c, cod.ln[1], em(1, "começa em um"), c.t(2));
      const teste = c.novo(`<div class="cartao" style="left:1180px;top:364px;width:360px;height:110px;padding:0 24px;display:flex;align-items:center;justify-content:space-between">
        <span class="mono" style="font-size:28px;font-weight:700">contador &lt;= 5?</span>
        <span class="selo mono" style="width:60px;height:60px;border-radius:14px;display:grid;place-items:center;font-size:34px;font-weight:800;color:#fff;background-color:${VERDE}">V</span></div>`);
      c.entra(teste, c.t(2), "pop");
      const selo = teste.querySelector(".selo");
      const tela = c.novo(`<div class="abs" style="left:900px;top:530px;width:640px;height:190px;border-radius:24px;background:#1a2230;box-shadow:var(--sombra);padding:22px 32px">
        <div style="font:700 22px var(--sans);letter-spacing:.14em;text-transform:uppercase;color:#9aa6bb">Tela</div>
        <div class="saida mono" style="display:flex;gap:44px;margin-top:20px;font-size:64px;font-weight:700;color:#fff"></div></div>`);
      c.entra(tela, c.t(2, 0.3), "baixo");
      const saida = tela.querySelector(".saida");
      const t0 = c.t(2, 1.2), t1 = c.f(2) - 0.2, passo = (t1 - t0) / 5;
      for (let k = 1; k <= 5; k++) {
        const s = t0 + (k - 1) * passo;
        realce(c, cod.ln[2], s, s + passo * 0.3);
        c.destaque(selo, s);
        realce(c, cod.ln[3], s + passo * 0.33, s + passo * 0.62);
        const n = el8(`<span style="display:inline-block">${k}</span>`);
        saida.appendChild(n);
        c.entra(n, s + passo * 0.33, "pop");
        realce(c, cod.ln[4], s + passo * 0.66, s + passo * 0.95);
        mudarTexto(c, cx.val, String(k), String(k + 1), s + passo * 0.7);
      }
      realce(c, cod.ln[2], c.t(3), em(3, "e a repetição"));
      mudarTexto(c, selo, "V", "F", c.t(3, 0.4));
      c.tl.to(selo, { backgroundColor: VERMELHO, duration: 0.2 }, c.t(3, 0.4));
      realce(c, cod.ln[5], em(3, "e a repetição"), c.f(3));
      c.chave("Definir contador → <em>executar e atualizar</em> → encerrar", em(3, "Ou seja"));
    },
  },
  {
    id: "para-repita",
    visual: "No alto, o pseudocódigo PARA da tabuada, com a fileira do contador de 1 a 10 ao lado. Embaixo, o REPITA da senha, com um mini fluxograma: o bloco executa primeiro e só então o losango testa; “não” volta para o bloco, “sim” leva a “Acesso liberado”. Depois, tabela comparando PARA, ENQUANTO e REPITA...ATÉ, linha por linha, e o quadro âmbar “Pegadinha de banca”.",
    secao: "Repetição",
    bit: BIT_CANTO,
    falas: [
      "O PARA é usado quando o número de repetições é definido antes. Na tabuada, o contador vai de um até dez, e cada volta calcula e escreve o resultado.",
      "Já o REPITA executa o bloco primeiro e só testa no final: pede a senha até que ela seja um, dois, três, quatro. Aí, escreve: acesso liberado.",
      "Comparando: o PARA tem o número de repetições definido antes de começar. É ideal para tabuadas e vetores.",
      "O ENQUANTO testa no início: se a condição já começar falsa, o bloco pode não executar nenhuma vez.",
      "O REPITA testa no final: executa pelo menos uma vez e para quando a condição fica verdadeira. É comum em menus e validações.",
      "Pegadinha: o ENQUANTO continua enquanto a condição é verdadeira; o REPITA continua até ela se tornar verdadeira. Só o REPITA garante pelo menos uma execução.",
    ],
    montar(c) {
      const em = quando(c, this);
      const tit = c.titulo("Estruturas de repetição", "PARA e REPITA", { left: 140, top: 150 }, c.t(0), { medio: true });
      const para = pseudo(c, [
        "LEIA numero",
        "PARA contador DE 1 ATÉ 10 FAÇA",
        "    resultado <- numero * contador",
        '    ESCREVA numero, " x ", contador, " = ", resultado',
        "FIMPARA",
      ], { left: 140, top: 310, width: 880 }, c.t(0, 0.5), { fonte: 24, titulo: "PARA — tabuada" });
      realce(c, para.ln[1], em(0, "o contador vai"), em(0, "e cada volta"));
      realce(c, para.ln.slice(2, 4), em(0, "e cada volta"), c.f(0));
      const parteA = [para.e];
      parteA.push(etiqueta(c, "contador", 1070, 320, em(0, "o contador vai"), "font-family:var(--mono)"));
      for (let k = 1; k <= 10; k++) {
        const col = (k - 1) % 5, lin = Math.floor((k - 1) / 5);
        const p = c.novo(`<div class="abs mono" style="left:${1070 + col * 92}px;top:${370 + lin * 84}px;width:80px;height:70px;border-radius:16px;background:var(--cor-suave);color:var(--cor);display:grid;place-items:center;font-size:32px;font-weight:800">${k}</div>`);
        c.entra(p, em(0, "o contador vai", 0.4 + k * 0.16), "pop");
        parteA.push(p);
      }
      const rep = pseudo(c, [
        "REPITA",
        '    ESCREVA "Digite a senha:"',
        "    LEIA senha",
        'ATÉ senha = "1234"',
        'ESCREVA "Acesso liberado."',
      ], { left: 140, top: 625, width: 560 }, c.t(1), { fonte: 24, titulo: "REPITA — senha" });
      realce(c, rep.ln.slice(1, 3), em(1, "executa o bloco"), em(1, "só testa"));
      realce(c, rep.ln[3], em(1, "só testa"), em(1, "Aí"));
      realce(c, rep.ln[4], em(1, "Aí"), c.f(1));
      parteA.push(rep.e);
      parteA.push(forma(c, "processo", "pede e lê a senha", 760, 690, 260, 90, em(1, "executa o bloco"), { fonte: 24 }));
      parteA.push(caminho(c, [[1020, 735], [1062, 735]], em(1, "só testa", -0.3), { dur: 0.3 }));
      parteA.push(forma(c, "decisao", "<span class=\"mono\" style=\"font-size:20px\">senha =<br>\"1234\"?</span>", 1060, 662, 290, 146, em(1, "só testa"), { pad: 0 }));
      parteA.push(caminho(c, [[1205, 664], [1205, 636], [890, 636], [890, 684]], em(1, "até que", 0.2)));
      parteA.push(etiqueta(c, "não", 1030, 600, em(1, "até que", 0.2), `font-size:22px;color:${VERMELHO}`));
      parteA.push(caminho(c, [[1350, 735], [1400, 735], [1400, 820]], em(1, "Aí", -0.2), { dur: 0.35 }));
      parteA.push(etiqueta(c, "sim", 1410, 690, em(1, "Aí", -0.2), `font-size:22px;color:${VERDE}`));
      const lib = c.novo(`<div class="abs" style="left:1270px;top:826px;width:260px;height:62px;border-radius:999px;background:#e9f6ef;color:${VERDE};display:grid;place-items:center;font-size:24px;font-weight:800">Acesso liberado.</div>`);
      c.entra(lib, em(1, "Aí"), "pop");
      parteA.push(lib);
      sairTodos(c, [tit, ...parteA], c.t(2) - 0.4);

      const tit2 = c.titulo("Comparação", "PARA × ENQUANTO × REPITA", { left: 140, top: 150 }, c.t(2), { medio: true });
      const tab = c.tabela(["Estrutura", "Quando testa a condição", "Uso típico"], [
        ["PARA", "Nº de repetições <b>definido antes</b> de começar", "de 1 até N, tabuadas, vetores"],
        ["ENQUANTO", "No <b>início</b>: pode não executar <b>nenhuma vez</b>", "repetir enquanto algo for verdade"],
        ["REPITA...ATÉ", "No <b>final</b>: executa <b>pelo menos uma vez</b> e para quando a condição fica verdadeira", "menus, validação de entrada"],
      ], { left: 140, top: 320, width: 1410 }, c.t(2, 0.6), [em(2, "o PARA tem"), c.t(3), c.t(4)]);
      tab.style.fontSize = "30px";
      tab.querySelectorAll("td:first-child").forEach((td) => { td.classList.add("mono"); td.style.color = "var(--cor)"; });
      sairTodos(c, [tit2, tab], c.t(5) - 0.4);
      c.titulo("Pegadinha de banca", "ENQUANTO × REPITA", { left: 140, top: 150 }, c.t(5), { medio: true });
      quadroCap8(c, "prova", "Pegadinha de banca", "<b>ENQUANTO</b> continua <b>enquanto</b> a condição é verdadeira.<br><b>REPITA</b> continua <b>até</b> a condição se tornar verdadeira.<br>Só o <b>REPITA</b> garante <b>pelo menos uma execução</b>.", { left: 140, top: 360, width: 1400 }, c.t(5, 0.3));
    },
  },
  {
    id: "contadores",
    visual: "À direita, dois cartões: Contador (contador <- contador + 1) e Acumulador (soma <- soma + nota). À esquerda, o pseudocódigo “ler 3 notas e calcular a média”; a linha do PARA acende junto com o cartão Contador, a linha soma <- soma + nota junto com o Acumulador, e por fim a linha da média.",
    secao: "Repetição",
    bit: BIT_CANTO,
    falas: [
      "Dois conceitos aparecem em quase todo algoritmo. O contador normalmente aumenta de um em um, para contar quantas vezes algo aconteceu.",
      "Já o acumulador soma valores ao longo da execução.",
      "Neste algoritmo, que lê três notas e calcula a média, o PARA usa o contador, de um até três.",
      "E, a cada nota, soma recebe soma mais nota: é o acumulador. No final, a média é a soma dividida por três.",
    ],
    montar(c) {
      const em = quando(c, this);
      c.titulo("Contadores e acumuladores", "Contar e acumular", { left: 140, top: 150 }, c.t(0), { medio: true });
      const card = (y, titulo, txt, codigo, t) => {
        const e = c.novo(`<div class="cartao" style="left:1000px;top:${y}px;width:540px;height:210px;padding:28px 32px">
          <h3 style="font-size:36px;margin:0">${titulo}</h3><p style="font-size:26px;margin-top:6px">${txt}</p>
          <div class="mono" style="margin-top:14px;font-size:26px;font-weight:700">${pseudoHTML(codigo)}</div></div>`);
        return c.entra(e, t, "direita");
      };
      const k1 = card(320, "Contador", "Aumenta de 1 em 1: quantas vezes algo aconteceu.", "contador <- contador + 1", em(0, "O contador"));
      const k2 = card(560, "Acumulador", "Soma valores ao longo da execução.", "soma <- soma + nota", c.t(1));
      const cod = pseudo(c, [
        "INÍCIO",
        "    soma <- 0",
        "    PARA contador DE 1 ATÉ 3 FAÇA",
        '        ESCREVA "Digite a nota ", contador, ":"',
        "        LEIA nota",
        "        soma <- soma + nota",
        "    FIMPARA",
        "    media <- soma / 3",
        '    ESCREVA "A média é: ", media',
        "FIM",
      ], { left: 140, top: 320, width: 800 }, c.t(2), { fonte: 24 });
      realce(c, cod.ln[2], em(2, "o PARA"), c.f(2));
      c.destaque(k1, em(2, "o PARA"));
      realce(c, cod.ln[5], c.t(3), em(3, "No final"));
      c.destaque(k2, em(3, "soma recebe"));
      realce(c, cod.ln[7], em(3, "No final"), c.f(3));
    },
  },
  {
    id: "teste-mesa",
    visual: "Definição de teste de mesa e três pílulas (encontrar erros, prever resultados, entender as variáveis). Tabela Passo / x / y / z preenchida linha a linha. Depois, o trecho “x <- 1; ENQUANTO x < 20 FAÇA x <- x * 2; ESCREVA x” à esquerda e a tabela de voltas à direita, linha por linha, até “encerra”. Cartão “Saída: 2, 4, 8, 16, 32”, com o 32 destacado.",
    secao: "Repetição",
    bit: BIT_CANTO,
    falas: [
      "O teste de mesa é a simulação manual da execução. Ele ajuda a encontrar erros, prever resultados e entender como as variáveis mudam.",
      "Anote cada variável em uma coluna: com x recebe dois e y recebe três, z recebe x mais y, e vale cinco.",
      "Nas provas, é a melhor forma de resolver questões com laços. O que este trecho escreve?",
      "x começa em um. Um é menor que vinte, então x dobra para dois e escreve dois. Depois, quatro, oito e dezesseis.",
      "Com dezesseis, o teste passa, x vira trinta e dois, e o trinta e dois é escrito. Só depois o teste falha.",
      "Saída: dois, quatro, oito, dezesseis e trinta e dois. O trinta e dois aparece porque o teste só acontece no início da volta seguinte.",
    ],
    montar(c) {
      const em = quando(c, this);
      c.titulo("Teste de mesa", "Simular à mão, passo a passo", { left: 140, top: 150 }, c.t(0), { medio: true });
      const def = c.texto("Simulação <b>manual</b> da execução do algoritmo.", { left: 140, top: 310 }, c.t(0, 1.5));
      const usos = ["encontrar erros", "prever resultados", "entender as variáveis"];
      const pils = usos.map((u, i) => c.entra(c.novo(`<div class="abs pilula" style="left:${140 + i * 330}px;top:400px">${u}</div>`), em(0, ["encontrar", "prever", "entender"][i]), "pop"));
      const tab1 = c.tabela(["Passo", "x", "y", "z"], [
        ["<span class=\"mono\">x &lt;- 2</span>", "2", "-", "-"],
        ["<span class=\"mono\">y &lt;- 3</span>", "2", "3", "-"],
        ["<span class=\"mono\">z &lt;- x + y</span>", "2", "3", "<b style=\"color:var(--cor)\">5</b>"],
      ], { left: 140, top: 500, width: 900 }, c.t(1), [em(1, "com x"), em(1, "y recebe"), em(1, "z recebe")]);
      tab1.querySelectorAll("td").forEach((td) => td.classList.add("mono"));
      sairTodos(c, [def, ...pils, tab1], c.t(2) - 0.4);

      const cod = pseudo(c, [
        "x <- 1",
        "ENQUANTO x < 20 FAÇA",
        "    x <- x * 2",
        "    ESCREVA x",
        "FIMENQUANTO",
      ], { left: 140, top: 320, width: 520 }, c.t(2), { fonte: 30, titulo: "O que será escrito?" });
      const tab = c.tabela(["Volta", "x antes", "x &lt; 20?", "x depois", "Escreve"], [
        ["1", "1", "sim", "2", "2"],
        ["2", "2", "sim", "4", "4"],
        ["3", "4", "sim", "8", "8"],
        ["4", "8", "sim", "16", "16"],
        ["5", "16", "sim", "32", "<b style=\"color:#c27c0e\">32</b>"],
        ["—", "32", "<b style=\"color:#c2412f\">não</b>", "—", "encerra"],
      ], { left: 720, top: 320, width: 820 }, c.t(2, 1.2), [em(3, "x dobra"), em(3, "Depois", 0.3), em(3, "oito"), em(3, "dezesseis"), c.t(4, 0.5), em(4, "Só depois")]);
      tab.style.fontSize = "28px";
      tab.querySelectorAll("th, td").forEach((x) => { x.style.padding = "13px 22px"; x.style.textAlign = "center"; });
      tab.querySelectorAll("th").forEach((x) => { x.style.fontSize = "20px"; });
      realce(c, cod.ln[0], c.t(3), em(3, "Um é menor"));
      realce(c, cod.ln.slice(1, 4), em(3, "Um é menor"), c.f(4));
      const said = c.novo(`<div class="cartao" style="left:140px;top:690px;width:520px;padding:26px 32px">
        <div class="rotulo">Saída</div><div class="mono" style="margin-top:10px;font-size:44px;font-weight:700">2, 4, 8, 16, <span class="marca-texto" style="color:${AMBAR}">32</span></div></div>`);
      c.entra(said, c.t(5), "baixo");
    },
  },

  // ---------------------------------------------- Vetores e funções
  {
    id: "vetores",
    visual: "Vetor “notas” com cinco caixas e índices [1] a [5]. Cartão “✗ nota1, nota2, nota3… → ✓ notas[i]” e a sequência LEIA 5 notas → calcula a média → ESCREVA as acima da média. Na pegadinha, surge uma segunda fileira de índices [0] a [4] em âmbar e o quadro âmbar. Depois, matriz 3 × 2 (alunos × provas): a célula notas[2, 1] acende; à direita, o laço aninhado e as células acendendo em ordem com o contador “LEIA × 6”.",
    secao: "Vetores e funções",
    bit: BIT_CANTO,
    falas: [
      { texto: "Um vetor, ou array, é uma variável que guarda vários valores do mesmo tipo, acessados por um índice.", falar: "Um vetor, ou arrêi, é uma variável que guarda vários valores do mesmo tipo, acessados por um índice." },
      "Em vez de nota um, nota dois, nota três, cria-se um único vetor, notas. Com um laço, dá para ler cinco notas, calcular a média e mostrar as que ficaram acima dela.",
      "Pegadinha: em pseudocódigo, o primeiro índice costuma ser um; mas, em linguagens como C, Java, Python e JavaScript, ele é zero. Cinco posições vão de zero a quatro.",
      "Já a matriz tem duas dimensões, linhas e colunas, e usa dois índices. O total de elementos é linhas vezes colunas.",
      "Três alunos em duas provas formam uma matriz de três por dois: seis notas. E notas dois, um é a nota do aluno dois na prova um.",
      "Para preenchê-la, usamos um laço aninhado: para cada i, o laço interno percorre todos os j. Assim, o LEIA roda três vezes dois: seis vezes.",
    ],
    montar(c) {
      const em = quando(c, this);
      const tit = c.titulo("Vetores", "Vários valores, um só nome", { left: 140, top: 150 }, c.t(0), { medio: true });
      const parteA = [tit];
      parteA.push(etiqueta(c, "notas", 140, 318, c.t(0, 1), "font-family:var(--mono);font-size:34px"));
      for (let i = 0; i < 5; i++) {
        const x = 260 + i * 160;
        const b = c.novo(`<div class="abs" style="left:${x}px;top:400px;width:144px;height:120px;border-radius:20px;background:#fff;box-shadow:var(--sombra);border:4px solid var(--cor-media)"></div>`);
        c.entra(b, em(0, "vários valores", i * 0.15), "pop");
        const idx = etiqueta(c, `[${i + 1}]`, x + 40, 360, em(0, "índice", i * 0.12), "font-family:var(--mono);font-size:28px", "pop");
        const idx0 = etiqueta(c, `[${i}]`, x + 40, 532, em(2, "ele é zero", i * 0.12), `font-family:var(--mono);font-size:28px;color:${AMBAR}`, "pop");
        parteA.push(b, idx, idx0);
      }
      const r1 = etiqueta(c, "pseudocódigo", 1080, 362, em(2, "em pseudocódigo"), "font-size:22px;letter-spacing:.1em;text-transform:uppercase", "fade");
      const r0 = etiqueta(c, "C, Java, Python, JavaScript", 1080, 534, em(2, "em linguagens"), `font-size:22px;letter-spacing:.06em;text-transform:uppercase;color:${AMBAR}`, "fade");
      const troca = c.novo(`<div class="cartao" style="left:1080px;top:400px;width:460px;height:120px;padding:0 28px;display:flex;align-items:center;gap:18px;font-size:28px">
        <span class="mono" style="white-space:nowrap;color:${VERMELHO};text-decoration:line-through">nota1, nota2…</span><span style="color:var(--texto-fraco)">→</span><b class="mono" style="color:${VERDE}">notas[i]</b></div>`);
      c.entra(troca, c.t(1), "direita");
      c.sai(troca, em(2, "em pseudocódigo") - 0.4);
      const fluxo = c.novo(`<div class="abs" style="left:140px;top:640px;display:flex;align-items:center;gap:18px">
        <span class="pilula f1"><span class="mono">LEIA</span> 5 notas</span><span class="f2" style="font-size:34px;color:var(--texto-fraco)">→</span>
        <span class="pilula f3">calcula a média</span><span class="f4" style="font-size:34px;color:var(--texto-fraco)">→</span>
        <span class="pilula f5"><span class="mono">ESCREVA</span> as acima da média</span></div>`);
      ["f1", "f2", "f3", "f4", "f5"].forEach((k, i) => c.entra(fluxo.querySelector("." + k), em(1, ["ler cinco", "calcular", "calcular", "mostrar", "mostrar"][i], i % 2 ? -0.2 : 0), "pop"));
      c.sai(fluxo, c.t(2) - 0.4);
      const q = quadroCap8(c, "prova", "Pegadinha de banca", "Pseudocódigo: 1º índice costuma ser <b>1</b>. Em C, Java, Python e JavaScript, é <b>0</b>: 5 posições vão de <b>0 a 4</b>.", { left: 140, top: 640, width: 1400, padding: "30px 44px" }, c.t(2, 0.3));
      q.querySelector("p").style.fontSize = "34px";
      parteA.push(r1, r0, q);
      sairTodos(c, parteA, c.t(3) - 0.4);

      c.titulo("Matrizes", "Linhas e colunas", { left: 140, top: 150 }, c.t(3), { medio: true });
      const cel = [];
      ["prova 1", "prova 2"].forEach((p, j) => etiqueta(c, p, 400 + j * 240 + 50, 330, c.t(3, 0.8), "font-size:24px"));
      for (let i = 0; i < 3; i++) {
        etiqueta(c, `aluno ${i + 1}`, 160, 410 + i * 130, c.t(3, 0.8), "font-size:26px;color:var(--texto)");
        cel.push([]);
        for (let j = 0; j < 2; j++) {
          const e = c.novo(`<div class="abs mono" style="left:${400 + j * 240}px;top:${380 + i * 130}px;width:220px;height:110px;border-radius:20px;background-color:#ffffff;box-shadow:var(--sombra);display:grid;place-items:center;font-size:26px;font-weight:700;color:var(--texto-fraco)">[${i + 1}, ${j + 1}]</div>`);
          c.entra(e, c.t(3, 1 + (i * 2 + j) * 0.12), "pop");
          cel[i].push(e);
        }
      }
      const form = c.novo(`<div class="abs" style="left:140px;top:790px;font-size:36px;font-weight:700"><span class="pilula">linhas × colunas</span><span class="r" style="margin-left:18px">= 3 × 2 = <b style="color:var(--cor)">6</b> notas</span></div>`);
      c.entra(form, em(3, "O total"), "baixo");
      c.entra(form.querySelector(".r"), em(4, "três por dois"), "fade");
      c.tl.to(cel[1][0], { backgroundColor: MAGENTA, color: "#ffffff", duration: 0.3 }, em(4, "E notas"));
      c.destaque(cel[1][0], em(4, "E notas"));
      const rot21 = c.novo(`<div class="abs mono" style="left:880px;top:${380 + 130 + 30}px;font-size:30px;font-weight:700;color:var(--cor)">← notas[2, 1]</div>`);
      c.entra(rot21, em(4, "E notas"), "esquerda");
      c.sai(rot21, c.t(5) - 0.3);
      c.tl.to(cel[1][0], { backgroundColor: "#ffffff", color: "#7a8496", duration: 0.3 }, c.t(5) - 0.3);
      const cod = pseudo(c, [
        "PARA i DE 1 ATÉ 3 FAÇA",
        "    PARA j DE 1 ATÉ 2 FAÇA",
        "        LEIA notas[i, j]",
        "    FIMPARA",
        "FIMPARA",
      ], { left: 940, top: 360, width: 600 }, c.t(5), { fonte: 28, titulo: "laço aninhado" });
      const cont = c.novo(`<div class="abs" style="left:960px;top:700px;font-size:40px;font-weight:800"><span class="mono" style="color:var(--cor)">LEIA</span> × <span class="n">0</span></div>`);
      c.entra(cont, em(5, "o laço interno"), "baixo");
      const tA = em(5, "o laço interno", 0.3);
      const passo = Math.max(0.35, (em(5, "Assim") - tA) / 6);
      let k = 0;
      for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) {
        const t = tA + k * passo;
        c.tl.to(cel[i][j], { backgroundColor: "#f6e8f7", color: "#a21caf", duration: 0.25 }, t);
        mudarTexto(c, cont.querySelector(".n"), String(k), String(k + 1), t);
        k++;
      }
      realce(c, cod.ln[2], tA, em(5, "Assim"));
    },
  },
  {
    id: "funcoes",
    visual: "Faixa “Sub-rotinas → modularização”. Cartões Função (retorna valor) e Procedimento (sem retorno). À direita, o pseudocódigo da função media(a, b) e a chamada media(6, 9) → 7.5. Depois, diagrama do programa principal (variáveis globais) contendo a sub-rotina (variáveis locais). Por fim, dois painéis: Por valor (a cópia muda de 5 para 9, o original continua 5) e Por referência (o original muda de 5 para 9).",
    secao: "Vetores e funções",
    bit: BIT_CANTO,
    falas: [
      "Para não repetir trechos, o algoritmo pode ser dividido em sub-rotinas. É a modularização.",
      "A função recebe parâmetros e retorna um valor, como a média de duas notas. Já o procedimento executa uma tarefa sem retornar valor, como exibir um cabeçalho.",
      "Veja a função média: ela recebe a e b e retorna a mais b, dividido por dois. Então, média de seis e nove dá sete e meio.",
      "Variáveis criadas dentro de uma sub-rotina são locais: só existem ali. Já as declaradas no programa principal, visíveis em todo o algoritmo, são globais.",
      "Na passagem por valor, a sub-rotina recebe uma cópia, e as alterações não afetam a variável original.",
      "Na passagem por referência, ela acessa a própria variável, e as alterações mudam a original.",
    ],
    montar(c) {
      const em = quando(c, this);
      c.titulo("Funções e procedimentos", "Dividir para não repetir", { left: 140, top: 150 }, c.t(0), { medio: true });
      const mod = c.texto("Dividir em <b>sub-rotinas</b> = <b class=\"marca-texto\">modularização</b>", { left: 140, top: 300 }, em(0, "sub-rotinas"));
      const card = (y, ic, titulo, txt, t) => {
        const e = c.novo(`<div class="cartao" style="left:140px;top:${y}px;width:600px;height:190px;padding:28px;display:flex;gap:24px;align-items:center">${icone(ic)}
          <div><h3 style="font-size:36px;margin:0">${titulo}</h3><p style="font-size:26px;margin-top:6px">${txt}</p></div></div>`);
        e.querySelector(".icone").style.cssText = "margin:0;width:96px;height:96px;flex-shrink:0";
        return c.entra(e, t, "esquerda");
      };
      const f = card(400, "funcao", "Função", "Recebe parâmetros e <b>retorna um valor</b>.<br><i>Ex.: média de duas notas.</i>", c.t(1));
      const p = card(610, "monitor", "Procedimento", "Executa uma tarefa, <b>sem retornar valor</b>.<br><i>Ex.: exibir um cabeçalho.</i>", em(1, "Já o procedimento"));
      const cod = pseudo(c, [
        "FUNÇÃO media(a, b)",
        "    RETORNE (a + b) / 2",
        "FIMFUNÇÃO",
        "",
        "INÍCIO",
        "    resultado <- media(6, 9)",
        "    ESCREVA resultado  // escreve 7.5",
        "FIM",
      ], { left: 800, top: 400, width: 740 }, c.t(2), { fonte: 26 });
      realce(c, cod.ln.slice(0, 2), em(2, "ela recebe"), em(2, "Então"));
      realce(c, cod.ln.slice(5, 7), em(2, "Então"), c.f(2));
      const r = c.novo(`<div class="abs mono" style="left:1330px;top:338px;padding:8px 22px;border-radius:999px;background:var(--cor);color:#fff;font-size:32px;font-weight:800">= 7.5</div>`);
      c.entra(r, em(2, "dá sete"), "pop");
      sairTodos(c, [mod, f, p, cod.e, r], c.t(3) - 0.4);

      const ext = c.novo(`<div class="abs" style="left:140px;top:320px;width:1400px;height:440px;border-radius:32px;background:var(--cor-suave);border:5px dashed var(--cor);padding:36px 44px">
        <div class="rotulo">Programa principal</div><p style="margin-top:16px;font-size:32px;line-height:1.4;width:560px;color:var(--texto)">Variáveis <b>globais</b>: declaradas aqui e visíveis em <b>todo o algoritmo</b>.</p></div>`);
      const int = c.novo(`<div class="cartao" style="left:780px;top:410px;width:700px;height:270px;padding:36px 40px">
        ${icone("funcao")}<div class="rotulo">Sub-rotina</div><p style="margin-top:12px;font-size:32px;color:var(--texto)">Variáveis <b>locais</b>: só existem <b>aqui dentro</b>.</p></div>`);
      int.querySelector(".icone").style.cssText = "position:absolute;right:30px;top:24px;width:80px;height:80px;margin:0";
      c.entra(int, c.t(3), "zoom");
      c.entra(ext, em(3, "Já as declaradas"), "fade");
      sairTodos(c, [ext, int], c.t(4) - 0.4);

      const painel = (x, rot, titulo, t) => c.entra(c.novo(`<div class="cartao" style="left:${x}px;top:320px;width:680px;height:470px;padding:32px 36px">
        <div class="rotulo">${rot}</div><h3 style="margin-top:8px;font-size:36px">${titulo}</h3></div>`), t, "baixo");
      painel(140, "Por valor", "Recebe uma cópia", c.t(4));
      const o1 = caixaVar(c, "x · programa", "5", 180, 490, c.t(4, 0.6), { w: 220, h: 130, fonte: 64, fonteNome: 24 });
      caminho(c, [[412, 600], [524, 600]], em(4, "uma cópia", -0.2), { dur: 0.4 });
      etiqueta(c, "cópia", 430, 552, em(4, "uma cópia", -0.2), "font-size:22px");
      const c1 = caixaVar(c, "x · sub-rotina", "5", 540, 490, em(4, "uma cópia"), { w: 230, h: 130, fonte: 64, fonteNome: 24, tracejada: true });
      mudarTexto(c, c1.val, "5", "9", em(4, "as alterações"));
      etiqueta(c, `original continua <b class="mono">5</b> ✓`, 180, 680, em(4, "não afetam"), `font-size:28px;color:${VERDE}`, "baixo");
      o1.e.style.zIndex = 1;

      painel(860, "Por referência", "Acessa a própria variável", c.t(5));
      const o2 = caixaVar(c, "x · programa", "5", 900, 490, c.t(5, 0.6), { w: 220, h: 130, fonte: 64, fonteNome: 24 });
      const s2 = c.novo(`<div class="abs" style="left:1270px;top:532px;width:230px;height:130px;border-radius:22px;border:4px dashed var(--cor-media);display:grid;place-items:center;font-size:26px;font-weight:700;color:var(--cor);text-align:center">sub-rotina<br><span class="mono">altera x</span></div>`);
      c.entra(s2, em(5, "acessa"), "pop");
      caminho(c, [[1262, 600], [1130, 600]], em(5, "acessa", 0.2), { dur: 0.4 });
      mudarTexto(c, o2.val, "5", "9", em(5, "mudam"));
      etiqueta(c, `original muda para <b class="mono">9</b>`, 900, 680, em(5, "mudam"), `font-size:28px;color:${AMBAR}`, "baixo");
    },
  },
  {
    id: "recursividade",
    visual: "Cartão “Chama a si mesma” com ícone de ciclo e a exigência do caso base. Depois, o pseudocódigo da função fatorial, com o caso base marcado. À direita, as chamadas descem em escada: fatorial(4) = 4 * fatorial(3) ... até fatorial(1) = 1 (caso base, em âmbar). Por fim, “4 × 3 × 2 × 1 = 24”, com o resultado contando até 24.",
    secao: "Vetores e funções",
    bit: BIT_CANTO,
    falas: [
      "Uma função é recursiva quando chama a si mesma. Ela precisa de um caso base, que encerra as chamadas; sem ele, a recursão nunca termina.",
      "No fatorial, se n for menor ou igual a um, a função retorna um: é o caso base. Senão, retorna n vezes o fatorial de n menos um.",
      "Então, fatorial de quatro é quatro vezes fatorial de três, que é três vezes fatorial de dois, que é dois vezes fatorial de um.",
      "Fatorial de um é o caso base e retorna um. Multiplicando tudo: quatro vezes três vezes dois vezes um, que dá vinte e quatro.",
    ],
    montar(c) {
      const em = quando(c, this);
      c.titulo("Recursividade", "A função que chama a si mesma", { left: 140, top: 150 }, c.t(0), { medio: true });
      const ideia = c.novo(`<div class="cartao" style="left:140px;top:320px;width:1000px;height:220px;padding:34px;display:flex;gap:30px;align-items:center">${icone("ciclo")}
        <div><h3 style="font-size:40px;margin:0">Chama a si mesma</h3><p class="cb2" style="font-size:30px;margin-top:10px">Precisa de um <b>caso base</b>, que encerra as chamadas.<br>Sem ele, a recursão <b>nunca termina</b>.</p></div></div>`);
      ideia.querySelector(".icone").style.cssText = "margin:0;width:130px;height:130px;flex-shrink:0";
      c.entra(ideia, c.t(0, 0.4), "baixo");
      c.entra(ideia.querySelector(".cb2"), em(0, "Ela precisa"), "fade");
      c.tl.fromTo(ideia.querySelector(".icone"), { rotation: 0 }, { rotation: 360, duration: 2, ease: "power1.inOut", immediateRender: false }, c.t(0, 0.6));
      c.sai(ideia, c.t(1) - 0.4);
      const cod = pseudo(c, [
        "FUNÇÃO fatorial(n)",
        "    SE n <= 1 ENTÃO",
        "        RETORNE 1  // caso base",
        "    SENÃO",
        "        RETORNE n * fatorial(n - 1)",
        "    FIMSE",
        "FIMFUNÇÃO",
      ], { left: 140, top: 320, width: 680 }, c.t(1), { fonte: 26 });
      realce(c, cod.ln.slice(1, 3), em(1, "se n"), em(1, "Senão"));
      realce(c, cod.ln.slice(3, 5), em(1, "Senão"), c.f(1));
      const chamadas = [
        ["fatorial(4) = 4 * fatorial(3)", c.t(2)],
        ["fatorial(3) = 3 * fatorial(2)", em(2, "que é três")],
        ["fatorial(2) = 2 * fatorial(1)", em(2, "que é dois")],
        ["fatorial(1) = 1  ← caso base", c.t(3)],
      ];
      chamadas.forEach((k, i) => {
        const base = i === 3;
        const e = c.novo(`<div class="cartao mono" style="left:${880 + i * 40}px;top:${330 + i * 100}px;width:560px;height:80px;padding:0 26px;display:flex;align-items:center;font-size:26px;font-weight:700;${base ? `background:#fdf3e1;color:${AMBAR}` : ""}">${base ? k[0] : pseudoHTML(k[0])}</div>`);
        c.entra(e, k[1], "esquerda");
      });
      realce(c, cod.ln[2], c.t(3), em(3, "Multiplicando"));
      const tot = c.novo(`<div class="abs" style="left:140px;top:760px;font-size:68px;font-weight:800">4 × 3 × 2 × 1 = <span class="v mono" style="color:var(--cor)">0</span></div>`);
      c.entra(tot, em(3, "Multiplicando"), "baixo");
      c.contar(tot.querySelector(".v"), 0, 24, em(3, "que dá"), 1.0);
    },
  },

  // ---------------------------------------------- Algoritmos na prática
  {
    id: "completo",
    visual: "À esquerda, o pseudocódigo “Aprovação com média e frequência”. À direita, quatro etapas — Entrada, Processamento, Decisão, Saída — acendem uma por frase, junto com as linhas correspondentes do código. No fim, as etapas dão lugar ao quadro azul “Resumo estratégico”.",
    secao: "Algoritmos na prática",
    bit: BIT_CANTO,
    falas: [
      "Juntando tudo: a aprovação de um aluno. Na entrada, o algoritmo lê duas notas e a frequência.",
      "No processamento, calcula a média das duas notas.",
      "Na decisão, testa: média maior ou igual a sete E frequência maior ou igual a setenta e cinco. Com o E, as duas precisam ser verdadeiras.",
      "Na saída, escreve aprovado ou reprovado, e mostra a média final.",
      "Resumo estratégico: programar bem é identificar com clareza entradas, processamentos, decisões, repetições e saídas.",
    ],
    montar(c) {
      const em = quando(c, this);
      c.titulo("Exemplo completo", "Aprovação com média e frequência", { left: 140, top: 150 }, c.t(0), { medio: true });
      const cod = pseudo(c, [
        "INÍCIO",
        "    LEIA nota1",
        "    LEIA nota2",
        "    LEIA frequencia",
        "    media <- (nota1 + nota2) / 2",
        "    SE media >= 7 E frequencia >= 75 ENTÃO",
        '        ESCREVA "Aluno aprovado."',
        "    SENÃO",
        '        ESCREVA "Aluno reprovado."',
        "    FIMSE",
        '    ESCREVA "Média final: ", media',
        "FIM",
      ], { left: 140, top: 320, width: 800 }, c.t(0, 1), { fonte: 26 });
      const etapas = [
        ["teclado", "Entrada", "nota1, nota2, frequência", em(0, "Na entrada"), [1, 2, 3]],
        ["engrenagem", "Processamento", "média das duas notas", c.t(1), [4]],
        ["decisao", "Decisão", "média >= 7 E frequência >= 75", c.t(2), [5]],
        ["monitor", "Saída", "aprovado / reprovado + média", c.t(3), [6, 8, 10]],
      ];
      const fins = [c.f(0), c.f(1), c.f(2), c.f(3)];
      const nos = etapas.map((k, i) => {
        const e = c.novo(`<div class="cartao" style="left:1000px;top:${320 + i * 122}px;width:540px;height:104px;padding:0 24px;display:flex;align-items:center;gap:20px">${icone(k[0])}
          <div><h3 style="font-size:30px;margin:0">${k[1]}</h3><p style="font-size:22px">${k[2]}</p></div></div>`);
        e.querySelector(".icone").style.cssText = "margin:0;width:64px;height:64px;flex-shrink:0";
        c.entra(e, k[3], "direita");
        c.tl.to(e, { backgroundColor: "#f6e8f7", duration: 0.3 }, k[3] + 0.2);
        c.tl.to(e, { backgroundColor: "#ffffff", duration: 0.3 }, fins[i]);
        realce(c, k[4].map((n) => cod.ln[n]), k[3], fins[i]);
        return e;
      });
      const eTag = c.novo(`<div class="abs pilula mono" style="left:1000px;top:820px">E → as duas precisam ser V</div>`);
      c.entra(eTag, em(2, "Com o E"), "pop");
      sairTodos(c, [...nos, eTag], c.t(4) - 0.4);
      c.quadro("resumo", "Programar bem é identificar com clareza: <b>entradas</b>, <b>processamentos</b>, <b>decisões</b>, <b>repetições</b> e <b>saídas</b>.", { left: 1000, top: 330, width: 560 }, c.t(4));
    },
  },
  {
    id: "classicos",
    visual: "Troca de valores: pseudocódigo de três linhas à esquerda e três caixas à direita (a com bola magenta, b com bola âmbar, aux vazia); a cada linha, a bola correspondente é copiada. Cartão vermelho “Sem aux: a <- b; b <- a → o valor de a se perde”. Depois, o algoritmo do maior de 10 números à esquerda e, à direita, dez barras que surgem uma a uma; a maior até o momento fica magenta e recebe a etiqueta “maior”.",
    secao: "Algoritmos na prática",
    bit: BIT_CANTO,
    falas: [
      "Agora, os algoritmos clássicos. O primeiro troca os valores de a e b, com uma variável auxiliar.",
      { texto: "Primeiro, aux recebe a: guardamos o valor de a. Depois, a recebe b. E, por fim, b recebe aux, que é o valor antigo de a.", falar: "Primeiro, áux recebe a: guardamos o valor de a. Depois, a recebe bê. E, por fim, bê recebe áux, que é o valor antigo de a." },
      "Sem o auxiliar, o valor de a se perderia na segunda linha.",
      "O segundo acha o maior de dez números: lê o primeiro e o guarda como o maior.",
      "Depois, lê os outros nove. Sempre que um número superar o maior atual, vira o novo maior. No fim, escreve o maior valor.",
    ],
    montar(c) {
      const em = quando(c, this);
      const tit = c.titulo("Algoritmos clássicos", "Trocar os valores de a e b", { left: 140, top: 150 }, c.t(0), { medio: true });
      const cod = pseudo(c, [
        "aux <- a      // guarda o valor de a",
        "a <- b        // a recebe o valor de b",
        "b <- aux      // b recebe o valor antigo de a",
      ], { left: 140, top: 340, width: 820 }, c.t(0, 0.6), { fonte: 26 });
      const caixas = ["a", "b", "aux"].map((n, i) => {
        const e = c.novo(`<div class="abs" style="left:${1020 + i * 180}px;top:330px;width:160px;text-align:center">
          <div class="mono" style="font-size:32px;font-weight:800;color:var(--cor)">${n}</div>
          <div style="margin-top:10px;height:150px;border-radius:24px;background:#fff;box-shadow:var(--sombra);border:4px solid var(--cor-media);display:grid;place-items:center">
          <div class="bola" style="width:76px;height:76px;border-radius:50%;background-color:${i === 0 ? MAGENTA : AMBAR}"></div></div></div>`);
        c.entra(e, i < 2 ? em(0, "a e b", i * 0.3) : em(0, "variável auxiliar"), "pop");
        return e;
      });
      const bolas = caixas.map((e) => e.querySelector(".bola"));
      c.tl.set(bolas[2], { autoAlpha: 0 }, 0);
      c.tl.fromTo(bolas[2], { autoAlpha: 0, scale: 0.3, backgroundColor: MAGENTA }, { autoAlpha: 1, scale: 1, duration: 0.45, ease: "back.out(1.7)", immediateRender: false }, em(1, "aux recebe a"));
      realce(c, cod.ln[0], em(1, "aux recebe a"), em(1, "Depois"));
      realce(c, cod.ln[1], em(1, "Depois"), em(1, "E, por fim"));
      c.tl.to(bolas[0], { backgroundColor: AMBAR, duration: 0.4 }, em(1, "a recebe b"));
      c.destaque(bolas[0], em(1, "a recebe b"));
      realce(c, cod.ln[2], em(1, "E, por fim"), c.f(1));
      c.tl.to(bolas[1], { backgroundColor: MAGENTA, duration: 0.4 }, em(1, "b recebe aux"));
      c.destaque(bolas[1], em(1, "b recebe aux"));
      const errado = c.novo(`<div class="cartao" style="left:140px;top:640px;width:1400px;padding:30px 40px;display:flex;align-items:center;gap:26px;font-size:34px;border-left:12px solid ${VERMELHO}">
        <b style="color:${VERMELHO}">✗ Sem aux:</b><span class="mono" style="font-weight:700">a &lt;- b; b &lt;- a</span><span style="color:var(--texto-fraco)">→</span><span>o valor de <b>a</b> se perde na 2ª linha</span></div>`);
      c.entra(errado, c.t(2), "baixo");
      sairTodos(c, [tit, cod.e, ...caixas, errado], c.t(3) - 0.4);

      c.titulo("Algoritmos clássicos", "O maior de 10 números", { left: 140, top: 150 }, c.t(3), { medio: true });
      const cod2 = pseudo(c, [
        "LEIA numero",
        "maior <- numero",
        "PARA i DE 2 ATÉ 10 FAÇA",
        "    LEIA numero",
        "    SE numero > maior ENTÃO",
        "        maior <- numero",
        "    FIMSE",
        "FIMPARA",
        'ESCREVA "Maior valor: ", maior',
      ], { left: 140, top: 320, width: 660 }, c.t(3, 0.5), { fonte: 26 });
      realce(c, cod2.ln.slice(0, 2), em(3, "lê o primeiro"), c.f(3));
      const alturas = [140, 90, 210, 170, 260, 120, 300, 200, 240, 110];
      const base = 800;
      c.entra(c.novo(`<div class="abs" style="left:850px;top:${base}px;width:690px;height:6px;border-radius:3px;background:var(--borda)"></div>`), c.t(3, 0.5), "fade");
      const tLoop0 = em(4, "lê os outros"), tLoop1 = em(4, "No fim", -0.2);
      const passo = (tLoop1 - tLoop0) / 9;
      realce(c, cod2.ln.slice(2, 8), tLoop0, tLoop1);
      const marca = c.novo(`<div class="abs pilula" style="left:0;top:0;font-size:22px;padding:6px 16px;background:var(--cor);color:#fff">maior</div>`);
      let maior = -1, iMaior = -1;
      const barras = alturas.map((h, i) => {
        const x = 850 + i * 70;
        const t = i === 0 ? em(3, "o guarda") - 0.6 : tLoop0 + (i - 1) * passo;
        const b = c.novo(`<div class="abs" style="left:${x}px;top:${base - h}px;width:52px;height:${h}px;border-radius:12px 12px 4px 4px;background-color:#d9dee8"></div>`);
        c.entra(b, t, "fade");
        if (h > maior) {
          if (iMaior >= 0) c.tl.to(barrasRef[iMaior], { backgroundColor: "#d9dee8", duration: 0.25 }, t + 0.15);
          c.tl.to(b, { backgroundColor: MAGENTA, duration: 0.25 }, t + 0.15);
          if (iMaior < 0) {
            c.tl.set(marca, { left: x - 22, top: base - h - 56 }, 0);
            c.entra(marca, t + 0.3, "pop");
          } else {
            c.tl.to(marca, { left: x - 22, top: base - h - 56, duration: 0.35, ease: "power2.out" }, t + 0.15);
          }
          maior = h; iMaior = i;
        }
        barrasRef.push(b);
        return b;
      });
      realce(c, cod2.ln[8], em(4, "No fim"), c.f(4));
      c.destaque(barras[6], em(4, "No fim"));
    },
  },
  {
    id: "busca-bolha",
    visual: "Busca sequencial: vetor [5, 3, 8, 1], pílula “procurando: 8” e uma lupa que passa por cada caixa; as caixas diferentes ficam cinza e o 8 fica verde, com o contador de comparações. Cartão “vetor de N elementos → até N comparações”. Depois, ordenação bolha: as peças 5, 3, 8, 1 trocam de lugar fisicamente, com pares comparados em âmbar; ao fim de cada passada, a peça que chegou ao final fica verde, e o registro das três passadas aparece embaixo.",
    secao: "Algoritmos na prática",
    bit: BIT_CANTO,
    falas: [
      "A busca sequencial percorre o vetor do início ao fim, comparando cada elemento com o valor procurado, até encontrá-lo ou chegar ao final.",
      "É simples, mas, num vetor de N elementos, pode precisar de até N comparações.",
      { texto: "A ordenação bolha, ou bubble sort, compara vizinhos e troca os dois quando estão fora de ordem, repetindo as passadas até não haver trocas.", falar: "A ordenação bolha, ou bâbol sórt, compara vizinhos e troca os dois quando estão fora de ordem, repetindo as passadas até não haver trocas." },
      "A cada passada, o maior valor sobe para o final. Com cinco, três, oito e um: na primeira passada, o cinco troca com o três, e o oito troca com o um.",
      "Na segunda passada, o cinco troca com o um. Na terceira, o três troca com o um. E o vetor fica ordenado: um, três, cinco e oito.",
    ],
    montar(c) {
      const em = quando(c, this);
      const tit = c.titulo("Busca e ordenação", "Busca sequencial", { left: 140, top: 150 }, c.t(0), { medio: true });
      const vals = [5, 3, 8, 1];
      const proc = c.novo(`<div class="abs pilula" style="left:140px;top:320px">procurando: <b class="mono">8</b></div>`);
      c.entra(proc, c.t(0, 0.6), "pop");
      const caixas = vals.map((v, i) => c.entra(c.novo(`<div class="abs mono" style="left:${140 + i * 190}px;top:420px;width:170px;height:150px;border-radius:24px;background-color:#ffffff;box-shadow:var(--sombra);display:grid;place-items:center;font-size:72px;font-weight:800;color:#1a2230">${v}</div>`), c.t(0, 0.8 + i * 0.15), "pop"));
      const lupa = c.novo(`<div class="abs" style="left:175px;top:590px;width:100px;height:100px">${icone("lupa")}</div>`);
      lupa.querySelector(".icone").style.cssText = "width:100px;height:100px";
      const cont = c.novo(`<div class="abs" style="left:960px;top:440px;font-size:40px;font-weight:700">comparações: <span class="n mono" style="color:var(--cor)">0</span></div>`);
      const tB = em(0, "comparando");
      c.entra(lupa, tB, "pop");
      c.entra(cont, tB, "fade");
      const passoB = Math.max(0.6, (em(0, "até encontrá") - tB) / 2);
      for (let i = 0; i < 3; i++) {
        const t = tB + i * passoB;
        if (i > 0) c.tl.to(lupa, { left: 175 + i * 190, duration: 0.35, ease: "power2.inOut" }, t - 0.35);
        mudarTexto(c, cont.querySelector(".n"), String(i), String(i + 1), t);
        if (i < 2) c.tl.to(caixas[i], { backgroundColor: "#eef0f4", color: "#7a8496", duration: 0.3 }, t + 0.1);
        else c.tl.to(caixas[i], { backgroundColor: "#e9f6ef", color: VERDE, duration: 0.3 }, t + 0.1);
      }
      const n = c.novo(`<div class="cartao" style="left:960px;top:560px;width:580px;padding:30px 36px;font-size:34px">Vetor de <b>N</b> elementos<br>→ até <b style="color:var(--cor)">N comparações</b></div>`);
      c.entra(n, em(1, "num vetor"), "baixo");
      sairTodos(c, [tit, proc, ...caixas, lupa, cont, n], c.t(2) - 0.4);

      c.titulo("Busca e ordenação", "Ordenação bolha (bubble sort)", { left: 140, top: 150 }, c.t(2), { medio: true });
      const P = [140, 330, 520, 710];
      const pecas = vals.map((v, i) => c.entra(c.novo(`<div class="abs mono" style="left:${P[i]}px;top:400px;width:170px;height:150px;border-radius:24px;background-color:#ffffff;box-shadow:var(--sombra);display:grid;place-items:center;font-size:72px;font-weight:800;color:#1a2230">${v}</div>`), c.t(2, 0.6 + i * 0.15), "pop"));
      const sobe = c.novo(`<div class="cartao" style="left:960px;top:400px;width:580px;padding:30px 36px;display:flex;gap:24px;align-items:center;font-size:32px">
        <span style="font-size:60px;font-weight:800;color:var(--cor)">↗</span><span>A cada passada, o <b>maior valor</b> sobe para o <b>final</b>.</span></div>`);
      c.entra(sobe, c.t(3), "direita");
      const passada = c.novo(`<div class="abs rotulo" style="left:140px;top:340px"><span class="p">Passada 1</span></div>`);
      c.entra(passada, em(3, "na primeira"), "fade");
      const pos = [...pecas];
      const comparar = (i, t, troca) => {
        const a = pos[i], b = pos[i + 1];
        c.tl.to([a, b], { backgroundColor: "#fdf3e1", duration: 0.2 }, t);
        if (troca) {
          c.tl.to(a, { left: P[i + 1], duration: 0.5, ease: "power2.inOut" }, t + 0.25);
          c.tl.to(b, { left: P[i], duration: 0.5, ease: "power2.inOut" }, t + 0.25);
          c.tl.to(a, { y: -50, duration: 0.25, yoyo: true, repeat: 1, ease: "power1.out" }, t + 0.25);
          pos[i] = b; pos[i + 1] = a;
        }
        c.tl.to([a, b], { backgroundColor: "#ffffff", duration: 0.2 }, t + 0.85);
      };
      const pronto = (i, t) => c.tl.to(pos[i], { backgroundColor: "#e9f6ef", color: VERDE, duration: 0.3 }, t);
      const t1 = em(3, "o cinco troca", -0.3);
      comparar(0, t1, true);
      comparar(1, t1 + 1.0, false);
      comparar(2, em(3, "e o oito troca", -0.2), true);
      pronto(3, c.f(3) - 0.2);
      const reg = (y, html, t) => c.entra(c.novo(`<div class="abs mono" style="left:140px;top:${y}px;font-size:28px;font-weight:600;color:var(--texto-suave)">${html}</div>`), t, "baixo");
      reg(610, "<b style=\"color:var(--cor)\">Passada 1:</b> [3, 5, 8, 1] → [3, 5, 8, 1] → [3, 5, 1, 8]", c.f(3) - 0.2);
      mudarTexto(c, passada.querySelector(".p"), "Passada 1", "Passada 2", c.t(4), false);
      comparar(0, c.t(4, 0.4), false);
      comparar(1, em(4, "o cinco troca", -0.2), true);
      pronto(2, em(4, "Na terceira", -0.3));
      reg(670, "<b style=\"color:var(--cor)\">Passada 2:</b> [3, 5, 1, 8] → [3, 1, 5, 8]", em(4, "Na terceira", -0.3));
      mudarTexto(c, passada.querySelector(".p"), "Passada 2", "Passada 3", em(4, "Na terceira"), false);
      comparar(0, em(4, "o três troca", -0.2), true);
      const tFim = em(4, "E o vetor");
      pronto(0, tFim); pronto(1, tFim);
      reg(730, "<b style=\"color:var(--cor)\">Passada 3:</b> [1, 3, 5, 8] &nbsp;<b style=\"color:#2f8a5b\">ordenado</b>", tFim);
    },
  },
  {
    id: "python",
    visual: "Duas tabelas de equivalência Pseudocódigo → Python, linha a linha: LEIA/input, ESCREVA/print, atribuição (=), comparação (==), diferente (!=); SE/if, ENQUANTO/while, PARA/for i in range(1, 11), E OU NÃO/and or not, MOD DIV/% //. No fim, a linha do range acende em âmbar e entra o quadro “Pegadinha de banca” sobre o range e a indentação.",
    secao: "Algoritmos na prática",
    bit: BIT_CANTO,
    falas: [
      "A lógica é a mesma em qualquer linguagem; só muda a escrita. Veja a equivalência com o Python.",
      { texto: "O LEIA vira input, e o ESCREVA vira print.", falar: "O leia vira ínput, e o escreva vira prínt." },
      "Nos sinais: a atribuição vira igual, a comparação vira dois iguais, e o diferente vira exclamação e igual.",
      { texto: "SE, ENQUANTO e PARA viram if, while e for. E, OU e NÃO viram and, or e not. E o MOD e o DIV viram porcentagem e duas barras.", falar: "Se, enquanto e para viram íf, uáil e fór. E, ou e não viram ênd, ór e nót. E o mód e o div viram porcentagem e duas barras." },
      { texto: "Pegadinha: range de um a onze vai de um até dez, porque o último número nunca entra. E a indentação, o recuo, define os blocos, no lugar de FIMSE ou FIMPARA.", falar: "Pegadinha: rêindj de um a onze vai de um até dez, porque o último número nunca entra. E a indentação, o recuo, define os blocos, no lugar de fim-se ou fim-para." },
    ],
    montar(c) {
      const em = quando(c, this);
      c.titulo("Do pseudocódigo para o Python", "A mesma lógica, outra escrita", { left: 140, top: 150 }, c.t(0), { medio: true });
      const m = (s) => `<span class="mono">${s}</span>`;
      const pq = (s) => `<span style="font:600 18px var(--sans);color:var(--texto-fraco);margin-left:8px">${s}</span>`;
      const esq = c.tabela(["Pseudocódigo", "Python"], [
        [m("LEIA idade"), m("idade = int(input())")],
        [m("ESCREVA \"Olá\""), m("print(\"Olá\")")],
        [m("x &lt;- 10") + pq("atribuição"), m("x = 10")],
        [m("x = 10") + pq("comparação"), m("x == 10")],
        [m("x &lt;&gt; 10"), m("x != 10")],
      ], { left: 140, top: 320, width: 640 }, c.t(0, 1.5), [em(1, "O LEIA"), em(1, "e o ESCREVA"), em(2, "a atribuição"), em(2, "a comparação"), em(2, "e o diferente")]);
      const dir = c.tabela(["Pseudocódigo", "Python"], [
        [m("SE ... ENTÃO ... SENÃO"), m("if ... : ... else:")],
        [m("ENQUANTO ... FAÇA"), m("while ... :")],
        [m("PARA i DE 1 ATÉ 10 FAÇA"), m("for i in range(1, 11):")],
        [m("E / OU / NÃO"), m("and / or / not")],
        [m("MOD / DIV"), m("% / //")],
      ], { left: 820, top: 320, width: 720 }, c.t(0, 1.5), [c.t(3, 0.2), em(3, "ENQUANTO"), em(3, "e PARA"), em(3, "E, OU e NÃO"), em(3, "E o MOD")]);
      [esq, dir].forEach((tab) => {
        tab.style.fontSize = "22px";
        tab.querySelectorAll("th, td").forEach((x) => { x.style.padding = "14px 22px"; });
        tab.querySelectorAll("td:last-child").forEach((x) => { x.style.color = "var(--cor)"; x.style.fontWeight = "700"; });
      });
      const linhaRange = dir.querySelectorAll("tbody tr")[2];
      c.tl.to(linhaRange, { backgroundColor: "#fdf3e1", duration: 0.3 }, c.t(4, 0.4));
      const q = quadroCap8(c, "prova", "Pegadinha de banca", `<span class="mono">range(1, 11)</span> vai de 1 até <b>10</b>: o último número <b>nunca</b> é incluído.<br><span class="l2">A <b>indentação</b> (recuo) define os blocos, no lugar de FIMSE ou FIMPARA.</span>`, { left: 140, top: 730, width: 1400, padding: "28px 44px" }, c.t(4));
      q.querySelector("p").style.fontSize = "32px";
      c.entra(q.querySelector(".l2"), em(4, "E a indentação"), "fade");
    },
  },

  // ---------------------------------------------- Erros e revisão
  {
    id: "erros",
    visual: "Lista dos cinco erros comuns de iniciantes, cada um com um ✗ vermelho, entrando na frase que o cita. À direita, ícone de ciclo girando sem parar, com o selo “repetição infinita”. No rodapé, quadro âmbar “Pegadinha de lógica”.",
    secao: "Erros e revisão",
    bit: BIT_CANTO,
    falas: [
      "Cuidado com os erros comuns de iniciantes: não entender o problema antes de resolver, e confundir entrada com saída.",
      "Também: esquecer de atualizar o contador no laço, montar condições erradas e não testar com valores reais.",
      "Pegadinha de lógica: se o contador nunca for atualizado, a condição não muda, e o programa pode entrar em repetição infinita.",
    ],
    montar(c) {
      const em = quando(c, this);
      c.titulo("Erros comuns", "Erros de iniciante", { left: 140, top: 150 }, c.t(0), { medio: true });
      const erros = [
        ["Não entender o problema antes de resolver", em(0, "não entender")],
        ["Confundir entrada com saída", em(0, "confundir")],
        ["Esquecer de atualizar o contador no laço", em(1, "esquecer")],
        ["Montar condições erradas", em(1, "montar")],
        ["Não testar com valores reais", em(1, "não testar")],
      ];
      const itens = erros.map((k, i) => {
        const e = c.novo(`<div class="abs" style="left:140px;top:${320 + i * 84}px;display:flex;align-items:center;gap:22px;font-size:36px;color:var(--texto)">
          <span style="width:52px;height:52px;border-radius:14px;background:#fbe9e6;color:${VERMELHO};display:grid;place-items:center;font-weight:800;font-size:32px">✗</span>${k[0]}</div>`);
        return c.entra(e, k[1], "esquerda");
      });
      const ic = c.novo(`<div class="abs" style="left:1180px;top:310px;width:280px;height:280px">${icone("ciclo")}</div>`);
      ic.querySelector(".icone").style.cssText = "width:280px;height:280px";
      c.entra(ic, c.t(2), "pop");
      c.tl.fromTo(ic.querySelector(".icone"), { rotation: 0 }, { rotation: 720, duration: c.f(2) + 1 - c.t(2), ease: "none", immediateRender: false }, c.t(2));
      c.entra(c.novo(`<div class="abs pilula" style="left:1170px;top:610px;background:#fbe9e6;color:${VERMELHO}">repetição infinita</div>`), em(2, "repetição infinita"), "pop");
      c.destaque(itens[2], c.t(2, 0.3));
      quadroCap8(c, "prova", "Pegadinha de lógica", "Contador <b>nunca atualizado</b> → a condição não muda → <b>repetição infinita</b>.", { left: 140, top: 760, width: 1400, padding: "30px 44px" }, em(2, "se o contador"));
    },
  },
  {
    id: "revisao",
    visual: "Sete cartões de revisão com ícone de verificação, um por frase: Algoritmo, Operadores, Lógica, Repetição, Teste de mesa, Sub-rotinas e Python.",
    secao: "Erros e revisão",
    bit: BIT_CANTO,
    falas: [
      "Hora de revisar.",
      "Algoritmo é uma sequência finita, ordenada e lógica de passos. No fluxograma, decisão é o losango.",
      "DIV dá o quociente, e MOD dá o resto. A seta atribui; o igual compara.",
      "O E só é verdadeiro se tudo for verdadeiro; o OU só é falso se tudo for falso. E os parênteses vêm primeiro.",
      "O ENQUANTO testa no início; o REPITA, no final, executando pelo menos uma vez; e o PARA tem repetições definidas.",
      "No teste de mesa, siga as variáveis volta a volta. E, em muitas linguagens, o vetor começa no índice zero.",
      "A função retorna valor; o procedimento, não. Por valor vai uma cópia; por referência, a própria variável. E toda recursão precisa de caso base.",
      { texto: "No Python, o range não inclui o último número, e a indentação define os blocos.", falar: "No Python, o rêindj não inclui o último número, e a indentação define os blocos." },
    ],
    montar(c) {
      c.titulo("Revisão", "O que você aprendeu", { left: 140, top: 150 }, c.t(0), { medio: true });
      const cartoes = [
        ["Algoritmo", "Finito, ordenado e lógico · decisão = losango"],
        ["Operadores", "DIV = quociente · MOD = resto · <span class=\"mono\">&lt;-</span> atribui, <span class=\"mono\">=</span> compara"],
        ["Lógica", "E: V só se tudo V · OU: F só se tudo F · parênteses primeiro"],
        ["Repetição", "ENQUANTO testa no início · REPITA no fim (≥ 1 vez) · PARA: nº definido"],
        ["Teste de mesa", "Variáveis volta a volta · vetor: índice 0 em muitas linguagens"],
        ["Sub-rotinas", "Função retorna, procedimento não · valor × referência · caso base"],
        ["Python", "<span class=\"mono\">range(1, 11)</span> → 1 a 10 · indentação define os blocos"],
      ];
      cartoes.forEach((k, i) => {
        const col = i % 4, lin = Math.floor(i / 4);
        const e = c.novo(`<div class="cartao" style="left:${140 + col * 415}px;top:${320 + lin * 300}px;width:385px;height:270px;padding:30px">
          <div style="display:flex;align-items:center;gap:16px">${icone("check")}<h3 style="margin:0;font-size:34px">${k[0]}</h3></div>
          <p style="margin-top:16px;font-size:27px">${k[1]}</p></div>`);
        e.querySelector(".icone").style.cssText = "margin:0;width:54px;height:54px";
        c.entra(e, c.t(i + 1), "pop");
      });
    },
  },
  {
    id: "encerramento",
    visual: "Bit grande à esquerda. Cartão “Pratique agora: 15 questões no final do Capítulo 8”. Cartão azul-marinho “Desafio final: Simulado — 40 questões sorteadas dos 8 capítulos (5 de cada), 60 minutos, correção comentada no final”. Selo “Série concluída: 8 de 8 capítulos”; Bit pula de alegria e acena na despedida.",
    secao: "Erros e revisão",
    bit: BIT_GRANDE,
    falas: [
      "Agora é a sua vez: faça as quinze questões do final do Capítulo 8, com correção comentada.",
      "E encare o desafio final: o simulado, com quarenta questões sorteadas dos oito capítulos, cinco de cada, em sessenta minutos.",
      "Parabéns! Você concluiu todos os capítulos da série.",
      "Boa prova, e bons estudos!",
    ],
    montar(c) {
      c.cartao({ icone: "questoes", titulo: "Pratique agora", texto: "<b>15 questões</b> no final do Capítulo 8, com correção comentada." }, { left: 900, top: 170, width: 820 }, c.t(0));
      const sim = c.novo(`<div class="cartao" style="left:900px;top:540px;width:820px;--cor:#1d4e89">
        <div class="rotulo">Desafio final</div><h3 style="margin-top:14px;font-family:var(--serif);font-size:56px">Simulado</h3>
        <p style="margin-top:10px"><b>40 questões</b> sorteadas dos 8 capítulos (5 de cada) · <b>60 minutos</b> · correção comentada no final.</p></div>`);
      c.entra(sim, c.t(1), "baixo");
      const selo = c.novo(`<div class="abs" style="left:900px;top:880px;display:flex;align-items:center;gap:16px;padding:14px 30px 14px 16px;border-radius:999px;background:#e9f6ef;color:${VERDE};font-size:30px;font-weight:800">${icone("check")}Série concluída: 8 de 8 capítulos</div>`);
      selo.querySelector(".icone").style.cssText = "width:48px;height:48px;--cor:#2f8a5b";
      c.entra(selo, c.t(2), "pop");
      c.bit.pular(c.t(2, 0.3));
      c.bit.acenar(c.t(3));
    },
  },
];

const barrasRef = [];
function el8(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

serie.capitulo({
  numero: 8,
  titulo: "Lógica de Programação",
  cor: "#a21caf",
  proximo: "Simulado final",
  cenas: CENAS_CAP8.map((cena) => ({ ...cena, falas: cena.falas.map(falaCap8) })),
});
