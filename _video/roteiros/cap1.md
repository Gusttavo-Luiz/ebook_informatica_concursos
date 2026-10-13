# Videoaula — Capítulo 1: Introdução à Informática

> Arquivo gerado por `ferramentas/exportar-roteiro.cjs` a partir de `roteiros/cap1.js`. Edite o `.js` e gere este arquivo de novo.

## Abertura

### Cena 1 · `abertura`

**Visual:** Bit grande à esquerda acena para o público. À direita surgem o rótulo “Capítulo 1” e o título “Introdução à Informática”. Em seguida, um roteiro de 5 tópicos aparece item por item, cada um na frase que o anuncia. Na última frase, Bit dá um pulinho.

**Narração:**

- Olá! Eu sou o Bit, e vou acompanhar você nesta série de videoaulas de Informática para Concursos.
- Neste primeiro capítulo, vamos construir a base de tudo: a Introdução à Informática.
- Você vai entender o que é informática e como um sistema computacional é formado.
- Vai ver a diferença entre dados e informação, e aprender as unidades de medida e os sistemas de numeração.
- Depois, vamos passear pela evolução dos computadores, pelos tipos de software e pelas linguagens de programação.
- E, para fechar, vamos entender como o computador funciona por dentro: a arquitetura de Von Neumann e o ciclo de instrução.
- Vamos lá?

## O que é informática

### Cena 2 · `conceito`

**Visual:** Título “Informática”. A definição aparece escrita. Depois, as palavras INFORMAÇÃO + AUTOMÁTICA entram pelos lados; as partes “AÇÃO” e “AUTOM” ficam apagadas e surge “= INFORMÁTICA” em destaque. Por fim, diagrama de três blocos com ícones — Entrada (teclado) → Processamento (engrenagem) → Saída (monitor) — com setas desenhadas e etiquetas do exemplo do boletim: “Notas: 7, 8 e 9”, “Calcula a média”, “Média: 8”.

**Narração:**

- Vamos começar pelo nome.
- Informática é a área que cuida do tratamento automático da informação, usando computadores.
- A palavra nasce da junção de duas outras: informação e automática.
- Ou seja: processar dados de forma automática, com sistemas computacionais.
- E todo computador segue a mesma lógica: ele recebe dados na entrada, processa esses dados e entrega informação na saída.
- Pense no boletim da escola: as notas entram, o computador calcula a média, e o resultado aparece na tela.

### Cena 3 · `sistema`

**Visual:** Quatro cartões entram um por frase: Hardware (chip), Software (janela de programa), Peopleware (pessoas) e Firmware (chip com código). No fim, faixa inferior com a síntese “Hardware: você toca · Software: você executa · Peopleware: quem usa”.

**Narração:**

- Um sistema computacional é formado por três elementos que trabalham juntos.
- O hardware é a parte física: o processador, a memória, o teclado, o monitor. É tudo o que você pode tocar.
- O software é a parte lógica: os programas, como o sistema operacional e os aplicativos. É o que você executa.
- E o peopleware são as pessoas: quem usa, opera e desenvolve os sistemas.
- Existe ainda o firmware: um software gravado diretamente em um chip do hardware, como a BIOS ou a UEFI da placa-mãe.
- Resumindo: hardware é o que você toca, software é o que você executa, e peopleware é quem usa.

## Dados e informação

### Cena 4 · `dados`

**Visual:** Três cartões ligados por setas: Dado (número 32 grande), Informação (“A média de idade da turma é 32 anos”, com 32 anos marcado) e Conhecimento (lâmpada + decisão). Quadro âmbar “Pegadinha de banca” no rodapé.

**Narração:**

- Agora, uma diferença que as bancas adoram cobrar: dado não é a mesma coisa que informação.
- Dado é um valor bruto, sem contexto. Por exemplo, o número trinta e dois, sozinho, não diz nada.
- Informação é o dado processado e colocado em contexto: a média de idade da turma é de trinta e dois anos. Agora sim, faz sentido.
- E o conhecimento é a informação interpretada e usada para tomar decisões: se a turma é adulta, o material pode usar exemplos do mercado de trabalho.
- Atenção à pegadinha: um dado isolado não tem significado. Ele só vira informação depois de processado e colocado em contexto.

## Unidades e numeração

### Cena 5 · `bits`

