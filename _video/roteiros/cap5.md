# Videoaula — Capítulo 5: Hardware

> Arquivo gerado por `ferramentas/exportar-roteiro.cjs` a partir de `roteiros/cap5.js`. Edite o `.js` e gere este arquivo de novo.

## Abertura

### Cena 1 · `abertura`

**Visual:** Bit grande à esquerda acena. À direita surgem o rótulo “Capítulo 5” e o título “Hardware”. Um roteiro de 5 tópicos aparece item por item, cada um na frase que o anuncia. Na última frase, Bit dá um pulinho.

**Narração:**

- Olá! Eu sou o Bit. Que bom ter você de volta na nossa série de Informática para Concursos!
- Neste capítulo, vamos abrir o gabinete e conhecer o hardware do computador.
- Primeiro, o processador: o que define o seu desempenho e as arquiteturas RISC e CISC.
- Em seguida, as memórias: a hierarquia, a cache, a RAM, a ROM e a BIOS.
- Depois, o armazenamento, a placa-mãe e os equipamentos de energia.
- E, para fechar, os periféricos, as conexões e as impressoras.
- Vamos lá?

## Conceito de hardware

### Cena 2 · `conceito`

**Visual:** Título “O que é hardware” e a definição. Dez peças com ícone surgem uma a uma, na ordem em que são citadas (processador, RAM, placa-mãe, HD, SSD, placa de vídeo, fonte, teclado, mouse, monitor); faixa “O software diz ao hardware o que fazer”. Depois, as quatro peças principais: CPU processa, RAM temporária, SSD/HD armazena, placa-mãe conecta tudo. Quadro âmbar “Pegadinha de banca”: Windows é software; firmware não é hardware.

**Narração:**

- Vamos começar pelo conceito. Hardware é o conjunto de componentes físicos do computador: tudo aquilo que pode ser visto e tocado.
- Por exemplo: o processador, a memória RAM, a placa-mãe, o HD, o SSD, a placa de vídeo, a fonte de alimentação, o teclado, o mouse e o monitor.
- Mas essas peças só funcionam juntas graças ao software, que diz ao hardware o que fazer.
- Quatro delas formam o núcleo da máquina: a CPU processa, a RAM é a memória temporária, o SSD ou o HD armazena, e a placa-mãe conecta tudo.
- Agora, a pegadinha: o Windows é hardware? Errado! O Windows é software. E o firmware, como a BIOS, é um software gravado em um chip, e não hardware.

## Processador

### Cena 3 · `cpu`

**Visual:** À esquerda, um grande chip “CPU”. À direita, a função “executa as instruções e processa os dados” e três etiquetas das partes (UC, ULA, registradores). Em seguida, dois cartões: Computadores (Intel · AMD) e Celulares (arquitetura ARM).

**Narração:**

- Agora, o cérebro do computador: o processador, ou CPU. Ele executa as instruções dos programas e processa os dados.
- Como você viu no Capítulo 1, a CPU é formada pela unidade de controle, pela unidade lógica e aritmética e pelos registradores.
- Os principais fabricantes de processadores para computadores são a Intel e a AMD.
- Já os celulares usam principalmente processadores com arquitetura ARM.

### Cena 4 · `desempenho`

**Visual:** Três cartões. Clock: ícone de sinal, “ciclos por segundo, em hertz”, e o número “3,5 GHz = 3,5 bilhões de ciclos/s”, com a contagem animada. Núcleos: oito quadrados que acendem um a um (“8 núcleos → tarefas em paralelo”). Threads: um núcleo com duas linhas de execução desenhadas e “Hyper-Threading: 2 threads por núcleo”.

**Narração:**

- E o que define o desempenho? Primeiro, o clock: a frequência, ou seja, quantos ciclos o processador executa por segundo. Ele é medido em hertz.
- Um processador de três vírgula cinco gigahertz realiza três vírgula cinco bilhões de ciclos por segundo.
- Depois, os núcleos, ou cores. Cada núcleo funciona como um processador independente. Com oito núcleos, o processador executa várias tarefas em paralelo.
- E as threads, que são fluxos de execução. Com tecnologias como o Hyper-Threading, cada núcleo trabalha com duas threads.

### Cena 5 · `mais-desempenho`

**Visual:** Cartão “Memória cache: maior e mais rápida → menos espera pela RAM”. Cartão “32 ou 64 bits” com duas barras: 32 bits chega a ≈ 4 GB de RAM; a de 64 bits passa do limite. Depois, a GPU: cartão principal e as opções Integrada (no processador) e Dedicada (placa separada, memória própria). Quadro azul “Resumo estratégico”.

