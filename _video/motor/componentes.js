// Ilustrações da série: personagem Bit e ícones no mesmo estilo plano.
// Cores: c1 = cor do capítulo, c2 = cor média, cs = cor suave,
// cb = branco, ct = texto, cn = azul-marinho da série.

const ESTILO_SVG = `
  .c1{fill:var(--cor)} .c2{fill:var(--cor-media)} .cs{fill:var(--cor-suave)}
  .cb{fill:#fff} .ct{fill:var(--texto)} .cn{fill:var(--serie)} .cf{fill:var(--texto-fraco)}
  .s1{fill:none;stroke:var(--cor);stroke-width:8;stroke-linecap:round;stroke-linejoin:round}
  .st{fill:none;stroke:var(--texto);stroke-width:8;stroke-linecap:round;stroke-linejoin:round}
  .sb{fill:none;stroke:#fff;stroke-width:8;stroke-linecap:round;stroke-linejoin:round}
`;

function svg(conteudo, viewBox = "0 0 120 120", classe = "icone") {
  return `<svg class="${classe}" viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg"><style>${ESTILO_SVG}</style>${conteudo}</svg>`;
}

const ICONES = {
  cpu: `<rect class="cs" x="22" y="22" width="76" height="76" rx="14"/>
    <rect class="c1" x="36" y="36" width="48" height="48" rx="8"/>
    <rect class="cb" x="48" y="48" width="24" height="24" rx="4"/>
    ${[34, 52, 70, 88].map((p) => `<rect class="c1" x="${p - 4}" y="8" width="8" height="14" rx="3"/><rect class="c1" x="${p - 4}" y="98" width="8" height="14" rx="3"/><rect class="c1" x="8" y="${p - 4}" width="14" height="8" rx="3"/><rect class="c1" x="98" y="${p - 4}" width="14" height="8" rx="3"/>`).join("")}`,
  memoria: `<rect class="c1" x="8" y="34" width="104" height="44" rx="8"/>
    ${[18, 42, 66, 90].map((x) => `<rect class="cb" x="${x}" y="42" width="14" height="22" rx="3"/>`).join("")}
    ${Array.from({ length: 10 }, (_, i) => `<rect class="c2" x="${14 + i * 9.6}" y="80" width="5" height="12" rx="2"/>`).join("")}`,
  teclado: `<rect class="c1" x="8" y="34" width="104" height="56" rx="12"/>
    ${[0, 1, 2].map((l) => Array.from({ length: 7 }, (_, i) => `<rect class="cb" x="${18 + i * 12.5}" y="${43 + l * 12}" width="8" height="7" rx="2"/>`).join("")).join("")}
    <rect class="cb" x="36" y="78" width="48" height="6" rx="3"/>`,
  monitor: `<rect class="c1" x="10" y="16" width="100" height="70" rx="10"/>
    <rect class="cs" x="18" y="24" width="84" height="54" rx="5"/>
    <rect class="c2" x="26" y="34" width="40" height="8" rx="4"/><rect class="c2" x="26" y="48" width="58" height="8" rx="4"/>
    <rect class="c1" x="52" y="86" width="16" height="14"/><rect class="c1" x="32" y="100" width="56" height="8" rx="4"/>`,
  pessoa: `<circle class="c1" cx="60" cy="38" r="22"/>
    <path class="c2" d="M18 108c0-24 19-40 42-40s42 16 42 40z"/>`,
  pessoas: `<circle class="c2" cx="34" cy="44" r="16"/><path class="c2" d="M4 104c0-18 13-30 30-30s30 12 30 30z"/>
    <circle class="c1" cx="74" cy="36" r="20"/><path class="c1" d="M36 108c0-23 17-38 38-38s38 15 38 38z"/>`,
  chip: `<rect class="c1" x="24" y="24" width="72" height="72" rx="10"/>
    ${[38, 54, 70, 86].map((p) => `<rect class="c2" x="${p - 5}" y="10" width="6" height="14" rx="2"/><rect class="c2" x="${p - 5}" y="96" width="6" height="14" rx="2"/>`).join("")}
    <path class="sb" d="M48 50l-10 10 10 10M72 50l10 10-10 10M64 46l-8 28"/>`,
  engrenagem: `<path class="c1" d="M52 8h16l3 14 10 4 12-8 11 11-8 12 4 10 14 3v16l-14 3-4 10 8 12-11 11-12-8-10 4-3 14H52l-3-14-10-4-12 8-11-11 8-12-4-10-14-3V52l14-3 4-10-8-12 11-11 12 8 10-4z"/>
    <circle class="cb" cx="60" cy="60" r="18"/>`,
  documento: `<path class="cs" d="M24 8h52l24 24v80H24z"/><path class="c2" d="M76 8v24h24z"/>
    ${[46, 60, 74, 88].map((y, i) => `<rect class="c1" x="36" y="${y}" width="${i === 3 ? 30 : 50}" height="7" rx="3"/>`).join("")}`,
  numeros: `<rect class="cs" x="8" y="20" width="104" height="80" rx="14"/>
    <text x="60" y="76" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-weight="700" font-size="40" fill="var(--cor)">324</text>`,
  lampada: `<path class="c1" d="M60 8c-22 0-38 16-38 37 0 13 6 22 14 30 4 4 6 9 6 14h36c0-5 2-10 6-14 8-8 14-17 14-30C98 24 82 8 60 8z"/>
    <rect class="c2" x="42" y="92" width="36" height="9" rx="4"/><rect class="c2" x="46" y="104" width="28" height="9" rx="4"/>
    <path class="sb" d="M48 52l12 12 12-12"/>`,
  alvo: `<circle class="cs" cx="60" cy="60" r="50"/><circle class="c2" cx="60" cy="60" r="34"/><circle class="cb" cx="60" cy="60" r="18"/><circle class="c1" cx="60" cy="60" r="8"/>`,
  download: `<circle class="cs" cx="60" cy="60" r="52"/><path class="s1" d="M60 28v52M38 60l22 22 22-22M34 94h52"/>`,
  binario: `<rect class="cs" x="8" y="18" width="104" height="84" rx="14"/>
    <text x="60" y="56" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-weight="700" font-size="28" fill="var(--cor)">1011</text>
    <text x="60" y="90" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-weight="700" font-size="28" fill="var(--texto-fraco)">0110</text>`,
  texto: `<rect class="cs" x="8" y="14" width="104" height="92" rx="14"/>
    <text x="60" y="80" text-anchor="middle" font-family="Source Serif 4, serif" font-weight="700" font-size="56" fill="var(--cor)">Aa</text>`,
  imagem: `<rect class="cs" x="8" y="16" width="104" height="88" rx="12"/>
    <circle class="c2" cx="40" cy="44" r="12"/><path class="c1" d="M8 92l34-34 22 22 16-16 32 32v8H8z"/>`,
  pacote: `<path class="c2" d="M60 8l48 22v58l-48 24-48-24V30z"/><path class="c1" d="M60 52v60l48-24V30z"/>
    <path class="cs" d="M12 30l48 22 48-22-48-22z"/><rect class="cb" x="54" y="8" width="12" height="44" opacity=".55"/>`,
  valvula: `<path class="cs" d="M38 20c0-8 10-12 22-12s22 4 22 12v58H38z"/>
    <path class="c2" d="M48 30h24v40H48z"/><path class="s1" d="M52 70V40h16v30"/>
    <rect class="c1" x="34" y="78" width="52" height="16" rx="4"/>
    <path class="st" d="M46 94v18M60 94v18M74 94v18"/>`,
  transistor: `<path class="c1" d="M30 52c0-16 13-28 30-28s30 12 30 28v24H30z"/>
    <rect class="c2" x="30" y="70" width="60" height="8"/>
    <path class="st" d="M44 78v34M60 78v34M76 78v34"/>`,
  circuito: `<rect class="c1" x="20" y="28" width="80" height="64" rx="8"/>
    ${[34, 48, 62, 76, 90].map((x) => `<rect class="c2" x="${x - 4}" y="16" width="6" height="12" rx="2"/><rect class="c2" x="${x - 4}" y="92" width="6" height="12" rx="2"/>`).join("")}
    <circle class="cs" cx="34" cy="42" r="5"/>`,
  ia: `<path class="c1" d="M60 12a40 40 0 1 0 0 80h0V12z"/><path class="c2" d="M60 12a40 40 0 1 1 0 80z"/>
    <path class="sb" d="M42 40h10l8 12 8-12h10M42 64h36M52 76l8-12 8 12"/>
    <path class="c1" d="M96 8l4 10 10 4-10 4-4 10-4-10-10-4 10-4z"/>`,
  servidor: `${[14, 46, 78].map((y) => `<rect class="c1" x="16" y="${y}" width="88" height="28" rx="6"/><circle class="cb" cx="88" cy="${y + 14}" r="5"/><rect class="c2" x="28" y="${y + 11}" width="36" height="6" rx="3"/>`).join("")}`,
  super: `${[8, 46, 84].map((x) => `<rect class="c1" x="${x}" y="14" width="28" height="92" rx="5"/>${[26, 46, 66, 86].map((y) => `<rect class="c2" x="${x + 6}" y="${y}" width="16" height="6" rx="2"/>`).join("")}`).join("")}`,
  notebook: `<rect class="c1" x="20" y="22" width="80" height="54" rx="8"/><rect class="cs" x="27" y="29" width="66" height="40" rx="4"/>
    <path class="c2" d="M8 82h104l-8 14H16z"/>`,
  celular: `<rect class="c1" x="34" y="8" width="52" height="104" rx="12"/><rect class="cs" x="40" y="20" width="40" height="76" rx="4"/><rect class="cb" x="52" y="100" width="16" height="5" rx="2"/>`,
  onda: `<rect class="cs" x="8" y="20" width="104" height="80" rx="14"/><path class="s1" d="M18 60c10-30 20-30 30 0s20 30 30 0 20-30 30 0"/>`,
  degraus: `<rect class="cs" x="8" y="20" width="104" height="80" rx="14"/><path class="s1" d="M18 84h18V44h20v40h18V44h20v40h8"/>`,
  janela: `<rect class="c1" x="10" y="18" width="100" height="84" rx="10"/><rect class="cs" x="16" y="34" width="88" height="62" rx="4"/>
    <circle class="cb" cx="22" cy="26" r="3"/><circle class="cb" cx="32" cy="26" r="3"/><circle class="cb" cx="42" cy="26" r="3"/>
    <rect class="c2" x="26" y="46" width="36" height="36" rx="4"/><rect class="c2" x="70" y="46" width="24" height="8" rx="3"/><rect class="c2" x="70" y="60" width="18" height="8" rx="3"/>`,
  ferramenta: `<path class="c1" d="M78 10a26 26 0 0 0-24 34L14 84a12 12 0 0 0 17 17l40-40a26 26 0 0 0 34-24l-14 14-14-4-4-14z"/>`,
  codigo: `<rect class="c1" x="8" y="16" width="104" height="88" rx="12"/><path class="sb" d="M44 44L28 60l16 16M76 44l16 16-16 16M66 38L54 82"/>`,
  cadeado: `<path class="s1" d="M38 52V38a22 22 0 0 1 44 0v14"/><rect class="c1" x="24" y="50" width="72" height="58" rx="12"/><circle class="cb" cx="60" cy="76" r="8"/><rect class="cb" x="57" y="78" width="6" height="16" rx="3"/>`,
  presente: `<rect class="c1" x="16" y="48" width="88" height="60" rx="8"/><rect class="c2" x="10" y="32" width="100" height="20" rx="6"/>
    <rect class="cb" x="54" y="32" width="12" height="76"/><path class="s1" d="M60 32c-8-16-30-16-26-2 3 8 26 2 26 2zm0 0c8-16 30-16 26-2-3 8-26 2-26 2z"/>`,
  relogio: `<circle class="cs" cx="60" cy="62" r="46"/><circle class="cb" cx="60" cy="62" r="36"/><path class="s1" d="M60 40v24l14 10"/>`,
  livre: `<circle class="cs" cx="60" cy="60" r="52"/><path class="c1" d="M60 22l10 24 26 2-20 17 7 25-23-14-23 14 7-25-20-17 26-2z"/>`,
  publico: `<circle class="cs" cx="60" cy="60" r="52"/><circle class="s1" cx="60" cy="60" r="30"/><path class="s1" d="M30 60h60M60 30c-14 18-14 42 0 60M60 30c14 18 14 42 0 60"/>`,
  tradutor: `<path class="c1" d="M8 20h60a8 8 0 0 1 8 8v34a8 8 0 0 1-8 8H36l-16 14V70H8a8 8 0 0 1-8-8V28a8 8 0 0 1 8-8z"/>
    <path class="c2" d="M112 44H60a8 8 0 0 0-8 8v30a8 8 0 0 0 8 8h28l16 14V90h8a8 8 0 0 0 8-8V52a8 8 0 0 0-8-8z"/>
    <text x="38" y="56" text-anchor="middle" font-family="Inter" font-weight="800" font-size="24" fill="#fff">01</text>
    <text x="86" y="78" text-anchor="middle" font-family="Inter" font-weight="800" font-size="22" fill="var(--cor)">Aa</text>`,
  iot: `<circle class="cs" cx="60" cy="60" r="52"/><path class="c1" d="M60 46c-12 0-20 8-20 19 0 7 3 11 7 15 2 2 3 5 3 8h20c0-3 1-6 3-8 4-4 7-8 7-15 0-11-8-19-20-19z"/>
    <rect class="c2" x="50" y="92" width="20" height="6" rx="3"/><path class="s1" d="M40 30a28 28 0 0 1 40 0M48 38a16 16 0 0 1 24 0"/>`,
  dados: `${[86, 60, 34].map((y, i) => `<ellipse class="${i === 2 ? "c1" : "c2"}" cx="60" cy="${y}" rx="40" ry="12"/><rect class="${i === 2 ? "c1" : "c2"}" x="20" y="${y}" width="80" height="18"/>`).join("")}<ellipse class="c2" cx="60" cy="104" rx="40" ry="12"/><ellipse class="cs" cx="60" cy="34" rx="40" ry="12"/>`,
  nuvem: `<path class="c1" d="M34 92a24 24 0 0 1-2-48 30 30 0 0 1 58 6 21 21 0 0 1-2 42z"/>`,
  setas: `<circle class="cs" cx="60" cy="60" r="52"/><path class="s1" d="M30 46h56l-12-12M90 74H34l12 12"/>`,
  check: `<circle class="c1" cx="60" cy="60" r="50"/><path class="sb" d="M36 62l16 16 32-34"/>`,
  alerta: `<path class="c1" d="M60 10l54 96H6z"/><rect class="cb" x="55" y="42" width="10" height="34" rx="5"/><circle class="cb" cx="60" cy="90" r="6"/>`,
  livro: `<path class="c2" d="M60 26C46 16 26 14 10 18v82c16-4 36-2 50 8z"/><path class="c1" d="M60 26c14-10 34-12 50-8v82c-16-4-36-2-50 8z"/>`,
  questoes: `<rect class="c1" x="14" y="10" width="92" height="100" rx="12"/>
    ${[30, 56, 82].map((y) => `<circle class="cb" cx="34" cy="${y}" r="8"/><rect class="c2" x="50" y="${y - 5}" width="44" height="10" rx="5"/>`).join("")}
    <path class="s1" d="M29 30l4 4 8-9" style="stroke:var(--cor)"/>`,
};

