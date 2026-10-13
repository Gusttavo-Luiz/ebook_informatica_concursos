// Roteiro da videoaula do Capítulo 1 — Introdução à Informática.
// Cada cena tem a narração (falas) e a montagem visual (montar).
// c.t(i) = instante em que começa a fala i da cena.

const BIT_CANTO = { x: 1720, y: 1020, s: 0.58 };

serie.capitulo({
  numero: 1,
  titulo: "Introdução à Informática",
  cor: "#2563eb",
  proximo: "Capítulo 2 — Sistemas Operacionais",
  cenas: [
    // ------------------------------------------------------------ Abertura
    {
      id: "abertura",
      visual: "Bit grande à esquerda acena para o público. À direita surgem o rótulo “Capítulo 1” e o título “Introdução à Informática”. Em seguida, um roteiro de 5 tópicos aparece item por item, cada um na frase que o anuncia. Na última frase, Bit dá um pulinho.",
      secao: "Abertura",
      bit: { x: 470, y: 990, s: 1.3 },
      falas: [
        "Olá! Eu sou o Bit, e vou acompanhar você nesta série de videoaulas de Informática para Concursos.",
        "Neste primeiro capítulo, vamos construir a base de tudo: a Introdução à Informática.",
        "Você vai entender o que é informática e como um sistema computacional é formado.",
        "Vai ver a diferença entre dados e informação, e aprender as unidades de medida e os sistemas de numeração.",
        "Depois, vamos passear pela evolução dos computadores, pelos tipos de software e pelas linguagens de programação.",
        "E, para fechar, vamos entender como o computador funciona por dentro: a arquitetura de Von Neumann e o ciclo de instrução.",
        "Vamos lá?",
      ],
      montar(c) {
        c.bit.acenar(c.t(0, 0.2));
        c.titulo("Capítulo 1", "Introdução à<br>Informática", { left: 900, top: 190 }, c.t(1));
        c.lista([
          "O que é <b>informática</b>",
          "<b>Dados</b>, <b>informação</b> e unidades de medida",
          "<b>Sistemas de numeração</b>",
          "<b>Gerações</b>, <b>software</b> e <b>linguagens</b>",
          "<b>Como o computador funciona</b> por dentro",
        ], { left: 900, top: 520, width: 900 }, [c.t(2), c.t(3), c.t(3, 3.2), c.t(4), c.t(5)]);
        c.bit.pular(c.t(6));
      },
    },

    // ------------------------------------------------- O que é informática
    {
      id: "conceito",
      visual: "Título “Informática”. A definição aparece escrita. Depois, as palavras INFORMAÇÃO + AUTOMÁTICA entram pelos lados; as partes “AÇÃO” e “AUTOM” ficam apagadas e surge “= INFORMÁTICA” em destaque. Por fim, diagrama de três blocos com ícones — Entrada (teclado) → Processamento (engrenagem) → Saída (monitor) — com setas desenhadas e etiquetas do exemplo do boletim: “Notas: 7, 8 e 9”, “Calcula a média”, “Média: 8”.",
      secao: "O que é informática",
      bit: BIT_CANTO,
      falas: [
        "Vamos começar pelo nome.",
        "Informática é a área que cuida do tratamento automático da informação, usando computadores.",
        "A palavra nasce da junção de duas outras: informação e automática.",
        "Ou seja: processar dados de forma automática, com sistemas computacionais.",
        "E todo computador segue a mesma lógica: ele recebe dados na entrada, processa esses dados e entrega informação na saída.",
        "Pense no boletim da escola: as notas entram, o computador calcula a média, e o resultado aparece na tela.",
      ],
      montar(c) {
        const titulo = c.titulo("O que é informática", "Informática", { left: 140, top: 150 }, c.t(0), { medio: true });
        const def = c.texto("Tratamento <b>automático</b> da <b>informação</b><br>por meio de computadores.", { left: 140, top: 340, width: 1300 }, c.t(1));
        c.sai(def, c.t(2) - 0.4);

        const p1 = c.novo(`<div class="abs titulo-medio" style="left:180px;top:360px">INFORM<span class="sobra">AÇÃO</span></div>`);
        const mais = c.novo(`<div class="abs titulo-medio" style="left:700px;top:360px;color:var(--texto-fraco)">+</div>`);
        const p2 = c.novo(`<div class="abs titulo-medio" style="left:820px;top:360px"><span class="sobra">AUTOM</span>ÁTICA</div>`);
        c.entra(p1, c.t(2, 0.8), "esquerda");
        c.entra(mais, c.t(2, 1.6), "pop");
        c.entra(p2, c.t(2, 2.0), "direita");
        c.tl.to(c.el.querySelectorAll(".sobra"), { opacity: 0.18, duration: 0.5 }, c.t(3) - 0.2);
        const igual = c.novo(`<div class="abs titulo" style="left:180px;top:500px;color:var(--cor)">= INFORMÁTICA</div>`);
        c.entra(igual, c.t(3), "zoom");

        const grupo = [p1, mais, p2, igual];
        grupo.forEach((e) => c.sai(e, c.t(4) - 0.4));

        const xs = [150, 730, 1310];
        const nos = [
          { icone: "teclado", titulo: "Entrada", texto: "dados" },
          { icone: "engrenagem", titulo: "Processamento", texto: "CPU + memória" },
          { icone: "monitor", titulo: "Saída", texto: "informação" },
        ].map((n, i) => c.no(n, { left: xs[i], top: 330, width: 440, height: 340 }, c.t(4, i * 1.6)));
        c.seta(600, 500, 720, 500, c.t(4, 1.2));
        c.seta(1180, 500, 1300, 500, c.t(4, 2.8));
        const exemplos = ["Notas: 7, 8 e 9", "Calcula a média", "Média: 8"];
        exemplos.forEach((e, i) => {
          c.entra(c.novo(`<div class="abs pilula" style="left:${xs[i]}px;top:700px;width:440px;text-align:center">${e}</div>`), c.t(5, 0.9 + i * 1.4), "baixo");
        });
        c.sai(titulo, c.fim - 0.6);
      },
    },
    {
      id: "sistema",
      visual: "Quatro cartões entram um por frase: Hardware (chip), Software (janela de programa), Peopleware (pessoas) e Firmware (chip com código). No fim, faixa inferior com a síntese “Hardware: você toca · Software: você executa · Peopleware: quem usa”.",
      secao: "O que é informática",
      bit: BIT_CANTO,
      falas: [
        "Um sistema computacional é formado por três elementos que trabalham juntos.",
        "O hardware é a parte física: o processador, a memória, o teclado, o monitor. É tudo o que você pode tocar.",
        "O software é a parte lógica: os programas, como o sistema operacional e os aplicativos. É o que você executa.",
        "E o peopleware são as pessoas: quem usa, opera e desenvolve os sistemas.",
        "Existe ainda o firmware: um software gravado diretamente em um chip do hardware, como a BIOS ou a UEFI da placa-mãe.",
        "Resumindo: hardware é o que você toca, software é o que você executa, e peopleware é quem usa.",
      ],
      montar(c) {
        c.titulo("Sistema computacional", "Os elementos do sistema", { left: 140, top: 150 }, c.t(0), { medio: true });
        const cartoes = [
          { icone: "cpu", titulo: "Hardware", texto: "Parte física: processador, memória, teclado, monitor." },
          { icone: "janela", titulo: "Software", texto: "Parte lógica: sistema operacional e aplicativos." },
          { icone: "pessoas", titulo: "Peopleware", texto: "As pessoas que usam, operam e desenvolvem." },
          { icone: "chip", titulo: "Firmware", texto: "Software gravado em um chip, como a BIOS/UEFI." },
        ];
        cartoes.forEach((k, i) => c.cartao(k, { left: 140 + i * 415, top: 330, width: 385, height: 420 }, c.t(i + 1)));
        c.chave("Hardware: <em>você toca</em> · Software: <em>você executa</em> · Peopleware: <em>quem usa</em>", c.t(5));
      },
    },

    // ----------------------------------------------- Dados e informação
    {
      id: "dados",
      visual: "Três cartões ligados por setas: Dado (número 32 grande), Informação (“A média de idade da turma é 32 anos”, com 32 anos marcado) e Conhecimento (lâmpada + decisão). Quadro âmbar “Pegadinha de banca” no rodapé.",
      secao: "Dados e informação",
      bit: BIT_CANTO,
      falas: [
        "Agora, uma diferença que as bancas adoram cobrar: dado não é a mesma coisa que informação.",
        "Dado é um valor bruto, sem contexto. Por exemplo, o número trinta e dois, sozinho, não diz nada.",
        "Informação é o dado processado e colocado em contexto: a média de idade da turma é de trinta e dois anos. Agora sim, faz sentido.",
        "E o conhecimento é a informação interpretada e usada para tomar decisões: se a turma é adulta, o material pode usar exemplos do mercado de trabalho.",
        "Atenção à pegadinha: um dado isolado não tem significado. Ele só vira informação depois de processado e colocado em contexto.",
      ],
      montar(c) {
        c.titulo("Dado × informação", "Dado, informação e conhecimento", { left: 140, top: 150 }, c.t(0), { medio: true });
        const xs = [140, 720, 1300];
        const blocos = [
          `<div class="rotulo">Dado</div><div class="mono" style="font-size:150px;font-weight:700;color:var(--texto);line-height:1.1;margin-top:20px">32</div><p style="font-size:30px;color:var(--texto-suave)">valor bruto, sem contexto</p>`,
          `<div class="rotulo">Informação</div><p style="font-size:40px;line-height:1.35;margin-top:26px;color:var(--texto)">A média de idade da turma é <b class="marca-texto">32 anos</b>.</p>`,
          `<div class="rotulo">Conhecimento</div>${icone("lampada")}<p style="font-size:32px;line-height:1.35;color:var(--texto)">A turma é adulta: usar exemplos do mercado de trabalho.</p>`,
        ];
        blocos.forEach((h, i) => {
          const e = c.novo(`<div class="cartao" style="left:${xs[i]}px;top:330px;width:440px;height:370px">${h}</div>`);
          e.querySelector(".icone")?.setAttribute("style", "width:80px;height:80px;margin:14px 0 8px");
          c.entra(e, c.t(i + 1), "baixo");
        });
        c.seta(590, 515, 710, 515, c.t(2, -0.2));
        c.seta(1170, 515, 1290, 515, c.t(3, -0.2));
        c.quadro("prova", "Dado isolado <b>não tem significado</b>. Só vira informação depois de <b>processado</b> e colocado em <b>contexto</b>.", { left: 140, top: 750, width: 1380 }, c.t(4));
      },
    },

    // ------------------------------------------ Unidades e numeração
    {
      id: "bits",
      visual: "Dois blocos 1 (aceso, cor do capítulo) e 0 (apagado) com “ligado e desligado”; definição de bit. Fileira de 8 bits 01000001 aparece dígito a dígito, com chave embaixo: “8 bits = 1 byte → a letra A”. Depois, escada crescente Byte → KB → MB → GB → TB → PB, com “×1024” entre os degraus. Cartão final: HD de “1 TB” aparece com ≈ 931 GB.",
      secao: "Unidades e numeração",
      bit: BIT_CANTO,
      falas: [
        "O computador representa tudo com dois estados elétricos: ligado e desligado, que chamamos de um e zero.",
        "Cada um desses dígitos é um bit, a menor unidade de informação.",
        "Oito bits formam um byte, que representa um caractere simples, como uma letra.",
        "A partir daí, cada degrau multiplica por mil e vinte e quatro: kilobyte, megabyte, gigabyte, terabyte e petabyte.",
        "Uma curiosidade: os fabricantes de discos contam de mil em mil. Por isso, um HD de um terabyte aparece com cerca de novecentos e trinta e um gigabytes no computador.",
      ],
      montar(c) {
        c.titulo("Unidades de medida", "Bit e byte", { left: 140, top: 150 }, c.t(0), { medio: true });
        const liga = c.novo(`<div class="abs" style="left:160px;top:340px;display:flex;gap:40px">
          <div class="digito" style="position:relative;background:var(--cor);color:#fff">1</div>
          <div class="digito" style="position:relative;color:var(--texto-fraco)">0</div>
        </div>`);
        c.entra(liga, c.t(0, 2.5), "pop");
        const rotLiga = c.texto("<b>ligado</b> e <b>desligado</b>", { left: 160, top: 510 }, c.t(0, 3.2));
        const bitDef = c.texto("<b>bit</b> = <i>binary digit</i>,<br>a menor unidade de informação", { left: 520, top: 360, width: 900 }, c.t(1));

        const bits = "01000001".split("");
        const fileira = c.novo(`<div class="abs" style="left:160px;top:640px;display:flex;gap:16px">${bits.map((b) => `<div class="digito" style="position:relative;width:96px;height:112px;font-size:60px">${b}</div>`).join("")}</div>`);
        [...fileira.children].forEach((d, i) => c.entra(d, c.t(2, i * 0.18), "pop"));
        const chaveByte = c.novo(`<div class="abs" style="left:160px;top:770px;width:880px;height:24px;border:6px solid var(--cor);border-top:none;border-radius:0 0 16px 16px"></div>`);
        c.entra(chaveByte, c.t(2, 1.8), "fade");
        const rotByte = c.texto("<b>8 bits = 1 byte</b> &nbsp;→&nbsp; a letra <b class=\"marca-texto\">A</b>", { left: 380, top: 810 }, c.t(2, 2.2));

        [liga, rotLiga, bitDef, fileira, chaveByte, rotByte].forEach((e) => c.sai(e, c.t(3) - 0.4));

        const degraus = ["Byte", "KB", "MB", "GB", "TB", "PB"];
        const nomes = ["8 bits", "kilobyte", "megabyte", "gigabyte", "terabyte", "petabyte"];
        degraus.forEach((d, i) => {
          const e = c.novo(`<div class="no" style="left:${140 + i * 190}px;top:${760 - i * 78}px;width:175px;height:${130 + i * 78}px;justify-content:flex-start;padding-top:26px">
            <strong style="font-size:46px;color:var(--cor)">${d}</strong><span>${nomes[i]}</span></div>`);
          c.entra(e, c.t(3, 1.6 + i * 0.75), "baixo");
          if (i > 0) {
            const x = c.novo(`<div class="abs pilula" style="left:${92 + i * 190}px;top:${700 - i * 78}px;font-size:24px;padding:6px 14px">×1024</div>`);
            c.entra(x, c.t(3, 1.9 + i * 0.75), "pop");
          }
        });
        c.cartao({ icone: "numeros", titulo: "HD de “1 TB”", texto: "Fabricante conta de 1.000 em 1.000: aparece ≈ <b>931 GB</b>." }, { left: 1300, top: 330, width: 480 }, c.t(4));
      },
    },
    {
      id: "mbps",
      visual: "Cartões lado a lado: Mbps (ícone de download, velocidade, b minúsculo) e MB (ícone de documento, tamanho, B maiúsculo). Conta grande “100 Mbps ÷ 8 = 12,5 MB/s”, com o resultado contando de 0 até 12,5.",
      secao: "Unidades e numeração",
      bit: BIT_CANTO,
      falas: [
        "E aqui mora uma pegadinha clássica.",
        "A velocidade da internet é medida em bits por segundo, os megabits por segundo, com b minúsculo.",
        "Já o tamanho dos arquivos é medido em bytes, os megabytes, com B maiúsculo.",
        "Como um byte tem oito bits, basta dividir por oito: uma conexão de cem megabits por segundo baixa, no máximo, cerca de doze vírgula cinco megabytes por segundo.",
      ],
      montar(c) {
        c.titulo("Pegadinha de banca", "Mbps não é MB", { left: 140, top: 150 }, c.t(0), { medio: true });
        c.cartao({ icone: "download", titulo: "Mb<span style=\"color:var(--cor)\">ps</span> · megabits por segundo", texto: "Mede a <b>velocidade</b> da conexão. <b>b</b> minúsculo = bit." }, { left: 140, top: 330, width: 680 }, c.t(1));
        c.cartao({ icone: "documento", titulo: "MB · megabytes", texto: "Mede o <b>tamanho</b> dos arquivos. <b>B</b> maiúsculo = byte." }, { left: 860, top: 330, width: 680 }, c.t(2));
        const conta = c.novo(`<div class="abs" style="left:140px;top:760px;display:flex;align-items:center;gap:30px;font-size:64px;font-weight:800">
          <span>100 Mbps</span><span style="color:var(--texto-fraco)">÷ 8 =</span><span style="color:var(--cor)"><span class="valor">0</span> MB/s</span></div>`);
        c.entra(conta, c.t(3, 1.5), "baixo");
        c.contar(conta.querySelector(".valor"), 0, 12.5, c.t(3, 5.5), 1.4, (v) => v.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 }));
      },
    },
    {
      id: "bases",
      visual: "Tabela Sistema / Base / Dígitos / Exemplo, uma linha por frase (binário, decimal, hexadecimal). Faixa final: “1010 (binário) = 10 (decimal) = A (hexadecimal) → o mesmo valor”.",
      secao: "Unidades e numeração",
      bit: BIT_CANTO,
      falas: [
        "Três sistemas de numeração aparecem com frequência: o binário, o decimal e o hexadecimal.",
        "O binário tem base dois e usa só zero e um.",
        "O decimal, que usamos no dia a dia, tem base dez: de zero a nove.",
        "E o hexadecimal tem base dezesseis: usa de zero a nove e as letras de A até F.",
        "Repare: um, zero, um, zero em binário, dez em decimal e A em hexadecimal representam o mesmo valor: dez.",
      ],
      montar(c) {
        c.titulo("Sistemas de numeração", "Binário, decimal e hexadecimal", { left: 140, top: 150 }, c.t(0), { medio: true });
        const tab = c.tabela(["Sistema", "Base", "Dígitos", "Exemplo"], [
          ["Binário", "2", "0 e 1", "<span class=\"mono\">1010</span>"],
          ["Decimal", "10", "0 a 9", "<span class=\"mono\">10</span>"],
          ["Hexadecimal", "16", "0 a 9 e A a F", "<span class=\"mono\">A</span>"],
        ], { left: 140, top: 340, width: 1420 }, c.t(0, 2), [c.t(1), c.t(2), c.t(3)]);
        tab.style.fontSize = "40px";
        c.chave("1010 (binário) = 10 (decimal) = A (hexadecimal) → <em>o mesmo valor</em>", c.t(4));
      },
    },
    {
      id: "conversao",
      visual: "Sem o Bit. À esquerda, pesos 8 4 2 1 surgem da direita para a esquerda; abaixo, os dígitos 1 0 1 1; os dígitos 1 acendem na cor do capítulo e aparece “8 + 0 + 2 + 1 = 11”. À direita, divisões sucessivas de 13 por 2 com os restos; seta subindo ao lado dos restos e o resultado “13 = 1101”.",
      secao: "Unidades e numeração",
      bit: null,
      falas: [
        "E como converter binário para decimal?",
        "Cada posição vale uma potência de dois, da direita para a esquerda: um, dois, quatro, oito, e assim por diante.",
        "Vamos converter um, zero, um, um.",
        "Somamos o valor das posições que têm o número um: oito, mais dois, mais um. O resultado é onze.",
        "O caminho inverso também é simples: divida o número por dois várias vezes e leia os restos de baixo para cima.",
        "Treze, por exemplo, vira um, um, zero, um.",
      ],
      montar(c) {
        c.titulo("Conversão", "Binário → decimal", { left: 140, top: 150 }, c.t(0), { medio: true });
        const pesos = [8, 4, 2, 1];
        const digitos = [1, 0, 1, 1];
        pesos.forEach((p, i) => {
          const pe = c.novo(`<div class="peso" style="left:${150 + i * 150}px;top:350px">${p}</div>`);
          c.entra(pe, c.t(1, 2.4 + (3 - i) * 0.7), "pop");
          const d = c.novo(`<div class="digito" style="left:${150 + i * 150}px;top:400px">${digitos[i]}</div>`);
          c.entra(d, c.t(2, 0.8 + i * 0.35), "pop");
          if (digitos[i]) c.tl.to(d, { backgroundColor: "var(--cor)", color: "#fff", duration: 0.3 }, c.t(3, 1.2 + i * 0.5));
        });
        const soma = c.novo(`<div class="abs" style="left:150px;top:620px;font-size:58px;font-weight:800">8 + 0 + 2 + 1 = <span style="color:var(--cor)">11</span></div>`);
        c.entra(soma, c.t(3, 3.2), "baixo");

        c.titulo("", "Decimal → binário", { left: 1000, top: 150 }, c.t(4), { medio: true });
        const linhas = [["13 ÷ 2 = 6", "1"], ["6 ÷ 2 = 3", "0"], ["3 ÷ 2 = 1", "1"], ["1 ÷ 2 = 0", "1"]];
        linhas.forEach((l, i) => {
          const e = c.novo(`<div class="abs" style="left:1000px;top:${340 + i * 90}px;font-size:44px;font-weight:600;display:flex;gap:40px">
            <span class="mono" style="width:330px">${l[0]}</span><span>resto <b class="mono" style="color:var(--cor)">${l[1]}</b></span></div>`);
          c.entra(e, c.t(4, 2.5 + i * 0.8), "esquerda");
        });
        c.seta(1580, 690, 1580, 350, c.t(5, -0.6), { dur: 0.9 });
        const res = c.novo(`<div class="abs" style="left:1000px;top:740px;font-size:58px;font-weight:800">13 = <span class="mono" style="color:var(--cor)">1101</span></div>`);
        c.entra(res, c.t(5, 0.6), "baixo");
      },
    },
    {
      id: "hexa",
      visual: "Linha “16 = 2⁴ → cada dígito hexadecimal = 4 bits”. Os grupos 1010 e 1111 surgem, recebem “= 10” e “= 15” e viram A e F; aparece “→ AF”. Linha do octal: 110 | 101 → 65. Quadro verde “Memorize”.",
      secao: "Unidades e numeração",
      bit: BIT_CANTO,
      falas: [
        "Para o hexadecimal, existe um atalho.",
        "Como dezesseis é dois elevado a quatro, cada dígito hexadecimal corresponde a exatamente quatro bits.",
        "É só separar o número binário em grupos de quatro, da direita para a esquerda. Um, zero, um, zero vale dez, que é A. E um, um, um, um vale quinze, que é F. O resultado é A F.",
        "No sistema octal, de base oito, os grupos são de três bits.",
        "Memorize: hexadecimal, grupos de quatro bits. Octal, grupos de três bits.",
      ],
      montar(c) {
        c.titulo("Atalho", "Hexadecimal e octal", { left: 140, top: 150 }, c.t(0), { medio: true });
        c.texto("16 = 2<sup>4</sup> → cada dígito hexadecimal = <b>4 bits</b>", { left: 140, top: 320 }, c.t(1));
        const linha = (y, grupos, valores, letras, t0) => {
          grupos.forEach((g, i) => {
            const x = 140 + i * 420;
            c.entra(c.novo(`<div class="abs mono" style="left:${x}px;top:${y}px;font-size:72px;font-weight:700;padding:8px 24px;background:#fff;border-radius:20px;box-shadow:var(--sombra)">${g}</div>`), t0 + i * 0.6, "pop");
            c.entra(c.novo(`<div class="abs" style="left:${x + 20}px;top:${y + 130}px;font-size:40px;color:var(--texto-suave)">= ${valores[i]}</div>`), t0 + 2.5 + i * 2.2, "baixo");
            c.entra(c.novo(`<div class="abs mono" style="left:${x + 200}px;top:${y + 112}px;font-size:72px;font-weight:800;color:var(--cor)">${letras[i]}</div>`), t0 + 3.4 + i * 2.2, "pop");
          });
        };
        linha(430, ["1010", "1111"], [10, 15], ["A", "F"], c.t(2, 3.8));
        c.entra(c.novo(`<div class="abs" style="left:1000px;top:520px;font-size:64px;font-weight:800">→ <span class="mono" style="color:var(--cor)">AF</span></div>`), c.t(2, 11.4), "zoom");
        const oct = c.texto("Octal (base 8): grupos de <b>3 bits</b> &nbsp; <span class=\"mono\">110 | 101</span> → <b class=\"mono\" style=\"color:var(--cor)\">65</b>", { left: 140, top: 700 }, c.t(3));
        c.quadro("dica", "Hexadecimal → grupos de <b>4</b> bits. Octal → grupos de <b>3</b> bits.", { left: 140, top: 800, width: 1300 }, c.t(4));
        oct.style.fontSize = "40px";
      },
    },

    // -------------------------------------------- Representação de dados
    {
      id: "caracteres",
      visual: "Três cartões: ASCII (Aa, 7 bits, 128 caracteres), Unicode (globo, todos os idiomas e emojis) e UTF-8 (código, padrão da web). Exemplo de erro de codificação: “✗ informÃ¡tica → ✓ informática”.",
      secao: "Representação de dados",
      bit: BIT_CANTO,
      falas: [
        "Textos, imagens e sons também viram bits.",
        "Para os textos, existem tabelas de caracteres. O ASCII original usa sete bits e representa cento e vinte e oito caracteres: letras sem acento, números e pontuação.",
        "O Unicode abrange praticamente todos os idiomas do mundo, além de símbolos e emojis. E o UTF-8 é a forma de gravar o Unicode mais usada na web.",
        "Quando um texto aparece com símbolos estranhos no lugar dos acentos, o problema é de codificação: o arquivo foi gravado em um padrão e aberto em outro.",
      ],
      montar(c) {
        c.titulo("Representação de dados", "Textos viram números", { left: 140, top: 150 }, c.t(0), { medio: true });
        c.cartao({ icone: "texto", titulo: "ASCII", texto: "<b>7 bits</b> → <b>128</b> caracteres: letras sem acento, números e pontuação." }, { left: 140, top: 330, width: 480, height: 400 }, c.t(1));
        c.cartao({ icone: "publico", titulo: "Unicode", texto: "Praticamente <b>todos os idiomas</b>, símbolos e emojis." }, { left: 660, top: 330, width: 480, height: 400 }, c.t(2));
        c.cartao({ icone: "codigo", titulo: "UTF-8", texto: "Forma de gravar o Unicode: <b>padrão da web</b>." }, { left: 1180, top: 330, width: 420, height: 400 }, c.t(2, 4.5));
        const ex = c.novo(`<div class="abs" style="left:140px;top:780px;display:flex;gap:40px;align-items:center;font-size:48px;font-weight:700">
          <span style="color:var(--errado)">✗ informÃ¡tica</span><span style="color:var(--texto-fraco)">→</span><span style="color:var(--certo)">✓ informática</span>
          <span style="font-size:32px;font-weight:600;color:var(--texto-suave)">problema de <b>codificação</b></span></div>`);
        c.entra(ex, c.t(3), "baixo");
      },
    },
    {
      id: "imagens",
      visual: "Grade de pixels 8 × 8 formando um rosto, pixel a pixel; legenda da resolução 1920 × 1080. Três círculos RGB sobrepostos e “24 bits por pixel ≈ 16,7 milhões de cores”. Depois, dois cartões: Matricial (círculo serrilhado em pixels; JPG, PNG, GIF, BMP) e Vetorial (círculo liso; SVG, AI, EPS).",
      secao: "Representação de dados",
      bit: BIT_CANTO,
      falas: [
        "Nas imagens, o menor ponto é o pixel. E a resolução é a quantidade de pixels, como mil novecentos e vinte por mil e oitenta.",
        "Cada pixel mistura vermelho, verde e azul, o famoso RGB. Com oito bits para cada cor, são vinte e quatro bits por pixel: cerca de dezesseis vírgula sete milhões de cores.",
        "A imagem matricial, ou bitmap, é feita de pixels e perde qualidade quando ampliada. É o caso do JPG e do PNG.",
        "Já a imagem vetorial é descrita por formas matemáticas e pode ser ampliada sem perder qualidade, como o SVG.",
      ],
      montar(c) {
        c.titulo("Imagens", "Pixels e cores", { left: 140, top: 150 }, c.t(0), { medio: true });
        const mapa = ["00111100", "01000010", "10100101", "10000001", "10100101", "10011001", "01000010", "00111100"];
        const grade = c.novo(`<div class="abs" style="left:140px;top:330px;display:grid;grid-template-columns:repeat(8,44px);gap:4px">${mapa.join("").split("").map((b) => `<div style="width:44px;height:44px;border-radius:6px;background:${b === "1" ? "var(--cor)" : "#fff"};box-shadow:0 1px 2px rgba(0,0,0,.08)"></div>`).join("")}</div>`);
        [...grade.children].forEach((p, i) => c.entra(p, c.t(0, 0.6 + i * 0.03), "pop"));
        c.texto("resolução: <b>1920 × 1080</b> pixels", { left: 140, top: 720 }, c.t(0, 4.5));
        const rgb = c.novo(`<svg class="abs" style="left:720px;top:320px;width:420px;height:400px" viewBox="0 0 420 400">
          <g style="mix-blend-mode:multiply"><circle cx="150" cy="140" r="110" fill="#ff5a5a" opacity=".85"/><circle cx="270" cy="140" r="110" fill="#43c56b" opacity=".85"/><circle cx="210" cy="245" r="110" fill="#4c7dff" opacity=".85"/></g></svg>`);
        c.entra(rgb, c.t(1), "zoom");
        c.texto("<b>24 bits</b> por pixel ≈ <b class=\"marca-texto\">16,7 milhões</b> de cores", { left: 720, top: 720, width: 900 }, c.t(1, 5));
        [grade, rgb].forEach((e) => c.sai(e, c.t(2) - 0.4));
        c.el.querySelectorAll(".texto").forEach((e) => c.sai(e, c.t(2) - 0.4));
        const bitmap = c.novo(`<div class="cartao" style="left:140px;top:330px;width:700px;height:520px">
          <h3>Matricial (bitmap)</h3><p>Feita de pixels: perde qualidade ao ampliar.<br><b>JPG, PNG, GIF, BMP</b></p>
          <svg viewBox="0 0 16 16" style="width:200px;height:200px;margin-top:24px;shape-rendering:crispEdges">${[[5, 1, 6], [3, 2, 10], [2, 3, 12], [1, 4, 14], [1, 5, 14], [1, 6, 14], [1, 7, 14], [1, 8, 14], [1, 9, 14], [1, 10, 14], [2, 11, 12], [3, 12, 10], [5, 13, 6]].map(([x, y, w]) => `<rect x="${x}" y="${y}" width="${w}" height="1" fill="var(--cor)"/>`).join("")}</svg></div>`);
        c.entra(bitmap, c.t(2), "baixo");
        const vetor = c.novo(`<div class="cartao" style="left:900px;top:330px;width:700px;height:520px">
          <h3>Vetorial</h3><p>Formas matemáticas: amplia sem perder qualidade.<br><b>SVG, AI, EPS</b></p>
          <svg viewBox="0 0 16 16" style="width:200px;height:200px;margin-top:24px"><circle cx="8" cy="7.5" r="7" fill="var(--cor)"/></svg></div>`);
        c.entra(vetor, c.t(3), "baixo");
      },
    },
    {
      id: "compressao",
      visual: "Dois cartões: Com perda (ícone de imagem, tom âmbar; JPG, MP3, MP4) e Sem perda (ícone de pacote, tom verde; PNG, ZIP, RAR, FLAC). Faixa final “Documento em ZIP → volta idêntico”.",
      secao: "Representação de dados",
      bit: BIT_CANTO,
      falas: [
        "E, para economizar espaço, os arquivos podem ser compactados.",
        "Na compressão com perda, alguns detalhes são descartados: o arquivo fica bem menor, mas o original não volta. É o caso do JPG, do MP3 e do MP4.",
        "Na compressão sem perda, o arquivo volta exatamente igual ao original, como no PNG e no ZIP.",
        "Por isso, um documento compactado em ZIP volta idêntico ao ser descompactado.",
      ],
      montar(c) {
        c.titulo("Compressão", "Com perda × sem perda", { left: 140, top: 150 }, c.t(0), { medio: true });
        c.cartao({ icone: "imagem", titulo: "Com perda", texto: "Descarta detalhes: arquivo bem menor, mas o original <b>não volta</b>.<br><br><b>JPG · MP3 · MP4</b>", cor: "#c27c0e" }, { left: 140, top: 330, width: 700, height: 460 }, c.t(1));
        c.cartao({ icone: "pacote", titulo: "Sem perda", texto: "Reduz o tamanho e o arquivo volta <b>exatamente igual</b>.<br><br><b>PNG · ZIP · RAR · FLAC</b>", cor: "#2f8a5b" }, { left: 900, top: 330, width: 700, height: 460 }, c.t(2));
        c.chave("Documento em ZIP → <em>volta idêntico</em>", c.t(3));
      },
    },

    // -------------------------------------------- Evolução dos computadores
    {
      id: "geracoes",
      visual: "Linha do tempo horizontal desenhada da esquerda para a direita. Cinco marcos entram um por frase, com ícone e período: válvula (1ª, 1940–1956), transistor (2ª, 1956–1963), circuito integrado (3ª, 1964–1971), microprocessador (4ª, 1971–atual) e IA (5ª, atual). Faixa “ENIAC (1946) · Intel 4004 (1971)”.",
      secao: "Evolução dos computadores",
      bit: BIT_CANTO,
      falas: [
        "Agora, vamos viajar no tempo. A evolução dos computadores é dividida em cinco gerações, de acordo com a tecnologia usada.",
        "A primeira geração usava válvulas eletrônicas. O ENIAC, de mil novecentos e quarenta e seis, era enorme, gastava muita energia e esquentava bastante.",
        "Na segunda geração, as válvulas foram trocadas por transistores: máquinas menores, mais rápidas e mais confiáveis.",
        "A terceira geração trouxe os circuitos integrados, com vários transistores em um único chip.",
        "Na quarta geração surgiu o microprocessador, com o Intel quatro mil e quatro, de mil novecentos e setenta e um. E os computadores pessoais se popularizaram.",
        "A quinta geração, a atual, é marcada pela inteligência artificial e pelo processamento paralelo.",
      ],
      montar(c) {
        c.titulo("Linha do tempo", "As cinco gerações", { left: 140, top: 150 }, c.t(0), { medio: true });
        const linha = c.novo(`<svg class="abs" style="left:0;top:0;width:1920px;height:1080px" viewBox="0 0 1920 1080"><path d="M180 600 H1620" stroke="var(--cor-media)" stroke-width="10" stroke-linecap="round"/></svg>`);
        c.desenhar(linha.querySelector("path"), c.t(0, 3), 1.4);
        const ger = [
          ["valvula", "1ª", "Válvulas", "1940–1956"],
          ["transistor", "2ª", "Transistores", "1956–1963"],
          ["circuito", "3ª", "Circuitos integrados", "1964–1971"],
          ["cpu", "4ª", "Microprocessador", "1971–atual"],
          ["ia", "5ª", "Inteligência artificial", "atual"],
        ];
        ger.forEach((g, i) => {
          const x = 220 + i * 340;
          const e = c.novo(`<div class="abs" style="left:${x - 150}px;top:350px;width:300px;text-align:center">
            <div class="no" style="position:relative;width:200px;height:200px;margin:0 auto;padding:20px">${icone(g[0])}</div>
            <div style="margin-top:84px;font:800 44px var(--sans);color:var(--cor)">${g[1]}</div>
            <div style="font:700 32px var(--sans);margin-top:6px">${g[2]}</div>
            <div style="font:500 26px var(--sans);color:var(--texto-fraco);margin-top:6px">${g[3]}</div></div>`);
          e.querySelector(".icone").style.margin = "0";
          c.entra(e, c.t(i + 1), "baixo");
          const ponto = c.novo(`<div class="abs" style="left:${x - 16}px;top:584px;width:32px;height:32px;border-radius:50%;background:var(--cor);border:6px solid #fff;box-shadow:var(--sombra)"></div>`);
          c.entra(ponto, c.t(i + 1, 0.2), "pop");
        });
        c.chave("ENIAC (1946) · Intel 4004 (1971)", c.t(4, 2), c.t(5) - 0.3);
      },
    },
    {
      id: "vtcmi",
      visual: "Letras grandes V T C M I surgem uma a uma, cada uma com a palavra embaixo. Quadro âmbar: microprocessador = 4ª geração; circuitos integrados = 3ª.",
      secao: "Evolução dos computadores",
      bit: BIT_CANTO,
      falas: [
        "Para memorizar a sequência, use a sigla VTCMI: válvulas, transistores, circuitos integrados, microprocessadores e inteligência artificial.",
        "E cuidado com a pegadinha: os microprocessadores surgiram na quarta geração. A terceira é a dos circuitos integrados, e as bancas adoram trocar as duas.",
      ],
      montar(c) {
        c.titulo("Memorize", "VTCMI", { left: 140, top: 150 }, c.t(0), { medio: true });
        const palavras = ["Válvulas", "Transistores", "Circuitos integrados", "Microprocessadores", "Inteligência artificial"];
        palavras.forEach((p, i) => {
          const e = c.novo(`<div class="abs" style="left:${120 + i * 330}px;top:330px;width:310px;text-align:center">
            <div style="font:800 140px var(--serif);color:var(--cor);line-height:1">${p[0]}</div>
            <div style="font:600 28px var(--sans);margin-top:12px">${p}</div></div>`);
          c.entra(e, c.t(0, 3.6 + i * 1.3), "pop");
        });
        c.quadro("prova", "Microprocessador = <b>4ª geração</b>. Circuitos integrados = <b>3ª geração</b>. Não troque as duas!", { left: 140, top: 640, width: 1400 }, c.t(1));
      },
    },
    {
      id: "classificacao",
      visual: "Linha “Quanto ao sinal”: cartões Analógico (onda), Digital (sinal em degraus) e Híbrido (setas). Linha “Quanto ao porte”: Supercomputador, Mainframe, Servidor, Computador pessoal e Móveis e embarcados, cada um no momento em que é citado.",
      secao: "Evolução dos computadores",
      bit: BIT_CANTO,
      falas: [
        "Os computadores também podem ser classificados.",
        "Quanto ao tipo de sinal, existem os analógicos, que trabalham com grandezas contínuas; os digitais, que trabalham com zeros e uns e são os computadores atuais; e os híbridos, que combinam os dois.",
        "Quanto ao porte, temos os supercomputadores, usados em pesquisas científicas e previsão do tempo, e os mainframes, que processam enormes volumes de transações, como em bancos.",
        "Temos também os servidores, que fornecem serviços em rede, os computadores pessoais, e os dispositivos móveis e embarcados, como celulares e os computadores dentro de carros e eletrodomésticos.",
      ],
      montar(c) {
        c.titulo("Classificação", "Tipos de computador", { left: 140, top: 150 }, c.t(0), { medio: true });
        c.entra(c.novo(`<div class="abs rotulo" style="left:140px;top:300px">Quanto ao sinal</div>`), c.t(1), "fade");
        [["onda", "Analógico", "grandezas contínuas"], ["degraus", "Digital", "0 e 1 · os atuais"], ["setas", "Híbrido", "combina os dois"]].forEach((k, i) => {
          const e = c.novo(`<div class="cartao" style="left:${140 + i * 480}px;top:350px;width:450px;height:180px;display:flex;gap:26px;align-items:center;padding:28px">${icone(k[0])}<div><h3 style="margin:0">${k[1]}</h3><p>${k[2]}</p></div></div>`);
          e.querySelector(".icone").style.margin = "0";
          c.entra(e, c.t(1, 1.5 + i * 3.2), "baixo");
        });
        c.entra(c.novo(`<div class="abs rotulo" style="left:140px;top:580px">Quanto ao porte</div>`), c.t(2), "fade");
        [["super", "Supercomputador"], ["servidor", "Mainframe"], ["servidor", "Servidor"], ["notebook", "Computador pessoal"], ["celular", "Móveis e embarcados"]].forEach((k, i) => {
          const e = c.novo(`<div class="no" style="left:${140 + i * 290}px;top:630px;width:270px;height:250px">${icone(k[0])}<strong style="font-size:28px">${k[1]}</strong></div>`);
          const tempos = [c.t(2, 1.5), c.t(2, 6.2), c.t(3, 1), c.t(3, 3.4), c.t(3, 5.6)];
          c.entra(e, tempos[i], "pop");
        });
      },
    },

    // --------------------------------------------- Software e linguagens
    {
      id: "software",
      visual: "Quatro cartões, um por frase: Básico (engrenagem), Aplicativo (janela), Utilitário (ferramenta) e Programação (código), com exemplos.",
      secao: "Software e linguagens",
      bit: BIT_CANTO,
      falas: [
        "Vamos falar de software. Ele pode ser dividido em quatro tipos.",
        "O software básico, ou de sistema, controla o hardware e serve de base para os outros programas: o Windows, o Linux, o Android e os drivers.",
        "O software aplicativo executa as tarefas do usuário, como o Word, o Excel e os navegadores.",
        "O utilitário cuida da manutenção e do apoio ao sistema, como os antivírus e os compactadores.",
        "E as ferramentas de programação, como compiladores e interpretadores, servem para criar novos programas.",
      ],
      montar(c) {
        c.titulo("Tipos de software", "Quatro tipos", { left: 140, top: 150 }, c.t(0), { medio: true });
        const tipos = [
          { icone: "engrenagem", titulo: "Básico", texto: "Controla o hardware.<br><b>Windows, Linux, Android, drivers</b>" },
          { icone: "janela", titulo: "Aplicativo", texto: "Tarefas do usuário.<br><b>Word, Excel, navegadores</b>" },
          { icone: "ferramenta", titulo: "Utilitário", texto: "Manutenção e apoio.<br><b>Antivírus, compactadores</b>" },
          { icone: "codigo", titulo: "Programação", texto: "Criam programas.<br><b>Compiladores, interpretadores</b>" },
        ];
        tipos.forEach((k, i) => c.cartao(k, { left: 140 + i * 415, top: 330, width: 385, height: 460 }, c.t(i + 1)));
      },
    },
    {
      id: "licencas",
      visual: "Coluna esquerda: Proprietário (cadeado), Freeware (presente) e Shareware (relógio). Centro: Software livre (estrela) com as quatro liberdades surgindo uma a uma. Direita: Código aberto e Domínio público. Na última frase tudo sai e entra o quadro âmbar “Software livre não significa gratuito”.",
      secao: "Software e linguagens",
      bit: BIT_CANTO,
      falas: [
        "Os programas também têm licenças diferentes.",
        "O software proprietário tem código fechado e segue as regras do fabricante, como o Microsoft Office.",
        "O freeware é gratuito, mas normalmente tem código fechado. Já o shareware é distribuído para teste, com tempo ou recursos limitados, e depois é preciso pagar.",
        "O software livre garante quatro liberdades: executar o programa para qualquer finalidade, estudar como ele funciona, redistribuir cópias, e modificar e distribuir versões modificadas. O Linux e o LibreOffice são exemplos.",
        "Existem ainda o código aberto, em que o código-fonte é disponibilizado, e o domínio público, sem direitos autorais reservados.",
        "E a pegadinha mais famosa: software livre não significa software gratuito. A liberdade está no uso, no estudo, na modificação e na distribuição. Um software livre pode até ser vendido.",
      ],
      montar(c) {
        c.titulo("Licenças", "Licenças de software", { left: 140, top: 150 }, c.t(0), { medio: true });
        const pequenos = [
          ["cadeado", "Proprietário", "código fechado", c.t(1)],
          ["presente", "Freeware", "gratuito, código fechado", c.t(2)],
          ["relogio", "Shareware", "teste limitado, depois paga", c.t(2, 4.2)],
        ];
        const grupo = [];
        pequenos.forEach((k, i) => {
          const e = c.novo(`<div class="cartao" style="left:140px;top:${310 + i * 200}px;width:560px;height:176px;display:flex;gap:24px;align-items:center;padding:26px">${icone(k[0])}<div><h3 style="margin:0;font-size:36px">${k[1]}</h3><p>${k[2]}</p></div></div>`);
          e.querySelector(".icone").style.cssText = "margin:0;width:84px;height:84px";
          c.entra(e, k[3], "esquerda");
          grupo.push(e);
        });
        const livre = c.novo(`<div class="cartao" style="left:740px;top:310px;width:560px;height:576px">
          <div style="display:flex;gap:20px;align-items:center">${icone("livre")}<h3 style="margin:0">Software livre</h3></div>
          <ol style="margin-top:20px;padding-left:40px;font-size:30px;line-height:1.5;color:var(--texto-suave)">
          <li class="lib">executar</li><li class="lib">estudar</li><li class="lib">redistribuir</li><li class="lib">modificar e distribuir</li></ol>
          <p style="margin-top:16px"><b>Linux, LibreOffice</b></p></div>`);
        livre.querySelector(".icone").style.cssText = "margin:0;width:84px;height:84px";
        c.entra(livre, c.t(3), "baixo");
        livre.querySelectorAll(".lib").forEach((li, i) => c.entra(li, c.t(3, 2.6 + i * 1.6), "esquerda"));
        grupo.push(livre);
        [["codigo", "Código aberto", "código-fonte disponível", c.t(4)], ["publico", "Domínio público", "sem direitos reservados", c.t(4, 3.6)]].forEach((k, i) => {
          const e = c.novo(`<div class="cartao" style="left:1340px;top:${310 + i * 200}px;width:420px;height:176px;display:flex;gap:20px;align-items:center;padding:26px">${icone(k[0])}<div><h3 style="margin:0;font-size:32px">${k[1]}</h3><p style="font-size:26px">${k[2]}</p></div></div>`);
          e.querySelector(".icone").style.cssText = "margin:0;width:72px;height:72px";
          c.entra(e, k[3], "direita");
          grupo.push(e);
        });
        grupo.forEach((e) => c.sai(e, c.t(5) - 0.4));
        c.quadro("prova", "Software livre <b>não significa gratuito</b>. A liberdade é de <b>uso, estudo, modificação e distribuição</b> — ele pode até ser vendido.", { left: 140, top: 380, width: 1440 }, c.t(5));
      },
    },
    {
      id: "linguagens",
      visual: "Pilha de três níveis que sobe: linguagem de máquina (10110000 01100001), Assembly (MOV AL, 61h) e alto nível (print(\"Olá\")), com seta “mais próximo do humano”. Depois, cartões Compilador (livro: traduz tudo e gera executável) e Interpretador (balões de tradução: linha por linha). Faixa “Java: compilado para bytecode → executado pela JVM”.",
      secao: "Software e linguagens",
      bit: BIT_CANTO,
      falas: [
        "E como os programas são criados? O processador só entende linguagem de máquina: instruções em binário.",
        "A linguagem de montagem, o Assembly, usa abreviações para essas instruções e é de baixo nível.",
        "Já as linguagens de alto nível, como Python, Java e C, são mais próximas da linguagem humana.",
        "Para o computador entender, esse código precisa ser traduzido.",
        "O compilador traduz o código inteiro de uma vez e gera um programa executável, como um tradutor que entrega um livro já traduzido.",
        "O interpretador traduz e executa linha por linha, a cada execução, como um intérprete em uma palestra.",
        "E o Java combina os dois: ele é compilado para um código intermediário, o bytecode, que roda na máquina virtual Java, a JVM.",
      ],
      montar(c) {
        c.titulo("Linguagens", "Da máquina ao humano", { left: 140, top: 150 }, c.t(0), { medio: true });
        const niveis = [
          ["Linguagem de máquina", "<span class=\"mono\">10110000 01100001</span>", c.t(0, 3)],
          ["Assembly (baixo nível)", "<span class=\"mono\">MOV AL, 61h</span>", c.t(1)],
          ["Alto nível", "<span class=\"mono\">print(\"Olá\")</span> · Python, Java, C", c.t(2)],
        ];
        const pilha = niveis.map((n, i) => {
          const e = c.novo(`<div class="cartao" style="left:140px;top:${740 - i * 190}px;width:1000px;height:160px;padding:28px 36px">
            <div class="rotulo" style="font-size:22px">${n[0]}</div><div style="font-size:40px;margin-top:10px">${n[1]}</div></div>`);
          c.entra(e, n[2], "baixo");
          return e;
        });
        const subida = c.seta(1220, 860, 1220, 400, c.t(2, 1), { dur: 0.9 });
        const rot = c.texto("mais próximo<br>do humano", { left: 1260, top: 560 }, c.t(2, 1.6));
        [...pilha, subida, rot].forEach((e) => c.sai(e, c.t(3, 1.6)));

        const comp = c.novo(`<div class="cartao" style="left:140px;top:330px;width:720px;height:440px">
          ${icone("livro")}<h3>Compilador</h3><p>Traduz <b>tudo de uma vez</b> e gera um <b>executável</b>.<br>Como traduzir um livro inteiro.</p></div>`);
        c.entra(comp, c.t(4), "esquerda");
        const interp = c.novo(`<div class="cartao" style="left:920px;top:330px;width:720px;height:440px">
          ${icone("tradutor")}<h3>Interpretador</h3><p>Traduz e executa <b>linha por linha</b>, a cada execução.<br>Como um intérprete em uma palestra.</p></div>`);
        c.entra(interp, c.t(5), "direita");
        c.chave("Java: compilado para <em>bytecode</em> → executado pela <em>JVM</em>", c.t(6));
      },
    },

    // --------------------------------------- Como o computador funciona
    {
      id: "von-neumann",
      visual: "Sem o Bit. Bloco Memória (“dados + instruções”) à direita; faixa “Programa armazenado”. Área tracejada da CPU com três cartões entrando um por frase: Unidade de Controle, ULA e Registradores. Por fim, Entrada e saída e os barramentos desenhados ligando a CPU à memória e à E/S.",
      secao: "Como o computador funciona",
      bit: null,
      falas: [
        "Chegamos ao coração do computador: a arquitetura de Von Neumann, proposta em mil novecentos e quarenta e cinco. Ela é o modelo clássico dos computadores modernos.",
        "A ideia central é o programa armazenado: as instruções e os dados ficam guardados na mesma memória.",
        "A CPU, a unidade central de processamento, reúne três partes.",
        "A unidade de controle busca as instruções na memória, interpreta e coordena a execução.",
        "A unidade lógica e aritmética, a ULA, faz as contas e as comparações.",
        "E os registradores são pequenas memórias internas, as mais rápidas do computador.",
        "Completam o modelo a memória principal, os dispositivos de entrada e saída, e os barramentos, que são as vias que ligam tudo.",
      ],
      montar(c) {
        c.titulo("Arquitetura de Von Neumann", "O modelo de 1945", { left: 140, top: 150 }, c.t(0), { medio: true });
        const cpu = c.novo(`<div class="abs" style="left:140px;top:320px;width:760px;height:520px;border-radius:32px;background:var(--cor-suave);border:5px dashed var(--cor)">
          <div class="rotulo" style="position:absolute;left:40px;top:28px">CPU</div></div>`);
        c.entra(cpu, c.t(2), "zoom");
        const partes = [
          ["Unidade de Controle (UC)", "busca, interpreta e coordena", c.t(3)],
          ["ULA", "contas e comparações", c.t(4)],
          ["Registradores", "memórias internas mais rápidas", c.t(5)],
        ];
        partes.forEach((p, i) => {
          const e = c.novo(`<div class="cartao" style="left:180px;top:${400 + i * 140}px;width:680px;height:120px;padding:22px 30px">
            <h3 style="font-size:34px;margin:0">${p[0]}</h3><p style="font-size:26px">${p[1]}</p></div>`);
          c.entra(e, p[2], "esquerda");
        });
        const mem = c.no({ icone: "memoria", titulo: "Memória", texto: "dados + instruções" }, { left: 1220, top: 320, width: 480, height: 300 }, c.t(1));
        const es = c.no({ icone: "teclado", titulo: "Entrada e saída", texto: "teclado, monitor..." }, { left: 1220, top: 680, width: 480, height: 260 }, c.t(6, 2.5));
        const barramento = c.novo(`<svg class="abs" style="left:0;top:0;width:1920px;height:1080px" viewBox="0 0 1920 1080">
          <path d="M900 470 H1220" stroke="var(--cor)" stroke-width="14" stroke-linecap="round"/>
          <path d="M900 760 H1060 V810 H1220" stroke="var(--cor)" stroke-width="14" stroke-linecap="round" fill="none"/></svg>`);
        barramento.querySelectorAll("path").forEach((p, i) => c.desenhar(p, c.t(6, 5 + i * 0.5)));
        c.entra(c.novo(`<div class="abs pilula" style="left:960px;top:400px">barramentos</div>`), c.t(6, 5.6), "pop");
        c.chave("Programa armazenado: <em>dados e instruções na mesma memória</em>", c.t(1, 1), c.t(2) - 0.2);
      },
    },
    {
      id: "harvard",
      visual: "Dois cartões: Von Neumann (um único caminho CPU–Memória, em âmbar, “gargalo”) e Harvard (dois caminhos verdes: instruções e dados). Quadro verde “Memorize: CPU = UC + ULA (+ registradores)”.",
      secao: "Como o computador funciona",
      bit: BIT_CANTO,
      falas: [
        "Como dados e instruções passam pelo mesmo caminho, o processador às vezes precisa esperar a memória. É o chamado gargalo de Von Neumann.",
        "A arquitetura Harvard resolve isso com memórias e caminhos separados para instruções e para dados. Ela é comum em microcontroladores.",
        "E atenção: CPU e ULA não são sinônimos. A ULA é só uma parte da CPU. Memorize: CPU é igual a unidade de controle mais ULA, mais os registradores.",
      ],
      montar(c) {
        c.titulo("Comparação", "Von Neumann × Harvard", { left: 140, top: 150 }, c.t(0), { medio: true });
        const vn = c.novo(`<div class="cartao" style="left:140px;top:320px;width:700px;height:400px">
          <h3>Von Neumann</h3><p>Um único caminho para dados e instruções.</p>
          <div style="display:flex;align-items:center;gap:24px;margin-top:40px">
            <span class="pilula">CPU</span><span style="flex:1;height:10px;background:var(--prova);border-radius:5px"></span><span class="pilula">Memória</span></div>
          <p style="margin-top:24px;color:var(--prova);font-weight:700">gargalo de Von Neumann</p></div>`);
        c.entra(vn, c.t(0, 1), "esquerda");
        const hv = c.novo(`<div class="cartao" style="left:900px;top:320px;width:700px;height:400px">
          <h3>Harvard</h3><p>Caminhos separados · comum em microcontroladores.</p>
          <div style="display:grid;grid-template-columns:auto 1fr auto;gap:18px 24px;align-items:center;margin-top:30px">
            <span class="pilula">CPU</span><span style="height:10px;background:var(--certo);border-radius:5px"></span><span class="pilula">Instruções</span>
            <span class="pilula">CPU</span><span style="height:10px;background:var(--certo);border-radius:5px"></span><span class="pilula">Dados</span></div></div>`);
        c.entra(hv, c.t(1), "direita");
        c.quadro("dica", "CPU = <b>UC + ULA</b> (+ registradores). A ULA é <b>parte</b> da CPU.", { left: 140, top: 770, width: 1460 }, c.t(2));
      },
    },
    {
      id: "ciclo",
      visual: "Anel pontilhado com três etapas — Busca, Decodificação, Execução — que acendem na cor do capítulo na frase correspondente, enquanto um ponto âmbar percorre o anel continuamente. Cartão “Contador de programa (PC)”. No fim, a sigla FDE em destaque.",
      secao: "Como o computador funciona",
      bit: BIT_CANTO,
      falas: [
        "E como o processador executa um programa? Repetindo sempre o mesmo ciclo, bilhões de vezes por segundo.",
        "Primeiro, a busca: a unidade de controle pega na memória a próxima instrução, cujo endereço está no contador de programa.",
        "Depois, a decodificação: a instrução é interpretada, e o processador descobre o que fazer e quais dados usar.",
        "Por fim, a execução: a operação é realizada, normalmente pela ULA, e o resultado é guardado em um registrador ou na memória. Alguns autores contam esse armazenamento como uma quarta etapa.",
        { texto: "Em inglês: Fetch, Decode, Execute. Memorize a sigla FDE.", falar: "Em inglês: fétch, dicôud, éksequiut. Memorize a sigla, éfe, dê, é." },
      ],
      montar(c) {
        c.titulo("Ciclo de instrução", "Busca → decodificação → execução", { left: 140, top: 150 }, c.t(0), { medio: true });
        const cx = 820, cy = 640, r = 260;
        const pos = [-90, 30, 150].map((a) => [cx + r * Math.cos((a * Math.PI) / 180), cy + r * Math.sin((a * Math.PI) / 180)]);
        const anel = c.novo(`<svg class="abs" style="left:0;top:0;width:1920px;height:1080px" viewBox="0 0 1920 1080"><circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--cor-media)" stroke-width="12" stroke-dasharray="4 26" stroke-linecap="round"/></svg>`);
        c.entra(anel, c.t(0, 2), "fade");
        const etapas = [["Busca", "fetch"], ["Decodificação", "decode"], ["Execução", "execute"]];
        const nos = etapas.map((e, i) => c.no({ titulo: e[0], texto: e[1] }, { left: pos[i][0] - 190, top: pos[i][1] - 90, width: 380, height: 180, zIndex: 2 }, c.t(i + 1)));
        nos.forEach((n, i) => {
          c.tl.to(n, { backgroundColor: "var(--cor)", color: "#fff", duration: 0.4 }, c.t(i + 1, 0.3));
          c.tl.to(n, { backgroundColor: "#fff", color: "var(--texto)", duration: 0.4 }, c.f(i + 1, 0.2));
          c.tl.set(n.querySelector("span"), { color: "inherit" }, c.t(i + 1));
        });
        const ponto = c.novo(`<div class="abs" style="left:${cx - 22}px;top:${cy - r - 22}px;width:44px;height:44px;border-radius:50%;background:var(--prova);box-shadow:var(--sombra);z-index:0"></div>`);
        c.entra(ponto, c.t(0, 2.5), "pop");
        const giro = { a: -90 };
        c.tl.to(giro, {
          a: 990, duration: c.f(3) - c.t(0, 3), ease: "none",
          onUpdate: () => {
            const rad = (giro.a * Math.PI) / 180;
            ponto.style.left = `${cx + r * Math.cos(rad) - 22}px`;
            ponto.style.top = `${cy + r * Math.sin(rad) - 22}px`;
          },
        }, c.t(0, 3));
        c.cartao({ titulo: "Contador de programa (PC)", texto: "Guarda o endereço da <b>próxima instrução</b>." }, { left: 1250, top: 340, width: 520 }, c.t(1, 3));
        const fde = c.novo(`<div class="abs" style="left:1300px;top:620px;font:800 120px var(--serif);color:var(--cor);letter-spacing:.1em">FDE</div>`);
        c.entra(fde, c.t(4, 2.6), "pop");
      },
    },

    // ------------------------------------------------- Tecnologias atuais
    {
      id: "atuais",
      visual: "Quatro cartões: Inteligência artificial, Internet das Coisas, Big Data e Computação em nuvem. Sob o Big Data, cinco etiquetas surgem em sequência: Volume, Velocidade, Variedade, Veracidade, Valor.",
      secao: "Tecnologias atuais",
      bit: BIT_CANTO,
      falas: [
        "Para terminar o conteúdo, algumas tecnologias atuais que aparecem nas provas.",
        "A inteligência artificial executa tarefas que exigiriam inteligência humana. Com o aprendizado de máquina, o sistema aprende padrões a partir de dados; e a IA generativa cria textos, imagens e códigos.",
        "A Internet das Coisas conecta objetos do dia a dia, como sensores, câmeras, lâmpadas e relógios inteligentes.",
        "O Big Data trata volumes enormes de dados, gerados em alta velocidade e em formatos variados. Ele costuma ser descrito pelos Vs: volume, velocidade, variedade, veracidade e valor.",
        "E a computação em nuvem, que você vai estudar no capítulo seis.",
      ],
      montar(c) {
        c.titulo("Hoje", "Tecnologias atuais", { left: 140, top: 150 }, c.t(0), { medio: true });
        const itens = [
          { icone: "ia", titulo: "Inteligência artificial", texto: "Aprendizado de máquina e IA generativa." },
          { icone: "iot", titulo: "Internet das Coisas", texto: "Objetos do dia a dia conectados." },
          { icone: "dados", titulo: "Big Data", texto: "Volumes enormes, rápidos e variados." },
          { icone: "nuvem", titulo: "Computação em nuvem", texto: "Recursos pela internet (Capítulo 6)." },
        ];
        itens.forEach((k, i) => c.cartao(k, { left: 140 + i * 415, top: 330, width: 385, height: 400 }, c.t(i + 1)));
        const vs = ["Volume", "Velocidade", "Variedade", "Veracidade", "Valor"];
        vs.forEach((v, i) => c.entra(c.novo(`<div class="abs pilula" style="left:${140 + i * 260}px;top:780px">${v}</div>`), c.t(3, 6.8 + i * 0.7), "pop"));
      },
    },

    // ------------------------------------------------------------ Revisão
    {
      id: "revisao",
      visual: "Sete cartões de revisão com ícone de verificação, um por frase: Sistema, Dados, Unidades, Numeração, Gerações, Software e CPU.",
      secao: "Revisão",
      bit: BIT_CANTO,
      falas: [
        "Hora de revisar o que você aprendeu.",
        "Hardware é o que você toca, software é o que você executa, peopleware é quem usa, e firmware é o software gravado no chip.",
        "Dado é bruto; informação é o dado com contexto; e conhecimento é a informação aplicada.",
        "Oito bits formam um byte, e cada unidade multiplica por mil e vinte e quatro. Velocidade em bits, tamanho em bytes.",
        "No hexadecimal, cada dígito vale quatro bits.",
        "As gerações seguem a sigla VTCMI, e o microprocessador é da quarta.",
        "Software livre não é sinônimo de gratuito. O compilador gera um executável; o interpretador traduz linha por linha.",
        "E a CPU reúne unidade de controle, ULA e registradores, executando o ciclo de busca, decodificação e execução.",
      ],
      montar(c) {
        c.titulo("Revisão", "O que você aprendeu", { left: 140, top: 150 }, c.t(0), { medio: true });
        const cartoes = [
          ["Sistema", "Hardware · software · peopleware · firmware"],
          ["Dados", "Dado bruto → informação → conhecimento"],
          ["Unidades", "8 bits = 1 byte · ×1024 · Mbps ≠ MB"],
          ["Numeração", "Hexadecimal = 4 bits · octal = 3 bits"],
          ["Gerações", "VTCMI · microprocessador = 4ª"],
          ["Software", "Livre ≠ gratuito · compilador × interpretador"],
          ["CPU", "UC + ULA + registradores · ciclo FDE"],
        ];
        cartoes.forEach((k, i) => {
          const col = i % 4, lin = Math.floor(i / 4);
          const e = c.novo(`<div class="cartao" style="left:${140 + col * 415}px;top:${320 + lin * 300}px;width:385px;height:270px;padding:30px">
            <div style="display:flex;align-items:center;gap:16px">${icone("check")}<h3 style="margin:0;font-size:34px">${k[0]}</h3></div>
            <p style="margin-top:16px;font-size:28px">${k[1]}</p></div>`);
          e.querySelector(".icone").style.cssText = "margin:0;width:54px;height:54px";
          c.entra(e, c.t(i + 1), "pop");
        });
      },
    },
    {
      id: "encerramento",
      visual: "Bit grande à esquerda. Cartão “Pratique agora: 15 questões” e cartão “Próximo vídeo: Capítulo 2 — Sistemas Operacionais” na cor do capítulo 2. Bit acena na despedida.",
      secao: "Revisão",
      bit: { x: 470, y: 990, s: 1.3 },
      falas: [
        "Agora é a sua vez: faça as quinze questões do final do capítulo e confira a correção comentada.",
        "No próximo vídeo, vamos estudar os sistemas operacionais.",
        "Até lá, e bons estudos!",
      ],
      montar(c) {
        c.cartao({ icone: "questoes", titulo: "Pratique agora", texto: "<b>15 questões</b> no final do Capítulo 1, com correção comentada." }, { left: 900, top: 230, width: 820 }, c.t(0));
        const prox = c.novo(`<div class="cartao" style="left:900px;top:640px;width:820px;--cor:#0f766e">
          <div class="rotulo">Próximo vídeo</div><h3 style="margin-top:14px;font-family:var(--serif);font-size:52px">Capítulo 2 —<br>Sistemas Operacionais</h3></div>`);
        c.entra(prox, c.t(1), "baixo");
        c.bit.acenar(c.t(2));
      },
    },
  ],
});