**Narração:**

- A memória cache também conta: quanto maior e mais rápida, menos o processador espera pela RAM.
- E tem a arquitetura: um sistema de trinta e dois bits enxerga, no máximo, cerca de quatro gigabytes de RAM. Os de sessenta e quatro bits superam esse limite.
- Já a GPU, a unidade de processamento gráfico, fica na placa de vídeo. Ela é especializada em processar imagens e cálculos em paralelo.
- A GPU pode ser integrada ao processador, ou dedicada: em uma placa separada, com memória própria.
- Resumo estratégico: clock alto não é tudo! Núcleos, cache e arquitetura também determinam o desempenho. E o ciclo de instrução segue sempre busca, decodificação e execução.

### Cena 6 · `risc-cisc`

**Visual:** Dois cartões lado a lado. CISC: muitos blocos de tamanhos variados (instruções complexas) e, embaixo, “x86 · Intel e AMD · desktops e notebooks”. RISC: poucos blocos iguais (instruções simples) e “ARM · celulares, tablets, Apple com chip M”. Faixa “Celular → RISC (ARM)”. Depois, o diagrama de um SoC: um único chip com CPU, GPU, controlador de memória e outros componentes.

**Narração:**

- Outro tema clássico: as arquiteturas CISC e RISC. A CISC tem um conjunto grande de instruções complexas.
- Ela aparece nos processadores x86 da Intel e da AMD, usados em desktops e notebooks.
- A RISC tem um conjunto reduzido de instruções simples e rápidas, com menor consumo de energia. É o caso dos processadores ARM, de celulares, tablets e dos computadores da Apple com chip M.
- E, nos celulares, o processador fica dentro de um SoC, um System on a Chip: um único chip que reúne CPU, GPU, controlador de memória e outros componentes.

## Memórias

### Cena 7 · `hierarquia`

**Visual:** Pirâmide de cinco degraus, do topo para a base: Registradores, Cache, RAM, SSD e HD. Faixa “Mais perto da CPU → mais rápida, menor e mais cara por GB”. Ao lado de cada degrau surge a capacidade típica. Uma linha tracejada separa as voláteis (registradores, cache, RAM) das não voláteis (SSD, HD). Quadro verde “Memorize”.

**Narração:**

- Agora, as memórias. Elas são organizadas em uma hierarquia: no topo, os registradores; depois, a cache, a RAM, o SSD e, na base, o HD.
- A regra é: quanto mais perto do processador, mais rápida, menor e mais cara por gigabyte é a memória.
- Os registradores guardam apenas bytes. A cache, de kilobytes a dezenas de megabytes. A RAM, de oito a sessenta e quatro gigabytes.
- O SSD, de duzentos e cinquenta e seis gigabytes a alguns terabytes. E o HD, de um a vários terabytes.
- E repare: registradores, cache e RAM são voláteis. O SSD e o HD, não.
- Memorize: do mais rápido para o mais lento, registradores, cache, RAM, SSD e HD. A capacidade cresce no sentido inverso.

### Cena 8 · `cache`

**Visual:** Fluxo CPU → Cache (SRAM, dados e instruções mais usados) → RAM (bem mais lenta); faixa com a analogia “Cache = material na mesa · RAM = armário”. Depois, três blocos de tamanho crescente: L1 (menor e mais rápida, dentro de cada núcleo), L2 (maior, um pouco mais lenta) e L3 (a maior, compartilhada entre os núcleos). Quadro âmbar “Pegadinha de banca”.

**Narração:**

- Vamos olhar a cache de perto. Ela é uma memória extremamente rápida, feita de SRAM, que guarda os dados e as instruções que o processador mais usa.
- Assim, a CPU não fica esperando a RAM, que é bem mais lenta. É como deixar na mesa o material que você mais usa, em vez de buscá-lo no armário toda hora.
- A cache tem níveis. A L1 é a menor e a mais rápida, e fica dentro de cada núcleo.
- A L2 é maior e um pouco mais lenta. E a L3 é a maior, normalmente compartilhada entre os núcleos.
- Cuidado com a pegadinha: a cache é mais lenta que a RAM? Errado! A cache é mais rápida, porém bem menor.

### Cena 9 · `ram`

