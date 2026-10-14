// Roteiro da videoaula do Capítulo 3 — Internet e Navegadores.
// Cada cena tem a narração (falas) e a montagem visual (montar).
// c.t(i) = instante em que começa a fala i da cena.
// em(i, "trecho") = instante aproximado em que o trecho é dito na fala i.

const BIT_CANTO = { x: 1720, y: 1020, s: 0.58 };
const TITULO = { left: 140, top: 150 };

// ---------------------------------------------------------- Ícones extras
if (typeof ICONES !== "undefined") {
  Object.assign(ICONES, {
    globo: `<circle class="c1" cx="60" cy="60" r="48"/>
      <path class="sb" style="stroke-width:5" d="M12 60h96M60 12c-18 22-18 74 0 96M60 12c18 22 18 74 0 96M19 36h82M19 84h82"/>`,
    roteador: `<rect class="c2" x="24" y="14" width="9" height="46" rx="4.5"/><rect class="c2" x="87" y="14" width="9" height="46" rx="4.5"/>
      <rect class="c1" x="8" y="56" width="104" height="44" rx="12"/>
      <circle class="cb" cx="28" cy="78" r="5"/><circle class="cb" cx="44" cy="78" r="5"/><circle class="cb" cx="60" cy="78" r="5"/>
      <rect class="c2" x="74" y="73" width="26" height="10" rx="5"/>
      <path class="s1" style="stroke-width:6" d="M48 36a17 17 0 0 1 24 0M40 26a29 29 0 0 1 40 0"/>`,
    switch: `<rect class="c1" x="6" y="34" width="108" height="52" rx="10"/>
      ${Array.from({ length: 7 }, (_, i) => `<rect class="cb" x="${16 + i * 13.5}" y="46" width="9" height="9" rx="2"/><rect class="cb" x="${16 + i * 13.5}" y="64" width="9" height="9" rx="2"/>`).join("")}`,
    hub: `<rect class="c2" x="16" y="58" width="88" height="40" rx="10"/>
      ${[0, 1, 2, 3].map((i) => `<rect class="c1" x="${28 + i * 18}" y="72" width="10" height="10" rx="2"/>`).join("")}
      <path class="s1" style="stroke-width:6" d="M60 50V14M52 22l8-8 8 8M42 52L20 28M20 40V28h12M78 52l22-24M88 28h12v12"/>`,
    modem: `<rect class="c1" x="18" y="22" width="84" height="72" rx="12"/><rect class="c2" x="30" y="94" width="60" height="10" rx="5"/>
      <circle class="cb" cx="34" cy="40" r="5"/><circle class="cb" cx="50" cy="40" r="5"/><circle class="c2" cx="66" cy="40" r="5"/>
      <path class="sb" style="stroke-width:6" d="M30 68c6-12 12-12 18 0s12 12 18 0 12-12 18 0"/>`,
    antena: `<path class="s1" style="stroke-width:7" d="M38 42a32 32 0 0 1 44 0M26 28a50 50 0 0 1 68 0"/>
      <circle class="c1" cx="60" cy="56" r="7"/>
      <ellipse class="c2" cx="60" cy="94" rx="46" ry="14"/><rect class="c2" x="14" y="78" width="92" height="16"/>
      <ellipse class="c1" cx="60" cy="78" rx="46" ry="14"/><circle class="cb" cx="60" cy="78" r="5"/>`,
    placa: `<rect class="c1" x="8" y="26" width="104" height="58" rx="8"/><rect class="c2" x="18" y="84" width="62" height="14" rx="2"/>
      ${Array.from({ length: 7 }, (_, i) => `<rect class="cs" x="${22 + i * 8}" y="87" width="4" height="9"/>`).join("")}
      <rect class="cs" x="20" y="38" width="30" height="30" rx="4"/>
      <rect class="cb" x="68" y="36" width="34" height="34" rx="4"/><rect class="c1" x="77" y="56" width="16" height="10" rx="2"/>`,
    wifi: `<circle class="cs" cx="60" cy="60" r="52"/>
      <path class="s1" style="stroke-width:9" d="M24 54a50 50 0 0 1 72 0M36 68a33 33 0 0 1 48 0M48 82a16 16 0 0 1 24 0"/>
      <circle class="c1" cx="60" cy="94" r="7"/>`,
    envelope: `<rect class="c1" x="8" y="24" width="104" height="72" rx="10"/><path class="sb" style="stroke-width:7" d="M16 34l44 32 44-32"/>`,
    lupa: `<circle class="cs" cx="50" cy="50" r="34"/><circle cx="50" cy="50" r="34" class="s1" style="stroke-width:12"/>
      <path class="s1" style="stroke-width:16" d="M76 76l28 28"/>`,
    navegador: `<rect class="c1" x="6" y="14" width="108" height="92" rx="12"/><rect class="cb" x="12" y="38" width="96" height="62" rx="5"/>
      <circle class="cb" cx="18" cy="26" r="3.5"/><circle class="cb" cx="29" cy="26" r="3.5"/>
      <rect class="cs" x="40" y="20" width="66" height="12" rx="6"/>
      <rect class="c2" x="20" y="48" width="44" height="8" rx="4"/><rect class="c2" x="20" y="62" width="80" height="6" rx="3"/>
      <rect class="c2" x="20" y="74" width="70" height="6" rx="3"/><rect class="c2" x="20" y="86" width="56" height="6" rx="3"/>`,
    cookie: `<circle class="c2" cx="60" cy="60" r="50"/><circle class="c1" cx="42" cy="40" r="8"/><circle class="c1" cx="76" cy="50" r="7"/>
      <circle class="c1" cx="46" cy="76" r="7"/><circle class="c1" cx="80" cy="82" r="6"/><circle class="c1" cx="64" cy="28" r="5"/>`,
    cabo: `<path class="s1" style="stroke-width:7" d="M8 60c10-18 20-18 30 0s20 18 30 0"/>
      <path style="fill:none;stroke:var(--cor-media);stroke-width:7;stroke-linecap:round" d="M8 60c10 18 20 18 30 0s20-18 30 0"/>
      <rect class="c1" x="68" y="38" width="44" height="44" rx="6"/><rect class="cb" x="76" y="46" width="28" height="12" rx="2"/>
      ${[78, 86, 94, 102].map((x) => `<rect class="c2" x="${x - 2}" y="64" width="4" height="10"/>`).join("")}`,
    fibra: `<path class="s1" style="stroke-width:7" d="M60 112C60 80 30 60 20 26M60 112C60 80 60 50 60 20M60 112C60 80 90 60 100 26"/>
      <circle class="c2" cx="20" cy="20" r="12"/><circle class="c2" cx="60" cy="14" r="12"/><circle class="c2" cx="100" cy="20" r="12"/>
      <circle class="cb" cx="20" cy="20" r="5"/><circle class="cb" cx="60" cy="14" r="5"/><circle class="cb" cx="100" cy="20" r="5"/>`,
    coaxial: `<circle class="c1" cx="60" cy="60" r="50"/><circle class="cs" cx="60" cy="60" r="40"/><circle class="c2" cx="60" cy="60" r="30"/>
      <circle class="cb" cx="60" cy="60" r="19"/><circle class="c1" cx="60" cy="60" r="9"/>`,
    satelite: `<rect class="c2" x="6" y="44" width="32" height="32" rx="4"/><rect class="c2" x="82" y="44" width="32" height="32" rx="4"/>
      <path class="sb" style="stroke-width:3" d="M22 44v32M98 44v32M6 60h32M82 60h32"/>
      <path class="s1" style="stroke-width:5" d="M38 60h44"/>
      <rect class="c1" x="44" y="38" width="32" height="44" rx="8"/><path class="c1" d="M42 96a18 10 0 0 0 36 0z"/><path class="s1" style="stroke-width:5" d="M60 82v12"/>`,
    telefone: `<path class="c1" d="M14 46c0-24 92-24 92 0v8c0 4-3 6-7 6H86c-4 0-6-3-6-6v-6H40v6c0 3-2 6-6 6H21c-4 0-7-2-7-6z"/>
      <rect class="c2" x="26" y="62" width="68" height="46" rx="10"/>
      ${[0, 1, 2].map((i) => `<circle class="cb" cx="${44 + i * 16}" cy="76" r="4"/><circle class="cb" cx="${44 + i * 16}" cy="92" r="4"/>`).join("")}`,
    fone: `<path class="s1" style="stroke-width:10" d="M22 72V60a38 38 0 0 1 76 0v12"/>
      <rect class="c1" x="12" y="64" width="24" height="42" rx="9"/><rect class="c1" x="84" y="64" width="24" height="42" rx="9"/>`,
    predio: `<rect class="c1" x="24" y="12" width="72" height="98" rx="6"/>
      ${[24, 44, 64].map((y) => [36, 54, 72].map((x) => `<rect class="cb" x="${x}" y="${y}" width="12" height="12" rx="2"/>`).join("")).join("")}
      <rect class="c2" x="50" y="84" width="20" height="26" rx="3"/>`,
    cidade: `<rect class="c2" x="6" y="52" width="28" height="58" rx="3"/><rect class="c1" x="38" y="20" width="30" height="90" rx="3"/>
      <rect class="c2" x="72" y="40" width="22" height="70" rx="3"/><rect class="c1" x="96" y="62" width="18" height="48" rx="3"/>
      ${[32, 48, 64, 80].map((y) => `<rect class="cb" x="45" y="${y}" width="6" height="8"/><rect class="cb" x="56" y="${y}" width="6" height="8"/>`).join("")}`,
    impressora: `<rect class="c2" x="30" y="10" width="60" height="30" rx="4"/><rect class="c1" x="10" y="36" width="100" height="50" rx="10"/>
      <rect class="cb" x="30" y="68" width="60" height="42" rx="3"/><rect class="c2" x="38" y="80" width="44" height="5" rx="2"/>
      <rect class="c2" x="38" y="92" width="30" height="5" rx="2"/><circle class="cb" cx="94" cy="50" r="4"/>`,
    anonimo: `<path class="c1" d="M22 54l10-30c2-6 8-8 14-6l14 5 14-5c6-2 12 0 14 6l10 30z"/><rect class="c1" x="8" y="52" width="104" height="10" rx="5"/>
      <circle class="c1" cx="38" cy="86" r="17"/><circle class="c1" cx="82" cy="86" r="17"/>
      <circle class="cs" cx="38" cy="86" r="10"/><circle class="cs" cx="82" cy="86" r="10"/><rect class="c1" x="52" y="82" width="16" height="6" rx="3"/>`,
    peca: `<path class="c1" d="M18 34h22a12 12 0 1 1 24 0h22v22a12 12 0 1 1 0 24v22H64a12 12 0 1 0-24 0H18z"/>`,
    raio: `<circle class="cs" cx="60" cy="60" r="52"/><path class="c1" d="M68 12L30 66h26l-6 42 40-58H64z"/>`,
    olho: `<path class="c2" d="M6 60c14-26 34-38 54-38s40 12 54 38c-14 26-34 38-54 38S20 86 6 60z"/>
      <circle class="cb" cx="60" cy="60" r="24"/><circle class="c1" cx="60" cy="60" r="13"/>`,
    olhoOff: `<path class="c2" d="M6 60c14-26 34-38 54-38s40 12 54 38c-14 26-34 38-54 38S20 86 6 60z"/>
      <circle class="cb" cx="60" cy="60" r="24"/><circle class="c1" cx="60" cy="60" r="13"/>
      <path d="M18 104L102 16" stroke="#c2412f" stroke-width="10" stroke-linecap="round"/>`,
    lixeira: `<rect class="c2" x="20" y="22" width="80" height="12" rx="6"/><rect class="c2" x="46" y="12" width="28" height="12" rx="4"/>
      <path class="c1" d="M28 40h64l-6 66a6 6 0 0 1-6 6H40a6 6 0 0 1-6-6z"/><path class="sb" style="stroke-width:6" d="M48 54v42M60 54v42M72 54v42"/>`,
    bloqueio: `<rect class="c2" x="6" y="14" width="84" height="64" rx="8"/><rect class="cb" x="12" y="28" width="72" height="44" rx="3"/>
      <circle class="cb" cx="84" cy="80" r="30"/><circle cx="84" cy="80" r="23" fill="none" stroke="#c2412f" stroke-width="8"/>
      <path d="M68 96l32-32" stroke="#c2412f" stroke-width="8"/>`,
    senha: `<circle class="c1" cx="38" cy="60" r="26"/><circle class="cb" cx="32" cy="60" r="9"/>
      <rect class="c1" x="58" y="54" width="54" height="12" rx="4"/><rect class="c1" x="86" y="60" width="10" height="20" rx="3"/><rect class="c1" x="100" y="60" width="10" height="16" rx="3"/>`,
  });
}

// ------------------------------------------------- Pronúncia (só na voz)
// Termos em inglês, siglas lidas como palavra e endereços numéricos.
const PRONUNCIA = [
  ["192.168.0.1", "cento e noventa e dois, ponto, cento e sessenta e oito, ponto, zero, ponto, um"],
  ["127.0.0.1", "cento e vinte e sete, ponto, zero, ponto, zero, ponto, um"],
  ["255.255.255.0", "duzentos e cinquenta e cinco, ponto, duzentos e cinquenta e cinco, ponto, duzentos e cinquenta e cinco, ponto, zero"],
  ["192.168", "cento e noventa e dois ponto cento e sessenta e oito"],
  ["172.16", "cento e setenta e dois ponto dezesseis"],
  ["172.31", "cento e setenta e dois ponto trinta e um"],
  ["802.11n", "oitocentos e dois ponto onze ene"],
  ["802.11ac", "oitocentos e dois ponto onze á cê"],
  ["802.11ax", "oitocentos e dois ponto onze á xis"],
  ["802.11", "oitocentos e dois ponto onze"],
  ["802.3", "oitocentos e dois ponto três"],
  ["IEEE", "i é é é"],
  ["2,4 GHz", "dois vírgula quatro gigahertz"],
  ["5 GHz", "cinco gigahertz"],
  ["/24", "barra vinte e quatro"],
  ["/16", "barra dezesseis"],
  ["/8", "barra oito"],
  ["World Wide Web", "uôrld uáid uéb"],
  ["Web 2.0", "uéb dois ponto zero"],
  ["surface web", "sárfeis uéb"],
  ["deep web", "díp uéb"],
  ["dark web", "dárk uéb"],
  ["webmail", "uébmêil"],
  ["web", "uéb"],
  ["WWW", "dáblio dáblio dáblio"],
  ["www.gov.br", "dáblio dáblio dáblio ponto gov ponto bê érre"],
  ["gov.br", "gov ponto bê érre"],
  ["edu.br", "édu ponto bê érre"],
  ["com.br", "com ponto bê érre"],
  ["org.br", "órg ponto bê érre"],
  ["jus.br", "jus ponto bê érre"],
  ["TCP/IP", "tê cê pê i pê"],
  ["IPv4", "i pê vê quatro"],
  ["IPv6", "i pê vê seis"],
  ["IPs", "i pês"],
  ["IP", "i pê"],
  ["UDP", "u dê pê"],
  ["ICMP", "i cê eme pê"],
  ["UTP", "u tê pê"],
  ["WLAN", "dáblio lã"],
  ["Wi-Fi", "uai-fai"],
  ["Bluetooth", "blutúf"],
  ["hub", "râb"],
  ["Ethernet", "íter-nét"],
  ["WEP", "uép"],
  ["WPA2", "dáblio pê á dois"],
  ["WPA3", "dáblio pê á três"],
  ["SSID", "esse esse i dê"],
  ["Half-duplex", "ráf dúplex"],
  ["half-duplex", "ráf dúplex"],
  ["walkie-talkie", "uóqui-tóqui"],
  ["streaming", "istríming"],
  ["gateway", "guêituêi"],
  ["loopback", "lúpbéc"],
  ["localhost", "lôucal rôust"],
  ["browsers", "bráuzers"],
  ["cookies", "cúquis"],
  ["cache", "quêch"],
  ["InPrivate", "in práivet"],
  ["pop-ups", "pópi-âps"],
  ["Delete", "delíti"],
  ["Ctrl", "contról"],
  [/ \+ /g, " "],
  ["VoIP", "vôip"],
  ["URL", "u érre éle"],
  ["tracert", "treicérte"],
  ["traceroute", "trêice-ráute"],
  ["ipconfig", "i pê config"],
  ["ip addr", "i pê ádér"],
  ["nslookup", "éne ésse lúcap"],
  ["site:", "site dois-pontos"],
  ["filetype:", "fáiltaipe dois-pontos"],
  ["intitle:", "intáitol dois-pontos"],
  ["Gmail", "gê mêil"],
  ["Thunderbird", "tânderbârd"],
  ["wikis", "uíquis"],
  ["Cco", "cê cê ó"],
  ["Cc", "cê cê"],
  ["CIDR", "sáider"],
  ["FERTSAA", "éfe, ê, érre, tê, ésse, á, á"],
  ["Office", "ófis"],
];

