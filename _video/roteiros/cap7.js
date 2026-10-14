// Roteiro da videoaula do Capítulo 7 — Segurança da Informação.
// Cada cena tem a narração (falas) e a montagem visual (montar).
// c.t(i) = instante em que começa a fala i da cena.

const BIT_CANTO = { x: 1720, y: 1020, s: 0.58 };

// ---------------------------------------------------------------- Pronúncia
// Grafia fonética usada só na voz (o texto da tela e das legendas não muda).
// Termos em minúsculas valem com qualquer caixa; siglas, só como escritas.
const PRONUNCIA_CAP7 = {
  "malicious software": "malíchâs sóftuér",
  "malwares": "máluérs",
  "malware": "máluér",
  "antimalware": "anti-máluér",
  "worm": "uór-me",
  "trojan": "trôujan",
  "ransomware": "rensomuér",
  "spywares": "spáiuérs",
  "spyware": "spáiuér",
  "keylogger": "quí-lóguer",
  "screenlogger": "scrín-lóguer",
  "adware": "éd-uér",
  "backdoor": "béc-dór",
  "rootkit": "rút-quít",
  "botnet": "bót-nét",
  "bot": "bót",
  "DDoS": "dê-dós",
  "DoS": "dós",
  "spear phishing": "spír fíchin",
  "phishing": "fíchin",
  "smishing": "ismíchin",
  "vishing": "víchin",
  "pharming": "fár-min",
  "man-in-the-middle": "mén-in-dâ-mídou",
  "spoofing": "spúfin",
  "zero-day": "zíro-dêi",
  "sniffing": "isnífin",
  "SQL injection": "ésse quê éle injécxon",
  "cross-site scripting": "cróss sáit scrípitin",
  "scripts": "iscrípits",
  "XSS": "xis ésse ésse",
  "defacement": "difêiss-men",
  "hoax": "rôucs",
  "cryptojacking": "críptô-djéquin",
  "hash": "réchi",
  "AES": "a é ésse",
  "3DES": "três dés",
  "RSA": "érre ésse á",
  "ECC": "é cê cê",
  "ICP-Brasil": "i cê pê Brasil",
  "AC": "á cê",
  "token": "tôken",
  "smart card": "ismárti cárdi",
  "e-CPF": "é cê pê éfe",
  "e-CNPJ": "é cê ene pê jota",
  "firewall": "fáier-uól",
  "IDS": "i dê ésse",
  "IPS": "i pê ésse",
  "antispam": "anti-spém",
  "proxy": "próksi",
  "sandbox": "sénd-bóks",
  "honeypot": "râni-pót",
  "backups": "bécâps",
  "backup": "bécâp",
  "full": "fúl",
  "DPO": "dê pê ó",
  "ANPD": "á ene pê dê",
  "SGSI": "ésse gê ésse i",
  "PSI": "pê ésse i",
  "CID": "cê i dê",
  "CIA": "cê i á",
  "IP": "i pê",
  "nobreak": "nôu-brêik",
  "login": "lóguin",
  "Windows": "uíndous",
  "Microsoft Defender": "máicrossóft difénder",
};

const REGRAS_CAP7 = Object.entries(PRONUNCIA_CAP7)
  .sort((a, b) => b[0].length - a[0].length)
  .map(([termo, falar]) => [
    new RegExp(`(?<![\\wÀ-ÿ])${termo.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![\\wÀ-ÿ])`, termo === termo.toLowerCase() ? "gi" : "g"),
    falar,
  ]);

function vozCap7(fala) {
  if (typeof fala !== "string") return fala;
  let falar = fala;
  for (const [padrao, troca] of REGRAS_CAP7) falar = falar.replace(padrao, troca);
  return falar === fala ? fala : { texto: fala, falar };
}

function comPronuncia(cenas) {
  return cenas.map((cena) => ({ ...cena, falas: cena.falas.map(vozCap7) }));
}

// ------------------------------------------------------------------ Ícones
// Ícones novos deste capítulo, no mesmo estilo plano (viewBox 120 × 120).
if (typeof ICONES !== "undefined") {
  Object.assign(ICONES, {
    escudo: `<path class="c1" d="M60 8l44 16v30c0 28-19 48-44 58C35 102 16 82 16 54V24z"/>
      <path class="c2" d="M60 8l44 16v30c0 28-19 48-44 58z" opacity=".45"/>
      <path class="sb" d="M40 60l14 14 28-30"/>`,
    virus: `${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
      const r = (a * Math.PI) / 180;
      const x1 = 60 + 30 * Math.cos(r), y1 = 60 + 30 * Math.sin(r), x2 = 60 + 48 * Math.cos(r), y2 = 60 + 48 * Math.sin(r);
      return `<path class="s1" d="M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}" style="stroke-width:7"/><circle class="c1" cx="${x2.toFixed(1)}" cy="${y2.toFixed(1)}" r="7"/>`;
    }).join("")}
      <circle class="c1" cx="60" cy="60" r="32"/><circle class="c2" cx="50" cy="52" r="8"/><circle class="c2" cx="70" cy="70" r="6"/><circle class="c2" cx="68" cy="46" r="4"/>`,
    anzol: `<rect class="cf" x="58" y="2" width="4" height="18" rx="2"/>
      <path class="s1" d="M60 18v54a20 20 0 0 1-40 0v-6" style="stroke-width:10"/>
      <path class="c1" d="M20 54l-10 16h20z"/>
      <rect class="c2" x="64" y="72" width="48" height="34" rx="6"/><path class="sb" d="M69 79l19 13 19-13" style="stroke-width:5"/>`,
    chave: `<circle class="c1" cx="34" cy="60" r="26"/><circle class="cb" cx="28" cy="60" r="9"/>
      <rect class="c1" x="52" y="53" width="62" height="14" rx="5"/><rect class="c2" x="86" y="60" width="11" height="24" rx="3"/><rect class="c2" x="102" y="60" width="11" height="17" rx="3"/>`,
    envelope: `<rect class="c1" x="10" y="26" width="100" height="70" rx="10"/><path class="sb" d="M20 38l40 28 40-28"/>`,
    muro: `${[[10, 20, 46], [60, 20, 50], [10, 46, 22], [36, 46, 46], [86, 46, 24], [10, 72, 46], [60, 72, 50]].map(([x, y, w], i) => `<rect class="${i % 2 ? "c2" : "c1"}" x="${x}" y="${y}" width="${w}" height="22" rx="4"/>`).join("")}
      <rect class="c1" x="10" y="98" width="100" height="10" rx="4"/>`,
    olho: `<path class="c2" d="M6 60c14-24 32-36 54-36s40 12 54 36c-14 24-32 36-54 36S20 84 6 60z"/>
      <circle class="cb" cx="60" cy="60" r="25"/><circle class="c1" cx="60" cy="60" r="15"/><circle class="cb" cx="65" cy="55" r="5"/>`,
    oculto: `<path class="cs" d="M6 60c14-24 32-36 54-36s40 12 54 36c-14 24-32 36-54 36S20 84 6 60z"/>
      <circle class="c2" cx="60" cy="60" r="22"/>
      <path d="M20 100L100 20" stroke="#fff" stroke-width="20" stroke-linecap="round"/><path class="s1" d="M20 100L100 20" style="stroke-width:10"/>`,
    porta: `<rect class="c2" x="22" y="8" width="76" height="104" rx="6"/>
      <path class="c1" d="M28 14l46 8v86l-46 4z"/><circle class="cb" cx="64" cy="66" r="5"/>`,
    rede: `<path d="M60 60L22 24M60 60L98 24M60 60L22 96M60 60L98 96" stroke="var(--cor)" stroke-width="6" stroke-linecap="round" opacity=".55"/>
      ${[[22, 24], [98, 24], [22, 96], [98, 96]].map(([x, y]) => `<rect class="c1" x="${x - 18}" y="${y - 14}" width="36" height="28" rx="6"/><rect class="cb" x="${x - 12}" y="${y - 8}" width="24" height="14" rx="3"/>`).join("")}
      <rect class="c1" x="40" y="44" width="40" height="32" rx="7"/><rect class="cb" x="47" y="51" width="26" height="15" rx="3"/>`,
    mascara: `<path class="c1" d="M6 46c18-8 36-6 54 6 18-12 36-14 54-6 2 24-8 40-28 40-12 0-20-8-26-16-6 8-14 16-26 16C14 86 4 70 6 46z"/>
      <ellipse class="cb" cx="34" cy="60" rx="12" ry="8"/><ellipse class="cb" cx="86" cy="60" rx="12" ry="8"/>`,
    digital: `<circle class="cs" cx="60" cy="60" r="54"/>
      <path class="s1" d="M34 84c-6-8-8-16-8-24a34 34 0 0 1 68 0c0 8-2 14-4 20" style="stroke-width:6"/>
      <path class="s1" d="M46 94c-4-8-6-20-6-34a20 20 0 0 1 40 0c0 12-2 22-6 30" style="stroke-width:6"/>
      <path class="s1" d="M60 58c0 16-2 30-8 42M66 100c4-10 6-22 6-34" style="stroke-width:6"/>`,
    token: `<rect class="c1" x="22" y="12" width="76" height="96" rx="16"/><rect class="cb" x="32" y="26" width="56" height="30" rx="6"/>
      <text x="60" y="49" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-weight="700" font-size="22" fill="var(--cor)">482</text>
      <circle class="c2" cx="60" cy="82" r="12"/>`,
    lupa: `<circle class="cs" cx="48" cy="48" r="34"/><circle class="s1" cx="48" cy="48" r="34" style="stroke-width:10"/>
      <path class="s1" d="M74 74l32 32" style="stroke-width:16"/>`,
    megafone: `<path class="c1" d="M14 46h20l52-28v84L34 74H14z"/><rect class="c2" x="28" y="74" width="16" height="32" rx="6"/>
      <path class="s1" d="M96 46c6 8 6 20 0 28M104 34c12 14 12 38 0 52"/>`,
    fogo: `<path class="c1" d="M60 6c4 22 32 32 32 62a32 32 0 0 1-64 0c0-18 8-26 14-36 2 10 6 14 10 16-2-16 2-30 8-42z"/>
      <path class="c2" d="M60 58c2 10 15 15 15 30a15 15 0 0 1-30 0c0-12 8-18 15-30z"/>`,
    balao: `<path class="c1" d="M20 14h80a12 12 0 0 1 12 12v48a12 12 0 0 1-12 12H52l-22 20V86H20A12 12 0 0 1 8 74V26a12 12 0 0 1 12-12z"/>
      <circle class="cb" cx="38" cy="50" r="7"/><circle class="cb" cx="60" cy="50" r="7"/><circle class="cb" cx="82" cy="50" r="7"/>`,
    balanca: `<rect class="c1" x="56" y="16" width="8" height="84"/><rect class="c1" x="32" y="100" width="56" height="10" rx="5"/>
      <rect class="c1" x="14" y="24" width="92" height="9" rx="4"/><circle class="c1" cx="60" cy="16" r="8"/>
      <path d="M26 33L14 66M26 33l12 33M94 33L82 66M94 33l12 33" stroke="var(--cor)" stroke-width="3" fill="none"/>
      <path class="c2" d="M6 66h40a20 20 0 0 1-40 0zM74 66h40a20 20 0 0 1-40 0z"/>`,
    pote: `<rect class="c2" x="30" y="12" width="60" height="16" rx="6"/>
      <path class="c1" d="M28 32h64c8 10 12 24 12 38 0 24-18 40-44 40S16 94 16 70c0-14 4-28 12-38z"/>
      <path class="sb" d="M36 62c8 7 16 7 24 0s16-7 24 0"/><circle class="cb" cx="60" cy="86" r="6" opacity=".7"/>`,
    raio: `<path class="c1" d="M70 4L22 66h32l-10 50 52-68H64z"/>`,
    caneta: `<path class="s1" d="M8 104c10-14 18-14 22 0s14 6 22-6 14-4 22 4" style="stroke-width:6"/>
      <path class="c1" d="M88 6l22 22-50 50-28 8 6-28z"/><path class="c2" d="M80 14l22 22-8 8-22-22z"/>
      <path class="cb" d="M38 70l4-14 10 10z"/>`,
    certificado: `<rect class="cs" x="6" y="14" width="108" height="78" rx="10"/>
      <rect class="c2" x="20" y="30" width="54" height="8" rx="4"/><rect class="c2" x="20" y="46" width="42" height="8" rx="4"/><rect class="c2" x="20" y="62" width="30" height="8" rx="4"/>
      <path class="c1" d="M76 86l-8 28 18-9 18 9-8-28z"/><circle class="c1" cx="86" cy="74" r="20"/><circle class="cb" cx="86" cy="74" r="9"/>`,
    cartao: `<rect class="c1" x="6" y="24" width="108" height="74" rx="10"/><rect class="c2" x="18" y="40" width="28" height="24" rx="5"/>
      <path d="M18 52h28M32 40v24" stroke="var(--cor)" stroke-width="3"/>
      <rect class="cb" x="18" y="76" width="64" height="8" rx="4" opacity=".75"/>`,
    resgate: `<path class="cs" d="M14 6h50l22 22v86H14z"/><path class="c2" d="M64 6v22h22z"/>
      ${[40, 54, 68].map((y) => `<rect class="c2" x="24" y="${y}" width="${y === 68 ? 22 : 36}" height="7" rx="3"/>`).join("")}
      <path class="s1" d="M62 70V60a16 16 0 0 1 32 0v10" style="stroke-width:8"/>
      <rect class="c1" x="52" y="66" width="52" height="46" rx="9"/><circle class="cb" cx="78" cy="86" r="6"/><rect class="cb" x="75" y="88" width="6" height="12" rx="3"/>`,
    moeda: `<circle class="c1" cx="60" cy="60" r="50"/><circle class="c2" cx="60" cy="60" r="38"/>
      <text x="60" y="78" text-anchor="middle" font-family="Inter" font-weight="800" font-size="50" fill="#fff">$</text>`,
    calendario: `<rect class="cs" x="10" y="20" width="100" height="90" rx="12"/><path class="c1" d="M10 32a12 12 0 0 1 12-12h76a12 12 0 0 1 12 12v14H10z"/>
      <rect class="c2" x="30" y="8" width="10" height="22" rx="4"/><rect class="c2" x="80" y="8" width="10" height="22" rx="4"/>
      <text x="60" y="98" text-anchor="middle" font-family="Inter" font-weight="800" font-size="46" fill="var(--cor)">0</text>`,
    suporte: `<circle class="c1" cx="60" cy="44" r="22"/><path class="c2" d="M18 112c0-24 19-40 42-40s42 16 42 40z"/>
      <path class="s1" d="M32 46a28 28 0 0 1 56 0" style="stroke:var(--serie)"/>
      <rect class="cn" x="24" y="40" width="14" height="22" rx="6"/><rect class="cn" x="82" y="40" width="14" height="22" rx="6"/>
      <path d="M90 62c0 10-8 14-20 14" stroke="var(--serie)" stroke-width="5" fill="none" stroke-linecap="round"/>`,
    bloqueio: `<circle class="cs" cx="60" cy="60" r="52"/><circle class="s1" cx="60" cy="60" r="36" style="stroke-width:12"/>
      <path class="s1" d="M35 85L85 35" style="stroke-width:12"/>`,
    tunel: `<rect class="cs" x="4" y="32" width="112" height="56" rx="28"/><rect class="c2" x="14" y="42" width="92" height="36" rx="18"/>
      <path class="s1" d="M52 58v-6a8 8 0 0 1 16 0v6" style="stroke-width:5"/><rect class="c1" x="46" y="56" width="28" height="20" rx="5"/>`,
  });
}

