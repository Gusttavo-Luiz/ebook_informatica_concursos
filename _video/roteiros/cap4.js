// Roteiro da videoaula do Capítulo 4 — Pacote Office.
// Cada cena tem a narração (falas) e a montagem visual (montar).
// c.t(i) = instante em que começa a fala i da cena.
// em(c, this, i, "trecho") = instante aproximado em que o trecho é falado na fala i.

const BIT_CANTO = { x: 1720, y: 1020, s: 0.58 };
const BIT_GRANDE = { x: 470, y: 990, s: 1.3 };
const COR = "#15803d";
const COR_SUAVE = "#e8f3ec";
const NAVY = "#1d4e89";

// ---------------------------------------------------------------- Voz
// Grafia fonética usada só na narração (o texto da tela continua igual).

const LETRAS = {
  A: "á", B: "bê", C: "cê", D: "dê", E: "é", F: "éfe", G: "gê", H: "agá", I: "i", J: "jóta", K: "cá", L: "éle", M: "eme",
  N: "ene", O: "ó", P: "pê", Q: "quê", R: "érre", S: "ésse", T: "tê", U: "u", V: "vê", W: "dáblio", X: "xis", Y: "ípsilon", Z: "zê",
};
const TECLAS_VOZ = {
  Ctrl: "contról", Alt: "ált", Shift: "xíft", Enter: "énter", Home: "rôum",
  "Page Down": "pêidj dáun", "Page Up": "pêidj âp", ";": "ponto e vírgula", "=": "igual",
};
const TERMOS_VOZ = [
  ["LibreOffice", "líbre ófis"], ["Office", "ófis"], ["PowerPoint", "páuer póint"], ["Word", "uórd"], ["Writer", "ráiter"],
  ["OpenDocument", "Ópen Dóquiument"], ["ODF", "ó dê éfe"],
  ["Slides", "Esláides"], ["Slide", "Esláide"], ["slides", "esláides"], ["slide", "esláide"],
  ["Layouts", "Léiauts"], ["layouts", "léiauts"], ["Layout", "Léiaut"], ["layout", "léiaut"],
  ["Design", "Dizáin"], ["Web", "uéb"],
  ["Page Down", "pêidj dáun"], ["Page Up", "pêidj âp"], ["Home", "rôum"], ["Ctrl", "contról"],
  ["PROCV", "proc vê"], ["PROCX", "proc xis"], ["PROCH", "proc agá"],
  ["SOMASES", "soma ses"], ["SOMASE", "soma se"], ["MÉDIASE", "média se"],
  ["CONT.SES", "cont ses"], ["CONT.SE", "cont se"], ["CONT.NÚM", "cont núm"], ["CONT.VALORES", "cont valores"],
  ["CONTAR.VAZIO", "contar vazio"], ["EXT.TEXTO", "ext texto"], ["MOD", "mód"],
  [".docx", "ponto dóc xis"], [".xlsx", "ponto xis éle ésse xis"], [".pptx", "ponto pê pê tê xis"],
  [".doc", "ponto dóc"], [".xls", "ponto xis éle ésse"], [".ppt", "ponto pê pê tê"],
  [".odt", "ponto ó dê tê"], [".ods", "ponto ó dê ésse"], [".odp", "ponto ó dê pê"],
  [".ppsx", "ponto pê pê ésse xis"], [".potx", "ponto pê ó tê xis"],
].map(([k, v]) => [new RegExp(`(?<![\\wÀ-ÿ])${k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![\\wÀ-ÿ])`, "g"), v]);

function teclaFalada(k) {
  k = k.trim();
  if (TECLAS_VOZ[k]) return TECLAS_VOZ[k];
  if (/^[A-Z]$/.test(k)) return LETRAS[k];
  if (/^F\d{1,2}$/.test(k)) return `éfe ${k.slice(1)}`;
  return k;
}

function voz(s) {
  s = s.replace(/<[^>]+>/g, "");
  s = s.replace(/\b(?:Ctrl|Alt|Shift)(?:\s*\+\s*(?:Ctrl|Alt|Shift|Enter|Home|Page Down|Page Up|F\d{1,2}|[A-Z0-9](?![\wÀ-ÿ])|;|=))+/g,
    (m) => m.split("+").map(teclaFalada).join(" "));
  for (const [re, v] of TERMOS_VOZ) s = s.replace(re, v);
  s = s.replace(/(?<![\wÀ-ÿ$])(\$?)([A-Z]{1,3})(\$?)(\d{1,7})(?![\wÀ-ÿ])/g,
    (m, d1, col, d2, lin) => `${d1 ? "cifrão " : ""}${[...col].map((l) => LETRAS[l]).join(" ")} ${d2 ? "cifrão " : ""}${lin}`);
  return s;
}

// Fala com texto de tela e versão falada (automática ou indicada).
function f(texto, falar) { return { texto, falar: voz(falar ?? texto) }; }

// ------------------------------------------------------- Ícones e estilos

if (typeof ICONES !== "undefined") {
  const celulas = [["#2f8a5b", "#2f8a5b", "#c27c0e"], ["#2f8a5b", "#c2412f", "#2f8a5b"], ["#c27c0e", "#2f8a5b", "#c2412f"]];
  Object.assign(ICONES, {
    planilha: `<rect class="cs" x="10" y="14" width="100" height="92" rx="12"/><path class="c1" d="M10 26a12 12 0 0 1 12-12h76a12 12 0 0 1 12 12v12H10z"/>
      <path d="M10 62h100M10 86h100M42 38v68M76 38v68" stroke="var(--cor-media)" stroke-width="4"/><rect class="c1" x="44" y="64" width="30" height="20" rx="3"/>`,
    apresentacao: `<rect class="c1" x="8" y="12" width="104" height="70" rx="8"/><rect class="cs" x="16" y="20" width="88" height="54" rx="4"/>
      <rect class="c2" x="24" y="28" width="40" height="8" rx="4"/><rect class="c1" x="26" y="50" width="10" height="18" rx="2"/>
      <rect class="c1" x="42" y="42" width="10" height="26" rx="2"/><rect class="c1" x="58" y="54" width="10" height="14" rx="2"/>
      <path class="c2" d="M90 44a14 14 0 1 1-14 14h14z"/><path class="s1" d="M60 84v10M60 94l-20 18M60 94l20 18"/>`,
    pasta: `<path class="c2" d="M10 30a8 8 0 0 1 8-8h26l10 10h48a8 8 0 0 1 8 8v6H10z"/><rect class="c1" x="10" y="42" width="100" height="62" rx="8"/>
      <rect class="cs" x="22" y="56" width="22" height="14" rx="3"/><rect class="cs" x="50" y="56" width="22" height="14" rx="3"/><rect class="cs" x="78" y="56" width="22" height="14" rx="3"/>`,
    pincel: `<rect class="c1" x="12" y="14" width="80" height="34" rx="9"/><rect class="c2" x="20" y="22" width="56" height="8" rx="4"/>
      <path class="s1" d="M92 31h14v26H60v14"/><rect class="cn" x="51" y="70" width="18" height="40" rx="7"/>`,
    carta: `<rect class="c1" x="10" y="26" width="100" height="70" rx="10"/><path class="sb" d="M20 38l40 28 40-28"/>`,
    lupa: `<circle class="cs" cx="50" cy="50" r="30"/><circle class="s1" cx="50" cy="50" r="30"/><path d="M72 72l30 30" stroke="var(--cor)" stroke-width="16" stroke-linecap="round"/>`,
    funil: `<path class="c1" d="M12 18h96L72 62v34l-24 14V62z"/><rect class="c2" x="12" y="14" width="96" height="12" rx="6"/>`,
    floco: `<circle class="cs" cx="60" cy="60" r="52"/><path class="s1" d="M60 22v76M27 41l66 38M27 79l66-38M50 28l10 10 10-10M50 92l10-10 10 10"/>`,
    escudo: `<path class="c1" d="M60 8l44 16v30c0 28-19 48-44 58C35 102 16 82 16 54V24z"/><path class="sb" d="M40 60l14 14 26-28"/>`,
    lista: `<rect class="cs" x="10" y="12" width="100" height="28" rx="7"/><path class="s1" d="M84 22l7 7 7-7"/><rect class="c2" x="18" y="22" width="44" height="8" rx="4"/>
      <rect class="c1" x="10" y="46" width="100" height="62" rx="8"/><rect class="cb" x="20" y="57" width="56" height="8" rx="4"/>
      <rect class="cb" x="20" y="73" width="44" height="8" rx="4" opacity=".7"/><rect class="cb" x="20" y="89" width="50" height="8" rx="4" opacity=".7"/>`,
    duplicatas: `<rect class="c2" x="14" y="10" width="60" height="78" rx="8"/><rect class="c1" x="44" y="32" width="62" height="78" rx="8"/>
      <path class="sb" d="M62 58l26 26M88 58L62 84"/>`,
    dinamica: `<rect class="cs" x="10" y="10" width="100" height="100" rx="12"/><path class="c1" d="M10 22a12 12 0 0 1 12-12h76a12 12 0 0 1 12 12v12H10z"/>
      <rect class="c2" x="10" y="34" width="30" height="64"/><path class="c2" d="M10 98h30v12H22a12 12 0 0 1-12-12z"/>
      <path d="M40 60h70M40 85h70M74 34v76" stroke="var(--cor-media)" stroke-width="3"/><rect class="c1" x="80" y="66" width="24" height="12" rx="3"/>`,
    condicional: celulas.map((l, r) => l.map((cor, k) => `<rect x="${12 + k * 34}" y="${12 + r * 34}" width="30" height="30" rx="6" fill="${cor}"/>`).join("")).join(""),
    alca: `<rect x="12" y="12" width="70" height="40" rx="5" fill="var(--cor-suave)" stroke="var(--cor)" stroke-width="6"/>
      <rect x="12" y="62" width="70" height="40" rx="5" fill="none" stroke="var(--cor-media)" stroke-width="4" stroke-dasharray="8 6"/>
      <rect class="c1" x="74" y="44" width="16" height="16" rx="3"/><path class="st" d="M98 74v30M83 89h30"/>`,
    olho: `<path class="c1" d="M6 60c14-24 32-36 54-36s40 12 54 36c-14 24-32 36-54 36S20 84 6 60z"/><circle class="cb" cx="60" cy="60" r="21"/><circle class="cn" cx="60" cy="60" r="10"/>`,
    ocultar: `<path class="c2" d="M6 60c14-24 32-36 54-36s40 12 54 36c-14 24-32 36-54 36S20 84 6 60z"/><circle class="cb" cx="60" cy="60" r="21"/>
      <path d="M22 100L98 20" stroke="var(--texto)" stroke-width="10" stroke-linecap="round"/>`,
    camadas: `<rect class="c2" x="34" y="10" width="76" height="48" rx="7" opacity=".6"/><rect class="c2" x="22" y="28" width="76" height="48" rx="7"/>
      <rect class="c1" x="10" y="48" width="80" height="56" rx="8"/><rect class="cb" x="20" y="58" width="40" height="8" rx="4"/><rect class="cb" x="20" y="74" width="56" height="6" rx="3" opacity=".7"/>
      <circle class="cb" cx="78" cy="92" r="6"/>`,
    layouts: `<rect class="cs" x="8" y="18" width="104" height="84" rx="10"/><rect class="c1" x="18" y="28" width="84" height="14" rx="4"/>
      <rect class="c2" x="18" y="50" width="40" height="42" rx="4"/><rect class="c2" x="62" y="50" width="40" height="42" rx="4"/>`,
    temas: `<path class="cs" d="M60 10C32 10 10 31 10 58c0 26 20 46 44 46 8 0 12-5 12-10 0-6-5-8-5-14 0-5 4-9 10-9h14c14 0 25-11 25-25C110 26 88 10 60 10z"/>
      <circle class="c1" cx="34" cy="56" r="9"/><circle class="c2" cx="46" cy="32" r="9"/><circle class="cn" cx="72" cy="28" r="9"/><circle fill="#c27c0e" cx="90" cy="48" r="9"/>`,
    pdf: `<path class="cs" d="M28 8h50l24 24v80H28z"/><path class="c2" d="M78 8v24h24z"/><rect class="c1" x="12" y="54" width="74" height="36" rx="7"/>
      <text x="49" y="80" text-anchor="middle" font-family="Inter, sans-serif" font-weight="800" font-size="24" fill="#fff">PDF</text>`,
    abc: `<rect class="cs" x="6" y="20" width="96" height="66" rx="12"/><text x="54" y="64" text-anchor="middle" font-family="Inter, sans-serif" font-weight="800" font-size="34" fill="var(--cor)">abc</text>
      <circle class="c1" cx="94" cy="88" r="20"/><path d="M84 88l7 7 13-14" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`,
    legenda: `<rect class="cs" x="10" y="8" width="100" height="74" rx="8"/><circle class="c2" cx="36" cy="32" r="10"/><path class="c1" d="M10 76V68l30-26 20 18 14-12 36 28v8a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6z"/>
      <rect class="c1" x="18" y="92" width="58" height="10" rx="5"/><rect class="c2" x="82" y="92" width="20" height="10" rx="5"/>`,
    quebra: `<rect class="cs" x="22" y="4" width="76" height="46" rx="6"/><rect class="cs" x="22" y="70" width="76" height="46" rx="6"/>
      <rect class="c2" x="32" y="16" width="56" height="6" rx="3"/><rect class="c2" x="32" y="30" width="40" height="6" rx="3"/>
      <rect class="c2" x="32" y="82" width="56" height="6" rx="3"/><rect class="c2" x="32" y="96" width="44" height="6" rx="3"/>
      <path d="M6 60h108" stroke="var(--cor)" stroke-width="6" stroke-dasharray="10 7" stroke-linecap="round"/>`,
    secao: `<rect class="c2" x="8" y="20" width="48" height="70" rx="6"/><rect class="c1" x="62" y="36" width="52" height="38" rx="6"/>
      <rect class="cb" x="16" y="32" width="30" height="5" rx="2"/><rect class="cb" x="16" y="44" width="24" height="5" rx="2"/>
      <rect class="cb" x="70" y="46" width="34" height="5" rx="2"/><rect class="cb" x="70" y="58" width="26" height="5" rx="2"/>`,
    alteracoes: `<path class="cs" d="M18 8h60l24 24v80H18z"/><path class="c2" d="M78 8v24h24z"/><rect x="30" y="44" width="56" height="7" rx="3" fill="#7a8496"/>
      <rect x="30" y="62" width="46" height="7" rx="3" fill="#c2412f" opacity=".45"/><path d="M26 65.5h54" stroke="#c2412f" stroke-width="5" stroke-linecap="round"/>
      <rect x="30" y="80" width="42" height="9" rx="3" fill="#2f8a5b"/><rect x="30" y="98" width="30" height="7" rx="3" fill="#7a8496"/>`,
    notas: `<rect class="c1" x="20" y="10" width="80" height="100" rx="10"/><rect class="cb" x="32" y="28" width="56" height="8" rx="4"/>
      <rect class="cb" x="32" y="46" width="44" height="7" rx="3" opacity=".75"/><rect class="cb" x="32" y="62" width="50" height="7" rx="3" opacity=".75"/><rect class="cb" x="32" y="78" width="36" height="7" rx="3" opacity=".75"/>`,
    secoes: `<rect class="c1" x="8" y="14" width="104" height="12" rx="6"/><rect class="c2" x="14" y="32" width="42" height="26" rx="4"/><rect class="c2" x="64" y="32" width="42" height="26" rx="4"/>
      <rect class="c1" x="8" y="66" width="104" height="12" rx="6"/><rect class="c2" x="14" y="84" width="42" height="26" rx="4"/><rect class="cs" x="64" y="84" width="42" height="26" rx="4"/>`,
    texto2: `<path class="cs" d="M18 8h84v104H18z"/><rect class="c1" x="28" y="20" width="56" height="12" rx="4"/><rect class="c2" x="28" y="40" width="40" height="9" rx="4"/>
      ${[58, 72, 86, 100].map((y) => `<rect x="28" y="${y}" width="${y === 100 ? 40 : 64}" height="6" rx="3" fill="#b9c3d3"/>`).join("")}`,
  });
}

if (typeof document !== "undefined") {
  const estilo = document.createElement("style");
  estilo.textContent = `
    .c4-tecla { display:inline-flex; align-items:center; justify-content:center; min-width:56px; height:56px; padding:0 14px;
      border-radius:13px; background:#fff; border:2px solid #d3dae6; border-bottom-width:7px; font:800 26px var(--sans);
      color:var(--texto); white-space:nowrap; box-shadow:0 4px 10px rgba(26,34,48,.08); }
    .c4-tecla.w { border-color:var(--cor); color:var(--cor); }
    .c4-tecla.l { border-color:${NAVY}; color:${NAVY}; }
    .c4-mais { font:700 24px var(--sans); color:var(--texto-fraco); margin:0 7px; }
    .c4-atalho { display:inline-flex; align-items:center; white-space:nowrap; }
    .c4-ext { display:inline-block; font:700 30px var(--mono); padding:6px 16px; border-radius:12px; background:var(--cor-suave); color:var(--cor); }
    .c4-ext.velho { background:#eceff4; color:var(--texto-suave); }
    .c4-grade { display:grid; background:#fff; border-radius:16px; box-shadow:var(--sombra); overflow:hidden; font-weight:600; }
    .c4-grade > div { display:flex; align-items:center; justify-content:center; border-right:1px solid #e3e8f0; border-bottom:1px solid #e3e8f0; }
    .c4-grade .c4-cab { background:#eef1f6; color:var(--texto-fraco); font-size:22px; font-weight:700; }
    .c4-grade .c4-cel { color:var(--texto); }
    .c4-marca { border:5px solid var(--m, var(--cor)); background:color-mix(in srgb, var(--m, var(--cor)) 13%, transparent); border-radius:8px; }
    .c4-h { display:flex; gap:24px; align-items:center; padding:22px 28px; }
    .c4-h .icone { width:76px; height:76px; margin:0; flex-shrink:0; }
    .c4-h h3 { font-size:30px; margin:0 0 6px; }
    .c4-h p { font-size:24px; line-height:1.35; }
    .c4-tag { display:inline-block; vertical-align:middle; margin-left:8px; padding:3px 12px; border-radius:999px; background:var(--cor-suave);
      color:var(--cor); font:700 18px var(--sans); letter-spacing:.06em; text-transform:uppercase; }
    .c4-fn { display:flex; flex-direction:column; padding:26px 28px; }
    .c4-fn .nome { font:800 32px var(--mono); color:var(--cor); }
    .c4-fn p { font-size:25px; line-height:1.35; margin-top:10px; }
    .c4-fn .ex { margin-top:auto; font:600 21px var(--mono); color:var(--texto); background:#f2f5f9; border-radius:10px; padding:8px 12px; overflow-wrap:anywhere; }
    .c4-cod { font-family:var(--mono); font-weight:700; }
    .c4-linha { position:absolute; display:grid; align-items:center; background:#fff; border-radius:18px; box-shadow:var(--sombra); }
    .c4-linha > div { padding:0 22px; }
    .c4-faixa { position:absolute; display:flex; align-items:center; gap:22px; background:#fff; border-radius:20px; box-shadow:var(--sombra); padding:0 30px; }
  `;
  document.head.appendChild(estilo);
}