**Visual:** Cartão “RAM — Random Access Memory, memória de acesso aleatório”. Painel “Na RAM agora” com Sistema operacional, Programas abertos e Dados em uso; ao falar em desligar, tudo apaga e surge o selo “volátil: desligou, apagou”, além de “leitura ✓ escrita ✓”. Etiquetas DRAM · DDR4 · DDR5. Depois, o fluxo RAM cheia → memória virtual no disco → computador lento, e o quadro azul “Resumo estratégico”.

**Narração:**

- E a memória RAM? A sigla vem de Random Access Memory: memória de acesso aleatório.
- Ela é a memória principal: guarda o sistema operacional, os programas abertos e os dados em uso.
- A RAM é volátil: perde todo o conteúdo quando o computador é desligado. E permite leitura e escrita.
- Ela é feita de DRAM, a RAM dinâmica. As gerações atuais são a DDR4 e a DDR5.
- Se houver pouca RAM, o sistema passa a usar a memória virtual, no disco, e o computador fica lento.
- Resumo estratégico: a RAM é a memória principal, temporária e volátil. Com mais RAM, você mantém mais programas abertos sem perder desempenho.

## ROM e BIOS

### Cena 10 · `rom`

**Visual:** Cartão “ROM — Read Only Memory, somente leitura”, com os selos “não volátil” e “guarda o firmware de inicialização”. À direita, tabela Tipo / Característica com uma linha por tipo, na frase que o cita: ROM de máscara, PROM, EPROM, EEPROM e Flash.

**Narração:**

- E a ROM? É a Read Only Memory: a memória somente de leitura.
- Ela é não volátil: mantém os dados mesmo sem energia. E guarda o firmware que inicia o computador.
- Existem vários tipos. A ROM de máscara é gravada na fábrica e não pode ser alterada. A PROM pode ser gravada uma única vez pelo usuário.
- A EPROM é apagável com luz ultravioleta e regravável. A EEPROM é apagável eletricamente, e também regravável.
- E a memória flash é um tipo de EEPROM rápida, regravada em blocos. Ela é usada no chip da BIOS, em pen drives e em SSDs.

### Cena 11 · `bios`

**Visual:** Cartão “BIOS / UEFI: firmware da placa-mãe — inicializa o hardware e carrega o SO” e cartão da UEFI com três etiquetas: interface gráfica, discos maiores, Secure Boot. Abaixo, a sequência Liga → POST (testa o hardware) → Sistema operacional, com setas desenhadas. Por fim, cartão “CMOS: configurações da BIOS, mantidas por bateria”.

**Narração:**

- Esse firmware de inicialização é a BIOS, ou a sua substituta moderna, a UEFI. Ele fica na placa-mãe, inicializa o hardware e carrega o sistema operacional.
- A UEFI trouxe interface gráfica, suporte a discos maiores e inicialização segura, o Secure Boot.
- E, ao ligar o computador, a BIOS ou a UEFI faz o POST, o Power-On Self-Test: um teste automático do hardware.
- As configurações da BIOS ficam em uma pequena memória, mantida por uma bateria na placa-mãe: a memória CMOS.

### Cena 12 · `ram-rom`

**Visual:** Dois cartões alinhados linha a linha (Volatilidade, Uso, Escrita): RAM — volátil, programas e dados em uso, leitura e escrita livres; ROM — não volátil, firmware de inicialização, somente leitura no uso normal. Quadro âmbar “Pegadinha de banca”.

**Narração:**

- Vamos comparar. A RAM é volátil e guarda os programas e os dados em uso, com leitura e escrita livres.
- A ROM é não volátil, guarda o firmware de inicialização e, no uso normal, é somente leitura.
- Pegadinha: a RAM mantém os dados após o desligamento? Errado! A RAM é volátil. Quem mantém os dados é a ROM e os dispositivos de armazenamento, a memória secundária.

## Armazenamento

### Cena 13 · `hd-ssd`

**Visual:** Frase “Memória secundária: guarda os dados de forma permanente”. Tabela comparativa HD × SSD (com os ícones de cada um): Tecnologia, Velocidade, Resistência a impactos, Ruído e consumo, Custo por GB — uma linha por frase. Depois, a tabela sai e entra o quadro âmbar “Pegadinha de banca” com HD = disco magnético e SSD = memória flash.

**Narração:**