function icone(nome, classe = "icone") {
  if (!ICONES[nome]) throw new Error(`Ícone desconhecido: ${nome}`);
  return svg(ICONES[nome], "0 0 120 120", classe);
}

// Personagem Bit (viewBox 300 x 380)
function bitSVG() {
  return svg(`
    <ellipse class="sombra-bit" cx="150" cy="368" rx="80" ry="10" fill="rgba(26,34,48,.12)"/>
    <g class="corpo-bit">
      <line x1="150" y1="44" x2="150" y2="16" stroke="var(--serie)" stroke-width="8" stroke-linecap="round"/>
      <circle class="luz-bit" cx="150" cy="14" r="12" fill="var(--cor)"/>
      <g class="braco-esq" style="transform-origin:96px 262px">
        <path d="M96 262 C70 272 58 290 54 312" stroke="var(--serie)" stroke-width="16" stroke-linecap="round" fill="none"/>
        <circle cx="54" cy="314" r="13" fill="#2a5f9e"/>
      </g>
      <g class="braco-dir" style="transform-origin:204px 262px">
        <path d="M204 262 C230 272 242 290 246 312" stroke="var(--serie)" stroke-width="16" stroke-linecap="round" fill="none"/>
        <circle cx="246" cy="314" r="13" fill="#2a5f9e"/>
      </g>
      <rect x="130" y="214" width="40" height="30" rx="6" fill="#163e6e"/>
      <rect x="92" y="238" width="116" height="100" rx="34" fill="var(--serie)"/>
      <circle cx="150" cy="284" r="14" fill="var(--cor)"/>
      <circle cx="150" cy="284" r="6" fill="#fff" opacity=".8"/>
      <rect x="106" y="334" width="30" height="24" rx="10" fill="#163e6e"/>
      <rect x="164" y="334" width="30" height="24" rx="10" fill="#163e6e"/>
      <rect x="38" y="40" width="224" height="178" rx="44" fill="var(--serie)"/>
      <rect x="58" y="60" width="184" height="134" rx="30" fill="#eef5ff"/>
      <circle cx="96" cy="150" r="11" fill="var(--cor)" opacity=".35"/>
      <circle cx="204" cy="150" r="11" fill="var(--cor)" opacity=".35"/>
      <g class="olhos-bit" style="transform-origin:150px 116px">
        <ellipse cx="118" cy="116" rx="13" ry="18" fill="#1a2230"/>
        <ellipse cx="182" cy="116" rx="13" ry="18" fill="#1a2230"/>
        <circle cx="122" cy="109" r="4.5" fill="#fff"/>
        <circle cx="186" cy="109" r="4.5" fill="#fff"/>
      </g>
      <path class="sorriso-bit" d="M132 150 Q150 166 168 150" stroke="#1a2230" stroke-width="7" stroke-linecap="round" fill="none"/>
      <g class="boca-bit" style="transform-origin:150px 156px">
        <ellipse cx="150" cy="156" rx="22" ry="14" fill="#1a2230"/>
        <ellipse cx="150" cy="164" rx="12" ry="5" fill="#e0667a"/>
      </g>
    </g>`, "0 0 300 380", "bit-svg");
}
