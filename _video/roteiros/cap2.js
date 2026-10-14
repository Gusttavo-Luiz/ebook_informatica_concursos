// Roteiro da videoaula do Capítulo 2 — Sistemas Operacionais.
// Cada cena tem a narração (falas) e a montagem visual (montar).
// c.t(i) = instante em que começa a fala i da cena.
// w(i, "trecho") = instante aproximado em que o trecho é dito na fala i.

const BIT_CANTO = { x: 1720, y: 1020, s: 0.58 };
const BIT_GRANDE = { x: 470, y: 990, s: 1.3 };

// ---------------------------------------------------------------- Ícones
// Ícones extras deste capítulo, no mesmo estilo plano da série.
if (typeof ICONES !== "undefined") {
  Object.assign(ICONES, {
    pasta: `<path class="c2" d="M10 30a8 8 0 0 1 8-8h28l10 12h46a8 8 0 0 1 8 8v8H10z"/><rect class="c1" x="10" y="42" width="100" height="62" rx="8"/>`,
    disco: `<rect class="c1" x="14" y="14" width="92" height="92" rx="14"/><circle class="cs" cx="60" cy="54" r="30"/><circle class="c1" cx="60" cy="54" r="8"/><path class="sb" d="M64 60l18 20"/><circle class="cb" cx="92" cy="94" r="5"/>`,
    impressora: `<rect class="cs" x="32" y="10" width="56" height="32" rx="4"/><rect class="c1" x="10" y="38" width="100" height="50" rx="10"/><rect class="cb" x="30" y="66" width="60" height="44" rx="4"/><rect class="c2" x="38" y="78" width="44" height="6" rx="3"/><rect class="c2" x="38" y="92" width="30" height="6" rx="3"/><circle class="cb" cx="96" cy="52" r="5"/>`,
    lixeira: `<rect class="c2" x="20" y="22" width="80" height="12" rx="6"/><rect class="c1" x="46" y="10" width="28" height="14" rx="5"/><path class="c1" d="M28 40h64l-6 64a8 8 0 0 1-8 8H42a8 8 0 0 1-8-8z"/><path class="sb" d="M48 56v40M60 56v40M72 56v40" style="stroke-width:6"/>`,
    pendrive: `<rect class="c2" x="44" y="6" width="32" height="28" rx="4"/><rect class="cb" x="51" y="14" width="6" height="9" rx="1"/><rect class="cb" x="63" y="14" width="6" height="9" rx="1"/><rect class="c1" x="32" y="32" width="56" height="82" rx="12"/><circle class="cs" cx="60" cy="88" r="9"/>`,
    cartaomem: `<path class="c1" d="M32 8h42l20 20v76a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V16a8 8 0 0 1 8-8z"/>${[38, 50, 62, 74].map((x) => `<rect class="cb" x="${x}" y="16" width="6" height="18" rx="2"/>`).join("")}<rect class="cs" x="36" y="56" width="46" height="38" rx="6"/>`,
    rede: `<path class="s1" d="M60 36v22M60 58L28 80M60 58l32 22" style="stroke:var(--cor-media)"/><circle class="c1" cx="60" cy="26" r="16"/><circle class="c1" cx="24" cy="92" r="16"/><circle class="c1" cx="96" cy="92" r="16"/><circle class="cb" cx="60" cy="58" r="7"/>`,
    terminal: `<rect class="cn" x="8" y="16" width="104" height="88" rx="14"/><path class="sb" d="M28 46l16 14-16 14"/><rect class="c2" x="54" y="70" width="34" height="8" rx="4"/>`,
    escudo: `<path class="c1" d="M60 8l44 16v30c0 28-19 48-44 58C35 102 16 82 16 54V24z"/><path class="sb" d="M40 58l14 14 26-28"/>`,
    atualizar: `<circle class="cs" cx="60" cy="60" r="52"/><path class="s1" d="M88 50a29 29 0 0 0-52-10M32 70a29 29 0 0 0 52 10"/><path class="s1" d="M34 26v16h16M86 94V78H70"/>`,
    restaurar: `<circle class="cs" cx="60" cy="60" r="52"/><path class="s1" d="M34 64a27 27 0 1 0 8-24"/><path class="s1" d="M30 28v16h16"/><path class="s1" d="M62 46v18l12 8"/>`,
    olho: `<path class="c2" d="M8 60c14-24 32-36 52-36s38 12 52 36c-14 24-32 36-52 36S22 84 8 60z"/><circle class="cb" cx="60" cy="60" r="20"/><circle class="c1" cx="60" cy="60" r="10"/><path class="st" d="M20 100L100 20" style="stroke:var(--cor)"/>`,
    atalho: `<path class="cs" d="M28 8h48l24 24v80H28z"/><path class="c2" d="M76 8v24h24z"/><rect class="c1" x="12" y="60" width="50" height="50" rx="10"/><path class="sb" d="M26 98c0-14 8-22 22-22M40 66l10 10-10 10" style="stroke-width:6"/>`,
    grafico: `<rect class="cs" x="8" y="16" width="104" height="88" rx="14"/><path class="s1" d="M20 84l20-24 18 14 22-34 20 18"/>`,
    video: `<rect class="c1" x="8" y="22" width="104" height="76" rx="14"/><path class="cb" d="M50 42v36l30-18z"/>`,
    admin: `<circle class="c1" cx="54" cy="40" r="22"/><path class="c1" d="M12 108c0-24 18-40 42-40s42 16 42 40z"/><circle class="cb" cx="90" cy="30" r="22"/><path class="c2" d="M90 12l5 11 12 2-9 8 2 12-10-6-10 6 2-12-9-8 12-2z"/>`,
    lista: `<rect class="cs" x="10" y="14" width="100" height="92" rx="14"/><rect class="c1" x="22" y="28" width="76" height="18" rx="6"/><rect class="c2" x="22" y="52" width="76" height="18" rx="6"/><rect class="c2" x="22" y="76" width="76" height="18" rx="6"/>`,
    interrupcao: `<circle class="cs" cx="60" cy="60" r="52"/><path class="c1" d="M66 14L30 66h26l-6 40 38-54H62z"/>`,
  });
}

// ---------------------------------------------------------------- Estilos
// Peças visuais extras: teclas, terminal, camadas e linhas de comando.
if (typeof document !== "undefined") {
  const estilo = document.createElement("style");
  estilo.textContent = `
    .tecla{display:inline-block;min-width:58px;padding:6px 16px 4px;border-radius:12px;background:#fff;border:3px solid #d5dce8;border-bottom-width:8px;font:700 28px var(--sans);color:var(--texto);text-align:center;line-height:1.25;white-space:nowrap}
    .mais{display:inline-block;margin:0 8px;color:var(--texto-fraco);font:700 28px var(--sans)}
    .teclas{display:flex;align-items:center;flex-wrap:nowrap}
    .cartao-h{display:flex;gap:26px;align-items:center;padding:26px 32px}
    .cartao-h .icone{margin:0;width:84px;height:84px;flex-shrink:0}
    .cartao-h h3{font-size:32px;margin:0 0 6px;line-height:1.15}
    .cartao-h p{font-size:26px;line-height:1.35}
    .terminal{position:absolute;background:#16202e;border-radius:24px;box-shadow:var(--sombra);padding:62px 40px 30px;font:500 32px/1.65 var(--mono);color:#e6edf3}
    .terminal::before{content:"";position:absolute;left:30px;top:24px;width:14px;height:14px;border-radius:50%;background:#4a5568;box-shadow:24px 0 #4a5568,48px 0 #4a5568}
    .terminal .linha{white-space:pre}
    .terminal .p{color:#5eead4}
    .terminal .k{color:#8b98ab}
    .cmd{display:inline-block;font:700 30px var(--mono);color:var(--cor);background:var(--cor-suave);border-radius:12px;padding:4px 14px;white-space:nowrap}
    .linha-cmd{position:absolute;display:flex;align-items:center;gap:22px;font-size:27px;color:var(--texto-suave)}
    .linha-cmd .cmd{min-width:190px;text-align:center}
    .linha-cmd b{color:var(--texto)}
    .camada-so{position:absolute;display:flex;align-items:center;gap:26px;padding:0 30px;border-radius:24px;background:#fff;box-shadow:var(--sombra)}
    .camada-so .icone{width:84px;height:84px;margin:0;background:#fff;border-radius:20px;padding:6px}
    .camada-so.forte{background:var(--cor);color:#fff}
    .camada-so.forte .rotulo{color:#fff;opacity:.85}
    .bloco{position:absolute;display:grid;place-items:center;border-radius:18px;font:800 30px var(--sans);text-align:center;line-height:1.1}
    .pilula.alerta{background:var(--prova-fundo);color:var(--prova)}
    .pilula.ok{background:var(--dica-fundo);color:var(--certo)}
    .pilula.nao{background:#fbe9e6;color:var(--errado)}
  `;
  document.head.appendChild(estilo);
}

// ---------------------------------------------------------------- Ajudantes
const tecla = (...ks) => `<span class="teclas">${ks.map((k) => `<kbd class="tecla">${k}</kbd>`).join('<span class="mais">+</span>')}</span>`;

// Instante em que um trecho do texto é dito (proporcional à posição na fala).
function em(c, cena, i, trecho, ajuste = 0) {
  const f = cena.falas[i];
  const txt = typeof f === "string" ? f : f.texto;
  const k = txt.indexOf(trecho);
  if (k < 0) throw new Error(`Cena ${cena.id}: “${trecho}” não está na fala ${i}`);
  return c.t(i) + c.dur(i) * (k / txt.length) + ajuste;
}

// Cartão horizontal: ícone à esquerda, título e texto à direita.
function cartaoH(c, o, estilo, t, tipo = "baixo") {
  const e = c.novo(`<div class="cartao cartao-h">${o.icone ? icone(o.icone) : ""}<div>${o.rotulo ? `<div class="rotulo" style="font-size:18px;margin-bottom:4px">${o.rotulo}</div>` : ""}<h3>${o.titulo}</h3>${o.texto ? `<p>${o.texto}</p>` : ""}${o.extra || ""}</div></div>`, estilo);
  if (o.cor) e.style.setProperty("--cor", o.cor);
  return t === null ? e : c.entra(e, t, tipo);
}

// Janela de terminal; cada linha entra no instante indicado.
function terminal(c, linhas, estilo, tempos, tJanela) {
  const e = c.novo(`<div class="terminal">${linhas.map((l) => `<div class="linha">${l}</div>`).join("")}</div>`, estilo);
  c.entra(e, tJanela ?? tempos[0], "baixo");
  [...e.querySelectorAll(".linha")].forEach((l, i) => {
    if (tempos[i] !== undefined) c.tl.fromTo(l, { autoAlpha: 0, x: -20 }, { autoAlpha: 1, x: 0, duration: 0.4, immediateRender: true }, tempos[i]);
  });
  return e;
}

// ---------------------------------------------------------------- Voz
// Grafia fonética usada só na narração (além de ferramentas/pronuncia.json).
const VOZ = [
  ["Red Hat Enterprise Linux", "réd rét entérpraiz línucs"],
  ["Windows Server", "uindôus sérver"],
  ["Windows Update", "uindôus âpdeit"],
  ["Microsoft Defender", "Microsoft difénder"],
  ["VMware ESXi", "vê ême uér, é ésse xis i"],
  ["VMware Workstation", "vê ême uér uôrk istêixon"],
  ["Hyper-V", "ráiper vê"],
  ["Linus Torvalds", "línus tórvalds"],
  ["Round Robin", "ráund róbin"],
  ["bare metal", "bér métal"],
  ["dual boot", "dúal bút"],
  ["Windows", "uindôus"],
  ["macOS", "mác ó ésse"],
  ["iOS", "ai ó ésse"],
  ["SO", "ésse ó"],
  ["GUI", "gê u i"],
  ["CLI", "cê éle i"],
  ["GRUB", "grúbi"],
  ["systemd", "sístem dê"],
  ["boot", "bút"],
  ["hypervisor", "ráiper-váizor"],
  ["Minix", "mínics"],
  ["XNU", "xis ene u"],
  ["GNOME", "guinôme"],
  ["XFCE", "xis éfe cê é"],
  ["Cinnamon", "sínamon"],
  ["exFAT", "éks fát"],
  ["ext4", "e xis tê quatro"],
  ["APFS", "a pê éfe ésse"],
  ["journaling", "djórnaling"],
  ["quantum", "kuântum"],
  ["deadlock", "déd lóck"],
  ["swap", "suóp"],
  ["UAC", "u a cê"],
  ["BitLocker", "bit lóquer"],
  ["Pro", "pró"],
  ["firewall", "fáier uól"],
  ["GNU", "guinú"],
  ["root", "rút"],
  ["sudo", "súdo"],
  ["Ctrl", "contról"],
  ["logs", "lógs"],
  ["pipe", "páipe"],
];
const VOZ_RE = VOZ.map(([de, para]) => [new RegExp(`(?<![\\p{L}\\d])${de.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![\\p{L}\\d])`, "gu"), para]);
const vozDe = (s) => VOZ_RE.reduce((r, [re, para]) => r.replace(re, para), s);
function aplicarVoz(cenas) {
  cenas.forEach((cena) => {
    cena.falas = (cena.falas || []).map((f) => {
      const texto = typeof f === "string" ? f : f.texto;
      const falar = vozDe(typeof f === "string" ? f : (f.falar || f.texto));
      return falar === texto ? texto : { texto, falar };
    });
  });
  return cenas;
}