- Agora, o armazenamento, também chamado de memória secundária. Ele guarda os dados de forma permanente, não volátil, mesmo com o computador desligado.
- Os mais conhecidos são o HD e o SSD. O HD usa discos magnéticos giratórios e uma cabeça de leitura. Já o SSD usa memória flash, sem partes móveis.
- Por isso, o SSD é muito mais rápido e mais resistente a impactos, já que o HD tem partes mecânicas. E o SSD é silencioso e econômico.
- Já a vantagem do HD é o preço: o custo por gigabyte é menor.
- Pegadinha: o SSD é um disco magnético? Errado! O SSD usa memória flash. O disco magnético é o HD.

### Cena 14 · `ssd-midias`

**Visual:** Barras de velocidade: SSD SATA (mesma interface dos HDs) ≈ 600 MB/s e SSD NVMe (PCIe, formato M.2) passando de 3.000 MB/s, com os números contando. Abaixo, “Outras mídias”: cartões Pen drive e cartão SD (flash, 8 GB a 1 TB), CD (≈ 700 MB), DVD (4,7 GB) e Blu-ray (25 GB por camada, laser azul-violeta).

**Narração:**

- Existem dois tipos principais de SSD. O SSD SATA usa a mesma interface dos HDs, e fica limitado a cerca de seiscentos megabytes por segundo.
- Já o SSD NVMe se conecta pelo PCIe, normalmente no formato M.2, e passa facilmente de três mil megabytes por segundo.
- E existem outras mídias. O pen drive e o cartão de memória SD também usam memória flash, e vão de oito gigabytes a um terabyte.
- O CD, o DVD e o Blu-ray são mídias ópticas, lidas por laser. O CD guarda cerca de setecentos megabytes, e o DVD, quatro vírgula sete gigabytes em camada simples.
- Já o Blu-ray usa um laser azul-violeta, e guarda vinte e cinco gigabytes por camada.

### Cena 15 · `raid`

**Visual:** Quatro cartões, um por frase, com os discos desenhados e os blocos de dados: RAID 0 (striping: blocos divididos; um disco fica vermelho com ✗ e tudo se perde), RAID 1 (espelhamento: os mesmos blocos nos dois discos; um falha e o outro segue), RAID 5 (dados e paridade em 3 discos) e RAID 10 (1+0: espelhamento e divisão). Quadro âmbar “RAID não substitui backup”.

**Narração:**

- E o RAID? Ele combina vários discos para ganhar desempenho, segurança contra falhas, ou as duas coisas.
- No RAID 0, o striping, os dados são divididos entre os discos. Ganha-se desempenho, mas não há redundância: se um disco falhar, perde-se tudo.
- No RAID 1, o espelhamento, os mesmos dados são gravados em dois discos. Se um disco falhar, o outro mantém os dados.
- O RAID 5 distribui dados e paridade em três ou mais discos, e suporta a falha de um disco.
- E o RAID 10 combina espelhamento e divisão: desempenho e redundância, mas com um custo maior.
- Atenção: RAID não substitui o backup! Se um arquivo for apagado ou criptografado por um ransomware, a mudança é replicada em todos os discos.

### Cena 16 · `particao`

**Visual:** Um disco desenhado como barra dividida em duas partições, C: e D:. Cartões MBR (antigo: até 2 TB, 4 partições primárias) e GPT (com UEFI: discos muito maiores, muitas partições). Linha “Formatação → NTFS · exFAT · ext4” e faixa de alerta sobre a formatação rápida.

**Narração:**

- E como um disco é organizado? Em partições: divisões lógicas do disco. Cada partição pode ter seu próprio sistema de arquivos, como as unidades C e D no mesmo disco.
- O MBR e o GPT são esquemas de particionamento.
- O MBR, mais antigo, aceita discos de até dois terabytes e quatro partições primárias.
- Já o GPT, usado com a UEFI, aceita discos muito maiores e muitas partições.
- E a formatação prepara a partição com um sistema de arquivos, como o NTFS, o exFAT ou o ext4.
- Mas cuidado: a formatação rápida não apaga os dados de forma segura. Eles ainda podem ser recuperados com ferramentas específicas.

## Placa-mãe e energia

### Cena 17 · `placa-mae`

**Visual:** Desenho de uma placa-mãe vista de cima. Cada parte se acende e ganha etiqueta quando é citada: soquete (com o processador), chipset, slots de memória, slots PCIe, conectores SATA e M.2. Por fim, os barramentos são desenhados ligando as partes. À direita, cartão “Placa-mãe: conecta tudo”.

**Narração:**