**Visual:** Dois blocos 1 (aceso, cor do capítulo) e 0 (apagado) com “ligado e desligado”; definição de bit. Fileira de 8 bits 01000001 aparece dígito a dígito, com chave embaixo: “8 bits = 1 byte → a letra A”. Depois, escada crescente Byte → KB → MB → GB → TB → PB, com “×1024” entre os degraus. Cartão final: HD de “1 TB” aparece com ≈ 931 GB.

**Narração:**

- O computador representa tudo com dois estados elétricos: ligado e desligado, que chamamos de um e zero.
- Cada um desses dígitos é um bit, a menor unidade de informação.
- Oito bits formam um byte, que representa um caractere simples, como uma letra.
- A partir daí, cada degrau multiplica por mil e vinte e quatro: kilobyte, megabyte, gigabyte, terabyte e petabyte.
- Uma curiosidade: os fabricantes de discos contam de mil em mil. Por isso, um HD de um terabyte aparece com cerca de novecentos e trinta e um gigabytes no computador.

### Cena 6 · `mbps`

**Visual:** Cartões lado a lado: Mbps (ícone de download, velocidade, b minúsculo) e MB (ícone de documento, tamanho, B maiúsculo). Conta grande “100 Mbps ÷ 8 = 12,5 MB/s”, com o resultado contando de 0 até 12,5.

**Narração:**

- E aqui mora uma pegadinha clássica.
- A velocidade da internet é medida em bits por segundo, os megabits por segundo, com b minúsculo.
- Já o tamanho dos arquivos é medido em bytes, os megabytes, com B maiúsculo.
- Como um byte tem oito bits, basta dividir por oito: uma conexão de cem megabits por segundo baixa, no máximo, cerca de doze vírgula cinco megabytes por segundo.

### Cena 7 · `bases`

**Visual:** Tabela Sistema / Base / Dígitos / Exemplo, uma linha por frase (binário, decimal, hexadecimal). Faixa final: “1010 (binário) = 10 (decimal) = A (hexadecimal) → o mesmo valor”.

**Narração:**

- Três sistemas de numeração aparecem com frequência: o binário, o decimal e o hexadecimal.
- O binário tem base dois e usa só zero e um.
- O decimal, que usamos no dia a dia, tem base dez: de zero a nove.
- E o hexadecimal tem base dezesseis: usa de zero a nove e as letras de A até F.
- Repare: um, zero, um, zero em binário, dez em decimal e A em hexadecimal representam o mesmo valor: dez.

### Cena 8 · `conversao`

**Visual:** Sem o Bit. À esquerda, pesos 8 4 2 1 surgem da direita para a esquerda; abaixo, os dígitos 1 0 1 1; os dígitos 1 acendem na cor do capítulo e aparece “8 + 0 + 2 + 1 = 11”. À direita, divisões sucessivas de 13 por 2 com os restos; seta subindo ao lado dos restos e o resultado “13 = 1101”.

**Narração:**

- E como converter binário para decimal?
- Cada posição vale uma potência de dois, da direita para a esquerda: um, dois, quatro, oito, e assim por diante.
- Vamos converter um, zero, um, um.
- Somamos o valor das posições que têm o número um: oito, mais dois, mais um. O resultado é onze.
- O caminho inverso também é simples: divida o número por dois várias vezes e leia os restos de baixo para cima.
- Treze, por exemplo, vira um, um, zero, um.

### Cena 9 · `hexa`

**Visual:** Linha “16 = 2⁴ → cada dígito hexadecimal = 4 bits”. Os grupos 1010 e 1111 surgem, recebem “= 10” e “= 15” e viram A e F; aparece “→ AF”. Linha do octal: 110 | 101 → 65. Quadro verde “Memorize”.

**Narração:**

- Para o hexadecimal, existe um atalho.
- Como dezesseis é dois elevado a quatro, cada dígito hexadecimal corresponde a exatamente quatro bits.
- É só separar o número binário em grupos de quatro, da direita para a esquerda. Um, zero, um, zero vale dez, que é A. E um, um, um, um vale quinze, que é F. O resultado é A F.
- No sistema octal, de base oito, os grupos são de três bits.
- Memorize: hexadecimal, grupos de quatro bits. Octal, grupos de três bits.

## Representação de dados

### Cena 10 · `caracteres`

**Visual:** Três cartões: ASCII (Aa, 7 bits, 128 caracteres), Unicode (globo, todos os idiomas e emojis) e UTF-8 (código, padrão da web). Exemplo de erro de codificação: “✗ informÃ¡tica → ✓ informática”.

