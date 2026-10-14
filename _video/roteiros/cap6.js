// Roteiro da videoaula do Capítulo 6 — Armazenamento em Nuvem.
// Cada cena tem a narração (falas) e a montagem visual (montar).
// c.t(i) = instante em que começa a fala i da cena.

const BIT_CANTO = { x: 1720, y: 1020, s: 0.58 };

// ---------------------------------------------------------------- Ícones extras
// Mesmo estilo plano dos ícones da série (viewBox 0 0 120 120).
const NUVEM_D = "M34 92a24 24 0 0 1-2-48 30 30 0 0 1 58 6 21 21 0 0 1-2 42z";
Object.assign(ICONES, {
  pasta: `<path class="c2" d="M8 30a8 8 0 0 1 8-8h28l10 12h50a8 8 0 0 1 8 8v6H8z"/><rect class="c1" x="8" y="42" width="104" height="62" rx="8"/>`,
  elo: `<circle class="cs" cx="60" cy="60" r="52"/><g transform="rotate(-45 60 60)"><rect class="s1" x="22" y="47" width="44" height="26" rx="13"/><rect class="s1" x="54" y="47" width="44" height="26" rx="13"/></g>`,
  olho: `<path class="c2" d="M6 60c14-24 32-36 54-36s40 12 54 36c-14 24-32 36-54 36S20 84 6 60z"/><circle class="cb" cx="60" cy="60" r="24"/><circle class="c1" cx="60" cy="60" r="13"/>`,
  comentario: `<path class="c1" d="M20 14h80a12 12 0 0 1 12 12v46a12 12 0 0 1-12 12H54l-24 22V84H20A12 12 0 0 1 8 72V26a12 12 0 0 1 12-12z"/><rect class="cb" x="26" y="34" width="68" height="9" rx="4"/><rect class="cb" x="26" y="54" width="44" height="9" rx="4"/>`,
  lapis: `<path class="c1" d="M80 12l28 28-62 62-32 6 6-32z"/><path class="c2" d="M80 12l28 28-12 12-28-28z"/><path class="cb" d="M22 82l16 16-20 4z"/>`,
  painel: `<rect class="cs" x="8" y="14" width="104" height="92" rx="14"/><path class="s1" d="M28 36h64M28 60h64M28 84h64"/><circle class="c1" cx="46" cy="36" r="10"/><circle class="c1" cx="76" cy="60" r="10"/><circle class="c1" cx="56" cy="84" r="10"/>`,
  elastico: `<rect class="c1" x="30" y="42" width="60" height="36" rx="8"/><path class="s1" d="M60 34V10M46 22l14-14 14 14M60 86v24M46 98l14 14 14-14"/>`,
  medidor: `<path class="cs" d="M8 86a52 52 0 0 1 104 0z"/><path class="s1" d="M22 82a38 38 0 0 1 76 0"/><path class="st" d="M60 82l24-28"/><circle class="ct" cx="60" cy="82" r="9"/>`,
  conteiner: `<rect class="c1" x="8" y="30" width="104" height="62" rx="6"/>${[24, 40, 56, 72, 88].map((x) => `<rect class="c2" x="${x - 3}" y="40" width="6" height="42" rx="3"/>`).join("")}<rect class="cs" x="8" y="22" width="104" height="10" rx="4"/>`,
  funcao: `<rect class="cs" x="8" y="14" width="104" height="92" rx="16"/><path class="c1" d="M68 20L36 66h22l-8 34 34-48H62z"/>`,
  nuvemPublica: `<path class="c1" transform="translate(12 -8) scale(.8)" d="${NUVEM_D}"/>${[28, 60, 92].map((x) => `<circle class="c2" cx="${x}" cy="84" r="8"/><path class="c2" d="M${x - 13} 112c0-10 6-16 13-16s13 6 13 16z"/>`).join("")}`,
  nuvemPrivada: `<path class="c1" d="${NUVEM_D}"/><path d="M52 60v-6a8 8 0 0 1 16 0v6" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/><rect class="cb" x="45" y="58" width="30" height="24" rx="5"/>`,
  nuvemHibrida: `<path class="c1" transform="translate(-6 -4) scale(.62)" d="${NUVEM_D}"/><path class="c2" transform="translate(44 44) scale(.62)" d="${NUVEM_D}"/><path class="s1" d="M80 22h18v18M40 98H22V80"/>`,
  nuvemComunitaria: `<path class="c1" transform="translate(12 -8) scale(.8)" d="${NUVEM_D}"/><rect class="c2" x="14" y="80" width="26" height="32" rx="3"/><rect class="c2" x="47" y="72" width="26" height="40" rx="3"/><rect class="c2" x="80" y="80" width="26" height="32" rx="3"/>${[20, 53, 86].map((x) => `<rect class="cb" x="${x}" y="88" width="6" height="6" rx="1"/><rect class="cb" x="${x + 9}" y="88" width="6" height="6" rx="1"/>`).join("")}`,
  carro: `<path class="c1" d="M16 66l12-26a10 10 0 0 1 9-6h46a10 10 0 0 1 9 6l12 26v22a6 6 0 0 1-6 6H22a6 6 0 0 1-6-6z"/><path class="cs" d="M34 42h52l8 20H26z"/><circle class="ct" cx="36" cy="94" r="12"/><circle class="ct" cx="84" cy="94" r="12"/><rect class="cb" x="22" y="70" width="14" height="8" rx="3"/><rect class="cb" x="84" y="70" width="14" height="8" rx="3"/>`,
  fabrica: `<path class="c1" d="M8 108V58l26 14V58l26 14V58l26 14V18h20v90z"/><rect class="c2" x="86" y="10" width="20" height="10" rx="3"/>${[18, 44, 70].map((x) => `<rect class="cb" x="${x}" y="84" width="14" height="12" rx="2"/>`).join("")}`,
  escudo: `<path class="c1" d="M60 8l44 16v30c0 28-18 48-44 58C34 102 16 82 16 54V24z"/><path class="sb" d="M40 60l14 14 26-28"/>`,
  balanca: `<rect class="c1" x="56" y="16" width="8" height="84" rx="3"/><rect class="c1" x="32" y="98" width="56" height="12" rx="5"/><circle class="c1" cx="60" cy="16" r="8"/><path class="s1" d="M18 32h84M22 34L10 66M22 34l12 32M98 34L86 66M98 34l12 32"/><path class="c2" d="M4 66h36a18 18 0 0 1-36 0zM80 66h36a18 18 0 0 1-36 0z"/>`,
  historico: `<circle class="cs" cx="60" cy="60" r="52"/><path class="s1" d="M32 64a28 28 0 1 0 8-24"/><path class="s1" d="M36 24v18h18"/><path class="s1" d="M60 44v18l12 8"/>`,
  cofre: `<rect class="c1" x="12" y="14" width="96" height="90" rx="12"/><rect class="c2" x="22" y="24" width="76" height="70" rx="8"/><circle class="cb" cx="60" cy="59" r="20"/><path class="s1" d="M60 47v12l9 6"/><rect class="c1" x="24" y="104" width="14" height="8" rx="2"/><rect class="c1" x="82" y="104" width="14" height="8" rx="2"/>`,
  chave: `<circle class="c1" cx="38" cy="60" r="26"/><circle class="cb" cx="32" cy="60" r="9"/><path class="c1" d="M58 52h54v16h-10v14H88V68H76v10H62z"/>`,
  senha: `<rect class="c1" x="30" y="8" width="60" height="104" rx="12"/><rect class="cs" x="37" y="20" width="46" height="76" rx="4"/>${[47, 60, 73].map((x) => `<circle class="c1" cx="${x}" cy="58" r="5"/>`).join("")}<rect class="cb" x="52" y="100" width="16" height="5" rx="2"/>`,
});

// Cartão horizontal: ícone à esquerda, título e texto à direita.
function linhaIcone(c, ic, titulo, texto, estilo, t, tipo = "baixo", o = {}) {
  const e = c.novo(`<div class="cartao" style="display:flex;gap:${o.gap || 26}px;align-items:center;padding:${o.pad || "22px 32px"}">${icone(ic)}<div>
    <h3 style="margin:0;font-size:${o.fs || 34}px">${titulo}</h3>${texto ? `<p style="font-size:${o.fp || 27}px;margin-top:4px">${texto}</p>` : ""}</div></div>`, estilo);
  e.querySelector(".icone").style.cssText = `margin:0;flex-shrink:0;width:${o.iw || 72}px;height:${o.iw || 72}px`;
  if (o.cor) e.style.setProperty("--cor", o.cor);
  return c.entra(e, t, tipo);
}

// Etiqueta de estado (verde = certo, vermelha = erro).
function etiqueta(c, html, x, y, largura, tipo) {
  const cores = tipo === "erro" ? "background:#fbeae7;color:var(--errado)" : "background:#e9f6ef;color:var(--certo)";
  return c.novo(`<div class="abs pilula" style="left:${x}px;top:${y}px;width:${largura}px;text-align:center;font-size:26px;${cores}">${html}</div>`);
}