- A placa-mãe é a placa de circuito principal. Ela conecta o processador, a memória, o armazenamento e os periféricos, e permite a comunicação entre eles.
- Nela fica o soquete, o encaixe do processador. E o chipset: o conjunto de chips que controla a comunicação entre os componentes.
- Os slots de memória recebem os pentes de RAM. E os slots PCIe recebem placas de expansão, como uma placa de vídeo dedicada.
- Os conectores SATA e M.2 ligam os HDs e os SSDs.
- E os barramentos são as vias de comunicação entre todos esses componentes.

### Cena 18 · `energia`

**Visual:** Quatro cartões, um por frase: Fonte de alimentação (CA → CC, potência em watts), Filtro de linha (picos e ruídos, várias tomadas), Estabilizador (subtensão e sobretensão) e Nobreak/UPS (bateria). Quando a energia “cai”, os três primeiros escurecem e só o nobreak continua aceso. Quadro verde “Memorize”.

**Narração:**

- E quem alimenta tudo isso? A fonte de alimentação converte a corrente alternada da tomada em corrente contínua para os componentes. A potência dela é medida em watts.
- O filtro de linha protege contra picos e ruídos na rede elétrica, e oferece várias tomadas.
- O estabilizador corrige as variações de tensão: a subtensão e a sobretensão.
- E o nobreak, ou UPS, tem bateria: na falta de energia, ele mantém o equipamento ligado por um tempo, para você salvar o trabalho e desligar com segurança.
- Memorize: só o nobreak mantém o computador funcionando quando a energia cai, porque ele tem bateria.

## Periféricos

### Cena 19 · `perifericos`

**Visual:** Três cartões, um por frase: Entrada (teclado; seta para o computador; teclado, mouse, scanner, microfone, webcam, leitor biométrico, leitor de código de barras), Saída (monitor; seta saindo; monitor, impressora, caixa de som, fone, projetor) e Entrada e saída (tela de toque; seta dupla; touchscreen, multifuncional, modem, placa de rede, pen drive, headset). Quadro âmbar “Pegadinha de banca”.

**Narração:**

- Agora, os periféricos: os dispositivos que se conectam ao computador para trocar informações com o usuário ou com outros equipamentos.
- Os de entrada enviam dados para o computador: teclado, mouse, scanner, microfone, webcam, leitor biométrico e leitor de código de barras.
- Os de saída recebem dados do computador e os apresentam: monitor, impressora, caixa de som, fone de ouvido e projetor.
- E os híbridos, de entrada e saída, fazem as duas coisas: tela touchscreen, impressora multifuncional, modem, placa de rede, pen drive e headset com microfone.
- Pegadinha: a tela sensível ao toque é de entrada e saída. Ela exibe a imagem, que é saída, e recebe o toque, que é entrada. O mesmo vale para a multifuncional, que imprime e digitaliza.

### Cena 20 · `monitores`

**Visual:** Cartões LCD com iluminação LED (LEDs atrás da tela → cristais líquidos filtram a luz) e OLED (cada pixel emite a própria luz: pretos perfeitos). Depois, retângulos aninhados em escala: HD 1280 × 720, Full HD 1920 × 1080, QHD 2560 × 1440 e 4K UHD 3840 × 2160; ao lado, uma tela com a diagonal em polegadas e o cartão da taxa de atualização (60 Hz, 144 Hz).

**Narração:**

- Nos monitores, o tipo mais comum é o LCD com iluminação LED: os cristais líquidos filtram a luz de LEDs posicionados atrás da tela.
- Já no OLED, cada pixel emite a própria luz, com pretos perfeitos e alto contraste.
- O tamanho é medido em polegadas, na diagonal da tela. Nas resoluções, o HD tem mil duzentos e oitenta por setecentos e vinte pixels, e o Full HD, mil novecentos e vinte por mil e oitenta.
- O QHD tem dois mil quinhentos e sessenta por mil quatrocentos e quarenta. E o 4K UHD, três mil oitocentos e quarenta por dois mil cento e sessenta.
- E a taxa de atualização indica quantas vezes por segundo a imagem é redesenhada, em hertz: por exemplo, sessenta ou cento e quarenta e quatro hertz.

### Cena 21 · `outros`

**Visual:** Quatro cartões em grade: Teclado ABNT2 (tecla Ç em destaque), Scanner com OCR (imagem de texto → texto editável, com cursor), Mesa digitalizadora (caneta) e Leitor biométrico (digital, rosto ou íris).

**Narração:**