**Narração:**

- Textos, imagens e sons também viram bits.
- Para os textos, existem tabelas de caracteres. O ASCII original usa sete bits e representa cento e vinte e oito caracteres: letras sem acento, números e pontuação.
- O Unicode abrange praticamente todos os idiomas do mundo, além de símbolos e emojis. E o UTF-8 é a forma de gravar o Unicode mais usada na web.
- Quando um texto aparece com símbolos estranhos no lugar dos acentos, o problema é de codificação: o arquivo foi gravado em um padrão e aberto em outro.

### Cena 11 · `imagens`

**Visual:** Grade de pixels 8 × 8 formando um rosto, pixel a pixel; legenda da resolução 1920 × 1080. Três círculos RGB sobrepostos e “24 bits por pixel ≈ 16,7 milhões de cores”. Depois, dois cartões: Matricial (círculo serrilhado em pixels; JPG, PNG, GIF, BMP) e Vetorial (círculo liso; SVG, AI, EPS).

**Narração:**

- Nas imagens, o menor ponto é o pixel. E a resolução é a quantidade de pixels, como mil novecentos e vinte por mil e oitenta.
- Cada pixel mistura vermelho, verde e azul, o famoso RGB. Com oito bits para cada cor, são vinte e quatro bits por pixel: cerca de dezesseis vírgula sete milhões de cores.
- A imagem matricial, ou bitmap, é feita de pixels e perde qualidade quando ampliada. É o caso do JPG e do PNG.
- Já a imagem vetorial é descrita por formas matemáticas e pode ser ampliada sem perder qualidade, como o SVG.

### Cena 12 · `compressao`

**Visual:** Dois cartões: Com perda (ícone de imagem, tom âmbar; JPG, MP3, MP4) e Sem perda (ícone de pacote, tom verde; PNG, ZIP, RAR, FLAC). Faixa final “Documento em ZIP → volta idêntico”.

**Narração:**

- E, para economizar espaço, os arquivos podem ser compactados.
- Na compressão com perda, alguns detalhes são descartados: o arquivo fica bem menor, mas o original não volta. É o caso do JPG, do MP3 e do MP4.
- Na compressão sem perda, o arquivo volta exatamente igual ao original, como no PNG e no ZIP.
- Por isso, um documento compactado em ZIP volta idêntico ao ser descompactado.

## Evolução dos computadores

### Cena 13 · `geracoes`

**Visual:** Linha do tempo horizontal desenhada da esquerda para a direita. Cinco marcos entram um por frase, com ícone e período: válvula (1ª, 1940–1956), transistor (2ª, 1956–1963), circuito integrado (3ª, 1964–1971), microprocessador (4ª, 1971–atual) e IA (5ª, atual). Faixa “ENIAC (1946) · Intel 4004 (1971)”.

**Narração:**

- Agora, vamos viajar no tempo. A evolução dos computadores é dividida em cinco gerações, de acordo com a tecnologia usada.
- A primeira geração usava válvulas eletrônicas. O ENIAC, de mil novecentos e quarenta e seis, era enorme, gastava muita energia e esquentava bastante.
- Na segunda geração, as válvulas foram trocadas por transistores: máquinas menores, mais rápidas e mais confiáveis.
- A terceira geração trouxe os circuitos integrados, com vários transistores em um único chip.
- Na quarta geração surgiu o microprocessador, com o Intel quatro mil e quatro, de mil novecentos e setenta e um. E os computadores pessoais se popularizaram.
- A quinta geração, a atual, é marcada pela inteligência artificial e pelo processamento paralelo.

### Cena 14 · `vtcmi`

**Visual:** Letras grandes V T C M I surgem uma a uma, cada uma com a palavra embaixo. Quadro âmbar: microprocessador = 4ª geração; circuitos integrados = 3ª.

**Narração:**

- Para memorizar a sequência, use a sigla VTCMI: válvulas, transistores, circuitos integrados, microprocessadores e inteligência artificial.
- E cuidado com a pegadinha: os microprocessadores surgiram na quarta geração. A terceira é a dos circuitos integrados, e as bancas adoram trocar as duas.

### Cena 15 · `classificacao`

**Visual:** Linha “Quanto ao sinal”: cartões Analógico (onda), Digital (sinal em degraus) e Híbrido (setas). Linha “Quanto ao porte”: Supercomputador, Mainframe, Servidor, Computador pessoal e Móveis e embarcados, cada um no momento em que é citado.