const REGRAS = PRONUNCIA.map(([de, para]) => [
  de instanceof RegExp ? de
    : new RegExp("(?<![\\wÀ-ÿ])" + de.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&") + "(?![\\wÀ-ÿ])", "g"),
  para,
]);

function pronunciar(f) {
  if (typeof f !== "string") return f;
  let s = f;
  for (const [re, para] of REGRAS) s = s.replace(re, para);
  return s === f ? f : { texto: f, falar: s };
}

// ------------------------------------------------------ Funções de apoio

// Instante aproximado em que um trecho é dito (proporcional à posição no texto).
function emTrecho(c, falas, i, trecho, d = 0) {
  const f = falas[i];
  const texto = typeof f === "string" ? f : f.texto;
  const p = texto.indexOf(trecho);
  if (p < 0) throw new Error(`Trecho não encontrado na fala ${i}: ${trecho}`);
  return c.t(i) + c.dur(i) * (p / texto.length) + d;
}

// Cartão horizontal: ícone à esquerda, título e texto à direita.
function cartaoLado(c, ic, titulo, texto, estilo, t, opc = {}) {
  const tam = opc.icone || 80;
  const e = c.novo(`<div class="cartao" style="display:flex;gap:22px;align-items:center;padding:${opc.padding || "22px 26px"}">
    ${icone(ic)}<div><h3 style="margin:0;font-size:${opc.h3 || 30}px;line-height:1.15">${titulo}</h3>${texto ? `<p style="font-size:${opc.p || 23}px;line-height:1.35;margin-top:6px">${texto}</p>` : ""}</div></div>`, estilo);
  e.querySelector(".icone").style.cssText = `margin:0;width:${tam}px;height:${tam}px;flex-shrink:0`;
  if (opc.cor) e.style.setProperty("--cor", opc.cor);
  return c.entra(e, t, opc.tipo || "baixo");
}

function pilula(c, html, estilo, t, tipo = "pop") {
  return c.entra(c.novo(`<div class="abs pilula">${html}</div>`, estilo), t, tipo);
}

function icn(c, nome, x, y, tam, t, tipo = "pop") {
  const e = c.novo(`<div class="abs" style="left:${x}px;top:${y}px;width:${tam}px;height:${tam}px">${icone(nome)}</div>`);
  e.querySelector(".icone").style.cssText = "width:100%;height:100%";
  return c.entra(e, t, tipo);
}

const ROXO = "#4f46e5";

const cenas = [
  // ------------------------------------------------------------ Abertura
  {
    id: "abertura",
    visual: "Bit grande à esquerda acena. À direita surgem o rótulo “Capítulo 3” e o título “Internet e Navegadores”. Um roteiro de 5 tópicos aparece item por item, cada um na frase que o anuncia. No “Vamos lá?”, Bit dá um pulinho.",
    secao: "Abertura",
    bit: { x: 470, y: 990, s: 1.3 },
    falas: [
      "Olá! Eu sou o Bit. Que bom ter você de volta!",
      "Neste capítulo, vamos estudar Internet e Navegadores, um dos temas mais cobrados nas provas.",
      "Você vai conhecer os tipos de rede, as topologias e os equipamentos que ligam tudo.",
      "Vai ver os meios de transmissão, o Wi-Fi e os modelos OSI e TCP/IP.",
      "Depois, vamos entender os endereços IP, o DNS, os protocolos e o correio eletrônico.",
      "E, para fechar, a web, os navegadores e os mecanismos de busca. Vamos lá?",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      c.bit.acenar(c.t(0, 0.2));
      c.titulo("Capítulo 3", "Internet e<br>Navegadores", { left: 900, top: 190 }, c.t(1));
      c.lista([
        "<b>Redes</b>: tipos, topologias e equipamentos",
        "<b>Meios de transmissão</b> e Wi-Fi",
        "Modelos <b>OSI</b> e <b>TCP/IP</b>",
        "<b>Endereços IP</b>, <b>DNS</b>, protocolos e <b>e-mail</b>",
        "<b>Web</b>, <b>navegadores</b> e <b>busca</b>",
      ], { left: 900, top: 520, width: 900 }, [c.t(2), c.t(3), em(3, "e os modelos"), c.t(4), c.t(5)]);
      c.bit.pular(em(5, "Vamos lá"));
    },
  },

  // ------------------------------------------------ Redes de computadores
  {
    id: "abrangencia",
    visual: "Definição de rede com três nós ligados por uma linha tracejada (Arquivos, Impressoras, Internet). Depois, círculos concêntricos crescem do centro — PAN (fone), LAN (prédio), MAN (cidade), WAN (globo) — enquanto à direita entra um cartão por tipo, com o nome em inglês e o exemplo. Faixa “LAN sem fio = WLAN (Wi-Fi)”.",
    secao: "Redes de computadores",
    bit: BIT_CANTO,
    falas: [
      "Uma rede de computadores é um conjunto de dispositivos interligados que compartilham dados e recursos, como arquivos, impressoras e o acesso à internet.",
      "Pela abrangência, a menor é a PAN, a rede pessoal: alcança poucos metros, como o celular ligado a um fone Bluetooth.",
      "A LAN é a rede local, de um prédio, escritório ou residência, como a rede de uma repartição pública. Sem fio, ela se chama WLAN, normalmente com Wi-Fi.",
      "A MAN é a rede metropolitana: cobre uma cidade, como a rede que liga as unidades de uma prefeitura.",
      "E a WAN alcança países e continentes. O maior exemplo é a própria internet.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      c.titulo("Redes de computadores", "Tipos de rede", TITULO, c.t(0), { medio: true });
      const def = c.texto("Dispositivos <b>interligados</b> que compartilham <b>dados</b> e <b>recursos</b>.", { left: 140, top: 320, width: 1400 }, c.t(0, 0.4));
      const linha = c.novo(`<svg class="abs" style="left:0;top:0;width:1920px;height:1080px" viewBox="0 0 1920 1080"><path d="M340 620H1260" stroke="var(--cor-media)" stroke-width="8" stroke-dasharray="4 18" stroke-linecap="round" fill="none"/></svg>`);
      c.desenhar(linha.querySelector("path"), em(0, "interligados"), 1.2);
      const nos = [["documento", "Arquivos", "arquivos"], ["impressora", "Impressoras", "impressoras"], ["globo", "Internet", "o acesso"]]
        .map((r, i) => c.no({ icone: r[0], titulo: r[1] }, { left: 140 + i * 460, top: 470, width: 400, height: 300 }, em(0, r[2])));
      [def, linha, ...nos].forEach((e) => c.sai(e, c.t(1) - 0.4));

      const cx = 500, cy = 610;
      const tipos = [
        { sigla: "PAN", r: 80, ic: "fone", nome: "Personal Area Network", ex: "poucos metros · fone Bluetooth" },
        { sigla: "LAN", r: 150, ic: "predio", nome: "Local Area Network", ex: "prédio, escritório ou casa" },
        { sigla: "MAN", r: 220, ic: "cidade", nome: "Metropolitan Area Network", ex: "uma cidade · prefeitura" },
        { sigla: "WAN", r: 290, ic: "globo", nome: "Wide Area Network", ex: "países e continentes · internet" },
      ];
      tipos.forEach((k, i) => {
        const t = c.t(i + 1);
        const anel = c.novo(`<div class="abs" style="left:${cx - k.r}px;top:${cy - k.r}px;width:${2 * k.r}px;height:${2 * k.r}px;border-radius:50%;background:color-mix(in srgb, var(--cor) ${16 - i * 3}%, white);border:4px solid var(--cor-media);z-index:${10 - i}"></div>`);
        c.entra(anel, t, "pop");
        if (i === 0) {
          icn(c, k.ic, cx - 32, cy - 62, 64, t + 0.3).style.zIndex = 20;
          const s = c.novo(`<div class="abs" style="left:${cx - 60}px;top:${cy + 8}px;width:120px;text-align:center;font:800 32px var(--sans);color:var(--cor);z-index:20">${k.sigla}</div>`);
          c.entra(s, t + 0.3, "fade");
        } else {
          const m = (tipos[i - 1].r + k.r) / 2;
          const s = c.novo(`<div class="abs" style="left:${cx - 60}px;top:${cy - m - 20}px;width:120px;text-align:center;font:800 30px var(--sans);color:var(--cor);z-index:20">${k.sigla}</div>`);
          c.entra(s, t + 0.3, "fade");
          icn(c, k.ic, cx - m - 25, cy - 25, 50, t + 0.4).style.zIndex = 20;
        }
        const row = c.novo(`<div class="cartao" style="display:flex;align-items:center;gap:24px;padding:20px 28px">
          <div style="font:800 44px var(--sans);color:var(--cor);width:110px;flex-shrink:0">${k.sigla}</div>
          <div><h3 style="font-size:28px;margin:0">${k.nome}</h3><p style="font-size:24px;margin-top:4px">${k.ex}</p></div></div>`,
        { left: 900, top: 330 + i * 140, width: 650, height: 120 });
        c.entra(row, t + 0.2, "direita");
      });
      c.chave("LAN sem fio = <em>WLAN</em> (Wi-Fi)", em(2, "Sem fio"), c.t(3) - 0.2);
    },
  },
  {
    id: "intranet",
    visual: "Três cartões: Internet (globo), Intranet (prédio, com cadeado) e Extranet (pessoas), com seta da intranet para a extranet. Quadro âmbar “Pegadinha de banca” sobre a intranet; no fim, uma seta âmbar com a etiqueta VPN liga a internet à intranet.",
    secao: "Redes de computadores",
    bit: BIT_CANTO,
    falas: [
      "A internet é a rede mundial e pública, baseada no conjunto de protocolos TCP/IP.",
      "A intranet é a rede privada de uma organização. Ela usa as mesmas tecnologias da internet, como TCP/IP, HTTP e navegador, mas com acesso restrito aos colaboradores.",
      "Já a extranet é a parte da intranet liberada para usuários externos autorizados, como fornecedores e parceiros.",
      "Pegadinha: dizer que a intranet não usa os protocolos da internet está errado. O que muda é o acesso, que é restrito. E dá até para acessar a intranet de fora, por uma VPN.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      c.titulo("Redes de computadores", "Internet, intranet e extranet", TITULO, c.t(0), { medio: true });
      const k = [
        { icone: "globo", titulo: "Internet", texto: "Rede <b>mundial</b> e <b>pública</b>, baseada no <b>TCP/IP</b>." },
        { icone: "predio", titulo: "Intranet", texto: "Rede <b>privada</b>: mesmas tecnologias da internet, acesso <b>restrito</b>." },
        { icone: "pessoas", titulo: "Extranet", texto: "Parte da intranet aberta a <b>externos autorizados</b>: fornecedores e parceiros." },
      ];
      const tempos = [c.t(0, 0.5), c.t(1), c.t(2)];
      k.forEach((x, i) => c.cartao(x, { left: 140 + i * 560, top: 310, width: 440, height: 400 }, tempos[i]));
      icn(c, "cadeado", 1070, 340, 58, em(1, "acesso restrito"));
      c.seta(1150, 510, 1250, 510, c.t(2, 0.6));
      const q = c.quadro("prova", "“A intranet não usa os protocolos da internet.” <b>Errado:</b> ela usa TCP/IP, HTTP e navegador. Muda o <b>acesso</b>, que é restrito.", { left: 140, top: 745, width: 1400 }, c.t(3));
      q.querySelector("p").style.fontSize = "34px";
      c.seta(590, 540, 690, 540, em(3, "por uma VPN"), { cor: "var(--prova)" });
      pilula(c, "VPN", { left: 594, top: 470, fontSize: "24px", padding: "6px 14px", background: "var(--prova-fundo)", color: "var(--prova)" }, em(3, "por uma VPN", 0.4));
    },
  },
  {
    id: "topologias",
    visual: "Quatro cartões, um por frase, cada um com um minidiagrama desenhado: Barramento (cabo único), Anel (círculo), Estrela (nós ligados a um switch central, com o selo “a mais usada”) e Malha (vários caminhos).",
    secao: "Redes de computadores",
    bit: BIT_CANTO,
    falas: [
      "A topologia é o desenho das ligações da rede. No barramento, todos ficam ligados a um único cabo, e uma falha nesse cabo derruba a rede.",
      "No anel, cada dispositivo se liga ao próximo, fechando um círculo, e os dados passam por vários nós.",
      "Na estrela, todos se ligam a um equipamento central, o switch. É a mais usada, mas, se o equipamento central falhar, a rede para.",
      "E na malha, vários caminhos interligam os dispositivos: alta tolerância a falhas, mas custo maior.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      c.titulo("Topologias de rede", "Como os dispositivos se ligam", TITULO, c.t(0), { medio: true });
      const pent = (r) => [-90, -18, 54, 126, 198].map((a) => [150 + r * Math.cos((a * Math.PI) / 180), 88 + r * Math.sin((a * Math.PI) / 180)]);
      const p5 = pent(66);
      const pares = [];
      for (let a = 0; a < 5; a++) for (let b = a + 1; b < 5; b++) pares.push([p5[a], p5[b]]);
      const diag = [
        { linhas: ["M20 130H280", "M50 50V130", "M117 50V130", "M183 50V130", "M250 50V130"], nos: [[50, 50], [117, 50], [183, 50], [250, 50]] },
        { linhas: ["M150 22A66 66 0 1 1 149.9 22"], nos: p5 },
        { linhas: p5.map(([x, y]) => `M150 88L${x} ${y}`), nos: p5, centro: true },
        { linhas: pares.map(([a, b]) => `M${a[0]} ${a[1]}L${b[0]} ${b[1]}`), nos: p5 },
      ];
      const info = [
        ["Barramento", "Todos em um <b>único cabo</b>. Falha no cabo derruba a rede.", em(0, "No barramento")],
        ["Anel", "Cada um ligado ao <b>próximo</b>. Dados passam por vários nós.", c.t(1)],
        ["Estrela", "Todos ligados a um <b>switch</b> central. Se ele falhar, a rede para.", c.t(2)],
        ["Malha", "<b>Vários caminhos</b>: alta tolerância a falhas, custo maior.", c.t(3)],
      ];
      info.forEach((k, i) => {
        const d = diag[i];
        const e = c.novo(`<div class="cartao" style="left:${140 + i * 415}px;top:310px;width:385px;height:430px;padding:28px 30px">
          <svg viewBox="0 0 300 175" style="width:325px;height:190px">
            ${d.linhas.map((l) => `<path class="lin" d="${l}" stroke="var(--cor-media)" stroke-width="7" stroke-linecap="round" fill="none"/>`).join("")}
            ${d.centro ? `<rect x="131" y="69" width="38" height="38" rx="8" fill="var(--serie)"/>` : ""}
            ${d.nos.map(([x, y]) => `<circle class="nó" cx="${x}" cy="${y}" r="16" fill="var(--cor)" stroke="#fff" stroke-width="4"/>`).join("")}
          </svg>
          <h3 style="margin-top:14px;font-size:34px">${k[0]}</h3><p style="font-size:24px">${k[1]}</p></div>`);
        c.entra(e, k[2], "baixo");
        e.querySelectorAll(".lin").forEach((l, j) => c.desenhar(l, k[2] + 0.4 + j * 0.06, 0.7));
        if (i === 2) {
          c.tl.set(e, { outline: `6px solid ${ROXO}` }, em(2, "É a mais usada"));
          pilula(c, "a mais usada", { left: 140 + i * 415 + 100, top: 284, background: "var(--cor)", color: "#fff", fontSize: "24px", padding: "6px 18px", zIndex: 3 }, em(2, "É a mais usada"));
        }
      });
    },
  },
  {
    id: "equipamentos",
    visual: "Grade de seis cartões com ícones, cada um na frase que o cita: Placa de rede (MAC), Hub, Switch, Roteador, Modem e Ponto de acesso. Embaixo, três cartões de padrões: Ethernet, Wi-Fi e Bluetooth; depois eles saem e entra o quadro verde “Memorize”.",
    secao: "Redes de computadores",
    bit: BIT_CANTO,
    falas: [
      "Agora, os equipamentos. A placa de rede conecta o computador à rede, e cada uma tem um endereço físico único: o endereço MAC.",
      "O hub, um equipamento antigo, repete os dados para todas as portas. Já o switch envia os dados só para a porta do destinatário, usando o endereço MAC.",
      "O roteador interliga redes diferentes e escolhe o caminho dos pacotes usando o endereço IP.",
      "O modem converte o sinal da operadora, de fibra, cabo ou telefone, para a rede do usuário. E o ponto de acesso cria a rede sem fio Wi-Fi.",
      "Os padrões de conexão mais citados são a Ethernet, rede cabeada do padrão IEEE 802.3, com conector RJ-45; o Wi-Fi, rede sem fio do padrão 802.11; e o Bluetooth, de curto alcance.",
      "Memorize: o hub espalha para todos; o switch entrega para quem deve receber, dentro da rede local; e o roteador liga redes diferentes, como a sua casa e a internet.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      c.titulo("Equipamentos de rede", "Quem faz o quê", TITULO, c.t(0), { medio: true });
      const eq = [
        ["placa", "Placa de rede (NIC)", "Conecta o computador à rede. Endereço físico único: <b>MAC</b>.", em(0, "A placa")],
        ["hub", "Hub", "Repete os dados para <b>todas</b> as portas (antigo).", c.t(1)],
        ["switch", "Switch", "Envia só para a porta do <b>destinatário</b>, pelo MAC.", em(1, "Já o switch")],
        ["roteador", "Roteador", "Liga <b>redes diferentes</b> e escolhe o caminho, pelo IP.", c.t(2)],
        ["modem", "Modem", "Converte o sinal da <b>operadora</b> (fibra, cabo, telefone).", c.t(3)],
        ["antena", "Ponto de acesso", "Cria a rede sem fio <b>Wi-Fi</b>.", em(3, "E o ponto")],
      ];
      eq.forEach((k, i) => cartaoLado(c, k[0], k[1], k[2], { left: 140 + (i % 3) * 470, top: 300 + Math.floor(i / 3) * 205, width: 450, height: 190 }, k[3], { h3: 28, p: 22 }));
      const padroes = [
        ["cabo", "Ethernet", "cabeada · IEEE 802.3 · RJ-45", em(4, "a Ethernet")],
        ["wifi", "Wi-Fi", "sem fio · IEEE 802.11", em(4, "o Wi-Fi")],
        ["celular", "Bluetooth", "curto alcance", em(4, "e o Bluetooth")],
      ].map((k, i) => cartaoLado(c, k[0], k[1], k[2], { left: 140 + i * 470, top: 730, width: 450, height: 130 }, k[3], { icone: 64, h3: 28, p: 22, padding: "18px 24px" }));
      padroes.forEach((e) => c.sai(e, c.t(5) - 0.4));
      c.quadro("dica", "<b>Hub</b> espalha para todos · <b>switch</b> entrega a quem deve receber, na rede local · <b>roteador</b> liga redes diferentes (casa ↔ internet).", { left: 140, top: 725, width: 1400 }, c.t(5)).querySelector("p").style.fontSize = "34px";
    },
  },

  // ------------------------------------------------ Meios de transmissão
  {
    id: "meios",
    visual: "Quatro cartões, um por meio: Par trançado (cabo com conector RJ-45), Fibra óptica (fios de luz), Cabo coaxial (corte em camadas) e Sem fio (sinal Wi-Fi). Abaixo da fibra surgem as etiquetas “monomodo → longas distâncias” e “multimodo → distâncias menores”.",
    secao: "Meios de transmissão",
    bit: BIT_CANTO,
    falas: [
      "Os dados viajam por diferentes meios. O par trançado leva sinais elétricos em pares de fios trançados, com conector RJ-45. É o mais usado em redes locais, com até cerca de 100 metros por cabo.",
      "A fibra óptica transmite pulsos de luz: tem altíssima velocidade, alcança longas distâncias e é imune a interferência eletromagnética.",
      "Ela pode ser monomodo, para longas distâncias, ou multimodo, para distâncias menores.",
      "O cabo coaxial tem um condutor central blindado e é usado na TV a cabo e na internet por cabo.",
      "E os meios sem fio usam ondas de rádio: Wi-Fi, Bluetooth, redes móveis 4G e 5G, e satélite.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      c.titulo("Meios de transmissão", "Por onde os dados viajam", TITULO, c.t(0), { medio: true });
      const meios = [
        ["cabo", "Par trançado (UTP)", "Sinais <b>elétricos</b> em fios trançados · RJ-45 · o <b>mais usado</b> em redes locais · até cerca de <b>100 m</b>", em(0, "O par trançado")],
        ["fibra", "Fibra óptica", "Pulsos de <b>luz</b> · altíssima velocidade · longas distâncias · <b>imune</b> a interferência eletromagnética", c.t(1)],
        ["coaxial", "Cabo coaxial", "Condutor central <b>blindado</b> · TV a cabo e internet por cabo", c.t(3)],
        ["wifi", "Sem fio", "Ondas de <b>rádio</b> · Wi-Fi, Bluetooth, 4G e 5G, satélite", c.t(4)],
      ];
      meios.forEach((k, i) => {
        const e = c.cartao({ icone: k[0], titulo: k[1], texto: k[2] }, { left: 140 + i * 415, top: 300, width: 385, height: 440, padding: "30px" }, k[3]);
        e.querySelector("h3").style.fontSize = "30px";
        e.querySelector("p").style.fontSize = "24px";
        e.querySelector(".icone").style.cssText = "width:84px;height:84px;margin-bottom:16px";
      });
      pilula(c, "<b>monomodo</b> → longas distâncias", { left: 555, top: 766, fontSize: "26px" }, em(2, "monomodo"), "baixo");
      pilula(c, "<b>multimodo</b> → distâncias menores", { left: 555, top: 836, fontSize: "26px" }, em(2, "multimodo"), "baixo");
    },
  },
  {
    id: "wifi",
    visual: "Três colunas. Padrões: barras crescentes Wi-Fi 4 (802.11n), Wi-Fi 5 (802.11ac) e Wi-Fi 6 (802.11ax). Frequência: cartões 2,4 GHz (barra de alcance longa) e 5 GHz (barra curta, mais rápida). Segurança: WEP em vermelho (✗), WPA2 e WPA3 em verde (✓). Quadro âmbar sobre o SSID.",
    secao: "Meios de transmissão",
    bit: BIT_CANTO,
    falas: [
      "No Wi-Fi, os padrões mais citados são o Wi-Fi 4, ou 802.11n; o Wi-Fi 5, ou 802.11ac; e o Wi-Fi 6, ou 802.11ax. Cada geração é mais rápida e eficiente.",
      "A frequência de 2,4 GHz tem maior alcance e atravessa melhor as paredes, mas sofre mais interferência.",
      "A de 5 GHz é mais rápida, porém tem menor alcance.",
      "Na segurança, o WEP é obsoleto e inseguro. Use o WPA2 ou, de preferência, o WPA3, com senha forte.",
      "Pegadinha: esconder o nome da rede, o SSID, não é uma medida de segurança eficaz, porque a rede continua detectável. O que protege é a criptografia WPA2 ou WPA3 com senha forte.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      c.titulo("Meios de transmissão", "Wi-Fi: padrões, frequência e segurança", TITULO, c.t(0), { medio: true });
      const rot = (txt, x, t) => c.entra(c.novo(`<div class="abs rotulo" style="left:${x}px;top:300px">${txt}</div>`), t, "fade");
      rot("Padrões", 140, c.t(0, 0.5));
      [["Wi-Fi 4", "802.11n", 150, "Wi-Fi 4"], ["Wi-Fi 5", "802.11ac", 220, "o Wi-Fi 5"], ["Wi-Fi 6", "802.11ax", 290, "o Wi-Fi 6"]].forEach((b, i) => {
        const e = c.novo(`<div class="abs" style="left:${140 + i * 150}px;top:${690 - b[2]}px;width:135px;height:${b[2]}px;border-radius:18px 18px 6px 6px;background:color-mix(in srgb, var(--cor) ${45 + i * 27}%, white);color:#fff;text-align:center;padding-top:16px">
          <div style="font:800 26px var(--sans)">${b[0]}</div><div style="font:600 20px var(--mono);margin-top:4px">${b[1]}</div></div>`);
        c.entra(e, em(0, b[3]), "baixo");
      });
      c.texto("cada geração: <b>mais rápida</b>", { left: 140, top: 705, fontSize: "26px" }, em(0, "Cada geração"));

      rot("Frequência", 650, c.t(1));
      const freq = (y, ghz, txt, larg, t) => {
        const e = c.novo(`<div class="cartao" style="left:650px;top:${y}px;width:480px;height:170px;padding:22px 28px">
          <h3 style="margin:0;font-size:36px;color:var(--cor)">${ghz}</h3><p style="font-size:22px;margin-top:4px">${txt}</p>
          <div style="display:flex;align-items:center;gap:12px;margin-top:12px;font:600 20px var(--sans);color:var(--texto-fraco)">alcance
          <span style="display:block;height:12px;width:${larg}px;border-radius:6px;background:var(--cor)"></span></div></div>`);
        return c.entra(e, t, "baixo");
      };
      freq(345, "2,4 GHz", "<b>maior alcance</b>, atravessa paredes · <b>mais interferência</b>", 300, c.t(1, 0.3));
      freq(530, "5 GHz", "<b>mais rápida</b> · <b>menor alcance</b>", 130, c.t(2));

      rot("Segurança", 1190, c.t(3));
      [["✗", "WEP", "obsoleto e inseguro", "#c2412f", c.t(3, 0.3)], ["✓", "WPA2", "seguro, com senha forte", "#2f8a5b", em(3, "Use o WPA2")], ["★", "WPA3", "o preferível", "#2f8a5b", em(3, "o WPA3")]].forEach((s, i) => {
        const e = c.novo(`<div class="cartao" style="left:1190px;top:${345 + i * 120}px;width:350px;height:105px;padding:16px 24px;display:flex;gap:18px;align-items:center;border-left:10px solid ${s[3]}">
          <div style="font:800 40px var(--sans);color:${s[3]};width:34px">${s[0]}</div><div><h3 style="margin:0;font-size:30px">${s[1]}</h3><p style="font-size:21px">${s[2]}</p></div></div>`);
        c.entra(e, s[4], "esquerda");
      });
      c.quadro("prova", "Esconder o <b>SSID</b> (nome da rede) <b>não</b> é segurança eficaz: a rede continua detectável. O que protege é <b>WPA2/WPA3</b> com senha forte.", { left: 140, top: 760, width: 1400 }, c.t(4)).querySelector("p").style.fontSize = "32px";
    },
  },
  {
    id: "acesso",
    visual: "Cinco nós de acesso à internet: ADSL (telefone), Cabo (coaxial), Fibra FTTH (em destaque), Rede móvel (celular) e Satélite. Depois, título “Modos de transmissão” e três linhas: Simplex (antena → TV, uma seta), Half-duplex (setas que se alternam) e Full-duplex (setas nos dois sentidos ao mesmo tempo).",
    secao: "Meios de transmissão",
    bit: BIT_CANTO,
    falas: [
      "E como a internet chega até você? O ADSL usa a linha telefônica e é uma tecnologia antiga e mais lenta. A internet a cabo usa a rede de TV a cabo.",
      "A fibra óptica até a residência, o FTTH, é hoje a mais comum nas cidades. Há ainda a rede móvel, 4G e 5G, e o satélite, que atende locais remotos.",
      "Quanto ao sentido, a transmissão pode ser simplex: só em um sentido, como na transmissão de rádio e TV.",
      "Half-duplex: nos dois sentidos, mas um de cada vez, como no rádio comunicador, o walkie-talkie.",
      "Ou full-duplex: nos dois sentidos ao mesmo tempo, como em uma ligação telefônica.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      const t1 = c.titulo("Meios de transmissão", "Formas de acesso à internet", TITULO, c.t(0), { medio: true });
      const acessos = [
        ["telefone", "ADSL", "linha telefônica · antiga e lenta", em(0, "O ADSL")],
        ["coaxial", "Cabo", "rede de TV a cabo", em(0, "A internet a cabo")],
        ["fibra", "Fibra (FTTH)", "a mais comum nas cidades", c.t(1)],
        ["celular", "Rede móvel", "4G e 5G", em(1, "a rede móvel")],
        ["satelite", "Satélite", "locais remotos", em(1, "e o satélite")],
      ];
      const nos = acessos.map((k, i) => {
        const e = c.no({ icone: k[0], titulo: k[1], texto: k[2] }, { left: 140 + i * 280, top: 340, width: 265, height: 330, padding: "20px" }, k[3]);
        e.querySelector("strong").style.fontSize = "32px";
        e.querySelector("span").style.fontSize = "24px";
        return e;
      });
      c.tl.set(nos[2], { outline: `6px solid ${ROXO}` }, em(1, "é hoje"));
      [t1, ...nos].forEach((e) => c.sai(e, c.t(2) - 0.4));

      c.titulo("Meios de transmissão", "Modos de transmissão", TITULO, c.t(2), { medio: true });
      const modos = [
        ["Simplex", "só em <b>um sentido</b>", "rádio e TV", "antena", "monitor"],
        ["Half-duplex", "dois sentidos, <b>um de cada vez</b>", "walkie-talkie", "celular", "celular"],
        ["Full-duplex", "dois sentidos <b>ao mesmo tempo</b>", "ligação telefônica", "telefone", "telefone"],
      ];
      modos.forEach((m, i) => {
        const y = 320 + i * 195, t = c.t(2 + i);
        const e = c.novo(`<div class="cartao" style="left:140px;top:${y}px;width:560px;height:165px;padding:22px 30px">
          <h3 style="margin:0;font-size:34px">${m[0]}</h3><p style="font-size:26px">${m[1]}</p>
          <div class="pilula" style="margin-top:8px;font-size:22px;padding:4px 16px">ex.: ${m[2]}</div></div>`);
        c.entra(e, t, "esquerda");
        icn(c, m[3], 770, y + 28, 110, t + 0.4);
        icn(c, m[4], 1370, y + 28, 110, t + 0.6);
        const cy = y + 82;
        if (i === 0) c.seta(905, cy, 1350, cy, t + 1);
        else {
          const a = c.seta(905, cy - 20, 1350, cy - 20, t + 1);
          const b = c.seta(1350, cy + 20, 905, cy + 20, t + 1.4);
          if (i === 1) {
            c.tl.fromTo(a, { opacity: 1 }, { opacity: 0.12, duration: 0.6, repeat: 5, yoyo: true, immediateRender: false }, t + 2.2);
            c.tl.fromTo(b, { opacity: 0.12 }, { opacity: 1, duration: 0.6, repeat: 5, yoyo: true, immediateRender: false }, t + 2.2);
          }
        }
      });
    },
  },

  // ------------------------------------------------ Modelos OSI e TCP/IP
  {
    id: "osi",
    visual: "Sete espaços tracejados numerados formam uma pilha. As camadas do OSI entram de baixo para cima, cada uma na frase que a explica, com função e exemplos (Física: cabos, hub; Enlace: MAC, switch; Rede: IP, roteador; Transporte: TCP, UDP; Sessão; Apresentação: TLS; Aplicação: HTTP, SMTP, FTP, DNS). Quadro verde “Memorize: FERTSAA” à direita, com as iniciais destacadas.",
    secao: "Modelos OSI e TCP/IP",
    bit: BIT_CANTO,
    falas: [
      "Para organizar a comunicação em rede, existe o modelo OSI, da ISO. Ele é um modelo de referência teórico, que divide a comunicação em sete camadas.",
      "Na base, a camada física transmite os bits pelo meio físico: cabos, conectores, sinais e o hub.",
      "A de enlace cuida da comunicação entre dispositivos vizinhos, com o endereço MAC. É a camada da Ethernet e do switch.",
      "A camada de rede faz o endereçamento lógico e o roteamento. É a camada do IP e do roteador.",
      "A de transporte faz a entrega fim a fim, a segmentação e o controle de erros, com o TCP e o UDP.",
      "A de sessão abre, mantém e encerra a comunicação. E a de apresentação cuida do formato, da compressão e da criptografia, como o TLS.",
      "No topo, a camada de aplicação oferece os serviços usados pelos programas, como HTTP, SMTP, FTP e DNS.",
      "Memorize, da camada 1 para a 7: física, enlace, rede, transporte, sessão, apresentação e aplicação. A sigla é FERTSAA.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      c.titulo("Modelo OSI", "Sete camadas", TITULO, c.t(0), { medio: true });
      const y = (n) => 820 - (n - 1) * 78;
      for (let n = 1; n <= 7; n++) {
        const s = c.novo(`<div class="abs" style="left:140px;top:${y(n)}px;width:1020px;height:68px;border-radius:18px;border:3px dashed var(--cor-media);padding-left:26px;display:flex;align-items:center;font:800 26px var(--sans);color:var(--cor-media)">${n}</div>`);
        c.entra(s, em(0, "sete camadas", (n - 1) * 0.12), "fade");
      }
      const camadas = [
        [1, "Física", "bits pelo meio físico", "cabos, sinais, hub", c.t(1)],
        [2, "Enlace", "dispositivos vizinhos · endereço MAC", "Ethernet, switch", c.t(2)],
        [3, "Rede", "endereçamento lógico e roteamento", "IP, roteador", c.t(3)],
        [4, "Transporte", "entrega fim a fim · controle de erros", "TCP, UDP", c.t(4)],
        [5, "Sessão", "abre, mantém e encerra", "controle de diálogo", c.t(5)],
        [6, "Apresentação", "formato, compressão, criptografia", "TLS", em(5, "E a de apresentação")],
        [7, "Aplicação", "serviços usados pelos programas", "HTTP, SMTP, FTP, DNS", c.t(6)],
      ];
      camadas.forEach(([n, nome, fn, ex, t]) => {
        const e = c.novo(`<div class="cartao" style="left:140px;top:${y(n)}px;width:1020px;height:68px;padding:0 20px;display:flex;align-items:center;gap:18px;border-radius:18px;z-index:2">
          <div style="width:44px;height:44px;border-radius:12px;background:var(--cor);color:#fff;display:grid;place-items:center;font:800 24px var(--sans);flex-shrink:0">${n}</div>
          <div style="width:220px;font:800 29px var(--sans);flex-shrink:0"><span class="ini">${nome[0]}</span>${nome.slice(1)}</div>
          <div style="flex:1;font-size:22px;color:var(--texto-suave);line-height:1.2">${fn}</div>
          <div class="pilula" style="font-size:21px;padding:5px 14px;white-space:nowrap">${ex}</div></div>`);
        c.entra(e, t, "esquerda");
      });
      c.tl.to(c.el.querySelectorAll(".ini"), { color: ROXO, duration: 0.3, stagger: 0.25 }, em(7, "física"));
      const q = c.quadro("dica", "Da 1 para a 7:<br><b>F</b>ísica · <b>E</b>nlace · <b>R</b>ede · <b>T</b>ransporte · <b>S</b>essão · <b>A</b>presentação · <b>A</b>plicação<br><b style=\"font-size:46px;letter-spacing:.06em;color:var(--dica)\">FERTSAA</b>", { left: 1200, top: 352, width: 350, padding: "32px 30px" }, c.t(7));
      q.querySelector("p").style.fontSize = "30px";
    },
  },
  {
    id: "tcpip",
    visual: "À esquerda, as 7 camadas do OSI em coluna. À direita, as 4 camadas do TCP/IP entram uma a uma, cada uma da altura das camadas OSI que agrupa, com linhas de ligação e etiquetas de protocolos: Aplicação (HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DNS, SSH), Transporte (TCP, UDP), Internet (IP, ICMP) e Acesso à rede (Ethernet, Wi-Fi).",
    secao: "Modelos OSI e TCP/IP",
    bit: BIT_CANTO,
    falas: [
      "Na prática, a internet funciona com o modelo TCP/IP, que agrupa essas funções em apenas quatro camadas.",
      "A camada de aplicação do TCP/IP reúne aplicação, apresentação e sessão do OSI. É onde ficam HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DNS e SSH.",
      "A de transporte equivale à do OSI, com o TCP e o UDP. E a camada de internet equivale à de rede, com o IP e o ICMP.",
      "Por fim, a camada de acesso à rede junta enlace e física, com a Ethernet e o Wi-Fi.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      c.titulo("Modelo TCP/IP", "Quatro camadas na prática", TITULO, c.t(0), { medio: true });
      const Y0 = 340, P = 78;
      c.entra(c.novo(`<div class="abs rotulo" style="left:140px;top:290px">OSI · 7 camadas</div>`), c.t(0, 0.4), "fade");
      ["Aplicação", "Apresentação", "Sessão", "Transporte", "Rede", "Enlace", "Física"].forEach((n, i) => {
        const e = c.novo(`<div class="abs" style="left:140px;top:${Y0 + i * P}px;width:440px;height:70px;border-radius:16px;background:var(--cor-suave);display:flex;align-items:center;gap:16px;padding:0 22px;font:700 27px var(--sans)">
          <span style="color:var(--cor);width:24px">${7 - i}</span>${n}</div>`);
        c.entra(e, c.t(0, 0.6 + i * 0.12), "esquerda");
      });
      c.entra(c.novo(`<div class="abs rotulo" style="left:780px;top:290px">TCP/IP · 4 camadas</div>`), em(0, "quatro camadas"), "fade");
      const pil = (l) => l.map((p) => `<span class="pilula" style="font-size:21px;padding:4px 14px;background:#fff">${p}</span>`).join("");
      const tcp = [
        { nome: "Aplicação", eq: "= Aplicação + Apresentação + Sessão", prot: ["HTTP", "HTTPS", "FTP", "SMTP", "POP3", "IMAP", "DNS", "SSH"], de: 0, ate: 2, t: c.t(1) },
        { nome: "Transporte", eq: "= Transporte", prot: ["TCP", "UDP"], de: 3, ate: 3, t: c.t(2) },
        { nome: "Internet", eq: "= Rede", prot: ["IP", "ICMP"], de: 4, ate: 4, t: em(2, "E a camada de internet") },
        { nome: "Acesso à rede", eq: "= Enlace + Física", prot: ["Ethernet", "Wi-Fi"], de: 5, ate: 6, t: c.t(3) },
      ];
      tcp.forEach((k) => {
        const top = Y0 + k.de * P, h = (k.ate - k.de + 1) * P - 8;
        const alto = h > 100;
        const e = c.novo(`<div class="abs" style="left:780px;top:${top}px;width:760px;height:${h}px;border-radius:16px;background:var(--cor);color:#fff;padding:${alto ? "20px 26px" : "0 22px"};display:flex;${alto ? "flex-direction:column;justify-content:center;gap:10px" : "align-items:center;gap:18px"}">
          <div style="display:flex;align-items:baseline;gap:16px"><span style="font:800 30px var(--sans)">${k.nome}</span><span style="font:600 21px var(--sans);opacity:.85">${k.eq}</span></div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;${alto ? "" : "margin-left:auto"}">${pil(k.prot)}</div></div>`);
        c.entra(e, k.t, "direita");
        const linhas = [];
        for (let i = k.de; i <= k.ate; i++) linhas.push(`<path d="M590 ${Y0 + i * P + 35}H772" stroke="var(--cor-media)" stroke-width="5" stroke-linecap="round" stroke-dasharray="2 12"/>`);
        const s = c.novo(`<svg class="abs" style="left:0;top:0;width:1920px;height:1080px" viewBox="0 0 1920 1080">${linhas.join("")}</svg>`);
        c.entra(s, k.t + 0.3, "fade");
      });
    },
  },
  {
    id: "tcp-udp",
    visual: "Dois cartões. TCP: pacotes 1, 2, 3, 4 chegam em ordem, com ✓, e itens (orientado à conexão, garante entrega e ordem, mais lento, web/e-mail/arquivos). UDP: pacotes 1, 3, ✗, 2 (fora de ordem e um perdido), e itens (sem conexão, não garante, mais rápido, streaming/jogos/voz/DNS). Quadro âmbar “Pegadinha de banca”.",
    secao: "Modelos OSI e TCP/IP",
    bit: BIT_CANTO,
    falas: [
      "Na camada de transporte, a comparação favorita das bancas: TCP contra UDP. O TCP é orientado à conexão: estabelece a conexão antes de enviar.",
      "Ele garante a entrega e a ordem dos pacotes, reenviando os perdidos. Por isso, é mais lento, e é usado em páginas web, e-mail e transferência de arquivos.",
      "O UDP é sem conexão e não garante entrega nem ordem. Em troca, é mais rápido, com menos sobrecarga.",
      "Ele é usado no streaming ao vivo, nos jogos online, nas chamadas de voz e no DNS.",
      "Pegadinha: o UDP não garante a entrega dos pacotes; quem garante é o TCP. O UDP é usado quando a velocidade importa mais do que a confiabilidade.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      c.titulo("Camada de transporte", "TCP × UDP", TITULO, c.t(0), { medio: true });
      const pac = (n) => n === "x"
        ? `<div class="pac" style="width:64px;height:52px;border-radius:12px;border:3px dashed var(--errado);color:var(--errado);display:grid;place-items:center;font:800 28px var(--sans)">✗</div>`
        : `<div class="pac" style="width:64px;height:52px;border-radius:12px;background:var(--cor);color:#fff;display:grid;place-items:center;font:800 26px var(--mono)">${n}</div>`;
      const cartao = (x, nome, pacotes, fim, itens) => c.novo(`<div class="cartao" style="left:${x}px;top:300px;width:680px;height:420px;padding:32px 40px">
        <h3 style="font-size:52px;margin:0;color:var(--cor)">${nome}</h3>
        <div style="display:flex;gap:14px;align-items:center;margin:16px 0 20px">${pacotes.map(pac).join("")}${fim}</div>
        <ul style="list-style:none;font-size:28px;line-height:1.5;color:var(--texto-suave)">${itens.map((i) => `<li class="it">${i}</li>`).join("")}</ul></div>`);
      const tcp = cartao(140, "TCP", [1, 2, 3, 4], `<div class="fim" style="font:800 40px var(--sans);color:var(--certo);margin-left:10px">✓ em ordem</div>`,
        ["orientado à <b>conexão</b>", "<b>garante</b> entrega e ordem (reenvia)", "mais <b>lento</b>", "web, e-mail, arquivos"]);
      const udp = cartao(880, "UDP", [1, 3, "x", 2], `<div class="fim" style="font:700 26px var(--sans);color:var(--errado);margin-left:10px">perdido / fora de ordem</div>`,
        ["<b>sem</b> conexão", "<b>não garante</b> entrega nem ordem", "mais <b>rápido</b>, menos sobrecarga", "streaming, jogos, voz, DNS"]);
      tcp.querySelector(".fim").style.fontSize = "30px";
      c.entra(tcp, c.t(0, 0.3), "esquerda");
      c.entra(udp, em(0, "UDP"), "direita");
      const [ti, ui] = [tcp, udp].map((e) => [...e.querySelectorAll(".it")]);
      [em(0, "orientado"), c.t(1), em(1, "é mais lento"), em(1, "é usado")].forEach((t, i) => c.entra(ti[i], t, "esquerda"));
      [c.t(2), em(2, "não garante"), em(2, "Em troca"), c.t(3)].forEach((t, i) => c.entra(ui[i], t, "esquerda"));
      tcp.querySelectorAll(".pac").forEach((p, i) => c.entra(p, c.t(1, 0.3 + i * 0.35), "esquerda"));
      c.entra(tcp.querySelector(".fim"), c.t(1, 1.9), "pop");
      udp.querySelectorAll(".pac").forEach((p, i) => c.entra(p, c.t(2, 0.3 + i * 0.35), "esquerda"));
      c.entra(udp.querySelector(".fim"), c.t(2, 1.9), "pop");
      c.quadro("prova", "“O UDP garante a entrega.” <b>Errado:</b> quem garante é o <b>TCP</b>. O UDP é usado quando a <b>velocidade</b> importa mais que a confiabilidade.", { left: 140, top: 755, width: 1420 }, c.t(4)).querySelector("p").style.fontSize = "32px";
    },
  },

  // ----------------------------------------------------- Endereçamento IP
  {
    id: "ipv4-ipv6",
    visual: "Um envelope (pacote) viaja até um notebook com a etiqueta “endereço IP”. Depois, dois cartões: IPv4 (32 bits, 192.168.0.1, 0 a 255, contador até ≈ 4,3 bilhões · esgotados) e IPv6 (128 bits, endereço hexadecimal em 8 grupos, praticamente ilimitados). Quadro âmbar “Pegadinha de banca”.",
    secao: "Endereçamento IP",
    bit: BIT_CANTO,
    falas: [
      "Cada dispositivo conectado a uma rede TCP/IP recebe um endereço IP, que o identifica e permite que os pacotes cheguem ao destino.",
      "O IPv4 tem 32 bits, escritos como quatro números decimais de 0 a 255, separados por pontos. Por exemplo: 192.168.0.1.",
      "São cerca de 4,3 bilhões de endereços, e eles já se esgotaram.",
      "O IPv6 tem 128 bits, escritos em oito grupos hexadecimais separados por dois-pontos. A quantidade de endereços é praticamente ilimitada.",
      "Pegadinha: o IPv6 substitui o IPv4, e não o TCP. E o número 256 nunca aparece em um IPv4, porque cada parte vai de 0 a 255.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      c.titulo("Endereçamento IP", "IPv4 × IPv6", TITULO, c.t(0), { medio: true });
      const txt = c.texto("O endereço <b>IP</b> identifica o dispositivo e leva os pacotes ao <b>destino</b>.", { left: 140, top: 340, width: 700 }, c.t(0, 0.4));
      const pc = c.no({ icone: "notebook", titulo: "Dispositivo" }, { left: 1240, top: 360, width: 300, height: 280 }, em(0, "recebe"));
      const tag = pilula(c, "endereço IP", { left: 1290, top: 660 }, em(0, "um endereço IP"));
      const env = icn(c, "envelope", 900, 450, 100, em(0, "permite"));
      c.tl.to(env, { x: 260, duration: 1.2, ease: "power2.inOut" }, em(0, "permite", 0.5));
      [txt, pc, tag, env].forEach((e) => c.sai(e, c.t(1) - 0.4));

      const v4 = c.novo(`<div class="cartao" style="left:140px;top:300px;width:680px;height:420px;padding:34px 40px">
        <div class="rotulo">IPv4</div><div style="font:800 72px var(--sans);margin-top:4px">32 bits</div>
        <div class="mono ex" style="font-size:52px;font-weight:700;color:var(--cor);margin-top:8px">192.168.0.1</div>
        <p style="font-size:26px;margin-top:8px">4 números de <b>0 a 255</b>, separados por pontos</p>
        <div class="qtd" style="margin-top:18px;font-size:30px;font-weight:700">≈ <span class="valor">0</span> bilhões · <span style="color:var(--errado)">esgotados</span></div></div>`);
      c.entra(v4, c.t(1), "esquerda");
      c.entra(v4.querySelector(".ex"), em(1, "Por exemplo"), "pop");
      c.entra(v4.querySelector(".qtd"), c.t(2), "baixo");
      c.contar(v4.querySelector(".valor"), 0, 4.3, c.t(2, 0.3), 1.4, (v) => v.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 }));
      const v6 = c.novo(`<div class="cartao" style="left:880px;top:300px;width:680px;height:420px;padding:34px 40px">
        <div class="rotulo">IPv6</div><div style="font:800 72px var(--sans);margin-top:4px">128 bits</div>
        <div class="mono" style="font-size:32px;font-weight:700;color:var(--cor);margin-top:8px;line-height:1.3">2001:0db8:85a3:0000:<br>0000:8a2e:0370:7334</div>
        <p style="font-size:26px;margin-top:8px">8 grupos <b>hexadecimais</b>, separados por dois-pontos</p>
        <div class="qtd" style="margin-top:12px;font-size:30px;font-weight:700;color:var(--certo)">praticamente ilimitados</div></div>`);
      c.entra(v6, c.t(3), "direita");
      c.entra(v6.querySelector(".qtd"), em(3, "A quantidade"), "baixo");
      c.quadro("prova", "O IPv6 substitui o <b>IPv4</b> — não o TCP. E <b>256</b> não existe em IPv4: cada parte vai de <b>0 a 255</b>.", { left: 140, top: 760, width: 1420 }, c.t(4)).querySelector("p").style.fontSize = "34px";
    },
  },
  {
    id: "ip-privado",
    visual: "Roteador ligado à Internet, com a etiqueta “IP público · do provedor”. Depois, uma área tracejada “Rede local · IPs privados” com notebook, celular e computador (192.168.0.2, .3, .4) e as faixas privadas. As linhas dos aparelhos convergem no roteador (etiqueta NAT); por fim, a etiqueta DHCP e os IPs dos aparelhos pulsam.",
    secao: "Endereçamento IP",
    bit: BIT_CANTO,
    falas: [
      "O IP público é visível na internet e é fornecido pelo provedor.",
      "O IP privado é usado dentro das redes locais e não é roteado na internet. As faixas privadas começam com 10, de 172.16 a 172.31, e 192.168.",
      "E como vários aparelhos usam a internet com um único IP público? Com o NAT, um recurso do roteador que permite que eles compartilhem esse IP.",
      "E quem distribui os endereços IP automaticamente para os dispositivos da rede é o protocolo DHCP.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      c.titulo("Endereçamento IP", "Público, privado, NAT e DHCP", TITULO, c.t(0), { medio: true });
      const rot = c.no({ icone: "roteador", titulo: "Roteador" }, { left: 860, top: 470, width: 300, height: 250 }, c.t(0, 0.3));
      c.no({ icone: "globo", titulo: "Internet" }, { left: 1290, top: 470, width: 260, height: 250 }, c.t(0, 0.6));
      c.seta(1168, 595, 1282, 595, c.t(0, 1));
      pilula(c, "IP <b>público</b> · do provedor", { left: 1150, top: 752 }, em(0, "fornecido"));

      const casa = c.novo(`<div class="abs" style="left:140px;top:320px;width:600px;height:520px;border-radius:32px;background:var(--cor-suave);border:5px dashed var(--cor-media)">
        <div class="rotulo" style="position:absolute;left:32px;top:24px">Rede local · IPs privados</div></div>`);
      c.entra(casa, c.t(1), "zoom");
      const devs = [["notebook", "Notebook", "192.168.0.2"], ["celular", "Celular", "192.168.0.3"], ["monitor", "Computador", "192.168.0.4"]];
      const linhas = devs.map((d, i) => {
        const e = c.novo(`<div class="cartao" style="left:170px;top:${390 + i * 105}px;width:540px;height:90px;padding:0 24px;display:flex;align-items:center;gap:18px;border-radius:20px">
          ${icone(d[0])}<b style="font-size:28px;flex:1">${d[1]}</b><span class="mono ipd" style="font-size:28px;font-weight:700;color:var(--cor)">${d[2]}</span></div>`);
        e.querySelector(".icone").style.cssText = "margin:0;width:58px;height:58px";
        c.entra(e, c.t(1, 0.8 + i * 0.4), "esquerda");
        return e;
      });
      c.texto("Faixas privadas: <b class=\"mono\" style=\"font-size:24px\">10.x.x.x · 172.16 a 172.31.x.x · 192.168.x.x</b>", { left: 170, top: 712, width: 540, fontSize: "24px", lineHeight: "1.5" }, em(1, "As faixas"));

      const nat = c.novo(`<svg class="abs" style="left:0;top:0;width:1920px;height:1080px" viewBox="0 0 1920 1080">
        ${[435, 540, 645].map((y) => `<path d="M712 ${y}C790 ${y} 790 595 856 595" stroke="var(--cor)" stroke-width="6" fill="none" stroke-linecap="round"/>`).join("")}</svg>`);
      nat.querySelectorAll("path").forEach((p, i) => c.desenhar(p, em(2, "Com o NAT", i * 0.25)));
      pilula(c, "NAT", { left: 880, top: 400, background: "var(--cor)", color: "#fff" }, em(2, "Com o NAT"));
      c.chave("Vários IPs privados → <em>um único IP público</em>", em(2, "Com o NAT", 0.5), c.t(3) - 0.2);
      pilula(c, "DHCP", { left: 1010, top: 400, background: "var(--serie)", color: "#fff" }, c.t(3, 0.5));
      linhas.forEach((e, i) => c.destaque(e.querySelector(".ipd"), c.t(3, 1.6 + i * 0.4)));
      c.chave("DHCP: <em>distribui IPs automaticamente</em>", c.t(3, 0.8));
      void rot;
    },
  },
  {
    id: "mascara",
    visual: "Octetos do IP 192.168.0.1 sobre a máscara 255.255.255.0 (/24); chaves marcam “rede” (três primeiros) e “dispositivo” (último). Cartões Gateway padrão (roteador) e 127.0.0.1 · loopback. Depois, título “Classes do IPv4”: tabela A, B e C, linha a linha; cartões das classes D (multicast) e E (experimental) e faixa sobre o CIDR.",
    secao: "Endereçamento IP",
    bit: BIT_CANTO,
    falas: [
      "A máscara de sub-rede indica qual parte do IP identifica a rede e qual identifica o dispositivo. A máscara 255.255.255.0, ou /24, indica que os três primeiros números são da rede.",
      "O gateway padrão é o endereço do roteador que leva o tráfego para fora da rede local, normalmente para a internet.",
      "E o endereço 127.0.0.1, chamado de loopback ou localhost, representa o próprio computador.",
      "As provas também cobram as classes do IPv4. Na classe A, o primeiro número vai de 1 a 126, com máscara padrão /8.",
      "Na classe B, vai de 128 a 191, com /16. E na classe C, de 192 a 223, com /24.",
      "As classes D, de 224 a 239, para multicast, e E, de 240 a 255, experimental, não são usadas para endereçar computadores.",
      "Hoje as redes usam máscaras flexíveis, o CIDR, mas as classes continuam aparecendo em provas.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      const grupoA = [c.titulo("Endereçamento IP", "Máscara, gateway e loopback", TITULO, c.t(0), { medio: true })];
      const linha = (rot, nums, y, t) => {
        grupoA.push(c.entra(c.novo(`<div class="abs rotulo" style="left:140px;top:${y + 30}px">${rot}</div>`), t, "fade"));
        return nums.map((n, j) => {
          const e = c.novo(`<div class="abs mono" style="left:${330 + j * 190}px;top:${y}px;width:170px;height:90px;border-radius:18px;background:#fff;box-shadow:var(--sombra);display:grid;place-items:center;font-size:44px;font-weight:700">${n}</div>`);
          grupoA.push(e);
          return c.entra(e, t + j * 0.15, "pop");
        });
      };
      const ip = linha("IP", ["192", "168", "0", "1"], 330, c.t(0, 0.6));
      const masc = linha("Máscara", ["255", "255", "255", "0"], 450, em(0, "A máscara 255"));
      [...ip, ...masc].forEach((e, j) => c.tl.to(e, { backgroundColor: j % 4 < 3 ? "#e7e6fb" : "#fdf3e1", duration: 0.4 }, em(0, "indica que os três")));
      grupoA.push(pilula(c, "/24", { left: 1100, top: 470, fontSize: "40px" }, em(0, "ou /24")));
      const chave1 = c.novo(`<div class="abs" style="left:330px;top:556px;width:550px;height:24px;border:6px solid var(--cor);border-top:none;border-radius:0 0 16px 16px"></div>`);
      const chave2 = c.novo(`<div class="abs" style="left:900px;top:556px;width:170px;height:24px;border:6px solid var(--prova);border-top:none;border-radius:0 0 16px 16px"></div>`);
      const r1 = c.novo(`<div class="abs" style="left:330px;top:590px;width:550px;text-align:center;font:700 30px var(--sans);color:var(--cor)">rede</div>`);
      const r2 = c.novo(`<div class="abs" style="left:860px;top:590px;width:250px;text-align:center;font:700 30px var(--sans);color:var(--prova)">dispositivo</div>`);
      [chave1, chave2, r1, r2].forEach((e) => { c.entra(e, em(0, "indica que os três"), "fade"); grupoA.push(e); });
      grupoA.push(cartaoLado(c, "roteador", "Gateway padrão", "Roteador que leva o tráfego <b>para fora</b> da rede local.", { left: 140, top: 680, width: 680, height: 160 }, c.t(1)));
      grupoA.push(cartaoLado(c, "notebook", "127.0.0.1 · loopback", "Também chamado de <b>localhost</b>: o próprio computador.", { left: 880, top: 680, width: 660, height: 160 }, c.t(2)));
      grupoA.forEach((e) => c.sai(e, c.t(3) - 0.4));

      c.titulo("Endereçamento IP", "Classes do IPv4", TITULO, c.t(3), { medio: true });
      const tab = c.tabela(["Classe", "Primeiro número", "Máscara padrão"], [
        ["A", "1 a 126", "255.0.0.0 <b>(/8)</b>"],
        ["B", "128 a 191", "255.255.0.0 <b>(/16)</b>"],
        ["C", "192 a 223", "255.255.255.0 <b>(/24)</b>"],
      ], { left: 140, top: 320, width: 1200 }, c.t(3, 0.3), [em(3, "Na classe A"), c.t(4), em(4, "E na classe C")]);
      tab.style.fontSize = "36px";
      cartaoLado(c, "alerta", "Classe D", "224 a 239 · <b>multicast</b>", { left: 140, top: 680, width: 560, height: 140 }, c.t(5), { icone: 64 });
      cartaoLado(c, "alerta", "Classe E", "240 a 255 · <b>experimental</b>", { left: 740, top: 680, width: 560, height: 140 }, em(5, "e E"), { icone: 64 });
      c.chave("D e E: <em>não endereçam computadores</em>", em(5, "não são usadas"), c.t(6) - 0.2);
      c.chave("Hoje: máscaras flexíveis (<em>CIDR</em>) · as classes ainda caem em prova", c.t(6, 0.2));
    },
  },
  {
    id: "comandos",
    visual: "Janela de terminal escura; cada comando aparece como uma linha digitada, com a explicação ao lado: ping (ICMP), ipconfig / ip addr, tracert / traceroute, nslookup e netstat.",
    secao: "Endereçamento IP",
    bit: BIT_CANTO,
    falas: [
      "Para diagnosticar a rede, existem alguns comandos. O ping testa se um endereço responde e mede o tempo de resposta, usando o protocolo ICMP.",
      "O ipconfig, no Windows, ou ip addr, no Linux, mostra o IP, a máscara e o gateway do computador.",
      "O tracert, no Windows, ou traceroute, no Linux, mostra o caminho, ou seja, os roteadores até o destino.",
      "O nslookup consulta o DNS para descobrir o IP de um nome. E o netstat lista as conexões de rede ativas.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      c.titulo("Diagnóstico", "Comandos de rede", TITULO, c.t(0), { medio: true });
      const term = c.novo(`<div class="abs" style="left:140px;top:300px;width:1400px;height:560px;border-radius:28px;background:#1a2230;box-shadow:var(--sombra)">
        <div style="display:flex;gap:12px;padding:24px 30px">${["#ff6b6b", "#ffd166", "#06d6a0"].map((cor) => `<span style="width:16px;height:16px;border-radius:50%;background:${cor}"></span>`).join("")}
        <span style="margin-left:16px;font:600 20px var(--sans);color:#7a8496;letter-spacing:.1em;text-transform:uppercase">Terminal</span></div></div>`);
      c.entra(term, c.t(0, 0.3), "zoom");
      const sep = "<span style=\"color:#7a8496\"> / </span>";
      const cinza = (t) => `<span style="color:#7a8496">${t}</span>`;
      const cmds = [
        ["ping", "testa se responde e mede o tempo · usa <b>ICMP</b>", em(0, "O ping")],
        [`ipconfig${sep}ip addr`, `${cinza("Windows / Linux ·")} mostra IP, máscara e gateway`, c.t(1)],
        [`tracert${sep}traceroute`, `${cinza("Windows / Linux ·")} o caminho (roteadores) até o destino`, c.t(2)],
        ["nslookup", "consulta o <b>DNS</b>: nome → IP", c.t(3)],
        ["netstat", "lista as conexões de rede ativas", em(3, "E o netstat")],
      ];
      cmds.forEach((k, i) => {
        const e = c.novo(`<div class="abs" style="left:190px;top:${390 + i * 90}px;width:1310px;display:flex;gap:30px;align-items:baseline">
          <span class="mono" style="font-size:34px;color:#a5b4fc;width:540px;flex-shrink:0"><span style="color:#06d6a0">$</span> ${k[0]}</span>
          <span style="font-size:27px;color:#e2e8f0">${k[1].replace(/<b>/g, "<b style=\"color:#fff\">")}</span></div>`);
        c.entra(e, k[2], "esquerda");
      });
    },
  },

  // ----------------------------------------------------- DNS e protocolos
  {
    id: "dns-url",
    visual: "Fluxo em três nós com setas: Nome (www.site.gov.br) → DNS (traduz para IP) → Navegador (exibe a página); os nós pulsam na ordem. Depois, barra de endereço com https://www.gov.br/receitafederal/pt-br: cada parte ganha sublinhado colorido e rótulo (protocolo, domínio, 1º nível do Brasil, caminho). Embaixo, cinco cartões de domínios brasileiros.",
    secao: "DNS e protocolos",
    bit: BIT_CANTO,
    falas: [
      "Quando você digita o nome de um site, entra em ação o DNS, o sistema de nomes de domínio. Ele traduz nomes fáceis de lembrar em endereços IP.",
      "Sem ele, seria preciso digitar o IP de cada site. Então: você digita o nome, o DNS traduz para o IP, e o navegador exibe a página.",
      "O endereço completo de um recurso na web é a URL. Veja as partes deste exemplo.",
      "O https é o protocolo. O www.gov.br é o nome do domínio, resolvido pelo DNS. O ponto br é o domínio de primeiro nível do Brasil. E o resto é o caminho até a página.",
      "Outros domínios brasileiros: gov.br, governo; edu.br, ensino; com.br, comercial; org.br, organizações sem fins lucrativos; e jus.br, Judiciário.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      const t1 = c.titulo("DNS", "Do nome ao endereço IP", TITULO, c.t(0), { medio: true });
      const n1 = c.no({ icone: "navegador", titulo: "Nome", texto: "www.site.gov.br" }, { left: 140, top: 380, width: 380, height: 300 }, c.t(0, 0.6));
      const n2 = c.no({ icone: "servidor", titulo: "DNS", texto: "traduz para IP" }, { left: 700, top: 380, width: 380, height: 300 }, em(0, "entra em ação"));
      const s1 = c.seta(530, 530, 690, 530, em(0, "entra em ação", 0.4));
      const n3 = c.no({ icone: "janela", titulo: "Navegador", texto: "exibe a página" }, { left: 1260, top: 380, width: 300, height: 300 }, em(1, "e o navegador"));
      const s2 = c.seta(1090, 530, 1250, 530, em(1, "e o navegador", -0.3));
      const k = c.chave("nome fácil de lembrar → <em>endereço IP</em>", em(0, "Ele traduz"), c.t(1) - 0.2);
      c.destaque(n1, em(1, "você digita"));
      c.destaque(n2, em(1, "o DNS traduz"));
      [t1, n1, n2, n3, s1, s2, k].forEach((e) => c.sai(e, c.t(2) - 0.4));

      c.titulo("URL", "Anatomia de um endereço", TITULO, c.t(2), { medio: true });
      const seg = (cls, cor, txt, rot, topo = 92) => `<span class="${cls}" style="position:relative">${txt}<span class="sub" style="position:absolute;left:2px;right:2px;bottom:-12px;height:8px;border-radius:4px;background:${cor}"></span><span class="lab" style="position:absolute;left:0;top:${topo}px;white-space:nowrap;font:700 26px var(--sans);color:${cor}">${rot}</span></span>`;
      const url = c.novo(`<div class="abs" style="left:140px;top:350px;padding:24px 40px;background:#fff;border-radius:999px;box-shadow:var(--sombra);font:700 50px var(--mono);white-space:nowrap">
        ${seg("s1", "#c27c0e", "https://", "protocolo")}${seg("s2", ROXO, "www.gov" + seg("s3", "#2f8a5b", ".br", "domínio de 1º nível do Brasil", 140), "domínio (DNS)")}${seg("s4", "#4a5568", "/receitafederal/pt-br", "caminho até a página")}</div>`);
      c.entra(url, c.t(2, 0.5), "zoom");
      [["s1", "O https"], ["s2", "O www.gov.br"], ["s3", "O ponto br"], ["s4", "E o resto"]].forEach(([cls, tr]) => {
        const s = url.querySelector(`.${cls}`);
        const t = em(3, tr);
        c.tl.fromTo(s.querySelector(":scope > .sub"), { scaleX: 0, transformOrigin: "0 50%" }, { scaleX: 1, duration: 0.5, immediateRender: true }, t);
        c.entra(s.querySelector(":scope > .lab"), t + 0.2, "baixo");
      });
      const doms = [["gov.br", "governo"], ["edu.br", "ensino"], ["com.br", "comercial"], ["org.br", "sem fins lucrativos"], ["jus.br", "Judiciário"]];
      doms.forEach((d, i) => {
        const e = c.novo(`<div class="cartao" style="left:${140 + i * 285}px;top:700px;width:265px;height:130px;padding:20px 24px">
          <div class="mono" style="font-size:32px;font-weight:800;color:var(--cor)">.${d[0]}</div><p style="font-size:24px;margin-top:6px">${d[1]}</p></div>`);
        c.entra(e, em(4, d[0]), "baixo");
      });
    },
  },
  {
    id: "portas",
    visual: "Grade de dez blocos “protocolo + porta”, cada um entrando quando é citado: HTTP 80, HTTPS 443, FTP 20·21, SSH 22 (verde), Telnet 23 (vermelho), SMTP 25·587, POP3 110·995, IMAP 143·993, DNS 53, DHCP 67·68. Quadro verde “Memorize: SMTP = Sua Mensagem Tá Partindo”.",
    secao: "DNS e protocolos",
    bit: BIT_CANTO,
    falas: [
      "Cada protocolo de aplicação tem sua porta padrão. O HTTP transfere páginas web sem criptografia, na porta 80. O HTTPS é o HTTP com criptografia TLS, o cadeado do navegador, na porta 443.",
      "O FTP transfere arquivos, nas portas 20 e 21. O SSH faz acesso remoto seguro, com criptografia, na porta 22. Já o Telnet faz acesso remoto sem criptografia, na porta 23, e é inseguro.",
      "Para o e-mail, o SMTP envia mensagens, na porta 25, ou 587 para envio autenticado.",
      "O POP3 recebe na porta 110, ou 995 com criptografia. E o IMAP, na porta 143, ou 993 com criptografia.",
      "Fechando a lista: o DNS usa a porta 53, e o DHCP, as portas 67 e 68.",
      "Memorize: SMTP é Sua Mensagem Tá Partindo, ou seja, envio. POP3 e IMAP servem para receber.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      c.titulo("Camada de aplicação", "Protocolos e portas", TITULO, c.t(0), { medio: true });
      const prot = [
        ["HTTP", "80", "páginas web, sem criptografia", em(0, "O HTTP")],
        ["HTTPS", "443", "HTTP + TLS (cadeado)", em(0, "O HTTPS")],
        ["FTP", "20 · 21", "transferência de arquivos", c.t(1)],
        ["SSH", "22", "acesso remoto seguro", em(1, "O SSH"), "#2f8a5b"],
        ["Telnet", "23", "acesso remoto inseguro", em(1, "Já o Telnet"), "#c2412f"],
        ["SMTP", "25 · 587", "envio · 587 autenticado", c.t(2)],
        ["POP3", "110 · 995", "recebe · 995 com criptografia", c.t(3)],
        ["IMAP", "143 · 993", "recebe · 993 com criptografia", em(3, "E o IMAP")],
        ["DNS", "53", "nomes → IPs", em(4, "o DNS")],
        ["DHCP", "67 · 68", "IP automático", em(4, "e o DHCP")],
      ];
      const tiles = prot.map((p, i) => {
        const e = c.novo(`<div class="cartao" style="left:${140 + (i % 5) * 285}px;top:${300 + Math.floor(i / 5) * 215}px;width:265px;height:195px;padding:22px 24px">
          <div style="font:800 30px var(--sans)">${p[0]}</div>
          <div class="mono" style="font-size:38px;font-weight:800;color:var(--cor);margin-top:4px;white-space:nowrap">${p[1]}</div>
          <p style="font-size:20px;line-height:1.3;margin-top:6px">${p[2]}</p></div>`);
        if (p[4]) { e.style.setProperty("--cor", p[4]); e.style.borderTop = `8px solid ${p[4]}`; }
        return c.entra(e, p[3], "pop");
      });
      c.quadro("dica", "SMTP = <b>S</b>ua <b>M</b>ensagem <b>T</b>á <b>P</b>artindo → <b>envio</b>. POP3 e IMAP → <b>recebimento</b>.", { left: 140, top: 750, width: 1400 }, c.t(5)).querySelector("p").style.fontSize = "36px";
      c.destaque(tiles[5], c.t(5, 0.6));
    },
  },

  // ---------------------------------------------------- Correio eletrônico
  {
    id: "email",
    visual: "Painel POP3: envelopes saem do servidor e vão para o notebook (“baixa e, por padrão, remove do servidor”). Painel IMAP: servidor com envelope, ícone de sincronização, celular e notebook. Cartões Webmail e Cliente de e-mail. Depois, janela “Nova mensagem” com os campos Para, Cc e Cco, e ao lado quem vê cada um (olho aberto / olho riscado). Quadro âmbar “Pegadinha de banca”.",
    secao: "Correio eletrônico",
    bit: BIT_CANTO,
    falas: [
      "Para receber e-mails, existem dois protocolos. O POP3 baixa as mensagens para o dispositivo e, na configuração padrão, as remove do servidor. É útil para guardar os e-mails só em um computador.",
      "No IMAP, as mensagens ficam no servidor, e o estado delas, como lida, apagada ou pasta, é sincronizado. É o ideal para quem usa o mesmo e-mail no celular e no computador.",
      "Você pode ler o e-mail por um webmail, no navegador, como o Gmail na web, ou por um cliente de e-mail instalado, como o Outlook e o Thunderbird.",
      "Ao escrever uma mensagem, o campo Para recebe os destinatários principais.",
      "No Cc, com cópia, vão os destinatários em cópia, e todos veem quem foi copiado.",
      "Já no Cco, com cópia oculta, os demais destinatários não veem quem recebeu.",
      "Pegadinha: as bancas trocam os papéis. O SMTP envia; o POP3 e o IMAP recebem. E quem está em Cco vê os destinatários do Para e do Cc, mas ninguém vê quem está em Cco.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      const A = [];
      A.push(c.titulo("Correio eletrônico", "POP3 × IMAP", TITULO, c.t(0), { medio: true }));
      const painel = (x, nome, legenda, t) => {
        const e = c.novo(`<div class="cartao" style="left:${x}px;top:300px;width:680px;height:390px;padding:28px 36px">
          <div class="rotulo">${nome}</div><p class="leg" style="position:absolute;left:36px;bottom:26px;font-size:26px">${legenda}</p></div>`);
        A.push(c.entra(e, t, "baixo"));
        return e;
      };
      const pop = painel(140, "POP3", "baixa e, por padrão, <b>remove</b> do servidor", em(0, "O POP3"));
      c.entra(pop.querySelector(".leg"), em(0, "as remove"), "fade");
      A.push(icn(c, "servidor", 190, 370, 130, em(0, "O POP3", 0.4)));
      A.push(icn(c, "notebook", 600, 370, 160, em(0, "O POP3", 0.6)));
      A.push(c.seta(345, 440, 580, 440, em(0, "baixa")));
      [0, 1, 2].forEach((i) => {
        const env = icn(c, "envelope", 200 + i * 38, 520, 56, em(0, "O POP3", 0.8 + i * 0.15));
        c.tl.to(env, { x: 420 - i * 38 + i * 30, y: -30, duration: 0.9, ease: "power2.inOut" }, em(0, "baixa", 0.4 + i * 0.35));
        A.push(env);
      });
      const imap = painel(880, "IMAP", "fica no <b>servidor</b> · estado <b>sincronizado</b>", c.t(1));
      c.entra(imap.querySelector(".leg"), em(1, "é sincronizado"), "fade");
      A.push(icn(c, "servidor", 930, 370, 130, c.t(1, 0.4)));
      A.push(icn(c, "envelope", 960, 520, 56, c.t(1, 0.8)));
      A.push(icn(c, "setas", 1110, 400, 100, em(1, "é sincronizado")));
      A.push(icn(c, "celular", 1260, 360, 110, em(1, "no celular")));
      A.push(icn(c, "notebook", 1380, 410, 140, em(1, "e no computador")));
      A.push(cartaoLado(c, "navegador", "Webmail", "no navegador · ex.: Gmail na web", { left: 140, top: 720, width: 680, height: 130 }, em(2, "webmail"), { icone: 64 }));
      A.push(cartaoLado(c, "janela", "Cliente de e-mail", "instalado · Outlook, Thunderbird", { left: 880, top: 720, width: 660, height: 130 }, em(2, "ou por um cliente"), { icone: 64 }));
      A.forEach((e) => c.sai(e, c.t(3) - 0.4));

      c.titulo("Correio eletrônico", "Para, Cc e Cco", TITULO, c.t(3), { medio: true });
      const campos = [["Para", "ana@exemplo.gov.br"], ["Cc", "bruno@exemplo.gov.br"], ["Cco", "carla@exemplo.gov.br"]];
      const janela = c.novo(`<div class="cartao" style="left:140px;top:300px;width:880px;height:400px;padding:0;overflow:hidden">
        <div style="background:var(--cor);color:#fff;padding:18px 30px;font:700 28px var(--sans)">Nova mensagem</div>
        ${campos.map((k) => `<div class="campo" style="display:flex;gap:20px;align-items:center;height:82px;padding:0 30px;border-bottom:2px solid var(--borda);font-size:30px"><b style="width:90px">${k[0]}</b><span class="mono" style="font-size:28px;color:var(--texto-suave)">${k[1]}</span></div>`).join("")}
        <div style="padding:22px 30px;color:var(--texto-fraco);font-size:26px">Assunto: Reunião de equipe</div></div>`);
      c.entra(janela, c.t(3, 0.2), "zoom");
      const cps = [...janela.querySelectorAll(".campo")];
      const notas = [["pessoa", "destinatários principais"], ["olho", "todos veem quem foi copiado"], ["olhoOff", "ninguém vê quem recebeu"]];
      [em(3, "o campo Para"), c.t(4), c.t(5)].forEach((t, i) => {
        c.entra(cps[i], t, "esquerda");
        const n = c.novo(`<div class="abs" style="left:1060px;top:${368 + i * 82}px;height:82px;display:flex;align-items:center;gap:16px;font-size:26px;font-weight:600">${icone(notas[i][0])}<span>${notas[i][1]}</span></div>`);
        n.querySelector(".icone").style.cssText = "width:54px;height:54px";
        c.entra(n, t + 0.4, "esquerda");
      });
      c.quadro("prova", "A banca troca os papéis: <b>SMTP envia</b>; <b>POP3 e IMAP recebem</b>. Quem está em Cco vê Para e Cc, mas <b>ninguém vê o Cco</b>.", { left: 140, top: 740, width: 1400 }, c.t(6)).querySelector("p").style.fontSize = "32px";
    },
  },

  // ------------------------------------------------------ Web e serviços
  {
    id: "web",
    visual: "Um nó “Web · WWW” surge; em volta dele cresce o círculo tracejado “Internet”, com outros serviços (E-mail, Arquivos, Outros). À direita, três faixas HTML (estrutura), CSS (aparência) e JavaScript (interatividade), e o cartão Web 2.0. No fim, a coluna da direita dá lugar ao quadro âmbar “internet ≠ web”.",
    secao: "Web e serviços",
    bit: BIT_CANTO,
    falas: [
      "A World Wide Web, ou WWW, é o sistema de páginas ligadas por hiperlinks, acessadas pelos navegadores via HTTP ou HTTPS.",
      "Ela é um dos serviços da internet, ao lado do e-mail, da transferência de arquivos e de outros.",
      "As páginas são estruturadas em HTML, uma linguagem de marcação. O CSS cuida da aparência, e o JavaScript, da interatividade.",
      "Na Web 2.0, os usuários passaram a produzir conteúdo e interagir, com redes sociais, blogs e wikis.",
      "Pegadinha: internet e web não são sinônimos. A internet é a rede física e lógica mundial; a web é um serviço que funciona sobre ela.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      c.titulo("Web e serviços", "A web é um serviço da internet", TITULO, c.t(0), { medio: true });
      const circ = c.novo(`<div class="abs" style="left:150px;top:300px;width:600px;height:600px;border-radius:50%;background:var(--cor-suave);border:5px dashed var(--cor-media)">
        <div class="rotulo" style="position:absolute;left:0;right:0;bottom:44px;text-align:center">Internet</div></div>`);
      c.entra(circ, c.t(1), "zoom");
      const no = (ic, nome, x, y, t) => {
        const e = c.novo(`<div class="no" style="left:${x}px;top:${y}px;width:190px;height:160px;padding:14px;z-index:2">${icone(ic)}<strong style="font-size:26px">${nome}</strong></div>`);
        e.querySelector(".icone").style.cssText = "width:62px;height:62px;margin-bottom:8px";
        return c.entra(e, t, "pop");
      };
      const web = no("navegador", "Web · WWW", 255, 410, c.t(0, 0.4));
      no("envelope", "E-mail", 465, 410, em(1, "do e-mail"));
      no("documento", "Arquivos", 255, 595, em(1, "da transferência"));
      no("setas", "Outros", 465, 595, em(1, "e de outros"));
      const camadas = [["HTML", "estrutura · linguagem de marcação", em(2, "HTML")], ["CSS", "aparência", em(2, "O CSS")], ["JavaScript", "interatividade", em(2, "e o JavaScript")]];
      const dir = camadas.map((k, i) => {
        const e = c.novo(`<div class="cartao" style="left:860px;top:${320 + i * 110}px;width:680px;height:95px;padding:0 30px;display:flex;align-items:center;gap:24px;border-radius:22px">
          <span class="mono" style="font-size:34px;font-weight:800;color:var(--cor);width:230px">${k[0]}</span><span style="font-size:28px;color:var(--texto-suave)">${k[1]}</span></div>`);
        return c.entra(e, k[2], "direita");
      });
      dir.push(cartaoLado(c, "pessoas", "Web 2.0", "usuários <b>produzem conteúdo</b>: redes sociais, blogs, wikis", { left: 860, top: 660, width: 680, height: 160 }, c.t(3)));
      dir.forEach((e) => c.sai(e, c.t(4) - 0.4));
      c.quadro("prova", "“Internet e web são sinônimos.” <b>Errado:</b> a internet é a <b>rede</b> física e lógica mundial; a web é um <b>serviço</b> que funciona sobre ela.", { left: 860, top: 380, width: 680 }, c.t(4)).querySelector("p").style.fontSize = "34px";
      c.destaque(web, em(4, "a web é um serviço"));
    },
  },
  {
    id: "deep-web",
    visual: "Iceberg na água, revelado em três partes com rótulos: Surface web (ponta, indexada), Deep web (parte submersa: e-mails, bancos de dados, login) e Dark web (fundo escuro, Tor). Depois, dois cartões: VoIP (celular – ondas – globo – ondas – celular) e P2P (computadores ligados entre si, sem servidor central; BitTorrent).",
    secao: "Web e serviços",
    bit: BIT_CANTO,
    falas: [
      "Pense na web como um iceberg. A surface web é a parte indexada pelos buscadores: a ponta que todo mundo vê.",
      "A deep web é o conteúdo não indexado, como e-mails, bancos de dados e áreas protegidas por login.",
      "E a dark web é uma pequena parte da deep web, acessível só com ferramentas específicas, como o Tor.",
      "A internet também oferece outros serviços. O VoIP, voz sobre IP, faz chamadas de voz pela internet.",
      "E no P2P, ponto a ponto, os computadores trocam arquivos diretamente entre si, sem um servidor central, como no BitTorrent.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      const t1 = c.titulo("Web e serviços", "Surface, deep e dark web", TITULO, c.t(0), { medio: true });
      const ice = c.novo(`<svg class="abs" style="left:140px;top:290px;width:560px;height:640px" viewBox="0 0 560 640">
        <rect x="0" y="150" width="560" height="490" rx="30" fill="var(--cor)" opacity=".08"/>
        <path d="M0 150q35-12 70 0t70 0 70 0 70 0 70 0 70 0 70 0 70 0" stroke="var(--cor-media)" stroke-width="5" fill="none"/>
        <polygon class="p1" points="280,20 330,62 380,150 180,150 230,72" fill="#fff" stroke="var(--cor-media)" stroke-width="4"/>
        <polygon class="p2" points="180,150 380,150 460,260 480,400 100,400 120,260" fill="var(--cor-media)"/>
        <polygon class="p3" points="100,400 480,400 410,540 300,620 180,580" fill="var(--serie)"/></svg>`);
      c.entra(ice, c.t(0, 0.2), "fade");
      const partes = [".p1", ".p2", ".p3"].map((s) => ice.querySelector(s));
      c.entra(partes[0], c.t(0, 0.4), "fade");
      c.entra(partes[1], c.t(1), "fade");
      c.entra(partes[2], c.t(2), "fade");
      const rot = (y, cor, nome, txt, t) => {
        const e = c.novo(`<div class="cartao" style="left:760px;top:${y}px;width:780px;padding:22px 30px;border-left:12px solid ${cor}">
          <h3 style="margin:0;font-size:34px">${nome}</h3><p style="font-size:26px">${txt}</p></div>`);
        return c.entra(e, t, "direita");
      };
      const r = [
        rot(320, "var(--cor-media)", "Surface web", "indexada pelos <b>buscadores</b>", em(0, "A surface web")),
        rot(510, "var(--cor)", "Deep web", "<b>não indexada</b>: e-mails, bancos de dados, áreas com login", c.t(1)),
        rot(720, "var(--serie)", "Dark web", "pequena parte da deep web · só com ferramentas como o <b>Tor</b>", c.t(2)),
      ];
      [t1, ice, ...r].forEach((e) => c.sai(e, c.t(3) - 0.4));

      c.titulo("Web e serviços", "Outros serviços da internet", TITULO, c.t(3), { medio: true });
      const voip = c.novo(`<div class="cartao" style="left:140px;top:320px;width:680px;height:440px">
        <h3>VoIP</h3><p>Voz sobre IP: <b>chamadas de voz</b> pela internet.</p>
        <div class="ics" style="display:flex;align-items:center;gap:12px;margin-top:40px">${["celular", "onda", "globo", "onda", "celular"].map((n) => icone(n)).join("")}</div></div>`);
      voip.querySelectorAll(".icone").forEach((e) => { e.style.cssText = "width:96px;height:96px;margin:0"; });
      c.entra(voip, c.t(3, 0.4), "esquerda");
      const pos = [[90, 60], [430, 60], [90, 190], [430, 190], [260, 125]];
      const lig = [];
      for (let a = 0; a < 5; a++) for (let b = a + 1; b < 5; b++) lig.push(`<path d="M${pos[a][0]} ${pos[a][1]}L${pos[b][0]} ${pos[b][1]}" stroke="var(--cor-media)" stroke-width="6"/>`);
      const p2p = c.novo(`<div class="cartao" style="left:880px;top:320px;width:660px;height:440px">
        <h3>P2P · ponto a ponto</h3><p>Troca direta entre computadores, <b>sem servidor central</b>. Ex.: BitTorrent.</p>
        <svg viewBox="0 0 520 250" style="width:520px;height:200px;margin-top:16px">${lig.join("")}
        ${pos.map(([x, y]) => `<rect x="${x - 34}" y="${y - 24}" width="68" height="48" rx="10" fill="var(--cor)"/><rect x="${x - 24}" y="${y - 15}" width="48" height="28" rx="4" fill="#fff" opacity=".85"/>`).join("")}</svg></div>`);
      c.entra(p2p, c.t(4), "direita");
    },
  },

  // ---------------------------------------------------------- Navegadores
  {
    id: "recursos",
    visual: "Etiquetas com os navegadores (Chrome, Edge, Firefox, Safari) e cinco cartões de recursos: Histórico, Favoritos, Cookies, Cache e Extensões. Depois, janela escura da navegação privativa com os nomes em cada navegador e a faixa “ao fechar, apaga” (histórico, cookies, formulários). Quadro âmbar e três olhos: provedor, rede da empresa e sites ainda veem o acesso.",
    secao: "Navegadores",
    bit: BIT_CANTO,
    falas: [
      "Os navegadores, ou browsers, são os programas que acessam as páginas da web: Google Chrome, Microsoft Edge, Mozilla Firefox e Safari.",
      "O histórico registra as páginas visitadas, e os favoritos guardam páginas para acesso rápido.",
      "Os cookies são pequenos arquivos que os sites gravam no navegador para lembrar login, preferências e itens do carrinho. Também podem ser usados para rastrear o usuário.",
      "O cache guarda cópias de partes das páginas no computador, para carregar mais rápido. E as extensões são complementos que adicionam funções.",
      "Na navegação privativa, chamada de anônima no Chrome, InPrivate no Edge e privativa no Firefox, o navegador apaga, ao fechar a janela, o histórico, os cookies e os dados de formulários daquela sessão.",
      "Pegadinha: ela não deixa você invisível. O provedor, a rede da empresa e os sites visitados continuam podendo identificar o acesso. E os downloads e favoritos criados continuam salvos.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      const A = [c.titulo("Navegadores", "Recursos mais cobrados", TITULO, c.t(0), { medio: true })];
      [["Google Chrome", 140], ["Microsoft Edge", 470], ["Mozilla Firefox", 790], ["Safari", 1120]].forEach(([n, x]) => {
        A.push(pilula(c, n, { left: x, top: 305 }, em(0, n)));
      });
      const rec = [
        ["relogio", "Histórico", "registro das páginas <b>visitadas</b>", c.t(1)],
        ["livre", "Favoritos", "páginas salvas para <b>acesso rápido</b>", em(1, "e os favoritos")],
        ["cookie", "Cookies", "lembram login, preferências e carrinho · podem <b>rastrear</b>", c.t(2)],
        ["raio", "Cache", "cópias locais para carregar <b>mais rápido</b>", c.t(3)],
        ["peca", "Extensões", "complementos que <b>adicionam funções</b>", em(3, "E as extensões")],
      ];
      rec.forEach((k, i) => {
        const e = c.cartao({ icone: k[0], titulo: k[1], texto: k[2] }, { left: 140 + i * 285, top: 400, width: 265, height: 340, padding: "28px 26px" }, k[3]);
        e.querySelector("h3").style.fontSize = "32px";
        e.querySelector("p").style.fontSize = "23px";
        e.querySelector(".icone").style.cssText = "width:80px;height:80px;margin-bottom:16px";
        A.push(e);
      });
      A.forEach((e) => c.sai(e, c.t(4) - 0.4));

      c.titulo("Navegadores", "Navegação privativa", TITULO, c.t(4), { medio: true });
      const nomes = [["Chrome", "janela anônima", "anônima no Chrome"], ["Edge", "InPrivate", "InPrivate"], ["Firefox", "janela privativa", "privativa no Firefox"]];
      const jan = c.novo(`<div class="abs" style="left:140px;top:300px;width:760px;height:330px;border-radius:28px;background:#1a2230;color:#fff;padding:30px 36px;box-shadow:var(--sombra)">
        <div style="display:flex;align-items:center;gap:20px">${icone("anonimo")}<span style="font:800 36px var(--sans)">Navegação privativa</span></div>
        ${nomes.map((n) => `<div class="nm" style="margin-top:16px;font-size:30px"><span style="color:#a5b4fc;font-weight:700;display:inline-block;width:150px">${n[0]}</span>→ <b>${n[1]}</b></div>`).join("")}</div>`);
      jan.querySelector(".icone").style.cssText = "width:80px;height:80px;margin:0";
      c.entra(jan, c.t(4, 0.2), "zoom");
      jan.querySelectorAll(".nm").forEach((e, i) => c.entra(e, em(4, nomes[i][2]), "esquerda"));
      const apaga = c.novo(`<div class="abs" style="left:140px;top:660px;width:760px;display:flex;flex-wrap:wrap;gap:14px;align-items:center">
        <span style="font:700 26px var(--sans);color:var(--texto);width:100%">Ao fechar a janela, apaga:</span>
        ${["histórico", "cookies", "dados de formulários"].map((t) => `<span class="pilula" style="text-decoration:line-through;text-decoration-thickness:3px">${t}</span>`).join("")}</div>`);
      c.entra(apaga, em(4, "o navegador apaga"), "baixo");
      c.quadro("prova", "A navegação privativa <b>não</b> deixa você invisível. <b>Downloads</b> e <b>favoritos</b> criados continuam salvos.", { left: 960, top: 300, width: 590, padding: "30px 36px" }, c.t(5)).querySelector("p").style.fontSize = "30px";
      [["Provedor", "O provedor"], ["Rede da empresa", "a rede da empresa"], ["Sites", "e os sites"]].forEach(([n, tr], i) => {
        const e = c.novo(`<div class="no" style="left:${960 + i * 200}px;top:640px;width:185px;height:170px;padding:16px">${icone("olho")}<strong style="font-size:24px">${n}</strong></div>`);
        e.querySelector(".icone").style.cssText = "width:70px;height:70px;margin-bottom:8px";
        c.entra(e, em(5, tr), "pop");
      });
    },
  },
  {
    id: "atalhos",
    visual: "Grade de dez blocos com teclas desenhadas e a ação de cada atalho, entrando na frase que o cita: Ctrl+T, Ctrl+W, Ctrl+Shift+T, Ctrl+Shift+N, Ctrl+Shift+P, Ctrl+H, Ctrl+J, Ctrl+D, Ctrl+F e F5.",
    secao: "Navegadores",
    bit: BIT_CANTO,
    falas: [
      "Agora, os atalhos. Ctrl + T abre uma nova aba, Ctrl + W fecha a aba atual, e Ctrl + Shift + T reabre a última aba fechada.",
      "Ctrl + Shift + N abre a janela anônima no Chrome e a InPrivate no Edge. No Firefox, a janela privativa é Ctrl + Shift + P.",
      "Ctrl + H abre o histórico, Ctrl + J mostra os downloads, e Ctrl + D adiciona a página aos favoritos.",
      "Ctrl + F localiza um texto na página, e F5 recarrega a página.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      c.titulo("Navegadores", "Atalhos de teclado", TITULO, c.t(0), { medio: true });
      const tecla = (k) => `<span style="display:inline-block;padding:5px 11px;border-radius:10px;background:var(--fundo);border:2px solid var(--borda);border-bottom-width:5px;font:700 23px var(--mono);color:var(--texto)">${k}</span>`;
      const at = [
        [["Ctrl", "T"], "nova aba", em(0, "Ctrl + T")],
        [["Ctrl", "W"], "fecha a aba atual", em(0, "Ctrl + W")],
        [["Ctrl", "Shift", "T"], "reabre a última aba fechada", em(0, "Ctrl + Shift + T")],
        [["Ctrl", "Shift", "N"], "anônima (Chrome) · InPrivate (Edge)", c.t(1)],
        [["Ctrl", "Shift", "P"], "janela privativa (Firefox)", em(1, "Ctrl + Shift + P")],
        [["Ctrl", "H"], "histórico", c.t(2)],
        [["Ctrl", "J"], "downloads", em(2, "Ctrl + J")],
        [["Ctrl", "D"], "adiciona aos favoritos", em(2, "Ctrl + D")],
        [["Ctrl", "F"], "localiza texto na página", c.t(3)],
        [["F5"], "recarrega a página", em(3, "F5")],
      ];
      at.forEach((k, i) => {
        const e = c.novo(`<div class="cartao" style="left:${140 + (i % 4) * 350}px;top:${300 + Math.floor(i / 4) * 200}px;width:330px;height:180px;padding:24px 24px">
          <div style="display:flex;gap:7px;align-items:center">${k[0].map(tecla).join("<span style=\"color:var(--texto-fraco);font-weight:700\">+</span>")}</div>
          <p style="font-size:25px;line-height:1.3;margin-top:16px;color:var(--texto);font-weight:600">${k[1]}</p></div>`);
        c.entra(e, k[2], "pop");
      });
    },
  },
  {
    id: "privacidade",
    visual: "Seis cartões com ícones, um por recurso: Limpar dados (Ctrl+Shift+Delete), Bloqueador de pop-ups, Gerenciador de senhas, Sincronização, Cookies de terceiros e Aviso “Não seguro”. Quadro azul “Resumo estratégico” sobre o cadeado e o HTTPS.",
    secao: "Navegadores",
    bit: BIT_CANTO,
    falas: [
      "Para a privacidade, Ctrl + Shift + Delete abre a limpeza dos dados de navegação, que apaga histórico, cookies, cache e senhas salvas.",
      "O bloqueador de pop-ups impede que janelas surjam sem você pedir. E o gerenciador de senhas guarda e preenche senhas, e pode sugerir senhas fortes.",
      "Com a sincronização, ao entrar com uma conta, seus favoritos, histórico e senhas ficam disponíveis em outros dispositivos.",
      "Os cookies de terceiros são criados por domínios diferentes do site visitado, geralmente para publicidade e rastreamento, e podem ser bloqueados nas configurações.",
      "O aviso Não seguro indica uma página sem HTTPS: nela, não digite senhas nem dados pessoais.",
      "E atenção: o cadeado e o HTTPS indicam que a conexão é criptografada, não que o site é confiável. Sites de phishing também podem usar HTTPS.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      c.titulo("Navegadores", "Privacidade e segurança", TITULO, c.t(0), { medio: true });
      const itens = [
        ["lixeira", "Limpar dados", "<b>Ctrl+Shift+Delete</b>: histórico, cookies, cache e senhas", em(0, "Ctrl + Shift")],
        ["bloqueio", "Bloqueador de pop-ups", "impede janelas sem você pedir", c.t(1)],
        ["senha", "Gerenciador de senhas", "guarda, preenche e sugere senhas fortes", em(1, "E o gerenciador")],
        ["setas", "Sincronização", "favoritos, histórico e senhas em outros dispositivos", c.t(2)],
        ["cookie", "Cookies de terceiros", "outros domínios · publicidade e rastreamento · bloqueáveis", c.t(3)],
        ["alerta", "Aviso “Não seguro”", "página sem HTTPS: não digite senhas", c.t(4), "#c27c0e"],
      ];
      itens.forEach((k, i) => cartaoLado(c, k[0], k[1], k[2], { left: 140 + (i % 3) * 470, top: 300 + Math.floor(i / 3) * 200, width: 450, height: 180 }, k[3], { h3: 27, p: 21, icone: 72, cor: k[4] }));
      c.quadro("resumo", "O <b>cadeado</b> e o <b>HTTPS</b> indicam conexão <b>criptografada</b>, não que o site é confiável. Sites de <b>phishing</b> também usam HTTPS.", { left: 140, top: 720, width: 1400 }, c.t(5)).querySelector("p").style.fontSize = "34px";
    },
  },

  // -------------------------------------------------- Mecanismos de busca
  {
    id: "busca",
    visual: "Caixa de busca com lupa e “concurso público”, etiquetas Google, Bing e DuckDuckGo. Depois, tabela de operadores (aspas, menos, site:, filetype:, OR, asterisco, intitle:) com exemplos, linha a linha. No fim, quadro âmbar e dois cartões: Chrome = navegador ≠ Google = buscador.",
    secao: "Mecanismos de busca",
    bit: BIT_CANTO,
    falas: [
      "Os mecanismos de busca, como Google, Bing e DuckDuckGo, indexam páginas da web e permitem encontrá-las por palavras-chave.",
      "Operadores refinam a pesquisa. As aspas buscam a frase exata, e o sinal de menos exclui um termo, como em jaguar, menos carro.",
      "O operador site: busca só em um site ou domínio, e o filetype: busca um tipo de arquivo, como PDF.",
      "O OR busca um termo ou outro, o asterisco é um curinga para palavras desconhecidas, e o intitle: procura o termo no título da página.",
      "Pegadinha: o Google não é um navegador. Ele é um mecanismo de busca; o navegador da empresa é o Chrome. Navegador e buscador são coisas diferentes.",
    ],
    montar(c) {
      const em = (i, s, d) => emTrecho(c, this.falas, i, s, d);
      const A = [c.titulo("Mecanismos de busca", "Buscadores e operadores", TITULO, c.t(0), { medio: true })];
      const barra = c.novo(`<div class="abs" style="left:140px;top:330px;width:1100px;height:110px;border-radius:999px;background:#fff;box-shadow:var(--sombra);display:flex;align-items:center;gap:26px;padding:0 40px">
        ${icone("lupa")}<span style="font-size:40px;color:var(--texto)">concurso público</span></div>`);
      barra.querySelector(".icone").style.cssText = "width:60px;height:60px;margin:0";
      A.push(c.entra(barra, c.t(0, 0.3), "zoom"));
      [["Google", 140], ["Bing", 380], ["DuckDuckGo", 580]].forEach(([n, x]) => A.push(pilula(c, n, { left: x, top: 480 }, em(0, n))));
      A.push(c.texto("<b>Indexam</b> páginas e permitem encontrá-las por <b>palavras-chave</b>.", { left: 140, top: 570, width: 1300 }, em(0, "indexam")));
      A.forEach((e) => c.sai(e, c.t(1) - 0.4));

      const m = (t) => `<span class="mono">${t}</span>`;
      const tab = c.tabela(["Operador", "Efeito", "Exemplo"], [
        [m("\"aspas\""), "frase exata", m("\"concurso público\"")],
        [m("-") + " (menos)", "exclui um termo", m("jaguar -carro")],
        [m("site:"), "só em um site ou domínio", m("edital site:gov.br")],
        [m("filetype:"), "tipo de arquivo", m("edital filetype:pdf")],
        [m("OR"), "um termo ou outro", m("Cebraspe OR FGV")],
        [m("*") + " (asterisco)", "curinga", m("\"o * da informação\"")],
        [m("intitle:"), "termo no título", m("intitle:concurso")],
      ], { left: 140, top: 300, width: 1400 }, c.t(1), [em(1, "As aspas"), em(1, "o sinal de menos"), c.t(2), em(2, "e o filetype"), c.t(3), em(3, "o asterisco"), em(3, "e o intitle")]);
      tab.style.fontSize = "28px";
      tab.querySelectorAll("td").forEach((td) => { td.style.padding = "13px 34px"; });
      c.sai(tab, c.t(4) - 0.4);
      c.quadro("prova", "“O Google é um navegador.” <b>Errado:</b> Google é <b>mecanismo de busca</b>; o navegador da empresa é o <b>Chrome</b>.", { left: 140, top: 320, width: 1400 }, c.t(4)).querySelector("p").style.fontSize = "36px";
      cartaoLado(c, "navegador", "Chrome", "<b>navegador</b>: acessa as páginas", { left: 140, top: 600, width: 620, height: 180 }, em(4, "Navegador e buscador"), { tipo: "esquerda" });
      const dif = c.novo(`<div class="abs" style="left:790px;top:620px;font:800 110px var(--sans);color:var(--errado)">≠</div>`);
      c.entra(dif, em(4, "Navegador e buscador", 0.5), "pop");
      cartaoLado(c, "lupa", "Google", "<b>mecanismo de busca</b>: indexa e encontra", { left: 920, top: 600, width: 620, height: 180 }, em(4, "e buscador"), { tipo: "direita" });
    },
  },

  // ------------------------------------------------------------ Revisão
  {
    id: "revisao",
    visual: "Sete cartões de revisão com ícone de verificação, um por frase: Redes, Equipamentos, Transmissão, Modelos, Endereços, Protocolos e Web e navegadores.",
    secao: "Revisão",
    bit: BIT_CANTO,
    falas: [
      "Hora de revisar o que você aprendeu.",
      "Redes: PAN, LAN, MAN e WAN vão do alcance pessoal ao mundial, e a intranet usa as tecnologias da internet, com acesso restrito.",
      "Equipamentos: o hub espalha, o switch entrega usando o MAC, e o roteador liga redes diferentes usando o IP.",
      "Transmissão: a fibra óptica usa luz e é imune a interferência, e o full-duplex transmite nos dois sentidos ao mesmo tempo.",
      "Modelos: o OSI tem sete camadas, e o TCP/IP, quatro. O TCP garante a entrega; o UDP é mais rápido.",
      "Endereços: o IPv4 tem 32 bits, e o IPv6, 128. O DHCP distribui os IPs, o DNS traduz nomes, e 127.0.0.1 é o próprio computador.",
      "Protocolos: o HTTPS usa a porta 443. O SMTP envia, o POP3 baixa, o IMAP sincroniza, e ninguém vê quem está em Cco.",
      "E a web é um serviço da internet, a navegação anônima não deixa ninguém invisível, e o Google é buscador, não navegador.",
    ],
    montar(c) {
      c.titulo("Revisão", "O que você aprendeu", TITULO, c.t(0), { medio: true });
      const cartoes = [
        ["Redes", "PAN · LAN · MAN · WAN<br>Intranet: acesso restrito"],
        ["Equipamentos", "Hub espalha · switch usa MAC · roteador usa IP"],
        ["Transmissão", "Fibra = luz, sem interferência · full-duplex"],
        ["Modelos", "OSI: 7 camadas · TCP/IP: 4<br>TCP confiável · UDP rápido"],
        ["Endereços", "IPv4 32 bits · IPv6 128<br>DHCP · DNS · 127.0.0.1"],
        ["Protocolos", "HTTPS 443 · SMTP envia<br>POP3 baixa · IMAP sincroniza"],
        ["Web e navegadores", "Web ⊂ internet · anônima ≠ invisível · Google = buscador"],
      ];
      cartoes.forEach((k, i) => {
        const col = i % 4, lin = Math.floor(i / 4);
        const e = c.novo(`<div class="cartao" style="left:${140 + col * 415}px;top:${310 + lin * 300}px;width:385px;height:270px;padding:30px">
          <div style="display:flex;align-items:center;gap:16px">${icone("check")}<h3 style="margin:0;font-size:32px">${k[0]}</h3></div>
          <p style="margin-top:16px;font-size:27px">${k[1]}</p></div>`);
        e.querySelector(".icone").style.cssText = "margin:0;width:54px;height:54px;flex-shrink:0";
        c.entra(e, c.t(i + 1), "pop");
      });
    },
  },
  {
    id: "encerramento",
    visual: "Bit grande à esquerda. Cartão “Pratique agora: 15 questões” e cartão “Próximo vídeo: Capítulo 4 — Pacote Office” na cor do capítulo 4. Bit acena na despedida.",
    secao: "Revisão",
    bit: { x: 470, y: 990, s: 1.3 },
    falas: [
      "Agora é a sua vez: faça as quinze questões do final do capítulo e confira a correção comentada.",
      "No próximo vídeo, vamos estudar o Pacote Office.",
      "Até lá, e bons estudos!",
    ],
    montar(c) {
      c.cartao({ icone: "questoes", titulo: "Pratique agora", texto: "<b>15 questões</b> no final do Capítulo 3, com correção comentada." }, { left: 900, top: 230, width: 820 }, c.t(0));
      const prox = c.novo(`<div class="cartao" style="left:900px;top:640px;width:820px;--cor:#15803d">
        <div class="rotulo">Próximo vídeo</div><h3 style="margin-top:14px;font-family:var(--serif);font-size:52px">Capítulo 4 —<br>Pacote Office</h3></div>`);
      c.entra(prox, c.t(1), "baixo");
      c.bit.acenar(c.t(2));
    },
  },
];

cenas.forEach((cena) => { cena.falas = cena.falas.map(pronunciar); });

serie.capitulo({
  numero: 3,
  titulo: "Internet e Navegadores",
  cor: "#4f46e5",
  proximo: "Capítulo 4 — Pacote Office",
  cenas,
});