- Outros periféricos também caem em prova. O teclado ABNT2 é o padrão brasileiro, com a tecla Ç e os acentos em posições próprias.
- O scanner com OCR, o reconhecimento óptico de caracteres, transforma a imagem de um texto digitalizado em texto editável.
- A mesa digitalizadora é uma entrada por caneta, usada em desenho e assinatura.
- E o leitor biométrico lê impressões digitais, o rosto ou a íris, para identificar o usuário.

## Conexões e impressoras

### Cena 22 · `conexoes`

**Visual:** Grade de seis cartões, cada um com o desenho do conector, na frase que o cita: USB (2.0 até 480 Mbps; 3.x 5, 10 ou 20 Gbps; USB-C reversível), HDMI (vídeo e áudio digitais), DisplayPort (vídeo digital), VGA (vídeo analógico, antigo), RJ-45 (rede Ethernet) e Bluetooth (sem fio, curto alcance). Faixa “Plug and Play: conectou, o sistema reconhece e configura”.

**Narração:**

- E como os periféricos se conectam? O USB é o padrão universal. O USB dois ponto zero chega a quatrocentos e oitenta megabits por segundo. O USB três chega a cinco, dez ou vinte gigabits por segundo. E o USB-C é o conector reversível.
- Para vídeo, o HDMI leva vídeo e áudio digitais para monitores e TVs. O DisplayPort também é vídeo digital, comum em monitores. E o VGA é vídeo analógico, um padrão antigo.
- O RJ-45 é o conector do cabo de rede Ethernet. E o Bluetooth é uma conexão sem fio, de curto alcance, para mouse, teclado e fones.
- E o Plug and Play é a capacidade do sistema de reconhecer e configurar um dispositivo automaticamente, assim que ele é conectado.

### Cena 23 · `impressoras`

**Visual:** Cinco cartões, um por tipo, cada um com o modo de imprimir e o destaque: Matricial (agulhas e fita · impacto · várias vias com carbono), Jato de tinta (gotas · fotos, baixo custo inicial), Laser (toner fixado por calor · rápida, baixo custo por página), Térmica (calor · cupons e etiquetas) e 3D (camada por camada · objetos). Quadro verde “Memorize”.

**Narração:**

- Por fim, as impressoras. A matricial usa agulhas que batem em uma fita com tinta: é uma impressora de impacto. Por isso, imprime formulários em várias vias com carbono.
- A jato de tinta solta gotas de tinta líquida. É boa para fotos coloridas e tem baixo custo inicial.
- A laser usa toner, um pó fixado no papel por calor. É rápida e tem baixo custo por página.
- A térmica imprime com calor sobre um papel especial, como em cupons fiscais e etiquetas. E a impressora 3D deposita material camada por camada, criando objetos físicos.
- Memorize: a impressora que usa toner é a laser. E a que imprime em várias vias com carbono é a matricial, a única de impacto.

## Revisão

### Cena 24 · `revisao`

**Visual:** Oito cartões de revisão com ícone de verificação, um por frase: CPU, Memórias, RAM × ROM, Armazenamento, Arquiteturas e RAID, Energia, Periféricos e Impressoras.

**Narração:**

- Hora de revisar o que você aprendeu.
- No processador, o desempenho depende do clock, dos núcleos e da cache. E três vírgula cinco gigahertz são três vírgula cinco bilhões de ciclos por segundo.
- Na hierarquia, do mais rápido para o mais lento: registradores, cache, RAM, SSD e HD.
- A RAM é volátil; a ROM, não. E, ao ligar o computador, a BIOS ou a UEFI faz o POST.
- O HD é magnético; o SSD usa memória flash, sem partes móveis.
- Celulares usam a arquitetura RISC, da família ARM. E o RAID 1 é o espelhamento, mas RAID não substitui o backup.
- Na energia, só o nobreak tem bateria.
- A tela touchscreen é de entrada e saída, e o OCR transforma a imagem em texto editável.
- E nas impressoras: toner é laser; várias vias com carbono, matricial.

### Cena 25 · `encerramento`

**Visual:** Bit grande à esquerda. Cartão “Pratique agora: 15 questões” e cartão “Próximo vídeo: Capítulo 6 — Armazenamento em Nuvem” na cor do capítulo 6. Bit acena na despedida.

**Narração:**

- Agora é a sua vez: faça as quinze questões do final do capítulo e confira a correção comentada.
- No próximo vídeo, vamos estudar o armazenamento em nuvem.
- Até lá, e bons estudos!