// ---------------------------------------------------------------- Ajudantes

function em(c, cena, i, trecho, ajuste = -0.1) {
  const fl = cena.falas[i];
  const tx = typeof fl === "string" ? fl : fl.texto;
  const k = tx.indexOf(trecho);
  if (k < 0) throw new Error(`Trecho não encontrado na fala ${i} de ${cena.id}: ${trecho}`);
  return c.t(i) + Math.max(0, (k / tx.length) * c.dur(i) + ajuste);
}

function tecla(k, cls = "") { return `<span class="c4-tecla ${cls}">${k}</span>`; }
function atalho(s, cls = "") {
  return `<span class="c4-atalho">${s.split("+").map((k) => tecla(k.trim(), cls)).join('<span class="c4-mais">+</span>')}</span>`;
}

function quadroLivre(c, tipo, html, estilo, t) {
  const rot = { resumo: "Resumo estratégico", prova: "Pegadinha de banca", dica: "Memorize" }[tipo];
  const e = c.novo(`<div class="quadro ${tipo}"><div class="rotulo">${rot}</div>${html}</div>`, estilo);
  return c.entra(e, t, "direita", 0.7);
}

function cartaoH(c, o, estilo, t, tipo = "baixo") {
  const e = c.novo(`<div class="cartao c4-h">${o.icone ? icone(o.icone) : ""}<div>
    <h3>${o.titulo}${o.tag ? `<span class="c4-tag">${o.tag}</span>` : ""}</h3><p>${o.texto}</p></div></div>`, estilo);
  return c.entra(e, t, tipo);
}

function cartaoFn(c, o, estilo, t) {
  const e = c.novo(`<div class="cartao c4-fn"><div class="nome">${o.nome}</div><p>${o.texto}</p>${o.ex ? `<div class="ex">${o.ex}</div>` : ""}</div>`, estilo);
  return c.entra(e, t, "pop");
}

function ref(r) { const m = r.match(/^([A-Z]+)(\d+)$/); return [m[1], +m[2]]; }

// Planilha desenhada: colunas com letras, linhas numeradas, células endereçáveis.
function grade(c, o) {
  const ini = o.inicio || 1, rw = o.rw || 60, { cols, cw, ch } = o;
  let html = `<div class="abs c4-grade" style="left:${o.left}px;top:${o.top}px;grid-template-columns:${rw}px repeat(${cols.length},${cw}px);grid-auto-rows:${ch}px;font-size:${o.fonte || 26}px">`;
  html += `<div class="c4-cab"></div>${cols.map((l) => `<div class="c4-cab" data-col="${l}">${l}</div>`).join("")}`;
  for (let r = ini; r < ini + o.linhas; r++) {
    html += `<div class="c4-cab" data-lin="${r}">${r}</div>${cols.map((l) => `<div class="c4-cel" data-ref="${l}${r}">${o.dados?.[l + r] !== undefined ? `<div class="v">${o.dados[l + r]}</div>` : ""}</div>`).join("")}`;
  }
  const el = c.novo(`${html}</div>`);
  const g = {
    el,
    x: (col) => o.left + rw + cols.indexOf(col) * cw,
    y: (lin) => o.top + ch + (lin - ini) * ch,
    cel: (r) => el.querySelector(`[data-ref="${r}"]`),
    v: (r) => el.querySelector(`[data-ref="${r}"] .v`),
    marcar(de, ate, t, cor) {
      const [c1, l1] = ref(de), [c2, l2] = ref(ate || de);
      const x = g.x(c1), y = g.y(l1), w = g.x(c2) + cw - x, h = g.y(l2) + ch - y;
      const m = c.novo(`<div class="abs c4-marca" style="left:${x - 3}px;top:${y - 3}px;width:${w + 6}px;height:${h + 6}px;${cor ? `--m:${cor}` : ""}"></div>`);
      c.entra(m, t, "zoom");
      return m;
    },
  };
  return g;
}