// ------------------------------------------------------- Peças auxiliares
const VERDE = "#2f8a5b";
const VERMELHO = "#c2412f";
const AZUL = "#1d4e89";
const AMBAR = "#c27c0e";

function corLocal(e, cor) {
  e.style.setProperty("--cor", cor);
  e.style.setProperty("--cor-media", `color-mix(in srgb, ${cor} 30%, white)`);
  e.style.setProperty("--cor-suave", `color-mix(in srgb, ${cor} 10%, white)`);
  return e;
}

// Chave desenhada (pública em verde, privada na cor do capítulo).
function chaveSVG(cor, tam = 56) {
  return `<svg viewBox="0 0 120 120" style="width:${tam}px;height:${tam}px;flex-shrink:0"><g fill="${cor}">
    <circle cx="32" cy="60" r="26"/><rect x="50" y="53" width="64" height="14" rx="5"/>
    <rect x="86" y="60" width="11" height="24" rx="3"/><rect x="102" y="60" width="11" height="17" rx="3"/></g>
    <circle cx="26" cy="60" r="9" fill="#fff"/></svg>`;
}

// Cartão horizontal: ícone à esquerda, título e texto à direita.
function cartaoH(c, o, estilo, t, tipo = "baixo") {
  const e = c.novo(`<div class="cartao" style="display:flex;gap:26px;align-items:center;padding:24px 30px">
    ${o.icone ? icone(o.icone) : ""}${o.antes || ""}
    <div>${o.rotulo ? `<div class="rotulo" style="font-size:20px;margin-bottom:6px">${o.rotulo}</div>` : ""}
    <h3 style="margin:0;font-size:${o.th || 34}px">${o.titulo}</h3>
    ${o.texto ? `<p style="font-size:${o.tp || 26}px;margin-top:6px;line-height:1.35">${o.texto}</p>` : ""}</div></div>`, estilo);
  const ic = e.querySelector(".icone");
  if (ic) ic.style.cssText = `margin:0;width:${o.ti || 84}px;height:${o.ti || 84}px;flex-shrink:0`;
  if (o.cor) corLocal(e, o.cor);
  return c.entra(e, t, tipo);
}

// Cartão vertical compacto (ícone, título, texto).
function cartaoV(c, o, estilo, t, tipo = "baixo") {
  const e = c.novo(`<div class="cartao" style="padding:${o.pad || 30}px">
    ${o.icone ? icone(o.icone) : ""}
    <h3 style="font-size:${o.th || 36}px">${o.titulo}</h3>
    ${o.texto ? `<p style="font-size:${o.tp || 26}px;line-height:1.38">${o.texto}</p>` : ""}${o.extra || ""}</div>`, estilo);
  const ic = e.querySelector(".icone");
  if (ic) ic.style.cssText = `width:${o.ti || 80}px;height:${o.ti || 80}px;margin-bottom:16px`;
  if (o.cor) corLocal(e, o.cor);
  return c.entra(e, t, tipo);
}