serie.capitulo({
  numero: 2,
  titulo: "Sistemas Operacionais",
  cor: "#0f766e",
  proximo: "Capítulo 3 — Internet e Navegadores",
  cenas: aplicarVoz([
    // ------------------------------------------------------------ Abertura
    {
      id: "abertura",
      visual: "Bit grande à esquerda acena para o público. À direita surgem o rótulo “Capítulo 2” e o título “Sistemas Operacionais”. Em seguida, um roteiro de 6 tópicos aparece item por item, cada um na frase que o anuncia. Na última frase, Bit dá um pulinho.",
      secao: "Abertura",
      bit: BIT_GRANDE,
      falas: [
        "Olá! Eu sou o Bit, e que bom ter você de volta à nossa série de videoaulas.",
        "Neste segundo capítulo, o tema são os Sistemas Operacionais.",
        "Você vai entender o que é um sistema operacional, o que ele faz e como gerencia os processos.",
        "Vai conhecer o kernel, a inicialização do computador e os sistemas de arquivos.",
        "E vamos explorar o Windows e o Linux: Lixeira, atalhos, comandos e permissões.",
        "Vamos lá?",
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        c.bit.acenar(c.t(0, 0.2));
        c.titulo("Capítulo 2", "Sistemas<br>Operacionais", { left: 900, top: 170 }, c.t(1));
        c.lista([
          "O que é e o que faz o <b>sistema operacional</b>",
          "<b>Processos</b> e escalonamento",
          "<b>Kernel</b>, <b>boot</b> e virtualização",
          "Interfaces e <b>sistemas de arquivos</b>",
          "<b>Windows</b>: Lixeira, atalhos e segurança",
          "<b>Linux</b>: diretórios, comandos e permissões",
        ], { left: 900, top: 470, width: 900 }, [w(2, "o que é"), w(2, "como gerencia"), c.t(3), w(3, "sistemas de arquivos"), w(4, "Windows"), w(4, "Linux")]);
        c.bit.pular(c.t(5));
      },
    },

    // ----------------------------------------------- O sistema operacional
    {
      id: "conceito",
      visual: "Três camadas empilhadas à esquerda: Usuário (interação), Sistema operacional (gerencia recursos, em destaque na cor do capítulo) e Hardware (executa fisicamente). À direita, cartão com a definição de SO. Depois, as pílulas processador, memória, disco e periféricos; elas se apagam e surge a faixa “base comum para os aplicativos”.",
      secao: "O sistema operacional",
      bit: BIT_CANTO,
      falas: [
        "Imagine o computador em três camadas. Em cima, o usuário, que interage. Embaixo, o hardware, que executa tudo fisicamente.",
        "E, no meio, o sistema operacional, ou SO: o software básico que gerencia os recursos e serve de intermediário entre o hardware, os aplicativos e o usuário.",
        "Sem ele, cada programa teria que controlar sozinho o processador, a memória, o disco e cada periférico.",
        "O SO esconde essa complexidade e oferece uma base comum para todos os aplicativos.",
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        c.titulo("Conceito", "O que é o sistema operacional", { left: 140, top: 150 }, c.t(0), { medio: true });
        const camada = (y, ic, rot, nome, forte) => c.novo(`<div class="camada-so ${forte ? "forte" : ""}" style="left:140px;top:${y}px;width:640px;height:140px">${icone(ic)}<div><div class="rotulo" style="font-size:22px">${rot}</div><div style="font:800 38px var(--sans);margin-top:4px">${nome}</div></div></div>`);
        c.entra(camada(320, "pessoa", "Usuário", "Interação"), w(0, "Em cima"), "cima");
        c.entra(camada(660, "cpu", "Hardware", "Executa fisicamente"), w(0, "Embaixo"), "baixo");
        const so = c.entra(camada(490, "engrenagem", "Sistema operacional", "Gerencia recursos", true), c.t(1), "zoom");
        c.cartao({ titulo: "Sistema operacional (SO)", texto: "<b>Software básico</b> que gerencia os recursos e é o <b>intermediário</b> entre hardware, aplicativos e usuário." }, { left: 860, top: 320, width: 700 }, w(1, "o software básico"));
        c.entra(c.novo(`<div class="abs rotulo" style="left:860px;top:640px">Sem o SO, cada programa controlaria:</div>`), c.t(2), "fade");
        const pilulas = c.novo(`<div class="abs" style="left:860px;top:690px;width:720px;display:flex;flex-wrap:wrap;gap:14px">
          ${["processador", "memória", "disco", "periféricos"].map((p) => `<span class="pilula">${p}</span>`).join("")}</div>`);
        [...pilulas.children].forEach((p, i) => c.entra(p, w(2, ["processador", "memória", "disco", "periférico"][i]), "pop"));
        c.tl.to(pilulas, { opacity: 0.3, duration: 0.5 }, c.t(3, 0.6));
        c.destaque(so, c.t(3, 0.3));
        c.chave("O SO esconde a complexidade · <em>base comum para os aplicativos</em>", w(3, "oferece"));
      },
    },
    {
      id: "exemplos",
      visual: "Três cartões com exemplos: Computadores (notebook), Dispositivos móveis (celular) e Servidores (servidor), cada um na frase que o cita. Quadro âmbar “Pegadinha de banca”: o SO não é hardware nem aplicativo, é software básico.",
      secao: "O sistema operacional",
      bit: BIT_CANTO,
      falas: [
        "Nos computadores, temos o Windows 10 e 11, o macOS e as distribuições Linux, como Ubuntu, Debian, Fedora e Linux Mint.",
        "Nos dispositivos móveis, o Android, baseado no kernel Linux, e o iOS.",
        "E, nos servidores, o Windows Server e distribuições Linux como Red Hat Enterprise Linux e Debian.",
        "Pegadinha: o sistema operacional não é um hardware. Ele é um software básico, ou de sistema. E também é errado dizer que ele é um aplicativo.",
      ],
      montar(c) {
        c.titulo("Exemplos", "Sistemas operacionais do dia a dia", { left: 140, top: 150 }, c.t(0), { medio: true });
        const cards = [
          { icone: "notebook", titulo: "Computadores", texto: "Windows 10 e 11<br>macOS<br>Linux: Ubuntu, Debian, Fedora, Linux Mint" },
          { icone: "celular", titulo: "Dispositivos móveis", texto: "Android (baseado no kernel Linux)<br>iOS" },
          { icone: "servidor", titulo: "Servidores", texto: "Windows Server<br>Red Hat Enterprise Linux<br>Debian" },
        ];
        cards.forEach((k, i) => {
          const e = c.cartao(k, { left: 140 + i * 480, top: 300, width: 450, height: 420 }, c.t(i));
          e.querySelector("p").style.fontSize = "28px";
        });
        const q = c.quadro("prova", "O SO <b>não</b> é hardware nem aplicativo: é <b>software básico</b> (de sistema).", { left: 140, top: 760, width: 1400 }, c.t(3));
        q.querySelector("p").style.fontSize = "36px";
      },
    },
    {
      id: "funcoes",
      visual: "Seis cartões em grade, um por função: gerência de processos (CPU), de memória, de arquivos (pasta), de dispositivos (impressora), segurança (cadeado) e interface (janela, GUI ou CLI). Quadro azul “Resumo estratégico” com os quatro grandes recursos.",
      secao: "O sistema operacional",
      bit: BIT_CANTO,
      falas: [
        "E o que o SO faz? A gerência de processos decide qual programa usa o processador, e por quanto tempo.",
        "A gerência de memória distribui a RAM entre os programas e impede que um invada a área do outro.",
        "A gerência de arquivos organiza os dados em arquivos e pastas, os diretórios, no disco.",
        "A gerência de dispositivos controla os periféricos de entrada e saída, por meio dos drivers.",
        "O SO também cuida da segurança, com contas, senhas e permissões, e oferece a interface: gráfica, a GUI, ou de linha de comando, a CLI.",
        "Resumindo: o SO gerencia quatro grandes recursos: o processador, a memória, os arquivos e os dispositivos de entrada e saída.",
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        c.titulo("Funções", "O que o sistema operacional faz", { left: 140, top: 150 }, c.t(0), { medio: true });
        const itens = [
          { icone: "cpu", rotulo: "Gerência de", titulo: "Processos", texto: "quem usa o processador e por quanto tempo", t: w(0, "A gerência") },
          { icone: "memoria", rotulo: "Gerência de", titulo: "Memória", texto: "distribui a RAM e impede invasões", t: c.t(1) },
          { icone: "pasta", rotulo: "Gerência de", titulo: "Arquivos", texto: "arquivos e pastas (diretórios) no disco", t: c.t(2) },
          { icone: "impressora", rotulo: "Gerência de", titulo: "Dispositivos (E/S)", texto: "periféricos, por meio de drivers", t: c.t(3) },
          { icone: "cadeado", titulo: "Segurança e usuários", texto: "contas, senhas e permissões", t: c.t(4) },
          { icone: "janela", titulo: "Interface", texto: "gráfica (GUI) ou linha de comando (CLI)", t: w(4, "oferece") },
        ];
        itens.forEach((k, i) => cartaoH(c, k, { left: 140 + (i % 3) * 480, top: 300 + Math.floor(i / 3) * 220, width: 450, height: 200 }, k.t));
        c.quadro("resumo", "O SO gerencia <b>processador</b>, <b>memória</b>, <b>arquivos</b> e <b>dispositivos de E/S</b>.", { left: 140, top: 760, width: 1400 }, c.t(5)).querySelector("p").style.fontSize = "36px";
      },
    },

    // ------------------------------------------------------------ Processos
    {
      id: "processos",
      visual: "Cartão “Processo = programa em execução”. Faixa do processador com fatias A, B e C alternadas surgindo uma a uma (“parece simultâneo”); um marcador âmbar “SO” mostra a interrupção da multitarefa preemptiva. Cartão Multiusuário. Depois, barra da RAM que enche com programas; o excesso vai para a área “memória virtual” do disco, com as pílulas “arquivo de paginação” e “swap” e o aviso “bem mais lento”. Por fim, cartão Driver com uma impressora.",
      secao: "Processos",
      bit: BIT_CANTO,
      falas: [
        "Agora, alguns conceitos ligados aos processos. Processo é um programa em execução.",
        "Multitarefa é ter vários programas executando ao mesmo tempo. Na verdade, o SO alterna o processador entre eles tão rápido que parece simultâneo.",
        "Na multitarefa preemptiva, o modelo dos sistemas atuais, o SO pode interromper um programa para dar a vez a outro.",
        "Multiusuário significa várias contas de usuário, com arquivos e permissões separados.",
        "E quando a RAM acaba? O SO usa parte do disco como extensão da memória: é a memória virtual.",
        "No Windows, ela fica no arquivo de paginação; no Linux, na área de swap. Funciona, mas é bem mais lento.",
        "Por fim, o driver é o software que permite ao SO controlar um dispositivo específico, como uma impressora.",
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        c.titulo("Conceitos", "Processos e memória", { left: 140, top: 150 }, c.t(0), { medio: true });
        const fase1 = [];
        fase1.push(cartaoH(c, { icone: "janela", titulo: "Processo", texto: "programa em <b>execução</b>" }, { left: 140, top: 300, width: 640, height: 160 }, w(0, "Processo é")));
        fase1.push(c.entra(c.novo(`<div class="abs rotulo" style="left:140px;top:500px">Multitarefa · uso do processador</div>`), c.t(1), "fade"));
        const cores = ["var(--cor)", "color-mix(in srgb, var(--cor) 60%, white)", "var(--cor-media)"];
        const fatias = c.novo(`<div class="abs" style="left:140px;top:545px;display:flex;gap:8px">${[0, 1, 2, 0, 1, 2, 0, 1, 2].map((k) => `<div class="bloco" style="position:relative;width:148px;height:96px;background:${cores[k]};color:${k === 2 ? "var(--cor)" : "#fff"}">${"ABC"[k]}</div>`).join("")}</div>`);
        [...fatias.children].forEach((f, i) => c.entra(f, w(1, "vários", 0.3 + i * 0.3), "pop"));
        fase1.push(fatias);
        fase1.push(c.texto("alternância tão rápida que <b>parece simultâneo</b>", { left: 140, top: 660 }, w(1, "tão rápido")));
        const marca = c.novo(`<div class="abs" style="left:592px;top:520px;width:24px;height:150px">
          <div style="position:absolute;left:10px;top:20px;width:5px;height:130px;background:var(--prova);border-radius:3px"></div>
          <div class="pilula alerta" style="position:absolute;left:-30px;top:-14px;font-size:22px;padding:4px 14px">SO</div></div>`);
        c.entra(marca, w(2, "interromper"), "pop");
        fase1.push(marca);
        const pre = c.novo(`<div class="abs pilula alerta" style="left:140px;top:760px">preemptiva: o SO interrompe e dá a vez a outro</div>`);
        c.entra(pre, w(2, "interromper", 0.4), "baixo");
        fase1.push(pre);
        fase1.push(cartaoH(c, { icone: "pessoas", titulo: "Multiusuário", texto: "várias contas, com arquivos e permissões <b>separados</b>" }, { left: 840, top: 300, width: 720, height: 160 }, c.t(3)));
        fase1.forEach((e) => c.sai(e, c.t(4) - 0.4));

        // Memória virtual
        c.entra(c.novo(`<div class="abs rotulo" style="left:140px;top:300px">Memória RAM</div>`), c.t(4), "fade");
        const ram = c.novo(`<div class="abs" style="left:140px;top:345px;width:660px;height:140px;border:6px solid var(--cor);border-radius:22px;background:#fff;display:flex;gap:10px;padding:12px"></div>`);
        c.entra(ram, c.t(4), "fade");
        for (let k = 0; k < 4; k++) {
          const b = c.novo(`<div class="bloco" style="position:relative;width:148px;height:104px;background:var(--cor-media);color:var(--cor);font-size:24px">Programa ${k + 1}</div>`);
          ram.appendChild(b);
          c.entra(b, c.t(4, 0.2 + k * 0.3), "pop");
        }
        const disco = c.novo(`<div class="cartao" style="left:960px;top:300px;width:600px;height:250px;padding:28px">
          <div style="display:flex;gap:20px;align-items:center">${icone("disco")}<h3 style="margin:0">Disco</h3></div>
          <div style="position:absolute;left:28px;right:28px;bottom:24px;height:92px;border:4px dashed var(--cor);border-radius:16px;display:flex;align-items:center;justify-content:flex-end;padding-right:22px;font:700 28px var(--sans);color:var(--cor)">memória virtual</div></div>`);
        disco.querySelector(".icone").style.cssText = "margin:0;width:84px;height:84px";
        c.entra(disco, w(4, "parte do disco"), "baixo");
        const extra = c.novo(`<div class="bloco" style="left:1000px;top:442px;width:160px;height:80px;background:var(--prova-fundo);color:var(--prova);font-size:24px">Programa 5</div>`);
        c.entra(extra, w(4, "extensão"), "pop");
        c.seta(810, 415, 990, 470, w(4, "parte do disco", 0.5));
        c.entra(c.novo(`<div class="abs pilula" style="left:140px;top:600px">Windows · arquivo de paginação</div>`), c.t(5), "pop");
        c.entra(c.novo(`<div class="abs pilula" style="left:700px;top:600px">Linux · área de swap</div>`), w(5, "no Linux"), "pop");
        c.entra(c.novo(`<div class="abs pilula alerta" style="left:1060px;top:600px">funciona, mas é bem mais lento</div>`), w(5, "Funciona"), "pop");
        cartaoH(c, { icone: "impressora", titulo: "Driver", texto: "software que permite ao SO controlar um <b>dispositivo específico</b>, como uma impressora" }, { left: 140, top: 720, width: 1400, height: 150 }, c.t(6));
      },
    },
    {
      id: "estados",
      visual: "Diagrama de estados: Novo → Pronto → Executando → Terminado, com Bloqueado abaixo (setas Executando → Bloqueado → Pronto). Cada estado surge e pulsa na frase que o explica. Quadro âmbar: espera de E/S = bloqueado, não pronto.",
      secao: "Processos",
      bit: BIT_CANTO,
      falas: [
        "Cada processo passa por estados controlados pelo SO. Primeiro, ele é novo: está sendo criado e carregado na memória.",
        "Depois, fica pronto: está na fila, esperando a vez de usar o processador.",
        "Quando ganha o processador, passa a executando.",
        "Se precisar esperar um evento externo, como a leitura do disco ou a digitação do usuário, fica bloqueado. Quando o evento acontece, volta para pronto.",
        "E, ao encerrar, fica terminado, e seus recursos são liberados.",
        "Pegadinha clássica: quem espera uma operação de entrada e saída está bloqueado, e não pronto. Pronto é quem só aguarda a vez de usar o processador.",
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        c.titulo("Estados do processo", "Do novo ao terminado", { left: 140, top: 150 }, c.t(0), { medio: true });
        const no = (x, y, n, nome, desc) => c.novo(`<div class="no" style="left:${x}px;top:${y}px;width:300px;height:160px;padding:16px 20px">
          <div class="rotulo" style="font-size:20px">${n}</div><strong style="font-size:36px">${nome}</strong><span style="font-size:23px;line-height:1.25">${desc}</span></div>`);
        const novo = no(140, 310, "1", "Novo", "criado e carregado na memória");
        const pronto = no(520, 310, "2", "Pronto", "na fila, esperando o processador");
        const exec = no(900, 310, "3", "Executando", "usando o processador");
        const bloq = no(710, 560, "4", "Bloqueado", "aguarda um evento externo");
        const term = no(1280, 310, "5", "Terminado", "recursos liberados");
        const tempos = [w(0, "Primeiro"), c.t(1), c.t(2), w(3, "fica bloqueado"), c.t(4)];
        [novo, pronto, exec, bloq, term].forEach((n, i) => { c.entra(n, tempos[i], "pop"); c.destaque(n, tempos[i] + 0.6); });
        c.seta(448, 390, 512, 390, c.t(1, -0.2));
        c.seta(828, 390, 892, 390, c.t(2, -0.2));
        c.seta(1035, 478, 975, 552, w(3, "fica bloqueado", -0.4));
        c.seta(745, 552, 685, 478, w(3, "volta para pronto", -0.2));
        c.entra(c.novo(`<div class="abs pilula" style="left:1040px;top:520px;font-size:22px">espera evento</div>`), w(3, "fica bloqueado"), "pop");
        c.entra(c.novo(`<div class="abs pilula" style="left:440px;top:520px;font-size:22px">evento ocorreu</div>`), w(3, "volta para pronto"), "pop");
        c.seta(1208, 390, 1272, 390, c.t(4, -0.2));
        c.quadro("prova", "Espera de entrada e saída = <b>bloqueado</b>, e não “pronto”. Pronto só aguarda a vez do processador.", { left: 140, top: 770, width: 1400 }, c.t(5)).querySelector("p").style.fontSize = "34px";
      },
    },
    {
      id: "escalonamento",
      visual: "Faixa “Escalonador: decide qual processo pronto usa o processador”. Tabela Algoritmo / Como escolhe, uma linha por algoritmo: FIFO (FCFS), SJF, Round Robin (quantum) e por prioridade. Depois, diagrama do deadlock: Processo 1 e Processo 2, cada um segurando um recurso e esperando o outro, com setas formando um ciclo.",
      secao: "Processos",
      bit: BIT_CANTO,
      falas: [
        "Quem decide qual processo pronto vai usar o processador é o escalonador, uma parte do SO.",
        "No FIFO, ou FCFS, vale a ordem de chegada: o primeiro a chegar é o primeiro atendido. No SJF, o processo mais curto vai primeiro.",
        "No Round Robin, ou circular, cada processo usa a CPU por uma fatia de tempo fixa, o quantum, e volta para o fim da fila.",
        "E, no escalonamento por prioridade, o processo de maior prioridade é executado primeiro.",
        "Cuidado também com o deadlock, o impasse.",
        "Dois ou mais processos ficam esperando indefinidamente, cada um por um recurso que está preso com o outro.",
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        const tit = c.titulo("Escalonamento", "Quem usa o processador?", { left: 140, top: 150 }, c.t(0), { medio: true });
        c.chave("Escalonador: <em>decide qual processo pronto usa o processador</em>", w(0, "escalonador"), c.t(1) - 0.2);
        const tab = c.tabela(["Algoritmo", "Como escolhe"], [
          ["FIFO (FCFS)", "ordem de chegada: o primeiro a chegar é o primeiro atendido"],
          ["SJF", "o processo mais curto primeiro"],
          ["Round Robin (circular)", "fatia de tempo fixa (<i>quantum</i>) e volta para o fim da fila"],
          ["Por prioridade", "o de maior prioridade é executado primeiro"],
        ], { left: 140, top: 300, width: 1420 }, c.t(1) - 0.3, [c.t(1), w(1, "No SJF"), c.t(2), c.t(3)]);
        tab.style.fontSize = "30px";
        c.sai(tab, c.t(4) - 0.4);
        c.sai(tit, c.t(4) - 0.4);

        c.titulo("Deadlock", "O impasse", { left: 140, top: 150 }, c.t(4), { medio: true });
        const proc = (x, nome, desc) => c.novo(`<div class="no" style="left:${x}px;top:440px;width:340px;height:170px;padding:18px"><strong style="font-size:34px">${nome}</strong><span style="font-size:24px">${desc}</span></div>`);
        c.entra(proc(180, "Processo 1", "segura A · espera B"), c.t(4, 0.4), "pop");
        c.entra(proc(1180, "Processo 2", "segura B · espera A"), c.t(4, 0.9), "pop");
        const rec = (y, ic, nome) => {
          const e = c.novo(`<div class="cartao" style="left:690px;top:${y}px;width:340px;height:120px;display:flex;align-items:center;gap:20px;padding:18px 26px">${icone(ic)}<h3 style="margin:0;font-size:32px">${nome}</h3></div>`);
          e.querySelector(".icone").style.cssText = "margin:0;width:76px;height:76px";
          return e;
        };
        c.entra(rec(310, "impressora", "Recurso A"), w(5, "cada um"), "pop");
        c.entra(rec(680, "disco", "Recurso B"), w(5, "cada um", 0.4), "pop");
        const t0 = w(5, "recurso");
        c.seta(690, 395, 530, 450, t0);
        c.seta(530, 600, 690, 715, t0 + 0.6);
        c.seta(1030, 715, 1180, 600, t0 + 1.2);
        c.seta(1180, 450, 1030, 395, t0 + 1.8);
        c.chave("Ninguém avança: <em>espera indefinida</em>", w(5, "preso"));
      },
    },

    // -------------------------------------------------------- Kernel e boot
    {
      id: "kernel",
      visual: "Círculo do Kernel envolvendo o núcleo Hardware, com a etiqueta “privilégio máximo”; à direita, quatro cartões: processos, memória, dispositivos e interrupções. Depois, três cartões com mini-diagramas: Monolítico (Linux), Microkernel (Minix) e Híbrido (Windows NT, macOS XNU). Por fim, quadro âmbar com as duas pegadinhas: interface gráfica não é o kernel; Linux é o kernel, o sistema completo é uma distribuição.",
      secao: "Kernel e boot",
      bit: BIT_CANTO,
      falas: [
        "Agora, o coração do sistema: o kernel, ou núcleo. Ele roda com privilégio máximo e se comunica diretamente com o hardware.",
        "O kernel controla os processos, a memória, os dispositivos e as interrupções.",
        "Existem três tipos. No monolítico, quase todos os serviços rodam dentro do núcleo: é rápido, mas uma falha pode derrubar o sistema. É o caso do Linux.",
        "No microkernel, o núcleo tem só o essencial, e os outros serviços rodam separados. É mais modular e estável, como o Minix.",
        "E o híbrido mistura as duas abordagens: é o caso do Windows, com o NT, e do macOS, com o XNU.",
        "Pegadinha: o kernel não é responsável pela interface gráfica. Ela é um programa que roda sobre o kernel.",
        "E, tecnicamente, Linux é só o kernel. O sistema completo é uma distribuição.",
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        const tit = c.titulo("Kernel", "O núcleo do sistema", { left: 140, top: 150 }, c.t(0), { medio: true });
        const fase1 = [];
        const kern = c.novo(`<div class="abs" style="left:250px;top:330px;width:480px;height:480px;border-radius:50%;background:var(--cor);display:flex;justify-content:center;padding-top:56px;color:#fff;font:800 44px var(--sans)">Kernel</div>`);
        c.entra(kern, w(0, "o kernel"), "zoom");
        const hw = c.novo(`<div class="abs" style="left:375px;top:500px;width:230px;height:230px;border-radius:50%;background:var(--serie);display:grid;place-items:center;color:#fff;font:800 34px var(--sans)">Hardware</div>`);
        c.entra(hw, w(0, "diretamente"), "pop");
        const priv = c.novo(`<div class="abs pilula" style="left:600px;top:340px;background:#fff;box-shadow:var(--sombra)">privilégio máximo</div>`);
        c.entra(priv, w(0, "privilégio"), "pop");
        fase1.push(kern, hw, priv);
        [["cpu", "Processos"], ["memoria", "Memória"], ["impressora", "Dispositivos"], ["interrupcao", "Interrupções"]].forEach((k, i) => {
          fase1.push(cartaoH(c, { icone: k[0], titulo: k[1] }, { left: 960, top: 320 + i * 125, width: 560, height: 108, padding: "14px 28px" }, w(1, ["processos", "memória", "dispositivos", "interrupções"][i]), "direita"));
        });
        fase1.forEach((e) => { e.querySelector?.(".icone") && e.classList.contains("cartao-h") && (e.querySelector(".icone").style.cssText = "margin:0;width:68px;height:68px"); c.sai(e, c.t(2) - 0.4); });

        const mini = {
          mono: `<rect x="40" y="10" width="220" height="140" rx="22" fill="var(--cor)"/>${[0, 1, 2, 3, 4, 5].map((k) => `<rect x="${62 + (k % 3) * 64}" y="${34 + Math.floor(k / 3) * 56}" width="48" height="40" rx="8" fill="#fff" opacity=".9"/>`).join("")}`,
          micro: `${[[50, 30], [250, 30], [50, 130], [250, 130]].map(([x, y]) => `<line x1="150" y1="80" x2="${x}" y2="${y}" stroke="var(--cor-media)" stroke-width="6"/><circle cx="${x}" cy="${y}" r="24" fill="var(--cor-media)"/>`).join("")}<rect x="110" y="48" width="80" height="64" rx="16" fill="var(--cor)"/>`,
          hib: `${[[262, 40], [262, 120]].map(([x, y]) => `<line x1="200" y1="80" x2="${x}" y2="${y}" stroke="var(--cor-media)" stroke-width="6"/><circle cx="${x}" cy="${y}" r="24" fill="var(--cor-media)"/>`).join("")}<rect x="40" y="20" width="170" height="120" rx="20" fill="var(--cor)"/>${[0, 1, 2].map((k) => `<rect x="${60 + k * 46}" y="58" width="36" height="40" rx="7" fill="#fff" opacity=".9"/>`).join("")}`,
        };
        const tipos = [
          ["mono", "Monolítico", "Quase tudo dentro do núcleo: <b>rápido</b>, mas uma falha pode derrubar o sistema.", ["Linux"], c.t(2)],
          ["micro", "Microkernel", "Só o essencial no núcleo; serviços separados: <b>modular e estável</b>.", ["Minix"], c.t(3)],
          ["hib", "Híbrido", "<b>Mistura</b> as duas abordagens.", ["Windows (NT)", "macOS (XNU)"], c.t(4)],
        ];
        const fase2 = tipos.map((k, i) => {
          const e = c.novo(`<div class="cartao" style="left:${140 + i * 480}px;top:300px;width:450px;height:470px;padding:34px">
            <svg viewBox="0 0 300 160" style="width:300px;height:160px;display:block;margin:0 auto 18px">${mini[k[0]]}</svg>
            <h3>${k[1]}</h3><p style="font-size:27px">${k[2]}</p>
            <div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap">${k[3].map((x) => `<span class="pilula" style="font-size:26px">${x}</span>`).join("")}</div></div>`);
          return c.entra(e, k[4], "baixo");
        });
        fase2.forEach((e) => c.sai(e, c.t(5) - 0.4));
        const q = c.quadro("prova", `O kernel <b>não</b> é a interface gráfica: ela é um programa que roda <b>sobre</b> o kernel.<span class="p2" style="display:block;margin-top:22px">Linux, tecnicamente, é só o <b>kernel</b>. O sistema completo é uma <b>distribuição</b>.</span>`, { left: 140, top: 330, width: 1400 }, c.t(5));
        q.querySelector("p").style.fontSize = "38px";
        c.entra(q.querySelector(".p2"), c.t(6), "baixo");
      },
    },
    {
      id: "boot",
      visual: "Fluxo horizontal de cinco etapas numeradas, ligadas por setas, cada uma na frase que a explica: POST (verificação), BIOS/UEFI (chip), Gerenciador de boot (menu; Windows ou GRUB), Kernel e serviços (engrenagem; systemd) e Login (cadeado). Faixa “Dual boot: escolher entre dois sistemas instalados”.",
      secao: "Kernel e boot",
      bit: BIT_CANTO,
      falas: [
        "E o que acontece quando você liga o computador? É a inicialização, o boot. Primeiro vem o POST: o firmware da placa-mãe testa o hardware.",
        "Depois, a BIOS ou a UEFI localiza o dispositivo de inicialização: o SSD, o HD ou o pen drive.",
        "Em seguida, o gerenciador de boot carrega o sistema escolhido: o Gerenciador de Inicialização do Windows, ou o GRUB, no Linux.",
        "Com dual boot, é ele que permite escolher entre dois sistemas instalados.",
        "Então o kernel é carregado na memória e inicia os serviços do sistema. No Linux, normalmente pelo systemd.",
        "Por fim, o login: o usuário se identifica, e a sessão é aberta.",
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        c.titulo("Inicialização", "O boot, passo a passo", { left: 140, top: 150 }, c.t(0), { medio: true });
        const passos = [
          ["check", "POST", "testa o hardware", w(0, "Primeiro")],
          ["chip", "BIOS/UEFI", "localiza SSD, HD ou pen drive", c.t(1)],
          ["lista", "Gerenciador de boot", "Windows: Gerenciador de Inicialização<br>Linux: GRUB", c.t(2)],
          ["engrenagem", "Kernel e serviços", "carregados na memória<br>(systemd no Linux)", c.t(4)],
          ["cadeado", "Login", "o usuário se identifica e a sessão abre", c.t(5)],
        ];
        passos.forEach((p, i) => {
          const x = 140 + i * 290;
          const e = c.novo(`<div class="no" style="left:${x}px;top:320px;width:240px;height:230px;padding:18px">
            <div style="position:absolute;left:-14px;top:-14px;width:48px;height:48px;border-radius:50%;background:var(--cor);color:#fff;display:grid;place-items:center;font:800 26px var(--sans)">${i + 1}</div>
            ${icone(p[0])}<strong style="font-size:${p[1].length > 12 ? 27 : 32}px;line-height:1.15">${p[1]}</strong></div>`);
          e.querySelector(".icone").style.cssText = "width:84px;height:84px;margin-bottom:12px";
          c.entra(e, p[3], "pop");
          c.texto(p[2], { left: x, top: 575, width: 250, fontSize: "24px", lineHeight: 1.35 }, p[3] + 0.4);
          if (i > 0) c.seta(x - 54, 435, x - 8, 435, p[3] - 0.3);
        });
        c.chave("Dual boot: <em>escolher entre dois sistemas instalados</em>", c.t(3), c.t(4) - 0.2);
      },
    },
    {
      id: "virtualizacao",
      visual: "Pilha à esquerda: Hardware na base e três máquinas virtuais em cima; o Hypervisor desliza entre eles (Tipo 1 · nativo/bare metal, com VMware ESXi, Hyper-V e KVM). À direita, a pilha do Tipo 2 (hospedado): Hardware, Sistema operacional, Hypervisor e duas máquinas virtuais, com VirtualBox e VMware Workstation.",
      secao: "Kernel e boot",
      bit: BIT_CANTO,
      falas: [
        "A virtualização permite executar vários sistemas operacionais, as máquinas virtuais, em um mesmo computador físico.",
        "Quem cria e controla as máquinas virtuais é o hypervisor.",
        "O tipo 1, nativo ou bare metal, roda direto sobre o hardware. Exemplos: VMware ESXi, Microsoft Hyper-V e KVM.",
        "O tipo 2, hospedado, roda como um programa sobre um sistema operacional, como o VirtualBox e o VMware Workstation.",
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        c.titulo("Virtualização", "Vários sistemas, um computador", { left: 140, top: 150 }, c.t(0), { medio: true });
        const camada = (x, y, larg, html, fundo, cor, alt = 80) => c.novo(`<div class="bloco" style="left:${x}px;top:${y}px;width:${larg}px;height:${alt}px;background:${fundo};color:${cor}">${html}</div>`);
        const vm = (x, y, larg) => camada(x, y, larg, `<span style="font-size:22px;line-height:1.1">Máquina<br>virtual</span>`, "var(--cor-suave)", "var(--cor)");
        // Tipo 1
        c.entra(camada(140, 700, 620, "Hardware", "var(--serie)", "#fff"), w(0, "computador físico"), "baixo");
        [0, 1, 2].forEach((k) => c.entra(vm(140 + k * 212, 516, 196), w(0, "máquinas virtuais", k * 0.25), "pop"));
        c.entra(camada(140, 608, 620, "Hypervisor", "var(--cor)", "#fff"), c.t(1, 0.3), "esquerda");
        c.entra(c.novo(`<div class="abs rotulo" style="left:140px;top:450px">Tipo 1 · nativo (bare metal)</div>`), c.t(2), "fade");
        c.entra(c.novo(`<div class="abs" style="left:140px;top:810px;width:640px;display:flex;flex-wrap:wrap;gap:10px">${["VMware ESXi", "Hyper-V", "KVM"].map((x) => `<span class="pilula" style="font-size:26px">${x}</span>`).join("")}</div>`), w(2, "Exemplos"), "baixo");
        // Tipo 2
        const x2 = 900;
        c.entra(c.novo(`<div class="abs rotulo" style="left:${x2}px;top:358px">Tipo 2 · hospedado</div>`), c.t(3), "fade");
        c.entra(camada(x2, 700, 620, "Hardware", "var(--serie)", "#fff"), c.t(3, 0.3), "baixo");
        c.entra(camada(x2, 608, 620, "Sistema operacional", "var(--cor-media)", "var(--texto)"), w(3, "sobre um sistema", -0.4), "baixo");
        c.entra(camada(x2, 516, 620, "Hypervisor", "var(--cor)", "#fff"), w(3, "como um programa"), "baixo");
        [0, 1].forEach((k) => c.entra(vm(x2 + k * 318, 424, 302), w(3, "sobre um sistema", 0.4 + k * 0.25), "pop"));
        c.entra(c.novo(`<div class="abs" style="left:${x2}px;top:810px;width:640px;display:flex;flex-wrap:wrap;gap:10px">${["VirtualBox", "VMware Workstation"].map((x) => `<span class="pilula" style="font-size:26px">${x}</span>`).join("")}</div>`), w(3, "como o VirtualBox"), "baixo");
      },
    },

    // ------------------------------------------------- Interfaces e arquivos
    {
      id: "interfaces",
      visual: "À esquerda, uma janela gráfica com barra de título, menu lateral, ícones e botão (GUI), com as pílulas GNOME, KDE Plasma, XFCE e Cinnamon. À direita, um terminal onde comandos aparecem linha a linha (CLI), com a etiqueta “shell” e as pílulas Bash, Prompt de Comando e PowerShell.",
      secao: "Interfaces e arquivos",
      bit: BIT_CANTO,
      falas: [
        "O SO conversa com você de duas formas. Na GUI, a interface gráfica, você usa janelas, ícones, menus e botões.",
        "No Linux, exemplos de interface gráfica são o GNOME, o KDE Plasma, o XFCE e o Cinnamon.",
        "Na CLI, a linha de comando, você digita comandos em um interpretador: o shell.",
        "Exemplos de shell são o Bash, no Linux, e o Prompt de Comando e o PowerShell, no Windows.",
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        c.titulo("Interfaces", "Gráfica × linha de comando", { left: 140, top: 150 }, c.t(0), { medio: true });
        c.entra(c.novo(`<div class="abs rotulo" style="left:140px;top:300px">GUI · interface gráfica</div>`), w(0, "Na GUI"), "fade");
        const gui = c.novo(`<div class="abs" style="left:140px;top:350px;width:660px;height:330px;border-radius:22px;background:#fff;box-shadow:var(--sombra);overflow:hidden">
          <div style="height:52px;background:var(--cor);display:flex;align-items:center;gap:10px;padding:0 20px">${[0, 1, 2].map(() => `<span style="width:14px;height:14px;border-radius:50%;background:#fff;opacity:.7"></span>`).join("")}<span style="margin-left:16px;color:#fff;font:700 22px var(--sans)">Janela</span></div>
          <div style="display:flex;height:278px">
            <div class="menu" style="width:170px;background:var(--cor-suave);padding:18px;display:flex;flex-direction:column;gap:12px">${["Arquivo", "Editar", "Exibir"].map((m) => `<span style="font:600 22px var(--sans);color:var(--cor)">${m}</span>`).join("")}</div>
            <div style="flex:1;position:relative;padding:24px">
              <div class="icones" style="display:flex;gap:22px">${["pasta", "documento", "imagem"].map((n) => `<div style="width:96px;text-align:center">${icone(n)}</div>`).join("")}</div>
              <span class="botao" style="position:absolute;right:26px;bottom:24px;padding:10px 30px;border-radius:12px;background:var(--cor);color:#fff;font:700 24px var(--sans)">OK</span>
            </div></div></div>`);
        gui.querySelectorAll(".icone").forEach((i) => (i.style.cssText = "width:84px;height:84px;margin:0"));
        c.entra(gui, w(0, "você usa"), "baixo");
        [[".icones", "ícones"], [".menu", "menus"], [".botao", "botões"]].forEach(([s, p]) => c.entra(gui.querySelector(s), w(0, p), "pop"));
        c.entra(c.novo(`<div class="abs" style="left:140px;top:720px;width:680px;display:flex;flex-wrap:wrap;gap:12px">${["GNOME", "KDE Plasma", "XFCE", "Cinnamon"].map((x) => `<span class="pilula" style="font-size:26px">${x}</span>`).join("")}</div>`), w(1, "são o"), "baixo");

        c.entra(c.novo(`<div class="abs rotulo" style="left:900px;top:300px">CLI · linha de comando</div>`), c.t(2), "fade");
        terminal(c, [
          `<span class="p">$</span> ls`,
          `Documentos  Imagens`,
          `<span class="p">$</span> cd Documentos`,
          `<span class="p">$</span> _`,
        ], { left: 900, top: 350, width: 660, height: 330 }, [w(2, "você digita"), w(2, "você digita", 0.5), w(2, "comandos em", 0.3), w(2, "interpretador")], c.t(2));
        c.entra(c.novo(`<div class="abs pilula alerta" style="left:1320px;top:290px">shell</div>`), w(2, "o shell"), "pop");
        c.entra(c.novo(`<div class="abs" style="left:900px;top:720px;width:680px;display:flex;flex-wrap:wrap;gap:12px">${["Bash (Linux)", "Prompt de Comando", "PowerShell"].map((x) => `<span class="pilula" style="font-size:26px">${x}</span>`).join("")}</div>`), c.t(3, 0.4), "baixo");
      },
    },
    {
      id: "sistemas-arquivos",
      visual: "Definição em uma linha e tabela Sistema / Uso típico / Características, com uma linha por frase: NTFS, FAT32 (limite de 4 GB por arquivo em destaque), exFAT, ext4 e APFS.",
      secao: "Interfaces e arquivos",
      bit: BIT_CANTO,
      falas: [
        "O sistema de arquivos define como os dados são organizados, nomeados e protegidos no disco.",
        "O NTFS é o padrão do Windows, com permissões, criptografia, compressão, cotas e journaling.",
        "O FAT32 aparece em pen drives e cartões antigos. É compatível com quase tudo, mas limita cada arquivo a 4 gigabytes.",
        "O exFAT, dos pen drives e cartões atuais, é compatível com Windows e macOS, sem esse limite.",
        "O ext4 é o padrão em muitas distribuições Linux, com journaling, bom desempenho e suporte a arquivos grandes.",
        "E o APFS é o do macOS e do iOS: otimizado para SSD, com criptografia nativa.",
      ],
      montar(c) {
        c.titulo("Sistemas de arquivos", "Como os dados ficam no disco", { left: 140, top: 150 }, c.t(0), { medio: true });
        const def = c.texto("Define como os dados são <b>organizados</b>, <b>nomeados</b> e <b>protegidos</b>.", { left: 140, top: 290 }, c.t(0, 1));
        def.style.fontSize = "32px";
        const tab = c.tabela(["Sistema", "Uso típico", "Características"], [
          ["NTFS", "padrão do Windows", "permissões, criptografia, compressão, cotas e journaling"],
          ["FAT32", "pen drives e cartões antigos", "compatível com quase tudo; <b class=\"marca-texto\">até 4 GB por arquivo</b>"],
          ["exFAT", "pen drives e cartões atuais", "Windows e macOS, sem o limite de 4 GB"],
          ["ext4", "muitas distribuições Linux", "journaling, desempenho, arquivos grandes"],
          ["APFS", "macOS e iOS", "otimizado para SSD, criptografia nativa"],
        ], { left: 140, top: 370, width: 1420 }, c.t(1) - 0.3, [c.t(1), c.t(2), c.t(3), c.t(4), c.t(5)]);
        tab.style.fontSize = "28px";
        tab.querySelectorAll("td").forEach((td) => (td.style.padding = "16px 30px"));
      },
    },
    {
      id: "fat32",
      visual: "Journaling: Registro (alterações pendentes) → Gravação no disco; um raio de “queda de energia” interrompe e surge “disco consistente ✓”. Depois, um vídeo de 5 GB tenta ir para um pen drive FAT32 e recebe um ✗ (limite de 4 GB por arquivo); surgem as soluções exFAT e NTFS. Quadro âmbar da pegadinha.",
      secao: "Interfaces e arquivos",
      bit: BIT_CANTO,
      falas: [
        "E o que é journaling? É um registro das alterações pendentes.",
        "Se o computador desligar no meio de uma gravação, o sistema consegue recuperar a consistência do disco.",
        "Agora, a pegadinha: um vídeo de 5 gigabytes não pode ser copiado para um pen drive em FAT32, mesmo que haja espaço livre.",
        "A solução é formatar o pen drive em exFAT ou NTFS.",
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        const tit = c.titulo("Journaling", "Registro das alterações", { left: 140, top: 150 }, c.t(0), { medio: true });
        const j1 = c.no({ icone: "documento", titulo: "Registro", texto: "alterações pendentes" }, { left: 140, top: 350, width: 420, height: 300 }, w(0, "registro"));
        const j2 = c.no({ icone: "disco", titulo: "Gravação", texto: "no disco" }, { left: 700, top: 350, width: 420, height: 300 }, w(0, "alterações"));
        const s1 = c.seta(570, 500, 690, 500, w(0, "alterações", 0.3));
        const raio = c.novo(`<div class="abs" style="left:575px;top:390px;width:110px">${icone("interrupcao")}</div>`);
        raio.querySelector(".icone").style.cssText = "width:110px;height:110px";
        c.entra(raio, w(1, "desligar"), "pop");
        const j3 = c.no({ icone: "check", titulo: "Disco consistente", texto: "recuperado pelo registro" }, { left: 1260, top: 350, width: 300, height: 300 }, w(1, "recuperar"));
        const s2 = c.seta(1130, 500, 1250, 500, w(1, "recuperar", -0.3));
        [tit, j1, j2, s1, raio, j3, s2].forEach((e) => c.sai(e, c.t(2) - 0.4));

        c.titulo("Pegadinha de banca", "O limite do FAT32", { left: 140, top: 150 }, c.t(2), { medio: true });
        c.no({ icone: "video", titulo: "Vídeo", texto: "5 GB" }, { left: 140, top: 320, width: 360, height: 280 }, w(2, "um vídeo"));
        c.no({ icone: "pendrive", titulo: "Pen drive FAT32", texto: "com espaço livre" }, { left: 700, top: 320, width: 400, height: 280 }, w(2, "pen drive"));
        c.seta(510, 460, 690, 460, w(2, "copiado"), { cor: "var(--errado)" });
        c.entra(c.novo(`<div class="abs" style="left:565px;top:380px;font:800 72px var(--sans);color:var(--errado)">✗</div>`), w(2, "copiado", 0.6), "pop");
        c.entra(c.novo(`<div class="abs pilula alerta" style="left:700px;top:620px">limite: 4 GB por arquivo</div>`), w(2, "mesmo que"), "pop");
        c.entra(c.novo(`<div class="abs pilula ok" style="left:1200px;top:380px;font-size:34px;padding:16px 34px">exFAT ✓</div>`), w(3, "exFAT"), "pop");
        c.entra(c.novo(`<div class="abs pilula ok" style="left:1200px;top:480px;font-size:34px;padding:16px 34px">NTFS ✓</div>`), w(3, "NTFS"), "pop");
        c.quadro("prova", "Arquivo de <b>5 GB</b> não vai para pen drive <b>FAT32</b>, mesmo com espaço livre. Solução: <b>exFAT</b> ou <b>NTFS</b>.", { left: 140, top: 720, width: 1400 }, w(2, "mesmo que", 0.6)).querySelector("p").style.fontSize = "34px";
      },
    },

    // -------------------------------------------------------------- Windows
    {
      id: "windows",
      visual: "Cinco cartões com os componentes mais cobrados: Explorador de Arquivos (pasta, teclas Windows + E), Área de Trabalho (Barra de Tarefas e Menu Iniciar), Configurações e Painel de Controle (engrenagem), Gerenciador de Tarefas (gráfico, teclas Ctrl + Shift + Esc) e Lixeira.",
      secao: "Windows",
      bit: BIT_CANTO,
      falas: [
        { texto: "Agora, o Windows. O Explorador de Arquivos gerencia pastas e arquivos, e abre com Windows + E.", falar: "Agora, o Windows. O Explorador de Arquivos gerencia pastas e arquivos, e abre com Windows mais é." },
        "Temos também a Área de Trabalho, a Barra de Tarefas e o Menu Iniciar.",
        "Nas Configurações e no Painel de Controle, você ajusta o sistema, as contas, a rede e os aplicativos.",
        { texto: "O Gerenciador de Tarefas mostra os processos, o desempenho e os programas que iniciam com o Windows. O atalho é Ctrl + Shift + Esc.", falar: "O Gerenciador de Tarefas mostra os processos, o desempenho e os programas que iniciam com o Windows. O atalho é Ctrl, Shift, Esc." },
        "E a Lixeira guarda temporariamente os arquivos excluídos do disco local, permitindo restaurá-los.",
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        c.titulo("Windows", "Componentes mais cobrados", { left: 140, top: 150 }, c.t(0), { medio: true });
        const k = [
          { icone: "pasta", titulo: "Explorador de Arquivos", texto: "gerencia pastas e arquivos", extra: `<div style="margin-top:12px">${tecla("Windows", "E")}</div>`, t: w(0, "O Explorador") },
          { icone: "monitor", titulo: "Área de Trabalho", texto: "Barra de Tarefas e Menu Iniciar", t: c.t(1) },
          { icone: "engrenagem", titulo: "Configurações e Painel de Controle", texto: "sistema, contas, rede e aplicativos", t: c.t(2) },
          { icone: "grafico", titulo: "Gerenciador de Tarefas", texto: "processos, desempenho e inicialização", extra: `<div style="margin-top:12px">${tecla("Ctrl", "Shift", "Esc")}</div>`, t: c.t(3) },
          { icone: "lixeira", titulo: "Lixeira", texto: "guarda os excluídos do <b>disco local</b> para restaurar", t: c.t(4) },
        ];
        const pos = [[140, 300], [620, 300], [1100, 300], [140, 550], [620, 550]];
        k.forEach((o, i) => cartaoH(c, o, { left: pos[i][0], top: pos[i][1], width: 450, height: 220 }, o.t));
      },
    },
    {
      id: "lixeira",
      visual: "Um arquivo à esquerda. Seta para a Lixeira com a tecla Delete; seta para “Excluído para sempre” com Shift + Delete. À direita, coluna “Excluídos direto”: pen drive, cartão de memória, pasta de rede e arquivo maior que a Lixeira. Quadro âmbar: nem tudo passa pela Lixeira.",
      secao: "Windows",
      bit: BIT_CANTO,
      falas: [
        "Atenção à Lixeira. A tecla Delete envia o arquivo para ela.",
        "Já Shift + Delete exclui permanentemente, sem passar pela Lixeira.",
        "Arquivos apagados de pen drives, cartões de memória e pastas de rede também não vão para a Lixeira: são excluídos direto.",
        "E arquivos maiores que o espaço reservado para a Lixeira também são excluídos permanentemente. O Windows avisa antes.",
        "Por isso, é errado dizer que todo arquivo excluído no Windows pode ser recuperado pela Lixeira.",
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        c.titulo("Lixeira", "Para onde vai o que você apaga", { left: 140, top: 150 }, c.t(0), { medio: true });
        c.no({ icone: "documento", titulo: "Arquivo" }, { left: 140, top: 380, width: 280, height: 240 }, c.t(0, 0.3));
        cartaoH(c, { icone: "lixeira", titulo: "Lixeira", texto: "pode ser restaurado" }, { left: 720, top: 290, width: 440, height: 180 }, w(0, "envia"));
        c.seta(430, 450, 705, 385, w(0, "Delete"));
        c.entra(c.novo(`<div class="abs" style="left:470px;top:320px">${tecla("Delete")}</div>`), w(0, "Delete"), "pop");
        cartaoH(c, { icone: "alerta", titulo: "Excluído para sempre", texto: "não passa pela Lixeira", cor: "#c2412f" }, { left: 720, top: 520, width: 440, height: 180 }, w(1, "exclui"));
        c.seta(430, 560, 705, 610, w(1, "exclui", -0.4), { cor: "var(--errado)" });
        c.entra(c.novo(`<div class="abs" style="left:420px;top:640px">${tecla("Shift", "Delete")}</div>`), c.t(1), "pop");
        c.entra(c.novo(`<div class="abs rotulo" style="left:1230px;top:296px;color:var(--errado)">Excluídos direto</div>`), c.t(2), "fade");
        [["pendrive", "pen drive", w(2, "pen drives")], ["cartaomem", "cartão de memória", w(2, "cartões")], ["rede", "pasta de rede", w(2, "pastas de rede")], ["documento", "maior que a Lixeira", c.t(3)]].forEach((k, i) => {
          const e = cartaoH(c, { icone: k[0], titulo: k[1] }, { left: 1230, top: 340 + i * 92, width: 330, height: 80, padding: "10px 20px", gap: "16px" }, null);
          e.querySelector(".icone").style.cssText = "margin:0;width:54px;height:54px";
          e.querySelector("h3").style.cssText = "font-size:25px;margin:0";
          c.entra(e, k[2], "direita");
        });
        c.seta(1222, 520, 1172, 590, c.t(2, 0.6), { cor: "var(--errado)", largura: 6 });
        c.quadro("prova", "Nem todo arquivo excluído vai para a Lixeira: <b>Shift + Delete</b>, unidades <b>removíveis</b> e de <b>rede</b> não passam por ela.", { left: 140, top: 750, width: 1400 }, c.t(4)).querySelector("p").style.fontSize = "34px";
      },
    },
    {
      id: "atalhos",
      visual: "Lista de atalhos com teclas desenhadas, um por vez: Windows + E, D, L, R, I, V e Windows + Shift + S, com a ação ao lado. Quadro verde “Memorize” com as iniciais em inglês (Explorer, Desktop, Lock, Run, settings). Depois, oito cartões: Alt + Tab, Alt + F4, F2, Ctrl + Shift + Esc, Ctrl + C, X, V e Z.",
      secao: "Windows",
      bit: BIT_CANTO,
      falas: [
        { texto: "Agora, os atalhos com a tecla Windows. Windows + E abre o Explorador de Arquivos, e Windows + D mostra ou oculta a área de trabalho.", falar: "Agora, os atalhos com a tecla Windows. Windows mais é abre o Explorador de Arquivos, e Windows mais dê mostra ou oculta a área de trabalho." },
        { texto: "Windows + L bloqueia o computador, Windows + R abre a janela Executar, e Windows + I abre as Configurações.", falar: "Windows mais éle bloqueia o computador, Windows mais érre abre a janela Executar, e Windows mais i abre as Configurações." },
        { texto: "Windows + V mostra o histórico da área de transferência, e Windows + Shift + S captura parte da tela.", falar: "Windows mais vê mostra o histórico da área de transferência, e Windows, Shift, ésse captura parte da tela." },
        { texto: "Memorize: as letras vêm das iniciais em inglês. E de Explorer, D de Desktop, L de Lock, R de Run, e I de settings.", falar: "Memorize: as letras vêm das iniciais em inglês. É de Explorer, dê de Desktop, éle de Lock, érre de rân, e i de sétings." },
        { texto: "Outros atalhos: Alt + Tab alterna entre as janelas abertas, Alt + F4 fecha a janela ou o programa ativo, e F2 renomeia o item selecionado.", falar: "Outros atalhos: Alt mais Tab alterna entre as janelas abertas, Alt mais éfe quatro fecha a janela ou o programa ativo, e éfe dois renomeia o item selecionado." },
        { texto: "Ctrl + Shift + Esc abre o Gerenciador de Tarefas. E os clássicos: Ctrl + C copia, Ctrl + X recorta, Ctrl + V cola, e Ctrl + Z desfaz.", falar: "Ctrl, Shift, Esc abre o Gerenciador de Tarefas. E os clássicos: Ctrl cê copia, Ctrl xis recorta, Ctrl vê cola, e Ctrl zê desfaz." },
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        const tit = c.titulo("Atalhos", "A tecla Windows", { left: 140, top: 150 }, c.t(0), { medio: true });
        const linhas = [
          [["Windows", "E"], "abre o Explorador de Arquivos", w(0, "Windows + E")],
          [["Windows", "D"], "mostra/oculta a área de trabalho", w(0, "Windows + D")],
          [["Windows", "L"], "bloqueia o computador", c.t(1)],
          [["Windows", "R"], "abre a janela Executar", w(1, "Windows + R")],
          [["Windows", "I"], "abre as Configurações", w(1, "Windows + I")],
          [["Windows", "V"], "histórico da área de transferência", c.t(2)],
          [["Windows", "Shift", "S"], "captura de parte da tela", w(2, "Windows + Shift")],
        ];
        const fase1 = [tit];
        linhas.forEach((l, i) => {
          const e = c.novo(`<div class="abs" style="left:140px;top:${300 + i * 68}px;display:flex;align-items:center;gap:24px">
            <div style="width:370px">${tecla(...l[0])}</div><span style="font-size:29px;color:var(--texto-suave)">${l[1]}</span></div>`);
          c.entra(e, l[2], "esquerda");
          fase1.push(e);
        });
        const q = c.quadro("dica", "Iniciais em inglês:<br><b>E</b> → Explorer<br><b>D</b> → Desktop<br><b>L</b> → Lock<br><b>R</b> → Run<br><b>I</b> → settings", { left: 1080, top: 300, width: 480 }, c.t(3));
        q.querySelector("p").style.fontSize = "36px";
        fase1.push(q);
        fase1.forEach((e) => c.sai(e, c.t(4) - 0.4));

        c.titulo("Atalhos", "Outros atalhos cobrados", { left: 140, top: 150 }, c.t(4), { medio: true });
        const cards = [
          [["Alt", "Tab"], "alterna entre janelas", w(4, "Alt + Tab")],
          [["Alt", "F4"], "fecha a janela ou o programa", w(4, "Alt + F4")],
          [["F2"], "renomeia o item selecionado", w(4, "F2")],
          [["Ctrl", "Shift", "Esc"], "Gerenciador de Tarefas", c.t(5)],
          [["Ctrl", "C"], "copiar", w(5, "Ctrl + C")],
          [["Ctrl", "X"], "recortar", w(5, "Ctrl + X")],
          [["Ctrl", "V"], "colar", w(5, "Ctrl + V")],
          [["Ctrl", "Z"], "desfazer", w(5, "Ctrl + Z")],
        ];
        cards.forEach((k, i) => {
          const col = i < 4 ? 0 : 1, lin = i % 4;
          const e = c.novo(`<div class="cartao" style="left:${140 + col * 740}px;top:${300 + lin * 135}px;width:${col ? 600 : 700}px;height:115px;padding:0 30px;display:flex;align-items:center;gap:26px">
            <div style="width:${col ? 210 : 330}px">${tecla(...k[0])}</div><span style="font-size:29px;color:var(--texto-suave)">${k[1]}</span></div>`);
          c.entra(e, k[2], "baixo");
        });
      },
    },

    // ----------------------------------------- Windows: arquivos e segurança
    {
      id: "caminhos",
      visual: "Caminho C:\\Users\\Maria\\Documentos\\relatorio.docx montado parte por parte, com as etiquetas “letra da unidade” e “barra invertida”; pílula “caminho absoluto”; caminho relativo ..\\Imagens; fila de caracteres proibidos; cartão Atalho (.lnk). Depois, dez fichas de extensões: .exe, .txt, .docx, .xlsx, .pdf, .jpg, .png, .mp3, .mp4 e .zip.",
      secao: "Windows: arquivos e segurança",
      bit: BIT_CANTO,
      falas: [
        { texto: "No Windows, o caminho começa pela letra da unidade e usa a barra invertida, como em C:\\Users\\Maria\\Documentos\\relatorio.docx.", falar: "No Windows, o caminho começa pela letra da unidade e usa a barra invertida, como em cê, dois pontos, iúzers, Maria, Documentos, relatório ponto dóc xis." },
        { texto: "Esse é um caminho absoluto: completo, desde a unidade. Já o relativo parte da pasta atual, e o .. indica a pasta acima.", falar: "Esse é um caminho absoluto: completo, desde a unidade. Já o relativo parte da pasta atual, e o ponto ponto indica a pasta acima." },
        "Os nomes de arquivos no Windows não podem conter estes caracteres.",
        { texto: "E um atalho, o arquivo .lnk, apenas aponta para o original: apagar o atalho não apaga o arquivo.", falar: "E um atalho, o arquivo ponto éle ene cá, apenas aponta para o original: apagar o atalho não apaga o arquivo." },
        { texto: "Já a extensão indica o tipo do arquivo e qual programa o abre: .exe é executável, .txt é texto simples, .docx é do Word, e .xlsx é do Excel.", falar: "Já a extensão indica o tipo do arquivo e qual programa o abre: ponto é xis é é executável, ponto tê xis tê é texto simples, ponto dóc xis é do Word, e ponto xis éle ésse xis é do Excel." },
        { texto: "Temos ainda o .pdf, o .jpg e o .png, de imagens, o .mp3, de áudio, o .mp4, de vídeo, e o .zip, compactado.", falar: "Temos ainda o pê dê éfe, o jota pê gê e o pê ene gê, de imagens, o ême pê três, de áudio, o ême pê quatro, de vídeo, e o zíp, compactado." },
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        const tit = c.titulo("Arquivos no Windows", "Caminhos e nomes", { left: 140, top: 150 }, c.t(0), { medio: true });
        const partes = ["C:", "\\", "Users", "\\", "Maria", "\\", "Documentos", "\\", "relatorio.docx"];
        const cam = c.novo(`<div class="abs mono" style="left:140px;top:310px;font-size:56px;font-weight:700;white-space:nowrap">${partes.map((p) => `<span style="${p === "\\" ? "color:var(--cor)" : ""}">${p}</span>`).join("")}</div>`);
        const sp = [...cam.children];
        c.entra(sp[0], w(0, "letra"), "pop");
        c.entra(sp[1], w(0, "barra invertida"), "pop");
        sp.slice(2).forEach((s, i) => c.entra(s, w(0, "como em", 0.5 + i * 0.35), "fade"));
        const r1 = c.novo(`<div class="abs" style="left:132px;top:390px;font:600 24px var(--sans);color:var(--texto-suave)">↑ letra da unidade</div>`);
        const r2 = c.novo(`<div class="abs" style="left:205px;top:430px;font:600 24px var(--sans);color:var(--cor)">↑ barra invertida</div>`);
        c.entra(r1, w(0, "letra", 0.3), "fade");
        c.entra(r2, w(0, "barra invertida", 0.3), "fade");
        const abs = c.novo(`<div class="abs pilula" style="left:560px;top:400px">caminho absoluto: completo, desde a unidade</div>`);
        c.entra(abs, c.t(1), "pop");
        const rel = c.novo(`<div class="abs" style="left:140px;top:520px;display:flex;align-items:center;gap:30px"><span class="mono" style="font-size:52px;font-weight:700"><span style="color:var(--cor)">..</span>\\Imagens</span><span style="font-size:30px;color:var(--texto-suave)">caminho <b style="color:var(--texto)">relativo</b> · <b style="color:var(--cor)">..</b> = pasta acima</span></div>`);
        c.entra(rel, w(1, "o relativo"), "baixo");
        c.entra(c.novo(`<div class="abs rotulo" style="left:140px;top:640px;color:var(--errado)">Proibidos em nomes de arquivo</div>`), c.t(2), "fade");
        const proib = c.novo(`<div class="abs" style="left:140px;top:690px;display:flex;gap:12px">${["\\", "/", ":", "*", "?", "\"", "&lt;", "&gt;", "|"].map((x) => `<span class="mono" style="display:grid;place-items:center;width:68px;height:68px;border-radius:14px;background:#fbe9e6;color:var(--errado);font-size:38px;font-weight:700">${x}</span>`).join("")}</div>`);
        [...proib.children].forEach((x, i) => c.entra(x, w(2, "estes", i * 0.15), "pop"));
        const lnk = cartaoH(c, { icone: "atalho", titulo: "Atalho (.lnk)", texto: "aponta para o original: apagá-lo <b>não apaga</b> o arquivo" }, { left: 1000, top: 600, width: 560, height: 200 }, c.t(3));
        [tit, cam, r1, r2, abs, rel, proib, lnk, ...c.el.querySelectorAll(".rotulo")].forEach((e) => c.sai(e, c.t(4) - 0.4));

        c.titulo("Extensões", "O tipo do arquivo", { left: 140, top: 150 }, c.t(4), { medio: true });
        c.texto("nome<b style=\"color:var(--cor)\">.extensão</b> → indica o <b>tipo</b> e o <b>programa</b> que abre", { left: 140, top: 300 }, c.t(4, 0.3));
        const ext = [
          [".exe", "executável", w(4, ".exe")], [".txt", "texto simples", w(4, ".txt")], [".docx", "Word", w(4, ".docx")], [".xlsx", "Excel", w(4, ".xlsx")], [".pdf", "documento PDF", w(5, ".pdf")],
          [".jpg", "imagem", w(5, ".jpg")], [".png", "imagem", w(5, ".png")], [".mp3", "áudio", w(5, ".mp3")], [".mp4", "vídeo", w(5, ".mp4")], [".zip", "compactado", w(5, ".zip")],
        ];
        ext.forEach((k, i) => {
          const e = c.novo(`<div class="cartao" style="left:${140 + (i % 5) * 285}px;top:${400 + Math.floor(i / 5) * 210}px;width:265px;height:180px;padding:26px;text-align:center">
            <div class="mono" style="font-size:52px;font-weight:700;color:var(--cor)">${k[0]}</div><p style="margin-top:14px;font-size:28px">${k[1]}</p></div>`);
          c.entra(e, k[2], "pop");
        });
      },
    },
    {
      id: "contas",
      visual: "Cartões Administrador (pessoa com estrela) e Conta padrão; janela de confirmação do UAC com botões Sim e Não. Linha inferior: Windows Update (setas circulares), Segurança do Windows (escudo; antivírus e firewall) e BitLocker (cadeado; edições Pro e superiores).",
      secao: "Windows: arquivos e segurança",
      bit: BIT_CANTO,
      falas: [
        "Nas contas do Windows, o administrador instala programas e altera configurações. A conta padrão é para o dia a dia, com permissões limitadas.",
        "O Controle de Conta de Usuário, o UAC, pede confirmação antes de uma ação que exige privilégios de administrador.",
        "O Windows Update instala atualizações e correções de segurança.",
        "A Segurança do Windows, com o Microsoft Defender, traz antivírus e firewall integrados.",
        "E o BitLocker criptografa unidades inteiras. Ele está disponível nas edições Pro e superiores.",
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        c.titulo("Segurança no Windows", "Contas e proteção", { left: 140, top: 150 }, c.t(0), { medio: true });
        cartaoH(c, { icone: "admin", titulo: "Administrador", texto: "instala programas e altera configurações" }, { left: 140, top: 300, width: 450, height: 200 }, w(0, "o administrador"));
        cartaoH(c, { icone: "pessoa", titulo: "Conta padrão", texto: "dia a dia, permissões limitadas" }, { left: 620, top: 300, width: 450, height: 200 }, w(0, "A conta padrão"));
        const uac = c.novo(`<div class="abs" style="left:1100px;top:300px;width:460px;height:200px;border-radius:22px;background:#fff;box-shadow:var(--sombra);overflow:hidden">
          <div style="background:var(--cor);color:#fff;font:700 22px var(--sans);padding:12px 22px">Controle de Conta de Usuário (UAC)</div>
          <div style="padding:16px 22px;font:600 26px var(--sans)">Permitir esta alteração?</div>
          <div style="display:flex;gap:14px;padding:0 22px"><span class="pilula" style="background:var(--cor);color:#fff;font-size:24px">Sim</span><span class="pilula" style="font-size:24px">Não</span></div></div>`);
        c.entra(uac, c.t(1), "pop");
        cartaoH(c, { icone: "atualizar", titulo: "Windows Update", texto: "atualizações e correções de segurança" }, { left: 140, top: 540, width: 450, height: 220 }, c.t(2));
        cartaoH(c, { icone: "escudo", titulo: "Segurança do Windows", texto: "Microsoft Defender: <b>antivírus</b> e <b>firewall</b>" }, { left: 620, top: 540, width: 450, height: 220 }, c.t(3));
        cartaoH(c, { icone: "cadeado", titulo: "BitLocker", texto: "criptografa <b>unidades inteiras</b> · Pro e superiores" }, { left: 1100, top: 540, width: 460, height: 220 }, c.t(4));
      },
    },
    {
      id: "restauracao",
      visual: "Quatro cartões: Restauração do Sistema (relógio com seta), Histórico de Arquivos (documento), Arquivos ocultos (olho riscado; Exibir → Itens ocultos) e Pastas compactadas (.zip). Quadro âmbar: Restauração do Sistema não é backup de documentos; a segunda parte, sobre backup, entra na última frase.",
      secao: "Windows: arquivos e segurança",
      bit: BIT_CANTO,
      falas: [
        "A Restauração do Sistema volta as configurações a um ponto de restauração anterior, sem apagar documentos pessoais.",
        "Já o Histórico de Arquivos faz cópias de segurança periódicas das pastas do usuário.",
        "Arquivos ocultos só aparecem no Explorador com a opção Itens ocultos marcada, na guia Exibir. E o Windows cria e abre arquivos zip sem programas adicionais.",
        "Pegadinha: a Restauração do Sistema não é backup de documentos. Ela desfaz alterações em programas, drivers e configurações.",
        "Para proteger os arquivos pessoais, use backup, como o Histórico de Arquivos ou a nuvem.",
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        c.titulo("Mais recursos", "Restauração, backup e mais", { left: 140, top: 150 }, c.t(0), { medio: true });
        const k = [
          { icone: "restaurar", titulo: "Restauração do Sistema", texto: "volta as <b>configurações</b> a um ponto anterior", t: c.t(0) },
          { icone: "documento", titulo: "Histórico de Arquivos", texto: "cópias periódicas das <b>pastas do usuário</b>", t: c.t(1) },
          { icone: "olho", titulo: "Arquivos ocultos", texto: "Exibir → <b>Itens ocultos</b>", t: c.t(2) },
          { icone: "pacote", titulo: "Pastas compactadas", texto: "cria e abre <b>.zip</b> sem programas extras", t: w(2, "E o Windows") },
        ];
        k.forEach((o, i) => cartaoH(c, o, { left: 140 + (i % 2) * 720, top: 300 + Math.floor(i / 2) * 190, width: 690, height: 170 }, o.t));
        const q = c.quadro("prova", `Restauração do Sistema <b>não é backup</b>: desfaz alterações em programas, drivers e configurações.<span class="p2" style="display:block;margin-top:10px">Arquivos pessoais: <b>Histórico de Arquivos</b> ou <b>nuvem</b>.</span>`, { left: 140, top: 700, width: 1400 }, c.t(3));
        q.querySelector("p").style.fontSize = "33px";
        q.style.padding = "30px 44px";
        c.entra(q.querySelector(".p2"), c.t(4), "baixo");
      },
    },

    // ---------------------------------------------------------------- Linux
    {
      id: "linux",
      visual: "Equação: Kernel Linux + Ferramentas GNU + Outros programas = Distribuição, com as informações “código aberto · Linus Torvalds · 1991 · GPL”, as distribuições e as características em pílulas. Depois, os arquivos Relatorio.txt ≠ relatorio.txt (maiúsculas importam), o cartão root e um terminal com sudo.",
      secao: "Linux",
      bit: BIT_CANTO,
      falas: [
        "Agora, o Linux. Ele é um kernel de código aberto, criado por Linus Torvalds em 1991, sob a licença GPL.",
        "O kernel é combinado com ferramentas do projeto GNU e outros programas para formar as distribuições, como Ubuntu, Debian, Fedora, Mint e Red Hat.",
        "O Linux é multiusuário e multitarefa, domina o mercado de servidores e é a base do Android.",
        { texto: "E ele diferencia maiúsculas de minúsculas: Relatorio.txt, com R maiúsculo, e relatorio.txt, com r minúsculo, são arquivos diferentes.", falar: "E ele diferencia maiúsculas de minúsculas: relatório ponto tê xis tê, com érre maiúsculo, e relatório ponto tê xis tê, com érre minúsculo, são arquivos diferentes." },
        "O superusuário, o administrador, se chama root.",
        "E o comando sudo executa um comando com privilégios de administrador.",
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        const tit = c.titulo("Linux", "Kernel + programas = distribuição", { left: 140, top: 150 }, c.t(0), { medio: true });
        const f1 = [tit];
        const nos = [
          [{ icone: "engrenagem", titulo: "Kernel Linux" }, 140, w(0, "kernel")],
          [{ icone: "ferramenta", titulo: "Ferramentas GNU" }, 520, w(1, "ferramentas")],
          [{ icone: "janela", titulo: "Outros programas" }, 900, w(1, "outros programas")],
          [{ icone: "pacote", titulo: "Distribuição" }, 1280, w(1, "formar")],
        ];
        nos.forEach(([o, x, t]) => {
          const e = c.no(o, { left: x, top: 290, width: 280, height: 200, padding: "18px" }, t);
          e.querySelector(".icone").style.cssText = "width:80px;height:80px;margin-bottom:10px";
          e.querySelector("strong").style.fontSize = "28px";
          f1.push(e);
        });
        [["+", 438, w(1, "ferramentas")], ["+", 818, w(1, "outros programas")], ["=", 1198, w(1, "formar")]].forEach(([s, x, t]) => {
          f1.push(c.entra(c.novo(`<div class="abs" style="left:${x}px;top:350px;width:64px;text-align:center;font:800 60px var(--sans);color:var(--texto-fraco)">${s}</div>`), t, "pop"));
        });
        const fatos = c.novo(`<div class="abs" style="left:140px;top:530px;display:flex;gap:12px">${["código aberto", "Linus Torvalds", "1991", "licença GPL"].map((x) => `<span class="pilula" style="background:#fff;box-shadow:var(--sombra)">${x}</span>`).join("")}</div>`);
        [...fatos.children].forEach((p, i) => c.entra(p, w(0, ["código", "Linus", "1991", "GPL"][i]), "pop"));
        f1.push(fatos);
        const distros = c.novo(`<div class="abs" style="left:140px;top:630px;display:flex;align-items:center;gap:12px"><span class="rotulo" style="margin-right:8px">Distribuições</span>${["Ubuntu", "Debian", "Fedora", "Mint", "Red Hat"].map((x) => `<span class="pilula">${x}</span>`).join("")}</div>`);
        c.entra(distros, w(1, "como Ubuntu"), "baixo");
        f1.push(distros);
        const carac = c.novo(`<div class="abs" style="left:140px;top:730px;display:flex;gap:12px">${["multiusuário", "multitarefa", "domina os servidores", "base do Android"].map((x) => `<span class="pilula ok">${x}</span>`).join("")}</div>`);
        [...carac.children].forEach((p, i) => c.entra(p, w(2, ["multiusuário", "multitarefa", "domina", "base do"][i]), "pop"));
        f1.push(carac);
        f1.forEach((e) => c.sai(e, c.t(3) - 0.4));

        c.titulo("Linux", "Detalhes que caem na prova", { left: 140, top: 150 }, c.t(3), { medio: true });
        const arq = (x, nome) => c.novo(`<div class="cartao" style="left:${x}px;top:300px;width:520px;height:150px;display:flex;align-items:center;gap:22px;padding:26px 32px">${icone("documento")}<span class="mono" style="font-size:44px;font-weight:700">${nome}</span></div>`);
        const a1 = arq(140, `<span style="color:var(--cor)">R</span>elatorio.txt`);
        const a2 = arq(820, `<span style="color:var(--cor)">r</span>elatorio.txt`);
        [a1, a2].forEach((a) => (a.querySelector(".icone").style.cssText = "margin:0;width:72px;height:72px"));
        c.entra(a1, w(3, "Relatorio"), "esquerda");
        c.entra(a2, w(3, "relatorio.txt"), "direita");
        c.entra(c.novo(`<div class="abs" style="left:680px;top:322px;font:800 80px var(--sans);color:var(--errado)">≠</div>`), w(3, "são arquivos"), "pop");
        c.entra(c.novo(`<div class="abs pilula" style="left:140px;top:480px">diferencia <b>maiúsculas</b> de <b>minúsculas</b></div>`), w(3, "são arquivos", 0.3), "baixo");
        cartaoH(c, { icone: "admin", titulo: "root", texto: "o superusuário (administrador)" }, { left: 140, top: 600, width: 560, height: 180 }, c.t(4));
        terminal(c, [`<span class="p">$</span> sudo comando`, `<span class="k"># executa como administrador</span>`], { left: 760, top: 600, width: 800, height: 200 }, [c.t(5), c.t(5, 1.2)]);
      },
    },
    {
      id: "diretorios",
      visual: "Árvore de diretórios: a raiz “/” no alto, ligada a dez pastas em duas fileiras, que surgem na frase que as cita: /home, /root, /etc, /bin e /sbin, /usr, /var, /tmp, /dev, /boot, /media e /mnt. Quadro âmbar: / (raiz) ≠ /root (pasta do administrador).",
      secao: "Linux",
      bit: BIT_CANTO,
      falas: [
        { texto: "No Linux, tudo parte de um único diretório raiz, representado pela barra. Não existem letras de unidade, como C: ou D:.", falar: "No Linux, tudo parte de um único diretório raiz, representado pela barra. Não existem letras de unidade, como cê ou dê." },
        { texto: "Em /home ficam as pastas pessoais dos usuários, como /home/maria. E /root é a pasta pessoal do superusuário.", falar: "Em barra rôme ficam as pastas pessoais dos usuários, como barra rôme barra maria. E barra root é a pasta pessoal do superusuário." },
        { texto: "O /etc guarda os arquivos de configuração do sistema. O /bin e o /sbin têm os comandos essenciais e os de administração.", falar: "O barra é tê cê guarda os arquivos de configuração do sistema. O barra bin e o barra ésse bin têm os comandos essenciais e os de administração." },
        { texto: "O /usr guarda os programas e bibliotecas instalados. O /var, dados variáveis, como os logs. E o /tmp, os arquivos temporários.", falar: "O barra u ésse érre guarda os programas e bibliotecas instalados. O barra var, dados variáveis, como os logs. E o barra tê ême pê, os arquivos temporários." },
        { texto: "O /dev tem arquivos que representam dispositivos, e o /boot, os de inicialização e o kernel. Já /media e /mnt são pontos de montagem de pen drives e outras unidades.", falar: "O barra dév tem arquivos que representam dispositivos, e o barra boot, os de inicialização e o kernel. Já barra mídia e barra ême ene tê são pontos de montagem de pen drives e outras unidades." },
        { texto: "Pegadinha: não confunda a barra, que é a raiz do sistema, com /root, a pasta pessoal do administrador.", falar: "Pegadinha: não confunda a barra, que é a raiz do sistema, com barra root, a pasta pessoal do administrador." },
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        c.titulo("Diretórios", "Uma árvore a partir da raiz", { left: 140, top: 150 }, c.t(0), { medio: true });
        const raiz = c.novo(`<div class="bloco mono" style="left:140px;top:290px;width:120px;height:90px;background:var(--cor);color:#fff;font-size:56px">/</div>`);
        c.entra(raiz, w(0, "raiz"), "pop");
        c.entra(c.novo(`<div class="abs" style="left:300px;top:305px;font:600 30px var(--sans);color:var(--texto-suave)">raiz · <span style="text-decoration:line-through;color:var(--errado)">C:</span> <span style="text-decoration:line-through;color:var(--errado)">D:</span> não existem</div>`), w(0, "Não existem"), "fade");
        const pastas = [
          ["/home", "pastas dos usuários", w(1, "/home")],
          ["/root", "pasta do superusuário", w(1, "E /root")],
          ["/etc", "configurações", c.t(2)],
          ["/bin · /sbin", "comandos essenciais · de administração", w(2, "O /bin")],
          ["/usr", "programas e bibliotecas", c.t(3)],
          ["/var", "dados variáveis (logs)", w(3, "O /var")],
          ["/tmp", "temporários", w(3, "/tmp")],
          ["/dev", "dispositivos", c.t(4)],
          ["/boot", "inicialização e kernel", w(4, "/boot")],
          ["/media · /mnt", "pontos de montagem", w(4, "Já /media")],
        ];
        const linhas = c.novo(`<svg class="abs" style="left:0;top:0;width:1920px;height:1080px" viewBox="0 0 1920 1080">
          <path d="M200 380 V690" stroke="var(--cor-media)" stroke-width="6" fill="none"/>
          <path d="M200 420 H1405" stroke="var(--cor-media)" stroke-width="6" fill="none"/>
          <path d="M200 610 H1405" stroke="var(--cor-media)" stroke-width="6" fill="none"/></svg>`);
        linhas.querySelectorAll("path").forEach((p, i) => c.desenhar(p, w(0, "raiz", 0.4 + i * 0.3)));
        pastas.forEach((p, i) => {
          const col = i % 5, lin = Math.floor(i / 5);
          const e = c.novo(`<div class="no" style="left:${260 + col * 265}px;top:${440 + lin * 190}px;width:245px;height:150px;padding:14px 16px">
            <strong class="mono" style="font-size:${p[0].length > 7 ? 26 : 34}px;color:var(--cor)">${p[0]}</strong><span style="font-size:21px;line-height:1.25">${p[1]}</span></div>`);
          c.entra(e, p[2], "pop");
        });
        c.quadro("prova", "<b>/</b> é a raiz do sistema. <b>/root</b> é a pasta pessoal do administrador.", { left: 140, top: 800, width: 1400 }, c.t(5)).querySelector("p").style.fontSize = "34px";
      },
    },

    // ------------------------------------------------------ Terminal do Linux
    {
      id: "comandos",
      visual: "Duas colunas de comandos, cada um em uma etiqueta monoespaçada com a função ao lado, entrando quando citados: pwd, ls, cd, mkdir, cp, mv, rm | cat, chmod, chown, sudo, ps / kill, man.",
      secao: "Terminal do Linux",
      bit: BIT_CANTO,
      falas: [
        { texto: "Agora, os comandos básicos. O pwd mostra o diretório atual, o ls lista arquivos e pastas, e o ls -l mostra detalhes e permissões. O cd muda de diretório.", falar: "Agora, os comandos básicos. O pê dáblio dê mostra o diretório atual, o éle ésse lista arquivos e pastas, e o éle ésse traço éle mostra detalhes e permissões. O cê dê muda de diretório." },
        { texto: "O mkdir cria um diretório, o cp copia arquivos, e o mv move ou renomeia.", falar: "O ême cá dir cria um diretório, o cê pê copia arquivos, e o ême vê move ou renomeia." },
        { texto: "O rm remove arquivos, e o rm -r remove diretórios. O cat exibe o conteúdo de um arquivo.", falar: "O érre ême remove arquivos, e o érre ême traço érre remove diretórios. O cát exibe o conteúdo de um arquivo." },
        { texto: "O chmod altera permissões, o chown altera o dono do arquivo, e o sudo executa um comando como administrador.", falar: "O cê agá mód altera permissões, o cê agá ôun altera o dono do arquivo, e o sudo executa um comando como administrador." },
        { texto: "O ps lista os processos, o kill encerra um processo, e o man abre o manual de um comando.", falar: "O pê ésse lista os processos, o kíl encerra um processo, e o mén abre o manual de um comando." },
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        c.titulo("Terminal", "Comandos básicos", { left: 140, top: 150 }, c.t(0), { medio: true });
        const cmds = [
          ["pwd", "mostra o diretório atual", w(0, "O pwd")],
          ["ls", "lista arquivos · <b>ls -l</b>: detalhes e permissões", w(0, "o ls lista")],
          ["cd", "muda de diretório", w(0, "O cd")],
          ["mkdir", "cria diretório", c.t(1)],
          ["cp", "copia arquivos", w(1, "o cp")],
          ["mv", "move ou renomeia", w(1, "o mv")],
          ["rm", "remove · <b>rm -r</b>: diretórios", c.t(2)],
          ["cat", "exibe o conteúdo", w(2, "O cat")],
          ["chmod", "altera permissões", c.t(3)],
          ["chown", "altera o dono", w(3, "o chown")],
          ["sudo", "executa como administrador", w(3, "o sudo")],
          ["ps · kill", "lista · encerra processos", c.t(4)],
          ["man", "abre o manual", w(4, "o man")],
        ];
        cmds.forEach((k, i) => {
          const col = i < 7 ? 0 : 1, lin = col ? i - 7 : i;
          const e = c.novo(`<div class="linha-cmd" style="left:${140 + col * 820}px;top:${300 + lin * 72}px"><span class="cmd">${k[0]}</span><span>${k[1]}</span></div>`);
          c.entra(e, k[2], "esquerda");
        });
      },
    },
    {
      id: "mais-comandos",
      visual: "Grade de onze fichas de comando (nome em fonte monoespaçada e função), entrando quando citadas: touch, find, grep, tar, nano / vi, apt / dnf, df / du, top, ip addr (e ifconfig), passwd e whoami.",
      secao: "Terminal do Linux",
      bit: BIT_CANTO,
      falas: [
        { texto: "Mais comandos cobrados: o touch cria um arquivo vazio ou atualiza a data de modificação. O find procura arquivos pelo nome e outros critérios, e o grep procura um texto dentro de arquivos.", falar: "Mais comandos cobrados: o tâtch cria um arquivo vazio ou atualiza a data de modificação. O fáind procura arquivos pelo nome e outros critérios, e o grép procura um texto dentro de arquivos." },
        { texto: "O tar agrupa e compacta arquivos. O nano e o vi são editores de texto no terminal.", falar: "O tár agrupa e compacta arquivos. O nâno e o vê i são editores de texto no terminal." },
        { texto: "O apt e o dnf instalam e atualizam programas: o apt no Debian e no Ubuntu, e o dnf no Fedora.", falar: "O á pê tê e o dê ene éfe instalam e atualizam programas: o á pê tê no Debian e no Ubuntu, e o dê ene éfe no Fedora." },
        { texto: "O df mostra o espaço livre nos discos, e o du, o espaço ocupado por pastas. O top mostra os processos e o uso de CPU e memória em tempo real.", falar: "O dê éfe mostra o espaço livre nos discos, e o dê u, o espaço ocupado por pastas. O tóp mostra os processos e o uso de CPU e memória em tempo real." },
        { texto: "O ip addr mostra os endereços de rede, e o antigo ifconfig também é cobrado. O passwd altera a senha, e o whoami mostra o usuário atual.", falar: "O i pê ádres mostra os endereços de rede, e o antigo if cónfig também é cobrado. O pás uórd altera a senha, e o rú ém ái mostra o usuário atual." },
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        c.titulo("Terminal", "Mais comandos", { left: 140, top: 150 }, c.t(0), { medio: true });
        const cmds = [
          ["touch", "cria arquivo vazio ou atualiza a data", w(0, "o touch")],
          ["find", "procura arquivos por nome e critérios", w(0, "O find")],
          ["grep", "procura texto dentro de arquivos", w(0, "o grep")],
          ["tar", "agrupa e compacta arquivos", c.t(1)],
          ["nano · vi", "editores de texto no terminal", w(1, "O nano")],
          ["apt · dnf", "instalam programas (Debian/Ubuntu · Fedora)", c.t(2)],
          ["df · du", "espaço livre nos discos · ocupado por pastas", c.t(3)],
          ["top", "processos, CPU e memória em tempo real", w(3, "O top")],
          ["ip addr", "endereços de rede (antigo: ifconfig)", c.t(4)],
          ["passwd", "altera a senha", w(4, "O passwd")],
          ["whoami", "mostra o usuário atual", w(4, "o whoami")],
        ];
        cmds.forEach((k, i) => {
          const col = i % 4, lin = Math.floor(i / 4);
          const e = c.novo(`<div class="cartao" style="left:${140 + col * 355}px;top:${300 + lin * 175}px;width:335px;height:155px;padding:22px 24px">
            <span class="cmd" style="font-size:32px">${k[0]}</span><p style="margin-top:12px;font-size:24px;line-height:1.3">${k[1]}</p></div>`);
          c.entra(e, k[2], "pop");
        });
      },
    },
    {
      id: "terminal",
      visual: "Três fichas de símbolos: ~ (pasta pessoal), . (diretório atual) e .. (diretório acima), e as pílulas “absoluto: começa com /” e “relativo: parte do diretório atual”; terminal com ls -a revelando o .bashrc oculto. Depois, terminal com três linhas (>, >> e |), cada uma explicada por um cartão à direita.",
      secao: "Terminal do Linux",
      bit: BIT_CANTO,
      falas: [
        { texto: "No terminal, o til representa a pasta pessoal do usuário, como /home/maria. O ponto é o diretório atual, e o ponto ponto é o diretório acima.", falar: "No terminal, o til representa a pasta pessoal do usuário, como barra rôme barra maria. O ponto é o diretório atual, e o ponto ponto é o diretório acima." },
        "O caminho absoluto começa com a barra; o relativo parte do diretório atual.",
        { texto: "Arquivos cujo nome começa com ponto, como o .bashrc, são ocultos. Eles aparecem com ls -a.", falar: "Arquivos cujo nome começa com ponto, como o ponto bésh érre cê, são ocultos. Eles aparecem com éle ésse traço á." },
        "Agora, três símbolos que as bancas adoram. O sinal de maior grava a saída de um comando em um arquivo, substituindo o conteúdo.",
        "Dois sinais de maior acrescentam a saída ao final do arquivo.",
        "E a barra vertical, o pipe, envia a saída de um comando para o próximo.",
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        const tit = c.titulo("Terminal", "Caminhos e arquivos ocultos", { left: 140, top: 150 }, c.t(0), { medio: true });
        const f1 = [tit];
        [["~", "pasta pessoal<br>(/home/maria)", w(0, "o til")], [".", "diretório atual", w(0, "O ponto")], ["..", "diretório acima", w(0, "ponto ponto")]].forEach((k, i) => {
          const e = c.novo(`<div class="cartao" style="left:${140 + i * 330}px;top:300px;width:300px;height:220px;text-align:center;padding:24px">
            <div class="mono" style="font-size:84px;font-weight:700;color:var(--cor);line-height:1.1">${k[0]}</div><p style="margin-top:8px;font-size:27px">${k[1]}</p></div>`);
          f1.push(c.entra(e, k[2], "pop"));
        });
        f1.push(c.entra(c.novo(`<div class="abs pilula" style="left:1150px;top:330px">absoluto: começa com <b class="mono">/</b></div>`), c.t(1), "pop"));
        f1.push(c.entra(c.novo(`<div class="abs pilula" style="left:1150px;top:420px">relativo: parte do atual</div>`), w(1, "o relativo"), "pop"));
        f1.push(terminal(c, [
          `<span class="p">$</span> ls -a`,
          `.  ..  <span style="color:#fbbf24">.bashrc</span>  Documentos`,
        ], { left: 140, top: 580, width: 1000, height: 200 }, [w(2, "ls -a"), w(2, "ls -a", 0.6)], c.t(2)));
        f1.push(c.entra(c.novo(`<div class="abs pilula alerta" style="left:1180px;top:640px">nome com ponto = oculto</div>`), w(2, "são ocultos"), "pop"));
        f1.forEach((e) => c.sai(e, c.t(3) - 0.4));

        c.titulo("Terminal", "Redirecionamento e pipe", { left: 140, top: 150 }, c.t(3), { medio: true });
        terminal(c, [
          `<span class="p">$</span> ls -l <b style="color:#fbbf24">&gt;</b> lista.txt`,
          `<span class="p">$</span> ls -l <b style="color:#fbbf24">&gt;&gt;</b> lista.txt`,
          `<span class="p">$</span> cat lista.txt <b style="color:#fbbf24">|</b> grep pdf`,
        ], { left: 140, top: 320, width: 900, height: 320 }, [w(3, "O sinal"), c.t(4), c.t(5)], c.t(3, 1));
        [[">", "grava, <b>substituindo</b> o conteúdo", w(3, "O sinal", 0.5)], [">>", "<b>acrescenta</b> ao final", c.t(4, 0.4)], ["|", "pipe: saída → <b>próximo comando</b>", c.t(5, 0.6)]].forEach((k, i) => {
          const e = c.novo(`<div class="cartao" style="left:1100px;top:${300 + i * 165}px;width:460px;height:145px;display:flex;align-items:center;gap:26px;padding:20px 30px">
            <span class="mono" style="font-size:60px;font-weight:700;color:var(--cor);min-width:90px;text-align:center">${k[0].replace(/>/g, "&gt;")}</span><p style="font-size:28px">${k[1]}</p></div>`);
          c.entra(e, k[2], "direita");
        });
      },
    },

    // -------------------------------------------------- Permissões no Linux
    {
      id: "permissoes",
      visual: "Três fichas grandes: r = 4 (leitura · read), w = 2 (escrita · write) e x = 1 (execução · execute). Abaixo, três grupos na ordem Dono → Grupo → Outros, com setas. À direita, a conta 4 + 2 + 1 = 7 e a faixa “cada grupo: um dígito de 0 a 7”.",
      secao: "Permissões no Linux",
      bit: BIT_CANTO,
      falas: [
        { texto: "Cada arquivo do Linux tem três tipos de permissão. Leitura, em inglês read, é a letra r e vale 4.", falar: "Cada arquivo do Linux tem três tipos de permissão. Leitura, em inglês ríd, é a letra érre e vale quatro." },
        { texto: "Escrita, write, é a letra w e vale 2.", falar: "Escrita, ráit, é a letra dáblio e vale dois." },
        { texto: "E execução, execute, é a letra x e vale 1.", falar: "E execução, éksequiut, é a letra xis e vale um." },
        "As permissões são definidas, nesta ordem, para o dono, o grupo e os outros.",
        "Somando os valores, cada um recebe um dígito de 0 a 7.",
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        c.titulo("Permissões", "Ler, escrever e executar", { left: 140, top: 150 }, c.t(0), { medio: true });
        [["r", "4", "Leitura · read", w(0, "Leitura")], ["w", "2", "Escrita · write", c.t(1)], ["x", "1", "Execução · execute", c.t(2)]].forEach((k, i) => {
          const e = c.novo(`<div class="cartao" style="left:${140 + i * 330}px;top:300px;width:300px;height:240px;text-align:center;padding:24px">
            <div style="display:flex;justify-content:center;align-items:baseline;gap:18px"><span class="mono" style="font-size:96px;font-weight:700;color:var(--cor)">${k[0]}</span><span style="font:800 64px var(--sans);color:var(--texto)">= ${k[1]}</span></div>
            <p style="margin-top:12px;font-size:28px">${k[2]}</p></div>`);
          c.entra(e, k[3], "pop");
        });
        [["pessoa", "Dono", "usuário"], ["pessoas", "Grupo", ""], ["publico", "Outros", ""]].forEach((k, i) => {
          const e = c.no({ icone: k[0], titulo: k[1], texto: k[2] }, { left: 140 + i * 330, top: 600, width: 300, height: 200, padding: "16px" }, w(3, ["o dono", "o grupo", "os outros"][i]));
          e.querySelector(".icone").style.cssText = "width:76px;height:76px;margin-bottom:8px";
          if (i > 0) c.seta(140 + i * 330 - 26, 700, 140 + i * 330 - 4, 700, w(3, ["o dono", "o grupo", "os outros"][i], -0.2), { largura: 6 });
        });
        c.entra(c.novo(`<div class="abs rotulo" style="left:140px;top:560px">Nesta ordem</div>`), c.t(3), "fade");
        const conta = c.novo(`<div class="abs" style="left:1180px;top:330px;font:800 64px var(--sans);line-height:1.3">4 + 2 + 1<br><span style="color:var(--cor)">= 7</span></div>`);
        c.entra(conta, c.t(4, 0.3), "zoom");
        c.entra(c.novo(`<div class="abs cartao" style="left:1180px;top:560px;width:380px;padding:28px"><h3 style="font-size:32px">um dígito</h3><p>de <b>0</b> a <b>7</b> para cada grupo</p></div>`), w(4, "dígito"), "baixo");
      },
    },
    {
      id: "chmod",
      visual: "Comando “chmod 754 relatorio.sh” no alto. Três colunas — Dono 7 (4+2+1, rwx), Grupo 5 (4+0+1, r-x) e Outros 4 (4+0+0, r--) — preenchidas frase a frase. Linha do ls -l: -rwxr-xr--. Depois, exercício chmod 640 com o grupo destacado (4 = somente leitura) e quadro verde “Memorize”.",
      secao: "Permissões no Linux",
      bit: BIT_CANTO,
      falas: [
        { texto: "Veja o exemplo: chmod 754 relatorio.sh.", falar: "Veja o exemplo: cê agá mód sete cinco quatro, relatório ponto ésse agá." },
        { texto: "O dono recebe 7: 4, mais 2, mais 1. Ou seja, rwx: ler, escrever e executar.", falar: "O dono recebe sete: quatro, mais dois, mais um. Ou seja, érre, dáblio, xis: ler, escrever e executar." },
        { texto: "O grupo recebe 5: 4, mais 0, mais 1. É r-x: ler e executar.", falar: "O grupo recebe cinco: quatro, mais zero, mais um. É érre, traço, xis: ler e executar." },
        { texto: "E os outros recebem 4: r--, apenas ler. No ls -l, tudo aparece assim: -rwxr-xr--.", falar: "E os outros recebem quatro: érre, traço, traço, apenas ler. No éle ésse traço éle, tudo aparece assim: traço, érre dáblio xis, érre traço xis, érre traço traço." },
        { texto: "Treine com o chmod 640: o grupo recebeu 4, ou seja, somente leitura.", falar: "Treine com o cê agá mód seis quatro zero: o grupo recebeu quatro, ou seja, somente leitura." },
        { texto: "Memorize: r vale 4, w vale 2 e x vale 1. E a ordem dos dígitos é sempre dono, grupo e outros.", falar: "Memorize: érre vale quatro, dáblio vale dois e xis vale um. E a ordem dos dígitos é sempre dono, grupo e outros." },
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        const tit = c.titulo("Exemplo", "Lendo um chmod", { left: 140, top: 150 }, c.t(0), { medio: true });
        const cmd = c.novo(`<div class="abs mono" style="left:140px;top:290px;font-size:54px;font-weight:700">chmod <span style="color:var(--cor)">754</span> relatorio.sh</div>`);
        c.entra(cmd, c.t(0, 0.3), "baixo");
        const cols = [
          ["Dono", "7", "4 + 2 + 1", "rwx", "ler, escrever e executar", c.t(1)],
          ["Grupo", "5", "4 + 0 + 1", "r-x", "ler e executar", c.t(2)],
          ["Outros", "4", "4 + 0 + 0", "r--", "apenas ler", c.t(3)],
        ];
        const f1 = [tit, cmd];
        cols.forEach((k, i) => {
          const e = c.novo(`<div class="cartao" style="left:${140 + i * 470}px;top:390px;width:440px;height:330px;text-align:center;padding:26px">
            <div class="rotulo">${k[0]}</div><div class="mono" style="font-size:96px;font-weight:700;color:var(--cor);line-height:1.15">${k[1]}</div>
            <div style="font:700 32px var(--sans);color:var(--texto-suave)">= ${k[2]}</div>
            <div class="mono" style="font-size:52px;font-weight:700;margin-top:8px">${k[3]}</div><p style="font-size:26px">${k[4]}</p></div>`);
          f1.push(c.entra(e, k[5], "baixo"));
        });
        const ls = c.novo(`<div class="abs" style="left:140px;top:760px;display:flex;align-items:center;gap:26px"><span class="cmd">ls -l</span><span class="mono" style="font-size:50px;font-weight:700">-<span style="color:var(--cor)">rwx</span>r-x<span style="color:var(--cor)">r--</span></span><span class="mono" style="font-size:34px;color:var(--texto-suave)">relatorio.sh</span></div>`);
        c.entra(ls, w(3, "No ls -l"), "baixo");
        f1.push(ls);
        f1.forEach((e) => c.sai(e, c.t(4) - 0.4));

        c.titulo("Treine", "chmod 640", { left: 140, top: 150 }, c.t(4), { medio: true });
        [["Dono", "6", "rw-"], ["Grupo", "4", "r-- · somente leitura"], ["Outros", "0", "---"]].forEach((k, i) => {
          const e = c.novo(`<div class="cartao" style="left:${140 + i * 470}px;top:300px;width:440px;height:240px;text-align:center;padding:24px">
            <div class="rotulo">${k[0]}</div><div class="mono" style="font-size:84px;font-weight:700;color:var(--cor);line-height:1.15">${k[1]}</div><div class="mono" style="font-size:34px;font-weight:700">${k[2]}</div></div>`);
          c.entra(e, c.t(4, 0.4 + i * 0.3), "pop");
          if (i === 1) c.tl.to(e, { boxShadow: "0 0 0 8px var(--cor), 0 18px 40px rgba(26,34,48,.1)", duration: 0.4 }, w(4, "o grupo"));
        });
        c.quadro("dica", "<b>r = 4 · w = 2 · x = 1</b> → 7 (rwx), 6 (rw-), 5 (r-x), 4 (r--), 0 (---).<br>Ordem: <b>dono, grupo, outros</b>.", { left: 140, top: 600, width: 1400 }, c.t(5)).querySelector("p").style.fontSize = "36px";
      },
    },
    {
      id: "chmod-simbolico",
      visual: "Fichas das letras u (dono), g (grupo), o (outros) e a (todos), e dos sinais + (adiciona), - (remove) e = (define exatamente). Terminal com chmod u+x, chmod g-w, chmod o=r e chown maria dados.txt, cada linha com o comentário do que faz.",
      secao: "Permissões no Linux",
      bit: BIT_CANTO,
      falas: [
        { texto: "O chmod também aceita letras, no modo simbólico: u é o dono, g é o grupo, o são os outros, e a são todos.", falar: "O cê agá mód também aceita letras, no modo simbólico: u é o dono, gê é o grupo, ó são os outros, e á são todos." },
        "O sinal de mais adiciona, o de menos remove, e o de igual define exatamente.",
        { texto: "Assim, chmod u+x dá execução ao dono, chmod g-w retira a escrita do grupo, e chmod o=r deixa os outros só com leitura.", falar: "Assim, cê agá mód u mais xis dá execução ao dono, cê agá mód gê menos dáblio retira a escrita do grupo, e cê agá mód ó igual érre deixa os outros só com leitura." },
        { texto: "E, para mudar o dono do arquivo, use o chown: chown maria dados.txt.", falar: "E, para mudar o dono do arquivo, use o cê agá ôun: cê agá ôun maria, dados ponto tê xis tê." },
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        c.titulo("Modo simbólico", "chmod com letras", { left: 140, top: 150 }, c.t(0), { medio: true });
        const ficha = (x, l, d, t) => {
          const e = c.novo(`<div class="cartao" style="left:${x}px;top:300px;width:170px;height:170px;text-align:center;padding:18px"><div class="mono" style="font-size:72px;font-weight:700;color:var(--cor);line-height:1.1">${l}</div><p style="font-size:24px;margin-top:6px">${d}</p></div>`);
          return c.entra(e, t, "pop");
        };
        [["u", "dono", "u é"], ["g", "grupo", "g é"], ["o", "outros", "o são"], ["a", "todos", "a são"]].forEach((k, i) => ficha(140 + i * 190, k[0], k[1], w(0, k[2])));
        [["+", "adiciona", "mais"], ["-", "remove", "menos"], ["=", "define", "igual"]].forEach((k, i) => ficha(960 + i * 200, k[0], k[1], w(1, k[2])));
        terminal(c, [
          `<span class="p">$</span> chmod u+x script.sh   <span class="k"># execução para o dono</span>`,
          `<span class="p">$</span> chmod g-w dados.txt   <span class="k"># tira a escrita do grupo</span>`,
          `<span class="p">$</span> chmod o=r dados.txt   <span class="k"># outros: só leitura</span>`,
          `<span class="p">$</span> chown maria dados.txt <span class="k"># novo dono: maria</span>`,
        ], { left: 140, top: 520, width: 1400, height: 330, fontSize: "31px" }, [w(2, "chmod u+x"), w(2, "chmod g-w"), w(2, "chmod o=r"), w(3, "chown maria")], w(2, "chmod u+x", -0.3));
      },
    },

    // ------------------------------------------------------ Windows × Linux
    {
      id: "comparacao",
      visual: "Tabela Aspecto / Windows / Linux com oito linhas, duas por frase: licença, código-fonte, kernel, sistema de arquivos, unidades, maiúsculas e minúsculas, administrador e uso mais comum. Na última frase, a tabela sai e entra o quadro âmbar: o Linux tem licença, a GPL.",
      secao: "Windows × Linux",
      bit: BIT_CANTO,
      falas: [
        "Para fechar, Windows contra Linux. O Windows é proprietário, da Microsoft, com código fechado. O Linux é software livre, com licença GPL, e código aberto.",
        "O kernel do Windows é híbrido, o NT; o do Linux é monolítico. O sistema de arquivos padrão é o NTFS no Windows, e o ext4 na maioria das distribuições Linux.",
        "O Windows usa letras para as unidades, como C e D; o Linux, uma árvore única a partir da barra. E só o Linux diferencia maiúsculas de minúsculas nos nomes de arquivos.",
        "O administrador é a conta de Administrador no Windows, e o root no Linux. O Windows é mais comum em computadores pessoais e empresas; o Linux, em servidores, supercomputadores e no Android.",
        "Última pegadinha: dizer que o Linux é gratuito porque não possui licença está errado. Ele possui licença, sim: a GPL, que garante as liberdades do software livre.",
      ],
      montar(c) {
        const w = (i, s, d) => em(c, this, i, s, d);
        const tit = c.titulo("Comparação", "Windows × Linux", { left: 140, top: 150 }, c.t(0), { medio: true });
        const tab = c.tabela(["Aspecto", "Windows", "Linux"], [
          ["Licença", "proprietária (Microsoft)", "software livre (GPL)"],
          ["Código-fonte", "fechado", "aberto"],
          ["Kernel", "híbrido (Windows NT)", "monolítico"],
          ["Sistema de arquivos", "NTFS", "ext4 (na maioria)"],
          ["Unidades", "letras (C:, D:)", "árvore única a partir de /"],
          ["Maiúsculas/minúsculas", "não diferencia", "diferencia"],
          ["Administrador", "conta de Administrador", "root"],
          ["Uso mais comum", "PCs e empresas", "servidores, supercomputadores, Android"],
        ], { left: 140, top: 290, width: 1420 }, c.t(0, 0.6), [w(0, "O Windows é"), w(0, "código fechado"), c.t(1), w(1, "O sistema"), c.t(2), w(2, "E só"), c.t(3), w(3, "O Windows é")]);
        tab.style.fontSize = "27px";
        tab.querySelectorAll("td, th").forEach((td) => (td.style.padding = "13px 28px"));
        [tab, tit].forEach((e) => c.sai(e, c.t(4) - 0.4));
        c.titulo("Pegadinha de banca", "O Linux tem licença", { left: 140, top: 150 }, c.t(4), { medio: true });
        c.quadro("prova", "“O Linux é gratuito porque não possui licença.” <b>Errado</b>: ele possui licença, a <b>GPL</b>, que garante as liberdades do software livre.", { left: 140, top: 340, width: 1400 }, c.t(4, 0.4));
        cartaoH(c, { icone: "documento", titulo: "Licença GPL", texto: "garante as liberdades do <b>software livre</b>" }, { left: 140, top: 640, width: 700, height: 170 }, w(4, "Ele possui"));
      },
    },

    // ------------------------------------------------------------ Revisão
    {
      id: "revisao",
      visual: "Sete cartões de revisão com ícone de verificação, um por frase: SO, Processos, Kernel, Arquivos, Windows, Linux e Permissões.",
      secao: "Revisão",
      bit: BIT_CANTO,
      falas: [
        "Hora de revisar o que você aprendeu.",
        "O sistema operacional é software básico e gerencia o processador, a memória, os arquivos e os dispositivos de entrada e saída.",
        "Quem espera entrada e saída está bloqueado, e não pronto. E o Round Robin usa fatias de tempo, o quantum.",
        "O kernel do Linux é monolítico, e o do Windows é híbrido. E Linux, tecnicamente, é só o kernel.",
        "O FAT32 limita cada arquivo a 4 gigabytes; o exFAT e o NTFS resolvem.",
        "Shift + Delete, pen drives e pastas de rede não passam pela Lixeira. E os atalhos com a tecla Windows usam iniciais em inglês.",
        { texto: "No Linux, / é a raiz, e /root é a pasta do administrador. O sinal de maior substitui, e dois sinais de maior acrescentam.", falar: "No Linux, a barra é a raiz, e barra root é a pasta do administrador. O sinal de maior substitui, e dois sinais de maior acrescentam." },
        { texto: "E, nas permissões, r vale 4, w vale 2 e x vale 1, sempre na ordem dono, grupo e outros.", falar: "E, nas permissões, érre vale quatro, dáblio vale dois e xis vale um, sempre na ordem dono, grupo e outros." },
      ],
      montar(c) {
        c.titulo("Revisão", "O que você aprendeu", { left: 140, top: 150 }, c.t(0), { medio: true });
        const cartoes = [
          ["SO", "Software básico · processador, memória, arquivos e E/S"],
          ["Processos", "Esperando E/S = bloqueado · Round Robin = quantum"],
          ["Kernel", "Linux monolítico · Windows híbrido · Linux = kernel"],
          ["Arquivos", "FAT32: até 4 GB por arquivo · exFAT e NTFS resolvem"],
          ["Windows", "Shift + Delete não usa a Lixeira · Win + E, D, L, R, I"],
          ["Linux", "/ ≠ /root · <b>&gt;</b> substitui · <b>&gt;&gt;</b> acrescenta"],
          ["Permissões", "r = 4 · w = 2 · x = 1 · dono, grupo, outros"],
        ];
        cartoes.forEach((k, i) => {
          const col = i % 4, lin = Math.floor(i / 4);
          const e = c.novo(`<div class="cartao" style="left:${140 + col * 415}px;top:${310 + lin * 300}px;width:385px;height:270px;padding:30px">
            <div style="display:flex;align-items:center;gap:16px">${icone("check")}<h3 style="margin:0;font-size:34px">${k[0]}</h3></div>
            <p style="margin-top:16px;font-size:28px">${k[1]}</p></div>`);
          e.querySelector(".icone").style.cssText = "margin:0;width:54px;height:54px";
          c.entra(e, c.t(i + 1), "pop");
        });
      },
    },
    {
      id: "encerramento",
      visual: "Bit grande à esquerda. Cartão “Pratique agora: 15 questões” e cartão “Próximo vídeo: Capítulo 3 — Internet e Navegadores” na cor do capítulo 3. Bit acena na despedida.",
      secao: "Revisão",
      bit: BIT_GRANDE,
      falas: [
        "Agora é a sua vez: faça as quinze questões do final do capítulo e confira a correção comentada.",
        "No próximo vídeo, vamos estudar a internet e os navegadores.",
        "Até lá, e bons estudos!",
      ],
      montar(c) {
        c.cartao({ icone: "questoes", titulo: "Pratique agora", texto: "<b>15 questões</b> no final do Capítulo 2, com correção comentada." }, { left: 900, top: 230, width: 820 }, c.t(0));
        const prox = c.novo(`<div class="cartao" style="left:900px;top:640px;width:820px;--cor:#4f46e5">
          <div class="rotulo">Próximo vídeo</div><h3 style="margin-top:14px;font-family:var(--serif);font-size:52px">Capítulo 3 —<br>Internet e Navegadores</h3></div>`);
        c.entra(prox, c.t(1), "baixo");
        c.bit.acenar(c.t(2));
      },
    },
  ]),
});