**Narração:**

- Os computadores também podem ser classificados.
- Quanto ao tipo de sinal, existem os analógicos, que trabalham com grandezas contínuas; os digitais, que trabalham com zeros e uns e são os computadores atuais; e os híbridos, que combinam os dois.
- Quanto ao porte, temos os supercomputadores, usados em pesquisas científicas e previsão do tempo, e os mainframes, que processam enormes volumes de transações, como em bancos.
- Temos também os servidores, que fornecem serviços em rede, os computadores pessoais, e os dispositivos móveis e embarcados, como celulares e os computadores dentro de carros e eletrodomésticos.

## Software e linguagens

### Cena 16 · `software`

**Visual:** Quatro cartões, um por frase: Básico (engrenagem), Aplicativo (janela), Utilitário (ferramenta) e Programação (código), com exemplos.

**Narração:**

- Vamos falar de software. Ele pode ser dividido em quatro tipos.
- O software básico, ou de sistema, controla o hardware e serve de base para os outros programas: o Windows, o Linux, o Android e os drivers.
- O software aplicativo executa as tarefas do usuário, como o Word, o Excel e os navegadores.
- O utilitário cuida da manutenção e do apoio ao sistema, como os antivírus e os compactadores.
- E as ferramentas de programação, como compiladores e interpretadores, servem para criar novos programas.

### Cena 17 · `licencas`

**Visual:** Coluna esquerda: Proprietário (cadeado), Freeware (presente) e Shareware (relógio). Centro: Software livre (estrela) com as quatro liberdades surgindo uma a uma. Direita: Código aberto e Domínio público. Na última frase tudo sai e entra o quadro âmbar “Software livre não significa gratuito”.

**Narração:**

- Os programas também têm licenças diferentes.
- O software proprietário tem código fechado e segue as regras do fabricante, como o Microsoft Office.
- O freeware é gratuito, mas normalmente tem código fechado. Já o shareware é distribuído para teste, com tempo ou recursos limitados, e depois é preciso pagar.
- O software livre garante quatro liberdades: executar o programa para qualquer finalidade, estudar como ele funciona, redistribuir cópias, e modificar e distribuir versões modificadas. O Linux e o LibreOffice são exemplos.
- Existem ainda o código aberto, em que o código-fonte é disponibilizado, e o domínio público, sem direitos autorais reservados.
- E a pegadinha mais famosa: software livre não significa software gratuito. A liberdade está no uso, no estudo, na modificação e na distribuição. Um software livre pode até ser vendido.

### Cena 18 · `linguagens`

**Visual:** Pilha de três níveis que sobe: linguagem de máquina (10110000 01100001), Assembly (MOV AL, 61h) e alto nível (print("Olá")), com seta “mais próximo do humano”. Depois, cartões Compilador (livro: traduz tudo e gera executável) e Interpretador (balões de tradução: linha por linha). Faixa “Java: compilado para bytecode → executado pela JVM”.

**Narração:**

- E como os programas são criados? O processador só entende linguagem de máquina: instruções em binário.
- A linguagem de montagem, o Assembly, usa abreviações para essas instruções e é de baixo nível.
- Já as linguagens de alto nível, como Python, Java e C, são mais próximas da linguagem humana.
- Para o computador entender, esse código precisa ser traduzido.
- O compilador traduz o código inteiro de uma vez e gera um programa executável, como um tradutor que entrega um livro já traduzido.
- O interpretador traduz e executa linha por linha, a cada execução, como um intérprete em uma palestra.
- E o Java combina os dois: ele é compilado para um código intermediário, o bytecode, que roda na máquina virtual Java, a JVM.

## Como o computador funciona

### Cena 19 · `von-neumann`

**Visual:** Sem o Bit. Bloco Memória (“dados + instruções”) à direita; faixa “Programa armazenado”. Área tracejada da CPU com três cartões entrando um por frase: Unidade de Controle, ULA e Registradores. Por fim, Entrada e saída e os barramentos desenhados ligando a CPU à memória e à E/S.

**Narração:**

- Chegamos ao coração do computador: a arquitetura de Von Neumann, proposta em mil novecentos e quarenta e cinco. Ela é o modelo clássico dos computadores modernos.
- A ideia central é o programa armazenado: as instruções e os dados ficam guardados na mesma memória.
- A CPU, a unidade central de processamento, reúne três partes.
- A unidade de controle busca as instruções na memória, interpreta e coordena a execução.
- A unidade lógica e aritmética, a ULA, faz as contas e as comparações.
- E os registradores são pequenas memórias internas, as mais rápidas do computador.
- Completam o modelo a memória principal, os dispositivos de entrada e saída, e os barramentos, que são as vias que ligam tudo.