serie.capitulo({
  numero: 6,
  titulo: "Armazenamento em Nuvem",
  cor: "#0369a1",
  proximo: "Capítulo 7 — Segurança da Informação",
  cenas: [
    // ------------------------------------------------------------ Abertura
    {
      id: "abertura",
      visual: "Bit grande à esquerda acena para o público. À direita surgem o rótulo “Capítulo 6” e o título “Armazenamento em Nuvem”. Um roteiro de 5 tópicos aparece item por item, cada um na frase que o anuncia. Na última frase, Bit dá um pulinho.",
      secao: "Abertura",
      bit: { x: 470, y: 990, s: 1.3 },
      falas: [
        "Olá! Eu sou o Bit. Que bom ter você de volta à série Informática para Concursos!",
        "Neste capítulo seis, o tema é o Armazenamento em Nuvem.",
        "Você vai entender o que é a nuvem e quais são as suas características.",
        "Vai conhecer a virtualização e os modelos da nuvem.",
        { texto: "Depois, custos e acordos de serviço, sincronização e backup.", falar: "Depois, custos e acordos de serviço, sincronização e bécâp." },
        "E, para fechar, compartilhamento e segurança.",
        "Vamos lá?",
      ],
      montar(c) {
        c.bit.acenar(c.t(0, 0.2));
        c.titulo("Capítulo 6", "Armazenamento<br>em Nuvem", { left: 900, top: 190 }, c.t(1));
        c.lista([
          "O que é a <b>nuvem</b> e suas <b>características</b>",
          "<b>Virtualização</b> e <b>modelos</b> da nuvem",
          "<b>Custos</b> e <b>acordos de serviço</b>",
          "<b>Sincronização</b> e <b>backup</b>",
          "<b>Compartilhamento</b> e <b>segurança</b>",
        ], { left: 900, top: 520, width: 900 }, [c.t(2), c.t(3), c.t(4), c.t(4, 2.5), c.t(5)]);
        c.bit.pular(c.t(6));
      },
    },

    // ------------------------------------------------------ O que é a nuvem
    {
      id: "conceito",
      visual: "Título “Computação em nuvem” com a etiqueta “cloud computing”. A definição aparece escrita e, em seguida, quatro blocos com ícones: Armazenamento, Processamento, Bancos de dados e Aplicativos. Depois, diagrama: uma grande nuvem ligada ao Datacenter do provedor; à esquerda, celular e notebook se conectam à nuvem por setas. Faixa “Acesso de qualquer lugar, com internet”.",
      secao: "O que é a nuvem",
      bit: BIT_CANTO,
      falas: [
        { texto: "Vamos começar pelo conceito. Computação em nuvem, ou cloud computing, é o fornecimento de recursos computacionais pela internet, sob demanda.", falar: "Vamos começar pelo conceito. Computação em nuvem, ou cláud compiúting, é o fornecimento de recursos computacionais pela internet, sob demanda." },
        "Esses recursos podem ser armazenamento, processamento, bancos de dados e aplicativos.",
        { texto: "Em vez de guardar tudo só no computador, ou de manter servidores próprios, você usa a estrutura dos datacenters de provedores especializados.", falar: "Em vez de guardar tudo só no computador, ou de manter servidores próprios, você usa a estrutura dos dáta cênters de provedores especializados." },
        "E acessa tudo de qualquer lugar e de qualquer dispositivo, desde que tenha conexão com a internet.",
      ],
      montar(c) {
        c.titulo("Conceito", "Computação em nuvem", { left: 140, top: 150 }, c.t(0), { medio: true });
        const pil = c.entra(c.novo(`<div class="abs pilula" style="left:900px;top:214px">cloud computing</div>`), c.t(0, 3), "pop");
        const def = c.texto("Fornecimento de <b>recursos computacionais</b> pela <b>internet</b>, <b>sob demanda</b>.", { left: 140, top: 330, width: 1400 }, c.t(0, 4.6));
        const recursos = [["pasta", "Armazenamento"], ["cpu", "Processamento"], ["dados", "Bancos de dados"], ["janela", "Aplicativos"]];
        const nos = recursos.map((r, i) => {
          const n = c.no({ icone: r[0], titulo: r[1] }, { left: 140 + i * 350, top: 450, width: 320, height: 250 }, c.t(1, 1.5 + i * 1.1));
          n.querySelector("strong").style.fontSize = "32px";
          return n;
        });
        [pil, def, ...nos].forEach((e) => c.sai(e, c.t(2) - 0.4));

        const nuvem = c.novo(`<div class="abs" style="left:700px;top:330px;width:440px;height:280px">${icone("nuvem")}
          <div style="position:absolute;left:0;right:0;top:142px;text-align:center;font:800 44px var(--sans);color:#fff">Nuvem</div></div>`);
        nuvem.querySelector(".icone").style.cssText = "position:absolute;left:0;top:-70px;width:440px;height:440px";
        c.entra(nuvem, c.t(2, 4.6), "zoom");
        c.no({ icone: "servidor", titulo: "Datacenter", texto: "do provedor" }, { left: 1300, top: 320, width: 300, height: 300 }, c.t(2, 6.4));
        c.seta(1120, 470, 1285, 470, c.t(2, 6.8));

        c.no({ icone: "celular", titulo: "Celular" }, { left: 140, top: 320, width: 300, height: 210 }, c.t(3, 0.2));
        c.no({ icone: "notebook", titulo: "Notebook" }, { left: 140, top: 560, width: 300, height: 210 }, c.t(3, 0.6));
        c.seta(455, 425, 715, 470, c.t(3, 1.2));
        c.seta(455, 665, 715, 540, c.t(3, 1.6));
        c.chave("Acesso de <em>qualquer lugar</em> · basta ter <em>internet</em>", c.t(3, 2.4));
      },
    },
    {
      id: "exemplos",
      visual: "Três cartões: Armazenamento (pasta: Google Drive, OneDrive, iCloud, Dropbox), Aplicativos (janela: Gmail, Microsoft 365) e Infraestrutura (servidor: AWS, Microsoft Azure, Google Cloud). Quadro âmbar “Pegadinha de banca”: arquivos da nuvem não ficam no navegador, e sim em servidores remotos.",
      secao: "O que é a nuvem",
      bit: BIT_CANTO,
      falas: [
        { texto: "Você já conhece vários serviços de nuvem. Para armazenar arquivos, temos o Google Drive, o OneDrive, o iCloud e o Dropbox.", falar: "Você já conhece vários serviços de nuvem. Para armazenar arquivos, temos o Google Drive, o uândráiv, o ái cláud e o Dropbox." },
        { texto: "Como aplicativos, o Gmail e o Microsoft 365. E, como infraestrutura para empresas, a Amazon Web Services, o Microsoft Azure e o Google Cloud.", falar: "Como aplicativos, o gí mêiu e o Microsoft 365. E, como infraestrutura para empresas, a ámazon uéb sérvicis, o Microsoft ájur e o gúgol cláud." },
        "Agora, atenção à pegadinha: os arquivos da nuvem não ficam armazenados no navegador.",
        { texto: "Eles ficam em servidores remotos, nos datacenters do provedor. O navegador é só uma das formas de acesso.", falar: "Eles ficam em servidores remotos, nos dáta cênters do provedor. O navegador é só uma das formas de acesso." },
      ],
      montar(c) {
        c.titulo("Exemplos", "Serviços de nuvem", { left: 140, top: 150 }, c.t(0), { medio: true });
        c.cartao({ icone: "pasta", titulo: "Armazenamento", texto: "Google Drive · OneDrive<br>iCloud · Dropbox" }, { left: 140, top: 310, width: 480, height: 340 }, c.t(0, 3.4));
        c.cartao({ icone: "janela", titulo: "Aplicativos", texto: "Gmail<br>Microsoft 365" }, { left: 660, top: 310, width: 480, height: 340 }, c.t(1));
        c.cartao({ icone: "servidor", titulo: "Infraestrutura", texto: "AWS · Microsoft Azure<br>Google Cloud" }, { left: 1180, top: 310, width: 480, height: 340 }, c.t(1, 3.6));
        const q = c.quadro("prova", `“Os arquivos da nuvem ficam no navegador.” <b style="color:var(--errado)">Errado.</b><span class="q2"><br>Ficam em <b>servidores remotos</b>, nos datacenters do provedor.</span>`, { left: 140, top: 700, width: 1380 }, c.t(2));
        c.entra(q.querySelector(".q2"), c.t(3), "fade");
      },
    },

    // ------------------------------------------------- Características
    {
      id: "caracteristicas",
      visual: "Etiqueta “Definição do NIST (EUA)”. Cinco faixas entram uma por frase, com ícone: Autoatendimento sob demanda (controles), Amplo acesso pela rede (globo), Agrupamento de recursos (pessoas), Elasticidade rápida (setas para cima e para baixo) e Serviço medido (medidor). Na última frase, as faixas saem e entra um gráfico: a linha da demanda sobe e desce, e a linha dos recursos acompanha em degraus. Quadro azul “Resumo estratégico”.",
      secao: "Características",
      bit: BIT_CANTO,
      falas: [
        "Segundo o NIST, o instituto de padrões dos Estados Unidos, a nuvem tem cinco características essenciais.",
        "Autoatendimento sob demanda: o cliente contrata e ajusta recursos sozinho, sem atendentes.",
        "Amplo acesso pela rede: acesso pela internet, de computadores, celulares e tablets.",
        "Agrupamento de recursos: o provedor compartilha a mesma infraestrutura entre vários clientes.",
        "Elasticidade rápida: os recursos aumentam ou diminuem rapidamente, conforme a necessidade.",
        "E serviço medido: o uso é monitorado e cobrado conforme o consumo.",
        "A palavra-chave mais cobrada é escalabilidade, ou elasticidade: a nuvem cresce e diminui com a demanda, e você paga só pelo que consome.",
      ],
      montar(c) {
        c.titulo("Características essenciais", "As cinco características", { left: 140, top: 150 }, c.t(0), { medio: true });
        const nist = c.entra(c.novo(`<div class="abs pilula" style="left:880px;top:214px">Definição do NIST (EUA)</div>`), c.t(0, 1.2), "pop");
        const itens = [
          ["painel", "Autoatendimento sob demanda", "contrata e ajusta sozinho, sem atendentes"],
          ["publico", "Amplo acesso pela rede", "pela internet: computador, celular, tablet"],
          ["pessoas", "Agrupamento de recursos", "mesma infraestrutura para vários clientes"],
          ["elastico", "Elasticidade rápida", "aumenta ou diminui conforme a necessidade"],
          ["medidor", "Serviço medido", "uso monitorado e cobrado: pague pelo que usar"],
        ];
        const linhas = itens.map((k, i) => {
          const e = c.novo(`<div class="cartao" style="left:140px;top:${305 + i * 112}px;width:1400px;height:96px;display:flex;align-items:center;gap:28px;padding:0 32px">
            ${icone(k[0])}<h3 style="margin:0;font-size:34px;width:540px;flex-shrink:0">${k[1]}</h3><p style="font-size:29px">${k[2]}</p></div>`);
          e.querySelector(".icone").style.cssText = "margin:0;width:62px;height:62px;flex-shrink:0";
          return c.entra(e, c.t(i + 1), "esquerda");
        });
        [nist, ...linhas].forEach((e) => c.sai(e, c.t(6) - 0.4));

        const graf = c.novo(`<svg class="abs" style="left:0;top:0;width:1920px;height:1080px" viewBox="0 0 1920 1080">
          <path class="eixo" d="M200 330V690H1100" stroke="var(--borda)" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <path class="dem" d="M200 640C330 640 400 400 520 390S700 600 800 610S960 520 1090 560" stroke="var(--cor-media)" stroke-width="12" fill="none" stroke-linecap="round"/>
          <path class="rec" d="M200 600H290V540H350V460H410V400H470V350H650V440H720V530H1090" stroke="var(--cor)" stroke-width="8" fill="none" stroke-linejoin="round" stroke-linecap="round"/></svg>`);
        c.entra(graf.querySelector(".eixo"), c.t(6), "fade");
        c.desenhar(graf.querySelector(".dem"), c.t(6, 0.4), 2.2);
        c.desenhar(graf.querySelector(".rec"), c.t(6, 1.2), 2.2);
        const legenda = c.novo(`<div class="abs" style="left:1160px;top:380px;font:700 30px var(--sans);display:grid;gap:26px">
          <div style="display:flex;align-items:center;gap:18px"><span style="width:60px;height:12px;border-radius:6px;background:var(--cor-media)"></span>demanda</div>
          <div style="display:flex;align-items:center;gap:18px"><span style="width:60px;height:8px;border-radius:4px;background:var(--cor)"></span>recursos da nuvem</div></div>`);
        c.entra(legenda, c.t(6, 1.6), "fade");
        c.quadro("resumo", "<b>Escalabilidade/elasticidade</b>: a nuvem cresce e diminui conforme a demanda, e o cliente <b>paga só pelo que consome</b>.", { left: 140, top: 730, width: 1400 }, c.t(6, 5));
      },
    },

    // ----------------------------------------- Vantagens e desvantagens
    {
      id: "vantagens",
      visual: "Duas colunas: Vantagens (verde, com ✓) e Desvantagens (vermelha, com alerta). Os itens entram um a um, no momento em que são citados. Quadro verde “Memorize” no rodapé.",
      secao: "Vantagens e desvantagens",
      bit: BIT_CANTO,
      falas: [
        "Vantagens da nuvem: você acessa de qualquer lugar e dispositivo, e não precisa comprar nem manter servidores.",
        "Ela cresce conforme a demanda, permite colaboração em tempo real, e a manutenção e as atualizações ficam com o provedor.",
        "Já as desvantagens: ela depende de conexão com a internet, e tem custos recorrentes de assinatura.",
        "Os dados ficam com terceiros, o que afeta a privacidade; é difícil migrar de provedor; e, se o provedor falhar, o serviço fica indisponível.",
        "Memorize: nuvem é acesso de qualquer lugar, escalabilidade e pagamento pelo uso. O principal ponto fraco é a dependência da internet.",
      ],
      montar(c) {
        c.titulo("Prós e contras", "Vantagens e desvantagens", { left: 140, top: 150 }, c.t(0), { medio: true });
        const coluna = (x, cor, ic, titulo, itens, tempos) => {
          const e = c.novo(`<div class="cartao" style="left:${x}px;top:300px;width:700px;height:400px;padding:28px 36px;--cor:${cor}">
            <div style="display:flex;align-items:center;gap:18px;margin-bottom:10px">${icone(ic)}<h3 style="margin:0;color:${cor}">${titulo}</h3></div>
            ${itens.map((i) => `<div class="item" style="font-size:28px;line-height:1.3;color:var(--texto);padding:9px 0;border-top:2px solid var(--borda)">${i}</div>`).join("")}</div>`);
          e.querySelector(".icone").style.cssText = "margin:0;width:54px;height:54px";
          c.entra(e, tempos[0], "baixo");
          e.querySelectorAll(".item").forEach((li, i) => c.entra(li, tempos[i] + (i ? 0 : 0.3), "esquerda"));
        };
        coluna(140, "#2f8a5b", "check", "Vantagens", [
          "Acesso de qualquer lugar e dispositivo",
          "Sem comprar e manter servidores",
          "Escalabilidade conforme a demanda",
          "Colaboração em tempo real",
          "Atualização e manutenção pelo provedor",
        ], [c.t(0, 1.2), c.t(0, 4.6), c.t(1), c.t(1, 2.4), c.t(1, 4.8)]);
        coluna(880, "#c2412f", "alerta", "Desvantagens", [
          "Depende de conexão com a internet",
          "Custos recorrentes de assinatura",
          "Dados com terceiros (privacidade)",
          "Difícil migrar de provedor (dependência)",
          "Indisponível se o provedor falhar",
        ], [c.t(2, 1.4), c.t(2, 4.4), c.t(3), c.t(3, 4), c.t(3, 6.2)]);
        const q = c.quadro("dica", "Nuvem = <b>qualquer lugar</b> + <b>escalabilidade</b> + <b>pague pelo uso</b>. Ponto fraco: <b>dependência da internet</b>.", { left: 140, top: 740, width: 1400 }, c.t(4));
        q.querySelector("p").style.fontSize = "36px";
      },
    },

    // ------------------------------------------------------- Virtualização
    {
      id: "virtualizacao",
      visual: "Sem texto corrido: diagrama em camadas. Na base, a barra azul-marinho “Servidor físico”; acima, três caixas tracejadas “Máquina virtual 1, 2 e 3”; entre elas e o servidor entra a barra “Hypervisor — cria e controla as máquinas virtuais”. No fim, cada máquina virtual ganha a etiqueta de um cliente diferente.",
      secao: "Virtualização",
      bit: BIT_CANTO,
      falas: [
        "Mas como um provedor atende tantos clientes ao mesmo tempo? Com a virtualização, a base da nuvem.",
        { texto: "Nos datacenters, cada servidor físico é dividido em várias máquinas virtuais.", falar: "Nos dáta cênters, cada servidor físico é dividido em várias máquinas virtuais." },
        { texto: "Quem cria e controla essas máquinas virtuais é um software chamado hypervisor.", falar: "Quem cria e controla essas máquinas virtuais é um software chamado ráipervaizor." },
        "É isso que permite entregar recursos sob demanda a muitos clientes ao mesmo tempo.",
      ],
      montar(c) {
        c.titulo("A base da nuvem", "Virtualização", { left: 140, top: 150 }, c.t(0), { medio: true });
        const srv = c.novo(`<div class="abs" style="left:260px;top:730px;width:1120px;height:120px;border-radius:24px;background:var(--serie);color:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 44px;box-shadow:var(--sombra)">
          <b style="font:800 42px var(--sans)">Servidor físico</b><span style="font:700 24px var(--sans);opacity:.8;letter-spacing:.12em;text-transform:uppercase">hardware do datacenter</span></div>`);
        c.entra(srv, c.t(1, 1.6));
        [0, 1, 2].forEach((i) => {
          const vm = c.novo(`<div class="abs" style="left:${260 + i * 390}px;top:330px;width:340px;height:250px;border-radius:24px;background:#fff;border:5px dashed var(--cor);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;box-shadow:var(--sombra)">
            ${icone("janela")}<b style="font:800 32px var(--sans)">Máquina virtual ${i + 1}</b><span class="pilula cli" style="font-size:24px">cliente ${"ABC"[i]}</span></div>`);
          vm.querySelector(".icone").style.cssText = "margin:0;width:84px;height:84px";
          c.entra(vm, c.t(1, 3.4 + i * 0.5), "pop");
          c.entra(vm.querySelector(".cli"), c.t(3, 3.4 + i * 0.4), "pop");
        });
        const hyp = c.novo(`<div class="abs" style="left:260px;top:605px;width:1120px;height:100px;border-radius:24px;background:var(--cor);color:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 44px;box-shadow:var(--sombra)">
          <b style="font:800 42px var(--sans)">Hypervisor</b><span style="font:600 30px var(--sans)">cria e controla as máquinas virtuais</span></div>`);
        c.entra(hyp, c.t(2, 3.4), "zoom");
      },
    },
    {
      id: "vm-conteiner",
      visual: "Dois cartões lado a lado: Máquina virtual (janela) e Contêiner (contêiner de carga). As linhas de comparação entram uma a uma: o que contém, tamanho e início, isolamento e exemplos.",
      secao: "Virtualização",
      bit: BIT_CANTO,
      falas: [
        "Além das máquinas virtuais, existem os contêineres.",
        "A máquina virtual contém um sistema operacional completo. Já o contêiner leva só a aplicação e suas dependências, e compartilha o kernel do sistema hospedeiro.",
        "Por isso, a máquina virtual é maior e leva mais tempo para iniciar; o contêiner é leve e inicia em segundos. Mas o isolamento da máquina virtual é mais forte.",
        { texto: "Exemplos de máquina virtual: VMware, Hyper-V, KVM e VirtualBox. De contêiner: o Docker, gerenciado em larga escala pelo Kubernetes.", falar: "Exemplos de máquina virtual: vê ême uér, ráiper vê, cá vê ême e VirtualBox. De contêiner: o dóquer, gerenciado em larga escala pelo kubernétis." },
      ],
      montar(c) {
        c.titulo("Comparação", "Máquina virtual × contêiner", { left: 140, top: 150 }, c.t(0), { medio: true });
        const rotulos = ["Contém", "Tamanho e início", "Isolamento", "Exemplos"];
        const cartao = (x, ic, titulo, valores, tCartao, tempos) => {
          const e = c.novo(`<div class="cartao" style="left:${x}px;top:300px;width:690px;height:615px;padding:30px 36px">
            <div style="display:flex;align-items:center;gap:20px">${icone(ic)}<h3 style="margin:0">${titulo}</h3></div>
            ${valores.map((v, i) => `<div class="prop" style="margin-top:16px;padding-top:14px;border-top:2px solid var(--borda)"><div class="rotulo" style="font-size:20px">${rotulos[i]}</div><p style="font-size:29px;color:var(--texto);margin-top:4px">${v}</p></div>`).join("")}</div>`);
          e.querySelector(".icone").style.cssText = "margin:0;width:72px;height:72px";
          c.entra(e, tCartao, "baixo");
          e.querySelectorAll(".prop").forEach((p, i) => c.entra(p, tempos[i], "esquerda"));
        };
        cartao(140, "janela", "Máquina virtual", [
          "um <b>sistema operacional completo</b>",
          "maior, demora mais para iniciar",
          "<b>mais forte</b>",
          "VMware · Hyper-V · KVM · VirtualBox",
        ], c.t(0, 0.2), [c.t(1, 0.4), c.t(2, 0.6), c.t(2, 7.2), c.t(3, 0.4)]);
        cartao(870, "conteiner", "Contêiner", [
          "só a <b>aplicação e suas dependências</b>; compartilha o kernel do hospedeiro",
          "<b>leve</b>, inicia em segundos",
          "mais leve",
          "Docker, gerenciado em larga escala pelo Kubernetes",
        ], c.t(0, 1.6), [c.t(1, 4.2), c.t(2, 4.6), c.t(2, 7.6), c.t(3, 4.6)]);
      },
    },

    // -------------------------------------------------- Modelos de serviço
    {
      id: "modelos",
      visual: "Pilha de três camadas montada de baixo para cima: IaaS (azul forte), PaaS (azul médio) e SaaS (branca), cada uma com sigla, nome, descrição e exemplos, que entram quando citados. No fim, seta subindo ao lado da pilha (“menos o cliente gerencia”) e quadro verde “Memorize”: I → P → S.",
      secao: "Modelos de serviço",
      bit: BIT_CANTO,
      falas: [
        "Agora, um dos assuntos mais cobrados: os modelos de serviço. Eles formam uma pilha de três camadas.",
        { texto: "Na base, a IaaS, Infraestrutura como Serviço: o provedor oferece servidores virtuais, armazenamento e rede; o cliente gerencia o sistema operacional e os aplicativos.", falar: "Na base, a aiás, Infraestrutura como Serviço: o provedor oferece servidores virtuais, armazenamento e rede; o cliente gerencia o sistema operacional e os aplicativos." },
        { texto: "Exemplos: Amazon EC2, as máquinas virtuais do Azure e o Google Compute Engine.", falar: "Exemplos: Amazon i cê dois, as máquinas virtuais do ájur e o gúgol compiút ênjin." },
        { texto: "No meio, a PaaS, Plataforma como Serviço: uma plataforma pronta para desenvolver e hospedar aplicações.", falar: "No meio, a pás, Plataforma como Serviço: uma plataforma pronta para desenvolver e hospedar aplicações." },
        { texto: "Ela já inclui sistema operacional, ambiente de execução e banco de dados; o cliente cuida só do código e dos dados. Como o Google App Engine e o Heroku.", falar: "Ela já inclui sistema operacional, ambiente de execução e banco de dados; o cliente cuida só do código e dos dados. Como o gúgol ép ênjin e o erôku." },
        { texto: "No topo, o SaaS, Software como Serviço: um aplicativo pronto, usado normalmente pelo navegador, sem instalar nem manter nada. Como o Gmail e o Google Docs.", falar: "No topo, o sás, Software como Serviço: um aplicativo pronto, usado normalmente pelo navegador, sem instalar nem manter nada. Como o gí mêiu e o Google Docs." },
        "Memorize, de baixo para cima: Infraestrutura, Plataforma e Software. Quanto mais alto, menos o cliente precisa gerenciar.",
      ],
      montar(c) {
        c.titulo("Modelos de serviço", "IaaS, PaaS e SaaS", { left: 140, top: 150 }, c.t(0), { medio: true });
        const camadas = [
          { sigla: "IaaS", nome: "Infraestrutura como Serviço", desc: "servidores virtuais, armazenamento e rede", ex: "Amazon EC2 · VMs do Azure · Google Compute Engine", top: 620, fundo: "var(--cor)", texto: "#fff", sig: "#fff", t: c.t(1, 0.2), tEx: c.t(2) },
          { sigla: "PaaS", nome: "Plataforma como Serviço", desc: "plataforma pronta para desenvolver e hospedar", ex: "Google App Engine · Azure App Service · Heroku", top: 475, fundo: "var(--cor-media)", texto: "var(--texto)", sig: "var(--serie)", t: c.t(3, 0.2), tEx: c.t(4, 7.2) },
          { sigla: "SaaS", nome: "Software como Serviço", desc: "aplicativo pronto, sem instalar nada", ex: "Gmail · Google Docs · Microsoft 365 na web · Dropbox", top: 330, fundo: "#fff", texto: "var(--texto)", sig: "var(--cor)", t: c.t(5, 0.2), tEx: c.t(5, 7.6) },
        ];
        camadas.forEach((k) => {
          const e = c.novo(`<div class="abs" style="left:140px;top:${k.top}px;width:1200px;height:130px;border-radius:24px;background:${k.fundo};color:${k.texto};box-shadow:var(--sombra);display:flex;align-items:center;gap:28px;padding:0 34px">
            <b style="font:800 60px var(--sans);color:${k.sig};width:170px;flex-shrink:0">${k.sigla}</b>
            <div style="flex:1"><div style="font:800 34px var(--sans)">${k.nome}</div><div style="font:500 26px var(--sans);opacity:.85;margin-top:4px">${k.desc}</div></div>
            <div class="ex" style="width:330px;flex-shrink:0;font:700 23px/1.35 var(--sans);opacity:.9">${k.ex}</div></div>`);
          c.entra(e, k.t, "baixo");
          c.entra(e.querySelector(".ex"), k.tEx, "fade");
        });
        c.seta(1420, 750, 1420, 345, c.t(6, 2), { dur: 1 });
        c.texto("<b>quanto mais alto,</b><br>menos o cliente<br>gerencia", { left: 1450, top: 420, width: 330 }, c.t(6, 2.8)).style.fontSize = "28px";
        const q = c.quadro("dica", "De baixo para cima: <b>I</b>nfraestrutura → <b>P</b>lataforma → <b>S</b>oftware.", { left: 140, top: 790, width: 1200 }, c.t(6));
        q.querySelector("p").style.fontSize = "36px";
      },
    },
    {
      id: "quem-gerencia",
      visual: "Grade “quem gerencia”: linhas Aplicação e dados, Ambiente de execução e sistema operacional, e Servidores, armazenamento e rede; colunas IaaS, PaaS e SaaS entram uma por frase, com células azuis (provedor) e claras (cliente) e o público típico embaixo. No fim, faixa âmbar “Pegadinha de banca” com a pista de cada modelo sob a sua coluna.",
      secao: "Modelos de serviço",
      bit: BIT_CANTO,
      falas: [
        "A diferença entre os três está em quem gerencia cada parte.",
        { texto: "Na IaaS, o provedor cuida de servidores, armazenamento e rede; o resto é com o cliente. É o modelo das equipes de infraestrutura.", falar: "Na aiás, o provedor cuida de servidores, armazenamento e rede; o resto é com o cliente. É o modelo das equipes de infraestrutura." },
        { texto: "Na PaaS, o provedor assume também o sistema operacional e o ambiente de execução. É o modelo dos desenvolvedores.", falar: "Na pás, o provedor assume também o sistema operacional e o ambiente de execução. É o modelo dos desenvolvedores." },
        { texto: "No SaaS, o provedor gerencia tudo, e o cliente só usa. É o modelo do usuário final.", falar: "No sás, o provedor gerencia tudo, e o cliente só usa. É o modelo do usuário final." },
        { texto: "Na prova, procure as pistas: aplicativo pronto, sem instalar, é SaaS. Máquinas virtuais, é IaaS. E ambiente para desenvolver aplicações, é PaaS.", falar: "Na prova, procure as pistas: aplicativo pronto, sem instalar, é sás. Máquinas virtuais, é aiás. E ambiente para desenvolver aplicações, é pás." },
      ],
      montar(c) {
        c.titulo("Modelos de serviço", "Quem gerencia o quê?", { left: 140, top: 150 }, c.t(0), { medio: true });
        const legenda = c.novo(`<div class="abs" style="left:900px;top:222px;display:flex;gap:28px;font:700 26px var(--sans)">
          <span style="display:flex;align-items:center;gap:10px"><i style="width:30px;height:30px;border-radius:8px;background:var(--cor)"></i>provedor</span>
          <span style="display:flex;align-items:center;gap:10px"><i style="width:30px;height:30px;border-radius:8px;background:var(--cor-suave);border:3px solid var(--cor-media)"></i>cliente</span></div>`);
        c.entra(legenda, c.t(0, 0.6), "fade");
        const ys = [380, 490, 600];
        const linhas = ["Aplicação e dados", "Ambiente de execução e sistema operacional", "Servidores, armazenamento e rede"];
        linhas.forEach((l, r) => {
          c.entra(c.novo(`<div class="abs" style="left:140px;top:${ys[r]}px;width:420px;height:96px;display:flex;align-items:center;font:700 28px/1.25 var(--sans)">${l}</div>`), c.t(0, 0.8 + r * 0.3), "esquerda");
        });
        c.entra(c.novo(`<div class="abs rotulo" style="left:140px;top:735px">Público típico</div>`), c.t(0, 1.7), "esquerda");
        const xs = [600, 920, 1240];
        const modelos = [
          ["IaaS", ["cliente", "cliente", "provedor"], "equipes de infraestrutura", 5.8],
          ["PaaS", ["cliente", "provedor", "provedor"], "desenvolvedores", 5.6],
          ["SaaS", ["provedor<br><small>(cliente só usa)</small>", "provedor", "provedor"], "usuário final", 3.6],
        ];
        modelos.forEach((m, j) => {
          const t0 = c.t(j + 1);
          c.entra(c.novo(`<div class="abs" style="left:${xs[j]}px;top:300px;width:300px;height:70px;text-align:center;font:800 48px var(--sans);color:var(--cor)">${m[0]}</div>`), t0, "pop");
          m[1].forEach((v, r) => {
            const prov = v.startsWith("provedor");
            const cel = c.novo(`<div class="abs" style="left:${xs[j]}px;top:${ys[r]}px;width:300px;height:96px;border-radius:18px;display:grid;place-items:center;text-align:center;line-height:1.1;font:700 28px var(--sans);${prov ? "background:var(--cor);color:#fff" : "background:var(--cor-suave);color:var(--texto);border:3px solid var(--cor-media)"}">${v}</div>`);
            const sm = cel.querySelector("small");
            if (sm) sm.style.cssText = "font-size:20px;font-weight:600;opacity:.9";
            c.entra(cel, t0 + 0.4 + (2 - r) * 0.35, "pop");
          });
          c.entra(c.novo(`<div class="abs pilula" style="left:${xs[j]}px;top:718px;width:300px;text-align:center;font-size:24px">${m[2]}</div>`), c.t(j + 1, m[3]), "baixo");
        });
        const pistas = [["“máquinas virtuais”", 4.6], ["“ambiente para desenvolver aplicações”", 6.6], ["“aplicativo pronto, sem instalar”", 1.9]];
        c.entra(c.novo(`<div class="abs rotulo" style="left:140px;top:832px;width:420px;color:var(--prova)">Pegadinha de banca:<br>pistas do enunciado</div>`), c.t(4), "esquerda");
        pistas.forEach((p, j) => {
          c.entra(c.novo(`<div class="abs" style="left:${xs[j]}px;top:810px;width:300px;height:100px;border-radius:18px;background:var(--prova-fundo);border-left:8px solid var(--prova);display:grid;place-items:center;text-align:center;padding:0 14px;font:700 24px/1.25 var(--sans);color:var(--texto)">${p[0]}</div>`), c.t(4, p[1]), "pop");
        });
      },
    },
    {
      id: "outros-modelos",
      visual: "Cartão grande FaaS · serverless (raio): fluxo “evento → função de código → executa”, com ✓ “sem gerenciar servidores” e ✓ “paga só pelo tempo de execução”, e exemplos AWS Lambda e Azure Functions. À direita, cartões DaaS (monitor: área de trabalho virtual) e XaaS (nuvem: tudo como serviço).",
      secao: "Modelos de serviço",
      bit: BIT_CANTO,
      falas: [
        { texto: "Existem ainda outros modelos “como serviço”. O primeiro é o FaaS, também chamado de serverless.", falar: "Existem ainda outros modelos “como serviço”. O primeiro é o fás, também chamado de sérverléss." },
        "Nele, o cliente envia apenas funções de código, que são executadas quando um evento acontece. Ele não gerencia servidores e paga só pelo tempo de execução.",
        { texto: "Exemplos: AWS Lambda e Azure Functions.", falar: "Exemplos: a dáblio ésse lâmbda e ájur fânkchons." },
        { texto: "O DaaS é o desktop como serviço: uma área de trabalho virtual acessada pela internet. E XaaS, tudo como serviço, é o termo geral para qualquer recurso de TI oferecido como serviço.", falar: "O dás é o désktóp como serviço: uma área de trabalho virtual acessada pela internet. E xis ás, tudo como serviço, é o termo geral para qualquer recurso de tê i oferecido como serviço." },
      ],
      montar(c) {
        c.titulo("Mais modelos", "Outros “como serviço”", { left: 140, top: 150 }, c.t(0), { medio: true });
        const faas = c.novo(`<div class="cartao" style="left:140px;top:300px;width:820px;height:560px">
          <div style="display:flex;align-items:center;gap:22px">${icone("funcao")}<div><h3 style="margin:0">FaaS · serverless</h3><p style="font-size:26px">Function as a Service</p></div></div>
          <div style="display:flex;align-items:center;gap:16px;margin-top:40px">
            <span class="pilula f1">evento</span><span class="f2" style="font:800 40px var(--sans);color:var(--cor)">→</span>
            <span class="pilula f3" style="background:var(--cor);color:#fff">função de código</span><span class="f4" style="font:800 40px var(--sans);color:var(--cor)">→</span>
            <span class="pilula f5">executa</span></div>
          <div class="l1" style="margin-top:40px;font:600 30px var(--sans)"><b style="color:var(--certo)">✓</b> sem gerenciar servidores</div>
          <div class="l2" style="margin-top:14px;font:600 30px var(--sans)"><b style="color:var(--certo)">✓</b> paga só pelo tempo de execução</div>
          <div class="ex" style="margin-top:34px;font:800 30px var(--sans);color:var(--cor)">AWS Lambda · Azure Functions</div></div>`);
        faas.querySelector(".icone").style.cssText = "margin:0;width:96px;height:96px";
        c.entra(faas, c.t(0, 3), "baixo");
        c.entra(faas.querySelector(".f3"), c.t(1, 0.8), "pop");
        c.entra(faas.querySelector(".f1"), c.t(1, 4.4), "pop");
        c.entra(faas.querySelector(".f2"), c.t(1, 4.8), "fade");
        c.entra(faas.querySelector(".f4"), c.t(1, 5.2), "fade");
        c.entra(faas.querySelector(".f5"), c.t(1, 5.5), "pop");
        c.entra(faas.querySelector(".l1"), c.t(1, 6.4), "esquerda");
        c.entra(faas.querySelector(".l2"), c.t(1, 8), "esquerda");
        c.entra(faas.querySelector(".ex"), c.t(2), "baixo");
        linhaIcone(c, "monitor", "DaaS", "desktop como serviço: área de trabalho virtual pela internet", { left: 1000, top: 300, width: 560, height: 270 }, c.t(3), "direita", { iw: 90, fs: 40 });
        linhaIcone(c, "nuvem", "XaaS", "tudo como serviço: termo geral para qualquer recurso de TI", { left: 1000, top: 590, width: 560, height: 270 }, c.t(3, 5.6), "direita", { iw: 90, fs: 40 });
      },
    },

    // ----------------------------------------------- Modelos de implantação
    {
      id: "implantacao",
      visual: "Quatro cartões, um por frase: Pública (nuvem com várias pessoas), Privada (nuvem com cadeado), Híbrida (duas nuvens ligadas) e Comunitária (nuvem com prédios). Na última frase, os cartões Privada e Comunitária pulsam e surge a faixa “Uso exclusivo de 1 órgão → privada · vários órgãos → comunitária”.",
      secao: "Modelos de implantação",
      bit: BIT_CANTO,
      falas: [
        { texto: "São quatro modelos de implantação. Na nuvem pública, a infraestrutura de um provedor é compartilhada por vários clientes pela internet, como na AWS, no Azure e no Google Cloud.", falar: "São quatro modelos de implantação. Na nuvem pública, a infraestrutura de um provedor é compartilhada por vários clientes pela internet, como na a dáblio ésse, no ájur e no gúgol cláud." },
        "A nuvem privada é de uso exclusivo de uma organização, no próprio local ou em um provedor.",
        "A nuvem híbrida combina a pública e a privada, com dados e aplicações transitando entre elas.",
        "E a nuvem comunitária é compartilhada por organizações com interesses em comum, como órgãos de um mesmo governo.",
        "Não confunda: nuvem de uso exclusivo de um único órgão é privada; a comunitária reúne várias organizações.",
      ],
      montar(c) {
        c.titulo("Modelos de implantação", "Pública, privada, híbrida, comunitária", { left: 140, top: 150 }, c.t(0), { medio: true });
        const tipos = [
          ["nuvemPublica", "Pública", "Provedor <b>compartilhado</b> por vários clientes.<br><b>AWS · Azure · Google Cloud</b>", c.t(0, 2.4)],
          ["nuvemPrivada", "Privada", "Uso <b>exclusivo</b> de uma organização, no próprio local ou em um provedor.", c.t(1)],
          ["nuvemHibrida", "Híbrida", "<b>Combina</b> pública e privada; dados e aplicações transitam entre elas.", c.t(2)],
          ["nuvemComunitaria", "Comunitária", "Organizações com <b>interesses comuns</b>, como órgãos de um governo.", c.t(3)],
        ];
        const cartoes = tipos.map((k, i) => {
          const e = c.cartao({ icone: k[0], titulo: k[1], texto: k[2] }, { left: 140 + i * 415, top: 290, width: 385, height: 470 }, k[3]);
          e.querySelector(".icone").style.cssText = "width:120px;height:120px;margin-bottom:14px";
          e.querySelector("p").style.fontSize = "28px";
          return e;
        });
        c.destaque(cartoes[1], c.t(4, 3.8));
        c.destaque(cartoes[3], c.t(4, 5.2));
        c.chave("Uso exclusivo de 1 órgão → <em>privada</em> · vários órgãos → <em>comunitária</em>", c.t(4, 2.8));
      },
    },

    // ---------------------------------------------- Custos e acordos
    {
      id: "custos",
      visual: "Cartões CAPEX (servidor; gráfico com uma barra alta de investimento inicial) e OPEX (medidor; barras mensais variando com o uso), com a faixa “Migrar para a nuvem: CAPEX → OPEX”. Depois, cartão SLA (documento) e três linhas de disponibilidade — 99%, 99,9% e 99,99% — com o tempo máximo fora do ar contando até 3,65 dias, 8,76 horas e 52,6 minutos.",
      secao: "Custos e acordos",
      bit: BIT_CANTO,
      falas: [
        "Manter servidores próprios exige um investimento inicial em equipamentos: é o CAPEX, a despesa de capital.",
        "Na nuvem, você paga conforme o uso, como despesa operacional: é o OPEX. Migrar para a nuvem troca CAPEX por OPEX.",
        { texto: "Já o SLA, acordo de nível de serviço, define a disponibilidade garantida pelo provedor e as compensações em caso de descumprimento.", falar: "Já o ésse éle á, acordo de nível de serviço, define a disponibilidade garantida pelo provedor e as compensações em caso de descumprimento." },
        { texto: "Com 99% de disponibilidade, o serviço pode ficar fora do ar cerca de 3,65 dias por ano.", falar: "Com noventa e nove por cento de disponibilidade, o serviço pode ficar fora do ar cerca de três vírgula sessenta e cinco dias por ano." },
        { texto: "Com 99,9%, cerca de 8,76 horas. E com 99,99%, cerca de 52,6 minutos.", falar: "Com noventa e nove vírgula nove por cento, cerca de oito vírgula setenta e seis horas. E com noventa e nove vírgula noventa e nove, cerca de cinquenta e dois vírgula seis minutos." },
      ],
      montar(c) {
        c.titulo("Custos e acordos", "CAPEX × OPEX", { left: 140, top: 150 }, c.t(0), { medio: true });
        const barras = (alturas) => `<svg viewBox="0 0 600 200" style="width:100%;height:180px;margin-top:22px">
          ${alturas.map((h, i) => `<rect x="${i * 50 + 7}" y="${190 - h}" width="36" height="${h}" rx="6" fill="var(--cor)" opacity="${i === 0 && h > 100 ? 1 : 0.75}"/>`).join("")}
          <path d="M0 194H600" stroke="var(--borda)" stroke-width="4"/></svg>`;
        const capex = c.novo(`<div class="cartao" style="left:140px;top:300px;width:680px;height:460px">
          <div style="display:flex;align-items:center;gap:20px">${icone("servidor")}<h3 style="margin:0">CAPEX</h3></div>
          <p style="margin-top:12px">Despesa de <b>capital</b>: investimento inicial na compra de equipamentos.</p>${barras([180, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12])}</div>`);
        const opex = c.novo(`<div class="cartao" style="left:880px;top:300px;width:680px;height:460px">
          <div style="display:flex;align-items:center;gap:20px">${icone("medidor")}<h3 style="margin:0">OPEX</h3></div>
          <p style="margin-top:12px">Despesa <b>operacional</b>: paga conforme o uso, mês a mês.</p>${barras([40, 55, 48, 70, 62, 90, 75, 58, 66, 80, 72, 60])}</div>`);
        [capex, opex].forEach((e) => { e.querySelector(".icone").style.cssText = "margin:0;width:72px;height:72px"; });
        c.entra(capex, c.t(0, 0.3), "esquerda");
        c.entra(opex, c.t(1), "direita");
        c.chave("Migrar para a nuvem: <em>CAPEX → OPEX</em>", c.t(1, 4.4), c.t(2) - 0.4);
        [capex, opex].forEach((e) => c.sai(e, c.t(2) - 0.4));

        c.cartao({ icone: "documento", titulo: "SLA", texto: "<i>Service Level Agreement</i>: acordo de nível de serviço.<br>Define a <b>disponibilidade garantida</b> e as <b>compensações</b> se ela não for cumprida." }, { left: 140, top: 300, width: 560, height: 470 }, c.t(2));
        const linhas = [
          ["99%", 3.65, "dias", c.t(3, 0.2), c.t(3, 5.4), 2],
          ["99,9%", 8.76, "horas", c.t(4, 0.1), c.t(4, 2.8), 2],
          ["99,99%", 52.6, "minutos", c.t(4, 5.8), c.t(4, 8.6), 1],
        ];
        linhas.forEach((l, i) => {
          const e = c.novo(`<div class="cartao" style="left:760px;top:${300 + i * 165}px;width:800px;height:140px;display:flex;align-items:center;gap:30px;padding:0 40px">
            <span style="font:800 60px var(--sans);color:var(--cor);width:250px;flex-shrink:0">${l[0]}</span>
            <div><div class="rotulo" style="font-size:20px;color:var(--texto-fraco)">máximo fora do ar por ano</div>
            <div style="font:800 48px var(--sans);margin-top:4px">≈ <span class="v">0</span> ${l[2]}</div></div></div>`);
          c.entra(e, l[3], "esquerda");
          c.contar(e.querySelector(".v"), 0, l[1], l[4], 1.2, (v) => v.toLocaleString("pt-BR", { minimumFractionDigits: l[5], maximumFractionDigits: l[5] }));
        });
      },
    },
    {
      id: "edge",
      visual: "Área tracejada “Borda · perto da origem” com Dispositivo/sensor e Servidor local ligados por seta curta. À direita, o Datacenter distante, ligado por uma seta longa e apagada. Etiquetas “↓ latência” e “↓ tráfego”. Embaixo, três aplicações: Internet das Coisas, Veículos autônomos e Indústria.",
      secao: "Custos e acordos",
      bit: BIT_CANTO,
      falas: [
        { texto: "Ainda neste bloco, a computação de borda, ou edge computing.", falar: "Ainda neste bloco, a computação de borda, ou édj compiúting." },
        "Ela processa os dados perto de onde eles são gerados: no próprio dispositivo, em um sensor ou em um servidor local.",
        { texto: "Assim, não é preciso enviar tudo para um datacenter distante. Isso reduz a latência, que é o atraso na comunicação, e o tráfego na rede.", falar: "Assim, não é preciso enviar tudo para um dáta cênter distante. Isso reduz a latência, que é o atraso na comunicação, e o tráfego na rede." },
        "Por isso, ela é importante na Internet das Coisas, nos veículos autônomos e na indústria.",
      ],
      montar(c) {
        c.titulo("Computação de borda", "Edge computing", { left: 140, top: 150 }, c.t(0), { medio: true });
        const area = c.novo(`<div class="abs" style="left:120px;top:310px;width:790px;height:350px;border-radius:32px;background:var(--cor-suave);border:5px dashed var(--cor)">
          <div class="rotulo" style="position:absolute;left:30px;top:18px">Borda · perto da origem</div></div>`);
        c.entra(area, c.t(1, 0.4), "zoom");
        c.no({ icone: "iot", titulo: "Dispositivo", texto: "ou sensor" }, { left: 160, top: 380, width: 300, height: 250 }, c.t(1, 3.6));
        c.no({ icone: "servidor", titulo: "Servidor local" }, { left: 570, top: 380, width: 300, height: 250 }, c.t(1, 6.2));
        c.seta(470, 505, 560, 505, c.t(1, 6.6));
        c.no({ icone: "nuvem", titulo: "Datacenter", texto: "distante" }, { left: 1240, top: 310, width: 320, height: 260 }, c.t(2, 2.4));
        c.seta(920, 400, 1225, 400, c.t(2, 2.8), { cor: "var(--texto-fraco)", curva: 50, largura: 6 });
        c.entra(c.novo(`<div class="abs pilula" style="left:960px;top:470px;font-size:32px">↓ latência</div>`), c.t(2, 4.6), "pop");
        c.entra(c.novo(`<div class="abs pilula" style="left:960px;top:560px;font-size:32px">↓ tráfego</div>`), c.t(2, 7.8), "pop");
        [["iot", "Internet das Coisas", 1.6], ["carro", "Veículos autônomos", 3.2], ["fabrica", "Indústria", 4.8]].forEach((k, i) => {
          linhaIcone(c, k[0], k[1], "", { left: 140 + i * 470, top: 710, width: 440, height: 120 }, c.t(3, k[2]), "baixo", { iw: 70, fs: 32 });
        });
      },
    },

    // ------------------------------------------ Sincronização e backup
    {
      id: "sincronizacao",
      visual: "À esquerda, “Sincronização”: Computador ⇄ Nuvem ⇄ Celular, com etiquetas verdes “✓ versão nova” passando de um para outro. À direita, “Backup”: cofre com “Cópia de segurança — guardada separadamente”. Um sinal ≠ âmbar separa os dois. Na pegadinha, as etiquetas viram vermelhas “✗ apagado” em cadeia, enquanto o backup segue “✓ cópia preservada”. Quadro âmbar no rodapé.",
      secao: "Sincronização e backup",
      bit: BIT_CANTO,
      falas: [
        { texto: "Agora, dois conceitos que as bancas adoram confundir: sincronização e backup.", falar: "Agora, dois conceitos que as bancas adoram confundir: sincronização e bécâp." },
        "A sincronização mantém a mesma versão dos arquivos em todos os dispositivos: o que você altera no computador aparece no celular, e vice-versa.",
        { texto: "Já o backup é uma cópia de segurança, guardada separadamente, para recuperar os dados em caso de perda.", falar: "Já o bécâp é uma cópia de segurança, guardada separadamente, para recuperar os dados em caso de perda." },
        { texto: "E aqui está a pegadinha: sincronização não é backup.", falar: "E aqui está a pegadinha: sincronização não é bécâp." },
        { texto: "Se um arquivo for apagado ou corrompido em um dispositivo, por exemplo por um ransomware, a sincronização replica o problema para os outros.", falar: "Se um arquivo for apagado ou corrompido em um dispositivo, por exemplo por um rânsomuér, a sincronização replica o problema para os outros." },
        { texto: "Lixeira e histórico de versões, que muitos serviços oferecem por tempo limitado, não substituem um backup.", falar: "Lixeira e histórico de versões, que muitos serviços oferecem por tempo limitado, não substituem um bécâp." },
      ],
      montar(c) {
        c.titulo("Pegadinha clássica", "Sincronização × backup", { left: 140, top: 150 }, c.t(0), { medio: true });
        c.entra(c.novo(`<div class="abs rotulo" style="left:140px;top:300px">Sincronização</div>`), c.t(1), "fade");
        const xs = [140, 470, 800];
        [["notebook", "Computador"], ["nuvem", "Nuvem"], ["celular", "Celular"]].forEach((k, i) => {
          c.no({ icone: k[0], titulo: k[1] }, { left: xs[i], top: 350, width: 240, height: 220 }, c.t(1, 0.3 + i * 0.4));
        });
        c.seta(388, 440, 462, 440, c.t(1, 1.4), { largura: 6 });
        c.seta(462, 490, 388, 490, c.t(1, 1.6), { largura: 6 });
        c.seta(718, 440, 792, 440, c.t(1, 1.8), { largura: 6 });
        c.seta(792, 490, 718, 490, c.t(1, 2), { largura: 6 });
        const ok = xs.map((x, i) => c.entra(etiqueta(c, "✓ versão nova", x, 595, 240, "ok"), c.t(1, [6, 6.8, 8][i]), "pop"));
        const erro = xs.map((x) => etiqueta(c, "✗ apagado", x, 595, 240, "erro"));
        [0, 1, 2].forEach((i) => {
          const t = c.t(4, [1.6, 6.6, 7.4][i]);
          c.sai(ok[i], t - 0.2, 0.2);
          c.entra(erro[i], t, "pop");
        });

        c.entra(c.novo(`<div class="abs" style="left:1085px;top:300px;width:5px;height:330px;border-radius:3px;background:var(--borda)"></div>`), c.t(2), "fade");
        c.entra(c.novo(`<div class="abs rotulo" style="left:1140px;top:300px">Backup</div>`), c.t(2), "fade");
        c.no({ icone: "cofre", titulo: "Cópia de segurança", texto: "guardada separadamente" }, { left: 1140, top: 350, width: 400, height: 220 }, c.t(2, 0.3));
        const rec = c.entra(etiqueta(c, "para recuperar dados", 1140, 595, 400, "ok"), c.t(2, 4.4), "pop");
        c.sai(rec, c.t(4, 8.2), 0.2);
        c.entra(etiqueta(c, "✓ cópia preservada", 1140, 595, 400, "ok"), c.t(4, 8.4), "pop");
        c.entra(c.novo(`<div class="abs" style="left:1043px;top:420px;width:90px;height:90px;border-radius:50%;background:var(--prova);color:#fff;display:grid;place-items:center;font:800 60px var(--sans);box-shadow:var(--sombra)">≠</div>`), c.t(3, 1.6), "pop");
        c.quadro("prova", "Sincronização <b>não é</b> backup: replica exclusões e arquivos corrompidos. Lixeira e histórico de versões <b>não substituem</b> o backup.", { left: 140, top: 690, width: 1400 }, c.t(5)).querySelector("p").style.fontSize = "36px";
      },
    },
    {
      id: "sob-demanda",
      visual: "Janela “Pasta no computador” com quatro arquivos marcados com uma nuvem (só na nuvem). Um arquivo é aberto: aparece a seta de download e a marca muda para ✓ (baixado). À direita, cartão “Espaço em disco” com a barra quase livre e, depois, os nomes do recurso: OneDrive — Arquivos Sob Demanda; Google Drive para computador — streaming.",
      secao: "Sincronização e backup",
      bit: BIT_CANTO,
      falas: [
        "Outro recurso comum é o arquivo sob demanda: o arquivo aparece na pasta do computador, mas só é baixado quando você o abre. Assim, você economiza espaço em disco.",
        { texto: "No OneDrive, ele se chama Arquivos Sob Demanda. No Google Drive para computador, é o streaming.", falar: "No uândráiv, ele se chama Arquivos Sob Demanda. No Google Drive para computador, é o istríming." },
      ],
      montar(c) {
        c.titulo("Economia de espaço", "Arquivos sob demanda", { left: 140, top: 150 }, c.t(0), { medio: true });
        const nomes = ["Relatório.docx", "Planilha.xlsx", "Fotos-da-viagem.zip", "Apresentação.pptx"];
        const janela = c.novo(`<div class="cartao" style="left:140px;top:300px;width:900px;height:470px;padding:0;overflow:hidden">
          <div style="background:var(--cor-suave);padding:20px 32px;display:flex;align-items:center;gap:16px">${icone("pasta")}<b style="font-size:30px">Pasta no computador</b></div>
          ${nomes.map((n, i) => `<div class="arq a${i}" style="position:relative;display:flex;align-items:center;gap:20px;padding:0 32px;height:90px;border-top:2px solid var(--borda);font:600 30px var(--sans)">${icone("documento")}<span style="flex:1">${n}</span><span class="st" style="position:relative;width:60px;height:60px">${icone("nuvem")}${icone("download")}${icone("check")}</span></div>`).join("")}</div>`);
        janela.querySelectorAll(".icone").forEach((ic) => { ic.style.cssText = "margin:0;width:52px;height:52px;flex-shrink:0"; });
        janela.querySelectorAll(".st .icone").forEach((ic, k) => {
          ic.style.cssText = "position:absolute;left:0;top:0;width:60px;height:60px";
          if (k % 3) ic.style.opacity = 0;
        });
        c.entra(janela, c.t(0, 3), "baixo");
        const alvo = janela.querySelector(".a1");
        const [nv, dl, ck] = alvo.querySelectorAll(".st .icone");
        c.tl.to(alvo, { backgroundColor: "var(--cor-suave)", duration: 0.3 }, c.t(0, 6.2));
        c.tl.to(nv, { opacity: 0, duration: 0.2 }, c.t(0, 6.4));
        c.tl.fromTo(dl, { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.4, immediateRender: false }, c.t(0, 6.4));
        c.tl.to(dl, { opacity: 0, duration: 0.2 }, c.t(0, 7.4));
        c.tl.fromTo(ck, { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)", immediateRender: false }, c.t(0, 7.5));
        c.texto("nuvem = só na nuvem · ✓ = baixado ao abrir", { left: 140, top: 790 }, c.t(0, 7.8)).style.fontSize = "28px";
        const disco = c.novo(`<div class="cartao" style="left:1100px;top:300px;width:440px;height:220px">
          <h3 style="font-size:34px">Espaço em disco</h3>
          <div style="margin-top:24px;height:34px;border-radius:17px;background:var(--borda);overflow:hidden"><div class="uso" style="width:22%;height:100%;background:var(--cor)"></div></div>
          <p style="margin-top:14px;font-size:26px">baixa só o que você abre</p></div>`);
        c.entra(disco, c.t(0, 9), "direita");
        linhaIcone(c, "pasta", "OneDrive", "Arquivos Sob Demanda", { left: 1100, top: 550, width: 440, height: 110 }, c.t(1), "direita", { iw: 56, fs: 30, fp: 25, pad: "0 26px" });
        linhaIcone(c, "pasta", "Google Drive", "streaming", { left: 1100, top: 680, width: 440, height: 110 }, c.t(1, 3.2), "direita", { iw: 56, fs: 30, fp: 25, pad: "0 26px" });
      },
    },

    // ------------------------------------- Compartilhamento e colaboração
    {
      id: "permissoes",
      visual: "Três cartões de permissão: Leitor (olho: ✓ ver), Comentarista (balão: ✓ ver, ✓ comentar) e Editor (lápis: ✓ ver, ✓ comentar, ✓ editar), com ✗ no que não podem. Embaixo, as formas de compartilhar: Pessoas específicas (e-mail) e Por link; depois, cartão âmbar de alerta “Qualquer pessoa com o link”.",
      secao: "Compartilhamento",
      bit: BIT_CANTO,
      falas: [
        "Na nuvem, você pode compartilhar arquivos e pastas com níveis diferentes de permissão.",
        "O leitor, ou visualizador, apenas vê o conteúdo.",
        "O comentarista vê e comenta, mas não edita. E o editor pode alterar o conteúdo.",
        "O compartilhamento pode ser feito com pessoas específicas, por e-mail, ou por link.",
        "Atenção: um link configurado como “qualquer pessoa com o link” dá acesso a quem recebê-lo, mesmo sem ter sido convidado.",
      ],
      montar(c) {
        c.titulo("Compartilhamento", "Níveis de permissão", { left: 140, top: 150 }, c.t(0), { medio: true });
        const sim = (t) => `<div style="font:600 28px var(--sans);margin-top:8px"><b style="color:var(--certo)">✓</b> ${t}</div>`;
        const nao = (t) => `<div style="font:600 28px var(--sans);margin-top:8px;color:var(--texto-fraco)"><b style="color:var(--errado)">✗</b> ${t}</div>`;
        const perfis = [
          ["olho", "Leitor", "(visualizador)", [sim("ver"), nao("comentar"), nao("editar")], c.t(1)],
          ["comentario", "Comentarista", "", [sim("ver"), sim("comentar"), nao("editar")], c.t(2)],
          ["lapis", "Editor", "", [sim("ver"), sim("comentar"), sim("editar")], c.t(2, 3)],
        ];
        perfis.forEach((p, i) => {
          const e = c.novo(`<div class="cartao" style="left:${140 + i * 470}px;top:300px;width:440px;height:330px;padding:30px 36px">
            <div style="display:flex;align-items:center;gap:20px">${icone(p[0])}<div><h3 style="margin:0">${p[1]}</h3>${p[2] ? `<p style="font-size:24px">${p[2]}</p>` : ""}</div></div>
            <div style="margin-top:18px">${p[3].join("")}</div></div>`);
          e.querySelector(".icone").style.cssText = "margin:0;width:80px;height:80px";
          c.entra(e, p[4], "baixo");
        });
        const email = linhaIcone(c, "pessoa", "Pessoas específicas", "convite por e-mail", { left: 140, top: 680, width: 680, height: 170 }, c.t(3, 2.4), "baixo", { iw: 84 });
        const link = linhaIcone(c, "elo", "Por link", "quem tem o link pode acessar", { left: 860, top: 680, width: 680, height: 170 }, c.t(3, 4.8), "baixo", { iw: 84 });
        [email, link].forEach((e) => c.sai(e, c.t(4) - 0.4));
        linhaIcone(c, "alerta", "“Qualquer pessoa com o link”", "Quem receber o link acessa, <b>mesmo sem ter sido convidado</b>. Cuidado com documentos sensíveis.", { left: 140, top: 680, width: 1400, height: 170, background: "var(--prova-fundo)" }, c.t(4), "baixo", { iw: 84, cor: "#c27c0e" });
      },
    },
    {
      id: "coautoria",
      visual: "Documento compartilhado com dois cursores coloridos (A e B) escrevendo ao mesmo tempo; etiqueta “edição simultânea = coautoria”. À direita, as ferramentas: Google Docs, Planilhas e Apresentações Google, e Word, Excel e PowerPoint na web. Depois, cartão “Histórico de versões” com v1, v2, v3 e seta “restaurar”. Embaixo, três recursos: comentar, sugerir alterações e trabalhar offline.",
      secao: "Compartilhamento",
      bit: BIT_CANTO,
      falas: [
        "Na nuvem, várias pessoas podem editar o mesmo documento ao mesmo tempo: é a edição simultânea, ou coautoria.",
        { texto: "Isso vale para o Google Docs, as Planilhas e as Apresentações, e para as versões web do Word, do Excel e do PowerPoint.", falar: "Isso vale para o Google Docs, as Planilhas e as Apresentações, e para as versões uéb do uórd, do Excel e do PowerPoint." },
        "Essas ferramentas guardam o histórico de versões, que permite ver e restaurar estados anteriores do documento.",
        { texto: "E dá para comentar, sugerir alterações e trabalhar offline: quando a conexão volta, tudo é sincronizado.", falar: "E dá para comentar, sugerir alterações e trabalhar óflaine: quando a conexão volta, tudo é sincronizado." },
      ],
      montar(c) {
        c.titulo("Colaboração", "Trabalho em equipe na nuvem", { left: 140, top: 150 }, c.t(0), { medio: true });
        const larg = [520, 600, 460, 580, 380, 540, 300];
        const doc = c.novo(`<div class="cartao" style="left:140px;top:300px;width:760px;height:470px;padding:0;overflow:hidden">
          <div style="background:var(--cor-suave);padding:18px 30px;display:flex;align-items:center;gap:14px">${icone("documento")}<b style="font-size:28px;flex:1">Documento compartilhado</b>
            <span style="width:44px;height:44px;border-radius:50%;background:var(--cor);color:#fff;display:grid;place-items:center;font:800 24px var(--sans)">A</span>
            <span style="width:44px;height:44px;border-radius:50%;background:var(--certo);color:#fff;display:grid;place-items:center;font:800 24px var(--sans)">B</span></div>
          <div style="padding:26px 40px">${larg.map((w, i) => `<div class="ln l${i}" style="position:relative;width:${w}px;height:16px;border-radius:8px;background:var(--borda);margin:20px 0"></div>`).join("")}</div></div>`);
        doc.querySelector(".icone").style.cssText = "margin:0;width:44px;height:44px";
        c.entra(doc, c.t(0, 0.8), "baixo");
        const escrever = (linha, cor, rotulo, t) => {
          const l = doc.querySelector(`.l${linha}`);
          l.style.background = cor;
          l.insertAdjacentHTML("beforeend", `<span class="cur" style="position:absolute;right:-8px;top:-14px;width:5px;height:44px;background:${cor}"><b style="position:absolute;left:-2px;top:-30px;padding:2px 10px;border-radius:8px;background:${cor};color:#fff;font:800 18px var(--sans)">${rotulo}</b></span>`);
          c.tl.fromTo(l, { width: 0 }, { width: larg[linha], duration: 1.8, ease: "none", immediateRender: true }, t);
        };
        escrever(1, "var(--cor)", "A", c.t(0, 1.8));
        escrever(4, "var(--certo)", "B", c.t(0, 2.2));
        c.entra(c.novo(`<div class="abs pilula" style="left:140px;top:790px">edição simultânea = coautoria</div>`), c.t(0, 4.8), "pop");
        const apps = ["Google Docs", "Word na web", "Planilhas Google", "Excel na web", "Apresentações Google", "PowerPoint na web"];
        const tApps = [1.6, 5.4, 2.6, 6.4, 3.6, 7.2];
        apps.forEach((a, i) => {
          const col = i % 2, lin = Math.floor(i / 2);
          c.entra(c.novo(`<div class="abs pilula" style="left:${960 + col * 300}px;top:${300 + lin * 80}px;width:285px;text-align:center;font-size:24px;padding:12px 10px">${a}</div>`), c.t(1, tApps[i]), "pop");
        });
        const hist = c.novo(`<div class="cartao" style="left:960px;top:560px;width:585px;height:210px;padding:26px 32px">
          <div style="display:flex;align-items:center;gap:14px">${icone("historico")}<h3 style="margin:0;font-size:32px">Histórico de versões</h3></div>
          <svg viewBox="0 0 520 90" style="width:520px;height:90px;margin-top:8px">
            <path d="M40 60H480" stroke="var(--cor-media)" stroke-width="6"/>
            ${[40, 260, 480].map((x, i) => `<circle cx="${x}" cy="60" r="16" fill="var(--cor)"/><text x="${x}" y="30" text-anchor="middle" font-family="Inter" font-weight="800" font-size="22" fill="var(--texto)">v${i + 1}</text>`).join("")}
            <path class="volta" d="M470 78Q260 120 52 80" stroke="var(--prova)" stroke-width="5" fill="none" stroke-linecap="round"/></svg></div>`);
        hist.querySelector(".icone").style.cssText = "margin:0;width:50px;height:50px";
        c.entra(hist, c.t(2, 0.2), "baixo");
        c.desenhar(hist.querySelector(".volta"), c.t(2, 4.6), 1);
        c.entra(c.novo(`<div class="abs" style="left:1240px;top:780px;font:800 24px var(--sans);color:var(--prova)">↺ restaurar</div>`), c.t(2, 5.2), "fade");
        [["comentario", "Comentar", 1.2], ["lapis", "Sugerir alterações", 2.4], ["sincronizar", "Offline → sincroniza", 3.8]].forEach((k, i) => {
          const e = c.novo(`<div class="abs pilula" style="left:${560 + i * 340}px;top:840px;display:flex;align-items:center;gap:12px;font-size:26px;background:#fff;box-shadow:var(--sombra);color:var(--texto)">${icone(k[0] === "sincronizar" ? "setas" : k[0])}${k[1]}</div>`);
          e.querySelector(".icone").style.cssText = "margin:0;width:36px;height:36px";
          c.entra(e, c.t(3, k[2]), "pop");
        });
      },
    },
    {
      id: "suites",
      visual: "Tabela Finalidade / Microsoft 365 / Google Workspace, com uma linha por item citado: Texto (Word × Documentos Google), Planilhas (Excel × Planilhas Google), Apresentações, E-mail e agenda, Reuniões e chat, Armazenamento.",
      secao: "Compartilhamento",
      bit: BIT_CANTO,
      falas: [
        { texto: "Duas suítes de aplicativos na nuvem merecem atenção: o Microsoft 365 e o Google Workspace.", falar: "Duas suítes de aplicativos na nuvem merecem atenção: o Microsoft 365 e o gúgol uôrk spêis." },
        { texto: "Para textos, o Word equivale aos Documentos Google; e, para planilhas, o Excel equivale às Planilhas Google.", falar: "Para textos, o uórd equivale aos Documentos Google; e, para planilhas, o Excel equivale às Planilhas Google." },
        { texto: "Nas apresentações, PowerPoint e Apresentações Google. No e-mail e na agenda, Outlook, de um lado, e Gmail e Agenda, do outro.", falar: "Nas apresentações, PowerPoint e Apresentações Google. No e-mail e na agenda, Outlook, de um lado, e gí mêiu e Agenda, do outro." },
        { texto: "Nas reuniões e no chat, Teams contra Meet e Chat. E, no armazenamento, OneDrive e SharePoint contra o Google Drive.", falar: "Nas reuniões e no chat, tíms contra Meet e Chat. E, no armazenamento, uândráiv e xér póint contra o Google Drive." },
      ],
      montar(c) {
        c.titulo("Suítes na nuvem", "Microsoft 365 × Google Workspace", { left: 140, top: 150 }, c.t(0), { medio: true });
        const tab = c.tabela(["Finalidade", "Microsoft 365", "Google Workspace"], [
          ["Texto", "Word", "Documentos Google"],
          ["Planilhas", "Excel", "Planilhas Google"],
          ["Apresentações", "PowerPoint", "Apresentações Google"],
          ["E-mail e agenda", "Outlook", "Gmail e Agenda"],
          ["Reuniões e chat", "Teams", "Meet e Chat"],
          ["Armazenamento", "OneDrive e SharePoint", "Google Drive"],
        ], { left: 140, top: 295, width: 1400 }, c.t(0, 2), [c.t(1), c.t(1, 4), c.t(2), c.t(2, 3.6), c.t(3), c.t(3, 3.8)]);
        tab.style.fontSize = "30px";
        tab.querySelectorAll("td").forEach((td) => { td.style.padding = "15px 34px"; });
      },
    },

    // ----------------------------------------------- Principais serviços
    {
      id: "servicos",
      visual: "Quatro cartões, um por frase: Google Drive (15 GB), OneDrive (5 GB), iCloud (5 GB) e Dropbox (2 GB), com o número contando e o destaque de cada um. Nota “valores podem mudar”. Quadro âmbar “Pegadinha de banca”: o Google Drive não funciona apenas no navegador.",
      secao: "Principais serviços",
      bit: BIT_CANTO,
      falas: [
        "Agora, os principais serviços de armazenamento e o espaço gratuito de cada um.",
        { texto: "O Google Drive oferece 15 gigabytes, divididos com o Gmail e o Google Fotos, e é integrado ao Docs, às Planilhas e às Apresentações.", falar: "O Google Drive oferece quinze gigabytes, divididos com o gí mêiu e o Google Fotos, e é integrado ao Docs, às Planilhas e às Apresentações." },
        { texto: "O OneDrive, da Microsoft, oferece 5 gigabytes e é integrado ao Windows e ao Microsoft 365.", falar: "O uândráiv, da Microsoft, oferece cinco gigabytes e é integrado ao Windows e ao Microsoft 365." },
        { texto: "O iCloud, da Apple, também tem 5 gigabytes, e faz o backup e a sincronização do iPhone, do iPad e do Mac.", falar: "O ái cláud, da Apple, também tem cinco gigabytes, e faz o bécâp e a sincronização do ái fôun, do ái péd e do méc." },
        "E o Dropbox oferece dois gigabytes, com sincronização multiplataforma.",
        "Esses valores podem mudar. E atenção: o Google Drive não funciona apenas no navegador. Todos têm aplicativos para computador e celular, que sincronizam os arquivos.",
      ],
      montar(c) {
        c.titulo("Principais serviços", "Espaço gratuito", { left: 140, top: 150 }, c.t(0), { medio: true });
        const servs = [
          ["Google", "Google Drive", 15, "divididos com Gmail e Google Fotos · integrado a Docs, Planilhas e Apresentações"],
          ["Microsoft", "OneDrive", 5, "integrado ao Windows e ao Microsoft 365"],
          ["Apple", "iCloud", 5, "backup e sincronização de iPhone, iPad e Mac"],
          ["Dropbox", "Dropbox", 2, "sincronização multiplataforma"],
        ];
        servs.forEach((s, i) => {
          const e = c.novo(`<div class="cartao" style="left:${140 + i * 415}px;top:295px;width:385px;height:410px;padding:30px 34px">
            <div class="rotulo" style="font-size:22px">${s[0]}</div><h3 style="margin-top:8px">${s[1]}</h3>
            <div style="font:800 76px var(--sans);color:var(--cor);line-height:1.1"><span class="v">0</span> <span style="font-size:44px">GB</span></div>
            <p style="font-size:24px;margin-top:10px">${s[3]}</p></div>`);
          const t = c.t(i + 1, i === 0 ? 0.2 : 0);
          c.entra(e, t, "baixo");
          c.contar(e.querySelector(".v"), 0, s[2], t + 1.6, 1);
        });
        c.entra(c.novo(`<div class="abs" style="left:900px;top:222px;font:600 26px var(--sans);color:var(--texto-fraco)">* planos gratuitos: valores podem mudar</div>`), c.t(5), "fade");
        const q = c.quadro("prova", "“O Google Drive funciona apenas no navegador.” <b style=\"color:var(--errado)\">Errado</b>: todos têm apps para <b>computador e celular</b>, que sincronizam os arquivos.", { left: 140, top: 740, width: 1400 }, c.t(5, 2));
        q.querySelector("p").style.fontSize = "36px";
      },
    },

    // ------------------------------------------------- Segurança na nuvem
    {
      id: "seguranca",
      visual: "Faixa de responsabilidade compartilhada: Provedor (servidor: protege a infraestrutura) e Você (pessoa: contas, senhas e permissões). Abaixo, seis boas práticas entram em pares: dois fatores, senhas fortes, revisar compartilhamentos, evitar links públicos, criptografia e backup independente. Depois, cartão LGPD (balança, Lei nº 13.709/2018) e quadro azul “Resumo estratégico”.",
      secao: "Segurança na nuvem",
      bit: BIT_CANTO,
      falas: [
        "Por fim, a segurança, que na nuvem é compartilhada: o provedor protege a infraestrutura, e você cuida das contas, senhas e permissões que concede.",
        "Então, ative a autenticação em dois fatores, e use senhas fortes e diferentes para cada serviço.",
        "Revise com quem os arquivos estão compartilhados, e evite links públicos para documentos sensíveis.",
        { texto: "Prefira serviços com criptografia dos dados em trânsito e armazenados, e mantenha um backup independente dos dados importantes.", falar: "Prefira serviços com criptografia dos dados em trânsito e armazenados, e mantenha um bécâp independente dos dados importantes." },
        { texto: "No Brasil, o tratamento de dados pessoais, inclusive na nuvem, deve respeitar a LGPD, a Lei Geral de Proteção de Dados: Lei nº 13.709, de 2018.", falar: "No Brasil, o tratamento de dados pessoais, inclusive na nuvem, deve respeitar a LGPD, a Lei Geral de Proteção de Dados: Lei número treze mil, setecentos e nove, de dois mil e dezoito." },
        { texto: "Resumindo: autenticação em dois fatores, criptografia, controle de acesso e backup independente.", falar: "Resumindo: autenticação em dois fatores, criptografia, controle de acesso e bécâp independente." },
      ],
      montar(c) {
        c.titulo("Segurança na nuvem", "Responsabilidade compartilhada", { left: 140, top: 150 }, c.t(0), { medio: true });
        const prov = linhaIcone(c, "servidor", "Provedor", "protege a infraestrutura", { left: 140, top: 300, width: 690, height: 150 }, c.t(0, 3.9), "esquerda", { iw: 80 });
        const voce = linhaIcone(c, "pessoa", "Você", "contas, senhas e permissões que concede", { left: 870, top: 300, width: 690, height: 150 }, c.t(0, 6.2), "direita", { iw: 80 });
        const praticas = [
          ["senha", "Autenticação em dois fatores", c.t(1, 0.8)],
          ["chave", "Senhas fortes e diferentes", c.t(1, 3.6)],
          ["pessoas", "Revisar com quem compartilha", c.t(2)],
          ["elo", "Evitar links públicos (sensíveis)", c.t(2, 3.6)],
          ["escudo", "Criptografia: trânsito e armazenados", c.t(3, 0.6)],
          ["cofre", "Backup independente", c.t(3, 5)],
        ];
        const itens = praticas.map((p, i) => linhaIcone(c, p[0], p[1], "", { left: 140 + (i % 2) * 730, top: 490 + Math.floor(i / 2) * 88, width: 690, height: 74 }, p[2], "pop", { iw: 46, fs: 29, pad: "0 26px", gap: 20 }));
        [prov, voce, ...itens].forEach((e) => c.sai(e, c.t(4) - 0.4));
        const lgpd = linhaIcone(c, "balanca", "LGPD · Lei nº 13.709/2018", "Lei Geral de Proteção de Dados: vale para o tratamento de dados pessoais, <b>inclusive na nuvem</b>.", { left: 140, top: 300, width: 1400, height: 200 }, c.t(4, 2.4), "baixo", { iw: 120, fs: 42, fp: 30, gap: 36 });
        lgpd.querySelector("h3").style.color = "var(--cor)";
        c.quadro("resumo", "Principais medidas: <b>autenticação em dois fatores</b>, <b>criptografia</b>, <b>controle de acesso</b> e <b>backup independente</b>.", { left: 140, top: 550, width: 1400 }, c.t(5));
      },
    },

    // ------------------------------------------------------------ Revisão
    {
      id: "revisao",
      visual: "Sete cartões de revisão com ícone de verificação, um por frase: Conceito, Elasticidade, Virtualização, Modelos de serviço, Implantação e custos, Arquivos e Segurança.",
      secao: "Revisão",
      bit: BIT_CANTO,
      falas: [
        "Hora de revisar o que você aprendeu.",
        "Nuvem é o fornecimento de recursos pela internet, sob demanda, com os arquivos em servidores remotos.",
        "A característica mais cobrada é a elasticidade: cresce e diminui com a demanda, e você paga pelo uso.",
        { texto: "A virtualização é a base: o hypervisor cria as máquinas virtuais, e o contêiner é mais leve.", falar: "A virtualização é a base: o ráipervaizor cria as máquinas virtuais, e o contêiner é mais leve." },
        { texto: "IaaS entrega infraestrutura; PaaS, a plataforma para desenvolver; e SaaS, o aplicativo pronto.", falar: "aiás entrega infraestrutura; pás, a plataforma para desenvolver; e sás, o aplicativo pronto." },
        { texto: "A nuvem pode ser pública, privada, híbrida ou comunitária. CAPEX vira OPEX, e o SLA garante a disponibilidade.", falar: "A nuvem pode ser pública, privada, híbrida ou comunitária. CAPEX vira OPEX, e o ésse éle á garante a disponibilidade." },
        { texto: "Sincronização não é backup. E o leitor só vê, o comentarista comenta e o editor altera.", falar: "Sincronização não é bécâp. E o leitor só vê, o comentarista comenta e o editor altera." },
        { texto: "Para se proteger: dois fatores, criptografia, controle de acesso e backup independente.", falar: "Para se proteger: dois fatores, criptografia, controle de acesso e bécâp independente." },
      ],
      montar(c) {
        c.titulo("Revisão", "O que você aprendeu", { left: 140, top: 150 }, c.t(0), { medio: true });
        const cartoes = [
          ["Conceito", "Recursos pela internet, sob demanda · dados em servidores remotos"],
          ["Elasticidade", "Cresce e diminui com a demanda · paga pelo uso"],
          ["Virtualização", "Hypervisor → máquinas virtuais · contêiner é mais leve"],
          ["Serviço", "IaaS: infraestrutura · PaaS: plataforma · SaaS: app pronto"],
          ["Implantação e custos", "Pública · privada · híbrida · comunitária · CAPEX → OPEX · SLA"],
          ["Arquivos", "Sincronização ≠ backup · leitor, comentarista, editor"],
          ["Segurança", "Dois fatores · criptografia · controle de acesso · backup"],
        ];
        cartoes.forEach((k, i) => {
          const col = i % 4, lin = Math.floor(i / 4);
          const e = c.novo(`<div class="cartao" style="left:${140 + col * 415}px;top:${310 + lin * 300}px;width:385px;height:275px;padding:30px">
            <div style="display:flex;align-items:center;gap:16px">${icone("check")}<h3 style="margin:0;font-size:32px;line-height:1.1">${k[0]}</h3></div>
            <p style="margin-top:16px;font-size:28px">${k[1]}</p></div>`);
          e.querySelector(".icone").style.cssText = "margin:0;width:54px;height:54px;flex-shrink:0";
          c.entra(e, c.t(i + 1), "pop");
        });
      },
    },
    {
      id: "encerramento",
      visual: "Bit grande à esquerda. Cartão “Pratique agora: 15 questões” e cartão “Próximo vídeo: Capítulo 7 — Segurança da Informação” na cor do capítulo 7. Bit acena na despedida.",
      secao: "Revisão",
      bit: { x: 470, y: 990, s: 1.3 },
      falas: [
        "Agora é a sua vez: faça as quinze questões do final do capítulo e confira a correção comentada.",
        "No próximo vídeo, vamos estudar a segurança da informação.",
        "Até lá, e bons estudos!",
      ],
      montar(c) {
        c.cartao({ icone: "questoes", titulo: "Pratique agora", texto: "<b>15 questões</b> no final do Capítulo 6, com correção comentada." }, { left: 900, top: 230, width: 820 }, c.t(0));
        const prox = c.novo(`<div class="cartao" style="left:900px;top:640px;width:820px;--cor:#be123c">
          <div class="rotulo">Próximo vídeo</div><h3 style="margin-top:14px;font-family:var(--serif);font-size:52px">Capítulo 7 —<br>Segurança da Informação</h3></div>`);
        c.entra(prox, c.t(1), "baixo");
        c.bit.acenar(c.t(2));
      },
    },
  ],
});