// Parágrafo esquemático com um alinhamento.
function svgAlinhamento(tipo) {
  const L = [94, 72, 100, 84, 58], W = 220;
  return `<svg viewBox="0 0 220 150" style="width:220px;height:150px">${L.map((p, i) => {
    const ultima = i === L.length - 1;
    const w = tipo === "justificado" ? (ultima ? W * 0.58 : W) : (W * p) / 100;
    const x = tipo === "esquerda" || tipo === "justificado" ? 0 : tipo === "centro" ? (W - w) / 2 : W - w;
    return `<rect x="${x}" y="${i * 30 + 4}" width="${w}" height="14" rx="7" fill="${i === 0 ? COR : "#b9c3d3"}"/>`;
  }).join("")}</svg>`;
}

// Linhas de texto esquemáticas (para páginas e slides desenhados).
function linhasSvg(x, y, larguras, passo = 14, alt = 6, cor = "#b9c3d3") {
  return larguras.map((w, i) => `<rect x="${x}" y="${y + i * passo}" width="${w}" height="${alt}" rx="${alt / 2}" fill="${cor}"/>`).join("");
}

// =========================================================================

serie.capitulo({
  numero: 4,
  titulo: "Pacote Office",
  cor: COR,
  proximo: "Capítulo 5 — Hardware",
  cenas: [
    // ------------------------------------------------------------ Abertura
    {
      id: "abertura",
      visual: "Bit grande à esquerda acena. À direita surgem o rótulo “Capítulo 4” e o título “Pacote Office”. Um roteiro de 5 tópicos aparece item por item, cada um na frase que o anuncia. Na última frase, Bit dá um pulinho.",
      secao: "Abertura",
      bit: BIT_GRANDE,
      falas: [
        f("Olá! Eu sou o Bit. Que bom ter você de volta à nossa série de Informática para Concursos."),
        f("Neste capítulo, vamos estudar o Pacote Office, um assunto que cai em praticamente todas as provas."),
        f("Primeiro, você vai conhecer as suítes de escritório, o Microsoft Office e o LibreOffice, com seus formatos de arquivo."),
        f("Depois, vamos ao Word: as guias, os recursos mais cobrados e a famosa comparação de atalhos com o Writer."),
        f("Em seguida, o campeão das provas: o Excel, com fórmulas, referências, funções e mensagens de erro."),
        f("E, para fechar, o PowerPoint: modos de exibição, transições, animações e atalhos da apresentação."),
        f("Vamos lá?"),
      ],
      montar(c) {
        c.bit.acenar(c.t(0, 0.2));
        c.titulo("Capítulo 4", "Pacote<br>Office", { left: 900, top: 190 }, c.t(1));
        c.lista([
          "<b>Suítes</b>: Office × LibreOffice e formatos",
          "<b>Word</b>: guias e recursos",
          "<b>Atalhos</b>: Word × Writer",
          "<b>Excel</b>: fórmulas, funções e erros",
          "<b>PowerPoint</b>: modos, transição e animação",
        ], { left: 900, top: 520, width: 900 }, [c.t(2), c.t(3), em(c, this, 3, "a famosa"), c.t(4), c.t(5)]);
        c.bit.pular(c.t(6));
      },
    },

    // ------------------------------------------------ Suítes de escritório
    {
      id: "suites",
      visual: "Três blocos com ícones — Textos, Planilhas, Apresentações. Depois, um quadro comparativo: cabeçalhos “Microsoft Office · proprietário” e “LibreOffice · software livre” e três linhas, uma por frase: Word .docx × Writer .odt; Excel .xlsx × Calc .ods; PowerPoint .pptx × Impress .odp.",
      secao: "Suítes de escritório",
      bit: BIT_CANTO,
      falas: [
        f("Uma suíte de escritório reúne aplicativos de produtividade para criar textos, planilhas e apresentações."),
        f("As duas mais cobradas são o Microsoft Office, que é proprietário, e o LibreOffice, que é software livre."),
        f("Para textos, o Office tem o Word, que salva em .docx. No LibreOffice, o editor é o Writer, com .odt."),
        f("Para planilhas, temos o Excel, com .xlsx, e o Calc, com .ods."),
        f("E, para apresentações, o PowerPoint, com .pptx, e o Impress, com .odp."),
      ],
      montar(c) {
        c.titulo("Suítes de escritório", "Office × LibreOffice", { left: 140, top: 150 }, c.t(0), { medio: true });
        const tipos = [["documento", "Textos"], ["planilha", "Planilhas"], ["apresentacao", "Apresentações"]];
        const nos = tipos.map((k, i) => c.no({ icone: k[0], titulo: k[1] }, { left: 140 + i * 470, top: 360, width: 420, height: 300 }, em(c, this, 0, ["textos", "planilhas", "apresentações"][i])));
        nos.forEach((n) => c.sai(n, c.t(1) - 0.4));

        const cols = "grid-template-columns:420px 500px 500px";
        const cab = c.novo(`<div class="abs" style="left:140px;top:330px;width:1420px;display:grid;${cols};align-items:center">
          <div></div>
          <div class="c-office" style="display:flex;gap:16px;align-items:center;padding-left:22px">${icone("cadeado")}<div><div style="font:800 34px var(--sans)">Microsoft Office</div><span class="pilula" style="font-size:22px;padding:4px 16px">proprietário</span></div></div>
          <div class="c-libre" style="display:flex;gap:16px;align-items:center;padding-left:22px">${icone("livre")}<div><div style="font:800 34px var(--sans)">LibreOffice</div><span class="pilula" style="font-size:22px;padding:4px 16px">software livre</span></div></div>
        </div>`);
        cab.querySelectorAll(".icone").forEach((i) => { i.style.cssText = "width:70px;height:70px;margin:0"; });
        c.entra(cab.querySelector(".c-office"), em(c, this, 1, "Microsoft"), "baixo");
        c.entra(cab.querySelector(".c-libre"), em(c, this, 1, "LibreOffice"), "baixo");
        const linhas = [
          ["documento", "Editor de texto", "Word", ".docx", "Writer", ".odt"],
          ["planilha", "Planilha eletrônica", "Excel", ".xlsx", "Calc", ".ods"],
          ["apresentacao", "Apresentação", "PowerPoint", ".pptx", "Impress", ".odp"],
        ];
        linhas.forEach((l, i) => {
          const e = c.novo(`<div class="c4-linha" style="left:140px;top:${470 + i * 120}px;width:1420px;height:104px;${cols}">
            <div style="display:flex;gap:18px;align-items:center;font:700 30px var(--sans)">${icone(l[0])}${l[1]}</div>
            <div class="a" style="display:flex;gap:18px;align-items:center"><b style="font-size:38px">${l[2]}</b><span class="c4-ext">${l[3]}</span></div>
            <div class="b" style="display:flex;gap:18px;align-items:center"><b style="font-size:38px">${l[4]}</b><span class="c4-ext" style="background:#e9eef7;color:${NAVY}">${l[5]}</span></div></div>`);
          e.querySelector(".icone").style.cssText = "width:60px;height:60px;margin:0";
          c.entra(e, c.t(i + 2), "baixo");
          c.entra(e.querySelector(".b"), em(c, this, i + 2, l[4]), "esquerda");
          c.tl.set(e.querySelector(".b"), { autoAlpha: 0 }, c.t(i + 2) - 0.01);
        });
      },
    },
    {
      id: "formatos",
      visual: "Linha do tempo dos formatos: etiquetas cinza .doc .xls .ppt (“Office até 2003”) com seta para .docx .xlsx .pptx (“Office atual”). Cartão “ODF · OpenDocument — padrão aberto” com .odt .ods .odp e a nota de compatibilidade e exportação para PDF. Quadro verde “Memorize”: a letra do meio indica o tipo; as letras t, s e p se destacam nas etiquetas.",
      secao: "Suítes de escritório",
      bit: BIT_CANTO,
      falas: [
        f("As versões antigas do Office, até 2003, usavam .doc, .xls e .ppt, sem o x no final."),
        f("O LibreOffice usa o padrão aberto ODF, o OpenDocument. E os dois pacotes abrem e salvam os formatos um do outro, e exportam para PDF."),
        f("Memorize: nos formatos ODF, a letra do meio indica o tipo. T de texto, S de spreadsheet, que é planilha, e P de presentation.",
          "Memorize: nos formatos ó dê éfe, a letra do meio indica o tipo. tê de texto, ésse de sprédchit, que é planilha, e pê de prezentêixon."),
      ],
      montar(c) {
        c.titulo("Formatos de arquivo", "Do .doc ao ODF", { left: 140, top: 150 }, c.t(0), { medio: true });
        const grupo = (x, rotulo, exts, cls, t) => {
          const e = c.novo(`<div class="abs" style="left:${x}px;top:310px"><div class="rotulo" style="font-size:22px;${cls ? "color:var(--texto-fraco)" : ""}">${rotulo}</div>
            <div style="display:flex;gap:14px;margin-top:14px">${exts.map((x) => `<span class="c4-ext ${cls}">${x}</span>`).join("")}</div></div>`);
          return c.entra(e, t, "baixo");
        };
        grupo(140, "Office até 2003", [".doc", ".xls", ".ppt"], "velho", em(c, this, 0, "usavam"));
        c.seta(640, 395, 760, 395, em(c, this, 0, "sem o x"));
        const atual = grupo(800, "Office atual", [".doc<b style=\"color:#c27c0e\">x</b>", ".xls<b style=\"color:#c27c0e\">x</b>", ".ppt<b style=\"color:#c27c0e\">x</b>"], "", em(c, this, 0, "sem o x", 0.3));

        const odf = c.novo(`<div class="cartao" style="left:140px;top:470px;width:1380px;height:200px;padding:30px 36px;display:flex;gap:30px;align-items:center">
          ${icone("livre")}
          <div style="flex:1"><h3 style="margin:0">ODF · OpenDocument <span class="c4-tag">padrão aberto</span></h3>
            <div class="exts" style="display:flex;gap:14px;margin-top:16px">
              <span class="c4-ext">.od<b class="m">t</b></span><span class="c4-ext">.od<b class="m">s</b></span><span class="c4-ext">.od<b class="m">p</b></span></div></div>
          <div class="compat" style="width:440px;display:flex;flex-direction:column;gap:12px;font-size:26px;color:var(--texto-suave)">
            <div style="display:flex;gap:14px;align-items:center">${icone("setas")}<span>abrem e salvam os formatos <b>um do outro</b></span></div>
            <div style="display:flex;gap:14px;align-items:center">${icone("pdf")}<span>exportam para <b>PDF</b></span></div></div></div>`);
        odf.querySelector(".icone").style.cssText = "width:100px;height:100px;margin:0";
        odf.querySelectorAll(".compat .icone").forEach((i) => { i.style.cssText = "width:52px;height:52px;margin:0;flex-shrink:0"; });
        c.entra(odf, c.t(1), "baixo");
        const compat = odf.querySelectorAll(".compat > div");
        c.entra(compat[0], em(c, this, 1, "os dois pacotes"), "esquerda");
        c.entra(compat[1], em(c, this, 1, "exportam"), "esquerda");

        quadroLivre(c, "dica", `<p>A letra do meio indica o tipo: od<b>t</b> = <b>t</b>exto · od<b>s</b> = <b>s</b>preadsheet (planilha) · od<b>p</b> = <b>p</b>resentation.</p>`,
          { left: 140, top: 710, width: 1380 }, c.t(2));
        odf.querySelectorAll(".m").forEach((m, i) => {
          c.tl.to(m, { color: "#c27c0e", duration: 0.3 }, em(c, this, 2, ["T de", "S de", "P de"][i]));
        });
        void atual;
      },
    },

    // ------------------------------------------------------- Microsoft Word
    {
      id: "word-faixa",
      visual: "Bloco com ícone de documento e etiquetas “ofícios”, “relatórios”, “memorandos”. Depois, uma janela genérica com a Faixa de Opções e suas 8 guias; cada guia acende quando é citada e o cartão correspondente, com os recursos principais, entra numa grade 4 × 2.",
      secao: "Microsoft Word",
      bit: BIT_CANTO,
      falas: [
        f("Agora, o Word: o editor de texto do Office, usado para ofícios, relatórios, memorandos e documentos em geral."),
        f("Os comandos ficam na Faixa de Opções, organizada em guias. Na Página Inicial ficam a fonte, o parágrafo, os estilos, e o localizar e substituir."),
        f("Na guia Inserir: tabelas, imagens, links, cabeçalho e rodapé, número de página e quebra de página. Em Design, os temas e a marca-d'água."),
        f("Em Layout: margens, orientação, tamanho do papel, colunas e quebras de seção. Em Referências: sumário, notas de rodapé, citações e bibliografia."),
        f("Correspondências cuida da mala direta, de envelopes e etiquetas. Revisão traz ortografia, comentários e controlar alterações. E Exibir, os modos de exibição, a régua e o zoom."),
      ],
      montar(c) {
        c.titulo("Microsoft Word", "O editor de texto", { left: 140, top: 150 }, c.t(0), { medio: true });
        const doc = c.no({ icone: "documento", titulo: "Word", texto: "editor de texto" }, { left: 140, top: 340, width: 400, height: 340 }, c.t(0, 0.4));
        const usos = ["ofícios", "relatórios", "memorandos"].map((u, i) => c.entra(c.novo(`<div class="abs pilula" style="left:620px;top:${380 + i * 90}px;font-size:36px">${u}</div>`), em(c, this, 0, u), "esquerda"));
        [doc, ...usos].forEach((e) => c.sai(e, c.t(1) - 0.4));

        const guias = ["Página Inicial", "Inserir", "Design", "Layout", "Referências", "Correspondências", "Revisão", "Exibir"];
        const janela = c.novo(`<div class="abs" style="left:140px;top:320px;width:1420px;height:124px;border-radius:18px;overflow:hidden;background:#fff;box-shadow:var(--sombra)">
          <div style="height:40px;background:var(--cor);display:flex;align-items:center;gap:10px;padding:0 18px">
            <i style="width:12px;height:12px;border-radius:50%;background:#fff;opacity:.8"></i><i style="width:12px;height:12px;border-radius:50%;background:#fff;opacity:.6"></i><i style="width:12px;height:12px;border-radius:50%;background:#fff;opacity:.4"></i>
            <span style="margin-left:14px;color:#fff;font:700 20px var(--sans);letter-spacing:.06em">FAIXA DE OPÇÕES</span></div>
          <div style="display:flex;gap:6px;padding:12px 16px">${guias.map((g) => `<span class="guia" style="padding:12px 18px;border-radius:12px;font:700 24px var(--sans);color:var(--texto-suave)">${g}</span>`).join("")}</div></div>`);
        c.entra(janela, em(c, this, 1, "Faixa"), "baixo");
        const abas = janela.querySelectorAll(".guia");
        const recursos = [
          "fonte, parágrafo, estilos, localizar e substituir",
          "tabelas, imagens, links, cabeçalho e rodapé, nº de página, quebra de página",
          "temas e marca-d'água",
          "margens, orientação, tamanho do papel, colunas, quebras de seção",
          "sumário, notas de rodapé, citações e bibliografia",
          "mala direta, envelopes e etiquetas",
          "ortografia, comentários e controlar alterações",
          "modos de exibição, régua, zoom",
        ];
        const tempos = [
          em(c, this, 1, "Na Página"), c.t(2), em(c, this, 2, "Em Design"), c.t(3), em(c, this, 3, "Em Referências"),
          c.t(4), em(c, this, 4, "Revisão"), em(c, this, 4, "E Exibir"),
        ];
        guias.forEach((g, i) => {
          const col = i % 4, lin = Math.floor(i / 4);
          const e = c.novo(`<div class="cartao" style="left:${140 + col * 360}px;top:${474 + lin * 222}px;width:340px;height:204px;padding:22px 24px">
            <h3 style="font-size:28px;color:var(--cor);margin-bottom:8px">${g}</h3><p style="font-size:23px;line-height:1.35">${recursos[i]}</p></div>`);
          c.entra(e, tempos[i], "baixo");
          c.tl.to(abas[i], { backgroundColor: COR_SUAVE, color: COR, duration: 0.3 }, tempos[i]);
        });
      },
    },
    {
      id: "word-recursos",
      visual: "Quatro miniaturas de parágrafo: à esquerda, centralizado, à direita e justificado. Na pegadinha, a miniatura “à esquerda” ganha o selo “padrão” e entra o quadro âmbar. Depois, grade 3 × 2 de cartões com ícones: Estilos → sumário, Quebra de página, Quebra de seção, Controlar Alterações, Mala direta e Pincel de Formatação.",
      secao: "Microsoft Word",
      bit: BIT_CANTO,
      falas: [
        f("Vamos aos recursos mais cobrados. O Word tem quatro alinhamentos: à esquerda, centralizado, à direita e justificado."),
        f("E aqui mora uma pegadinha: o alinhamento padrão é à esquerda, e não justificado. Documentos oficiais costumam usar justificado, mas isso precisa ser aplicado."),
        f("Os estilos são formatações prontas, como Título 1, Título 2 e Normal. Usando os estilos de título, o Word gera o sumário automático."),
        f("A quebra de página força o texto a continuar na próxima página. Já a quebra de seção permite ter partes com orientação, margens ou cabeçalhos diferentes."),
        f("O Controlar Alterações registra tudo o que foi incluído ou excluído, para que outra pessoa aceite ou rejeite as mudanças."),
        f("A mala direta combina um documento-modelo com uma lista de dados para gerar várias cartas personalizadas. E o Pincel de Formatação copia a formatação de um trecho e aplica em outro."),
      ],
      montar(c) {
        c.titulo("Recursos do Word", "Os mais cobrados", { left: 140, top: 150 }, c.t(0), { medio: true });
        const al = [["esquerda", "À esquerda"], ["centro", "Centralizado"], ["direita", "À direita"], ["justificado", "Justificado"]];
        const tempos = [em(c, this, 0, "à esquerda"), em(c, this, 0, "centralizado"), em(c, this, 0, "à direita"), em(c, this, 0, "justificado")];
        const cartoes = al.map((a, i) => {
          const e = c.novo(`<div class="cartao" style="left:${140 + i * 360}px;top:320px;width:330px;height:290px;padding:34px 40px">
            ${svgAlinhamento(a[0])}<h3 style="margin-top:22px;font-size:32px">${a[1]}</h3></div>`);
          c.entra(e, tempos[i], "pop");
          return e;
        });
        const selo = c.novo(`<div class="abs pilula" style="left:330px;top:296px;background:var(--cor);color:#fff;font-size:24px;z-index:3">padrão</div>`);
        c.entra(selo, em(c, this, 1, "à esquerda"), "pop");
        c.tl.to(cartoes[0], { boxShadow: `0 0 0 6px ${COR}, 0 18px 40px rgba(26,34,48,.10)`, duration: 0.4 }, em(c, this, 1, "à esquerda"));
        const prova = c.quadro("prova", "“O padrão do Word é justificado.” <b>Errado</b>: o padrão é <b>à esquerda</b>. O justificado precisa ser aplicado.", { left: 140, top: 650, width: 1420 }, em(c, this, 1, "pegadinha"));
        [...cartoes, selo, prova].forEach((e) => c.sai(e, c.t(2) - 0.4));

        const itens = [
          { icone: "texto2", titulo: "Estilos", texto: "Título 1, Título 2, Normal → geram o <b>sumário automático</b>.", t: c.t(2) },
          { icone: "quebra", titulo: "Quebra de página", texto: "O texto continua na <b>próxima página</b>.", t: c.t(3) },
          { icone: "secao", titulo: "Quebra de seção", texto: "Partes com <b>orientação, margens ou cabeçalhos</b> diferentes.", t: em(c, this, 3, "Já a quebra") },
          { icone: "alteracoes", titulo: "Controlar Alterações", texto: "Registra inclusões e exclusões para <b>aceitar ou rejeitar</b>.", t: c.t(4) },
          { icone: "carta", titulo: "Mala direta", texto: "Modelo + lista de dados = <b>várias cartas</b> personalizadas.", t: c.t(5) },
          { icone: "pincel", titulo: "Pincel de Formatação", texto: "<b>Copia a formatação</b> de um trecho e aplica em outro.", t: em(c, this, 5, "E o Pincel") },
        ];
        itens.forEach((k, i) => {
          const col = i % 3, lin = Math.floor(i / 3);
          const e = c.novo(`<div class="cartao" style="left:${140 + col * 470}px;top:${320 + lin * 280}px;width:440px;height:254px;padding:28px 30px">
            <div style="display:flex;gap:18px;align-items:center">${icone(k.icone)}<h3 style="margin:0;font-size:32px">${k.titulo}</h3></div>
            <p style="margin-top:16px;font-size:26px">${k.texto}</p></div>`);
          e.querySelector(".icone").style.cssText = "width:72px;height:72px;margin:0;flex-shrink:0";
          c.entra(e, k.t, "baixo");
        });
      },
    },
    {
      id: "word-formatacao",
      visual: "Quatro cartões ilustrados (2 × 2), um por frase: Tabelas e listas (grade com células mescladas e lista com marcadores), Recuos (parágrafo com recuo de primeira linha × recuo deslocado), Espaçamento (blocos 1,0 · 1,5 · 2,0) e Colunas (página de jornal em duas colunas).",
      secao: "Microsoft Word",
      bit: BIT_CANTO,
      falas: [
        f("O Word tem ainda vários recursos de formatação. As tabelas organizam dados em linhas e colunas, e permitem mesclar e dividir células. Os marcadores e a numeração criam listas automáticas."),
        f("Nos recuos, atenção: o recuo de primeira linha afasta só a primeira linha do parágrafo. Já o recuo deslocado afasta todas, menos a primeira."),
        f("O espaçamento entre linhas pode ser simples, de 1,5 linha ou duplo, e ainda há o espaçamento antes e depois do parágrafo."),
        f("E as colunas dividem o texto como em um jornal."),
      ],
      montar(c) {
        c.titulo("Formatação", "Tabelas, recuos, espaçamento e colunas", { left: 140, top: 150 }, c.t(0), { medio: true });
        const cinza = "#b9c3d3";
        const ilus = {
          tabela: `<svg viewBox="0 0 220 200" style="width:220px;height:200px">
            <rect x="0" y="0" width="220" height="96" rx="10" fill="#fff" stroke="${cinza}" stroke-width="4"/>
            <rect x="2" y="2" width="216" height="30" rx="8" fill="${COR}"/><text x="110" y="24" text-anchor="middle" font-family="Inter" font-weight="700" font-size="17" fill="#fff">célula mesclada</text>
            <path d="M0 64h220M73 32v64M146 32v64" stroke="${cinza}" stroke-width="3"/>
            ${[124, 154, 184].map((y, i) => `<circle cx="12" cy="${y}" r="7" fill="${COR}"/><rect x="30" y="${y - 6}" width="${[170, 130, 150][i]}" height="12" rx="6" fill="${cinza}"/>`).join("")}</svg>`,
          recuo: `<svg viewBox="0 0 230 200" style="width:230px;height:200px">
            <text x="0" y="18" font-family="Inter" font-weight="700" font-size="17" fill="${COR}">1ª linha</text>
            ${linhasSvg(34, 32, [70], 18, 9, COR)}${linhasSvg(0, 50, [104, 104, 104, 70], 18, 9, cinza)}
            <text x="126" y="18" font-family="Inter" font-weight="700" font-size="17" fill="${COR}">deslocado</text>
            ${linhasSvg(126, 32, [104], 18, 9, cinza)}${linhasSvg(160, 50, [70, 70, 70, 50], 18, 9, COR)}
            <path d="M0 148h104M126 148h104" stroke="#e3e8f0" stroke-width="3"/>
            <path d="M4 168l26 0M22 160l8 8-8 8" stroke="${COR}" stroke-width="5" fill="none" stroke-linecap="round"/>
            <path d="M130 168l26 0M148 160l8 8-8 8" stroke="${COR}" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
          espaco: `<svg viewBox="0 0 220 200" style="width:220px;height:200px">
            ${[[0, 12, "1,0"], [76, 18, "1,5"], [152, 24, "2,0"]].map(([x, p, r]) => `${linhasSvg(x, 30, [62, 62, 62, 44], p, 8, cinza)}<text x="${x + 31}" y="18" text-anchor="middle" font-family="Inter" font-weight="800" font-size="20" fill="${COR}">${r}</text>`).join("")}
          </svg>`,
          colunas: `<svg viewBox="0 0 220 200" style="width:220px;height:200px">
            <rect x="10" y="0" width="200" height="200" rx="12" fill="#fff" stroke="${cinza}" stroke-width="4"/>
            <rect x="28" y="18" width="164" height="16" rx="6" fill="${COR}"/>
            ${linhasSvg(28, 48, [76, 76, 76, 76, 76, 76, 76, 50], 18, 8, cinza)}${linhasSvg(116, 48, [76, 76, 76, 76, 76, 76, 60], 18, 8, cinza)}</svg>`,
        };
        const cartoes = [
          ["tabela", "Tabelas e listas", "<b>Tabelas</b>: mesclar e dividir células.<br><b>Marcadores e numeração</b>: listas automáticas.", c.t(0, 1.2)],
          ["recuo", "Recuos", "<b>Primeira linha</b>: só a 1ª linha.<br><b>Deslocado</b>: todas, menos a 1ª.", c.t(1)],
          ["espaco", "Espaçamento", "Simples (1,0), <b>1,5 linha</b> e duplo (2,0), além de antes e depois do parágrafo.", c.t(2)],
          ["colunas", "Colunas", "Divide o texto em colunas, <b>como em jornais</b>.", c.t(3)],
        ];
        cartoes.forEach((k, i) => {
          const col = i % 2, lin = Math.floor(i / 2);
          const e = c.novo(`<div class="cartao" style="left:${140 + col * 720}px;top:${310 + lin * 290}px;width:700px;height:268px;padding:30px 34px;display:flex;gap:30px;align-items:center">
            <div style="flex-shrink:0">${ilus[k[0]]}</div><div><h3 style="font-size:34px">${k[1]}</h3><p style="font-size:26px">${k[2]}</p></div></div>`);
          c.entra(e, k[3], "baixo");
        });
      },
    },
    {
      id: "word-notas",
      visual: "Duas páginas desenhadas: “Nota de rodapé” (a nota aparece no pé da mesma página) e “Nota de fim” (três páginas, a nota no final da última). Quadro verde “Memorize”. Depois, quatro cartões: Legendas, AutoCorreção, Proteger documento e Salvar como PDF. Por fim, a fileira dos 5 modos de exibição, com “Layout de Impressão” marcado como padrão.",
      secao: "Microsoft Word",
      bit: BIT_CANTO,
      falas: [
        f("Outra comparação clássica: a nota de rodapé aparece no pé da mesma página. Já a nota de fim aparece no final do documento, ou da seção."),
        f("Memorize: rodapé é o pé da página. Fim é o final do documento."),
        f("As legendas numeram figuras e tabelas e geram automaticamente o índice de ilustrações. E a AutoCorreção corrige erros comuns de digitação enquanto você escreve."),
        f("Você também pode proteger o documento, exigindo senha para abrir ou restringindo a edição. E salvar como PDF pelo próprio Word, em Arquivo, Salvar como ou Exportar."),
        f("Por fim, os modos de exibição do Word: Modo de Leitura, Layout de Impressão, que é o padrão, Layout da Web, Estrutura de Tópicos e Rascunho."),
      ],
      montar(c) {
        c.titulo("Mais recursos do Word", "Notas, proteção e exibição", { left: 140, top: 150 }, c.t(0), { medio: true });
        const cinza = "#b9c3d3";
        const pagina = (x, y, nota, sup) => `<g transform="translate(${x} ${y})"><rect width="150" height="200" rx="10" fill="#fff" stroke="#d3dae6" stroke-width="3"/>
          ${linhasSvg(18, 22, [114, 100, 114, 84, 110, 96], 16, 7, cinza)}
          ${sup ? `<text x="${sup}" y="34" font-family="Inter" font-weight="800" font-size="20" fill="${COR}">1</text>` : ""}
          ${nota ? `<path d="M18 162h50" stroke="${cinza}" stroke-width="3"/><rect class="nota" x="18" y="172" width="110" height="10" rx="5" fill="${COR}"/>` : ""}</g>`;
        const rod = c.novo(`<div class="cartao" style="left:140px;top:310px;width:680px;height:400px;padding:30px 36px">
          <div class="rotulo">Nota de rodapé</div>
          <div style="display:flex;gap:36px;align-items:center;margin-top:18px">
            <svg viewBox="0 0 150 200" style="width:180px;height:240px">${pagina(0, 0, true, 134)}</svg>
            <p style="font-size:32px">No <b>pé da mesma página</b>.</p></div></div>`);
        c.entra(rod, c.t(0, 0.6), "esquerda");
        const fim = c.novo(`<div class="cartao" style="left:880px;top:310px;width:680px;height:400px;padding:30px 36px">
          <div class="rotulo">Nota de fim</div>
          <div style="display:flex;gap:30px;align-items:center;margin-top:18px">
            <svg viewBox="0 0 330 200" style="width:300px;height:182px">${pagina(0, 0, false, 134)}${pagina(90, 0, false)}${pagina(180, 0, true)}</svg>
            <p style="font-size:30px">No <b>final do documento</b> (ou da seção).</p></div></div>`);
        c.entra(fim, em(c, this, 0, "Já a nota"), "direita");
        const dica = c.quadro("dica", "Rodapé = pé da <b>página</b>. Fim = final do <b>documento</b>.", { left: 140, top: 740, width: 1420 }, c.t(1));
        [rod, fim, dica].forEach((e) => c.sai(e, c.t(2) - 0.4));

        const cartoes = [
          { icone: "legenda", titulo: "Legendas", texto: "Numeram figuras e tabelas e geram o <b>índice de ilustrações</b>.", t: c.t(2) },
          { icone: "abc", titulo: "AutoCorreção", texto: "Corrige erros comuns <b>enquanto você digita</b>.", t: em(c, this, 2, "E a AutoCorreção") },
          { icone: "cadeado", titulo: "Proteger documento", texto: "Senha para <b>abrir</b> ou restrição da <b>edição</b>.", t: c.t(3) },
          { icone: "pdf", titulo: "Salvar como PDF", texto: "Arquivo › Salvar como ou Exportar.", t: em(c, this, 3, "E salvar") },
        ];
        cartoes.forEach((k, i) => c.cartao(k, { left: 140 + i * 360, top: 310, width: 340, height: 300, padding: "28px 30px" }, k.t));
        c.el.querySelectorAll(".cartao .icone").forEach((i) => { i.style.cssText = "width:76px;height:76px;margin-bottom:14px"; });
        c.el.querySelectorAll(".cartao p").forEach((p) => { p.style.fontSize = "25px"; });
        c.el.querySelectorAll(".cartao h3").forEach((h) => { h.style.fontSize = "31px"; });

        c.entra(c.novo(`<div class="abs rotulo" style="left:140px;top:650px">Modos de exibição</div>`), c.t(4), "fade");
        const modos = ["Modo de Leitura", "Layout de Impressão", "Layout da Web", "Estrutura de Tópicos", "Rascunho"];
        modos.forEach((m, i) => {
          const padrao = i === 1;
          const e = c.novo(`<div class="no" style="left:${140 + i * 286}px;top:700px;width:268px;height:110px;padding:16px;${padrao ? `outline:5px solid ${COR};background:${COR_SUAVE}` : ""}">
            <strong style="font-size:27px;line-height:1.2">${m}</strong></div>`);
          c.entra(e, em(c, this, 4, m), "pop");
        });
        c.entra(c.novo(`<div class="abs pilula" style="left:500px;top:676px;background:var(--cor);color:#fff;font-size:22px;padding:4px 18px;z-index:3">padrão</div>`), em(c, this, 4, "que é o padrão"), "pop");
      },
    },

    // ------------------------------------------------ Atalhos: Word × Writer
    {
      id: "atalhos-1",
      visual: "Duas tabelas de teclas (Ação · Word PT-BR em verde · Writer em azul-marinho). Linhas entram uma por vez: Negrito, Itálico, Sublinhado, Salvar | Novo documento, Abrir, Selecionar tudo, Imprimir. Quando o atalho é igual nos dois, aparece o selo “igual”.",
      secao: "Atalhos: Word × Writer",
      bit: BIT_CANTO,
      falas: [
        f("Agora, um dos assuntos favoritos das bancas: os atalhos do Word em português são diferentes dos atalhos do LibreOffice Writer."),
        f("Negrito: no Word, é Ctrl + N. No Writer, Ctrl + B."),
        f("Itálico é igual nos dois: Ctrl + I. Já o sublinhado é Ctrl + S no Word e Ctrl + U no Writer."),
        f("Para salvar, o Word usa Ctrl + B, e o Writer, Ctrl + S."),
        f("Novo documento: Ctrl + O no Word e Ctrl + N no Writer. Abrir: Ctrl + A no Word e Ctrl + O no Writer."),
        f("Selecionar tudo: Ctrl + T no Word e Ctrl + A no Writer. Já imprimir é igual: Ctrl + P nos dois."),
      ],
      montar(c) {
        c.titulo("Atalhos", "Word (PT-BR) × Writer", { left: 140, top: 150 }, c.t(0), { medio: true });
        tabelaAtalhos(c, { left: 140, top: 320, cols: [250, 220, 220] }, c.t(0, 4), [
          ["Negrito", "Ctrl+N", "Ctrl+B", c.t(1)],
          ["Itálico", "Ctrl+I", "Ctrl+I", c.t(2)],
          ["Sublinhado", "Ctrl+S", "Ctrl+U", em(c, this, 2, "Já o sublinhado")],
          ["Salvar", "Ctrl+B", "Ctrl+S", c.t(3)],
        ]);
        tabelaAtalhos(c, { left: 870, top: 320, cols: [250, 220, 220] }, c.t(0, 4.4), [
          ["Novo documento", "Ctrl+O", "Ctrl+N", c.t(4)],
          ["Abrir", "Ctrl+A", "Ctrl+O", em(c, this, 4, "Abrir")],
          ["Selecionar tudo", "Ctrl+T", "Ctrl+A", c.t(5)],
          ["Imprimir", "Ctrl+P", "Ctrl+P", em(c, this, 5, "Já imprimir")],
        ]);
      },
    },
    {
      id: "atalhos-2",
      visual: "Mais duas tabelas: alinhamentos (Centralizar, Justificar, Esquerda, Direita) e Localizar, Localizar e substituir, Quebra de página, Ortografia e Salvar como. Depois, quadro “Memorize” com as teclas N I S A T (português) × B U S O A (inglês) acendendo uma a uma, e o quadro âmbar da pegadinha do Ctrl + S.",
      secao: "Atalhos: Word × Writer",
      bit: BIT_CANTO,
      falas: [
        f("Nos alinhamentos, centralizar e justificar são iguais nos dois: Ctrl + E e Ctrl + J."),
        f("Mas alinhar à esquerda é Ctrl + Q no Word e Ctrl + L no Writer. E alinhar à direita, Ctrl + G no Word e Ctrl + R no Writer."),
        f("Localizar é Ctrl + L no Word e Ctrl + F no Writer. E localizar e substituir, Ctrl + U no Word e Ctrl + H no Writer."),
        f("Quebra de página e ortografia são iguais: Ctrl + Enter e F7. Mas o Salvar como é F12 no Word e Ctrl + Shift + S no Writer."),
        f("Memorize: no Word em português, os atalhos seguem a palavra em português. N de negrito, I de itálico, S de sublinhado, A de abrir e T de tudo.",
          "Memorize: no uórd em português, os atalhos seguem a palavra em português. ene de negrito, i de itálico, ésse de sublinhado, á de abrir e tê de tudo."),
        f("No LibreOffice, seguem o inglês: B de bold, U de underline, S de save, O de open e A de all.",
          "No líbre ófis, seguem o inglês: bê de bôuld, u de ânderláine, ésse de sêiv, ó de ôupen e á de ól."),
        f("E a pegadinha: Ctrl + S sublinha no Word em português, mas salva no LibreOffice. Leia com atenção qual programa a questão menciona."),
      ],
      montar(c) {
        c.titulo("Atalhos", "Alinhar, localizar e salvar", { left: 140, top: 150 }, c.t(0), { medio: true });
        const t1 = tabelaAtalhos(c, { left: 140, top: 320, cols: [230, 180, 180] }, c.t(0), [
          ["Centralizar", "Ctrl+E", "Ctrl+E", em(c, this, 0, "Ctrl + E")],
          ["Justificar", "Ctrl+J", "Ctrl+J", em(c, this, 0, "Ctrl + J")],
          ["Alinhar à esquerda", "Ctrl+Q", "Ctrl+L", c.t(1)],
          ["Alinhar à direita", "Ctrl+G", "Ctrl+R", em(c, this, 1, "E alinhar")],
        ]);
        const t2 = tabelaAtalhos(c, { left: 770, top: 320, cols: [280, 210, 290] }, c.t(2), [
          ["Localizar", "Ctrl+L", "Ctrl+F", c.t(2)],
          ["Localizar e substituir", "Ctrl+U", "Ctrl+H", em(c, this, 2, "E localizar")],
          ["Quebra de página", "Ctrl+Enter", "Ctrl+Enter", c.t(3)],
          ["Ortografia e gramática", "F7", "F7", em(c, this, 3, "e F7")],
          ["Salvar como", "F12", "Ctrl+Shift+S", em(c, this, 3, "Mas o Salvar")],
        ]);
        [...t1, ...t2].forEach((e) => c.sai(e, c.t(4) - 0.4));

        const coluna = (titulo, cor, letras, palavras, cls) => `<div style="flex:1">
          <div style="font:700 28px var(--sans);color:${cor}">${titulo}</div>
          <div style="display:flex;gap:16px;margin-top:18px">${letras.map((l, i) => `<div class="tec" style="display:flex;flex-direction:column;align-items:center;gap:8px;width:118px">
            ${tecla(l, cls)}<span style="font-size:23px;color:var(--texto-suave)"><b style="color:${cor}">${palavras[i][0]}</b>${palavras[i].slice(1)}</span></div>`).join("")}</div></div>`;
        const memo = quadroLivre(c, "dica", `<div style="display:flex;gap:40px;margin-top:4px">
          ${coluna("Word em português → palavras em português", COR, ["N", "I", "S", "A", "T"], ["Negrito", "Itálico", "Sublinhado", "Abrir", "Tudo"], "w")}
          ${coluna("LibreOffice → palavras em inglês", NAVY, ["B", "U", "S", "O", "A"], ["Bold", "Underline", "Save", "Open", "All"], "l")}</div>`,
        { left: 140, top: 320, width: 1420 }, c.t(4));
        const tecs = memo.querySelectorAll(".tec");
        ["N de", "I de", "S de", "A de", "T de"].forEach((s, i) => c.entra(tecs[i], em(c, this, 4, s), "pop"));
        ["B de", "U de", "S de", "O de", "A de"].forEach((s, i) => c.entra(tecs[i + 5], em(c, this, 5, s), "pop"));
        c.quadro("prova", `<span style="vertical-align:middle">${atalho("Ctrl+S")}</span> <b>sublinha</b> no Word em português, mas <b>salva</b> no LibreOffice. Leia qual programa a questão menciona.`,
          { left: 140, top: 680, width: 1420 }, c.t(6));
      },
    },

    // ------------------------------------------------------ Excel: fórmulas
    {
      id: "excel-estrutura",
      visual: "Planilha desenhada (colunas A–F, linhas 1–10) com abas Planilha1, Planilha2, Planilha3. À direita, cartões que entram por frase: Pasta de trabalho, Colunas e linhas (cabeçalhos acendem), Célula B3 (destacada na grade) e Intervalo A1:A10 (moldura na coluna A). Por fim, contadores “1.048.576 linhas” e “16.384 colunas (até XFD)”.",
      secao: "Excel: fórmulas",
      bit: BIT_CANTO,
      falas: [
        f("Chegamos ao Excel, a planilha eletrônica do Office, usada para cálculos, controle de dados, relatórios e gráficos."),
        f("O arquivo do Excel é a pasta de trabalho, que pode conter várias planilhas. Cada planilha é uma aba."),
        f("A planilha é formada por colunas, identificadas por letras, e por linhas, identificadas por números."),
        f("A célula é o encontro de uma coluna com uma linha, e é identificada pelo endereço, como B3: coluna B, linha 3."),
        f("E um intervalo é um conjunto de células, como A1 até A10."),
        f("Nas versões atuais, cada planilha tem 1.048.576 linhas e 16.384 colunas, até a coluna XFD.",
          "Nas versões atuais, cada planilha tem 1.048.576 linhas e 16.384 colunas, até a coluna xis éfe dê."),
      ],
      montar(c) {
        c.titulo("Microsoft Excel", "A estrutura da planilha", { left: 140, top: 150 }, c.t(0), { medio: true });
        const cols = ["A", "B", "C", "D", "E", "F"];
        const g = grade(c, { left: 140, top: 320, cols, linhas: 10, cw: 130, ch: 42, rw: 64 });
        c.entra(g.el, c.t(0, 1), "baixo");
        const abas = c.novo(`<div class="abs" style="left:140px;top:790px;display:flex;gap:8px">${["Planilha1", "Planilha2", "Planilha3"].map((p, i) => `<span style="padding:8px 22px;border-radius:0 0 12px 12px;font:700 22px var(--sans);background:${i === 0 ? "#fff" : "#e9edf3"};color:${i === 0 ? COR : "var(--texto-fraco)"};box-shadow:0 4px 10px rgba(0,0,0,.06)">${p}</span>`).join("")}</div>`);
        [...abas.children].forEach((a, i) => c.entra(a, em(c, this, 1, "Cada planilha") + i * 0.25, "pop"));
        const usos = ["cálculos", "controle de dados", "relatórios", "gráficos"].map((u, i) => c.entra(c.novo(`<div class="abs pilula" style="left:1060px;top:${340 + i * 84}px;font-size:32px">${u}</div>`), em(c, this, 0, u), "esquerda"));
        usos.forEach((u) => c.sai(u, c.t(1) - 0.4));

        const cards = [
          cartaoH(c, { icone: "pasta", titulo: "Pasta de trabalho", texto: "O arquivo do Excel: <b>várias planilhas</b> (abas)." }, { left: 1050, top: 320, width: 510, height: 150 }, c.t(1), "direita"),
          cartaoH(c, { icone: "planilha", titulo: "Colunas e linhas", texto: "Colunas = <b>letras</b> · linhas = <b>números</b>." }, { left: 1050, top: 486, width: 510, height: 150 }, c.t(2), "direita"),
          cartaoH(c, { icone: "alvo", titulo: "Célula B3", texto: "Coluna <b>B</b> + linha <b>3</b>." }, { left: 1050, top: 652, width: 510, height: 150 }, c.t(3), "direita"),
        ];
        g.el.querySelectorAll("[data-col]").forEach((h) => c.tl.to(h, { backgroundColor: COR_SUAVE, color: COR, duration: 0.3 }, em(c, this, 2, "colunas")));
        g.el.querySelectorAll("[data-lin]").forEach((h) => c.tl.to(h, { backgroundColor: COR_SUAVE, color: COR, duration: 0.3 }, em(c, this, 2, "por linhas")));
        const b3 = g.marcar("B3", null, em(c, this, 3, "como B3"));
        const nome = c.entra(c.novo(`<div class="abs pilula c4-cod" style="left:${g.x("C") + 10}px;top:${g.y(3) - 4}px;background:var(--cor);color:#fff">B3</div>`), em(c, this, 3, "como B3", 0.3), "pop");
        const intervalo = g.marcar("A1", "A10", c.t(4, 0.6), NAVY);
        const rot = c.entra(c.novo(`<div class="abs pilula c4-cod" style="left:${g.x("B") + 14}px;top:${g.y(6)}px;background:${NAVY};color:#fff">A1:A10</div>`), em(c, this, 4, "como A1"), "pop");
        [...cards, b3, nome].forEach((e) => c.sai(e, c.t(5) - 0.4));
        void intervalo; void rot;

        const stat = (y, alvo, rotulo, t) => {
          const e = c.novo(`<div class="cartao" style="left:1050px;top:${y}px;width:510px;height:200px;padding:30px 36px">
            <div style="font:800 64px var(--sans);color:var(--cor)"><span class="valor">0</span></div><p style="font-size:30px">${rotulo}</p></div>`);
          c.entra(e, t, "baixo");
          c.contar(e.querySelector(".valor"), 0, alvo, t + 0.2, 1.4);
        };
        stat(330, 1048576, "<b>linhas</b> por planilha", em(c, this, 5, "1.048.576"));
        stat(560, 16384, "<b>colunas</b> — até a coluna <b class=\"c4-cod\">XFD</b>", em(c, this, 5, "16.384"));
      },
    },
    {
      id: "excel-operadores",
      visual: "Barra de fórmulas “fx =SOMA(A1;A5)” com o sinal de igual e o ponto e vírgula destacados e etiquetas “começa com =” e “; separa argumentos”. Abaixo, cinco peças de operador, uma por menção: + - * /, ^ (=2^3 → 8), % (=200*10% → 20), & (junta textos) e comparação (= <> > < >= <=).",
      secao: "Excel: fórmulas",
      bit: BIT_CANTO,
      falas: [
        f("Toda fórmula começa com o sinal de igual. E, na versão em português, os argumentos das funções são separados por ponto e vírgula."),
        f("Os operadores aritméticos são o mais, o menos, o asterisco, que multiplica, e a barra, que divide."),
        f("O acento circunflexo é a potência: 2 elevado a 3 resulta em 8. E o símbolo de porcentagem calcula o percentual: 200 vezes 10% resulta em 20."),
        f("O e comercial junta textos, ou seja, concatena. E os operadores de comparação são: igual, diferente, maior, menor, maior ou igual e menor ou igual."),
      ],
      montar(c) {
        c.titulo("Fórmulas", "Tudo começa com =", { left: 140, top: 150 }, c.t(0), { medio: true });
        const barra = c.novo(`<div class="c4-faixa" style="left:140px;top:320px;width:1420px;height:96px">
          <span style="font:italic 700 32px var(--serif);color:var(--texto-fraco);border-right:2px solid var(--borda);padding-right:22px">fx</span>
          <span class="c4-cod" style="font-size:46px"><span class="igual" style="color:var(--cor)">=</span>SOMA(A1<span class="pv" style="color:var(--cor)">;</span>A5)</span></div>`);
        c.entra(barra, c.t(0, 0.3), "baixo");
        c.destaque(barra.querySelector(".igual"), em(c, this, 0, "sinal de igual"));
        c.entra(c.novo(`<div class="abs pilula" style="left:236px;top:432px">começa com =</div>`), em(c, this, 0, "sinal de igual"), "pop");
        c.entra(c.novo(`<div class="abs pilula" style="left:560px;top:432px">; separa os argumentos</div>`), em(c, this, 0, "ponto e vírgula"), "pop");

        const ops = [
          ["+ - * /", "aritméticos", "=A1*B1", c.t(1)],
          ["^", "potência", "=2^3 → 8", c.t(2)],
          ["%", "percentual", "=200*10% → 20", em(c, this, 2, "E o símbolo")],
          ["&amp;", "junta textos (concatena)", "=\"Olá \"&amp;A1", c.t(3)],
          ["= &lt;&gt; &gt; &lt;<br>&gt;= &lt;=", "comparação", "=A1&gt;=7", em(c, this, 3, "E os operadores")],
        ];
        ops.forEach((o, i) => {
          const e = c.novo(`<div class="cartao" style="left:${140 + i * 289}px;top:520px;width:264px;height:290px;padding:26px 24px;display:flex;flex-direction:column">
            <div class="c4-cod" style="font-size:${o[0].includes("<br>") ? 38 : 54}px;color:var(--cor);line-height:1.15;min-height:96px;display:flex;align-items:center">${o[0]}</div>
            <h3 style="font-size:27px;margin:10px 0 0">${o[1]}</h3>
            <div class="c4-cod" style="margin-top:auto;font-size:23px;background:#f2f5f9;border-radius:10px;padding:8px 12px">${o[2]}</div></div>`);
          c.entra(e, o[3], "pop");
        });
      },
    },
    {
      id: "excel-intervalo",
      visual: "Duas mini-planilhas lado a lado: “=SOMA(A1:A5)” com a moldura cobrindo A1 a A5 (“até → 5 células”) e “=SOMA(A1;A5)” com apenas A1 e A5 marcadas (“e → só 2 células”), e o quadro âmbar. Depois, escada de precedência 1º ( ) → 2º ^ → 3º * / → 4º + - e as contas =2+3*4 → 14 e =(2+3)*4 → 20.",
      secao: "Excel: fórmulas",
      bit: BIT_CANTO,
      falas: [
        f("Agora, dois operadores que valem ouro na prova: os dois-pontos e o ponto e vírgula."),
        f("Os dois-pontos indicam um intervalo, como se dissessem “até”. =SOMA(A1:A5) soma A1, A2, A3, A4 e A5.",
          "Os dois-pontos indicam um intervalo, como se dissessem até. Igual soma, de á 1 até á 5, soma á 1, á 2, á 3, á 4 e á 5."),
        f("Já o ponto e vírgula separa argumentos, como se dissesse “e”. =SOMA(A1;A5) soma só A1 e A5. São fórmulas diferentes!",
          "Já o ponto e vírgula separa argumentos, como se dissesse é. Igual soma, á 1 e á 5, soma só á 1 e á 5. São fórmulas diferentes!"),
        f("Também cai muito a ordem de precedência: primeiro os parênteses, depois a potência, em seguida multiplicação e divisão, e por último soma e subtração."),
        f("Assim, =2+3*4 resulta em 14. Mas, com o 2+3 entre parênteses, o resultado é 20.",
          "Assim, igual 2 mais 3 vezes 4 resulta em 14. Mas, com o 2 mais 3 entre parênteses, o resultado é 20."),
      ],
      montar(c) {
        const tit = c.titulo("Pegadinha de banca", "Dois-pontos × ponto e vírgula", { left: 140, top: 150 }, c.t(0), { medio: true });
        const painel = (x, formula, t, marcas, legenda) => {
          const f1 = c.entra(c.novo(`<div class="abs c4-cod" style="left:${x}px;top:310px;font-size:46px">${formula}</div>`), t, "baixo");
          const g = grade(c, { left: x, top: 390, cols: ["A"], linhas: 5, cw: 170, ch: 48, rw: 56 });
          c.entra(g.el, t + 0.2, "baixo");
          const ms = marcas.map(([de, ate], i) => g.marcar(de, ate, t + 1.2 + i * 0.4));
          const leg = c.entra(c.novo(`<div class="abs" style="left:${x + 260}px;top:470px;font-size:34px;color:var(--texto-suave);line-height:1.35">${legenda}</div>`), t + 1.6, "esquerda");
          return [f1, g.el, ...ms, leg];
        };
        const a = painel(140, "=SOMA(A1<b style=\"color:var(--cor)\">:</b>A5)", c.t(1), [["A1", "A5"]], "<b style=\"color:var(--cor);font-size:44px\">:</b> = “até”<br><b>5 células</b>");
        const b = painel(880, "=SOMA(A1<b style=\"color:var(--cor)\">;</b>A5)", c.t(2), [["A1"], ["A5"]], "<b style=\"color:var(--cor);font-size:44px\">;</b> = “e”<br><b>só 2 células</b>");
        const prova = c.quadro("prova", "Os dois-pontos pegam o <b>intervalo inteiro</b>; o ponto e vírgula, <b>apenas as células citadas</b>.", { left: 140, top: 700, width: 1420 }, em(c, this, 2, "São fórmulas"));
        prova.querySelector("p").style.fontSize = "36px";
        [...a, ...b, prova].forEach((e) => c.sai(e, c.t(3) - 0.4));
        c.sai(tit, c.t(3) - 0.4);

        c.titulo("Precedência", "Quem é calculado primeiro", { left: 140, top: 150 }, c.t(3), { medio: true });
        const passos = [["1º", "( )", "parênteses"], ["2º", "^", "potência"], ["3º", "* /", "multiplicação e divisão"], ["4º", "+ -", "soma e subtração"]];
        const tempos = [em(c, this, 3, "primeiro"), em(c, this, 3, "depois a"), em(c, this, 3, "em seguida"), em(c, this, 3, "por último")];
        passos.forEach((p, i) => {
          const e = c.novo(`<div class="cartao" style="left:${140 + i * 370}px;top:320px;width:310px;height:180px;padding:22px 26px">
            <div style="display:flex;align-items:baseline;gap:18px"><span style="font:800 30px var(--sans);color:var(--texto-fraco)">${p[0]}</span>
            <span class="c4-cod" style="font-size:58px;color:var(--cor)">${p[1]}</span></div><p style="font-size:24px;margin-top:6px">${p[2]}</p></div>`);
          c.entra(e, tempos[i], "pop");
          if (i > 0) c.seta(140 + i * 370 - 52, 410, 140 + i * 370 - 10, 410, tempos[i] - 0.2, { dur: 0.4, largura: 6 });
        });
        const conta = (x, formula, passo, res, t) => {
          const e = c.novo(`<div class="cartao" style="left:${x}px;top:560px;width:680px;height:250px;padding:30px 40px">
            <div class="c4-cod" style="font-size:52px">${formula}</div>
            <div style="display:flex;align-items:center;gap:24px;margin-top:26px;font-size:40px;color:var(--texto-suave)">
              <span class="c4-cod passo">${passo}</span><span class="r" style="font:800 64px var(--sans);color:var(--cor)">→ ${res}</span></div></div>`);
          c.entra(e, t, "baixo");
          c.entra(e.querySelector(".passo"), t + 0.8, "fade");
          c.entra(e.querySelector(".r"), t + 1.5, "pop");
        };
        conta(140, "=2+3*4", "2 + 12", "14", c.t(4));
        conta(880, "=(2+3)*4", "5 * 4", "20", em(c, this, 4, "Mas"));
      },
    },
    {
      id: "excel-referencias",
      visual: "Tabela Tipo · Exemplo · Ao copiar, uma linha por frase (relativa A1, absoluta $A$1, mistas $A1 e A$1) e, ao lado, um cifrão grande com cadeado: “trava”. Depois, planilha A–D × 1–3: C1 tem =A1+$B$1; setas levam a fórmula para C2, D1 e D3, onde a parte que muda aparece em verde e $B$1 fica igual. Painel com a tecla F4 alternando A1 → $A$1 → A$1 → $A1 e quadro “Memorize”.",
      secao: "Excel: fórmulas",
      bit: BIT_CANTO,
      falas: [
        f("Quando você copia uma fórmula para outra célula, o Excel ajusta as referências automaticamente. E o cifrão trava a coluna, a linha, ou as duas."),
        f("A referência relativa, como A1, muda coluna e linha ao ser copiada."),
        f("A absoluta, $A$1, com cifrão antes da coluna e antes da linha, não muda nada."),
        f("E as mistas travam só uma parte. Em $A1, a coluna está travada e só a linha muda. Em A$1, a linha está travada e só a coluna muda."),
        f("Veja na prática: a célula C1 tem =A1+$B$1. Copiada para C2, ela desce uma linha, e A1 vira A2.",
          "Veja na prática: a célula cê 1 tem igual á 1, mais cifrão bê cifrão 1. Copiada para cê 2, ela desce uma linha, e á 1 vira á 2."),
        f("Copiada para D1, anda uma coluna: A1 vira B1. E em D3, uma coluna e duas linhas: B3. O $B$1 nunca muda."),
        f("Memorize: o cifrão trava o que vem logo depois dele. E, ao editar uma fórmula, a tecla F4 alterna entre os tipos de referência."),
      ],
      montar(c) {
        c.titulo("Referências", "Relativa, absoluta e mista", { left: 140, top: 150 }, c.t(0), { medio: true });
        const tab = c.tabela(["Tipo", "Exemplo", "Ao copiar a fórmula"], [
          ["Relativa", "<span class=\"c4-cod\">A1</span>", "coluna e linha mudam"],
          ["Absoluta", "<span class=\"c4-cod\">$A$1</span>", "nada muda"],
          ["Mista (coluna travada)", "<span class=\"c4-cod\">$A1</span>", "só a linha muda"],
          ["Mista (linha travada)", "<span class=\"c4-cod\">A$1</span>", "só a coluna muda"],
        ], { left: 140, top: 330, width: 1060 }, c.t(1) - 0.3, [c.t(1), c.t(2), em(c, this, 3, "Em $A1"), em(c, this, 3, "Em A$1")]);
        tab.style.fontSize = "32px";
        const trava = c.novo(`<div class="cartao" style="left:1250px;top:330px;width:310px;height:380px;padding:30px;text-align:center">
          <div class="c4-cod" style="font-size:150px;color:var(--cor);line-height:1">$</div>${icone("cadeado")}<p style="font-size:28px"><b>trava</b> coluna, linha ou as duas</p></div>`);
        trava.querySelector(".icone").style.cssText = "width:70px;height:70px;margin:10px auto 6px;display:block";
        c.entra(trava, em(c, this, 0, "E o cifrão"), "pop");
        [tab, trava].forEach((e) => c.sai(e, c.t(4) - 0.4));

        const g = grade(c, { left: 140, top: 320, cols: ["A", "B", "C", "D"], linhas: 3, cw: 240, ch: 84, rw: 64, fonte: 28 });
        c.entra(g.el, c.t(4), "baixo");
        const formula = (r, parte, t) => {
          const e = c.novo(`<div class="abs c4-cod" style="left:${g.x(ref(r)[0])}px;top:${g.y(ref(r)[1])}px;width:240px;height:84px;display:flex;align-items:center;justify-content:center;font-size:30px">
            =<span style="color:var(--cor)">${parte}</span>+<span style="color:var(--texto-fraco)">$B$1</span></div>`);
          return c.entra(e, t, "pop");
        };
        const c1 = formula("C1", "A1", em(c, this, 4, "tem =A1"));
        c.tl.to(c1, { backgroundColor: COR_SUAVE, duration: 0.3 }, em(c, this, 4, "tem =A1"));
        const cx = g.x("C") + 120, cy = g.y(1) + 42;
        c.seta(cx, cy + 26, cx, g.y(2) + 14, em(c, this, 4, "Copiada"), { dur: 0.4, largura: 6 });
        formula("C2", "A2", em(c, this, 4, "vira A2"));
        c.seta(cx + 90, cy, g.x("D") + 40, cy, c.t(5), { dur: 0.4, largura: 6 });
        formula("D1", "B1", em(c, this, 5, "A1 vira"));
        c.seta(cx + 70, cy + 24, g.x("D") + 60, g.y(3) + 18, em(c, this, 5, "E em D3"), { dur: 0.5, largura: 6 });
        formula("D3", "B3", em(c, this, 5, "duas linhas"));
        c.entra(c.novo(`<div class="abs pilula" style="left:140px;top:642px"><span class="c4-cod">$B$1</span> nunca muda: coluna e linha travadas</div>`), em(c, this, 5, "O $B$1"), "baixo");

        const f4 = c.novo(`<div class="cartao" style="left:1250px;top:320px;width:310px;height:300px;padding:26px 30px;text-align:center">
          ${tecla("F4", "w")}<div class="c4-cod" style="margin-top:20px;font-size:32px;line-height:1.5">A1<br>↓ $A$1<br>↓ A$1<br>↓ $A1</div></div>`);
        f4.querySelector(".c4-tecla").style.cssText = "height:68px;min-width:90px;font-size:32px";
        c.entra(f4, em(c, this, 6, "a tecla F4"), "pop");
        c.quadro("dica", "O cifrão trava o que vem <b>logo depois</b> dele. <b>F4</b> alterna os tipos de referência.", { left: 140, top: 720, width: 1420 }, c.t(6));
      },
    },

    // ------------------------------------------------------- Excel: funções
    {
      id: "funcoes-basicas",
      visual: "Grade 4 × 2 de cartões de função, cada um com o nome em fonte de código, o que faz e um exemplo: SOMA, MÉDIA, MÁXIMO/MÍNIMO, CONT.NÚM, CONT.VALORES, CONTAR.VAZIO, ARRED (=ARRED(7,456;2) → 7,46) e HOJE/AGORA.",
      secao: "Excel: funções",
      bit: BIT_CANTO,
      falas: [
        f("Vamos às funções mais cobradas. SOMA soma os valores, e MÉDIA calcula a média aritmética."),
        f("MÁXIMO e MÍNIMO retornam o maior e o menor valor."),
        f("Para contar, existem três funções: CONT.NÚM conta as células com números, CONT.VALORES conta as células não vazias, e CONTAR.VAZIO conta as células vazias."),
        f("ARRED arredonda para um número de casas decimais: ARRED de 7,456 com 2 casas resulta em 7,46. E HOJE e AGORA retornam a data atual, e a data e a hora atuais."),
      ],
      montar(c) {
        c.titulo("Funções", "As mais cobradas", { left: 140, top: 150 }, c.t(0), { medio: true });
        const fns = [
          ["SOMA", "soma valores", "=SOMA(A1:A10)", em(c, this, 0, "SOMA")],
          ["MÉDIA", "média aritmética", "=MÉDIA(B2:B8)", em(c, this, 0, "MÉDIA")],
          ["MÁXIMO / MÍNIMO", "maior / menor valor", "=MÁXIMO(C1:C20)", c.t(1)],
          ["CONT.NÚM", "conta células com <b>números</b>", "=CONT.NÚM(A1:A10)", em(c, this, 2, "CONT.NÚM")],
          ["CONT.VALORES", "conta células <b>não vazias</b>", "=CONT.VALORES(A1:A10)", em(c, this, 2, "CONT.VALORES")],
          ["CONTAR.VAZIO", "conta células <b>vazias</b>", "=CONTAR.VAZIO(A1:A10)", em(c, this, 2, "CONTAR.VAZIO")],
          ["ARRED", "arredonda casas decimais", "=ARRED(7,456;2) → 7,46", c.t(3)],
          ["HOJE / AGORA", "data atual / data e hora atuais", "=HOJE()", em(c, this, 3, "E HOJE")],
        ];
        fns.forEach((k, i) => {
          const col = i % 4, lin = Math.floor(i / 4);
          cartaoFn(c, { nome: k[0], texto: k[1], ex: k[2] }, { left: 140 + col * 360, top: 320 + lin * 260, width: 340, height: 236 }, k[3]);
        });
        c.el.querySelectorAll(".c4-fn .nome").forEach((n) => { if (n.textContent.length > 12) n.style.fontSize = "27px"; });
      },
    },
    {
      id: "funcoes-criterio",
      visual: "Quatro faixas, uma por frase, com o nome da função à esquerda e o exemplo em código: CONT.SE, SOMASE, SE (com um mini-fluxograma “A1 ≥ 7?” → Aprovado / Reprovado) e E / OU.",
      secao: "Excel: funções",
      bit: BIT_CANTO,
      falas: [
        f("Agora, as funções com critério. CONT.SE conta as células que atendem a um critério, como quantas vezes aparece a palavra Aprovado."),
        f("SOMASE soma os valores que atendem a um critério. Por exemplo, somar os valores das linhas marcadas como Norte."),
        f("A função SE faz um teste lógico com dois resultados: se A1 for maior ou igual a 7, Aprovado; senão, Reprovado."),
        f("E as funções E e OU combinam condições. Neste exemplo, o resultado é Sim quando A1 é maior ou igual a 7 e B1 é maior ou igual a 75.",
          "E as funções é e ou combinam condições. Neste exemplo, o resultado é Sim quando á 1 é maior ou igual a 7, e bê 1 é maior ou igual a 75."),
      ],
      montar(c) {
        c.titulo("Funções", "Critérios e testes lógicos", { left: 140, top: 150 }, c.t(0), { medio: true });
        const linhas = [
          ["CONT.SE", "conta as células que atendem a um <b>critério</b>", "=CONT.SE(D2:D30;\"Aprovado\")", c.t(0, 1.6)],
          ["SOMASE", "<b>soma</b> os valores que atendem a um critério", "=SOMASE(A2:A9;\"Norte\";B2:B9)", c.t(1)],
          ["SE", "teste lógico com <b>dois resultados</b>", "=SE(A1&gt;=7;\"Aprovado\";\"Reprovado\")", c.t(2)],
          ["E / OU", "<b>combinam</b> condições", "=SE(E(A1&gt;=7;B1&gt;=75);\"Sim\";\"Não\")", c.t(3)],
        ];
        linhas.forEach((l, i) => {
          const e = c.novo(`<div class="c4-linha" style="left:140px;top:${318 + i * 148}px;width:${i === 2 ? 1010 : 1420}px;height:130px;grid-template-columns:240px 1fr">
            <div class="c4-cod" style="font-size:36px;color:var(--cor)">${l[0]}</div>
            <div><p style="font-size:28px;color:var(--texto-suave)">${l[1]}</p><div class="c4-cod" style="font-size:26px;margin-top:8px">${l[2]}</div></div></div>`);
          c.entra(e, l[3], "esquerda");
        });
        const fluxo = c.novo(`<svg class="abs" style="left:1170px;top:600px;width:400px;height:140px" viewBox="0 0 400 140">
          <path d="M70 10l64 60-64 60-64-60z" fill="${COR}"/><text x="70" y="78" text-anchor="middle" font-family="Inter" font-weight="800" font-size="22" fill="#fff">A1≥7?</text>
          <path class="l1" d="M134 70h40l30-40h30" stroke="#2f8a5b" stroke-width="5" fill="none" stroke-linecap="round"/>
          <path class="l2" d="M174 70l30 40h30" stroke="#c2412f" stroke-width="5" fill="none" stroke-linecap="round"/>
          <text x="244" y="38" font-family="Inter" font-weight="800" font-size="26" fill="#2f8a5b">✓ Aprovado</text>
          <text x="244" y="118" font-family="Inter" font-weight="800" font-size="26" fill="#c2412f">✗ Reprovado</text></svg>`);
        c.entra(fluxo, em(c, this, 2, "se A1"), "fade");
        c.desenhar(fluxo.querySelector(".l1"), em(c, this, 2, "Aprovado"));
        c.desenhar(fluxo.querySelector(".l2"), em(c, this, 2, "senão"));
      },
    },
    {
      id: "procv",
      visual: "Barra de fórmula =PROCV(A2;F2:H50;3;FALSO) com cada argumento colorido e etiquetado (valor procurado, tabela, nº da coluna, exata). Mini-tabela F–H: a primeira coluna recebe a moldura “procura aqui”, uma seta corre a linha até a 3ª coluna (“retorna”). Quadro azul “Resumo estratégico”. Faixa final sobre o PROCX.",
      secao: "Excel: funções",
      bit: BIT_CANTO,
      falas: [
        f("Uma das funções mais cobradas é o PROCV. Ele procura um valor na primeira coluna de uma tabela e retorna o valor de outra coluna da mesma linha."),
        f("Em =PROCV(A2;F2:H50;3;FALSO), ele procura o conteúdo de A2 na coluna F e devolve o valor da terceira coluna, a H.",
          "Em igual proc vê, á 2, éfe 2 até agá 50, 3, falso, ele procura o conteúdo de á 2 na coluna éfe e devolve o valor da terceira coluna, a agá."),
        f("Resumo estratégico: o quarto argumento FALSO exige correspondência exata; VERDADEIRO, ou omitido, aceita correspondência aproximada. E o valor procurado sempre precisa estar na primeira coluna."),
        f("Já o PROCX é a versão moderna do PROCV, do Microsoft 365 e do Excel 2021, e busca em qualquer direção."),
      ],
      montar(c) {
        c.titulo("Funções de busca", "PROCV", { left: 140, top: 150 }, c.t(0), { medio: true });
        const args = [["A2", "valor procurado", "#c27c0e"], ["F2:H50", "tabela", NAVY], ["3", "nº da coluna", COR], ["FALSO", "exata", "#c2412f"]];
        const barra = c.novo(`<div class="c4-faixa" style="left:140px;top:310px;width:1420px;height:90px">
          <span style="font:italic 700 30px var(--serif);color:var(--texto-fraco);border-right:2px solid var(--borda);padding-right:22px">fx</span>
          <span class="c4-cod" style="font-size:42px">=PROCV(${args.map((a) => `<span class="arg" style="color:${a[2]}">${a[0]}</span>`).join(";")})</span></div>`);
        c.entra(barra, c.t(1), "baixo");
        const spans = barra.querySelectorAll(".arg");
        const tArgs = [em(c, this, 1, "conteúdo de A2"), em(c, this, 1, "na coluna F"), em(c, this, 1, "terceira"), em(c, this, 1, "terceira", 0.8)];
        // Etiquetas abaixo de cada argumento (posições medidas na fonte monoespaçada: ~25 px por caractere a 42 px).
        const xs = [140 + 30 + 74 + 22 + 25 * 7, 0, 0, 0];
        const larg = 25.3;
        let pos = 140 + 30 + 74 + 22 + larg * 7;
        args.forEach((a, i) => {
          xs[i] = pos;
          pos += larg * (a[0].length + 1);
        });
        args.forEach((a, i) => {
          const e = c.novo(`<div class="abs" style="left:${xs[i]}px;top:410px;font:700 22px var(--sans);color:${a[2]};white-space:nowrap">▲ ${a[1]}</div>`);
          c.entra(e, tArgs[i], "cima");
          c.destaque(spans[i], tArgs[i]);
        });

        const g = grade(c, { left: 140, top: 480, cols: ["F", "G", "H"], linhas: 5, inicio: 2, cw: 190, ch: 52, rw: 60 });
        c.entra(g.el, c.t(0, 2), "baixo");
        g.el.querySelectorAll(".c4-cel").forEach((cel, i) => {
          const w = [60, 110, 80][i % 3];
          cel.innerHTML = `<i style="display:block;width:${w}px;height:12px;border-radius:6px;background:#d3dae6"></i>`;
        });
        g.marcar("F2", "F6", em(c, this, 0, "primeira coluna"), "#c27c0e");
        c.entra(c.novo(`<div class="abs pilula" style="left:${g.x("F")}px;top:440px;background:#fdf3e1;color:#c27c0e;font-size:22px;padding:4px 14px">procura aqui</div>`), em(c, this, 0, "primeira coluna"), "pop");
        c.seta(g.x("F") + 150, g.y(4) + 26, g.x("H") + 40, g.y(4) + 26, em(c, this, 0, "retorna"), { largura: 6 });
        g.marcar("H4", null, em(c, this, 0, "outra coluna"));
        c.entra(c.novo(`<div class="abs pilula" style="left:${g.x("H") + 14}px;top:${g.y(6) + 64}px;font-size:22px;padding:4px 14px">retorna</div>`), em(c, this, 0, "outra coluna"), "pop");

        const resumo = quadroLivre(c, "resumo", `<p style="font-size:31px;line-height:1.45"><b>FALSO</b> → correspondência <b>exata</b>.<br><b>VERDADEIRO</b> (ou omitido) → <b>aproximada</b>.<br>O valor procurado fica sempre na <b>1ª coluna</b>.</p>`,
          { left: 900, top: 480, width: 660 }, c.t(2));
        void resumo;
        c.chave("PROCX · Microsoft 365 e Excel 2021 → <em>busca em qualquer direção</em>", c.t(3));
      },
    },
    {
      id: "exemplo-prova",
      visual: "À esquerda, a coluna A com 4, 8, 3, vazia e “texto”, preenchida célula a célula. À direita, sete fórmulas entram por frase, cada uma com o resultado contando: SOMA 15, MÉDIA 5, MÁXIMO 8, CONT.NÚM 3, CONT.VALORES 4, SE “Alto” e =A1+A2*A3 → 28. Quadro âmbar sobre as células vazias e com texto; A4 e A5 ficam marcadas como “ignoradas”.",
      secao: "Excel: funções",
      bit: BIT_CANTO,
      falas: [
        f("Agora, vamos resolver como na prova. A1 vale 4, A2 vale 8, A3 vale 3, A4 está vazia e A5 contém um texto."),
        f("A soma de A1 até A3 dá 15, e a média, 5. O máximo de A1 até A5 é 8."),
        f("CONT.NÚM de A1 até A5 dá 3, porque só conta os números. Já CONT.VALORES dá 4, porque conta tudo o que não está vazio."),
        f("O SE que testa se A2 é maior que 5 resulta em Alto. E A1 mais A2 vezes A3 dá 28, porque a multiplicação vem antes da soma."),
        f("Pegadinha: MÉDIA, SOMA e CONT.NÚM ignoram células vazias e com texto. Por isso, a média de 4, 8, 3 e uma célula vazia é 5, e não 3,75."),
      ],
      montar(c) {
        c.titulo("Exemplo", "Resolvendo como na prova", { left: 140, top: 150 }, c.t(0), { medio: true });
        const g = grade(c, { left: 140, top: 320, cols: ["A"], linhas: 5, cw: 200, ch: 64, rw: 60, fonte: 34,
          dados: { A1: "4", A2: "8", A3: "3", A4: "", A5: "\"texto\"" } });
        c.entra(g.el, c.t(0, 0.6), "baixo");
        ["A1", "A2", "A3", "A5"].forEach((r) => c.entra(g.v(r), em(c, this, 0, r), "pop"));
        const vazia = c.novo(`<div class="abs" style="left:${g.x("A")}px;top:${g.y(4)}px;width:200px;height:64px;display:flex;align-items:center;justify-content:center;font:italic 600 24px var(--sans);color:var(--texto-fraco)">(vazia)</div>`);
        c.entra(vazia, em(c, this, 0, "A4"), "fade");

        const contas = [
          ["=SOMA(A1:A3)", 15, "", em(c, this, 1, "A soma")],
          ["=MÉDIA(A1:A3)", 5, "", em(c, this, 1, "e a média")],
          ["=MÁXIMO(A1:A5)", 8, "", em(c, this, 1, "O máximo")],
          ["=CONT.NÚM(A1:A5)", 3, "só números", c.t(2)],
          ["=CONT.VALORES(A1:A5)", 4, "não vazias", em(c, this, 2, "Já CONT.VALORES")],
          ["=SE(A2&gt;5;\"Alto\";\"Baixo\")", "Alto", "", c.t(3)],
          ["=A1+A2*A3", 28, "× antes do +", em(c, this, 3, "E A1")],
        ];
        contas.forEach((k, i) => {
          const e = c.novo(`<div class="abs" style="left:520px;top:${318 + i * 60}px;width:1040px;height:52px;display:flex;align-items:center;gap:24px">
            <span class="c4-cod" style="font-size:30px;width:560px">${k[0]}</span><span style="font-size:30px;color:var(--texto-fraco)">→</span>
            <b class="r" style="font:800 38px var(--sans);color:var(--cor);width:110px">${typeof k[1] === "number" ? "0" : k[1]}</b>
            <span style="font-size:24px;color:var(--texto-suave)">${k[2]}</span></div>`);
          c.entra(e, k[3], "esquerda");
          if (typeof k[1] === "number") c.contar(e.querySelector(".r"), 0, k[1], k[3] + 0.5, 0.8);
        });
        const prova = c.quadro("prova", "MÉDIA, SOMA e CONT.NÚM <b>ignoram</b> células vazias e com texto: a média de 4, 8, 3 e uma vazia é <b>5</b>, não 3,75.", { left: 140, top: 760, width: 1420 }, c.t(4));
        prova.querySelector("p").style.fontSize = "34px";
        g.marcar("A4", "A5", em(c, this, 4, "ignoram"), "#c2412f");
      },
    },
    {
      id: "mais-funcoes",
      visual: "Grade 3 × 2 de cartões de função: SOMASES (intervalo a somar primeiro), CONT.SES, MÉDIASE, SEERRO (=SEERRO(A1/B1;0)), PROCH (procura na primeira linha) e ÍNDICE + CORRESP, cada um entrando na frase que o cita.",
      secao: "Excel: funções",
      bit: BIT_CANTO,
      falas: [
        f("Existem também as funções com vários critérios. SOMASES soma com vários critérios, e o intervalo a somar vem primeiro. E CONT.SES conta com vários critérios."),
        f("MÉDIASE calcula a média dos valores que atendem a um critério. E SEERRO mostra um valor alternativo quando a fórmula dá erro."),
        f("O PROCH funciona como o PROCV, mas procura na primeira linha e retorna o valor de outra linha."),
        f("E a dupla ÍNDICE e CORRESP: CORRESP acha a posição de um valor, e ÍNDICE retorna o valor que está nessa posição."),
      ],
      montar(c) {
        c.titulo("Mais funções", "Vários critérios, erros e buscas", { left: 140, top: 150 }, c.t(0), { medio: true });
        const fns = [
          ["SOMASES", "soma com vários critérios; o intervalo a somar vem <b>primeiro</b>", "=SOMASES(C2:C9;A2:A9;\"Norte\";B2:B9;\"&gt;100\")", em(c, this, 0, "SOMASES")],
          ["CONT.SES", "conta com vários critérios", "=CONT.SES(A2:A9;\"Norte\";B2:B9;\"&gt;100\")", em(c, this, 0, "E CONT.SES")],
          ["MÉDIASE", "média dos valores que atendem a um critério", "=MÉDIASE(A2:A9;\"Norte\";C2:C9)", c.t(1)],
          ["SEERRO", "valor alternativo se a fórmula <b>der erro</b>", "=SEERRO(A1/B1;0)", em(c, this, 1, "E SEERRO")],
          ["PROCH", "como o PROCV, mas procura na 1ª <b>linha</b>", "=PROCH(A1;B5:M7;3;FALSO)", c.t(2)],
          ["ÍNDICE + CORRESP", "CORRESP acha a <b>posição</b>; ÍNDICE retorna o <b>valor</b>", "=ÍNDICE(B2:B9;CORRESP(\"Ana\";A2:A9;0))", c.t(3)],
        ];
        fns.forEach((k, i) => {
          const col = i % 3, lin = Math.floor(i / 3);
          cartaoFn(c, { nome: k[0], texto: k[1], ex: k[2] }, { left: 140 + col * 470, top: 315 + lin * 285, width: 440, height: 262 }, k[3]);
        });
      },
    },
    {
      id: "funcoes-texto",
      visual: "A palavra CONCURSO em 8 caixas numeradas: as três primeiras acendem para =ESQUERDA(\"Concurso\";3) → Con, e a 4ª, 5ª e 6ª para =EXT.TEXTO(\"Concurso\";4;3) → cur. Cartões MAIÚSCULA e CONCAT. Depois, cinco cartões numéricos (INT, TRUNCAR, MOD, MAIOR/MENOR, DIA/MÊS/ANO) e o quadro âmbar com INT × TRUNCAR e SOMASE × SOMASES.",
      secao: "Excel: funções",
      bit: BIT_CANTO,
      falas: [
        f("Agora, as funções de texto. ESQUERDA e DIREITA pegam os primeiros e os últimos caracteres: ESQUERDA de Concurso, com 3, resulta em Con."),
        f("EXT.TEXTO pega caracteres do meio, a partir de uma posição: EXT.TEXTO de Concurso, a partir da 4ª letra, com 3 caracteres, resulta em cur."),
        f("MAIÚSCULA e MINÚSCULA convertem o texto. E CONCAT junta textos."),
        f("Nos números, INT arredonda para baixo até o inteiro, e TRUNCAR corta as casas decimais, sem arredondar. MOD dá o resto da divisão: MOD de 10 por 3 é 1."),
        f("MAIOR e MENOR retornam o k-ésimo maior ou menor valor. E DIA, MÊS e ANO extraem partes de uma data."),
        f("Pegadinha: INT e TRUNCAR só diferem com números negativos. INT de -7,8 dá -8, e TRUNCAR de -7,8 dá -7.",
          "Pegadinha: INT e TRUNCAR só diferem com números negativos. INT de menos 7,8 dá menos 8, e TRUNCAR de menos 7,8 dá menos 7."),
        f("Outra armadilha: no SOMASE, o intervalo a somar é o último argumento; no SOMASES, é o primeiro."),
      ],
      montar(c) {
        const tit = c.titulo("Funções de texto", "Recortar e juntar textos", { left: 140, top: 150 }, c.t(0), { medio: true });
        const letras = "Concurso".split("");
        const caixas = letras.map((l, i) => {
          const e = c.novo(`<div class="abs" style="left:${140 + i * 122}px;top:320px;width:108px;text-align:center">
            <div class="cx digito" style="position:relative;width:108px;height:116px;font-size:66px">${l}</div>
            <div style="margin-top:8px;font:700 22px var(--sans);color:var(--texto-fraco)">${i + 1}</div></div>`);
          c.entra(e, c.t(0, 0.8 + i * 0.12), "pop");
          return e;
        });
        caixas.slice(0, 3).forEach((e) => c.tl.to(e.querySelector(".cx"), { backgroundColor: COR, color: "#fff", duration: 0.3 }, em(c, this, 0, "ESQUERDA de")));
        caixas.slice(3, 6).forEach((e) => c.tl.to(e.querySelector(".cx"), { backgroundColor: NAVY, color: "#fff", duration: 0.3 }, em(c, this, 1, "a partir da 4ª")));
        const r1 = c.texto(`<span class="c4-cod" style="color:var(--texto)">=ESQUERDA("Concurso";3)</span> → <b style="color:var(--cor)">Con</b>`, { left: 1150, top: 330 }, em(c, this, 0, "resulta"));
        const r2 = c.texto(`<span class="c4-cod" style="color:var(--texto)">=EXT.TEXTO("Concurso";4;3)</span> → <b style="color:${NAVY}">cur</b>`, { left: 140, top: 520 }, em(c, this, 1, "resulta"));
        r1.style.cssText += ";font-size:30px;width:420px";
        r2.style.fontSize = "36px";
        const dir = c.texto("ESQUERDA / DIREITA: <b>primeiros / últimos</b> caracteres", { left: 1150, top: 440, width: 410 }, em(c, this, 0, "ESQUERDA e DIREITA"));
        dir.style.fontSize = "26px";
        const k1 = cartaoFn(c, { nome: "MAIÚSCULA / MINÚSCULA", texto: "convertem o texto", ex: "=MAIÚSCULA(\"prova\") → PROVA" }, { left: 140, top: 620, width: 680, height: 220 }, c.t(2));
        const k2 = cartaoFn(c, { nome: "CONCAT", texto: "junta textos", ex: "=CONCAT(A1;\" \";B1)" }, { left: 880, top: 620, width: 680, height: 220 }, em(c, this, 2, "E CONCAT"));
        [tit, ...caixas, r1, r2, dir, k1, k2].forEach((e) => c.sai(e, c.t(3) - 0.4));

        c.titulo("Funções numéricas", "Inteiros, restos e datas", { left: 140, top: 150 }, c.t(3), { medio: true });
        const fns = [
          ["INT", "arredonda <b>para baixo</b> até o inteiro", "=INT(7,8) → 7", em(c, this, 3, "INT")],
          ["TRUNCAR", "<b>corta</b> as casas decimais", "=TRUNCAR(7,8) → 7", em(c, this, 3, "e TRUNCAR")],
          ["MOD", "<b>resto</b> da divisão", "=MOD(10;3) → 1", em(c, this, 3, "MOD dá")],
          ["MAIOR / MENOR", "k-ésimo maior / menor valor", "=MAIOR(A1:A10;2)", c.t(4)],
          ["DIA / MÊS / ANO", "extraem partes de uma data", "=ANO(HOJE())", em(c, this, 4, "E DIA")],
        ];
        fns.forEach((k, i) => cartaoFn(c, { nome: k[0], texto: k[1], ex: k[2] }, { left: 140 + i * 289, top: 315, width: 264, height: 262 }, k[3]));
        c.el.querySelectorAll(".c4-fn .nome").forEach((n) => { if (n.textContent.length > 10) n.style.fontSize = "25px"; });
        const prova = quadroLivre(c, "prova", `<p style="font-size:34px"><span class="c4-cod">INT(-7,8)</span> = <b>-8</b> (arredonda para baixo) · <span class="c4-cod">TRUNCAR(-7,8)</span> = <b>-7</b> (só corta)</p>
          <p class="p2" style="font-size:34px;margin-top:12px">SOMASE: intervalo a somar é o <b>último</b> argumento · SOMASES: é o <b>primeiro</b></p>`,
        { left: 140, top: 620, width: 1420 }, c.t(5));
        c.entra(prova.querySelector(".p2"), c.t(6), "baixo");
      },
    },

    // ------------------------------------------------------ Excel: recursos
    {
      id: "planilhas-atalhos",
      visual: "Tabela Excel × LibreOffice Calc com as referências a outra planilha, nome com espaço e outro arquivo (a exclamação e o ponto em destaque). Quadro “Memorize”. Depois, grade de 10 atalhos do Excel com teclas desenhadas, entrando conforme a narração.",
      secao: "Excel: recursos",
      bit: BIT_CANTO,
      falas: [
        f("Para usar uma célula de outra planilha, o Excel separa o nome da planilha e a célula com um ponto de exclamação: =Vendas!A1. No Calc, o separador é o ponto.",
          "Para usar uma célula de outra planilha, o ékcel separa o nome da planilha e a célula com um ponto de exclamação: Vendas, exclamação, á 1. No Calc, o separador é o ponto."),
        f("Se o nome tiver espaço, ele fica entre aspas simples. E também dá para apontar para outro arquivo: no Excel, o nome do arquivo vai entre colchetes."),
        f("Memorize: Excel usa exclamação; Calc usa ponto."),
        f("Agora, os atalhos do Excel. F2 edita a célula selecionada, F4 alterna os tipos de referência, e Alt + = faz a AutoSoma."),
        f("Ctrl + ; insere a data atual, Ctrl + 1 abre Formatar Células, e Ctrl + Home vai para a célula A1."),
        f("Ctrl com as setas vai até o fim de um bloco de dados. E Ctrl + Page Down ou Page Up passa para a próxima ou para a anterior planilha."),
        f("Shift + F11 insere uma nova planilha, e F11 cria um gráfico em uma planilha separada."),
      ],
      montar(c) {
        const tit = c.titulo("Referências e atalhos", "Outras planilhas e arquivos", { left: 140, top: 150 }, c.t(0), { medio: true });
        const ex = (s) => `<span class="c4-cod">${s.replace("!", "<b style=\"color:var(--cor);font-size:1.25em\">!</b>")}</span>`;
        const ca = (s) => `<span class="c4-cod">${s}</span>`;
        const tab = c.tabela(["Referência", "Excel", "LibreOffice Calc"], [
          ["Outra planilha", ex("=Vendas!A1"), ca("=Vendas<b style=\"color:var(--cor);font-size:1.25em\">.</b>A1 ou =$Vendas.A1")],
          ["Nome com espaço", ex("='Vendas 2026'!A1"), ca("='Vendas 2026'.A1")],
          ["Outro arquivo", ex("=[Orcamento.xlsx]Plan1!A1"), ca("='file:///caminho/Orcamento.ods'#$Plan1.A1")],
        ], { left: 140, top: 320 }, c.t(0, 1), [em(c, this, 0, "exclamação"), c.t(1), em(c, this, 1, "E também")]);
        tab.style.fontSize = "25px";
        tab.querySelectorAll("td:first-child").forEach((td) => { td.style.whiteSpace = "nowrap"; });
        const dica = c.quadro("dica", "Excel separa planilha e célula com <b>exclamação ( ! )</b>; o Calc, com <b>ponto ( . )</b>.", { left: 140, top: 680, width: 1420 }, c.t(2));
        [tit, tab, dica].forEach((e) => c.sai(e, c.t(3) - 0.4));

        c.titulo("Atalhos do Excel", "Teclas que caem na prova", { left: 140, top: 150 }, c.t(3), { medio: true });
        const itens = [
          ["F2", "edita a célula selecionada", em(c, this, 3, "F2")],
          ["F4", "alterna os tipos de referência ($)", em(c, this, 3, "F4")],
          ["Alt+=", "AutoSoma", em(c, this, 3, "Alt")],
          ["Ctrl+;", "insere a data atual", c.t(4)],
          ["Ctrl+1", "abre Formatar Células", em(c, this, 4, "Ctrl + 1")],
          ["Ctrl+Home", "vai para a célula A1", em(c, this, 4, "Ctrl + Home")],
          ["Ctrl+← ↑ → ↓", "vai até o fim de um bloco de dados", c.t(5)],
          ["Ctrl+PgDn / PgUp", "próxima / anterior planilha", em(c, this, 5, "E Ctrl")],
          ["Shift+F11", "insere uma nova planilha", c.t(6)],
          ["F11", "cria gráfico em planilha separada", em(c, this, 6, "e F11")],
        ];
        itens.forEach((k, i) => {
          const col = Math.floor(i / 5), lin = i % 5;
          const teclas = k[0].includes(" / ")
            ? `${atalho("Ctrl+PgDn", "w")}<span class="c4-mais">/</span>${tecla("PgUp", "w")}`
            : atalho(k[0], "w");
          const e = c.novo(`<div class="abs" style="left:${140 + col * 730}px;top:${318 + lin * 92}px;width:700px;height:78px;display:flex;align-items:center;gap:22px">
            <div style="width:${col ? 320 : 250}px;flex-shrink:0">${teclas}</div><span style="font-size:27px;color:var(--texto-suave)">${k[1]}</span></div>`);
          c.entra(e, k[2], "esquerda");
        });
      },
    },
    {
      id: "graficos",
      visual: "Quatro cartões com gráficos animados: colunas crescendo (“comparar categorias”), uma linha sendo desenhada (“evolução no tempo”), uma pizza com fatias surgindo (“partes de um todo”) e pontos de dispersão aparecendo (“relação entre duas variáveis”).",
      secao: "Excel: recursos",
      bit: BIT_CANTO,
      falas: [
        f("Outra questão comum é saber qual gráfico usar. Os de colunas e de barras comparam valores entre categorias."),
        f("O de linhas mostra a evolução ao longo do tempo, como o faturamento mês a mês."),
        f("O de pizza mostra as partes de um todo, com uma única série. E o de dispersão mostra a relação entre duas variáveis numéricas."),
      ],
      montar(c) {
        c.titulo("Gráficos", "Qual gráfico usar", { left: 140, top: 150 }, c.t(0), { medio: true });
        const eixo = `<path d="M20 10v170h270" stroke="#d3dae6" stroke-width="4" fill="none" stroke-linecap="round"/>`;
        const desenhos = [
          `<svg viewBox="0 0 300 190" style="width:300px;height:190px">${eixo}${[90, 140, 60, 120].map((h, i) => `<rect class="barra" x="${44 + i * 60}" y="${180 - h}" width="40" height="${h}" rx="6" fill="${i % 2 ? COR : "#7cc49a"}"/>`).join("")}</svg>`,
          `<svg viewBox="0 0 300 190" style="width:300px;height:190px">${eixo}<path class="traco" d="M30 150L80 120L130 132L180 80L230 92L280 34" stroke="${COR}" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
          `<svg viewBox="0 0 300 190" style="width:300px;height:190px"><g transform="translate(150 95)">
            <path class="fatia" d="M0 0V-88A88 88 0 0 1 83.7 27.2z" fill="${COR}"/><path class="fatia" d="M0 0L83.7 27.2A88 88 0 0 1-51.7 71.2z" fill="#7cc49a"/>
            <path class="fatia" d="M0 0L-51.7 71.2A88 88 0 0 1 0-88z" fill="${NAVY}"/></g></svg>`,
          `<svg viewBox="0 0 300 190" style="width:300px;height:190px">${eixo}${[[50, 150], [80, 128], [104, 136], [130, 104], [160, 96], [184, 70], [214, 76], [244, 44], [270, 38]].map(([x, y]) => `<circle class="ponto" cx="${x}" cy="${y}" r="9" fill="${COR}"/>`).join("")}</svg>`,
        ];
        const dados = [
          ["Colunas / barras", "comparar valores entre <b>categorias</b>", em(c, this, 0, "Os de colunas")],
          ["Linhas", "evolução <b>ao longo do tempo</b>", c.t(1)],
          ["Pizza", "partes de um <b>todo</b> (uma única série)", c.t(2)],
          ["Dispersão", "relação entre <b>duas variáveis</b> numéricas", em(c, this, 2, "E o de dispersão")],
        ];
        dados.forEach((d, i) => {
          const e = c.novo(`<div class="cartao" style="left:${140 + i * 360}px;top:320px;width:340px;height:430px;padding:30px 20px 30px 26px">
            ${desenhos[i]}<h3 style="margin-top:26px;font-size:34px">${d[0]}</h3><p style="font-size:26px">${d[1]}</p></div>`);
          c.entra(e, d[2], "baixo");
          const t = d[2] + 0.4;
          e.querySelectorAll(".barra").forEach((b, k) => c.tl.fromTo(b, { scaleY: 0, transformOrigin: "50% 100%" }, { scaleY: 1, duration: 0.5, ease: "power3.out", immediateRender: true }, t + k * 0.15));
          e.querySelectorAll(".traco").forEach((p) => c.desenhar(p, t, 1.2));
          e.querySelectorAll(".fatia").forEach((p, k) => c.tl.fromTo(p, { scale: 0, transformOrigin: "0 0", svgOrigin: "0 0" }, { scale: 1, duration: 0.5, ease: "back.out(1.7)", immediateRender: true }, t + k * 0.25));
          e.querySelectorAll(".ponto").forEach((p, k) => c.tl.fromTo(p, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25, immediateRender: true }, t + k * 0.1));
        });
      },
    },
    {
      id: "erros",
      visual: "Sete “células de erro” com o código em vermelho e a causa embaixo, entrando conforme a narração: #DIV/0!, #N/D, #NOME?, #REF!, #VALOR!, #NÚM! e, por último, ##### em verde, com o selo “não é erro de fórmula”.",
      secao: "Excel: recursos",
      bit: BIT_CANTO,
      falas: [
        f("Agora, as mensagens de erro do Excel. A divisão por zero, ou por uma célula vazia, gera o erro #DIV/0!.",
          "Agora, as mensagens de erro do ékcel. A divisão por zero, ou por uma célula vazia, gera o erro div barra zero."),
        f("#N/D indica valor não encontrado, muito comum no PROCV. E #NOME? indica nome de função escrito errado, ou texto sem aspas.",
          "ene barra dê indica valor não encontrado, muito comum no proc vê. E nome indica nome de função escrito errado, ou texto sem aspas."),
        f("#REF! aparece quando a fórmula faz referência a uma célula que foi excluída. E #VALOR! indica tipo de dado errado, como somar texto com número.",
          "Réf aparece quando a fórmula faz referência a uma célula que foi excluída. E valor indica tipo de dado errado, como somar texto com número."),
        f("#NÚM! indica um problema com número, como um valor grande demais.", "Núm indica um problema com número, como um valor grande demais."),
        f("E atenção: as cerquilhas não são erro de fórmula. Elas só indicam que a coluna é estreita demais para mostrar o valor."),
      ],
      montar(c) {
        c.titulo("Mensagens de erro", "Quando a fórmula reclama", { left: 140, top: 150 }, c.t(0), { medio: true });
        const erros = [
          ["#DIV/0!", "divisão por zero ou por célula vazia", em(c, this, 0, "A divisão")],
          ["#N/D", "valor não encontrado (comum no PROCV)", c.t(1)],
          ["#NOME?", "nome de função errado ou texto sem aspas", em(c, this, 1, "E #NOME")],
          ["#REF!", "referência a uma célula excluída", c.t(2)],
          ["#VALOR!", "tipo de dado errado (texto + número)", em(c, this, 2, "E #VALOR")],
          ["#NÚM!", "problema com número (valor grande demais)", c.t(3)],
          ["#####", "coluna estreita demais para o valor", c.t(4)],
        ];
        erros.forEach((k, i) => {
          const col = i % 4, lin = Math.floor(i / 4);
          const ok = k[0] === "#####";
          const e = c.novo(`<div class="cartao" style="left:${140 + col * 360}px;top:${318 + lin * 250}px;width:340px;height:226px;padding:24px 26px">
            <div class="c4-cod" style="display:inline-block;font-size:38px;padding:8px 18px;border-radius:10px;border:3px ${ok ? "dashed" : "solid"} ${ok ? COR : "#c2412f"};color:${ok ? COR : "#c2412f"};background:${ok ? COR_SUAVE : "#fbecea"}">${k[0]}</div>
            <p style="font-size:25px;margin-top:18px">${k[1]}</p></div>`);
          c.entra(e, k[2], "pop");
        });
        c.entra(c.novo(`<div class="abs pilula" style="left:1220px;top:${568 + 90}px;background:var(--cor);color:#fff;font-size:26px">não é erro de fórmula</div>`), em(c, this, 4, "não são"), "pop");
      },
    },
    {
      id: "recursos",
      visual: "Duas colunas de cartões com ícones. “Outros recursos”: Alça de preenchimento (1, 2, 3… · jan, fev, mar…), Classificar e Filtrar, Formatação Condicional e Tabela dinâmica. “Organização e proteção”: Congelar Painéis [Exibir], Validação de Dados [Dados], Proteger Planilha / Pasta [Revisão] e Remover Duplicatas · Texto para Colunas [Dados].",
      secao: "Excel: recursos",
      bit: BIT_CANTO,
      falas: [
        f("Mais alguns recursos. A alça de preenchimento é o quadradinho no canto da célula: arrastada, ela copia fórmulas ou continua sequências, como 1, 2, 3, ou janeiro, fevereiro, março."),
        f("Classificar e Filtrar ordena os dados ou mostra só as linhas que atendem a um critério. E a Formatação Condicional muda a aparência das células conforme o valor, como notas abaixo de 7 em vermelho."),
        f("A tabela dinâmica resume e cruza grandes volumes de dados."),
        f("Para organizar, Congelar Painéis, na guia Exibir, mantém os títulos visíveis ao rolar a planilha. E a Validação de Dados, na guia Dados, restringe o que pode ser digitado, como uma lista suspensa ou apenas datas."),
        f("Na guia Revisão, Proteger Planilha impede alterações em células bloqueadas, e Proteger Pasta de Trabalho impede incluir, excluir ou renomear planilhas."),
        f("E, na guia Dados, Remover Duplicatas e Texto para Colunas limpam e separam dados importados."),
      ],
      montar(c) {
        c.titulo("Outros recursos", "Organizar, analisar e proteger", { left: 140, top: 150 }, c.t(0), { medio: true });
        c.entra(c.novo(`<div class="abs rotulo" style="left:140px;top:296px;font-size:22px">Análise</div>`), c.t(0), "fade");
        c.entra(c.novo(`<div class="abs rotulo" style="left:880px;top:296px;font-size:22px">Organização e proteção</div>`), c.t(3), "fade");
        const esq = [
          { icone: "alca", titulo: "Alça de preenchimento", texto: "Copia fórmulas ou continua sequências: 1, 2, 3… · jan, fev, mar…", t: c.t(0, 0.8) },
          { icone: "funil", titulo: "Classificar e Filtrar", texto: "Ordena ou mostra só as linhas de um critério.", t: c.t(1) },
          { icone: "condicional", titulo: "Formatação Condicional", texto: "Aparência conforme o valor: notas &lt; 7 em vermelho.", t: em(c, this, 1, "E a Formatação") },
          { icone: "dinamica", titulo: "Tabela dinâmica", texto: "Resume e cruza grandes volumes de dados.", t: c.t(2) },
        ];
        const dir = [
          { icone: "floco", titulo: "Congelar Painéis", tag: "Exibir", texto: "Títulos visíveis ao rolar a planilha.", t: em(c, this, 3, "Congelar") },
          { icone: "lista", titulo: "Validação de Dados", tag: "Dados", texto: "Restringe a digitação: lista suspensa, só datas.", t: em(c, this, 3, "E a Validação") },
          { icone: "escudo", titulo: "Proteger Planilha / Pasta", tag: "Revisão", texto: "Células bloqueadas · incluir, excluir, renomear planilhas.", t: c.t(4) },
          { icone: "duplicatas", titulo: "Duplicatas · Texto p/ Colunas", tag: "Dados", texto: "Limpam e separam dados importados.", t: c.t(5) },
        ];
        esq.forEach((k, i) => cartaoH(c, k, { left: 140, top: 340 + i * 142, width: 700, height: 128 }, k.t, "esquerda"));
        dir.forEach((k, i) => cartaoH(c, k, { left: 880, top: 340 + i * 142, width: 680, height: 128 }, k.t, "direita"));
        c.el.querySelectorAll(".c4-h .icone").forEach((i) => { i.style.width = "68px"; i.style.height = "68px"; });
        c.el.querySelectorAll(".c4-h h3").forEach((h) => { h.style.fontSize = "28px"; });
        c.el.querySelectorAll(".c4-h p").forEach((p) => { p.style.fontSize = "22px"; });
      },
    },

    // -------------------------------------------------- Microsoft PowerPoint
    {
      id: "ppt-modos",
      visual: "Um slide desenhado ganha título, texto, imagem, gráfico e um botão de vídeo conforme são citados. Depois, cinco miniaturas esquemáticas dos modos de exibição — Normal, Classificação de Slides, Anotações, Leitura e Apresentação de Slides —, cada uma na frase que a descreve.",
      secao: "Microsoft PowerPoint",
      bit: BIT_CANTO,
      falas: [
        f("Por fim, o PowerPoint. Ele cria apresentações compostas por slides, que podem conter textos, imagens, gráficos, áudio e vídeo."),
        f("No modo Normal, você edita os slides, com as miniaturas à esquerda e as anotações abaixo. A Classificação de Slides mostra todos em miniatura, para reorganizar a ordem."),
        f("O modo Anotações mostra a página com o slide e as anotações do apresentador. E o Modo de Exibição de Leitura apresenta dentro da janela do programa."),
        f("E a Apresentação de Slides ocupa a tela cheia, para o público."),
      ],
      montar(c) {
        c.titulo("Microsoft PowerPoint", "Apresentações em slides", { left: 140, top: 150 }, c.t(0), { medio: true });
        const slide = c.novo(`<div class="abs" style="left:140px;top:320px;width:720px;height:405px;background:#fff;border-radius:22px;box-shadow:var(--sombra);overflow:hidden">
          <div class="p1" style="position:absolute;left:40px;top:36px;width:420px;height:34px;border-radius:10px;background:var(--cor)"></div>
          <div class="p2" style="position:absolute;left:40px;top:100px">${linhasSvg ? `<svg viewBox="0 0 300 80" style="width:300px;height:80px">${linhasSvg(0, 0, [280, 240, 260, 180], 20, 10)}</svg>` : ""}</div>
          <div class="p3" style="position:absolute;left:40px;top:210px;width:280px;height:160px">${icone("imagem")}</div>
          <div class="p4" style="position:absolute;left:380px;top:190px;width:300px;height:180px"><svg viewBox="0 0 300 180" style="width:300px;height:180px">
            ${[60, 110, 80, 140].map((h, i) => `<rect x="${20 + i * 70}" y="${170 - h}" width="44" height="${h}" rx="6" fill="${i % 2 ? COR : "#7cc49a"}"/>`).join("")}</svg></div>
          <div class="p5" style="position:absolute;left:560px;top:30px;width:120px;height:120px;border-radius:50%;background:${NAVY};display:grid;place-items:center">
            <svg viewBox="0 0 40 40" style="width:46px;height:46px"><path d="M12 8l22 12-22 12z" fill="#fff"/></svg></div></div>`);
        slide.querySelector(".p3 .icone").style.cssText = "width:280px;height:160px";
        c.entra(slide, c.t(0, 0.6), "zoom");
        ["textos", "imagens", "gráficos", "vídeo"].forEach((s, i) => c.entra(slide.querySelector([".p2", ".p3", ".p4", ".p5"][i]), em(c, this, 0, s), "pop"));
        c.entra(slide.querySelector(".p1"), em(c, this, 0, "slides"), "fade");
        const itens = ["textos", "imagens", "gráficos", "áudio", "vídeo"].map((s, i) => c.entra(c.novo(`<div class="abs pilula" style="left:930px;top:${330 + i * 78}px;font-size:32px">${s}</div>`), em(c, this, 0, s), "esquerda"));
        [slide, ...itens].forEach((e) => c.sai(e, c.t(1) - 0.4));

        const cinza = "#d3dae6";
        const mini = {
          normal: `<rect x="0" y="0" width="220" height="140" rx="10" fill="#fff" stroke="${cinza}" stroke-width="3"/>
            ${[12, 44, 76].map((y) => `<rect x="10" y="${y}" width="40" height="24" rx="3" fill="${cinza}"/>`).join("")}
            <rect x="62" y="12" width="148" height="88" rx="5" fill="${COR}"/><rect x="62" y="108" width="148" height="22" rx="4" fill="#eef1f6"/>`,
          classificacao: `<rect x="0" y="0" width="220" height="140" rx="10" fill="#fff" stroke="${cinza}" stroke-width="3"/>
            ${[0, 1, 2].map((l) => [0, 1, 2, 3].map((k) => `<rect x="${12 + k * 51}" y="${12 + l * 42}" width="44" height="32" rx="4" fill="${(l + k) % 3 ? "#7cc49a" : COR}"/>`).join("")).join("")}`,
          anotacoes: `<rect x="60" y="0" width="100" height="140" rx="8" fill="#fff" stroke="${cinza}" stroke-width="3"/>
            <rect x="72" y="12" width="76" height="46" rx="4" fill="${COR}"/>${linhasSvg(72, 72, [76, 70, 76, 50], 14, 6)}`,
          leitura: `<rect x="0" y="0" width="220" height="140" rx="10" fill="#fff" stroke="${cinza}" stroke-width="3"/><rect x="0" y="0" width="220" height="22" rx="10" fill="${cinza}"/>
            <rect x="0" y="12" width="220" height="10" fill="${cinza}"/><rect x="24" y="34" width="172" height="94" rx="5" fill="${COR}"/>`,
          apresentacao: `<rect x="0" y="0" width="220" height="140" rx="10" fill="#1a2230"/><rect x="10" y="10" width="200" height="120" rx="6" fill="${COR}"/>
            <rect x="30" y="30" width="110" height="14" rx="7" fill="#fff"/>${linhasSvg(30, 60, [150, 120, 140], 18, 8, "#cfe7d8")}`,
        };
        const modos = [
          ["normal", "Normal", "edição, miniaturas e anotações", c.t(1)],
          ["classificacao", "Classificação de Slides", "reorganizar a ordem", em(c, this, 1, "A Classificação")],
          ["anotacoes", "Anotações", "slide + anotações do apresentador", c.t(2)],
          ["leitura", "Leitura", "dentro da janela do programa", em(c, this, 2, "E o Modo")],
          ["apresentacao", "Apresentação de Slides", "tela cheia, para o público", c.t(3)],
        ];
        modos.forEach((m, i) => {
          const e = c.novo(`<div class="no" style="left:${140 + i * 288}px;top:330px;width:270px;height:390px;justify-content:flex-start;padding:30px 22px">
            <svg viewBox="0 0 220 140" style="width:220px;height:140px">${mini[m[0]]}</svg>
            <strong style="font-size:29px;margin-top:24px;line-height:1.2">${m[1]}</strong><span style="font-size:23px">${m[2]}</span></div>`);
          c.entra(e, m[3], "pop");
        });
      },
    },
    {
      id: "ppt-recursos",
      visual: "Três cartões: Slide Mestre (camadas), Layouts e Temas. Depois, dois painéis: “Transição” — um slide dá lugar ao seguinte, com seta entre eles — e “Animação” — uma estrela voa para dentro do slide, com as etiquetas entrada, ênfase, saída e trajetórias. Quadro âmbar: transição entre slides × animação nos elementos.",
      secao: "Microsoft PowerPoint",
      bit: BIT_CANTO,
      falas: [
        f("Alguns recursos importantes. O Slide Mestre define o padrão visual, como fontes, cores e logotipo, aplicado a todos os slides."),
        f("Os layouts são modelos de disposição dos elementos, como título e conteúdo ou duas colunas. E os temas são conjuntos de cores, fontes e efeitos."),
        f("As transições são efeitos na passagem de um slide para outro."),
        f("Já as animações são efeitos aplicados aos objetos dentro do slide: de entrada, de ênfase, de saída e trajetórias."),
        f("Pegadinha clássica: transição e animação são coisas diferentes. A transição acontece entre slides; a animação, nos elementos de um slide."),
      ],
      montar(c) {
        c.titulo("Recursos do PowerPoint", "Mestre, transição e animação", { left: 140, top: 150 }, c.t(0), { medio: true });
        const cards = [
          { icone: "camadas", titulo: "Slide Mestre", texto: "Padrão visual (fontes, cores, logotipo) para <b>todos os slides</b>.", t: c.t(0, 1) },
          { icone: "layouts", titulo: "Layouts", texto: "Disposição dos elementos: título e conteúdo, duas colunas…", t: c.t(1) },
          { icone: "temas", titulo: "Temas", texto: "Conjuntos de cores, fontes e efeitos.", t: em(c, this, 1, "E os temas") },
        ].map((k, i) => c.cartao(k, { left: 140 + i * 470, top: 320, width: 440, height: 360 }, k.t));
        cards.forEach((e) => c.sai(e, c.t(2) - 0.4));

        const miniSlide = (cor, conteudo = "") => `<div style="position:absolute;width:240px;height:135px;border-radius:12px;background:${cor};box-shadow:var(--sombra);overflow:hidden">
          <div style="position:absolute;left:18px;top:18px;width:120px;height:14px;border-radius:7px;background:#fff;opacity:.9"></div>${conteudo}</div>`;
        const trans = c.novo(`<div class="cartao" style="left:140px;top:310px;width:680px;height:370px;padding:30px 36px">
          <div class="rotulo">Transição</div><h3 style="margin-top:8px;font-size:34px">Efeito <b>entre</b> slides</h3>
          <div style="position:relative;height:170px;margin-top:24px">
            <div class="s1" style="position:absolute;left:0;top:10px">${miniSlide("#7cc49a")}</div>
            <div class="s2" style="position:absolute;left:350px;top:10px">${miniSlide(COR)}</div></div></div>`);
        c.entra(trans, c.t(2), "esquerda");
        c.seta(410, 590, 480, 590, c.t(2, 0.8), { largura: 7 });
        c.tl.fromTo(trans.querySelector(".s2"), { x: 160, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out", immediateRender: true }, c.t(2, 1.2));

        const anim = c.novo(`<div class="cartao" style="left:880px;top:310px;width:680px;height:370px;padding:30px 36px">
          <div class="rotulo">Animação</div><h3 style="margin-top:8px;font-size:34px">Efeito nos <b>objetos do slide</b></h3>
          <div style="position:relative;height:170px;margin-top:24px">
            <div style="position:absolute;left:0;top:10px">${miniSlide(COR)}</div>
            <svg class="estrela" viewBox="0 0 60 60" style="position:absolute;left:150px;top:80px;width:62px;height:62px"><path d="M30 3l8 18 20 2-15 13 5 20-18-11-18 11 5-20L2 23l20-2z" fill="#f5b83a"/></svg>
            <div class="tags" style="position:absolute;left:290px;top:0;display:flex;flex-wrap:wrap;gap:10px;width:310px">
              ${["entrada", "ênfase", "saída", "trajetórias"].map((t) => `<span class="pilula" style="font-size:24px;padding:6px 18px">${t}</span>`).join("")}</div></div></div>`);
        c.entra(anim, c.t(3), "direita");
        c.tl.fromTo(anim.querySelector(".estrela"), { x: -200, y: -60, rotation: -120, autoAlpha: 0 }, { x: 0, y: 0, rotation: 0, autoAlpha: 1, duration: 1, ease: "back.out(1.4)", immediateRender: true }, c.t(3, 1));
        anim.querySelectorAll(".tags span").forEach((s, i) => c.entra(s, em(c, this, 3, ["de entrada", "de ênfase", "de saída", "trajetórias"][i]), "pop"));
        c.quadro("prova", "<b>Transição</b> acontece <b>entre slides</b>; <b>animação</b>, nos <b>elementos de um slide</b>.", { left: 140, top: 720, width: 1420 }, c.t(4));
      },
    },
    {
      id: "ppt-mais",
      visual: "Dois monitores: “Público” mostra só o slide; “Apresentador” mostra o slide, o próximo, as anotações e o cronômetro. Ao lado, cartões Anotações, Testar Intervalos, Ocultar slide e Seções. Depois, os formatos .pptx, .ppsx (destacado) e .potx, com PDF e MP4, e as teclas da apresentação: F5, Shift + F5, Esc, B ou . (tela preta) e W ou , (tela branca).",
      secao: "Microsoft PowerPoint",
      bit: BIT_CANTO,
      falas: [
        f("No Modo de Exibição do Apresentador, com dois monitores, o público vê o slide, e o apresentador vê também as anotações, o próximo slide e o tempo."),
        f("As anotações são o texto de apoio do apresentador e não aparecem para o público. E o Testar Intervalos grava quanto tempo cada slide fica na tela, para a apresentação avançar sozinha."),
        f("Ocultar slide mantém o slide no arquivo, mas ele não aparece na apresentação. E as seções agrupam slides para organizar apresentações grandes."),
        f("Nos formatos, o .pptx é a apresentação editável, o .ppsx abre direto no modo de apresentação, e o .potx é um modelo. Também dá para exportar para PDF e para vídeo MP4."),
        f("E os atalhos da apresentação: F5 começa do primeiro slide, e Shift + F5, a partir do slide atual. Esc encerra."),
        f("Durante a apresentação, a tecla B ou o ponto deixam a tela preta, e a tecla W ou a vírgula deixam a tela branca."),
      ],
      montar(c) {
        const tit = c.titulo("Mais recursos", "O apresentador e seus recursos", { left: 140, top: 150 }, c.t(0), { medio: true });
        const tela = (w, h, inner) => `<svg viewBox="0 0 ${w} ${h + 46}" style="width:${w}px;height:${h + 46}px">
          <rect x="0" y="0" width="${w}" height="${h}" rx="14" fill="${NAVY}"/><rect x="10" y="10" width="${w - 20}" height="${h - 20}" rx="8" fill="#f5f7fb"/>${inner}
          <rect x="${w / 2 - 14}" y="${h}" width="28" height="24" fill="${NAVY}"/><rect x="${w / 2 - 60}" y="${h + 24}" width="120" height="12" rx="6" fill="${NAVY}"/></svg>`;
        const slideSvg = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${COR}"/><rect x="${x + w * 0.1}" y="${y + h * 0.15}" width="${w * 0.55}" height="${h * 0.12}" rx="${h * 0.06}" fill="#fff"/>`;
        const publico = c.novo(`<div class="abs" style="left:140px;top:340px;text-align:center">${tela(360, 230, slideSvg(10, 10, 340, 210))}
          <div class="rotulo" style="margin-top:12px">Público</div></div>`);
        const apres = c.novo(`<div class="abs" style="left:540px;top:310px;text-align:center">${tela(460, 260,
          `${slideSvg(24, 24, 250, 140)}<rect x="290" y="24" width="146" height="82" rx="5" fill="#7cc49a"/>
           <text x="363" y="130" text-anchor="middle" font-family="Inter" font-weight="700" font-size="16" fill="#4a5568">próximo</text>
           ${linhasSvg(24, 184, [250, 210, 230], 16, 8)}<rect x="290" y="176" width="146" height="54" rx="8" fill="#1a2230"/>
           <text x="363" y="212" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-weight="700" font-size="26" fill="#fff">00:12</text>`)}
          <div class="rotulo" style="margin-top:12px">Apresentador</div></div>`);
        c.entra(publico, em(c, this, 0, "o público"), "baixo");
        c.entra(apres, em(c, this, 0, "e o apresentador"), "baixo");
        const lado = [
          { icone: "notas", titulo: "Anotações", texto: "Apoio do apresentador; o público <b>não vê</b>.", t: c.t(1) },
          { icone: "relogio", titulo: "Testar Intervalos", texto: "Grava o tempo de cada slide: <b>avança sozinha</b>.", t: em(c, this, 1, "E o Testar") },
          { icone: "ocultar", titulo: "Ocultar slide", texto: "Fica no arquivo, <b>não aparece</b> na apresentação.", t: c.t(2) },
          { icone: "secoes", titulo: "Seções", texto: "Agrupam slides de apresentações grandes.", t: em(c, this, 2, "E as seções") },
        ].map((k, i) => cartaoH(c, k, { left: 1060, top: 300 + i * 118, width: 500, height: 106, padding: "14px 22px" }, k.t, "direita"));
        c.el.querySelectorAll(".c4-h .icone").forEach((i) => { i.style.width = "58px"; i.style.height = "58px"; });
        c.el.querySelectorAll(".c4-h h3").forEach((h) => { h.style.fontSize = "26px"; h.style.marginBottom = "2px"; });
        c.el.querySelectorAll(".c4-h p").forEach((p) => { p.style.fontSize = "21px"; });
        [tit, publico, apres, ...lado].forEach((e) => c.sai(e, c.t(3) - 0.4));

        c.titulo("Formatos e atalhos", "Do arquivo à tela cheia", { left: 140, top: 150 }, c.t(3), { medio: true });
        const formatos = [
          [".pptx", "apresentação editável", em(c, this, 3, "o .pptx")],
          [".ppsx", "abre direto no <b>modo de apresentação</b>", em(c, this, 3, "o .ppsx")],
          [".potx", "modelo", em(c, this, 3, "e o .potx")],
        ];
        formatos.forEach((k, i) => {
          const destaque = i === 1;
          const e = c.novo(`<div class="cartao" style="left:${140 + i * 300}px;top:310px;width:280px;height:180px;padding:24px 26px;${destaque ? `outline:5px solid ${COR}` : ""}">
            <span class="c4-ext" style="font-size:34px">${k[0]}</span><p style="font-size:24px;margin-top:16px">${k[1]}</p></div>`);
          c.entra(e, k[2], "pop");
        });
        const exp = c.novo(`<div class="cartao" style="left:1060px;top:310px;width:500px;height:180px;padding:24px 28px">
          <div class="rotulo" style="font-size:22px">Exportar para</div><div style="display:flex;gap:16px;margin-top:20px">
          <span class="c4-ext velho" style="font-size:32px">PDF</span><span class="c4-ext velho" style="font-size:32px">vídeo MP4</span></div></div>`);
        c.entra(exp, em(c, this, 3, "Também"), "baixo");

        c.entra(c.novo(`<div class="abs rotulo" style="left:140px;top:530px">Atalhos da apresentação</div>`), c.t(4), "fade");
        const tecl = [
          [tecla("F5", "w"), "começa do <b>primeiro</b> slide", "", c.t(4, 0.6)],
          [atalho("Shift+F5", "w"), "começa do slide <b>atual</b>", "", em(c, this, 4, "e Shift")],
          [tecla("Esc", "w"), "encerra", "", em(c, this, 4, "Esc")],
          [`${tecla("B", "w")}<span class="c4-mais">ou</span>${tecla(".", "w")}`, "tela <b>preta</b>", "#1a2230", em(c, this, 5, "a tecla B")],
          [`${tecla("W", "w")}<span class="c4-mais">ou</span>${tecla(",", "w")}`, "tela <b>branca</b>", "#ffffff", em(c, this, 5, "e a tecla W")],
        ];
        tecl.forEach((k, i) => {
          const e = c.novo(`<div class="cartao" style="left:${140 + i * 286}px;top:580px;width:268px;height:220px;padding:26px 24px">
            <div style="height:66px;display:flex;align-items:center">${k[0]}</div>
            <div style="display:flex;gap:12px;align-items:center;margin-top:18px">${k[2] ? `<i style="width:34px;height:26px;border-radius:6px;background:${k[2]};border:2px solid #d3dae6;flex-shrink:0"></i>` : ""}
            <p style="font-size:25px">${k[1]}</p></div></div>`);
          c.entra(e, k[3], "pop");
        });
      },
    },

    // ------------------------------------------------------------ Revisão
    {
      id: "revisao",
      visual: "Oito cartões de revisão com ícone de verificação, um por frase: Suítes, Word, Atalhos, Fórmulas, Referências, Funções, Erros e PowerPoint.",
      secao: "Revisão",
      bit: BIT_CANTO,
      falas: [
        f("Hora de revisar o que você aprendeu."),
        f("Word salva em .docx, Excel em .xlsx e PowerPoint em .pptx. O LibreOffice usa o padrão aberto ODF: .odt, .ods e .odp."),
        f("No Word, o alinhamento padrão é à esquerda. A nota de rodapé fica no pé da página; a nota de fim, no final do documento."),
        f("Nos atalhos, o Word em português segue o português, e o Writer segue o inglês. Ctrl + S sublinha no Word e salva no Writer."),
        f("Toda fórmula começa com igual. Dois-pontos é “até”, ponto e vírgula é “e”, e a multiplicação vem antes da soma.",
          "Toda fórmula começa com igual. Dois-pontos é até, ponto e vírgula é é, e a multiplicação vem antes da soma."),
        f("O cifrão trava o que vem logo depois dele, e o F4 alterna os tipos de referência."),
        f("MÉDIA, SOMA e CONT.NÚM ignoram células vazias e com texto. E o PROCV procura sempre na primeira coluna."),
        f("Divisão por zero gera #DIV/0!, e as cerquilhas indicam apenas uma coluna estreita.",
          "Divisão por zero gera div barra zero, e as cerquilhas indicam apenas uma coluna estreita."),
        f("E, no PowerPoint, a transição é entre slides, e a animação, nos objetos. O .ppsx abre direto na apresentação."),
      ],
      montar(c) {
        c.titulo("Revisão", "O que você aprendeu", { left: 140, top: 150 }, c.t(0), { medio: true });
        const cartoes = [
          ["Suítes", "Word .docx · Excel .xlsx · PowerPoint .pptx · ODF: .odt .ods .odp"],
          ["Word", "Padrão: à esquerda · rodapé = página · fim = documento"],
          ["Atalhos", "Word PT-BR → português · Writer → inglês · Ctrl + S: sublinha × salva"],
          ["Fórmulas", "Começa com = · <b>:</b> até · <b>;</b> e · × antes de +"],
          ["Referências", "$ trava o que vem depois · F4 alterna"],
          ["Funções", "MÉDIA ignora vazias e texto · PROCV: 1ª coluna"],
          ["Erros", "#DIV/0! divisão por zero · ##### coluna estreita"],
          ["PowerPoint", "Transição: entre slides · animação: objetos · .ppsx"],
        ];
        cartoes.forEach((k, i) => {
          const col = i % 4, lin = Math.floor(i / 4);
          const e = c.novo(`<div class="cartao" style="left:${140 + col * 360}px;top:${315 + lin * 285}px;width:340px;height:262px;padding:28px">
            <div style="display:flex;align-items:center;gap:16px">${icone("check")}<h3 style="margin:0;font-size:32px">${k[0]}</h3></div>
            <p style="margin-top:16px;font-size:25px">${k[1]}</p></div>`);
          e.querySelector(".icone").style.cssText = "margin:0;width:52px;height:52px";
          c.entra(e, c.t(i + 1), "pop");
        });
      },
    },
    {
      id: "encerramento",
      visual: "Bit grande à esquerda. Cartão “Pratique agora: 15 questões” e cartão “Próximo vídeo: Capítulo 5 — Hardware” na cor do capítulo 5. Bit acena na despedida.",
      secao: "Revisão",
      bit: BIT_GRANDE,
      falas: [
        f("Agora é a sua vez: faça as quinze questões do final do capítulo e confira a correção comentada."),
        f("No próximo vídeo, vamos estudar o hardware: as peças que fazem o computador funcionar."),
        f("Até lá, e bons estudos!"),
      ],
      montar(c) {
        c.cartao({ icone: "questoes", titulo: "Pratique agora", texto: "<b>15 questões</b> no final do Capítulo 4, com correção comentada." }, { left: 900, top: 230, width: 820 }, c.t(0));
        const prox = c.novo(`<div class="cartao" style="left:900px;top:640px;width:820px;--cor:#b45309">
          <div class="rotulo">Próximo vídeo</div><h3 style="margin-top:14px;font-family:var(--serif);font-size:52px">Capítulo 5 —<br>Hardware</h3></div>`);
        c.entra(prox, c.t(1), "baixo");
        c.bit.acenar(c.t(2));
      },
    },
  ],
});

