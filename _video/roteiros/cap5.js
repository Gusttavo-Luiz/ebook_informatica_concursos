// Roteiro da videoaula do Capítulo 5 — Hardware.
// Cada cena tem a narração (falas) e a montagem visual (montar).
// c.t(i) = instante em que começa a fala i da cena.

const BIT_CANTO = { x: 1720, y: 1020, s: 0.58 };
const BIT_GRANDE = { x: 470, y: 990, s: 1.3 };

// Ícones próprios deste capítulo (mesmo estilo plano da série).
if (typeof ICONES !== "undefined") {
  Object.assign(ICONES, {
    hd: `<rect class="c1" x="16" y="8" width="88" height="104" rx="12"/>
      <circle class="cs" cx="60" cy="50" r="32"/><circle class="c2" cx="60" cy="50" r="12"/><circle class="c1" cx="60" cy="50" r="4"/>
      <path class="st" d="M90 98L68 64" style="stroke-width:7"/><circle class="ct" cx="90" cy="98" r="7"/>`,
    ssd: `<rect class="c1" x="8" y="26" width="104" height="68" rx="10"/>
      <rect class="cs" x="18" y="36" width="40" height="48" rx="5"/>
      <rect class="c1" x="26" y="48" width="24" height="6" rx="3"/><rect class="c1" x="26" y="62" width="16" height="6" rx="3"/>
      <rect class="c2" x="66" y="38" width="36" height="18" rx="3"/><rect class="c2" x="66" y="64" width="36" height="18" rx="3"/>`,
    pendrive: `<rect class="c2" x="42" y="6" width="36" height="30" rx="4"/>
      <rect class="cb" x="49" y="14" width="8" height="8" rx="1"/><rect class="cb" x="63" y="14" width="8" height="8" rx="1"/>
      <rect class="c1" x="32" y="34" width="56" height="80" rx="14"/><circle class="cs" cx="60" cy="92" r="8"/>`,
    disco: `<circle class="c1" cx="60" cy="60" r="52"/><path class="c2" d="M60 8a52 52 0 0 1 52 52H86A26 26 0 0 0 60 34z"/>
      <circle class="cs" cx="60" cy="60" r="18"/><circle class="cb" cx="60" cy="60" r="8"/>`,
    placamae: `<rect class="c1" x="8" y="8" width="104" height="104" rx="12"/>
      <rect class="cs" x="20" y="20" width="40" height="40" rx="6"/><rect class="c2" x="29" y="29" width="22" height="22" rx="3"/>
      <rect class="cb" x="70" y="18" width="7" height="46" rx="3"/><rect class="cb" x="82" y="18" width="7" height="46" rx="3"/><rect class="cb" x="94" y="18" width="7" height="46" rx="3"/>
      <rect class="c2" x="20" y="74" width="64" height="9" rx="4"/><rect class="c2" x="20" y="90" width="64" height="9" rx="4"/>
      <rect class="cs" x="92" y="76" width="12" height="24" rx="3"/>`,
    gpu: `<rect class="c1" x="6" y="24" width="108" height="62" rx="10"/>
      <circle class="cs" cx="38" cy="55" r="21"/><circle class="c2" cx="38" cy="55" r="8"/>
      <circle class="cs" cx="82" cy="55" r="21"/><circle class="c2" cx="82" cy="55" r="8"/>
      <rect class="c2" x="22" y="86" width="60" height="12" rx="2"/>`,
    fonte: `<rect class="c1" x="8" y="20" width="104" height="80" rx="12"/>
      <circle class="cs" cx="46" cy="60" r="30"/>
      <path class="s1" d="M46 36v48M22 60h48M29 43l34 34M63 43L29 77" style="stroke-width:6"/>
      <circle class="c1" cx="46" cy="60" r="8"/>
      <path class="cb" d="M96 30L83 58h9l-5 24 16-30h-9l6-22z"/>`,
    filtro: `<rect class="c1" x="6" y="40" width="100" height="44" rx="14"/>
      ${[28, 56, 84].map((x) => `<circle class="cb" cx="${x}" cy="62" r="12"/><rect class="c1" x="${x - 6}" y="56" width="4" height="9" rx="1"/><rect class="c1" x="${x + 2}" y="56" width="4" height="9" rx="1"/>`).join("")}
      <path class="s1" d="M106 62c10 0 10 22-2 34" style="stroke-width:6"/>`,
    estabilizador: `<rect class="c1" x="12" y="18" width="96" height="86" rx="14"/>
      <path class="cs" d="M28 70a32 32 0 0 1 64 0z"/>
      <path class="st" d="M60 70l18-22" style="stroke-width:6"/><circle class="ct" cx="60" cy="70" r="6"/>
      <rect class="cb" x="28" y="82" width="22" height="12" rx="4"/><rect class="cb" x="70" y="82" width="22" height="12" rx="4"/>`,
    nobreak: `<rect class="c1" x="20" y="10" width="80" height="100" rx="14"/>
      <rect class="cs" x="32" y="24" width="56" height="34" rx="6"/>
      <rect class="c1" x="40" y="32" width="34" height="18" rx="3"/><rect class="c1" x="74" y="37" width="5" height="8" rx="2"/>
      <rect class="cb" x="43" y="35" width="20" height="12" rx="2"/>
      <circle class="cb" cx="60" cy="84" r="12"/><path class="s1" d="M60 78v8" style="stroke-width:5"/>`,
    raio: `<circle class="cs" cx="60" cy="60" r="52"/><path class="c1" d="M66 14L32 66h24l-6 40 38-58H64z"/>`,
    mouse: `<rect class="c1" x="30" y="10" width="60" height="100" rx="30"/>
      <path class="sb" d="M32 50h56M60 12v38" style="stroke-width:5"/><rect class="cs" x="55" y="22" width="10" height="18" rx="5"/>`,
    impressora: `<rect class="cs" x="30" y="8" width="60" height="34" rx="4"/>
      <rect class="c1" x="8" y="36" width="104" height="52" rx="12"/><circle class="cb" cx="94" cy="52" r="5"/>
      <rect class="c2" x="22" y="70" width="76" height="8" rx="4"/>
      <rect class="cs" x="30" y="74" width="60" height="38" rx="4"/>
      <rect class="c2" x="40" y="86" width="40" height="6" rx="3"/><rect class="c2" x="40" y="98" width="28" height="6" rx="3"/>`,
    som: `<rect class="c1" x="26" y="8" width="68" height="104" rx="14"/>
      <circle class="cs" cx="60" cy="74" r="24"/><circle class="c2" cx="60" cy="74" r="10"/>
      <circle class="cs" cx="60" cy="32" r="11"/><circle class="c2" cx="60" cy="32" r="4"/>`,
    scanner: `<rect class="c2" x="8" y="30" width="104" height="18" rx="6"/>
      <rect class="c1" x="8" y="46" width="104" height="50" rx="10"/>
      <rect class="cs" x="18" y="58" width="84" height="8" rx="4"/>
      <rect class="c2" x="18" y="78" width="40" height="8" rx="4"/><circle class="cb" cx="96" cy="82" r="5"/>`,
    toque: `<rect class="c1" x="28" y="8" width="64" height="104" rx="12"/><rect class="cs" x="34" y="20" width="52" height="76" rx="4"/>
      <circle class="c2" cx="60" cy="58" r="17"/><circle class="c1" cx="60" cy="58" r="7"/>
      <rect class="cb" x="52" y="100" width="16" height="5" rx="2"/>`,
    digital: `<circle class="cs" cx="60" cy="60" r="52"/>
      <path class="s1" d="M34 78c-4-8-6-16-6-24a32 32 0 0 1 64 0c0 12-2 24-8 36M46 94c-4-10-6-24-6-38a20 20 0 0 1 40 0c0 12-2 22-6 32M58 100c-4-12-8-28-8-44a10 10 0 0 1 20 0c0 12-2 24-6 34" style="stroke-width:6"/>`,
    mesa: `<rect class="c1" x="6" y="28" width="96" height="74" rx="10"/>
      <rect class="cs" x="16" y="38" width="76" height="54" rx="4"/>
      <path class="s1" d="M26 78c8-16 16 4 24-8s14-8 20-14" style="stroke-width:5"/>
      <path class="ct" d="M104 8l12 12-36 36-16 4 4-16z"/>`,
    usb: `<rect class="c2" x="42" y="8" width="36" height="34" rx="3"/>
      <rect class="cb" x="49" y="18" width="8" height="8" rx="1"/><rect class="cb" x="63" y="18" width="8" height="8" rx="1"/>
      <rect class="c1" x="34" y="40" width="52" height="50" rx="10"/><rect class="c1" x="52" y="88" width="16" height="26" rx="4"/>`,
    hdmi: `<path class="c2" d="M18 20h84v22L90 56H30L18 42z"/><rect class="cs" x="30" y="28" width="60" height="10" rx="2"/>
      <rect class="c1" x="34" y="54" width="52" height="40" rx="8"/><rect class="c1" x="52" y="92" width="16" height="22" rx="4"/>`,
    displayport: `<path class="c2" d="M18 20h84v36H32L18 42z"/><rect class="cs" x="32" y="30" width="58" height="10" rx="2"/>
      <rect class="c1" x="34" y="54" width="52" height="40" rx="8"/><rect class="c1" x="52" y="92" width="16" height="22" rx="4"/>`,
    vga: `<circle class="c1" cx="10" cy="46" r="8"/><circle class="c1" cx="110" cy="46" r="8"/>
      <path class="c2" d="M22 24h76l-8 44H30z"/>
      ${[0, 1, 2].map((l) => Array.from({ length: 5 - (l === 1 ? 0 : 1) }, (_, i) => `<circle class="cb" cx="${(l === 1 ? 36 : 42) + i * 12}" cy="${36 + l * 11}" r="3.5"/>`).join("")).join("")}
      <rect class="c1" x="34" y="66" width="52" height="30" rx="8"/><rect class="c1" x="52" y="94" width="16" height="20" rx="4"/>`,
    rj45: `<rect class="cs" x="28" y="10" width="64" height="58" rx="6"/>
      ${Array.from({ length: 8 }, (_, i) => `<rect class="c1" x="${35 + i * 7}" y="14" width="3.5" height="16" rx="1"/>`).join("")}
      <rect class="c2" x="44" y="40" width="32" height="10" rx="3"/>
      <rect class="c1" x="38" y="66" width="44" height="30" rx="8"/><rect class="c1" x="52" y="94" width="16" height="20" rx="4"/>`,
    semfio: `<circle class="cs" cx="60" cy="60" r="52"/><circle class="c1" cx="60" cy="84" r="9"/>
      <path class="s1" d="M42 66a26 26 0 0 1 36 0M28 50a46 46 0 0 1 64 0"/>`,
  });
}

// Instante em que um trecho é dito dentro da fala i (proporcional à posição no texto).
function quando(c, cena) {
  return (i, trecho, d = 0) => {
    const f = cena.falas[i];
    const txt = typeof f === "string" ? f : (f.falar || f.texto);
    const k = txt.indexOf(trecho);
    if (k < 0) throw new Error(`Trecho “${trecho}” não está na fala ${i} da cena ${cena.id}`);
    return c.t(i) + c.dur(i) * (k / txt.length) + d;
  };
}

// Ícone com tamanho fixo, para usar dentro de HTML próprio.
function ic(nome, tam, extra = "") {
  return icone(nome).replace('class="icone"', `class="icone" style="width:${tam}px;height:${tam}px;margin:0;flex-shrink:0;${extra}"`);
}

// Cartão com o ícone à esquerda e o texto à direita.
function cartaoLado(c, o, estilo, t, tipo = "baixo") {
  const e = c.novo(`<div class="cartao" style="display:flex;gap:26px;align-items:center;padding:28px 32px">
    ${ic(o.icone, o.tam || 84)}<div><h3 style="margin:0 0 6px;font-size:${o.fs || 34}px">${o.titulo}</h3>${o.texto ? `<p style="font-size:${o.ps || 27}px">${o.texto}</p>` : ""}</div></div>`, estilo);
  if (o.cor) e.style.setProperty("--cor", o.cor);
  return c.entra(e, t, tipo);
}