### Cena 20 · `harvard`

**Visual:** Dois cartões: Von Neumann (um único caminho CPU–Memória, em âmbar, “gargalo”) e Harvard (dois caminhos verdes: instruções e dados). Quadro verde “Memorize: CPU = UC + ULA (+ registradores)”.

**Narração:**

- Como dados e instruções passam pelo mesmo caminho, o processador às vezes precisa esperar a memória. É o chamado gargalo de Von Neumann.
- A arquitetura Harvard resolve isso com memórias e caminhos separados para instruções e para dados. Ela é comum em microcontroladores.
- E atenção: CPU e ULA não são sinônimos. A ULA é só uma parte da CPU. Memorize: CPU é igual a unidade de controle mais ULA, mais os registradores.

### Cena 21 · `ciclo`

**Visual:** Anel pontilhado com três etapas — Busca, Decodificação, Execução — que acendem na cor do capítulo na frase correspondente, enquanto um ponto âmbar percorre o anel continuamente. Cartão “Contador de programa (PC)”. No fim, a sigla FDE em destaque.

**Narração:**

- E como o processador executa um programa? Repetindo sempre o mesmo ciclo, bilhões de vezes por segundo.
- Primeiro, a busca: a unidade de controle pega na memória a próxima instrução, cujo endereço está no contador de programa.
- Depois, a decodificação: a instrução é interpretada, e o processador descobre o que fazer e quais dados usar.
- Por fim, a execução: a operação é realizada, normalmente pela ULA, e o resultado é guardado em um registrador ou na memória. Alguns autores contam esse armazenamento como uma quarta etapa.
- Em inglês: Fetch, Decode, Execute. Memorize a sigla FDE.

## Tecnologias atuais

### Cena 22 · `atuais`

**Visual:** Quatro cartões: Inteligência artificial, Internet das Coisas, Big Data e Computação em nuvem. Sob o Big Data, cinco etiquetas surgem em sequência: Volume, Velocidade, Variedade, Veracidade, Valor.

**Narração:**

- Para terminar o conteúdo, algumas tecnologias atuais que aparecem nas provas.
- A inteligência artificial executa tarefas que exigiriam inteligência humana. Com o aprendizado de máquina, o sistema aprende padrões a partir de dados; e a IA generativa cria textos, imagens e códigos.
- A Internet das Coisas conecta objetos do dia a dia, como sensores, câmeras, lâmpadas e relógios inteligentes.
- O Big Data trata volumes enormes de dados, gerados em alta velocidade e em formatos variados. Ele costuma ser descrito pelos Vs: volume, velocidade, variedade, veracidade e valor.
- E a computação em nuvem, que você vai estudar no capítulo seis.

## Revisão

### Cena 23 · `revisao`

**Visual:** Sete cartões de revisão com ícone de verificação, um por frase: Sistema, Dados, Unidades, Numeração, Gerações, Software e CPU.

**Narração:**

- Hora de revisar o que você aprendeu.
- Hardware é o que você toca, software é o que você executa, peopleware é quem usa, e firmware é o software gravado no chip.
- Dado é bruto; informação é o dado com contexto; e conhecimento é a informação aplicada.
- Oito bits formam um byte, e cada unidade multiplica por mil e vinte e quatro. Velocidade em bits, tamanho em bytes.
- No hexadecimal, cada dígito vale quatro bits.
- As gerações seguem a sigla VTCMI, e o microprocessador é da quarta.
- Software livre não é sinônimo de gratuito. O compilador gera um executável; o interpretador traduz linha por linha.
- E a CPU reúne unidade de controle, ULA e registradores, executando o ciclo de busca, decodificação e execução.

### Cena 24 · `encerramento`

**Visual:** Bit grande à esquerda. Cartão “Pratique agora: 15 questões” e cartão “Próximo vídeo: Capítulo 2 — Sistemas Operacionais” na cor do capítulo 2. Bit acena na despedida.

**Narração:**

- Agora é a sua vez: faça as quinze questões do final do capítulo e confira a correção comentada.
- No próximo vídeo, vamos estudar os sistemas operacionais.
- Até lá, e bons estudos!