// Tabela de atalhos (Ação · Word · Writer). Devolve os elementos criados.
function tabelaAtalhos(c, o, tCab, linhas) {
  const [w1, w2, w3] = o.cols;
  const grid = `grid-template-columns:${w1}px ${w2}px ${w3}px`;
  const cab = c.novo(`<div class="abs" style="left:${o.left}px;top:${o.top}px;width:${w1 + w2 + w3}px;height:56px;display:grid;${grid};align-items:center;
    background:${COR_SUAVE};border-radius:16px 16px 0 0;font:700 21px var(--sans);letter-spacing:.1em;text-transform:uppercase">
    <div style="padding:0 18px;color:var(--texto-fraco)">Ação</div><div style="padding:0 12px;color:${COR}">Word PT-BR</div><div style="padding:0 12px;color:${NAVY}">Writer</div></div>`);
  c.entra(cab, tCab, "fade");
  const els = [cab];
  linhas.forEach((l, i) => {
    const igual = l[1] === l[2];
    const ultima = i === linhas.length - 1;
    const e = c.novo(`<div class="abs" style="left:${o.left}px;top:${o.top + 56 + i * 86}px;width:${w1 + w2 + w3}px;height:86px;display:grid;${grid};align-items:center;
      background:#fff;border-top:2px solid var(--borda);${ultima ? "border-radius:0 0 16px 16px;" : ""}box-shadow:0 10px 24px rgba(26,34,48,.06)">
      <div style="padding:0 18px;font:700 27px var(--sans);line-height:1.15">${l[0]}${igual ? ` <span class="c4-tag" style="background:#eef1f6;color:var(--texto-fraco)">igual</span>` : ""}</div>
      <div style="padding:0 10px">${atalho(l[1], igual ? "" : "w")}</div><div style="padding:0 10px">${atalho(l[2], igual ? "" : "l")}</div></div>`);
    c.entra(e, l[3], "esquerda");
    els.push(e);
  });
  return els;
}