// Faixa de palavra-chave no rodapé, centralizada sem depender do transform do CSS.
function faixa(c, html, t, tFim) {
  const e = c.novo(`<div class="chave" style="left:0;right:0;margin:0 auto;width:max-content;transform:none">${html}</div>`);
  c.tl.fromTo(e, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out", immediateRender: true }, t);
  if (tFim) c.tl.to(e, { autoAlpha: 0, duration: 0.3 }, tFim);
  return e;
}

const FMT1 = (v) => v.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

serie.capitulo({
  numero: 5,
  titulo: "Hardware",
  cor: "#b45309",
  proximo: "Capítulo 6 — Armazenamento em Nuvem",
  cenas: [
    // ------------------------------------------------------------ Abertura
    {
      id: "abertura",
      visual: "Bit grande à esquerda acena. À direita surgem o rótulo “Capítulo 5” e o título “Hardware”. Um roteiro de 5 tópicos aparece item por item, cada um na frase que o anuncia. Na última frase, Bit dá um pulinho.",
      secao: "Abertura",
      bit: BIT_GRANDE,
      falas: [
        "Olá! Eu sou o Bit. Que bom ter você de volta!",
        "Neste capítulo, vamos abrir o gabinete e conhecer o hardware do computador.",
        { texto: "Primeiro, o processador: o que define o seu desempenho e as arquiteturas RISC e CISC.", falar: "Primeiro, o processador: o que define o seu desempenho e as arquiteturas rísc e císc." },
        { texto: "Em seguida, as memórias: a hierarquia, a cache, a RAM, a ROM e a BIOS.", falar: "Em seguida, as memórias: a hierarquia, a quêch, a RAM, a ROM e a BIOS." },
        "Depois, o armazenamento, a placa-mãe e os equipamentos de energia.",
        "E, para fechar, os periféricos, as conexões e as impressoras.",
        "Vamos lá?",
      ],
      montar(c) {
        const q = quando(c, this);
        c.bit.acenar(c.t(0, 0.2));
        c.titulo("Capítulo 5", "Hardware", { left: 900, top: 200 }, c.t(1));
        c.lista([
          "<b>Processador</b>: desempenho, RISC e CISC",
          "<b>Memórias</b>: cache, RAM, ROM e BIOS",
          "<b>Armazenamento</b>: HD, SSD e mídias",
          "<b>Placa-mãe</b> e <b>energia</b>",
          "<b>Periféricos</b>, conexões e impressoras",
        ], { left: 900, top: 420, width: 900 }, [c.t(2), c.t(3), c.t(4), q(4, "a placa-mãe"), c.t(5)]);
        c.bit.pular(c.t(6));
      },
    },

    // ------------------------------------------------- Conceito de hardware
    {
      id: "conceito",
      visual: "Título “O que é hardware” e a definição. Dez peças com ícone surgem uma a uma, na ordem em que são citadas (processador, RAM, placa-mãe, HD, SSD, placa de vídeo, fonte, teclado, mouse, monitor); faixa “O software diz ao hardware o que fazer”. Depois, as quatro peças principais: CPU processa, RAM temporária, SSD/HD armazena, placa-mãe conecta tudo. Quadro âmbar “Pegadinha de banca”: Windows é software; firmware não é hardware.",
      secao: "Conceito de hardware",
      bit: BIT_CANTO,
      falas: [
        "Vamos começar pelo conceito. Hardware é o conjunto de componentes físicos do computador: tudo aquilo que pode ser visto e tocado.",
        { texto: "Por exemplo: o processador, a memória RAM, a placa-mãe, o HD, o SSD, a placa de vídeo, a fonte de alimentação, o teclado, o mouse e o monitor.", falar: "Por exemplo: o processador, a memória RAM, a placa-mãe, o HD, o SSD, a placa de vídeo, a fonte de alimentação, o teclado, o máus e o monitor." },
        "Mas essas peças só funcionam juntas graças ao software, que diz ao hardware o que fazer.",
        "Quatro delas são centrais: a CPU processa, a RAM é a memória temporária, o SSD ou o HD armazena, e a placa-mãe conecta tudo.",
        { texto: "Pegadinha: o Windows é hardware? Errado, é software. E o firmware, como a BIOS, é software gravado em um chip, e não hardware.", falar: "Pegadinha: o uíndous é hardware? Errado, é software. E o firmware, como a BIOS, é software gravado em um chip, e não hardware." },
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("Conceito", "O que é hardware", { left: 140, top: 150 }, c.t(0), { medio: true });
        const def = c.texto("Componentes <b>físicos</b>: tudo o que pode ser <b>visto e tocado</b>.", { left: 140, top: 318, width: 1400 }, q(0, "Hardware é"));
        const pecas = [
          ["cpu", "Processador", "processador"], ["memoria", "Memória RAM", "memória RAM"], ["placamae", "Placa-mãe", "placa-mãe"],
          ["hd", "HD", "o HD"], ["ssd", "SSD", "o SSD"], ["gpu", "Placa de vídeo", "placa de vídeo"], ["fonte", "Fonte", "fonte de"],
          ["teclado", "Teclado", "teclado"], ["mouse", "Mouse", "máus"], ["monitor", "Monitor", "monitor"],
        ];
        const tiles = pecas.map((p, i) => {
          const e = c.novo(`<div class="no" style="left:${140 + (i % 5) * 278}px;top:${420 + Math.floor(i / 5) * 200}px;width:252px;height:176px;padding:16px">
            ${ic(p[0], 84, "margin-bottom:12px")}<strong style="font-size:27px">${p[1]}</strong></div>`);
          return c.entra(e, q(1, p[2], -0.1), "pop");
        });
        faixa(c, "O <em>software</em> diz ao hardware o que fazer", c.t(2, 0.3), c.t(3) - 0.3);
        [def, ...tiles].forEach((e) => c.sai(e, c.t(3) - 0.4));
        [
          [{ icone: "cpu", titulo: "CPU", texto: "processa" }, "a CPU"],
          [{ icone: "memoria", titulo: "RAM", texto: "memória temporária" }, "a RAM"],
          [{ icone: "ssd", titulo: "SSD / HD", texto: "armazena" }, "o SSD"],
          [{ icone: "placamae", titulo: "Placa-mãe", texto: "conecta tudo" }, "a placa-mãe"],
        ].forEach(([n, trecho], i) => c.no(n, { left: 140 + i * 350, top: 330, width: 320, height: 300 }, q(3, trecho, -0.1)));
        c.quadro("prova", "“O Windows é um hardware.” <b>Errado</b>: Windows é <b>software</b>. E o firmware (como a BIOS) é software gravado em um chip, <b>não</b> hardware.", { left: 140, top: 670, width: 1400 }, c.t(4));
      },
    },

    // ------------------------------------------------------------ Processador
    {
      id: "cpu",
      visual: "À esquerda, um grande chip “CPU”. À direita, a função “executa as instruções e processa os dados” e três etiquetas das partes (UC, ULA, registradores). Em seguida, dois cartões: Computadores (Intel · AMD) e Celulares (arquitetura ARM).",
      secao: "Processador",
      bit: BIT_CANTO,
      falas: [
        "Agora, o cérebro do computador: o processador, ou CPU. Ele executa as instruções dos programas e processa os dados.",
        "Como vimos no Capítulo 1, ela é formada pela unidade de controle, pela unidade lógica e aritmética e pelos registradores.",
        "Os principais fabricantes de processadores para computadores são a Intel e a AMD.",
        "Já os celulares usam principalmente processadores com arquitetura ARM.",
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("Processador", "A CPU", { left: 140, top: 150 }, c.t(0), { medio: true });
        const chip = c.novo(`<div class="no" style="left:140px;top:330px;width:420px;height:440px">${ic("cpu", 220, "margin-bottom:20px")}<strong style="font-size:52px">CPU</strong><span><i>Central Processing Unit</i></span></div>`);
        c.entra(chip, q(0, "o processador"), "pop");
        c.texto("Executa as <b>instruções</b> dos programas<br>e <b>processa</b> os dados.", { left: 640, top: 330, width: 900 }, q(0, "Ele executa"));
        const partes = [["Unidade de Controle", "unidade de controle"], ["ULA", "unidade lógica"], ["Registradores", "registradores"]];
        const linhaPartes = c.novo(`<div class="abs" style="left:640px;top:480px;display:flex;gap:16px">${partes.map((p) => `<span class="pilula">${p[0]}</span>`).join("")}</div>`);
        [...linhaPartes.children].forEach((e, i) => c.entra(e, q(1, partes[i][1], -0.1), "pop"));
        cartaoLado(c, { icone: "notebook", titulo: "Computadores", texto: "<b>Intel</b> · <b>AMD</b>" }, { left: 640, top: 590, width: 430 }, c.t(2));
        cartaoLado(c, { icone: "celular", titulo: "Celulares", texto: "arquitetura <b>ARM</b>" }, { left: 1110, top: 590, width: 430 }, c.t(3));
      },
    },
    {
      id: "desempenho",
      visual: "Três cartões. Clock: ícone de sinal, “ciclos por segundo, em hertz”, e o número “3,5 GHz = 3,5 bilhões de ciclos/s”, com a contagem animada. Núcleos: oito quadrados que acendem um a um (“8 núcleos → tarefas em paralelo”). Threads: um núcleo com duas linhas de execução desenhadas e “Hyper-Threading: 2 threads por núcleo”.",
      secao: "Processador",
      bit: BIT_CANTO,
      falas: [
        { texto: "E o que define o desempenho? Primeiro, o clock: a frequência, ou seja, quantos ciclos o processador executa por segundo, medida em hertz.", falar: "E o que define o desempenho? Primeiro, o clóc: a frequência, ou seja, quantos ciclos o processador executa por segundo, medida em hertz." },
        "Um processador de três vírgula cinco gigahertz realiza três vírgula cinco bilhões de ciclos por segundo.",
        { texto: "Depois, os núcleos, ou cores: cada um funciona como um processador independente. Com oito núcleos, várias tarefas rodam em paralelo.", falar: "Depois, os núcleos, ou córs: cada um funciona como um processador independente. Com oito núcleos, várias tarefas rodam em paralelo." },
        { texto: "E as threads, que são fluxos de execução. Com tecnologias como o Hyper-Threading, cada núcleo trabalha com duas threads.", falar: "E as tréds, que são fluxos de execução. Com tecnologias como o ráiper tréding, cada núcleo trabalha com duas tréds." },
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("Desempenho", "Clock, núcleos e threads", { left: 140, top: 150 }, c.t(0), { medio: true });
        // Clock
        const clock = c.novo(`<div class="cartao" style="left:140px;top:330px;width:460px;height:520px">
          ${ic("degraus", 84, "margin-bottom:18px")}<h3>Clock</h3><p>frequência: ciclos por segundo, medida em <b>hertz (Hz)</b></p>
          <div class="ghz" style="margin-top:28px;font:800 64px var(--sans);color:var(--cor)">3,5 GHz</div>
          <div class="ciclos" style="font-size:28px;color:var(--texto-suave)">= <b class="valor" style="color:var(--texto)">0</b> <b style="color:var(--texto)">bilhões</b> de ciclos/s</div></div>`);
        c.entra(clock, q(0, "o clóc"), "baixo");
        c.entra(clock.querySelector(".ghz"), c.t(1, 0.2), "pop");
        c.entra(clock.querySelector(".ciclos"), q(1, "realiza"), "baixo");
        c.contar(clock.querySelector(".valor"), 0, 3.5, q(1, "três vírgula cinco bilhões"), 1.2, FMT1);
        // Núcleos
        const nuc = c.novo(`<div class="cartao" style="left:640px;top:330px;width:460px;height:520px">
          <h3>Núcleos <span style="color:var(--texto-fraco);font-weight:600">(cores)</span></h3><p>cada um, um processador independente</p>
          <div class="grade" style="margin-top:30px;display:grid;grid-template-columns:repeat(4,78px);gap:16px">${Array.from({ length: 8 }, () => `<div style="height:78px;border-radius:14px;background:var(--cor-suave);border:4px solid var(--cor-media)"></div>`).join("")}</div>
          <p class="par" style="margin-top:26px"><b>8 núcleos</b> → tarefas em <b>paralelo</b></p></div>`);
        c.entra(nuc, c.t(2), "baixo");
        [...nuc.querySelector(".grade").children].forEach((n, i) => c.tl.to(n, { backgroundColor: "var(--cor)", borderColor: "var(--cor)", duration: 0.25 }, q(2, "Com oito", i * 0.18)));
        c.entra(nuc.querySelector(".par"), q(2, "várias tarefas"), "baixo");
        // Threads
        const thr = c.novo(`<div class="cartao" style="left:1140px;top:330px;width:400px;height:520px">
          <h3>Threads</h3><p>fluxos de execução</p>
          <svg viewBox="0 0 320 170" style="width:320px;height:170px;margin-top:22px">
            <rect x="0" y="35" width="110" height="100" rx="16" fill="var(--cor)"/>
            <text x="55" y="92" text-anchor="middle" font-family="Inter" font-weight="700" font-size="22" fill="#fff">núcleo</text>
            <path class="t1" d="M110 65 C170 65 190 30 310 30" stroke="var(--cor)" stroke-width="8" fill="none" stroke-linecap="round"/>
            <path class="t2" d="M110 105 C170 105 190 140 310 140" stroke="var(--cor-media)" stroke-width="8" fill="none" stroke-linecap="round"/>
          </svg>
          <p class="ht" style="margin-top:18px">Hyper-Threading:<br><b>2 threads</b> por núcleo</p></div>`);
        c.entra(thr, c.t(3), "baixo");
        c.desenhar(thr.querySelector(".t1"), q(3, "cada núcleo"));
        c.desenhar(thr.querySelector(".t2"), q(3, "cada núcleo", 0.5));
        c.entra(thr.querySelector(".ht"), q(3, "ráiper"), "baixo");
      },
    },
    {
      id: "mais-desempenho",
      visual: "Cartão “Memória cache: maior e mais rápida → menos espera pela RAM”. Cartão “32 ou 64 bits” com duas barras: 32 bits chega a ≈ 4 GB de RAM; a de 64 bits passa do limite. Depois, a GPU: cartão principal e as opções Integrada (no processador) e Dedicada (placa separada, memória própria). Quadro azul “Resumo estratégico”.",
      secao: "Processador",
      bit: BIT_CANTO,
      falas: [
        { texto: "A memória cache também conta: quanto maior e mais rápida, menos o processador espera pela RAM.", falar: "A memória quêch também conta: quanto maior e mais rápida, menos o processador espera pela RAM." },
        "E tem a arquitetura: um sistema de trinta e dois bits enxerga no máximo cerca de quatro gigabytes de RAM; os de sessenta e quatro bits superam esse limite.",
        { texto: "Já a GPU, a unidade de processamento gráfico, fica na placa de vídeo e é especializada em imagens e cálculos em paralelo.", falar: "Já a gê pê u, a unidade de processamento gráfico, fica na placa de vídeo e é especializada em imagens e cálculos em paralelo." },
        { texto: "A GPU pode ser integrada ao processador, ou dedicada: em uma placa separada, com memória própria.", falar: "A gê pê u pode ser integrada ao processador, ou dedicada: em uma placa separada, com memória própria." },
        { texto: "Resumindo: clock alto não é tudo! Núcleos, cache e arquitetura também contam. E o ciclo de instrução é sempre busca, decodificação e execução.", falar: "Resumindo: clóc alto não é tudo! Núcleos, quêch e arquitetura também contam. E o ciclo de instrução é sempre busca, decodificação e execução." },
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("Desempenho", "Cache, bits e GPU", { left: 140, top: 150 }, c.t(0), { medio: true });
        const cache = cartaoLado(c, { icone: "chip", titulo: "Memória cache", texto: "maior e mais rápida →<br><b>menos espera</b> pela RAM", tam: 96 }, { left: 140, top: 330, width: 560, height: 300 }, c.t(0, 0.4));
        const bits = c.novo(`<div class="cartao" style="left:740px;top:330px;width:800px;height:300px">
          <h3>32 ou 64 bits</h3>
          <div class="b32" style="display:flex;align-items:center;gap:20px;margin-top:22px">
            <b style="width:110px;font-size:30px">32 bits</b><span class="barra" style="display:block;width:180px;height:30px;border-radius:15px;background:var(--cor-media)"></span>
            <span style="font-size:28px;color:var(--texto-suave)">até <b style="color:var(--texto)">≈ 4 GB</b> de RAM</span></div>
          <div class="b64" style="display:flex;align-items:center;gap:20px;margin-top:22px">
            <b style="width:110px;font-size:30px">64 bits</b><span class="barra" style="display:block;width:380px;height:30px;border-radius:15px;background:var(--cor)"></span>
            <span style="font-size:28px;color:var(--texto-suave);white-space:nowrap">supera o limite</span></div></div>`);
        c.entra(bits, c.t(1), "baixo");
        c.entra(bits.querySelector(".b32"), q(1, "um sistema"), "esquerda");
        c.entra(bits.querySelector(".b64"), q(1, "os de sessenta"), "esquerda");
        c.tl.fromTo(bits.querySelector(".b64 .barra"), { width: 180 }, { width: 380, duration: 1, ease: "power2.out", immediateRender: false }, q(1, "superam"));
        [cache, bits].forEach((e) => c.sai(e, c.t(2) - 0.4));
        cartaoLado(c, { icone: "gpu", titulo: "GPU", texto: "processamento <b>gráfico</b>: imagens e cálculos em <b>paralelo</b>", tam: 96 }, { left: 140, top: 330, width: 560, height: 290 }, c.t(2));
        cartaoLado(c, { icone: "cpu", titulo: "Integrada", texto: "no próprio processador" }, { left: 740, top: 330, width: 390, height: 290 }, q(3, "integrada"));
        cartaoLado(c, { icone: "gpu", titulo: "Dedicada", texto: "placa separada, com <b>memória própria</b>" }, { left: 1150, top: 330, width: 390, height: 290 }, q(3, "ou dedicada"));
        const r = c.quadro("resumo", "Clock alto <b>não é tudo</b>: núcleos, cache e arquitetura também determinam o desempenho. Ciclo de instrução: <b>busca → decodificação → execução</b>.", { left: 140, top: 660, width: 1400 }, c.t(4));
        r.querySelector("p").style.fontSize = "36px";
      },
    },
    {
      id: "risc-cisc",
      visual: "Dois cartões lado a lado. CISC: muitos blocos de tamanhos variados (instruções complexas) e, embaixo, “x86 · Intel e AMD · desktops e notebooks”. RISC: poucos blocos iguais (instruções simples) e “ARM · celulares, tablets, Apple com chip M”. Faixa “Celular → RISC (ARM)”. Depois, o diagrama de um SoC: um único chip com CPU, GPU, controlador de memória e outros componentes.",
      secao: "Processador",
      bit: BIT_CANTO,
      falas: [
        { texto: "Outro tema clássico: as arquiteturas CISC e RISC. A CISC tem um conjunto grande de instruções complexas.", falar: "Outro tema clássico: as arquiteturas císc e rísc. A císc tem um conjunto grande de instruções complexas." },
        { texto: "Ela aparece nos processadores x86 da Intel e da AMD, usados em desktops e notebooks.", falar: "Ela aparece nos processadores xis oitenta e seis da Intel e da AMD, usados em desktops e notebooks." },
        { texto: "A RISC tem um conjunto reduzido de instruções simples e rápidas, com menor consumo de energia. É o caso dos processadores ARM, de celulares, tablets e dos computadores da Apple com chip M.", falar: "A rísc tem um conjunto reduzido de instruções simples e rápidas, com menor consumo de energia. É o caso dos processadores ARM, de celulares, tébléts e dos computadores da Apple com chip M." },
        { texto: "Nos celulares, o processador fica em um SoC, o System on a Chip: um único chip que reúne CPU, GPU, controlador de memória e outros componentes.", falar: "Nos celulares, o processador fica em um ésse ó cê, o sístem ón a tchíp: um único chip que reúne CPU, gê pê u, controlador de memória e outros componentes." },
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("Arquiteturas", "CISC × RISC", { left: 140, top: 150 }, c.t(0), { medio: true });
        const larg = [120, 60, 150, 90, 70, 130, 100, 80, 140, 60];
        const cisc = c.novo(`<div class="cartao" style="left:140px;top:330px;width:680px;height:470px">
          <h3>CISC</h3><p>conjunto <b>grande</b> de instruções <b>complexas</b></p>
          <div class="blocos" style="display:flex;flex-wrap:wrap;gap:10px;margin-top:22px">${larg.map((w) => `<span style="width:${w}px;height:38px;border-radius:8px;background:var(--cor-media)"></span>`).join("")}</div>
          <div class="onde" style="display:flex;gap:20px;align-items:center;margin-top:26px">${ic("notebook", 70)}<p style="font-size:27px"><b>x86</b> · Intel e AMD<br>desktops e notebooks</p></div></div>`);
        c.entra(cisc, q(0, "A císc"), "esquerda");
        c.entra(cisc.querySelector(".onde"), c.t(1), "baixo");
        const risc = c.novo(`<div class="cartao" style="left:860px;top:330px;width:680px;height:470px">
          <h3>RISC</h3><p>conjunto <b>reduzido</b> de instruções <b>simples e rápidas</b> · menor consumo</p>
          <div class="blocos" style="display:flex;gap:10px;margin-top:22px">${Array.from({ length: 4 }, () => `<span style="width:60px;height:38px;border-radius:8px;background:var(--cor)"></span>`).join("")}</div>
          <div class="onde" style="display:flex;gap:20px;align-items:center;margin-top:26px">${ic("celular", 70)}<p style="font-size:27px"><b>ARM</b> · celulares, tablets<br>Apple com chip M</p></div></div>`);
        c.entra(risc, c.t(2), "direita");
        c.entra(risc.querySelector(".onde"), q(2, "É o caso"), "baixo");
        faixa(c, "Celular → <em>RISC (ARM)</em> &nbsp;·&nbsp; PC → <em>CISC (x86)</em>", q(2, "É o caso", 1.5), c.t(3) - 0.3);
        [cisc, risc].forEach((e) => c.sai(e, c.t(3) - 0.4));
        const soc = c.novo(`<div class="abs" style="left:140px;top:340px;width:760px;height:500px;border-radius:36px;background:var(--cor);box-shadow:var(--sombra);padding:34px">
          <div class="rotulo" style="color:#fff;opacity:.85">SoC · um único chip</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:22px">
            ${["CPU", "GPU", "Controlador de memória", "Outros componentes"].map((t) => `<div class="parte" style="height:170px;border-radius:22px;background:#fff;display:grid;place-items:center;text-align:center;font:800 34px var(--sans);padding:12px">${t}</div>`).join("")}
          </div></div>`);
        c.entra(soc, q(3, "ésse ó cê"), "zoom");
        const tempos = [q(3, "CPU"), q(3, "gê pê u"), q(3, "controlador"), q(3, "outros")];
        soc.querySelectorAll(".parte").forEach((p, i) => c.entra(p, tempos[i] - 0.1, "pop"));
        c.texto("<b>SoC</b> = <i>System on a Chip</i><br>o processador do celular", { left: 960, top: 380, width: 600 }, q(3, "sístem"));
        cartaoLado(c, { icone: "celular", titulo: "Celular", texto: "CPU, GPU e muito mais<br>em <b>um só chip</b>" }, { left: 960, top: 560, width: 560 }, q(3, "um único chip"));
      },
    },

    // ------------------------------------------------------------ Memórias
    {
      id: "hierarquia",
      visual: "Pirâmide de cinco degraus, do topo para a base: Registradores, Cache, RAM, SSD e HD. Faixa “Mais perto da CPU → mais rápida, menor e mais cara por GB”. Ao lado de cada degrau surge a capacidade típica. Uma linha tracejada separa as voláteis (registradores, cache, RAM) das não voláteis (SSD, HD). Quadro verde “Memorize”.",
      secao: "Memórias",
      bit: BIT_CANTO,
      falas: [
        { texto: "Agora, as memórias. Elas são organizadas em uma hierarquia: no topo, os registradores; depois, a cache, a RAM, o SSD e, na base, o HD.", falar: "Agora, as memórias. Elas são organizadas em uma hierarquia: no topo, os registradores; depois, a quêch, a RAM, o SSD e, na base, o HD." },
        "A regra é: quanto mais perto do processador, mais rápida, menor e mais cara por gigabyte é a memória.",
        { texto: "Já a capacidade cresce para baixo: os registradores guardam só bytes, a RAM tem de oito a sessenta e quatro gigabytes, e o HD, de um a vários terabytes.", falar: "Já a capacidade cresce para baixo: os registradores guardam só bytes, a RAM tem de oito a sessenta e quatro gigabytes, e o HD, de um a vários terabáites." },
        { texto: "E repare: registradores, cache e RAM são voláteis. O SSD e o HD, não.", falar: "E repare: registradores, quêch e RAM são voláteis. O SSD e o HD, não." },
        { texto: "Memorize: do mais rápido para o mais lento, registradores, cache, RAM, SSD e HD. A capacidade cresce no sentido inverso.", falar: "Memorize: do mais rápido para o mais lento, registradores, quêch, RAM, SSD e HD. A capacidade cresce no sentido inverso." },
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("Hierarquia de memória", "Do mais rápido ao maior", { left: 140, top: 150 }, c.t(0), { medio: true });
        const cx = 600, topo = 330, alt = 104, passo = 112;
        const hw = (y) => 125 + (y - topo) * (300 / 560);
        const niveis = [
          ["Registradores", "registradores;", "bytes", ["os registradores", 2]],
          ["Cache", "a quêch, a RAM", "KB a dezenas de MB", ["os registradores", 2, 0.9]],
          ["RAM", "a RAM, o SSD", "8 a 64 GB", ["a RAM tem", 2]],
          ["SSD", "o SSD e", "256 GB a alguns TB", ["a RAM tem", 2, 1.2]],
          ["HD", "o HD.", "1 a vários TB", ["e o HD", 2]],
        ];
        const tags = [];
        niveis.forEach((n, i) => {
          const y0 = topo + i * passo, y1 = y0 + alt;
          const a = hw(y0), b = hw(y1);
          const e = c.novo(`<div class="abs" style="left:${cx - b}px;top:${y0}px;width:${2 * b}px;height:${alt}px;
            clip-path:polygon(${b - a}px 0, ${b + a}px 0, 100% 100%, 0 100%);
            background:color-mix(in srgb, var(--cor) ${100 - i * 17}%, white);display:grid;place-items:center;
            font:800 34px var(--sans);color:${i < 3 ? "#fff" : "var(--texto)"}">${n[0]}</div>`);
          c.entra(e, q(0, n[1], -0.1), "baixo");
          const meio = (y0 + y1) / 2;
          const tag = c.novo(`<div class="abs pilula" style="left:${cx + hw(meio) + 34}px;top:${meio - 28}px;font-size:28px">${n[2]}</div>`);
          c.entra(tag, q(n[3][1], n[3][0], (n[3][2] || 0) - 0.1), "esquerda");
          tags.push(tag);
        });
        faixa(c, "Mais perto da CPU → <em>mais rápida, menor e mais cara por GB</em>", c.t(1, 0.4), c.t(2) - 0.3);
        const yLinha = topo + 3 * passo - 4;
        const linha = c.novo(`<svg class="abs" style="left:0;top:0;width:1920px;height:1080px" viewBox="0 0 1920 1080"><path d="M240 ${yLinha} H1540" stroke="var(--prova)" stroke-width="5" stroke-dasharray="14 12" fill="none"/></svg>`);
        c.desenhar(linha.querySelector("path"), c.t(3, 0.2), 1);
        const vol = c.novo(`<div class="abs" style="left:1330px;top:${yLinha - 62}px;font:700 28px var(--sans);color:var(--prova)">▲ voláteis</div>`);
        const nvol = c.novo(`<div class="abs" style="left:1330px;top:${yLinha + 14}px;font:700 28px var(--sans);color:var(--prova)">▼ não voláteis</div>`);
        c.entra(vol, q(3, "registradores"), "fade");
        c.entra(nvol, q(3, "O SSD"), "fade");
        [...tags, linha, vol, nvol].forEach((e) => c.sai(e, c.t(4) - 0.4));
        const m = c.quadro("dica", "Registradores → cache → RAM → SSD → HD.<br>Velocidade cai; a <b>capacidade cresce</b> no sentido inverso.", { left: 1010, top: 330, width: 530 }, c.t(4));
        m.querySelector("p").style.fontSize = "36px";
      },
    },
    {
      id: "cache",
      visual: "Fluxo CPU → Cache (SRAM, dados e instruções mais usados) → RAM (bem mais lenta); faixa com a analogia “Cache = material na mesa · RAM = armário”. Depois, três blocos de tamanho crescente: L1 (menor e mais rápida, dentro de cada núcleo), L2 (maior, um pouco mais lenta) e L3 (a maior, compartilhada entre os núcleos). Quadro âmbar “Pegadinha de banca”.",
      secao: "Memórias",
      bit: BIT_CANTO,
      falas: [
        { texto: "Vamos olhar a cache de perto: uma memória extremamente rápida, feita de SRAM, que guarda os dados e as instruções que o processador mais usa.", falar: "Vamos olhar a quêch de perto: uma memória extremamente rápida, feita de ésse ram, que guarda os dados e as instruções que o processador mais usa." },
        "Assim, a CPU não fica esperando a RAM, que é bem mais lenta. É como deixar na mesa o que você mais usa, em vez de buscar no armário.",
        { texto: "A cache tem níveis. A L1 é a menor e a mais rápida, e fica dentro de cada núcleo.", falar: "A quêch tem níveis. A L1 é a menor e a mais rápida, e fica dentro de cada núcleo." },
        "A L2 é maior e um pouco mais lenta. E a L3 é a maior, normalmente compartilhada entre os núcleos.",
        { texto: "Cuidado com a pegadinha: a cache é mais lenta que a RAM? Errado! A cache é mais rápida, porém bem menor.", falar: "Cuidado com a pegadinha: a quêch é mais lenta que a RAM? Errado! A quêch é mais rápida, porém bem menor." },
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("Memória cache", "Perto do processador", { left: 140, top: 150 }, c.t(0), { medio: true });
        const n1 = c.no({ icone: "cpu", titulo: "CPU", texto: "processador" }, { left: 140, top: 330, width: 360, height: 300 }, c.t(0, 0.5));
        const n2 = c.no({ icone: "chip", titulo: "Cache", texto: "SRAM · os dados e instruções <b>mais usados</b>" }, { left: 600, top: 330, width: 440, height: 300 }, q(0, "extremamente"));
        const n3 = c.no({ icone: "memoria", titulo: "RAM", texto: "bem mais lenta" }, { left: 1140, top: 330, width: 360, height: 300 }, q(1, "esperando a RAM"));
        const s1 = c.seta(510, 480, 590, 480, q(0, "que guarda"));
        const s2 = c.seta(1050, 480, 1130, 480, q(1, "esperando a RAM", 0.4), { cor: "var(--texto-fraco)" });
        faixa(c, "Cache = <em>material na mesa</em> &nbsp;·&nbsp; RAM = <em>armário</em>", q(1, "É como"), c.t(2) - 0.3);
        [n1, n2, n3, s1, s2].forEach((e) => c.sai(e, c.t(2) - 0.4));
        const base = 600;
        const blocos = [
          ["L1", "menor e mais rápida · <b>dentro de cada núcleo</b>", 140, 240, 140, "var(--cor)", "#fff", c.t(2, 0.3)],
          ["L2", "maior e um pouco mais lenta", 440, 340, 200, "var(--cor-media)", "var(--texto)", c.t(3)],
          ["L3", "a maior · <b>compartilhada</b> entre os núcleos", 840, 560, 270, "var(--cor-suave)", "var(--texto)", q(3, "E a L3")],
        ];
        blocos.forEach(([nome, txt, x, w, h, bg, cor, t]) => {
          const e = c.novo(`<div class="abs" style="left:${x}px;top:${base - h}px;width:${w}px;height:${h}px;border-radius:24px;background:${bg};color:${cor};box-shadow:var(--sombra);display:grid;place-items:center;font:800 64px var(--sans)">${nome}</div>`);
          c.entra(e, t, "baixo");
          const leg = c.novo(`<div class="abs" style="left:${x}px;top:${base + 16}px;width:${w + 30}px;font-size:26px;line-height:1.3;color:var(--texto-suave)">${txt}</div>`);
          c.entra(leg, t + 0.3, "fade");
        });
        c.quadro("prova", "“A cache é mais lenta que a RAM.” <b>Errado</b>: a cache é <b>mais rápida</b>, porém bem <b>menor</b>.", { left: 140, top: 730, width: 1400 }, c.t(4));
      },
    },
    {
      id: "ram",
      visual: "Cartão “RAM — Random Access Memory, memória de acesso aleatório”. Painel “Na RAM agora” com Sistema operacional, Programas abertos e Dados em uso; ao falar em desligar, tudo apaga e surge o selo “volátil: desligou, apagou”, além de “leitura ✓ escrita ✓”. Etiquetas DRAM · DDR4 · DDR5. Depois, o fluxo RAM cheia → memória virtual no disco → computador lento, e o quadro azul “Resumo estratégico”.",
      secao: "Memórias",
      bit: BIT_CANTO,
      falas: [
        { texto: "E a memória RAM? A sigla vem de Random Access Memory: memória de acesso aleatório.", falar: "E a memória RAM? A sigla vem de réndom ékcess mémori: memória de acesso aleatório." },
        "Ela é a memória principal: guarda o sistema operacional, os programas abertos e os dados em uso.",
        "A RAM é volátil: perde todo o conteúdo quando o computador é desligado. E permite leitura e escrita.",
        { texto: "Ela é feita de DRAM, a RAM dinâmica. As gerações atuais são a DDR4 e a DDR5.", falar: "Ela é feita de dê ram, a RAM dinâmica. As gerações atuais são a DDR4 e a DDR5." },
        "Se houver pouca RAM, o sistema passa a usar a memória virtual, no disco, e o computador fica lento.",
        "Resumindo: a RAM é a memória principal, temporária e volátil. Mais RAM permite manter mais programas abertos sem perder desempenho.",
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("Memória RAM", "A memória principal", { left: 140, top: 150 }, c.t(0), { medio: true });
        const card = c.novo(`<div class="cartao" style="left:140px;top:330px;width:460px;height:470px">
          ${ic("memoria", 150, "margin-bottom:16px")}<h3 style="font-size:52px">RAM</h3><p><i>Random Access Memory</i><br>memória de <b>acesso aleatório</b></p></div>`);
        c.entra(card, c.t(0, 0.3), "baixo");
        const painel = c.novo(`<div class="cartao" style="left:660px;top:330px;width:880px;height:330px">
          <div class="rotulo">Na RAM agora</div>
          <div class="itens" style="display:flex;gap:18px;margin-top:26px;flex-wrap:wrap">
            ${["Sistema operacional", "Programas abertos", "Dados em uso"].map((t) => `<span class="pilula" style="font-size:30px">${t}</span>`).join("")}</div>
          <div class="volatil" style="margin-top:34px;display:flex;gap:18px;align-items:center">
            <span style="padding:10px 24px;border-radius:999px;background:var(--errado);color:#fff;font:700 28px var(--sans)">volátil: desligou, apagou</span>
            <span class="le" style="font:700 28px var(--sans);color:var(--certo)">leitura ✓ &nbsp;escrita ✓</span></div></div>`);
        c.entra(painel, c.t(1), "baixo");
        const itens = [...painel.querySelectorAll(".itens .pilula")];
        [q(1, "o sistema"), q(1, "os programas"), q(1, "os dados")].forEach((t, i) => c.entra(itens[i], t, "pop"));
        c.tl.to(itens, { opacity: 0.18, duration: 0.5 }, q(2, "quando o computador"));
        c.entra(painel.querySelector(".volatil"), q(2, "perde"), "baixo");
        c.entra(painel.querySelector(".le"), q(2, "E permite"), "fade");
        const ger = c.novo(`<div class="abs" style="left:660px;top:710px;display:flex;gap:18px;align-items:center">
          <span style="font-size:30px;color:var(--texto-suave)">feita de</span><span class="pilula g">DRAM</span>
          <span style="font-size:30px;color:var(--texto-suave);margin-left:14px">gerações</span><span class="pilula g">DDR4</span><span class="pilula g">DDR5</span></div>`);
        c.entra(ger, c.t(3), "fade");
        const gs = ger.querySelectorAll(".g");
        [c.t(3, 0.2), q(3, "DDR4"), q(3, "DDR5")].forEach((t, i) => c.entra(gs[i], t, "pop"));
        [card, painel, ger].forEach((e) => c.sai(e, c.t(4) - 0.4));
        c.no({ icone: "memoria", titulo: "Pouca RAM", texto: "não cabe tudo" }, { left: 140, top: 330, width: 380, height: 270 }, c.t(4));
        c.seta(530, 465, 620, 465, q(4, "passa a usar"));
        c.no({ icone: "hd", titulo: "Memória virtual", texto: "no disco" }, { left: 630, top: 330, width: 400, height: 270 }, q(4, "memória virtual"));
        c.seta(1040, 465, 1130, 465, q(4, "e o computador"));
        c.no({ icone: "relogio", titulo: "Lento", texto: "o computador espera" }, { left: 1140, top: 330, width: 380, height: 270 }, q(4, "fica lento"));
        const r = c.quadro("resumo", "RAM = memória <b>principal</b>, <b>temporária</b> e <b>volátil</b>. Mais RAM: mais programas abertos sem perder desempenho.", { left: 140, top: 650, width: 1400 }, c.t(5));
        r.querySelector("p").style.fontSize = "36px";
      },
    },

    // ------------------------------------------------------------ ROM e BIOS
    {
      id: "rom",
      visual: "Cartão “ROM — Read Only Memory, somente leitura”, com os selos “não volátil” e “guarda o firmware de inicialização”. À direita, tabela Tipo / Característica com uma linha por tipo, na frase que o cita: ROM de máscara, PROM, EPROM, EEPROM e Flash.",
      secao: "ROM e BIOS",
      bit: BIT_CANTO,
      falas: [
        { texto: "E a ROM? É a Read Only Memory: a memória somente de leitura.", falar: "E a ROM? É a ríd ôunli mémori: a memória somente de leitura." },
        "Ela é não volátil: mantém os dados mesmo sem energia. E guarda o firmware que inicia o computador.",
        "Há vários tipos. A ROM de máscara é gravada na fábrica e não pode ser alterada. A PROM pode ser gravada uma única vez pelo usuário.",
        { texto: "A EPROM é apagável com luz ultravioleta e regravável. A EEPROM é apagável eletricamente, e também regravável.", falar: "A é prom é apagável com luz ultravioleta e regravável. A é é prom é apagável eletricamente, e também regravável." },
        { texto: "E a memória flash é um tipo de EEPROM rápida, regravada em blocos. Ela é usada no chip da BIOS, em pen drives e em SSDs.", falar: "E a memória flash é um tipo de é é prom rápida, regravada em blocos. Ela é usada no chip da BIOS, em pén dráivs e em ésse ésse dês." },
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("Memória ROM", "Somente leitura", { left: 140, top: 150 }, c.t(0), { medio: true });
        const card = c.novo(`<div class="cartao" style="left:140px;top:330px;width:440px;height:520px">
          ${ic("chip", 130, "margin-bottom:16px")}<h3 style="font-size:52px">ROM</h3><p><i>Read Only Memory</i><br>somente <b>leitura</b></p>
          <div class="selos" style="display:flex;flex-direction:column;gap:14px;margin-top:26px;align-items:flex-start">
            <span class="pilula s1">não volátil</span><span class="pilula s2" style="font-size:23px;white-space:nowrap;padding:8px 18px">firmware de inicialização</span></div></div>`);
        c.entra(card, c.t(0, 0.3), "baixo");
        c.entra(card.querySelector(".s1"), c.t(1, 0.3), "pop");
        c.entra(card.querySelector(".s2"), q(1, "E guarda"), "pop");
        const tab = c.tabela(["Tipo", "Característica"], [
          ["ROM (máscara)", "gravada na fábrica; <b>não</b> pode ser alterada"],
          ["PROM", "gravada <b>uma única vez</b> pelo usuário"],
          ["EPROM", "apagável com <b>luz ultravioleta</b>; regravável"],
          ["EEPROM", "apagável <b>eletricamente</b>; regravável"],
          ["Flash", "EEPROM rápida, regravada em blocos: <b>BIOS, pen drives, SSDs</b>"],
        ], { left: 640, top: 330, width: 900 }, c.t(2), [q(2, "A ROM de"), q(2, "A PROM"), c.t(3), q(3, "A é é prom"), c.t(4)]);
        tab.style.fontSize = "27px";
        tab.querySelectorAll("td").forEach((td) => { td.style.padding = "17px 26px"; });
        tab.querySelectorAll("td:first-child").forEach((td) => { td.style.whiteSpace = "nowrap"; });
        tab.querySelectorAll("th").forEach((th) => { th.style.padding = "18px 26px"; });
      },
    },
    {
      id: "bios",
      visual: "Cartão “BIOS / UEFI: firmware da placa-mãe — inicializa o hardware e carrega o SO” e cartão da UEFI com três etiquetas: interface gráfica, discos maiores, Secure Boot. Abaixo, a sequência Liga → POST (testa o hardware) → Sistema operacional, com setas desenhadas. Por fim, cartão “CMOS: configurações da BIOS, mantidas por bateria”.",
      secao: "ROM e BIOS",
      bit: BIT_CANTO,
      falas: [
        "Esse firmware da placa-mãe é a BIOS, ou a sua substituta moderna, a UEFI. Ele inicializa o hardware e carrega o sistema operacional.",
        { texto: "A UEFI trouxe interface gráfica, suporte a discos maiores e inicialização segura, o Secure Boot.", falar: "A UEFI trouxe interface gráfica, suporte a discos maiores e inicialização segura, o sequiúr bút." },
        { texto: "E, ao ligar o computador, a BIOS ou a UEFI faz o POST, o Power-On Self-Test: um teste automático do hardware.", falar: "E, ao ligar o computador, a BIOS ou a UEFI faz o póst, o páuer ón sélf tést: um teste automático do hardware." },
        { texto: "As configurações da BIOS ficam em uma pequena memória, mantida por uma bateria na placa-mãe: a memória CMOS.", falar: "As configurações da BIOS ficam em uma pequena memória, mantida por uma bateria na placa-mãe: a memória cê mós." },
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("Inicialização", "BIOS, UEFI e POST", { left: 140, top: 150 }, c.t(0), { medio: true });
        cartaoLado(c, { icone: "placamae", titulo: "BIOS / UEFI", texto: "firmware da placa-mãe: <b>inicializa o hardware</b> e <b>carrega o SO</b>", tam: 100 }, { left: 140, top: 330, width: 640, height: 260 }, c.t(0, 0.3));
        const uefi = c.novo(`<div class="cartao" style="left:820px;top:330px;width:720px;height:260px">
          <h3>UEFI <span style="font-weight:600;color:var(--texto-fraco)">· a substituta moderna</span></h3>
          <div style="display:flex;flex-wrap:wrap;gap:14px;margin-top:22px">
            <span class="pilula u">interface gráfica</span><span class="pilula u">discos maiores</span><span class="pilula u">Secure Boot</span></div></div>`);
        c.entra(uefi, q(0, "a UEFI"), "baixo");
        const us = uefi.querySelectorAll(".u");
        [q(1, "interface"), q(1, "discos"), q(1, "inicialização segura")].forEach((t, i) => c.entra(us[i], t, "pop"));
        const passos = [
          [{ icone: "raio", titulo: "Liga", texto: "o computador" }, 140, 250, q(2, "ao ligar")],
          [{ icone: "check", titulo: "POST", texto: "testa o hardware" }, 470, 300, q(2, "faz o póst")],
          [{ icone: "janela", titulo: "Sistema", texto: "é carregado" }, 850, 260, q(2, "um teste", 0.8)],
        ];
        passos.forEach(([n, x, w, t]) => c.no(n, { left: x, top: 640, width: w, height: 240, padding: "20px" }, t));
        c.seta(400, 760, 460, 760, q(2, "faz o póst", -0.2));
        c.seta(780, 760, 840, 760, q(2, "um teste", 0.6));
        faixa(c, "POST = <em>Power-On Self-Test</em>", q(2, "páuer", 0.5), c.t(3) - 0.3);
        cartaoLado(c, { icone: "nobreak", titulo: "CMOS", texto: "configurações da BIOS, mantidas por <b>bateria</b>", tam: 76, fs: 32, ps: 25 }, { left: 1150, top: 640, width: 390, height: 240, padding: "24px" }, c.t(3));
      },
    },
    {
      id: "ram-rom",
      visual: "Dois cartões alinhados linha a linha (Volatilidade, Uso, Escrita): RAM — volátil, programas e dados em uso, leitura e escrita livres; ROM — não volátil, firmware de inicialização, somente leitura no uso normal. Quadro âmbar “Pegadinha de banca”.",
      secao: "ROM e BIOS",
      bit: BIT_CANTO,
      falas: [
        "Vamos comparar. A RAM é volátil e guarda os programas e os dados em uso, com leitura e escrita livres.",
        "A ROM é não volátil, guarda o firmware de inicialização e, no uso normal, é somente leitura.",
        "Pegadinha: a RAM mantém os dados após o desligamento? Errado! Quem mantém é a ROM e os dispositivos de armazenamento, a memória secundária.",
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("Comparação", "RAM × ROM", { left: 140, top: 150 }, c.t(0), { medio: true });
        const linhas = (vals) => ["Volatilidade", "Uso", "Escrita"].map((r, i) => `<div class="lin" style="margin-top:${i ? 16 : 22}px"><div class="rotulo" style="font-size:20px">${r}</div><p style="font-size:30px;margin-top:2px;color:var(--texto)">${vals[i]}</p></div>`).join("");
        const ram = c.novo(`<div class="cartao" style="left:140px;top:330px;width:680px;height:380px">
          <div style="display:flex;gap:18px;align-items:center">${ic("memoria", 64)}<h3 style="margin:0">RAM</h3></div>
          ${linhas(["<b>volátil</b>", "programas e dados em uso", "leitura e escrita livres"])}</div>`);
        c.entra(ram, c.t(0, 0.2), "esquerda");
        const rl = ram.querySelectorAll(".lin");
        [q(0, "é volátil"), q(0, "guarda"), q(0, "com leitura")].forEach((t, i) => c.entra(rl[i], t, "fade"));
        const rom = c.novo(`<div class="cartao" style="left:860px;top:330px;width:680px;height:380px">
          <div style="display:flex;gap:18px;align-items:center">${ic("chip", 64)}<h3 style="margin:0">ROM</h3></div>
          ${linhas(["<b>não volátil</b>", "firmware de inicialização", "somente leitura (uso normal)"])}</div>`);
        c.entra(rom, c.t(1), "direita");
        const ol = rom.querySelectorAll(".lin");
        [q(1, "é não volátil"), q(1, "guarda"), q(1, "no uso normal")].forEach((t, i) => c.entra(ol[i], t, "fade"));
        c.quadro("prova", "“A RAM mantém os dados após o desligamento.” <b>Errado</b>: a RAM é volátil. Quem mantém é a <b>ROM</b> e o <b>armazenamento</b> (memória secundária).", { left: 140, top: 745, width: 1400 }, c.t(2)).querySelector("p").style.fontSize = "36px";
      },
    },

    // ------------------------------------------------------------ Armazenamento
    {
      id: "hd-ssd",
      visual: "Frase “Memória secundária: guarda os dados de forma permanente”. Tabela comparativa HD × SSD (com os ícones de cada um): Tecnologia, Velocidade, Resistência a impactos, Ruído e consumo, Custo por GB — uma linha por frase. Depois, a tabela sai e entra o quadro âmbar “Pegadinha de banca” com HD = disco magnético e SSD = memória flash.",
      secao: "Armazenamento",
      bit: BIT_CANTO,
      falas: [
        "Agora, o armazenamento, ou memória secundária. Ele guarda os dados de forma permanente, mesmo com o computador desligado.",
        "O HD usa discos magnéticos giratórios e uma cabeça de leitura. Já o SSD usa memória flash, sem partes móveis.",
        "Por isso, o SSD é muito mais rápido e mais resistente a impactos. E ainda é silencioso e econômico.",
        "Já a vantagem do HD é o preço: o custo por gigabyte é menor.",
        "Pegadinha: o SSD é um disco magnético? Errado! O SSD usa memória flash. O disco magnético é o HD.",
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("Armazenamento", "HD × SSD", { left: 140, top: 150 }, c.t(0), { medio: true });
        const frase = c.texto("Memória secundária: guarda os dados de forma <b>permanente</b> (não volátil).", { left: 140, top: 316, width: 1400 }, c.t(0, 1));
        const tab = c.tabela([
          "Característica",
          `<span style="display:inline-flex;gap:14px;align-items:center">${ic("hd", 44)}HD (HDD)</span>`,
          `<span style="display:inline-flex;gap:14px;align-items:center">${ic("ssd", 44)}SSD</span>`,
        ], [
          ["Tecnologia", "discos magnéticos giratórios", "memória flash, sem partes móveis"],
          ["Velocidade", "menor", "<b>muito maior</b>"],
          ["Resistência a impactos", "menor (partes mecânicas)", "<b>maior</b>"],
          ["Ruído e consumo", "maiores", "<b>silencioso e econômico</b>"],
          ["Custo por GB", "<b>menor</b>", "maior"],
        ], { left: 140, top: 410, width: 1400 }, c.t(1), [q(1, "O HD usa"), q(2, "muito mais rápido"), q(2, "resistente"), q(2, "E ainda"), q(3, "o custo")]);
        tab.style.fontSize = "29px";
        tab.querySelectorAll("td").forEach((td) => { td.style.padding = "15px 30px"; });
        tab.querySelectorAll("th").forEach((th) => { th.style.padding = "12px 30px"; });
        [frase, tab].forEach((e) => c.sai(e, c.t(4) - 0.4));
        c.quadro("prova", "“O SSD é um disco magnético.” <b>Errado</b>: o SSD usa <b>memória flash</b>. O disco magnético é o <b>HD</b>.", { left: 140, top: 330, width: 1400 }, c.t(4));
        c.no({ icone: "hd", titulo: "HD", texto: "disco magnético" }, { left: 300, top: 620, width: 440, height: 250 }, q(4, "O disco magnético", -0.2));
        c.no({ icone: "ssd", titulo: "SSD", texto: "memória flash" }, { left: 860, top: 620, width: 440, height: 250 }, q(4, "O SSD usa", -0.2));
      },
    },
    {
      id: "ssd-midias",
      visual: "Barras de velocidade: SSD SATA (mesma interface dos HDs) ≈ 600 MB/s e SSD NVMe (PCIe, formato M.2) passando de 3.000 MB/s, com os números contando. Abaixo, “Outras mídias”: cartões Pen drive e cartão SD (flash, 8 GB a 1 TB), CD (≈ 700 MB), DVD (4,7 GB) e Blu-ray (25 GB por camada, laser azul-violeta).",
      secao: "Armazenamento",
      bit: BIT_CANTO,
      falas: [
        { texto: "Há dois tipos de SSD. O SSD SATA usa a mesma interface dos HDs e fica limitado a cerca de seiscentos megabytes por segundo.", falar: "Há dois tipos de SSD. O SSD sáta usa a mesma interface dos agá dês e fica limitado a cerca de seiscentos megabytes por segundo." },
        { texto: "Já o SSD NVMe se conecta pelo PCIe, normalmente no formato M.2, e passa facilmente de três mil megabytes por segundo.", falar: "Já o SSD ene vê eme é se conecta pelo pê cê i é, normalmente no formato eme ponto dois, e passa facilmente de três mil megabytes por segundo." },
        { texto: "Outras mídias: o pen drive e o cartão de memória SD também usam memória flash, de oito gigabytes a um terabyte.", falar: "Outras mídias: o pén dráiv e o cartão de memória SD também usam memória flash, de oito gigabytes a um terabyte." },
        { texto: "O CD, o DVD e o Blu-ray são mídias ópticas, lidas por laser. O CD guarda cerca de setecentos megabytes, e o DVD, quatro vírgula sete gigabytes em camada simples.", falar: "O CD, o DVD e o blu rêi são mídias ópticas, lidas por laser. O CD guarda cerca de setecentos megabytes, e o DVD, quatro vírgula sete gigabytes em camada simples." },
        { texto: "Já o Blu-ray usa um laser azul-violeta, e guarda vinte e cinco gigabytes por camada.", falar: "Já o blu rêi usa um laser azul-violeta, e guarda vinte e cinco gigabytes por camada." },
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("Tipos de SSD e mídias", "SATA × NVMe", { left: 140, top: 150 }, c.t(0), { medio: true });
        const barra = (y, nome, sub, w, t, tNum, ate, prefixo) => {
          const e = c.novo(`<div class="abs" style="left:140px;top:${y}px;display:flex;align-items:center;gap:30px">
            <div style="width:330px"><div style="font:800 36px var(--sans)">${nome}</div><div style="font-size:24px;color:var(--texto-suave)">${sub}</div></div>
            <div class="b" style="height:54px;width:0;border-radius:27px;background:var(--cor)"></div>
            <div style="font:800 40px var(--sans);color:var(--cor);white-space:nowrap">${prefixo}<span class="v">0</span> MB/s</div></div>`);
          c.entra(e, t, "esquerda");
          c.tl.to(e.querySelector(".b"), { width: w, duration: 1.4, ease: "power2.out" }, tNum);
          c.contar(e.querySelector(".v"), 0, ate, tNum, 1.4);
          return e;
        };
        barra(330, "SSD SATA", "mesma interface dos HDs", 150, q(0, "O SSD sáta"), q(0, "limitado"), 600, "≈ ");
        barra(460, "SSD NVMe", "via PCIe · formato M.2", 750, c.t(1), q(1, "e passa"), 3000, "+ ");
        c.entra(c.novo(`<div class="abs rotulo" style="left:140px;top:600px">Outras mídias</div>`), c.t(2), "fade");
        const midias = [
          ["pendrive", "Pen drive / SD", "8 GB a 1 TB", "memória flash", q(2, "O pén")],
          ["disco", "CD", "≈ 700 MB", "óptica (laser)", q(3, "O CD guarda")],
          ["disco", "DVD", "4,7 GB", "óptica · camada simples", q(3, "e o DVD")],
          ["disco", "Blu-ray", "25 GB", "por camada · laser azul-violeta", c.t(4)],
        ];
        midias.forEach(([i, nome, cap, tec, t], k) => {
          const e = c.novo(`<div class="cartao" style="left:${140 + k * 350}px;top:650px;width:330px;height:240px;padding:26px 28px">
            <div style="display:flex;gap:16px;align-items:center">${ic(i, 60)}<h3 style="margin:0;font-size:31px">${nome}</h3></div>
            <div style="margin-top:16px;font:800 44px var(--sans);color:var(--cor)">${cap}</div>
            <p style="font-size:23px;margin-top:4px">${tec}</p></div>`);
          c.entra(e, t, "baixo");
        });
      },
    },
    {
      id: "raid",
      visual: "Quatro cartões, um por frase, com os discos desenhados e os blocos de dados: RAID 0 (striping: blocos divididos; um disco fica vermelho com ✗ e tudo se perde), RAID 1 (espelhamento: os mesmos blocos nos dois discos; um falha e o outro segue), RAID 5 (dados e paridade em 3 discos) e RAID 10 (1+0: espelhamento e divisão). Quadro âmbar “RAID não substitui backup”.",
      secao: "Armazenamento",
      bit: BIT_CANTO,
      falas: [
        { texto: "O RAID combina vários discos para ganhar desempenho, segurança contra falhas, ou os dois.", falar: "O réid combina vários discos para ganhar desempenho, segurança contra falhas, ou os dois." },
        { texto: "No RAID 0, o striping, os dados são divididos entre os discos: mais desempenho, mas sem redundância. Se um disco falhar, perde-se tudo.", falar: "No réid zero, o stráipin, os dados são divididos entre os discos: mais desempenho, mas sem redundância. Se um disco falhar, perde-se tudo." },
        { texto: "No RAID 1, o espelhamento, os mesmos dados são gravados em dois discos. Se um disco falhar, o outro mantém os dados.", falar: "No réid um, o espelhamento, os mesmos dados são gravados em dois discos. Se um disco falhar, o outro mantém os dados." },
        { texto: "O RAID 5 distribui dados e paridade em três ou mais discos, e suporta a falha de um disco.", falar: "O réid cinco distribui dados e paridade em três ou mais discos, e suporta a falha de um disco." },
        { texto: "E o RAID 10 combina espelhamento e divisão: desempenho e redundância, mas com um custo maior.", falar: "E o réid dez combina espelhamento e divisão: desempenho e redundância, mas com um custo maior." },
        { texto: "Atenção: RAID não substitui backup! Se um arquivo for apagado ou criptografado por um ransomware, a mudança vai para todos os discos.", falar: "Atenção: réid não substitui békâp! Se um arquivo for apagado ou criptografado por um rânsomuér, a mudança vai para todos os discos." },
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("RAID", "Vários discos juntos", { left: 140, top: 150 }, c.t(0), { medio: true });
        const disco = (blocos) => `<div class="disco" style="width:62px;padding:8px 6px;border-radius:14px;background:var(--cor-suave);border:3px solid var(--cor-media);display:flex;flex-direction:column;gap:6px">
          ${blocos.map((b) => `<span style="display:block;border-radius:6px;text-align:center;font:700 19px var(--sans);padding:5px 0;color:#fff;background:${b[0] === "P" ? "var(--prova)" : "var(--cor)"}">${b}</span>`).join("")}</div>`;
        const niveis = [
          ["RAID 0", "striping", [["A1", "A3"], ["A2", "A4"]], "+ desempenho<br><b>sem redundância</b>", c.t(1)],
          ["RAID 1", "espelhamento", [["A1", "A2"], ["A1", "A2"]], "se um falha,<br><b>o outro mantém</b>", c.t(2)],
          ["RAID 5", "dados + paridade", [["A1", "B1", "P3"], ["A2", "P2", "C1"], ["P1", "B2", "C2"]], "3 ou mais discos<br><b>suporta 1 falha</b>", c.t(3)],
          ["RAID 10", "1 + 0", [["A1", "A3"], ["A1", "A3"], ["A2", "A4"], ["A2", "A4"]], "desempenho e redundância<br><b>custo maior</b>", c.t(4)],
        ];
        const cards = niveis.map(([nome, sub, discos, txt, t], k) => {
          const e = c.novo(`<div class="cartao" style="left:${140 + k * 355}px;top:330px;width:335px;height:370px;padding:26px 28px">
            <h3 style="margin:0;font-size:36px">${nome}</h3><div class="rotulo" style="font-size:20px;margin-top:4px">${sub}</div>
            <div class="discos" style="display:flex;gap:8px;margin-top:18px;height:120px;align-items:flex-start">${discos.map(disco).join("")}</div>
            <p style="font-size:25px;margin-top:20px">${txt}</p></div>`);
          return c.entra(e, t, "baixo");
        });
        // Falhas: no RAID 0 tudo se perde; no RAID 1 o outro disco segue.
        const d0 = cards[0].querySelectorAll(".disco");
        c.tl.to(d0[1], { backgroundColor: "#f6d9d4", borderColor: "var(--errado)", duration: 0.3 }, q(1, "Se um disco"));
        c.tl.to(cards[0].querySelectorAll(".disco span"), { backgroundColor: "#c9ced8", duration: 0.4 }, q(1, "perde-se"));
        const d1 = cards[1].querySelectorAll(".disco");
        c.tl.to(d1[0], { backgroundColor: "#f6d9d4", borderColor: "var(--errado)", duration: 0.3 }, q(2, "Se um disco"));
        c.tl.to(d1[0].querySelectorAll("span"), { backgroundColor: "#c9ced8", duration: 0.3 }, q(2, "Se um disco"));
        c.tl.to(d1[1], { borderColor: "var(--certo)", duration: 0.3 }, q(2, "o outro"));
        c.quadro("prova", "RAID <b>não substitui backup</b>: arquivo apagado ou criptografado por <b>ransomware</b> é replicado em todos os discos.", { left: 140, top: 730, width: 1400 }, c.t(5)).querySelector("p").style.fontSize = "36px";
      },
    },
    {
      id: "particao",
      visual: "Um disco desenhado como barra dividida em duas partições, C: e D:. Cartões MBR (antigo: até 2 TB, 4 partições primárias) e GPT (com UEFI: discos muito maiores, muitas partições). Linha “Formatação → NTFS · exFAT · ext4” e faixa de alerta sobre a formatação rápida.",
      secao: "Armazenamento",
      bit: BIT_CANTO,
      falas: [
        "E como um disco é organizado? Em partições: divisões lógicas, cada uma com seu próprio sistema de arquivos, como as unidades C e D no mesmo disco.",
        "O MBR e o GPT são esquemas de particionamento.",
        { texto: "O MBR, mais antigo, aceita discos de até dois terabytes e quatro partições primárias.", falar: "O MBR, mais antigo, aceita discos de até dois terabáites e quatro partições primárias." },
        "Já o GPT, usado com a UEFI, aceita discos muito maiores e muitas partições.",
        { texto: "E a formatação prepara a partição com um sistema de arquivos, como o NTFS, o exFAT ou o ext4.", falar: "E a formatação prepara a partição com um sistema de arquivos, como o NTFS, o éks fét ou o é xis tê quatro." },
        "Cuidado: a formatação rápida não apaga os dados com segurança; eles ainda podem ser recuperados com ferramentas específicas.",
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("Organização do disco", "Partições e formatação", { left: 140, top: 150 }, c.t(0), { medio: true });
        c.entra(c.novo(`<div class="abs" style="left:140px;top:340px">${ic("hd", 120)}</div>`), c.t(0, 0.5), "pop");
        const barra = c.novo(`<div class="abs" style="left:300px;top:345px;width:1240px;height:110px;display:flex;gap:10px">
          <div class="p1" style="flex:6;border-radius:22px 0 0 22px;background:var(--cor);color:#fff;display:flex;align-items:center;padding:0 34px;font:800 40px var(--sans)">C: <span style="font:500 26px var(--sans);margin-left:18px;opacity:.9">partição 1</span></div>
          <div class="p2" style="flex:4;border-radius:0 22px 22px 0;background:var(--cor-media);display:flex;align-items:center;padding:0 34px;font:800 40px var(--sans)">D: <span style="font:500 26px var(--sans);margin-left:18px;color:var(--texto-suave)">partição 2</span></div></div>`);
        c.entra(barra.querySelector(".p1"), q(0, "Em partições"), "esquerda");
        c.entra(barra.querySelector(".p2"), q(0, "Em partições", 0.5), "esquerda");
        c.entra(c.novo(`<div class="abs" style="left:300px;top:470px;font-size:28px;color:var(--texto-suave)">cada partição com seu <b style="color:var(--texto)">próprio sistema de arquivos</b></div>`), q(0, "cada uma"), "fade");
        cartaoLado(c, { icone: "relogio", titulo: "MBR <span style='font-weight:600;color:var(--texto-fraco)'>· antigo</span>", texto: "discos de até <b>2 TB</b> · <b>4</b> partições primárias", tam: 72 }, { left: 140, top: 585, width: 680, height: 180 }, c.t(2));
        cartaoLado(c, { icone: "placamae", titulo: "GPT <span style='font-weight:600;color:var(--texto-fraco)'>· com UEFI</span>", texto: "discos <b>muito maiores</b> · <b>muitas</b> partições", tam: 72 }, { left: 860, top: 585, width: 680, height: 180 }, c.t(3));
        c.entra(c.novo(`<div class="abs rotulo" style="left:140px;top:540px">Esquemas de particionamento</div>`), c.t(1), "fade");
        const fmt = c.novo(`<div class="abs" style="left:140px;top:800px;display:flex;align-items:center;gap:18px">
          <span style="font:800 34px var(--sans)">Formatação</span><span style="font-size:34px;color:var(--texto-fraco)">→</span>
          <span class="pilula f">NTFS</span><span class="pilula f">exFAT</span><span class="pilula f">ext4</span></div>`);
        c.entra(fmt, c.t(4), "fade");
        const fs = fmt.querySelectorAll(".f");
        [q(4, "NTFS"), q(4, "éks"), q(4, "é xis")].forEach((t, i) => c.entra(fs[i], t, "pop"));
        faixa(c, "Formatação rápida <em>não apaga com segurança</em>", c.t(5, 0.3));
      },
    },

    // ------------------------------------------------------- Placa-mãe e energia
    {
      id: "placa-mae",
      visual: "Desenho de uma placa-mãe vista de cima. Cada parte se acende e ganha etiqueta quando é citada: soquete (com o processador), chipset, slots de memória, slots PCIe, conectores SATA e M.2. Por fim, os barramentos são desenhados ligando as partes. À direita, cartão “Placa-mãe: conecta tudo”.",
      secao: "Placa-mãe e energia",
      bit: BIT_CANTO,
      falas: [
        "A placa-mãe é a placa de circuito principal: ela conecta processador, memória, armazenamento e periféricos, e permite a comunicação entre eles.",
        { texto: "Nela fica o soquete, o encaixe do processador. E o chipset: o conjunto de chips que controla a comunicação entre os componentes.", falar: "Nela fica o soquete, o encaixe do processador. E o tchípsét: o conjunto de chips que controla a comunicação entre os componentes." },
        { texto: "Os slots de memória recebem os pentes de RAM. E os slots PCIe recebem placas de expansão, como uma placa de vídeo dedicada.", falar: "Os slóts de memória recebem os pentes de RAM. E os slóts pê cê i é recebem placas de expansão, como uma placa de vídeo dedicada." },
        { texto: "Os conectores SATA e M.2 ligam os HDs e os SSDs.", falar: "Os conectores sáta e eme ponto dois ligam os agá dês e os ésse ésse dês." },
        "E os barramentos são as vias de comunicação entre todos esses componentes.",
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("Placa-mãe", "A placa principal", { left: 140, top: 150 }, c.t(0), { medio: true });
        const X = 140, Y = 320;
        const placa = c.novo(`<div class="abs" style="left:${X}px;top:${Y}px;width:1000px;height:600px;border-radius:30px;background:var(--cor-suave);border:5px solid var(--cor-media);box-shadow:var(--sombra)"></div>`);
        c.entra(placa, c.t(0, 0.3), "zoom");
        // Barramentos (desenhados no fim, atrás das peças)
        const bus = c.novo(`<svg class="abs" style="left:${X}px;top:${Y}px;width:1000px;height:600px;overflow:visible" viewBox="0 0 1000 600">
          ${["M290 170 H340", "M250 280 V400 H600", "M600 420 H520 V465", "M750 400 H870 V430", "M675 330 V160"].map((d) => `<path d="${d}" stroke="var(--cor)" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`).join("")}</svg>`);
        bus.querySelectorAll("path").forEach((p, i) => c.desenhar(p, q(4, "vias", i * 0.25), 0.7));
        const peca = (html, est) => c.novo(`<div class="abs" style="left:${X + est[0]}px;top:${Y + est[1]}px;width:${est[2]}px;height:${est[3]}px;${est[4] || ""}">${html}</div>`);
        const etiqueta = (txt, x, y) => c.novo(`<div class="abs pilula" style="left:${X + x}px;top:${Y + y}px;font-size:25px;padding:6px 18px;background:#fff;box-shadow:var(--sombra)">${txt}</div>`);
        const soq = peca(ic("cpu", 170), [70, 60, 220, 220, "border-radius:22px;background:#fff;display:grid;place-items:center;border:4px dashed var(--cor)"]);
        const memo = peca(Array.from({ length: 4 }, () => `<span style="width:26px;border-radius:6px;background:var(--cor)"></span>`).join(""), [345, 40, 150, 300, "display:flex;gap:15px"]);
        const chipset = peca(`<span style="font:700 22px var(--sans);color:#fff">chipset</span>`, [600, 330, 150, 150, "border-radius:16px;background:var(--cor);display:grid;place-items:center"]);
        const pcie = peca(`<span style="height:32px;border-radius:8px;background:var(--cor)"></span><span style="height:32px;border-radius:8px;background:var(--cor)"></span>`, [70, 430, 450, 110, "display:flex;flex-direction:column;gap:26px;justify-content:center"]);
        const m2 = peca(``, [600, 110, 330, 50, "border-radius:10px;background:var(--cor);display:grid;place-items:center"]);
        const sata = peca(Array.from({ length: 4 }, () => `<span style="border-radius:6px;background:var(--cor)"></span>`).join(""), [830, 420, 120, 100, "display:grid;grid-template-columns:1fr 1fr;gap:10px"]);
        c.entra(soq, q(1, "o soquete"), "pop");
        c.entra(etiqueta("Soquete", 95, 292), q(1, "o soquete", 0.3), "pop");
        c.entra(chipset, q(1, "tchípsét"), "pop");
        c.entra(etiqueta("Chipset", 600, 492), q(1, "tchípsét", 0.3), "pop");
        c.entra(memo, c.t(2, 0.2), "pop");
        c.entra(etiqueta("Slots de memória", 300, 352), c.t(2, 0.5), "pop");
        c.entra(pcie, q(2, "E os slóts"), "pop");
        c.entra(etiqueta("Slots PCIe", 70, 548), q(2, "E os slóts", 0.3), "pop");
        c.entra(sata, c.t(3, 0.1), "pop");
        c.entra(etiqueta("SATA", 830, 532), c.t(3, 0.3), "pop");
        c.entra(m2, q(3, "eme ponto"), "pop");
        c.entra(etiqueta("M.2", 600, 172), q(3, "eme ponto", 0.3), "pop");
        c.entra(etiqueta("Barramentos", 380, 410), q(4, "vias", 1.2), "pop");
        c.no({ icone: "placamae", titulo: "Placa-mãe", texto: "conecta tudo e permite a <b>comunicação</b>" }, { left: 1190, top: 330, width: 350, height: 380 }, q(0, "ela conecta"));
      },
    },
    {
      id: "energia",
      visual: "Quatro cartões, um por frase: Fonte de alimentação (CA → CC, potência em watts), Filtro de linha (picos e ruídos, várias tomadas), Estabilizador (subtensão e sobretensão) e Nobreak/UPS (bateria). Quando a energia “cai”, os três primeiros escurecem e só o nobreak continua aceso. Quadro verde “Memorize”.",
      secao: "Placa-mãe e energia",
      bit: BIT_CANTO,
      falas: [
        { texto: "E quem alimenta tudo isso? A fonte de alimentação converte a corrente alternada da tomada em corrente contínua, e sua potência é medida em watts.", falar: "E quem alimenta tudo isso? A fonte de alimentação converte a corrente alternada da tomada em corrente contínua, e sua potência é medida em uóts." },
        "O filtro de linha protege contra picos e ruídos na rede elétrica, e oferece várias tomadas.",
        "O estabilizador corrige as variações de tensão: a subtensão e a sobretensão.",
        { texto: "E o nobreak, ou UPS, tem bateria: na falta de energia, mantém o equipamento ligado por um tempo, para salvar o trabalho e desligar com segurança.", falar: "E o nôbrêik, ou u pê ésse, tem bateria: na falta de energia, mantém o equipamento ligado por um tempo, para salvar o trabalho e desligar com segurança." },
        { texto: "Memorize: só o nobreak mantém o computador funcionando quando a energia cai, porque tem bateria.", falar: "Memorize: só o nôbrêik mantém o computador funcionando quando a energia cai, porque tem bateria." },
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("Energia", "Da tomada ao computador", { left: 140, top: 150 }, c.t(0), { medio: true });
        const itens = [
          ["fonte", "Fonte de alimentação", "<b>CA → CC</b> · potência em <b>watts (W)</b>", c.t(0, 1)],
          ["filtro", "Filtro de linha", "protege contra <b>picos e ruídos</b> · várias tomadas", c.t(1)],
          ["estabilizador", "Estabilizador", "corrige a tensão: <b>subtensão</b> e <b>sobretensão</b>", c.t(2)],
          ["nobreak", "Nobreak (UPS)", "tem <b>bateria</b>: mantém ligado na falta de energia", c.t(3)],
        ];
        const cards = itens.map(([i, h, p, t], k) => c.cartao({ icone: i, titulo: h, texto: p }, { left: 140 + k * 355, top: 330, width: 335, height: 360, padding: "30px 30px" }, t));
        cards.forEach((e) => { e.querySelector("h3").style.fontSize = "31px"; e.querySelector("p").style.fontSize = "26px"; e.querySelector(".icone").style.cssText = "width:86px;height:86px;margin-bottom:16px"; });
        const queda = q(3, "na falta");
        cards.slice(0, 3).forEach((e) => c.tl.to(e, { opacity: 0.35, duration: 0.5 }, queda));
        c.tl.to(cards[3], { outline: "6px solid var(--cor)", duration: 0.3 }, queda);
        c.quadro("dica", "Só o <b>nobreak</b> mantém o computador funcionando quando a energia cai, porque tem <b>bateria</b>.", { left: 140, top: 730, width: 1400 }, c.t(4));
      },
    },

    // ------------------------------------------------------------ Periféricos
    {
      id: "perifericos",
      visual: "Três cartões, um por frase: Entrada (teclado; seta para o computador; teclado, mouse, scanner, microfone, webcam, leitor biométrico, leitor de código de barras), Saída (monitor; seta saindo; monitor, impressora, caixa de som, fone, projetor) e Entrada e saída (tela de toque; seta dupla; touchscreen, multifuncional, modem, placa de rede, pen drive, headset). Quadro âmbar “Pegadinha de banca”.",
      secao: "Periféricos",
      bit: BIT_CANTO,
      falas: [
        "Agora, os periféricos: dispositivos que trocam informações entre o computador e o usuário ou outros equipamentos.",
        { texto: "Os de entrada enviam dados para o computador: teclado, mouse, scanner, microfone, webcam, leitor biométrico e leitor de código de barras.", falar: "Os de entrada enviam dados para o computador: teclado, máus, iscâner, microfone, uébcam, leitor biométrico e leitor de código de barras." },
        "Os de saída recebem dados do computador e os apresentam: monitor, impressora, caixa de som, fone de ouvido e projetor.",
        { texto: "E os híbridos, de entrada e saída, fazem as duas coisas: tela touchscreen, impressora multifuncional, modem, placa de rede, pen drive e headset com microfone.", falar: "E os híbridos, de entrada e saída, fazem as duas coisas: tela tâtch scrín, impressora multifuncional, modem, placa de rede, pén dráiv e rédsét com microfone." },
        "Pegadinha: a tela sensível ao toque é de entrada e saída: exibe a imagem e recebe o toque. A multifuncional também: imprime e digitaliza.",
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("Periféricos", "Entrada, saída e híbridos", { left: 140, top: 150 }, c.t(0), { medio: true });
        const cols = [
          ["teclado", "Entrada", "→ PC", "teclado, mouse, scanner, microfone, webcam, leitor biométrico, leitor de código de barras", c.t(1)],
          ["monitor", "Saída", "PC →", "monitor, impressora, caixa de som, fone de ouvido, projetor", c.t(2)],
          ["toque", "Entrada e saída", "⇄ PC", "touchscreen, multifuncional, modem, placa de rede, pen drive, headset", c.t(3)],
        ];
        cols.forEach(([i, h, dir, ex, t], k) => {
          const e = c.novo(`<div class="cartao" style="left:${140 + k * 470}px;top:330px;width:450px;height:360px;padding:30px 34px">
            <div style="display:flex;align-items:center;gap:20px">${ic(i, 80)}<div><h3 style="margin:0;font-size:34px">${h}</h3>
            <span class="pilula" style="font-size:24px;padding:4px 16px;margin-top:6px">${dir}</span></div></div>
            <p style="font-size:26px;margin-top:22px">${ex}</p></div>`);
          c.entra(e, t, "baixo");
        });
        c.quadro("prova", "Touchscreen = <b>entrada e saída</b>: exibe a imagem (saída) e recebe o toque (entrada). A <b>multifuncional</b> também: imprime e digitaliza.", { left: 140, top: 720, width: 1400 }, c.t(4)).querySelector("p").style.fontSize = "36px";
      },
    },
    {
      id: "monitores",
      visual: "Cartões LCD com iluminação LED (LEDs atrás da tela → cristais líquidos filtram a luz) e OLED (cada pixel emite a própria luz: pretos perfeitos). Depois, retângulos aninhados em escala: HD 1280 × 720, Full HD 1920 × 1080, QHD 2560 × 1440 e 4K UHD 3840 × 2160; ao lado, uma tela com a diagonal em polegadas e o cartão da taxa de atualização (60 Hz, 144 Hz).",
      secao: "Periféricos",
      bit: BIT_CANTO,
      falas: [
        { texto: "Nos monitores, o mais comum é o LCD com iluminação LED: os cristais líquidos filtram a luz de LEDs que ficam atrás da tela.", falar: "Nos monitores, o mais comum é o LCD com iluminação léd: os cristais líquidos filtram a luz de léds que ficam atrás da tela." },
        { texto: "Já no OLED, cada pixel emite a própria luz, com pretos perfeitos e alto contraste.", falar: "Já no ó léd, cada píxel emite a própria luz, com pretos perfeitos e alto contraste." },
        { texto: "O tamanho é medido em polegadas, na diagonal. Nas resoluções, o HD tem mil duzentos e oitenta por setecentos e vinte; o Full HD, mil novecentos e vinte por mil e oitenta.", falar: "O tamanho é medido em polegadas, na diagonal. Nas resoluções, o HD tem mil duzentos e oitenta por setecentos e vinte; o fúl agá dê, mil novecentos e vinte por mil e oitenta." },
        { texto: "O QHD tem dois mil quinhentos e sessenta por mil quatrocentos e quarenta. E o 4K UHD, três mil oitocentos e quarenta por dois mil cento e sessenta.", falar: "O quê agá dê tem dois mil quinhentos e sessenta por mil quatrocentos e quarenta. E o quatro cá, u agá dê, três mil oitocentos e quarenta por dois mil cento e sessenta." },
        "E a taxa de atualização é quantas vezes por segundo a imagem é redesenhada, em hertz: sessenta ou cento e quarenta e quatro, por exemplo.",
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("Monitores", "Tecnologia e resolução", { left: 140, top: 150 }, c.t(0), { medio: true });
        const lcd = c.novo(`<div class="cartao" style="left:140px;top:330px;width:680px;height:400px">
          <h3>LCD com iluminação LED</h3><p>o tipo <b>mais comum</b></p>
          <div style="display:flex;align-items:center;gap:16px;margin-top:40px">
            <div style="display:flex;flex-direction:column;gap:8px">${Array.from({ length: 4 }, () => `<span style="width:30px;height:30px;border-radius:50%;background:#f4c542;box-shadow:0 0 18px #f4c542"></span>`).join("")}</div>
            <span style="font-size:40px;color:var(--texto-fraco)">→</span>
            <div style="width:60px;height:160px;border-radius:10px;background:repeating-linear-gradient(90deg,var(--cor-media) 0 6px,var(--cor-suave) 6px 12px)"></div>
            <span style="font-size:40px;color:var(--texto-fraco)">→</span>
            <p style="font-size:26px;line-height:1.35">LEDs <b>atrás da tela</b>;<br>os <b>cristais líquidos</b><br>filtram a luz</p></div></div>`);
        c.entra(lcd, c.t(0, 0.3), "esquerda");
        const px = "10010110011110100101".split("");
        const oled = c.novo(`<div class="cartao" style="left:860px;top:330px;width:680px;height:400px">
          <h3>OLED</h3><p>cada <b>pixel emite a própria luz</b></p>
          <div style="display:flex;gap:30px;align-items:center;margin-top:34px">
            <div style="display:grid;grid-template-columns:repeat(5,40px);gap:8px;padding:14px;border-radius:14px;background:#11151c">${px.map((b, i) => `<span style="height:40px;border-radius:8px;background:${b === "1" ? ["#ff6b6b", "#4ad37a", "#5b8cff", "#f4c542"][i % 4] : "#000"}"></span>`).join("")}</div>
            <p style="font-size:27px"><b>pretos perfeitos</b><br>alto contraste</p></div></div>`);
        c.entra(oled, c.t(1), "direita");
        [lcd, oled].forEach((e) => c.sai(e, c.t(2) - 0.4));
        // Tela com a diagonal
        const tela = c.novo(`<div class="abs" style="left:1060px;top:330px;width:480px;height:290px">
          <div style="position:absolute;inset:0;border-radius:18px;background:var(--cor-suave);border:12px solid var(--texto)"></div>
          <svg class="abs" style="left:0;top:0;width:480px;height:290px" viewBox="0 0 480 290"><path class="diag" d="M30 260 L450 30" stroke="var(--cor)" stroke-width="7" stroke-dasharray="14 10" stroke-linecap="round" fill="none"/></svg>
          <div class="pilula" style="position:absolute;left:150px;top:118px;background:#fff">polegadas</div></div>`);
        c.entra(tela, c.t(2, 0.2), "zoom");
        c.desenhar(tela.querySelector(".diag"), q(2, "na diagonal"));
        const s = 0.19, base = 760;
        const res = [
          ["4K UHD", 3840, 2160, "var(--cor-suave)", q(3, "quatro cá")],
          ["QHD", 2560, 1440, "color-mix(in srgb, var(--cor) 22%, white)", q(3, "O quê")],
          ["Full HD", 1920, 1080, "color-mix(in srgb, var(--cor) 40%, white)", q(2, "fúl agá")],
          ["HD", 1280, 720, "var(--cor)", q(2, "o HD tem")],
        ];
        res.forEach(([nome, w, h, bg, t]) => {
          const e = c.novo(`<div class="abs" style="left:140px;top:${base - h * s}px;width:${w * s}px;height:${h * s}px;background:${bg};border:3px solid #fff;border-radius:10px;box-shadow:var(--sombra);padding:8px 14px;
            font:700 23px var(--sans);color:${nome === "HD" ? "#fff" : "var(--texto)"};white-space:nowrap"><b style="font-weight:800">${nome}</b> · ${w} × ${h}</div>`);
          c.entra(e, t, "zoom");
        });
        cartaoLado(c, { icone: "relogio", titulo: "Taxa de atualização", texto: "redesenhos por segundo, em hertz:<br><b>60 Hz</b> · <b>144 Hz</b>", tam: 72, fs: 31, ps: 26 }, { left: 1060, top: 660, width: 480, height: 200, padding: "24px 28px" }, c.t(4));
      },
    },
    {
      id: "outros",
      visual: "Quatro cartões em grade: Teclado ABNT2 (tecla Ç em destaque), Scanner com OCR (imagem de texto → texto editável, com cursor), Mesa digitalizadora (caneta) e Leitor biométrico (digital, rosto ou íris).",
      secao: "Periféricos",
      bit: BIT_CANTO,
      falas: [
        { texto: "Outros periféricos também caem em prova. O teclado ABNT2 é o padrão brasileiro, com a tecla Ç e os acentos em posições próprias.", falar: "Outros periféricos também caem em prova. O teclado á bê ene tê dois é o padrão brasileiro, com a tecla cê cedilha e os acentos em posições próprias." },
        { texto: "O scanner com OCR, o reconhecimento óptico de caracteres, transforma a imagem de um texto digitalizado em texto editável.", falar: "O iscâner com ó cê érre, o reconhecimento óptico de caracteres, transforma a imagem de um texto digitalizado em texto editável." },
        "A mesa digitalizadora é uma entrada por caneta, usada em desenho e assinatura.",
        "E o leitor biométrico lê impressões digitais, o rosto ou a íris, para identificar o usuário.",
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("Periféricos", "Outros que caem em prova", { left: 140, top: 150 }, c.t(0), { medio: true });
        const abnt = c.novo(`<div class="cartao" style="left:140px;top:330px;width:680px;height:250px;display:flex;gap:30px;align-items:center">
          <div class="tecla" style="flex-shrink:0;width:150px;height:150px;border-radius:24px;background:var(--cor);color:#fff;display:grid;place-items:center;font:800 90px var(--sans);box-shadow:0 10px 0 color-mix(in srgb, var(--cor) 60%, black)">Ç</div>
          <div><h3 style="margin:0 0 8px">Teclado ABNT2</h3><p>padrão <b>brasileiro</b>: tecla Ç e acentos em posições próprias</p></div></div>`);
        c.entra(abnt, c.t(0, 1.2), "baixo");
        c.entra(abnt.querySelector(".tecla"), q(0, "cê cedilha"), "pop");
        const ocr = c.novo(`<div class="cartao" style="left:860px;top:330px;width:680px;height:250px">
          <h3 style="margin:0 0 6px">Scanner com OCR</h3><p style="font-size:25px">reconhecimento óptico de caracteres</p>
          <div style="display:flex;align-items:center;gap:22px;margin-top:20px">
            <div class="img" style="width:200px;height:72px;border-radius:10px;background:var(--cor-suave);padding:12px 14px;display:flex;flex-direction:column;gap:8px">
              ${[150, 170, 110].map((w) => `<span style="width:${w}px;height:10px;border-radius:5px;background:var(--cor-media);filter:blur(1.2px)"></span>`).join("")}</div>
            <span class="seta-ocr" style="font:800 40px var(--sans);color:var(--cor)">→</span>
            <div class="txt" style="font:600 30px var(--sans);color:var(--texto);border:3px solid var(--borda);border-radius:10px;padding:10px 16px">Texto editável<span style="color:var(--cor)">|</span></div></div></div>`);
        c.entra(ocr, c.t(1), "baixo");
        c.entra(ocr.querySelector(".seta-ocr"), q(1, "transforma"), "pop");
        c.entra(ocr.querySelector(".txt"), q(1, "em texto editável"), "pop");
        cartaoLado(c, { icone: "mesa", titulo: "Mesa digitalizadora", texto: "entrada por <b>caneta</b>: desenho e assinatura", tam: 100 }, { left: 140, top: 610, width: 680, height: 230 }, c.t(2));
        cartaoLado(c, { icone: "digital", titulo: "Leitor biométrico", texto: "impressão digital, rosto ou íris: <b>identifica</b> o usuário", tam: 100 }, { left: 860, top: 610, width: 680, height: 230 }, c.t(3));
      },
    },

    // ------------------------------------------------- Conexões e impressoras
    {
      id: "conexoes",
      visual: "Grade de seis cartões, cada um com o desenho do conector, na frase que o cita: USB (2.0 até 480 Mbps; 3.x 5, 10 ou 20 Gbps; USB-C reversível), HDMI (vídeo e áudio digitais), DisplayPort (vídeo digital), VGA (vídeo analógico, antigo), RJ-45 (rede Ethernet) e Bluetooth (sem fio, curto alcance). Faixa “Plug and Play: conectou, o sistema reconhece e configura”.",
      secao: "Conexões e impressoras",
      bit: BIT_CANTO,
      falas: [
        "E as conexões? O USB é o padrão universal: o USB dois ponto zero chega a quatrocentos e oitenta megabits por segundo, e o USB três, a cinco, dez ou vinte gigabits. O USB-C é o conector reversível.",
        { texto: "Para vídeo, o HDMI leva vídeo e áudio digitais a monitores e TVs. O DisplayPort também é digital, comum em monitores. E o VGA é analógico, um padrão antigo.", falar: "Para vídeo, o agá dê ême i leva vídeo e áudio digitais a monitores e tê vês. O displêi pórt também é digital, comum em monitores. E o vê gê á é analógico, um padrão antigo." },
        { texto: "O RJ-45 é o conector do cabo de rede Ethernet. E o Bluetooth é sem fio, de curto alcance, para mouse, teclado e fones.", falar: "O érre jóta quarenta e cinco é o conector do cabo de rede éternét. E o blutúf é sem fio, de curto alcance, para máus, teclado e fones." },
        { texto: "E Plug and Play é a capacidade do sistema de reconhecer e configurar o dispositivo automaticamente ao conectá-lo.", falar: "E plâg end plêi é a capacidade do sistema de reconhecer e configurar o dispositivo automaticamente ao conectá-lo." },
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("Conexões", "Portas e cabos", { left: 140, top: 150 }, c.t(0), { medio: true });
        const portas = [
          ["usb", "USB", "2.0: <b>480 Mbps</b> · 3.x: <b>5, 10 ou 20 Gbps</b><br>USB-C: <b>reversível</b>", c.t(0, 1.2)],
          ["hdmi", "HDMI", "vídeo e <b>áudio</b> digitais: monitores e TVs", q(1, "o agá dê")],
          ["displayport", "DisplayPort", "vídeo <b>digital</b>, comum em monitores", q(1, "O displêi")],
          ["vga", "VGA", "vídeo <b>analógico</b> · padrão antigo", q(1, "E o vê gê")],
          ["rj45", "RJ-45", "cabo de rede <b>Ethernet</b>", c.t(2)],
          ["semfio", "Bluetooth", "<b>sem fio</b>, curto alcance: mouse, teclado, fones", q(2, "E o blutúf")],
        ];
        portas.forEach(([i, h, p, t], k) => {
          const col = k % 3, lin = Math.floor(k / 3);
          cartaoLado(c, { icone: i, titulo: h, texto: p, tam: 84, fs: 32, ps: k === 0 ? 23 : 25 }, { left: 140 + col * 470, top: 330 + lin * 250, width: 450, height: 225, padding: "24px 26px" }, t);
        });
        faixa(c, "Plug and Play: <em>conectou, o sistema reconhece e configura</em>", c.t(3, 0.3));
      },
    },
    {
      id: "impressoras",
      visual: "Cinco cartões, um por tipo, cada um com o modo de imprimir e o destaque: Matricial (agulhas e fita · impacto · várias vias com carbono), Jato de tinta (gotas · fotos, baixo custo inicial), Laser (toner fixado por calor · rápida, baixo custo por página), Térmica (calor · cupons e etiquetas) e 3D (camada por camada · objetos). Quadro verde “Memorize”.",
      secao: "Conexões e impressoras",
      bit: BIT_CANTO,
      falas: [
        "Por fim, as impressoras. Na matricial, agulhas batem em uma fita com tinta: é de impacto. Por isso, imprime formulários em várias vias com carbono.",
        "A jato de tinta solta gotas de tinta líquida. É boa para fotos coloridas e tem baixo custo inicial.",
        { texto: "A laser usa toner, um pó fixado no papel por calor. É rápida e tem baixo custo por página.", falar: "A laser usa tôner, um pó fixado no papel por calor. É rápida e tem baixo custo por página." },
        "A térmica usa calor sobre papel especial, em cupons fiscais e etiquetas. E a impressora 3D deposita material camada por camada, criando objetos físicos.",
        { texto: "Memorize: a impressora que usa toner é a laser. E a que imprime em várias vias com carbono é a matricial, a única de impacto.", falar: "Memorize: a impressora que usa tôner é a laser. E a que imprime em várias vias com carbono é a matricial, a única de impacto." },
      ],
      montar(c) {
        const q = quando(c, this);
        c.titulo("Impressoras", "Cada uma imprime de um jeito", { left: 140, top: 150 }, c.t(0), { medio: true });
        const tipos = [
          ["Matricial", "agulhas batem na fita (<b>impacto</b>)", "várias vias com carbono", c.t(0, 0.8)],
          ["Jato de tinta", "gotas de tinta líquida", "fotos · baixo custo inicial", c.t(1)],
          ["Laser", "<b>toner</b> (pó) fixado por calor", "rápida · baixo custo por página", c.t(2)],
          ["Térmica", "calor sobre papel especial", "cupons fiscais e etiquetas", c.t(3)],
          ["3D", "material camada por camada", "cria objetos físicos", q(3, "E a impressora 3D")],
        ];
        tipos.forEach(([h, como, dest, t], k) => {
          const e = c.novo(`<div class="cartao" style="left:${140 + k * 284}px;top:330px;width:268px;height:360px;padding:26px 24px">
            ${ic(k === 4 ? "pacote" : "impressora", 72, "margin-bottom:14px")}<h3 style="font-size:30px;margin-bottom:8px">${h}</h3>
            <p style="font-size:23px;line-height:1.35">${como}</p>
            <div style="margin-top:14px;padding:8px 12px;border-radius:12px;background:var(--cor-suave);color:var(--cor);font:700 21px var(--sans);line-height:1.3">${dest}</div></div>`);
          c.entra(e, t, "baixo");
        });
        c.quadro("dica", "Usa <b>toner</b> → <b>laser</b>. Várias vias com carbono → <b>matricial</b>, a única de <b>impacto</b>.", { left: 140, top: 730, width: 1400 }, c.t(4));
      },
    },

    // ------------------------------------------------------------ Revisão
    {
      id: "revisao",
      visual: "Oito cartões de revisão com ícone de verificação, um por frase: CPU, Memórias, RAM × ROM, Armazenamento, Arquiteturas e RAID, Energia, Periféricos e Impressoras.",
      secao: "Revisão",
      bit: BIT_CANTO,
      falas: [
        "Hora de revisar!",
        { texto: "Processador: clock, núcleos e cache definem o desempenho. E giga é bilhão: três vírgula cinco gigahertz são três vírgula cinco bilhões de ciclos por segundo.", falar: "Processador: clóc, núcleos e quêch definem o desempenho. E giga é bilhão: três vírgula cinco gigahertz são três vírgula cinco bilhões de ciclos por segundo." },
        { texto: "Memórias, da mais rápida para a mais lenta: registradores, cache, RAM, SSD e HD.", falar: "Memórias, da mais rápida para a mais lenta: registradores, quêch, RAM, SSD e HD." },
        { texto: "A RAM é volátil; a ROM, não. E, ao ligar, a BIOS ou a UEFI faz o POST.", falar: "A RAM é volátil; a ROM, não. E, ao ligar, a BIOS ou a UEFI faz o póst." },
        "O HD é magnético; o SSD é flash, sem partes móveis.",
        { texto: "Celular usa RISC, da família ARM. E o RAID 1 espelha, mas não substitui backup.", falar: "Celular usa rísc, da família ARM. E o réid um espelha, mas não substitui békâp." },
        { texto: "Só o nobreak tem bateria.", falar: "Só o nôbrêik tem bateria." },
        { texto: "Touchscreen é entrada e saída, e o OCR transforma imagem em texto editável.", falar: "Tâtch scrín é entrada e saída, e o ó cê érre transforma imagem em texto editável." },
        { texto: "E toner é laser; várias vias com carbono, matricial.", falar: "E tôner é laser; várias vias com carbono, matricial." },
      ],
      montar(c) {
        c.titulo("Revisão", "O que você aprendeu", { left: 140, top: 150 }, c.t(0), { medio: true });
        const cartoes = [
          ["CPU", "Clock, núcleos e cache · 3,5 GHz = 3,5 bilhões de ciclos/s"],
          ["Memórias", "Registradores → cache → RAM → SSD → HD"],
          ["RAM × ROM", "RAM volátil · ROM não volátil · POST ao ligar"],
          ["Armazenamento", "HD magnético · SSD flash, sem partes móveis"],
          ["RISC e RAID", "Celular = RISC (ARM) · RAID 1 = espelho ≠ backup"],
          ["Energia", "Só o nobreak tem bateria"],
          ["Periféricos", "Touchscreen = entrada e saída · OCR → texto"],
          ["Impressoras", "Toner = laser · várias vias = matricial"],
        ];
        cartoes.forEach((k, i) => {
          const col = i % 4, lin = Math.floor(i / 4);
          const e = c.novo(`<div class="cartao" style="left:${140 + col * 355}px;top:${320 + lin * 290}px;width:335px;height:265px;padding:28px">
            <div style="display:flex;align-items:center;gap:14px">${icone("check")}<h3 style="margin:0;font-size:30px">${k[0]}</h3></div>
            <p style="margin-top:16px;font-size:26px">${k[1]}</p></div>`);
          e.querySelector(".icone").style.cssText = "margin:0;width:50px;height:50px;flex-shrink:0";
          c.entra(e, c.t(i + 1), "pop");
        });
      },
    },
    {
      id: "encerramento",
      visual: "Bit grande à esquerda. Cartão “Pratique agora: 15 questões” e cartão “Próximo vídeo: Capítulo 6 — Armazenamento em Nuvem” na cor do capítulo 6. Bit acena na despedida.",
      secao: "Revisão",
      bit: BIT_GRANDE,
      falas: [
        "Agora é a sua vez: faça as quinze questões do final do capítulo e confira a correção comentada.",
        "No próximo vídeo, vamos estudar o armazenamento em nuvem.",
        "Até lá, e bons estudos!",
      ],
      montar(c) {
        c.cartao({ icone: "questoes", titulo: "Pratique agora", texto: "<b>15 questões</b> no final do Capítulo 5, com correção comentada." }, { left: 900, top: 230, width: 820 }, c.t(0));
        const prox = c.novo(`<div class="cartao" style="left:900px;top:640px;width:820px;--cor:#0369a1">
          <div class="rotulo">Próximo vídeo</div><h3 style="margin-top:14px;font-family:var(--serif);font-size:52px">Capítulo 6 —<br>Armazenamento em Nuvem</h3></div>`);
        c.entra(prox, c.t(1), "baixo");
        c.bit.acenar(c.t(2));
      },
    },
  ],
});