// Faixa inferior de palavra-chave, centralizada sem translate(-50%):
// o c.chave do motor pode deslocar a faixa quando a largura dela é ímpar.
function chave7(c, html, t, tFim) {
  const e = c.novo(`<div class="chave" style="transform:none;left:0;right:0;width:fit-content;margin:0 auto">${html}</div>`);
  c.tl.fromTo(e, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out", immediateRender: true }, t);
  if (tFim) c.tl.to(e, { autoAlpha: 0, duration: 0.3 }, tFim);
  return e;
}

function pilula(c, html, estilo, t, cor, tipo = "pop") {
  const e = c.novo(`<div class="abs pilula">${html}</div>`, estilo);
  if (cor) { e.style.background = `color-mix(in srgb, ${cor} 12%, white)`; e.style.color = cor; }
  return c.entra(e, t, tipo);
}

serie.capitulo({
  numero: 7,
  titulo: "Segurança da Informação",
  cor: "#be123c",
  proximo: "Capítulo 8 — Lógica de Programação",
  cenas: comPronuncia([
    // ------------------------------------------------------------ Abertura
    {
      id: "abertura",
      visual: "Bit grande à esquerda acena. À direita surgem o rótulo “Capítulo 7” e o título “Segurança da Informação”. Um roteiro de 5 tópicos aparece item por item, cada um na frase que o anuncia. Na última frase, Bit dá um pulinho.",
      secao: "Abertura",
      bit: { x: 470, y: 990, s: 1.3 },
      falas: [
        "Olá! Eu sou o Bit. Neste capítulo, vamos estudar um dos temas mais cobrados em concursos: a Segurança da Informação.",
        "Você vai ver princípios, riscos e normas, e aprender a diferenciar malware, golpes e ataques.",
        "Depois, vamos entender a criptografia, a assinatura e o certificado digital.",
        "E, para fechar, autenticação, ferramentas de proteção, backup e a LGPD. Vamos lá?",
      ],
      montar(c) {
        c.bit.acenar(c.t(0, 0.2));
        c.titulo("Capítulo 7", "Segurança da<br>Informação", { left: 900, top: 190 }, c.t(0, 3.2));
        c.lista([
          "<b>Princípios</b>, <b>riscos</b> e <b>normas</b>",
          "<b>Malware</b>, <b>golpes</b> e <b>ataques</b>",
          "<b>Criptografia</b>, <b>assinatura</b> e <b>certificado</b>",
          "<b>Autenticação</b> e <b>ferramentas</b> de proteção",
          "<b>Backup</b> e <b>LGPD</b>",
        ], { left: 900, top: 520, width: 900 }, [c.t(1), c.t(1, 3.8), c.t(2), c.t(3), c.t(3, 3.2)]);
        c.bit.pular(c.t(3, 4.6));
      },
    },

    // ------------------------------------------------ Conceito e princípios
    {
      id: "conceito",
      visual: "Escudo grande à esquerda e a definição ao lado; quatro pílulas com o que a segurança evita (acesso não autorizado, alteração indevida, destruição, indisponibilidade). Embaixo, “Em qualquer formato”: arquivos digitais, papel e conversas. Depois, quadro âmbar “Pegadinha de banca” e dois cartões: segurança da informação (qualquer formato) × segurança cibernética (meios digitais).",
      secao: "Conceito e princípios",
      bit: BIT_CANTO,
      falas: [
        "Segurança da informação é o conjunto de práticas, políticas e tecnologias que protegem a informação.",
        "Ela protege contra acesso não autorizado, alteração indevida, destruição e indisponibilidade.",
        "E vale para a informação em qualquer formato: arquivos digitais, documentos em papel e até conversas.",
        "Cuidado com a pegadinha: ela não protege só dados digitais. A proteção específica dos meios digitais costuma ser chamada de segurança cibernética.",
      ],
      montar(c) {
        c.titulo("Conceito", "Segurança da informação", { left: 140, top: 150 }, c.t(0), { medio: true });
        const esc = c.no({ icone: "escudo", titulo: "Proteção" }, { left: 140, top: 320, width: 300, height: 300 }, c.t(0, 0.6));
        const def = c.texto("Conjunto de <b>práticas</b>, <b>políticas</b> e <b>tecnologias</b> que protegem a informação contra:", { left: 500, top: 330, width: 1040 }, c.t(0, 1.2));
        const riscos = ["acesso não autorizado", "alteração indevida", "destruição", "indisponibilidade"];
        const pils = riscos.map((r, i) => pilula(c, r, { left: [500, 860, 1170, 500][i], top: [480, 480, 480, 556][i] }, c.t(1, 0.8 + i * 1.3)));
        const rot = c.novo(`<div class="abs rotulo" style="left:140px;top:670px">Em qualquer formato</div>`);
        c.entra(rot, c.t(2), "fade");
        const formatos = [
          ["notebook", "Arquivos digitais"],
          ["documento", "Documentos em papel"],
          ["balao", "Conversas"],
        ].map((f, i) => cartaoH(c, { icone: f[0], titulo: f[1], ti: 70, th: 32 }, { left: 140 + i * 480, top: 720, width: 440, height: 140 }, c.t(2, 2.6 + i * 1.4)));
        [esc, def, ...pils, rot, ...formatos].forEach((e) => c.sai(e, c.t(3) - 0.4));
        c.quadro("prova", "“Segurança da informação protege apenas dados digitais.” <b>Errado</b>: ela protege <b>qualquer informação</b>, inclusive documentos físicos.", { left: 140, top: 330, width: 1400 }, c.t(3));
        c.bit.apontar(c.t(3, 0.3), "esquerda");
        cartaoH(c, { icone: "escudo", titulo: "Segurança da informação", texto: "a informação em <b>qualquer formato</b>" }, { left: 140, top: 660, width: 680, height: 170 }, c.t(3, 4.2));
        cartaoH(c, { icone: "notebook", titulo: "Segurança cibernética", texto: "proteção dos <b>meios digitais</b>", cor: AZUL }, { left: 860, top: 660, width: 680, height: 170 }, c.t(3, 6.5));
      },
    },
    {
      id: "cid",
      visual: "Triângulo da tríade CID desenhado à esquerda, com os vértices C, I e D. À direita, três cartões entram um por frase — Confidencialidade, Integridade e Disponibilidade —, cada um com o que garante e seus mecanismos; o vértice correspondente pulsa.",
      secao: "Conceito e princípios",
      bit: BIT_CANTO,
      falas: [
        "A base de tudo é a tríade CID, ou CIA, em inglês: confidencialidade, integridade e disponibilidade.",
        "A confidencialidade garante que só pessoas autorizadas acessem a informação, com senhas, criptografia e controle de acesso.",
        "A integridade garante que a informação não foi alterada indevidamente, com hash e assinatura digital.",
        "E a disponibilidade garante que ela esteja acessível quando necessária, com backup, redundância, nobreak e proteção contra DDoS.",
      ],
      montar(c) {
        c.titulo("Princípios", "A tríade CID", { left: 140, top: 150 }, c.t(0), { medio: true });
        const vs = [[450, 390], [220, 790], [680, 790]];
        const tri = c.novo(`<svg class="abs" style="left:0;top:0;width:1920px;height:1080px" viewBox="0 0 1920 1080">
          <path d="M${vs[0][0]} ${vs[0][1]} L${vs[1][0]} ${vs[1][1]} L${vs[2][0]} ${vs[2][1]} Z" stroke="var(--cor-media)" stroke-width="12" stroke-linejoin="round" fill="var(--cor-suave)"/></svg>`);
        c.desenhar(tri.querySelector("path"), c.t(0, 1.2), 1.2);
        const centro = c.novo(`<div class="abs" style="left:350px;top:620px;width:200px;text-align:center;font:800 40px var(--sans);color:var(--cor);letter-spacing:.1em">CID</div>`);
        c.entra(centro, c.t(0, 2.4), "fade");
        const letras = ["C", "I", "D"].map((l, i) => {
          const e = c.novo(`<div class="abs" style="left:${vs[i][0] - 75}px;top:${vs[i][1] - 75}px;width:150px;height:150px;border-radius:50%;background:var(--cor);color:#fff;display:grid;place-items:center;font:700 80px var(--serif);box-shadow:var(--sombra)">${l}</div>`);
          return c.entra(e, c.t(0, 3.4 + i * 1.1), "pop");
        });
        const cartoes = [
          ["Confidencialidade", "só pessoas <b>autorizadas</b> acessam", "senhas · criptografia · controle de acesso"],
          ["Integridade", "a informação <b>não foi alterada</b> indevidamente", "hash · assinatura digital"],
          ["Disponibilidade", "acessível <b>quando necessária</b>", "backup · redundância · nobreak · proteção contra DDoS"],
        ];
        cartoes.forEach((k, i) => {
          const e = c.novo(`<div class="cartao" style="left:860px;top:${315 + i * 200}px;width:680px;height:185px;padding:22px 32px">
            <h3 style="font-size:36px;margin:0">${k[0]}</h3><p style="font-size:28px;margin-top:4px">${k[1]}</p>
            <div style="font:700 22px var(--sans);color:var(--cor);margin-top:8px;white-space:nowrap">${k[2]}</div></div>`);
          c.entra(e, c.t(i + 1), "direita");
          c.destaque(letras[i], c.t(i + 1, 0.3));
        });
      },
    },
    {
      id: "complementares",
      visual: "Dois cartões: Autenticidade (impressão digital; login, biometria, certificado) e Não repúdio (caneta; assinatura digital). Depois, quadro verde “Memorize” com CIDA e as letras C, I, D e A em blocos, mais “+ não repúdio”. Por fim, quadro âmbar: a tríade clássica é só C, I e D — o A e o não repúdio esmaecem e uma chave marca “tríade clássica”.",
      secao: "Conceito e princípios",
      bit: BIT_CANTO,
      falas: [
        "Há também dois princípios complementares. A autenticidade garante que a origem e a identidade são verdadeiras: quem diz ser é quem realmente é. Por exemplo: login com senha, biometria e certificado digital.",
        "O não repúdio, ou irretratabilidade, impede que o autor negue ter realizado uma ação, como assinar um documento. O mecanismo é a assinatura digital.",
        "Memorize a sigla CIDA: confidencialidade, integridade, disponibilidade e autenticidade, mais o não repúdio.",
        "Mas atenção: a tríade clássica tem só as três primeiras. Autenticidade e não repúdio são complementares.",
      ],
      montar(c) {
        c.titulo("Princípios complementares", "Autenticidade e não repúdio", { left: 140, top: 150 }, c.t(0), { medio: true });
        const a = cartaoH(c, { icone: "digital", titulo: "Autenticidade", ti: 100, texto: "Origem e identidade verdadeiras: <b>quem diz ser é quem realmente é</b>.<br><span style=\"color:var(--cor);font-weight:700;font-size:23px\">login com senha · biometria · certificado digital</span>" }, { left: 140, top: 330, width: 680, height: 290 }, c.t(0, 4));
        const n = cartaoH(c, { icone: "caneta", titulo: "Não repúdio", ti: 100, texto: "Ou irretratabilidade: o autor <b>não pode negar</b> uma ação, como assinar um documento.<br><span style=\"color:var(--cor);font-weight:700;font-size:23px\">assinatura digital</span>" }, { left: 860, top: 330, width: 680, height: 290 }, c.t(1));
        [a, n].forEach((e) => c.sai(e, c.t(2) - 0.4));
        const dica = c.quadro("dica", "<b>CIDA</b>: Confidencialidade, Integridade, Disponibilidade e Autenticidade — mais o <b>não repúdio</b>.", { left: 140, top: 330, width: 1400 }, c.t(2));
        c.sai(dica, c.t(3) - 0.4);
        const nomes = ["Confidencialidade", "Integridade", "Disponibilidade", "Autenticidade"];
        const tiles = nomes.map((nome, i) => {
          const x = 140 + i * 250;
          const e = c.novo(`<div class="abs" style="left:${x - 45}px;top:620px;width:230px;text-align:center">
            <div style="width:140px;height:140px;margin:0 auto;border-radius:28px;display:grid;place-items:center;font:700 84px var(--serif);color:#fff;background:${i === 3 ? AZUL : "var(--cor)"};box-shadow:var(--sombra)">${nome[0]}</div>
            <div style="font:600 23px var(--sans);margin-top:12px">${nome}</div></div>`);
          return c.entra(e, c.t(2, 2.4 + i * 1.0), "pop");
        });
        const mais = pilula(c, "+ não repúdio", { left: 1120, top: 665, fontSize: "34px", padding: "16px 34px" }, c.t(2, 6.6), AZUL);
        c.quadro("prova", "A tríade clássica é só <b>C, I e D</b>. Autenticidade e não repúdio são <b>complementares</b>.", { left: 140, top: 330, width: 1400 }, c.t(3));
        c.tl.to([tiles[3], mais], { opacity: 0.25, duration: 0.5 }, c.t(3, 2.5));
        const chave = c.novo(`<div class="abs" style="left:150px;top:850px;width:620px;height:22px;border:6px solid var(--cor);border-top:none;border-radius:0 0 16px 16px"></div>`);
        c.entra(chave, c.t(3, 2.8), "fade");
        c.entra(c.novo(`<div class="abs rotulo" style="left:300px;top:890px">tríade clássica</div>`), c.t(3, 3.0), "fade");
      },
    },

    // ---------------------------------------------------- Riscos e normas
    {
      id: "riscos",
      visual: "Quatro cartões entram um por frase: Vulnerabilidade (porta entreaberta), Ameaça (máscara), Risco (alerta) e Incidente (raio), com definição e exemplos. Na última frase, a analogia da casa aparece em pílulas na base de cada cartão: janela aberta, ladrão, chance de furto e prejuízo, furto.",
      secao: "Riscos e normas",
      bit: BIT_CANTO,
      falas: [
        "Vulnerabilidade é uma fraqueza que pode ser explorada, como um sistema desatualizado ou uma senha fraca.",
        "Ameaça é o agente ou evento que pode explorar essa vulnerabilidade: um invasor, um malware, ou até um incêndio.",
        "Risco é a probabilidade de uma ameaça explorar uma vulnerabilidade, e o impacto que isso causaria.",
        "E incidente é o evento que efetivamente compromete a segurança.",
        "Numa casa: a janela aberta é a vulnerabilidade; o ladrão, a ameaça; a chance de furto e o prejuízo, o risco; e o furto, o incidente.",
      ],
      montar(c) {
        c.titulo("Conceitos básicos", "Ameaça, vulnerabilidade e risco", { left: 140, top: 150 }, c.t(0), { medio: true });
        const cartoes = [
          ["porta", "Vulnerabilidade", "<b>Fraqueza</b> que pode ser explorada.", "sistema desatualizado, senha fraca", "janela aberta"],
          ["mascara", "Ameaça", "<b>Agente ou evento</b> que pode explorar a vulnerabilidade.", "invasor, malware, incêndio", "ladrão"],
          ["alerta", "Risco", "<b>Probabilidade</b> de a ameaça explorar a vulnerabilidade + <b>impacto</b>.", "", "chance + prejuízo"],
          ["raio", "Incidente", "Evento que <b>efetivamente compromete</b> a segurança.", "", "furto"],
        ];
        cartoes.forEach((k, i) => {
          const e = c.novo(`<div class="cartao" style="left:${140 + i * 415}px;top:310px;width:385px;height:440px;padding:28px 30px">
            ${icone(k[0])}<h3 style="font-size:34px">${k[1]}</h3><p style="font-size:25px;line-height:1.32">${k[2]}</p>
            ${k[3] ? `<p style="font-size:22px;line-height:1.3;margin-top:8px;color:var(--cor);font-weight:700">ex.: ${k[3]}</p>` : ""}
            <div class="pilula anal" style="position:absolute;left:30px;bottom:24px;font-size:24px;background:var(--fundo);color:var(--texto)">casa: ${k[4]}</div></div>`);
          e.querySelector(".icone").style.cssText = "width:68px;height:68px;margin-bottom:10px";
          c.entra(e, c.t(i, i === 0 ? 0.4 : 0), "baixo");
          c.entra(e.querySelector(".anal"), c.t(4, [1.6, 3.4, 5.2, 7.2][i]), "pop");
        });
      },
    },
    {
      id: "politicas",
      visual: "À esquerda, cartões Segurança física (porta) e Segurança lógica (escudo). À direita, cartão PSI (documento) aprovado pela direção. Embaixo, dois cartões das normas: ABNT NBR ISO/IEC 27001 (SGSI, certificação) e 27002 (boas práticas).",
      secao: "Riscos e normas",
      bit: BIT_CANTO,
      falas: [
        "A segurança física protege instalações e equipamentos: controle de acesso a salas, câmeras, nobreak e proteção contra incêndio.",
        "A segurança lógica protege sistemas e dados: senhas, permissões, criptografia, firewall e antivírus.",
        "A Política de Segurança da Informação, a PSI, é um documento aprovado pela direção que define regras, responsabilidades e penalidades no uso da informação.",
        "A ISO 27001 define os requisitos do Sistema de Gestão de Segurança da Informação, o SGSI, e a organização pode ser certificada por ela.",
        "Já a ISO 27002 é um código de boas práticas para implementar os controles de segurança.",
      ],
      montar(c) {
        c.titulo("Políticas e normas", "Física, lógica, PSI e normas ISO", { left: 140, top: 150 }, c.t(0), { medio: true });
        cartaoH(c, { icone: "porta", titulo: "Segurança física", texto: "instalações e equipamentos: salas, câmeras, nobreak, incêndio", ti: 76 }, { left: 140, top: 320, width: 700, height: 170 }, c.t(0, 0.6));
        cartaoH(c, { icone: "escudo", titulo: "Segurança lógica", texto: "sistemas e dados: senhas, permissões, criptografia, firewall, antivírus", ti: 76 }, { left: 140, top: 510, width: 700, height: 170 }, c.t(1));
        cartaoV(c, { icone: "documento", titulo: "PSI", texto: "Política de Segurança da Informação: aprovada pela <b>direção</b>; define <b>regras</b>, <b>responsabilidades</b> e <b>penalidades</b>.", tp: 28 }, { left: 880, top: 320, width: 660, height: 360 }, c.t(2));
        cartaoH(c, { rotulo: "ABNT NBR ISO/IEC", titulo: "27001", th: 48, texto: "requisitos do <b>SGSI</b> · permite <b>certificação</b>", cor: AZUL, antes: `<div style="font:800 56px var(--serif);color:var(--cor)">§</div>` }, { left: 140, top: 720, width: 680, height: 190 }, c.t(3));
        cartaoH(c, { rotulo: "ABNT NBR ISO/IEC", titulo: "27002", th: 48, texto: "código de <b>boas práticas</b> para os controles", cor: AZUL, antes: `<div style="font:800 56px var(--serif);color:var(--cor)">§</div>` }, { left: 860, top: 720, width: 680, height: 190 }, c.t(4));
      },
    },
    {
      id: "lai",
      visual: "Rótulo “Lei nº 12.527/2011”. Dois cartões: Regra = publicidade (globo, verde) e Exceção = sigilo (cadeado). Em seguida, gráfico de barras dos prazos máximos: Ultrassecreta 25 anos, Secreta 15, Reservada 5 — cada barra cresce e o número conta na frase correspondente.",
      secao: "Riscos e normas",
      bit: BIT_CANTO,
      falas: [
        "Nos órgãos públicos, vale a Lei de Acesso à Informação, a LAI: Lei doze mil, quinhentos e vinte e sete, de dois mil e onze.",
        "Nela, a regra é a publicidade das informações públicas. O sigilo é a exceção.",
        "As informações classificadas têm prazos máximos de restrição. Ultrassecreta: até vinte e cinco anos.",
        "Secreta: até quinze anos. E reservada: até cinco anos.",
      ],
      montar(c) {
        c.titulo("Lei nº 12.527/2011", "Lei de Acesso à Informação (LAI)", { left: 140, top: 150 }, c.t(0), { medio: true });
        cartaoH(c, { icone: "publico", rotulo: "Regra", titulo: "Publicidade", ti: 76, cor: VERDE }, { left: 140, top: 320, width: 680, height: 150 }, c.t(1, 1));
        cartaoH(c, { icone: "cadeado", rotulo: "Exceção", titulo: "Sigilo", ti: 76 }, { left: 860, top: 320, width: 680, height: 150 }, c.t(1, 4));
        c.entra(c.novo(`<div class="abs rotulo" style="left:140px;top:530px">Prazo máximo de restrição</div>`), c.t(2), "fade");
        const tempos = [c.t(2, 4.2), c.t(3), c.t(3, 2.6)];
        [["Ultrassecreta", 25], ["Secreta", 15], ["Reservada", 5]].forEach(([g, anos], i) => {
          const y = 590 + i * 110;
          c.entra(c.novo(`<div class="abs" style="left:140px;top:${y + 12}px;font:700 38px var(--sans)">${g}</div>`), tempos[i], "esquerda");
          const barra = c.novo(`<div class="abs" style="left:460px;top:${y}px;width:${anos * 40}px;height:76px;border-radius:14px;background:var(--cor);opacity:${1 - i * 0.22};transform-origin:0 50%"></div>`);
          c.tl.fromTo(barra, { scaleX: 0, autoAlpha: 0 }, { scaleX: 1, autoAlpha: 1, duration: 1.0, ease: "power3.out", immediateRender: true }, tempos[i] + 0.2);
          const num = c.novo(`<div class="abs" style="left:${484 + anos * 40}px;top:${y + 6}px;font:800 52px var(--sans);color:var(--cor)"><span class="v">0</span> <span style="font-size:32px;color:var(--texto-suave)">anos</span></div>`);
          c.entra(num, tempos[i] + 0.2, "fade");
          c.contar(num.querySelector(".v"), 0, anos, tempos[i] + 0.2, 1.0);
        });
      },
    },

    // ------------------------------------------------------------- Malware
    {
      id: "malware",
      visual: "Ícone de vírus e a definição de malware (malicious software). Três cartões entram um por frase: Vírus (depende da execução), Worm (rede de computadores; propaga-se sozinho) e Cavalo de Troia (presente; disfarça-se de programa legítimo).",
      secao: "Malware",
      bit: BIT_CANTO,
      falas: [
        "Um dos assuntos favoritos das bancas: malware, de malicious software. É qualquer programa criado para causar danos, roubar dados ou obter controle indevido de um sistema.",
        "O vírus se anexa a arquivos ou programas, e depende da execução do arquivo infectado para agir e se propagar.",
        "O worm se propaga sozinho pela rede, explorando falhas, sem infectar arquivos nem depender do usuário. Ele consome recursos e congestiona a rede.",
        "O cavalo de Troia, ou trojan, se disfarça de programa legítimo, como um jogo, um cartão virtual ou uma atualização, e executa ações maliciosas escondidas.",
      ],
      montar(c) {
        c.titulo("Programas maliciosos", "Malware", { left: 140, top: 150 }, c.t(0), { medio: true });
        const ic = c.novo(`<div class="abs" style="left:140px;top:300px;width:130px;height:130px">${icone("virus")}</div>`);
        ic.querySelector(".icone").style.cssText = "width:130px;height:130px";
        c.entra(ic, c.t(0, 0.4), "pop");
        c.texto("<b>Malware</b> (<i>malicious software</i>): programa criado para <b>causar danos</b>, <b>roubar dados</b> ou <b>obter controle indevido</b> de um sistema.", { left: 310, top: 305, width: 1230 }, c.t(0, 1));
        const tipos = [
          { icone: "virus", titulo: "Vírus", texto: "Anexa-se a arquivos ou programas. Depende da <b>execução</b> do arquivo infectado para agir e se propagar." },
          { icone: "rede", titulo: "Worm", texto: "Propaga-se <b>sozinho</b> pela rede, explorando falhas, sem infectar arquivos nem depender do usuário. Congestiona a rede." },
          { icone: "presente", titulo: "Cavalo de Troia", texto: "Trojan: <b>disfarça-se</b> de programa legítimo (jogo, cartão virtual, “atualização”) e age escondido." },
        ];
        tipos.forEach((k, i) => cartaoV(c, { ...k, ti: 76 }, { left: 140 + i * 480, top: 480, width: 440, height: 410 }, c.t(i + 1)));
      },
    },
    {
      id: "malware-2",
      visual: "No alto, cartões Ransomware (documento trancado) e Adware (megafone). Embaixo, Spyware (olho) com uma seta para os seus dois tipos: Keylogger (teclado) e Screenlogger (monitor).",
      secao: "Malware",
      bit: BIT_CANTO,
      falas: [
        "O ransomware criptografa os arquivos, ou bloqueia o sistema, e exige um resgate, normalmente em criptomoeda.",
        "O spyware espiona e coleta informações do usuário sem o seu consentimento.",
        "Dois spywares famosos: o keylogger, que registra as teclas digitadas, como senhas; e o screenlogger, que captura imagens da tela e a posição dos cliques.",
        "E o adware exibe propagandas indesejadas.",
      ],
      montar(c) {
        c.titulo("Malware", "Resgate, espionagem e propaganda", { left: 140, top: 150 }, c.t(0), { medio: true });
        cartaoH(c, { icone: "resgate", titulo: "Ransomware", texto: "Criptografa os arquivos (ou bloqueia o sistema) e exige <b>resgate</b>, normalmente em <b>criptomoeda</b>.", ti: 96 }, { left: 140, top: 320, width: 680, height: 240 }, c.t(0, 0.6));
        cartaoH(c, { icone: "megafone", titulo: "Adware", texto: "Exibe <b>propagandas</b> indesejadas.", ti: 96 }, { left: 860, top: 320, width: 680, height: 240 }, c.t(3));
        cartaoV(c, { icone: "olho", titulo: "Spyware", texto: "<b>Espiona</b> e coleta informações sem consentimento.", ti: 70, pad: 28 }, { left: 140, top: 610, width: 440, height: 280 }, c.t(1));
        c.seta(590, 750, 650, 750, c.t(2, 0.2));
        c.entra(c.novo(`<div class="abs rotulo" style="left:660px;top:600px">Tipos de spyware</div>`), c.t(2), "fade");
        cartaoV(c, { icone: "teclado", titulo: "Keylogger", texto: "registra as <b>teclas digitadas</b>, como senhas", ti: 64, pad: 26, th: 32 }, { left: 660, top: 650, width: 420, height: 240 }, c.t(2, 1.4));
        cartaoV(c, { icone: "monitor", titulo: "Screenlogger", texto: "captura <b>imagens da tela</b> e a posição dos cliques", ti: 64, pad: 26, th: 32 }, { left: 1110, top: 650, width: 430, height: 240 }, c.t(2, 5.2));
      },
    },
    {
      id: "malware-3",
      visual: "Três cartões: Backdoor (porta), Rootkit (olho riscado) e Bot e botnet (rede de computadores zumbis). Depois, quadro âmbar com a diferença vírus × worm, e a frase do cavalo de Troia surge em seguida; embaixo, três selos resumem: vírus, worm e cavalo de Troia.",
      secao: "Malware",
      bit: BIT_CANTO,
      falas: [
        "O backdoor abre uma porta dos fundos, para o invasor voltar a acessar o sistema.",
        "O rootkit é um conjunto de técnicas para esconder a presença do invasor e de outros malwares no sistema.",
        "O bot permite controlar o computador remotamente. A botnet é uma rede de computadores infectados, os zumbis, usada, por exemplo, em DDoS.",
        "Agora, a diferença mais cobrada: o vírus precisa de um hospedeiro e da execução do arquivo; o worm se replica sozinho pela rede. E o cavalo de Troia, em geral, não se replica.",
      ],
      montar(c) {
        c.titulo("Malware", "Portas, disfarces e zumbis", { left: 140, top: 150 }, c.t(0), { medio: true });
        const tipos = [
          { icone: "porta", titulo: "Backdoor", texto: "Abre uma <b>porta dos fundos</b> para o invasor voltar a acessar o sistema." },
          { icone: "oculto", titulo: "Rootkit", texto: "Técnicas para <b>esconder</b> a presença do invasor e de outros malwares." },
          { icone: "rede", titulo: "Bot e botnet", texto: "Bot: <b>controle remoto</b>. Botnet: rede de computadores infectados (“zumbis”), usada em DDoS." },
        ];
        const cs = tipos.map((k, i) => cartaoV(c, { ...k, ti: 76 }, { left: 140 + i * 480, top: 320, width: 440, height: 400 }, c.t(i, i === 0 ? 0.6 : 0)));
        cs.forEach((e) => c.sai(e, c.t(3) - 0.4));
        const q = c.quadro("prova", "O <b>vírus</b> precisa de um hospedeiro e da execução do arquivo. O <b>worm</b> se replica sozinho pela rede.<span class=\"q2\" style=\"display:block;margin-top:10px\">E o cavalo de Troia, em geral, <b>não</b> se replica.</span>", { left: 140, top: 320, width: 1400 }, c.t(3));
        c.entra(q.querySelector(".q2"), c.t(3, 7.8), "baixo");
        c.bit.apontar(c.t(3, 0.4), "esquerda");
        [["virus", "Vírus", "hospedeiro + execução", c.t(3, 2.5)], ["rede", "Worm", "sozinho pela rede", c.t(3, 6)], ["presente", "Cavalo de Troia", "em geral, não se replica", c.t(3, 8.6)]].forEach((k, i) => {
          cartaoH(c, { icone: k[0], titulo: k[1], texto: k[2], ti: 64, th: 30, tp: 24 }, { left: 140 + i * 480, top: 680, width: 440, height: 150 }, k[3], "pop");
        });
      },
    },

    // ---------------------------------------------------- Golpes e ataques
    {
      id: "golpes",
      visual: "Cartão Engenharia social (pessoas) à esquerda. Ao lado, cartão Phishing (anzol) com uma mensagem falsa de exemplo (“Sua conta será bloqueada hoje!”). Embaixo, três selos: Spear phishing (alvo), Smishing (celular, SMS) e Vishing (balão, voz).",
      secao: "Golpes e ataques",
      bit: BIT_CANTO,
      falas: [
        "Agora, os golpes. A engenharia social manipula as pessoas, explorando confiança, medo ou urgência, para obter informações ou acessos.",
        "O phishing é uma mensagem falsa, por e-mail, SMS ou rede social, que imita uma instituição para roubar dados ou induzir o clique.",
        "O spear phishing é direcionado a uma pessoa ou empresa específica, com informações personalizadas.",
        "Smishing e vishing são o phishing por SMS e por ligação telefônica.",
      ],
      montar(c) {
        c.titulo("Golpes", "Engenharia social e phishing", { left: 140, top: 150 }, c.t(0), { medio: true });
        cartaoV(c, { icone: "pessoas", titulo: "Engenharia social", texto: "<b>Manipula pessoas</b> para obter informações ou acessos.", ti: 90, tp: 28,
          extra: `<div style="display:flex;flex-direction:column;gap:12px;margin-top:24px;align-items:flex-start">${["confiança", "medo", "urgência"].map((p) => `<span class="pilula" style="font-size:26px">${p}</span>`).join("")}</div>` },
          { left: 140, top: 320, width: 520, height: 570 }, c.t(0, 1));
        cartaoH(c, { icone: "anzol", titulo: "Phishing", texto: "Mensagem falsa (e-mail, SMS, rede social) que <b>imita uma instituição</b> para roubar dados ou induzir o clique.", ti: 96 }, { left: 700, top: 320, width: 840, height: 200 }, c.t(1));
        const msg = c.novo(`<div class="abs" style="left:700px;top:540px;width:840px;background:#fff;border-radius:18px;border-left:10px solid var(--errado);box-shadow:var(--sombra);padding:18px 28px">
          <div style="font:600 22px var(--sans);color:var(--texto-fraco)">De: “Seu Banco” · exemplo de mensagem falsa</div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px">
          <div style="font:800 32px var(--sans)">Sua conta será bloqueada hoje!</div>
          <span class="pilula" style="font-size:24px;background:var(--errado);color:#fff">Clique aqui</span></div></div>`);
        c.entra(msg, c.t(1, 4.5), "baixo");
        cartaoV(c, { icone: "alvo", titulo: "Spear phishing", texto: "alvo <b>específico</b>, personalizado", ti: 56, th: 28, tp: 22, pad: 24 }, { left: 700, top: 700, width: 270, height: 190 }, c.t(2), "pop");
        cartaoV(c, { icone: "celular", titulo: "Smishing", texto: "por <b>SMS</b>", ti: 56, th: 28, tp: 22, pad: 24 }, { left: 985, top: 700, width: 270, height: 190 }, c.t(3, 0.8), "pop");
        cartaoV(c, { icone: "balao", titulo: "Vishing", texto: "por <b>ligação</b> (voz)", ti: 56, th: 28, tp: 22, pad: 24 }, { left: 1270, top: 700, width: 270, height: 190 }, c.t(3, 2.2), "pop");
      },
    },
    {
      id: "ataques",
      visual: "Cinco cartões: Pharming (endereço certo → DNS alterado → site falso), DoS e DDoS (muitas máquinas → serviço fora do ar), Força bruta (chave e combinações), Man-in-the-middle (pessoa – atacante – pessoa) e Spoofing (máscara). Depois, quadro âmbar com três pegadinhas que entram uma por frase, e a tríade C-I-D com o D aceso.",
      secao: "Golpes e ataques",
      bit: BIT_CANTO,
      falas: [
        "O pharming altera a resolução de nomes, o DNS, para levar o usuário a um site falso, mesmo quando ele digita o endereço correto.",
        "O DoS e o DDoS sobrecarregam um serviço com requisições para torná-lo indisponível; no DDoS, o ataque vem de muitas máquinas ao mesmo tempo.",
        "A força bruta testa inúmeras combinações de senha até acertar.",
        "No man-in-the-middle, o atacante se coloca entre duas partes, para interceptar ou alterar a comunicação.",
        "E o spoofing falsifica a origem, como o remetente de um e-mail ou um endereço IP.",
        "Atenção: phishing não é malware; é um golpe de engenharia social.",
        "O pharming é mais perigoso, porque o usuário cai no site falso mesmo digitando o endereço certo. E o DDoS ataca a disponibilidade.",
      ],
      montar(c) {
        c.titulo("Ataques", "Pharming, DDoS e companhia", { left: 140, top: 150 }, c.t(0), { medio: true });
        const fluxo = (itens) => `<div style="display:flex;align-items:center;gap:10px;margin-top:18px">${itens.join(`<span style="font:800 28px var(--sans);color:var(--texto-fraco)">→</span>`)}</div>`;
        const p = (t, cor) => `<span class="pilula" style="font-size:22px;padding:8px 18px${cor ? `;background:color-mix(in srgb, ${cor} 12%, white);color:${cor}` : ""}">${t}</span>`;
        const ph = c.novo(`<div class="cartao" style="left:140px;top:300px;width:680px;height:280px;padding:26px 30px">
          <div style="display:flex;gap:22px;align-items:center">${icone("publico")}<div><h3 style="margin:0;font-size:34px">Pharming</h3><p style="font-size:24px">altera o <b>DNS</b> e leva a um site falso</p></div></div>
          ${fluxo([p("endereço certo", VERDE), p("DNS alterado"), p("site falso", VERMELHO)])}</div>`);
        const dd = c.novo(`<div class="cartao" style="left:860px;top:300px;width:680px;height:280px;padding:26px 30px">
          <div style="display:flex;gap:22px;align-items:center">${icone("servidor")}<div><h3 style="margin:0;font-size:34px">DoS e DDoS</h3><p style="font-size:24px">sobrecarregam o serviço · DDoS: <b>muitas máquinas</b></p></div></div>
          <div style="display:flex;align-items:center;gap:10px;margin-top:18px">${Array.from({ length: 5 }, () => `<span style="width:46px;height:46px;display:inline-block">${icone("notebook")}</span>`).join("")}
          <span style="font:800 28px var(--sans);color:var(--texto-fraco)">→</span>${p("serviço indisponível", VERMELHO)}</div></div>`);
        [ph, dd].forEach((e) => e.querySelectorAll(".icone").forEach((i, j) => { i.style.cssText = j === 0 ? "margin:0;width:72px;height:72px;flex-shrink:0" : "margin:0;width:46px;height:46px"; }));
        c.entra(ph, c.t(0, 0.4), "baixo");
        c.entra(dd, c.t(1), "baixo");
        const fb = cartaoV(c, { icone: "chave", titulo: "Força bruta", texto: "testa <b>inúmeras combinações</b> de senha até acertar", ti: 64, th: 32, tp: 24, pad: 26 }, { left: 140, top: 610, width: 440, height: 260 }, c.t(2));
        const mitm = c.novo(`<div class="cartao" style="left:620px;top:610px;width:440px;height:260px;padding:26px">
          <div style="display:flex;align-items:center;gap:8px"><span class="ic">${icone("pessoa")}</span><span style="color:var(--texto-fraco);font-weight:800">—</span><span class="ic">${icone("mascara")}</span><span style="color:var(--texto-fraco);font-weight:800">—</span><span class="ic">${icone("pessoa")}</span></div>
          <h3 style="font-size:32px;margin-top:12px">Man-in-the-middle</h3><p style="font-size:24px">atacante <b>no meio</b>: intercepta ou altera</p></div>`);
        mitm.querySelectorAll(".icone").forEach((i) => { i.style.cssText = "margin:0;width:60px;height:60px"; });
        c.entra(mitm, c.t(3), "baixo");
        const sp = cartaoV(c, { icone: "mascara", titulo: "Spoofing", texto: "<b>falsifica a origem</b>: remetente de e-mail, endereço IP", ti: 64, th: 32, tp: 24, pad: 26 }, { left: 1100, top: 610, width: 440, height: 260 }, c.t(4));
        [ph, dd, fb, mitm, sp].forEach((e) => c.sai(e, c.t(5) - 0.4));
        const q = c.quadro("prova", `<span class="l1" style="display:block">Phishing <b>não é malware</b>: é golpe de engenharia social.</span>
          <span class="l2" style="display:block;margin-top:10px"><b>Pharming</b> é mais perigoso: site falso mesmo digitando o endereço certo.</span>
          <span class="l3" style="display:block;margin-top:10px"><b>DDoS</b> ataca a <b>disponibilidade</b>.</span>`, { left: 140, top: 320, width: 1400 }, c.t(5));
        c.entra(q.querySelector(".l2"), c.t(6), "baixo");
        c.entra(q.querySelector(".l3"), c.t(6, 6.6), "baixo");
        c.bit.apontar(c.t(5, 0.4), "esquerda");
        ["C", "I", "D"].forEach((l, i) => {
          const e = c.novo(`<div class="abs" style="left:${140 + i * 150}px;top:740px;width:120px;height:120px;border-radius:24px;display:grid;place-items:center;font:700 64px var(--serif);background:${i === 2 ? "var(--cor)" : "#fff"};color:${i === 2 ? "#fff" : "var(--texto-fraco)"};box-shadow:var(--sombra)">${l}</div>`);
          c.entra(e, c.t(6, 7.2 + i * 0.25), "pop");
        });
        c.entra(c.novo(`<div class="abs texto" style="left:610px;top:772px">DDoS → <b>disponibilidade</b></div>`), c.t(6, 8), "esquerda");
      },
    },
    {
      id: "outros-ataques",
      visual: "Grade com oito cartões, cada um entrando na frase que o cita: Zero-day (calendário com 0), Sniffing (lupa), SQL injection (banco de dados), XSS (código), Defacement (janela de site), Hoax (balão), Cryptojacking (moeda) e Golpe do falso suporte (atendente com fone).",
      secao: "Golpes e ataques",
      bit: BIT_CANTO,
      falas: [
        "O zero-day, ou dia zero, explora uma falha ainda desconhecida pelo fabricante, para a qual não existe correção.",
        "O sniffing captura e analisa o tráfego da rede para obter dados, como senhas enviadas sem criptografia.",
        "O SQL injection insere comandos de banco de dados em campos de formulário. E o cross-site scripting, o XSS, injeta scripts maliciosos em páginas vistas por outros usuários.",
        "O defacement altera a página inicial de um site, pichando o seu conteúdo. E o hoax é um boato espalhado em massa, como as correntes.",
        "O cryptojacking usa o computador da vítima, sem permissão, para minerar criptomoedas.",
        "No golpe do falso suporte, o criminoso se passa por técnico ou atendente e convence a vítima a instalar um programa de acesso remoto ou a informar códigos.",
      ],
      montar(c) {
        c.titulo("Outros ataques", "Mais oito nomes para reconhecer", { left: 140, top: 150 }, c.t(0), { medio: true });
        const itens = [
          ["calendario", "Zero-day", "falha <b>desconhecida</b> pelo fabricante, sem correção", c.t(0, 0.4)],
          ["lupa", "Sniffing", "captura o <b>tráfego da rede</b>, como senhas sem criptografia", c.t(1)],
          ["dados", "SQL injection", "comandos de banco de dados em <b>campos de formulário</b>", c.t(2)],
          ["codigo", "XSS", "cross-site scripting: <b>scripts maliciosos</b> em páginas vistas por outros", c.t(2, 6.2)],
          ["janela", "Defacement", "altera a página inicial: <b>“picha”</b> o site", c.t(3)],
          ["balao", "Hoax", "<b>boato</b> espalhado em massa, como correntes", c.t(3, 5.2)],
          ["moeda", "Cryptojacking", "usa o computador da vítima para <b>minerar criptomoedas</b>", c.t(4)],
          ["suporte", "Falso suporte", "falso técnico pede <b>acesso remoto</b> ou códigos", c.t(5)],
        ];
        itens.forEach((k, i) => {
          const col = i % 4, lin = Math.floor(i / 4);
          const e = c.novo(`<div class="cartao" style="left:${140 + col * 352}px;top:${300 + lin * 300}px;width:330px;height:280px;padding:26px">
            <div style="display:flex;align-items:center;gap:16px">${icone(k[0])}<h3 style="margin:0;font-size:29px">${k[1]}</h3></div>
            <p style="margin-top:16px;font-size:24px">${k[2]}</p></div>`);
          e.querySelector(".icone").style.cssText = "margin:0;width:62px;height:62px;flex-shrink:0";
          c.entra(e, k[3], "pop");
        });
      },
    },

    // -------------------------------------------------------- Criptografia
    {
      id: "criptografia",
      visual: "A palavra CONCURSO (legível) passa por um cadeado com chave e vira um código embaralhado (ilegível). Faixa: criptografia protege a confidencialidade. Depois, dois cartões comparam Simétrica (uma chave) e Assimétrica (chave pública verde + chave privada rosa), com chaves, velocidade, desafio e exemplos surgindo linha a linha.",
      secao: "Criptografia",
      bit: BIT_CANTO,
      falas: [
        "A criptografia transforma a informação legível em um código ilegível, que só pode ser revertido por quem tem a chave correta.",
        "Por isso, a criptografia protege principalmente a confidencialidade.",
        "Na criptografia simétrica, uma única chave secreta cifra e decifra. Ela é mais rápida, e o desafio é compartilhar a chave com segurança. Exemplos: AES e 3DES.",
        "Na assimétrica, há um par de chaves: uma pública, que pode ser divulgada, e uma privada, secreta. Ela é mais lenta, e o desafio é proteger a chave privada. Exemplos: RSA e ECC.",
      ],
      montar(c) {
        c.titulo("Criptografia", "Do legível ao ilegível", { left: 140, top: 150 }, c.t(0), { medio: true });
        const ent = c.novo(`<div class="cartao" style="left:140px;top:380px;width:460px;height:190px"><div class="rotulo" style="color:var(--certo)">Legível</div>
          <div class="mono" style="font-size:60px;font-weight:700;margin-top:14px">CONCURSO</div></div>`);
        c.entra(ent, c.t(0, 2.5), "esquerda");
        const meio = c.no({ icone: "cadeado", titulo: "chave" }, { left: 730, top: 365, width: 220, height: 220 }, c.t(0, 4));
        const sai = c.novo(`<div class="cartao" style="left:1080px;top:380px;width:460px;height:190px"><div class="rotulo">Ilegível</div>
          <div class="mono emb" style="font-size:60px;font-weight:700;margin-top:14px;color:var(--cor)">CONCURSO</div></div>`);
        c.entra(sai, c.t(0, 5), "direita");
        const s1 = c.seta(610, 475, 720, 475, c.t(0, 4.3));
        const s2 = c.seta(960, 475, 1070, 475, c.t(0, 5.2));
        const emb = sai.querySelector(".emb");
        const alvo = "X7#QL!9P", orig = "CONCURSO", est = { p: 0 };
        c.tl.to(est, { p: 1, duration: 1.4, ease: "none", onUpdate: () => { const n = Math.floor(est.p * 8); emb.textContent = alvo.slice(0, n) + orig.slice(n); } }, c.t(0, 5.6));
        const fx = chave7(c, "Criptografia protege a <em>confidencialidade</em>", c.t(1), c.t(2) - 0.4);
        [ent, meio, sai, s1, s2].forEach((e) => c.sai(e, c.t(2) - 0.4));
        const pub = chaveSVG(VERDE, 70), priv = chaveSVG("var(--cor)", 70);
        const linha = (r, v) => `<div class="ln" style="margin-top:22px"><div class="rotulo" style="font-size:20px;color:var(--texto-fraco)">${r}</div><div style="font-size:30px;margin-top:4px;color:var(--texto)">${v}</div></div>`;
        const sim = c.novo(`<div class="cartao" style="left:140px;top:320px;width:680px;height:570px;padding:34px 40px">
          <div style="display:flex;align-items:center;gap:18px">${priv}<h3 style="margin:0;font-size:44px">Simétrica</h3></div>
          ${linha("Chave", "<b>uma única</b> chave secreta: cifra e decifra")}${linha("Velocidade", "<b>mais rápida</b>")}${linha("Desafio", "<b>compartilhar</b> a chave com segurança")}${linha("Exemplos", "<b>AES</b>, <b>3DES</b>")}</div>`);
        const ass = c.novo(`<div class="cartao" style="left:860px;top:320px;width:680px;height:570px;padding:34px 40px">
          <div style="display:flex;align-items:center;gap:18px">${pub}${priv}<h3 style="margin:0;font-size:44px">Assimétrica</h3></div>
          ${linha("Chaves", "par: <b style=\"color:var(--certo)\">pública</b> (divulgada) e <b style=\"color:var(--cor)\">privada</b> (secreta)")}${linha("Velocidade", "<b>mais lenta</b>")}${linha("Desafio", "<b>proteger</b> a chave privada")}${linha("Exemplos", "<b>RSA</b>, <b>ECC</b>")}</div>`);
        c.entra(sim, c.t(2, 0.4), "baixo");
        c.entra(ass, c.t(3), "baixo");
        const ls = sim.querySelectorAll(".ln"), la = ass.querySelectorAll(".ln");
        [c.t(2, 1.6), c.t(2, 4.6), c.t(2, 6.4), c.t(2, 9.4)].forEach((t, i) => c.entra(ls[i], t, "esquerda"));
        [c.t(3, 1.6), c.t(3, 6.4), c.t(3, 8), c.t(3, 10.6)].forEach((t, i) => c.entra(la[i], t, "esquerda"));
        void fx;
      },
    },
    {
      id: "chaves",
      visual: "Dois fluxos. Sigilo: Remetente → mensagem cifrada → Destinatário, com as chaves “pública do destinatário” (cifra, verde) e “privada do destinatário” (decifra, rosa). Assinatura: Remetente → documento assinado → Qualquer pessoa, com “privada do remetente” (assina) e “pública do remetente” (confere). No fim, quadro verde “Memorize”.",
      secao: "Criptografia",
      bit: BIT_CANTO,
      falas: [
        "Para enviar uma mensagem sigilosa, o remetente cifra com a chave pública do destinatário; só a chave privada dele, que só ele tem, consegue decifrar.",
        "Para assinar digitalmente, o remetente usa a sua própria chave privada. E qualquer pessoa confere a assinatura com a chave pública do remetente.",
        "Memorize: sigilo, chave pública do destinatário. Assinatura, chave privada do remetente.",
      ],
      montar(c) {
        c.titulo("Criptografia assimétrica", "Qual chave usar?", { left: 140, top: 150 }, c.t(0), { medio: true });
        const grupo = [];
        const fluxo = (y, rotulo, nos, chaves, tempos) => {
          const r = c.novo(`<div class="abs rotulo" style="left:140px;top:${y}px">${rotulo}</div>`);
          c.entra(r, tempos[0], "fade");
          grupo.push(r);
          const xs = [140, 650, 1180], ws = [300, 340, 360];
          nos.forEach((n, i) => {
            const e = c.novo(`<div class="no" style="left:${xs[i]}px;top:${y + 44}px;width:${ws[i]}px;height:150px;flex-direction:row;gap:18px;padding:20px">${icone(n[0])}<strong style="font-size:28px;text-align:left">${n[1]}</strong></div>`);
            e.querySelector(".icone").style.cssText = "margin:0;width:70px;height:70px;flex-shrink:0";
            c.entra(e, tempos[i], "pop");
            grupo.push(e);
          });
          grupo.push(c.seta(450, y + 119, 640, y + 119, tempos[1] - 0.3));
          grupo.push(c.seta(1000, y + 119, 1170, y + 119, tempos[2] - 0.3));
          chaves.forEach((k, i) => {
            const e = c.novo(`<div class="abs pilula" style="left:${[330, 960][i]}px;top:${y + 208}px;display:flex;align-items:center;gap:12px;font-size:25px;background:color-mix(in srgb, ${k[0]} 12%, white);color:${k[0]}">${chaveSVG(k[0], 38)}<span>${k[1]}</span></div>`);
            c.entra(e, tempos[i + 1] + 0.4, "pop");
            grupo.push(e);
          });
        };
        fluxo(300, "Sigilo", [["pessoa", "Remetente"], ["envelope", "Mensagem cifrada"], ["pessoa", "Destinatário"]],
          [[VERDE, "cifra: <b>pública do destinatário</b>"], ["var(--cor)", "decifra: <b>privada do destinatário</b>"]],
          [c.t(0, 0.4), c.t(0, 2.4), c.t(0, 6.4)]);
        fluxo(590, "Assinatura", [["pessoa", "Remetente"], ["caneta", "Documento assinado"], ["pessoas", "Qualquer pessoa"]],
          [["var(--cor)", "assina: <b>privada do remetente</b>"], [VERDE, "confere: <b>pública do remetente</b>"]],
          [c.t(1), c.t(1, 1.8), c.t(1, 5.2)]);
        grupo.forEach((e) => c.sai(e, c.t(2) - 0.4));
        c.quadro("dica", `<span style="display:flex;align-items:center;gap:18px">${chaveSVG(VERDE, 50)}<span>Sigilo → chave <b>pública do destinatário</b></span></span>
          <span style="display:flex;align-items:center;gap:18px;margin-top:14px">${chaveSVG("var(--cor)", 50)}<span>Assinatura → chave <b>privada do remetente</b></span></span>`, { left: 140, top: 400, width: 1400 }, c.t(2));
      },
    },
    {
      id: "hash",
      visual: "Linha 1: documento “Pagar R$ 100,00” → engrenagem “função hash” → resumo de tamanho fixo. Linha 2: “Pagar R$ 900,00” (só um dígito mudou, em destaque) → resumo completamente diferente. Faixa: hash → integridade. Pílulas: SHA-256 (seguro) e MD5, SHA-1 (inseguros).",
      secao: "Criptografia",
      bit: BIT_CANTO,
      falas: [
        "A função hash gera um resumo, de tamanho fixo, a partir de qualquer conteúdo.",
        "Qualquer alteração no conteúdo, por menor que seja, gera um hash completamente diferente. Por isso, ele é usado para verificar a integridade.",
        "Um exemplo é o SHA-256. Já o MD5 e o SHA-1 são considerados inseguros.",
      ],
      montar(c) {
        c.titulo("Função hash", "O “resumo” do conteúdo", { left: 140, top: 150 }, c.t(0), { medio: true });
        const linha = (y, texto, resumo, t, destaque) => {
          const doc = c.novo(`<div class="cartao" style="left:140px;top:${y}px;width:460px;height:150px;display:flex;align-items:center;gap:20px;padding:24px">${icone("documento")}<div class="mono" style="font-size:31px;font-weight:700;white-space:nowrap">${texto}</div></div>`);
          doc.querySelector(".icone").style.cssText = "margin:0;width:70px;height:70px;flex-shrink:0";
          c.entra(doc, t, "esquerda");
          const maq = c.novo(`<div class="no" style="left:720px;top:${y}px;width:240px;height:150px;padding:16px">${icone("engrenagem")}<strong style="font-size:26px">função hash</strong></div>`);
          maq.querySelector(".icone").style.cssText = "width:62px;height:62px;margin-bottom:8px";
          c.entra(maq, t + 0.6, "pop");
          c.seta(610, y + 75, 710, y + 75, t + 0.5);
          c.seta(970, y + 75, 1070, y + 75, t + 1.2);
          const out = c.novo(`<div class="cartao" style="left:1080px;top:${y}px;width:460px;height:150px;padding:24px 30px">
            <div class="rotulo" style="font-size:20px;${destaque ? "" : "color:var(--texto-fraco)"}">${destaque ? "completamente diferente" : "tamanho fixo"}</div>
            <div class="mono" style="font-size:40px;font-weight:700;margin-top:10px;${destaque ? "color:var(--cor)" : ""}">${resumo}</div></div>`);
          c.entra(out, t + 1.5, "direita");
          return doc;
        };
        linha(330, "Pagar R$ 100,00", "9f2c…a71b", c.t(0, 0.4));
        const d2 = linha(540, "Pagar R$ <span class=\"marca-texto\">9</span>00,00", "41d0…c3e9", c.t(1, 0.6), true);
        void d2;
        chave7(c, "Hash → <em>integridade</em>", c.t(1, 6));
        c.entra(c.novo(`<div class="abs rotulo" style="left:140px;top:750px">Exemplos</div>`), c.t(2), "fade");
        pilula(c, "✓ SHA-256", { left: 140, top: 790, fontSize: "32px" }, c.t(2, 0.8), VERDE);
        pilula(c, "✗ MD5", { left: 420, top: 790, fontSize: "32px" }, c.t(2, 2.6), VERMELHO);
        pilula(c, "✗ SHA-1", { left: 600, top: 790, fontSize: "32px" }, c.t(2, 3.2), VERMELHO);
        c.entra(c.novo(`<div class="abs texto" style="left:820px;top:790px;font-size:32px">considerados <b>inseguros</b></div>`), c.t(2, 4), "esquerda");
      },
    },

    // --------------------------------------------- Assinatura e certificado
    {
      id: "assinatura",
      visual: "Equação visual: hash do documento + chave privada do autor = assinatura digital. Três pílulas verdes com o que ela garante (autenticidade, integridade, não repúdio) e uma vermelha “✗ confidencialidade”. Quadro âmbar: para sigilo é preciso criptografar.",
      secao: "Assinatura e certificado",
      bit: BIT_CANTO,
      falas: [
        "A assinatura digital combina o hash do documento com a chave privada do autor.",
        "Ela garante três coisas: autenticidade, integridade e não repúdio.",
        "Mas atenção, que essa é clássica: a assinatura digital não garante a confidencialidade. Para manter o sigilo, é preciso criptografar o documento.",
      ],
      montar(c) {
        c.titulo("Assinatura digital", "Como funciona e o que garante", { left: 140, top: 150 }, c.t(0), { medio: true });
        cartaoV(c, { icone: "documento", titulo: "Hash do documento", ti: 76, th: 32 }, { left: 140, top: 330, width: 400, height: 220 }, c.t(0, 0.6));
        c.entra(c.novo(`<div class="abs" style="left:560px;top:390px;font:800 72px var(--sans);color:var(--texto-fraco)">+</div>`), c.t(0, 1.6), "pop");
        const k = c.novo(`<div class="cartao" style="left:640px;top:330px;width:400px;height:220px;padding:30px">${chaveSVG("var(--cor)", 80)}<h3 style="font-size:32px;margin-top:16px">Chave privada do autor</h3></div>`);
        c.entra(k, c.t(0, 2.2), "baixo");
        c.entra(c.novo(`<div class="abs" style="left:1060px;top:390px;font:800 72px var(--sans);color:var(--texto-fraco)">=</div>`), c.t(0, 3.2), "pop");
        const ass = cartaoV(c, { icone: "caneta", titulo: "Assinatura digital", ti: 76, th: 32 }, { left: 1140, top: 330, width: 400, height: 220 }, c.t(0, 3.6));
        ass.style.outline = "6px solid var(--cor)";
        ["Autenticidade", "Integridade", "Não repúdio"].forEach((g, i) => pilula(c, `✓ ${g}`, { left: [140, 470, 760][i], top: 600, fontSize: "32px" }, c.t(1, 1.6 + i * 1.2), VERDE));
        pilula(c, "✗ Confidencialidade", { left: 1070, top: 600, fontSize: "32px" }, c.t(2, 3.4), VERMELHO);
        c.quadro("prova", "“A assinatura digital garante o sigilo do documento.” <b>Errado</b>: para sigilo, é preciso <b>criptografar</b> o documento.", { left: 140, top: 700, width: 1400 }, c.t(2, 6.4));
        c.bit.apontar(c.t(2, 0.3), "esquerda");
      },
    },
    {
      id: "certificado",
      visual: "AC (escudo) emite o Certificado digital, que liga a chave pública (verde) à identidade de pessoa, empresa ou site; pílula ICP-Brasil. Barra de navegador com cadeado e “https://”: HTTPS = certificado + TLS. Depois, cartões A1 (arquivo no computador ou celular) e A3 (token USB ou cartão inteligente) e pílulas e-CPF e e-CNPJ com seus usos.",
      secao: "Assinatura e certificado",
      bit: BIT_CANTO,
      falas: [
        "O certificado digital é um documento eletrônico, emitido por uma Autoridade Certificadora, a AC, que vincula uma chave pública à identidade de uma pessoa, empresa ou site.",
        "No Brasil, a cadeia oficial é a ICP-Brasil. E o HTTPS usa certificados digitais e o protocolo TLS para criptografar a conexão com o site.",
        "Dois tipos são muito cobrados. No A1, a chave privada fica em um arquivo no computador ou no celular: é prático, mas exige cuidado com as cópias.",
        "No A3, ela fica em um token USB ou em um cartão inteligente, o smart card, e não sai do dispositivo, o que aumenta a segurança.",
        "O certificado de pessoa física é o e-CPF, e o de empresa, o e-CNPJ. Eles servem para assinar documentos com validade jurídica, acessar sistemas do governo e emitir notas fiscais.",
      ],
      montar(c) {
        c.titulo("Certificado digital", "Identidade no mundo digital", { left: 140, top: 150 }, c.t(0), { medio: true });
        const ac = c.no({ icone: "escudo", titulo: "AC", texto: "Autoridade Certificadora" }, { left: 140, top: 320, width: 340, height: 250 }, c.t(0, 3.2));
        const s = c.seta(490, 445, 570, 445, c.t(0, 4));
        const cert = c.novo(`<div class="cartao" style="left:580px;top:320px;width:960px;height:250px;padding:30px 36px">
          <div style="display:flex;align-items:center;gap:20px">${icone("certificado")}<h3 style="margin:0;font-size:40px">Certificado digital</h3></div>
          <div class="vinc" style="display:flex;align-items:center;gap:16px;margin-top:22px">
            <span class="pilula" style="display:flex;align-items:center;gap:10px;background:color-mix(in srgb, ${VERDE} 12%, white);color:${VERDE}">${chaveSVG(VERDE, 36)}chave pública</span>
            <span style="font:800 32px var(--sans);color:var(--texto-fraco)">⟷</span>
            <span style="font-size:30px;color:var(--texto)"><b>identidade</b>: pessoa · empresa · site</span></div></div>`);
        cert.querySelector(".icone").style.cssText = "margin:0;width:80px;height:80px";
        c.entra(cert, c.t(0, 2.5), "baixo");
        c.entra(cert.querySelector(".vinc"), c.t(0, 6.6), "esquerda");
        const icp = pilula(c, "ICP-Brasil · cadeia oficial", { left: 140, top: 600 }, c.t(1, 0.4), AZUL);
        const nav = c.novo(`<div class="abs" style="left:580px;top:610px;width:960px;height:96px;border-radius:48px;background:#fff;box-shadow:var(--sombra);display:flex;align-items:center;gap:20px;padding:0 34px">
          <span style="width:52px;height:52px">${icone("cadeado")}</span><span class="mono" style="font-size:36px"><b style="color:var(--certo)">https://</b>www.exemplo.gov.br</span></div>`);
        nav.querySelector(".icone").style.cssText = "margin:0;width:52px;height:52px";
        corLocal(nav, VERDE);
        c.entra(nav, c.t(1, 3.2), "baixo");
        const htxt = c.texto("HTTPS = <b>certificado digital</b> + <b>TLS</b> → conexão criptografada", { left: 580, top: 740, width: 960 }, c.t(1, 5.6));
        htxt.style.fontSize = "34px";
        [ac, s, cert, icp, nav, htxt].forEach((e) => c.sai(e, c.t(2) - 0.4));
        const tipo = (x, nome, icones, texto, nota, t) => {
          const e = c.novo(`<div class="cartao" style="left:${x}px;top:320px;width:680px;height:340px;padding:32px 36px">
            <div style="display:flex;align-items:center;gap:22px"><span style="font:800 96px var(--serif);color:var(--cor);line-height:1">${nome}</span>${icones.map((i) => icone(i)).join("")}</div>
            <p style="font-size:30px;margin-top:18px;color:var(--texto)">${texto}</p><p style="font-size:26px;margin-top:10px">${nota}</p></div>`);
          e.querySelectorAll(".icone").forEach((i) => { i.style.cssText = "margin:0;width:80px;height:80px"; });
          return c.entra(e, t, "baixo");
        };
        tipo(140, "A1", ["notebook", "celular"], "Chave privada em <b>arquivo</b> no computador ou celular.", "Prático, mas cuidado com as <b>cópias</b> do arquivo.", c.t(2, 1.6));
        tipo(860, "A3", ["token", "cartao"], "Chave privada em <b>token USB</b> ou <b>cartão inteligente</b>.", "Não sai do dispositivo: <b>mais segurança</b>.", c.t(3));
        pilula(c, "e-CPF · pessoa física", { left: 140, top: 710, fontSize: "32px" }, c.t(4, 0.6));
        pilula(c, "e-CNPJ · empresa", { left: 560, top: 710, fontSize: "32px" }, c.t(4, 2.4));
        c.texto("assinar com <b>validade jurídica</b> · <b>sistemas do governo</b> · <b>notas fiscais</b>", { left: 140, top: 800, width: 1400 }, c.t(4, 5));
      },
    },

    // ------------------------------------------- Autenticação e proteção
    {
      id: "autenticacao",
      visual: "Três cartões dos fatores: Algo que você sabe (senha, PIN), Algo que você tem (token: celular, cartão, certificado em mídia) e Algo que você é (impressão digital). Embaixo, duas contas: senha + código no celular = ✓ 2FA; senha + senha = ✗ não é 2FA. Faixa final com as boas práticas de senha.",
      secao: "Autenticação e proteção",
      bit: BIT_CANTO,
      falas: [
        "A autenticação confirma a identidade de quem acessa um sistema, com três fatores. Algo que você sabe: senha, PIN, resposta secreta.",
        "Algo que você tem: o celular que recebe um código, um token, um cartão, ou o certificado digital em mídia.",
        "E algo que você é: a biometria, como a impressão digital, o rosto ou a íris.",
        "A autenticação em dois fatores, ou multifator, combina fatores de tipos diferentes. Senha mais código no celular é dois fatores. Duas senhas, não.",
        "Nas senhas: use frases-senha longas, não repita a mesma senha em vários serviços e use um gerenciador de senhas.",
      ],
      montar(c) {
        c.titulo("Autenticação", "Os três fatores", { left: 140, top: 150 }, c.t(0), { medio: true });
        const fatores = [
          { icone: "cadeado", titulo: "Algo que você <span style=\"color:var(--cor)\">sabe</span>", texto: "senha, PIN, resposta secreta" },
          { icone: "token", titulo: "Algo que você <span style=\"color:var(--cor)\">tem</span>", texto: "celular com código, token, cartão, certificado em mídia" },
          { icone: "digital", titulo: "Algo que você <span style=\"color:var(--cor)\">é</span>", texto: "biometria: digital, rosto, íris" },
        ];
        fatores.forEach((k, i) => cartaoV(c, { ...k, ti: 72, th: 34 }, { left: 140 + i * 480, top: 300, width: 440, height: 300 }, c.t(i, i === 0 ? 4.6 : 0)));
        c.entra(c.novo(`<div class="abs" style="left:140px;top:636px;display:flex;align-items:baseline;gap:22px"><span class="rotulo">Dois fatores (2FA) ou multifator</span><span style="font-size:30px;color:var(--texto-suave)">fatores de <b style="color:var(--texto)">tipos diferentes</b></span></div>`), c.t(3), "fade");
        const p = (t) => `<span class="pilula" style="font-size:28px">${t}</span>`;
        const op = (s) => `<span style="font:800 40px var(--sans);color:var(--texto-fraco)">${s}</span>`;
        const l1 = c.novo(`<div class="abs" style="left:140px;top:700px;display:flex;align-items:center;gap:18px">${p("senha <small>(sabe)</small>")}${op("+")}${p("código no celular <small>(tem)</small>")}${op("=")}<span class="pilula" style="font-size:30px;background:var(--certo);color:#fff">✓ 2FA</span></div>`);
        c.entra(l1, c.t(3, 5.6), "esquerda");
        const l2 = c.novo(`<div class="abs" style="left:140px;top:790px;display:flex;align-items:center;gap:18px">${p("senha <small>(sabe)</small>")}${op("+")}${p("senha <small>(sabe)</small>")}${op("=")}<span class="pilula" style="font-size:30px;background:var(--errado);color:#fff">✗ não é 2FA</span></div>`);
        c.entra(l2, c.t(3, 8.2), "esquerda");
        chave7(c, "Senhas: <em>longas (frases-senha)</em> · <em>sem reutilizar</em> · <em>gerenciador de senhas</em>", c.t(4, 1));
      },
    },
    {
      id: "ferramentas",
      visual: "Grade de sete cartões, um por ferramenta citada: Antivírus (escudo), Firewall (muro), IDS (alerta), IPS (bloqueio), VPN (túnel com cadeado), Antispam (envelope) e Proxy (globo). Depois, quadro âmbar e dois cartões lado a lado: Firewall filtra o tráfego ≠ Antivírus remove malware.",
      secao: "Autenticação e proteção",
      bit: BIT_CANTO,
      falas: [
        "O antivírus, ou antimalware, detecta, bloqueia e remove malwares, por assinaturas e análise de comportamento, como o Microsoft Defender.",
        "O firewall controla o tráfego de rede, permitindo ou bloqueando conexões de acordo com regras.",
        "O IDS, de detecção de intrusão, monitora a rede e alerta sobre atividades suspeitas. Já o IPS, de prevenção de intrusão, detecta e bloqueia automaticamente.",
        "A VPN cria um túnel criptografado pela internet, permitindo acesso seguro à rede da organização.",
        "O antispam filtra mensagens indesejadas e suspeitas. E o proxy é um intermediário entre os usuários e a internet, que pode filtrar sites e registrar acessos.",
        "Pegadinha: o firewall não remove vírus; ele filtra o tráfego. Quem remove malware é o antivírus, e um não substitui o outro.",
      ],
      montar(c) {
        c.titulo("Ferramentas de proteção", "Cada uma no seu papel", { left: 140, top: 150 }, c.t(0), { medio: true });
        const itens = [
          ["escudo", "Antivírus", "detecta, bloqueia e <b>remove malware</b> · ex.: Microsoft Defender", c.t(0, 2.6)],
          ["muro", "Firewall", "<b>controla o tráfego</b>: permite ou bloqueia conexões por regras", c.t(1)],
          ["alerta", "IDS", "detecção de intrusão: monitora e <b>alerta</b>", c.t(2)],
          ["bloqueio", "IPS", "prevenção de intrusão: detecta e <b>bloqueia</b>", c.t(2, 5.4)],
          ["tunel", "VPN", "<b>túnel criptografado</b> pela internet até a rede da organização", c.t(3)],
          ["envelope", "Antispam", "filtra mensagens <b>indesejadas</b> e suspeitas", c.t(4)],
          ["publico", "Proxy", "<b>intermediário</b> com a internet: filtra sites e registra acessos", c.t(4, 3.6)],
        ];
        const els = itens.map((k, i) => {
          const col = i % 4, lin = Math.floor(i / 4);
          const e = c.novo(`<div class="cartao" style="left:${140 + col * 352}px;top:${300 + lin * 300}px;width:330px;height:280px;padding:26px">
            <div style="display:flex;align-items:center;gap:16px">${icone(k[0])}<h3 style="margin:0;font-size:32px">${k[1]}</h3></div>
            <p style="margin-top:16px;font-size:24px">${k[2]}</p></div>`);
          e.querySelector(".icone").style.cssText = "margin:0;width:62px;height:62px;flex-shrink:0";
          return c.entra(e, k[3], "pop");
        });
        els.forEach((e) => c.sai(e, c.t(5) - 0.4));
        c.quadro("prova", "“O firewall remove vírus do computador.” <b>Errado</b>: um não substitui o outro.", { left: 140, top: 320, width: 1400 }, c.t(5));
        c.bit.apontar(c.t(5, 0.4), "esquerda");
        cartaoH(c, { icone: "muro", titulo: "Firewall", texto: "<b>filtra o tráfego</b> de rede", ti: 90 }, { left: 140, top: 580, width: 620, height: 190 }, c.t(5, 2.6));
        c.entra(c.novo(`<div class="abs" style="left:790px;top:620px;font:800 80px var(--sans);color:var(--texto-fraco)">≠</div>`), c.t(5, 3.6), "pop");
        cartaoH(c, { icone: "escudo", titulo: "Antivírus", texto: "<b>remove malware</b>", ti: 90 }, { left: 900, top: 580, width: 620, height: 190 }, c.t(5, 4.4));
      },
    },
    {
      id: "antivirus",
      visual: "Quatro cartões, um por frase, com as formas de detecção do antivírus: Assinatura (impressão digital; base atualizada), Heurística e comportamento (olho; ameaças novas), Sandbox (caixa isolada) e Quarentena (cadeado; isola sem apagar).",
      secao: "Autenticação e proteção",
      bit: BIT_CANTO,
      falas: [
        "O antivírus detecta de quatro formas. Por assinatura: compara os arquivos com uma base de “impressões digitais” de malwares conhecidos, que precisa estar atualizada.",
        "Por heurística e comportamento: identifica ações suspeitas, como criptografar muitos arquivos de uma vez, e detecta também ameaças novas.",
        "Com o sandbox, o arquivo suspeito é executado em um ambiente isolado, para observar o que ele faz.",
        "E a quarentena isola o arquivo suspeito, impedindo que ele seja executado, sem apagá-lo de imediato.",
      ],
      montar(c) {
        c.titulo("Antivírus", "Como ele detecta ameaças", { left: 140, top: 150 }, c.t(0), { medio: true });
        const itens = [
          { icone: "digital", titulo: "Assinatura", texto: "compara com uma base de <b>malwares conhecidos</b>; a base precisa estar <b>atualizada</b>" },
          { icone: "olho", titulo: "Heurística e comportamento", texto: "identifica <b>ações suspeitas</b>; detecta também <b>ameaças novas</b>" },
          { icone: "pacote", titulo: "Sandbox", texto: "executa o arquivo em um <b>ambiente isolado</b> para observar" },
          { icone: "cadeado", titulo: "Quarentena", texto: "<b>isola</b> o arquivo e impede a execução, <b>sem apagar</b> de imediato" },
        ];
        itens.forEach((k, i) => cartaoV(c, { ...k, ti: 80, th: 34, tp: 26 }, { left: 140 + i * 415, top: 320, width: 385, height: 430 }, c.t(i, i === 0 ? 3.2 : 0)));
      },
    },
    {
      id: "dmz",
      visual: "Diagrama de rede: Internet (globo) → DMZ (zona tracejada rosa com os servidores Site e E-mail) → Rede interna (zona tracejada azul). Um raio atinge um servidor da DMZ, mas a rede interna recebe um selo de “protegida”. Embaixo, cartão Honeypot (pote de mel): sistema-isca.",
      secao: "Autenticação e proteção",
      bit: BIT_CANTO,
      falas: [
        "A DMZ, ou zona desmilitarizada, é um segmento de rede separado, entre a internet e a rede interna, onde ficam os servidores acessados de fora, como o site e o e-mail.",
        "Se um desses servidores for invadido, a rede interna continua protegida.",
        "O honeypot é um sistema-isca, propositalmente vulnerável, que atrai atacantes para estudar seu comportamento e desviá-los dos sistemas reais.",
      ],
      montar(c) {
        c.titulo("Redes", "DMZ e honeypot", { left: 140, top: 150 }, c.t(0), { medio: true });
        c.no({ icone: "publico", titulo: "Internet" }, { left: 140, top: 380, width: 260, height: 240 }, c.t(0, 4));
        const dmz = c.novo(`<div class="abs" style="left:480px;top:310px;width:540px;height:380px;border-radius:32px;background:var(--cor-suave);border:5px dashed var(--cor)">
          <div class="rotulo" style="position:absolute;left:30px;top:22px">DMZ · zona desmilitarizada</div></div>`);
        c.entra(dmz, c.t(0, 0.6), "zoom");
        const interna = c.novo(`<div class="abs" style="left:1100px;top:310px;width:440px;height:380px;border-radius:32px;background:color-mix(in srgb, ${AZUL} 8%, white);border:5px dashed ${AZUL}">
          <div class="rotulo" style="position:absolute;left:30px;top:22px;color:${AZUL}">Rede interna</div></div>`);
        c.entra(interna, c.t(0, 4.8), "zoom");
        const pin = c.novo(`<div class="abs" style="left:1190px;top:400px;width:260px;height:250px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px">${icone("pessoas")}<div style="display:flex;gap:10px">${icone("notebook")}${icone("notebook")}</div></div>`);
        pin.querySelectorAll(".icone").forEach((i, j) => { i.style.cssText = j === 0 ? "width:110px;height:110px" : "width:80px;height:80px"; });
        corLocal(pin, AZUL);
        c.entra(pin, c.t(0, 5.2), "fade");
        c.seta(410, 500, 470, 500, c.t(0, 4.4));
        const srv = [["Site", 520], ["E-mail", 770]].map(([n, x], i) => c.no({ icone: "servidor", titulo: n }, { left: x, top: 400, width: 210, height: 230 }, c.t(0, 7.6 + i * 1.0)));
        const raio = c.novo(`<div class="abs" style="left:665px;top:375px;width:90px;height:90px;z-index:3">${icone("raio")}</div>`);
        raio.querySelector(".icone").style.cssText = "width:90px;height:90px";
        corLocal(raio, VERMELHO);
        c.entra(raio, c.t(1, 0.3), "pop");
        c.tl.to(srv[0], { backgroundColor: "color-mix(in srgb, #c2412f 14%, white)", duration: 0.4 }, c.t(1, 0.6));
        const ok = c.novo(`<div class="abs pilula" style="left:1180px;top:620px;display:flex;align-items:center;gap:10px;background:var(--certo);color:#fff;font-size:28px">✓ continua protegida</div>`);
        c.entra(ok, c.t(1, 2.6), "pop");
        cartaoH(c, { icone: "pote", titulo: "Honeypot", texto: "Sistema-isca, <b>propositalmente vulnerável</b>: atrai atacantes para estudar o comportamento e desviá-los dos sistemas reais.", ti: 96 }, { left: 140, top: 730, width: 1400, height: 180 }, c.t(2));
      },
    },

    // -------------------------------------------------------------- Backup
    {
      id: "backup",
      visual: "Cartão “cópia de segurança”. Depois, quadro semanal (Dom a Qui) com três linhas: Completo (cópia total todo dia), Incremental (só as mudanças de cada dia) e Diferencial (blocos que crescem desde o último completo). Os blocos necessários para restaurar ganham contorno verde. Faixas de resumo. Por fim, a regra 3-2-1 com números grandes e quadro verde “Memorize”.",
      secao: "Backup",
      bit: BIT_CANTO,
      falas: [
        "Backup é a cópia de segurança dos dados, para recuperá-los em caso de falha, exclusão acidental ou ataque, como um ransomware.",
        "O backup completo, ou full, copia todos os dados selecionados; para restaurar, basta o último completo.",
        "O incremental copia só o que mudou desde o último backup de qualquer tipo. Para restaurar: o último completo e todos os incrementais seguintes.",
        "O diferencial copia tudo o que mudou desde o último backup completo. Para restaurar: o último completo e apenas o último diferencial.",
        "Resumindo: o incremental é o mais rápido e ocupa menos espaço, mas é o mais trabalhoso de restaurar. O diferencial cresce a cada dia, mas restaura com só duas cópias.",
        "Memorize a regra três, dois, um: três cópias, em duas mídias diferentes, sendo uma fora do local, como na nuvem. E teste a restauração de tempos em tempos.",
      ],
      montar(c) {
        c.titulo("Backup", "Cópias de segurança", { left: 140, top: 150 }, c.t(0), { medio: true });
        const intro = cartaoH(c, { icone: "dados", titulo: "Cópia de segurança", texto: "recupera os dados após <b>falha</b>, <b>exclusão acidental</b> ou <b>ataque</b> (ex.: ransomware)", ti: 100 }, { left: 140, top: 340, width: 1400, height: 190 }, c.t(0, 0.5));
        c.sai(intro, c.t(1) - 0.4);
        const dias = ["Dom", "Seg", "Ter", "Qua", "Qui"];
        const x0 = 520, dx = 200;
        const grupo = [];
        dias.forEach((d, i) => {
          const e = c.novo(`<div class="abs" style="left:${x0 + i * dx}px;top:316px;width:180px;text-align:center;font:700 26px var(--sans);color:var(--texto-fraco);letter-spacing:.08em;text-transform:uppercase">${d}</div>`);
          c.entra(e, c.t(1, 0.3 + i * 0.12), "fade");
          grupo.push(e);
        });
        const legenda = c.novo(`<div class="abs" style="left:140px;top:316px;display:flex;align-items:center;gap:12px;font:600 22px var(--sans);color:var(--certo)"><span style="width:26px;height:26px;border-radius:7px;box-shadow:0 0 0 5px var(--certo) inset"></span>necessário para restaurar</div>`);
        c.entra(legenda, c.t(1, 6), "fade");
        grupo.push(legenda);
        const bloco = (x, y, w, texto, cheio) => c.novo(`<div class="abs" style="left:${x}px;top:${y}px;width:${w}px;height:86px;border-radius:14px;display:grid;place-items:center;font:700 ${cheio ? 24 : 21}px var(--sans);background:${cheio ? "var(--cor)" : AZUL};color:#fff;box-shadow:var(--sombra)">${texto}</div>`);
        const anel = "0 0 0 6px #2f8a5b, 0 18px 40px rgba(26,34,48,.10)";
        const linhas = [
          ["Completo (full)", "copia <b>tudo</b>", (i) => [180, "completo", true]],
          ["Incremental", "desde o último backup de <b>qualquer tipo</b>", (i) => i === 0 ? [180, "completo", true] : [60, dias[i], false]],
          ["Diferencial", "desde o último backup <b>completo</b>", (i) => i === 0 ? [180, "completo", true] : [20 + i * 40, i === 1 ? "Seg" : `Seg–${dias[i]}`, false]],
        ];
        const restaura = [[4], [0, 1, 2, 3, 4], [0, 4]];
        linhas.forEach((l, r) => {
          const y = 380 + r * 165;
          const rot = c.novo(`<div class="abs" style="left:140px;top:${y + 4}px;width:340px"><div style="font:800 34px var(--sans)">${l[0]}</div><div style="font-size:23px;color:var(--texto-suave);margin-top:4px;line-height:1.3">${l[1]}</div></div>`);
          c.entra(rot, c.t(r + 1, r === 0 ? 1.2 : 0.2), "esquerda");
          grupo.push(rot);
          dias.forEach((d, i) => {
            const [w, txt, cheio] = l[2](i);
            const b = bloco(x0 + i * dx, y, w, txt, cheio);
            c.entra(b, c.t(r + 1, (r === 0 ? 1.6 : 0.8) + i * 0.45), "pop");
            if (restaura[r].includes(i)) c.tl.to(b, { boxShadow: anel, duration: 0.4 }, c.t(r + 1, r === 0 ? 5.6 : 6.4));
            grupo.push(b);
          });
        });
        chave7(c, "Incremental: <em>rápido e pequeno</em>, mas restauração trabalhosa", c.t(4), c.t(4, 6.3));
        chave7(c, "Diferencial: <em>cresce a cada dia</em>, restaura com 2 cópias", c.t(4, 6.6), c.t(5) - 0.4);
        grupo.forEach((e) => c.sai(e, c.t(5) - 0.4));
        [["3", "cópias dos dados", ["documento", "documento", "documento"]], ["2", "mídias diferentes", ["dados", "notebook"]], ["1", "fora do local", ["nuvem"]]].forEach((k, i) => {
          const e = c.novo(`<div class="cartao" style="left:${140 + i * 480}px;top:320px;width:440px;height:330px;padding:30px;text-align:center">
            <div style="font:800 130px var(--serif);color:var(--cor);line-height:1">${k[0]}</div>
            <div style="font:700 32px var(--sans);margin-top:8px">${k[1]}</div>
            <div style="display:flex;justify-content:center;gap:10px;margin-top:20px">${k[2].map((n) => icone(n)).join("")}</div></div>`);
          e.querySelectorAll(".icone").forEach((ic) => { ic.style.cssText = "margin:0;width:64px;height:64px"; });
          c.entra(e, c.t(5, 2.2 + i * 1.6), "pop");
        });
        c.quadro("dica", "Regra <b>3-2-1</b>: 3 cópias, em 2 mídias diferentes, 1 fora do local. E <b>teste a restauração</b>.", { left: 140, top: 700, width: 1400 }, c.t(5, 8));
      },
    },

    // ---------------------------------------------------------------- LGPD
    {
      id: "lgpd",
      visual: "Pílula “Lei nº 13.709/2018” e pílulas do alcance: pessoas e organizações, públicas e privadas, meios digitais e físicos. Três cartões: Dado pessoal (pessoa; nome, CPF, endereço, IP), Dado pessoal sensível (alerta; lista completa) e Dado anonimizado (olho riscado).",
      secao: "LGPD",
      bit: BIT_CANTO,
      falas: [
        "Por fim, a Lei Geral de Proteção de Dados, a LGPD, Lei treze mil, setecentos e nove, de dois mil e dezoito, regula o tratamento de dados pessoais por pessoas e organizações, públicas e privadas, nos meios digitais e físicos.",
        "Dado pessoal é a informação relacionada a uma pessoa natural identificada ou identificável, como nome, CPF, endereço e até o IP.",
        "Dado pessoal sensível envolve origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização religiosa, filosófica ou política, dados de saúde ou vida sexual, e dados genéticos ou biométricos.",
        "E o dado anonimizado é aquele que não permite mais identificar o titular.",
      ],
      montar(c) {
        c.titulo("Lei nº 13.709/2018", "LGPD — Lei Geral de Proteção de Dados", { left: 140, top: 150 }, c.t(0), { medio: true });
        ["pessoas e organizações", "públicas e privadas", "meios digitais <b>e físicos</b>"].forEach((p, i) => pilula(c, p, { left: [140, 530, 890][i], top: 310 }, c.t(0, 9 + i * 1.6), i === 2 ? AZUL : null));
        cartaoV(c, { icone: "pessoa", titulo: "Dado pessoal", texto: "Pessoa natural <b>identificada ou identificável</b>.", ti: 72, th: 34,
          extra: `<p style="font-size:24px;margin-top:14px;color:var(--cor);font-weight:700">nome · CPF · endereço · IP</p>` }, { left: 140, top: 400, width: 420, height: 470 }, c.t(1));
        cartaoV(c, { icone: "alerta", titulo: "Dado pessoal sensível", texto: "origem racial ou étnica · convicção religiosa · opinião política · filiação a sindicato ou a organização religiosa, filosófica ou política · saúde ou vida sexual · dados <b>genéticos</b> ou <b>biométricos</b>", ti: 72, th: 34, tp: 24 }, { left: 590, top: 400, width: 560, height: 470 }, c.t(2));
        cartaoV(c, { icone: "oculto", titulo: "Dado anonimizado", texto: "<b>não permite mais identificar</b> o titular", ti: 72, th: 34 }, { left: 1180, top: 400, width: 360, height: 470 }, c.t(3));
      },
    },
    {
      id: "lgpd-agentes",
      visual: "Organograma dos papéis: Titular, Encarregado (DPO) e ANPD na linha de cima; Controlador e Operador embaixo. O encarregado se liga ao titular, à ANPD e ao controlador; uma seta “em nome de” vai do controlador ao operador.",
      secao: "LGPD",
      bit: BIT_CANTO,
      falas: [
        "Na LGPD, o titular é a pessoa a quem os dados se referem. E o controlador é quem toma as decisões sobre o tratamento.",
        "O operador é quem realiza o tratamento em nome do controlador.",
        "O encarregado, também chamado de DPO, é o canal de comunicação entre o controlador, os titulares e a ANPD.",
        "E a ANPD, a Autoridade Nacional de Proteção de Dados, fiscaliza e aplica as sanções.",
      ],
      montar(c) {
        c.titulo("LGPD", "Quem é quem", { left: 140, top: 150 }, c.t(0), { medio: true });
        const no = (o, x, y, t, cor) => {
          const e = c.no(o, { left: x, top: y, width: 400, height: 230 }, t);
          if (cor) corLocal(e, cor);
          e.querySelector(".icone").style.cssText = "width:80px;height:80px;margin-bottom:10px";
          return e;
        };
        no({ icone: "pessoa", titulo: "Titular", texto: "a quem os dados se referem" }, 140, 310, c.t(0, 0.4));
        no({ icone: "balanca", titulo: "Controlador", texto: "<b>toma as decisões</b>" }, 640, 640, c.t(0, 4.4));
        no({ icone: "engrenagem", titulo: "Operador", texto: "trata em nome do controlador" }, 1140, 640, c.t(1), AZUL);
        c.seta(1045, 755, 1130, 755, c.t(1, 0.6));
        c.entra(c.novo(`<div class="abs" style="left:1000px;top:700px;font:600 20px var(--sans);color:var(--texto-fraco)">em nome de</div>`), c.t(1, 1), "fade");
        no({ icone: "balao", titulo: "Encarregado (DPO)", texto: "canal de comunicação" }, 640, 310, c.t(2));
        const linhas = c.novo(`<svg class="abs" style="left:0;top:0;width:1920px;height:1080px" viewBox="0 0 1920 1080">
          <path d="M545 425 H635" stroke="var(--cor-media)" stroke-width="10" stroke-linecap="round" stroke-dasharray="2 18"/>
          <path d="M1045 425 H1135" stroke="var(--cor-media)" stroke-width="10" stroke-linecap="round" stroke-dasharray="2 18"/>
          <path d="M840 545 V635" stroke="var(--cor-media)" stroke-width="10" stroke-linecap="round" stroke-dasharray="2 18"/></svg>`);
        c.entra(linhas, c.t(2, 3), "fade");
        no({ icone: "escudo", titulo: "ANPD", texto: "<b>fiscaliza</b> e aplica sanções" }, 1140, 310, c.t(2, 2.4), AZUL);
        chave7(c, "ANPD: <em>Autoridade Nacional de Proteção de Dados</em>", c.t(3));
      },
    },
    {
      id: "lgpd-regras",
      visual: "Três cartões: Bases legais (balança; consentimento é só uma delas), Direitos do titular (pessoa; lista) e Sanções (alerta; contadores 2% do faturamento e R$ 50 milhões por infração). Depois, quadro âmbar com duas pegadinhas, uma por frase.",
      secao: "LGPD",
      bit: BIT_CANTO,
      falas: [
        "Bases legais: o tratamento só é permitido nas hipóteses previstas na lei, e o consentimento é apenas uma delas. Outras são o cumprimento de obrigação legal, a execução de políticas públicas e a de contrato.",
        "O titular tem direito a confirmar se seus dados são tratados, acessá-los, corrigi-los, pedir anonimização, bloqueio ou eliminação de dados desnecessários, portabilidade e revogação do consentimento.",
        "E as sanções vão de advertência a multa de até dois por cento do faturamento, limitada a cinquenta milhões de reais por infração.",
        "Duas pegadinhas: a LGPD não vale só para dados digitais; vale também para dados em papel.",
        "E nem todo tratamento de dados exige consentimento: ele é só uma das bases legais.",
      ],
      montar(c) {
        c.titulo("LGPD", "Bases legais, direitos e sanções", { left: 140, top: 150 }, c.t(0), { medio: true });
        const lista = (itens) => `<ul style="list-style:none;margin-top:14px">${itens.map((i) => `<li style="font-size:24px;line-height:1.35;color:var(--texto-suave);margin-bottom:8px;display:flex;gap:12px"><span style="flex-shrink:0;width:12px;height:12px;border-radius:4px;background:var(--cor);margin-top:11px"></span><span>${i}</span></li>`).join("")}</ul>`;
        const b = cartaoV(c, { icone: "balanca", titulo: "Bases legais", ti: 64, th: 34, pad: 28,
          extra: lista(["<b>consentimento</b> — só uma delas", "obrigação legal", "políticas públicas", "execução de contrato"]) }, { left: 140, top: 310, width: 440, height: 570 }, c.t(0, 0.4));
        const d = cartaoV(c, { icone: "pessoa", titulo: "Direitos do titular", ti: 64, th: 34, pad: 28,
          extra: lista(["confirmar o tratamento", "acessar e corrigir", "anonimização, bloqueio ou eliminação", "portabilidade", "revogar o consentimento"]) }, { left: 620, top: 310, width: 440, height: 570 }, c.t(1));
        const s = c.novo(`<div class="cartao" style="left:1100px;top:310px;width:440px;height:570px;padding:28px">${icone("alerta")}<h3 style="font-size:34px">Sanções</h3>
          <p style="font-size:24px">de <b>advertência</b> a multa de até</p>
          <div style="font:800 76px var(--sans);color:var(--cor);margin-top:6px"><span class="v1">0</span>%</div>
          <p style="font-size:24px">do faturamento, limitada a</p>
          <div style="font:800 56px var(--sans);color:var(--cor);margin-top:6px">R$ <span class="v2">0</span> mi</div>
          <p style="font-size:24px">por infração</p></div>`);
        s.querySelector(".icone").style.cssText = "width:64px;height:64px;margin-bottom:16px";
        c.entra(s, c.t(2), "baixo");
        c.contar(s.querySelector(".v1"), 0, 2, c.t(2, 2.6), 0.8);
        c.contar(s.querySelector(".v2"), 0, 50, c.t(2, 5), 1.2);
        [b, d, s].forEach((e) => c.sai(e, c.t(3) - 0.4));
        const q = c.quadro("prova", `<span style="display:block">“A LGPD só se aplica a dados em meio digital.” <b>Errado</b>: vale também para dados em <b>papel</b>.</span>
          <span class="q2" style="display:block;margin-top:14px">“Todo tratamento de dados exige consentimento.” <b>Errado</b>: o consentimento é só <b>uma das bases legais</b>.</span>`, { left: 140, top: 340, width: 1400 }, c.t(3));
        c.entra(q.querySelector(".q2"), c.t(4), "baixo");
        c.bit.apontar(c.t(3, 0.4), "esquerda");
      },
    },

    // ------------------------------------------------------- Boas práticas
    {
      id: "boas-praticas",
      visual: "Lista de verificação com sete itens, cada um com um ícone de visto, entrando na frase que o menciona: atualizações, desconfiar de urgência, conferir o endereço, fontes oficiais, antivírus + firewall + 2FA, Windows + L e backups testados.",
      secao: "Boas práticas",
      bit: BIT_CANTO,
      falas: [
        "Para fechar, as boas práticas. Mantenha o sistema operacional, o navegador e os aplicativos atualizados.",
        "Desconfie de mensagens com urgência, prêmios ou ameaças, e não clique em links suspeitos.",
        "Confira o endereço do site antes de digitar senhas, e baixe programas apenas de fontes oficiais.",
        "Use antivírus, firewall e autenticação em dois fatores, e bloqueie o computador ao se ausentar, com as teclas Windows e L.",
        "E faça backups regulares, testando a restauração.",
      ],
      montar(c) {
        c.titulo("No dia a dia", "Boas práticas", { left: 140, top: 150 }, c.t(0), { medio: true });
        const itens = [
          ["Manter <b>sistema, navegador e aplicativos</b> atualizados", c.t(0, 2.6)],
          ["Desconfiar de <b>urgência, prêmios ou ameaças</b>; não clicar em links suspeitos", c.t(1)],
          ["Conferir o <b>endereço do site</b> antes de digitar senhas", c.t(2)],
          ["Baixar programas só de <b>fontes oficiais</b>", c.t(2, 3.8)],
          ["Usar <b>antivírus</b>, <b>firewall</b> e <b>autenticação em dois fatores</b>", c.t(3)],
          ["Bloquear o computador ao sair: <span class=\"mono\" style=\"font-weight:700;color:var(--cor)\">Windows + L</span>", c.t(3, 4.2)],
          ["Fazer <b>backups regulares</b> e testar a restauração", c.t(4)],
        ];
        itens.forEach(([h, t], i) => {
          const e = c.novo(`<div class="abs" style="left:140px;top:${305 + i * 84}px;width:1400px;display:flex;align-items:center;gap:22px;font-size:34px;color:var(--texto-suave)">${icone("check")}<span>${h}</span></div>`);
          e.querySelector(".icone").style.cssText = "margin:0;width:52px;height:52px;flex-shrink:0";
          e.querySelectorAll("b").forEach((b) => { b.style.color = "var(--texto)"; });
          c.entra(e, t, "esquerda");
        });
      },
    },

    // ------------------------------------------------------------ Revisão
    {
      id: "revisao",
      visual: "Oito cartões de revisão com ícone de verificação, um por frase: Princípios, Malware, Golpes, Chaves, Hash e certificado, Ferramentas, Backup, Normas e leis.",
      secao: "Revisão",
      bit: BIT_CANTO,
      falas: [
        "Revisando: a tríade é confidencialidade, integridade e disponibilidade; autenticidade e não repúdio são complementares.",
        "Vírus precisa de hospedeiro e execução; worm se espalha sozinho; trojan se disfarça; ransomware pede resgate.",
        "Phishing é engenharia social, não malware. Pharming engana pelo DNS. DDoS ataca a disponibilidade.",
        "Sigilo: chave pública do destinatário. Assinatura: chave privada do remetente, sem garantir sigilo.",
        "Hash garante integridade. No A1, a chave fica em arquivo; no A3, em token ou cartão.",
        "Firewall filtra o tráfego; antivírus remove malware. IDS alerta, IPS bloqueia, e a DMZ separa os servidores acessados de fora.",
        "No backup, o incremental restaura com todos os incrementais; o diferencial, só com o último.",
        "E a ISO 27001 permite certificação; na LAI, os prazos são vinte e cinco, quinze e cinco anos; e, na LGPD, o controlador decide, e o consentimento é só uma das bases legais.",
      ],
      montar(c) {
        c.titulo("Revisão", "O que você aprendeu", { left: 140, top: 150 }, c.t(0), { medio: true });
        const cartoes = [
          ["Princípios", "C · I · D (tríade) + autenticidade e não repúdio"],
          ["Malware", "Vírus: hospedeiro · worm: sozinho · trojan: disfarce · ransomware: resgate"],
          ["Golpes", "Phishing ≠ malware · pharming: DNS · DDoS: disponibilidade"],
          ["Chaves", "Sigilo: pública do destinatário · assinatura: privada do remetente"],
          ["Hash e certificado", "Hash = integridade · A1: arquivo · A3: token ou cartão"],
          ["Ferramentas", "Firewall ≠ antivírus · IDS alerta, IPS bloqueia · DMZ"],
          ["Backup", "Incremental: todos · diferencial: só o último · 3-2-1"],
          ["Normas e leis", "ISO 27001: certificação · LAI: 25/15/5 · LGPD: controlador decide"],
        ];
        cartoes.forEach((k, i) => {
          const col = i % 4, lin = Math.floor(i / 4);
          const e = c.novo(`<div class="cartao" style="left:${140 + col * 352}px;top:${300 + lin * 300}px;width:330px;height:280px;padding:28px">
            <div style="display:flex;align-items:center;gap:14px">${icone("check")}<h3 style="margin:0;font-size:30px">${k[0]}</h3></div>
            <p style="margin-top:16px;font-size:25px">${k[1]}</p></div>`);
          e.querySelector(".icone").style.cssText = "margin:0;width:50px;height:50px;flex-shrink:0";
          c.entra(e, c.t(i, i === 0 ? 1.4 : 0), "pop");
        });
      },
    },
    {
      id: "encerramento",
      visual: "Bit grande à esquerda. Cartão “Pratique agora: 15 questões” e cartão “Próximo vídeo: Capítulo 8 — Lógica de Programação” na cor do capítulo 8. Bit acena na despedida.",
      secao: "Revisão",
      bit: { x: 470, y: 990, s: 1.3 },
      falas: [
        "Agora é a sua vez: faça as quinze questões do final do capítulo e confira a correção comentada.",
        "No próximo vídeo, vamos estudar a lógica de programação.",
        "Até lá, e bons estudos!",
      ],
      montar(c) {
        c.cartao({ icone: "questoes", titulo: "Pratique agora", texto: "<b>15 questões</b> no final do Capítulo 7, com correção comentada." }, { left: 900, top: 230, width: 820 }, c.t(0));
        const prox = c.novo(`<div class="cartao" style="left:900px;top:640px;width:820px;--cor:#a21caf">
          <div class="rotulo">Próximo vídeo</div><h3 style="margin-top:14px;font-family:var(--serif);font-size:52px">Capítulo 8 —<br>Lógica de Programação</h3></div>`);
        c.entra(prox, c.t(1), "baixo");
        c.bit.acenar(c.t(2));
      },
    },
  ]),
});
