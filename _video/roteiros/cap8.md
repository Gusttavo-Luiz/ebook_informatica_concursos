# Videoaula — Capítulo 8: Lógica de Programação

> Arquivo gerado por `ferramentas/exportar-roteiro.cjs` a partir de `roteiros/cap8.js`. Edite o `.js` e gere este arquivo de novo.

## Abertura

### Cena 1 · `abertura`

**Visual:** Bit grande à esquerda acena. À direita surgem o rótulo “Capítulo 8” e o título “Lógica de Programação”. Um roteiro de 5 tópicos aparece item por item, cada um na frase que o anuncia. Na última frase, Bit dá um pulinho.

**Narração:**

- Olá! Eu sou o Bit, e chegamos ao último capítulo da nossa série.
- Agora, vamos estudar a Lógica de Programação: a forma de pensar que vem antes de qualquer código.
- Você vai ver o que é um algoritmo, como escrever pseudocódigo e como ler um fluxograma.
- Vai aprender variáveis, operadores e a tabela-verdade, além das estruturas de decisão e de repetição.
- E, para fechar, vetores, funções, recursividade, algoritmos clássicos e a tradução para o Python.
- Vamos lá?

## Lógica e algoritmos

### Cena 2 · `logica`

**Visual:** Título “O que é lógica de programação?”. A definição aparece com “correta, clara e eficiente” marcados. Em seguida, a figura da estrutura base de um algoritmo: Entrada → Processamento → Decisão → Saída, com setas, e a legenda “Antes do código, existe o raciocínio”. Faixa “Lógica primeiro → qualquer linguagem fica mais fácil” e, por fim, o quadro azul “Resumo estratégico”.

**Narração:**

- Afinal, o que é lógica de programação?
- É a capacidade de pensar, organizar e descrever uma sequência de passos para resolver um problema de forma correta, clara e eficiente.
- Antes de existir Python, Java ou qualquer outra linguagem, existe a lógica por trás da solução. Programar começa entendendo o problema.
- Por isso, quem domina a lógica aprende qualquer linguagem com muito mais facilidade: já sabe resolver o problema antes de pensar na sintaxe.
- Resumo estratégico: a linguagem é a ferramenta; a lógica é a estrutura mental da solução.

### Cena 3 · `cafe`

**Visual:** Quatro cartões numerados entram na ordem da narração, como uma receita: 01 Pegar os ingredientes (pacote), 02 Preparar o ambiente (chaleira), 03 Executar a sequência (relógio) e 04 Obter o resultado (xícara de café). Faixa final: “Computador: instruções detalhadas, na ordem correta”.

**Narração:**

- Pense em uma tarefa do dia a dia: fazer café. Primeiro, você separa água, filtro e pó. Depois, coloca a água para esquentar e organiza o filtro.
- Em seguida, despeja a água, espera o café passar e acompanha o processo. E o café pronto é a saída da sequência lógica.
- No computador é igual: ele também precisa de instruções detalhadas, na ordem correta.

### Cena 4 · `algoritmo`

**Visual:** Título “O que é um algoritmo?” e a definição. Quatro cartões de características entram na ordem falada: Claro (alvo), Ordenado (lista numerada), Executável (engrenagem) e Finito (bandeira de chegada). Depois, o título muda para “Pseudocódigo” e surge a figura Problema (entender) → Pseudocódigo (organizar) → Código real (implementar), ligada por setas.

**Narração:**

- Essa sequência de passos tem um nome: algoritmo.
- Um algoritmo é uma sequência finita, ordenada e lógica de passos para resolver um problema.
- Ele precisa ser claro, sem ambiguidades; ordenado, com cada passo respeitando a sequência; executável, com ações que podem ser realizadas; e finito, com começo, meio e fim.
- Uma forma de escrever um algoritmo é o pseudocódigo: uma escrita estruturada, que não depende da sintaxe de uma linguagem específica.
- Ele aproxima você da programação real: primeiro, você entende o problema; depois, organiza a solução em pseudocódigo; e, por fim, implementa no código real.

### Cena 5 · `soma`

**Visual:** À esquerda, o pseudocódigo “Somar dois números” com realce de sintaxe; as linhas acendem conforme a narração. À direita, três cartões entram um por frase: Entrada (ler nota, nome, idade), Processamento (somar, comparar, dividir, verificar condição) e Saída (mostrar média, situação, mensagem). No fim, quadro verde “Dica do mestre”: o que entra? o que acontece? o que sai?

**Narração:**

- Veja um exemplo simples em pseudocódigo: somar dois números.
- Primeiro, a entrada: o algoritmo pede e lê o primeiro número, e depois o segundo.
- Depois, o processamento: soma recebe número um mais número dois. A seta indica que a variável recebe um valor.
- Por fim, a saída: o algoritmo escreve o resultado na tela.
- Quase todo algoritmo segue essas três partes: a entrada recebe dados; o processamento manipula esses dados; e a saída exibe o resultado final.
- Dica do mestre: quando travar em um exercício, pergunte: o que entra? O que acontece com isso? O que sai no final?

## Fluxogramas e variáveis

### Cena 6 · `fluxograma`

**Visual:** Grade de seis cartões com os símbolos do fluxograma desenhados, entrando na ordem falada: Terminal (oval), Processo (retângulo), Decisão (losango), Entrada/saída (paralelogramo), Conector (círculo) e Linha de fluxo (seta). No fim, o cartão do losango ganha contorno e destaque, e entra o quadro verde “Memorize”.

**Narração:**

- Outra forma de representar um algoritmo é o fluxograma: símbolos gráficos ligados por setas. E as provas adoram cobrar o significado de cada símbolo.
- O terminal, em forma de oval, marca o início ou o fim do algoritmo. O retângulo é o processo: um cálculo ou uma atribuição.
- O losango é a decisão: um teste lógico, com duas saídas, sim e não.
- O paralelogramo é a entrada ou a saída de dados, como uma leitura ou uma exibição. O círculo é o conector, que liga partes do fluxograma. E a seta, a linha de fluxo, indica a ordem de execução.
- Memorize: decisão é o losango. É nele que o fluxo se divide em dois caminhos.

### Cena 7 · `variaveis`

**Visual:** Definição de variável. Caixas com etiqueta surgem uma a uma: idade = 20 (Inteiro: 5 · 18 · 120), nota = 8.5 (Real: 7.5 · 1.85 · 99.99), nome = "Gustavo" (Texto) e aprovado = VERDADEIRO (Lógico), cada uma com a atribuição em pseudocódigo embaixo. Depois, quatro faixas de regras de nomes: ✗ nota final / ✓ nota_final, ✓ notaFinal; palavras reservadas riscadas (SE, ENQUANTO, if, while); Nota ≠ nota; e a constante PI <- 3.14 com cadeado.

**Narração:**

- Agora, as variáveis: espaços de memória que guardam valores, que podem ser usados e alterados durante a execução do programa.
- Pense em uma caixa com etiqueta: o nome fica na etiqueta, e o valor fica dentro da caixa.
- Cada variável tem um tipo. O inteiro guarda números como cinco, dezoito ou cento e vinte. O real guarda números com parte decimal, como sete e meio.
- O texto guarda caracteres entre aspas, como um nome. E o lógico só tem dois valores: verdadeiro ou falso.
- Os nomes seguem regras: começam com uma letra, ou sublinhado, e não têm espaços. Use nota_final ou notaFinal.
- Também não podem ser palavras reservadas, como SE, ENQUANTO, if ou while. E, em muitas linguagens, Nota e nota são variáveis diferentes.
- Por fim, a constante é um valor que não muda durante a execução, como PI recebe três vírgula catorze.

## Operadores

### Cena 8 · `operadores`

**Visual:** Três cartões: Aritméticos (+ - * / DIV MOD), Relacionais (= <> > < >= <=, com “resultado: VERDADEIRO ou FALSO”) e Lógicos (E, OU, NÃO). Cada operador aparece como peça quando é citado.

**Narração:**

- Os operadores permitem calcular, comparar e montar expressões lógicas. Eles se dividem em três grupos.
- Os aritméticos fazem as contas: soma, subtração, multiplicação, divisão, e ainda o DIV e o MOD.
- Os relacionais comparam valores: igual, diferente, maior, menor, maior ou igual e menor ou igual. E o resultado é sempre verdadeiro ou falso.
- Os lógicos, E, OU e NÃO, combinam ou invertem condições.

### Cena 9 · `divmod`

**Visual:** Duas pílulas: “DIV → quociente” e “MOD → resto”. Dezessete bolinhas surgem; três grupos de cinco acendem na cor do capítulo, numerados 1, 2, 3, e aparece “17 DIV 5 = 3”. As duas que sobram ficam âmbar e aparece “17 MOD 5 = 2”. Por fim, cartão “numero MOD 2 = 0 → par”.

**Narração:**

- O DIV e o MOD caem muito em prova. Os dois trabalham com a divisão inteira: o DIV devolve o quociente, e o MOD devolve o resto.
- Pegue dezessete dividido por cinco. O cinco cabe três vezes no dezessete. Então, dezessete DIV cinco é igual a três.
- E sobram dois. Então, dezessete MOD cinco é igual a dois.
- Um uso clássico: um número é par quando número MOD dois é igual a zero, ou seja, quando a divisão por dois não deixa resto.

### Cena 10 · `tabela-verdade`

**Visual:** Tabela-verdade montada célula a célula, com V em verde e F em vermelho: colunas A e B; depois A E B e A OU B, linha por linha; por fim, a coluna NÃO A. À direita, quadro verde “Memorize”.

**Narração:**

- Os operadores lógicos seguem regras fixas, resumidas na tabela-verdade. Considere duas condições, A e B.
- Se A e B são verdadeiras, A E B é verdadeiro, e A OU B também.
- Se só uma delas é verdadeira, o E já dá falso, mas o OU continua verdadeiro. E, com as duas falsas, os dois dão falso.
- Já o NÃO simplesmente inverte: se A é verdadeiro, NÃO A é falso; se A é falso, NÃO A é verdadeiro.
- Memorize: o E só é verdadeiro se tudo for verdadeiro. O OU só é falso se tudo for falso. E o NÃO inverte o valor.

### Cena 11 · `precedencia`

**Visual:** À esquerda, a ordem de precedência numerada de 1 a 6: parênteses; aritméticos (* / DIV MOD antes de + -); relacionais; NÃO; E; OU. À direita, a expressão (x + 2 * 3 > y) OU (y MOD 3 = 1) com x = 4 e y = 10, avaliada em dois cartões (FALSO e VERDADEIRO) e o resultado “FALSO OU VERDADEIRO → VERDADEIRO”. No fim, o lado direito dá lugar ao quadro âmbar “Pegadinha de banca: 10 > 10 é falso”.

**Narração:**

- Quando uma expressão mistura vários operadores, vale a ordem de precedência. Primeiro, os parênteses. Depois, os aritméticos.
- Entre eles, multiplicação, divisão, DIV e MOD vêm antes de soma e subtração. Em seguida, os relacionais. E, por último, NÃO, depois E, depois OU.
- Vamos avaliar esta expressão, com x igual a quatro e y igual a dez.
- No primeiro parêntese, a multiplicação vem antes: dois vezes três dá seis, e quatro mais seis dá dez. Dez é maior que dez? Não: falso.
- No segundo, dez MOD três dá um, porque sobra um. E um igual a um é verdadeiro. Falso OU verdadeiro: verdadeiro.
- Pegadinha de banca: dez maior que dez é falso. Só dez maior ou igual a dez seria verdadeiro. As bancas adoram montar a condição no limite exato.

## Sequência e decisão

### Cena 12 · `sequencial`

**Visual:** À esquerda, o pseudocódigo da área do retângulo; as linhas acendem em sequência, uma após a outra. À direita, quatro passos ligados por setas entram conforme a narração: Ler base → Ler altura → Calcular área → Exibir resultado.

**Narração:**

- Agora, as estruturas do algoritmo. Na estrutura sequencial, as instruções são executadas uma após a outra, na ordem em que aparecem.
- Veja o cálculo da área de um retângulo: o algoritmo lê a base, depois lê a altura, calcula a área, que é base vezes altura, e exibe o resultado.

### Cena 13 · `condicional`

**Visual:** À esquerda, o pseudocódigo “maior de idade” com SE/SENÃO; as linhas acendem com a narração. À direita, o fluxograma é montado: paralelogramo “LEIA idade” → losango “idade >= 18?” → saída “sim” (maior de idade) e “não” (menor de idade). No fim, quadro âmbar “Armadilha da banca”: x <- 10 é atribuição, x = 10 é comparação.

**Narração:**

- Já as estruturas condicionais permitem que o programa tome decisões, com base em testes lógicos.
- Neste exemplo, o algoritmo lê a idade e testa a condição: a idade é maior ou igual a dezoito?
- Se a condição for verdadeira, segue um caminho e escreve: você é maior de idade. Se for falsa, segue o outro e escreve: você é menor de idade.
- Armadilha da banca: não confunda x recebe dez com x igual a dez. O primeiro é uma atribuição; o segundo, uma comparação.

### Cena 14 · `encadeadas`

**Visual:** À esquerda, uma escada de losangos: nota >= 9? → sim: Excelente; não → nota >= 7? → Aprovado; não → nota >= 5? → Recuperação; não → Reprovado. À direita, o pseudocódigo da estrutura ESCOLHA (dia da semana), com CASO 1, CASO 7 e OUTROCASO acendendo na narração.

**Narração:**

- E quando há mais de duas possibilidades? Podemos encadear condições, uma dentro da outra.
- Na classificação de uma nota: com nove ou mais, excelente. Senão, com sete ou mais, aprovado. Senão, com cinco ou mais, recuperação. E, se nenhum teste passar, reprovado.
- Agora, quando a mesma variável é comparada com vários valores fixos, a estrutura ESCOLHA deixa o algoritmo mais limpo do que vários SE encadeados.
- No dia da semana, por exemplo: no CASO um, escreve domingo; no CASO sete, sábado.
- E o OUTROCASO é executado quando nenhum dos casos anteriores corresponde ao valor: aqui, dia útil.

## Repetição

### Cena 15 · `enquanto`

**Visual:** À esquerda, o pseudocódigo ENQUANTO que conta de 1 a 5. À direita, a caixa da variável contador, o teste “contador <= 5?” com selo V/F e uma tela escura. A cada volta, as linhas acendem: o teste dá V, o número aparece na tela e o contador aumenta. Com 6, o teste dá F e o laço termina. Faixa: “Definir contador → executar e atualizar → encerrar quando a condição falhar”.

**Narração:**

- As estruturas de repetição executam um bloco de instruções várias vezes, sem que você precise escrever a mesma lógica de novo.
- No ENQUANTO, o bloco se repete enquanto a condição for verdadeira. Este exemplo conta de um até cinco, e o contador começa em um.
- A cada volta, ele testa: contador menor ou igual a cinco? Se for, escreve o contador e soma um a ele. Assim, a tela mostra de um até cinco.
- Quando o contador chega a seis, a condição fica falsa, e a repetição termina. Ou seja: definir o contador, executar e atualizar, e encerrar quando a condição falhar.

### Cena 16 · `para-repita`

**Visual:** No alto, o pseudocódigo PARA da tabuada, com a fileira do contador de 1 a 10 ao lado. Embaixo, o REPITA da senha, com um mini fluxograma: o bloco executa primeiro e só então o losango testa; “não” volta para o bloco, “sim” leva a “Acesso liberado”. Depois, tabela comparando PARA, ENQUANTO e REPITA...ATÉ, linha por linha, e o quadro âmbar “Pegadinha de banca”.

**Narração:**

- O PARA é usado quando o número de repetições é definido antes de começar. Na tabuada, o contador vai de um até dez, e cada volta calcula e escreve número vezes contador.
- Já o REPITA executa o bloco primeiro e só testa a condição no final. Aqui, ele pede a senha até que ela seja um, dois, três, quatro. Aí, escreve: acesso liberado.
- Compare as três estruturas. O PARA tem o número de repetições definido antes de começar: é ideal para percorrer de um até N, tabuadas e vetores.
- O ENQUANTO testa a condição no início. Se ela já começar falsa, o bloco pode não executar nenhuma vez.
- O REPITA testa no final: executa pelo menos uma vez e para quando a condição fica verdadeira. É comum em menus e na validação de entrada.
- Pegadinha: o ENQUANTO continua enquanto a condição é verdadeira; o REPITA continua até a condição se tornar verdadeira. E só o REPITA garante pelo menos uma execução.

### Cena 17 · `contadores`

**Visual:** À direita, dois cartões: Contador (contador <- contador + 1) e Acumulador (soma <- soma + nota). À esquerda, o pseudocódigo “ler 3 notas e calcular a média”; a linha do PARA acende junto com o cartão Contador, a linha soma <- soma + nota junto com o Acumulador, e por fim a linha da média.

**Narração:**

- Dois conceitos aparecem em praticamente todo algoritmo. O contador normalmente aumenta de um em um, para marcar quantas vezes algo aconteceu.
- Já o acumulador soma valores ao longo da execução.
- Veja os dois juntos: este algoritmo lê três notas e calcula a média. O PARA usa o contador, que vai de um até três.
- E, a cada nota lida, soma recebe soma mais nota: esse é o acumulador. No final, a média é a soma dividida por três.

### Cena 18 · `teste-mesa`

**Visual:** Definição de teste de mesa e três pílulas (encontrar erros, prever resultados, entender as variáveis). Tabela Passo / x / y / z preenchida linha a linha. Depois, o trecho “x <- 1; ENQUANTO x < 20 FAÇA x <- x * 2; ESCREVA x” à esquerda e a tabela de voltas à direita, linha por linha, até “encerra”. Cartão “Saída: 2, 4, 8, 16, 32”, com o 32 destacado.

**Narração:**

- Para saber o que um algoritmo faz, use o teste de mesa: a simulação manual da execução. Ele ajuda a encontrar erros, prever resultados e entender como as variáveis mudam.
- Anote cada variável em uma coluna. Com x recebe dois e y recebe três, z recebe x mais y e termina valendo cinco.
- Nas provas, o teste de mesa é a melhor forma de resolver questões com laços. O que este trecho escreve?
- x começa em um. Como um é menor que vinte, x dobra para dois, e o dois é escrito. Depois, vêm quatro, oito e dezesseis.
- Com dezesseis, o teste ainda passa: x vira trinta e dois, e o trinta e dois também é escrito. Só na volta seguinte o teste falha, porque trinta e dois não é menor que vinte.
- A saída é: dois, quatro, oito, dezesseis e trinta e dois. Repare: o trinta e dois é escrito, porque o teste só acontece no início da volta seguinte.

## Vetores e funções

### Cena 19 · `vetores`

**Visual:** Vetor “notas” com cinco caixas e índices [1] a [5]. Cartão “✗ nota1, nota2, nota3… → ✓ notas[i]” e a sequência LEIA 5 notas → calcula a média → ESCREVA as acima da média. Na pegadinha, surge uma segunda fileira de índices [0] a [4] em âmbar e o quadro âmbar. Depois, matriz 3 × 2 (alunos × provas): a célula notas[2, 1] acende; à direita, o laço aninhado e as células acendendo em ordem com o contador “LEIA × 6”.

**Narração:**

- Agora, os vetores. Um vetor, ou array, é uma variável que guarda vários valores do mesmo tipo, acessados por um índice.
- Em vez de criar nota um, nota dois, nota três, e assim por diante, você cria um único vetor, notas. Com um laço, dá para ler cinco notas, calcular a média e mostrar só as que ficaram acima dela.
- Pegadinha de banca: em pseudocódigo, o primeiro índice costuma ser um. Mas, em linguagens como C, Java, Python e JavaScript, ele é zero: um vetor de cinco posições vai de zero a quatro.
- Já a matriz é um vetor com duas dimensões, linhas e colunas, acessada por dois índices. O total de elementos é linhas vezes colunas.
- Com as notas de três alunos em duas provas, temos uma matriz de três por dois: seis notas. E notas dois, um é a nota do aluno dois na prova um.
- Para preencher a matriz, usamos um laço aninhado: para cada valor de i, o laço interno percorre todos os valores de j. Assim, o LEIA é executado três vezes dois: seis vezes.

### Cena 20 · `funcoes`

**Visual:** Faixa “Sub-rotinas → modularização”. Cartões Função (retorna valor) e Procedimento (sem retorno). À direita, o pseudocódigo da função media(a, b) e a chamada media(6, 9) → 7.5. Depois, diagrama do programa principal (variáveis globais) contendo a sub-rotina (variáveis locais). Por fim, dois painéis: Por valor (a cópia muda de 5 para 9, o original continua 5) e Por referência (o original muda de 5 para 9).

**Narração:**

- Para não repetir o mesmo trecho várias vezes, o algoritmo pode ser dividido em sub-rotinas. É a modularização.
- A função recebe parâmetros e retorna um valor, como calcular a média de duas notas. Já o procedimento executa uma tarefa, mas não retorna valor, como exibir um cabeçalho na tela.
- Veja a função média: ela recebe a e b e retorna a mais b, dividido por dois. Então, média de seis e nove dá sete e meio.
- As variáveis criadas dentro de uma sub-rotina são locais: só existem ali dentro. Já as declaradas no programa principal, e visíveis em todo o algoritmo, são globais.
- Os parâmetros podem ser passados por valor: a sub-rotina recebe uma cópia, e as alterações feitas dentro dela não afetam a variável original.
- Ou por referência: a sub-rotina recebe acesso à própria variável, e as alterações feitas dentro dela mudam a variável original.

### Cena 21 · `recursividade`

**Visual:** Cartão “Chama a si mesma” com ícone de ciclo e a exigência do caso base. Depois, o pseudocódigo da função fatorial, com o caso base marcado. À direita, as chamadas descem em escada: fatorial(4) = 4 * fatorial(3) ... até fatorial(1) = 1 (caso base, em âmbar). Por fim, “4 × 3 × 2 × 1 = 24”, com o resultado contando até 24.

**Narração:**

- Uma função é recursiva quando chama a si mesma. Ela precisa de um caso base, que encerra as chamadas. Sem ele, a recursão nunca termina.
- O exemplo clássico é o fatorial. Se n for menor ou igual a um, a função retorna um: esse é o caso base. Senão, retorna n vezes o fatorial de n menos um.
- Então, fatorial de quatro é quatro vezes fatorial de três, que é três vezes fatorial de dois, que é dois vezes fatorial de um.
- Fatorial de um cai no caso base e retorna um. Multiplicando tudo: quatro vezes três vezes dois vezes um, que dá vinte e quatro.

## Algoritmos na prática

### Cena 22 · `completo`

**Visual:** À esquerda, o pseudocódigo “Aprovação com média e frequência”. À direita, quatro etapas — Entrada, Processamento, Decisão, Saída — acendem uma por frase, junto com as linhas correspondentes do código. No fim, as etapas dão lugar ao quadro azul “Resumo estratégico”.

**Narração:**

- Agora, vamos juntar tudo em um exemplo completo: a aprovação de um aluno. Na entrada, o algoritmo lê duas notas e a frequência.
- No processamento, calcula a média das duas notas.
- Na decisão, testa duas condições ao mesmo tempo: média maior ou igual a sete E frequência maior ou igual a setenta e cinco. Com o E, as duas precisam ser verdadeiras.
- Na saída, escreve aluno aprovado ou aluno reprovado, e mostra a média final.
- Resumo estratégico: programar bem é saber identificar, com clareza, as entradas, os processamentos, as decisões, as repetições e as saídas.

### Cena 23 · `classicos`

**Visual:** Troca de valores: pseudocódigo de três linhas à esquerda e três caixas à direita (a com bola magenta, b com bola âmbar, aux vazia); a cada linha, a bola correspondente é copiada. Cartão vermelho “Sem aux: a <- b; b <- a → o valor de a se perde”. Depois, o algoritmo do maior de 10 números à esquerda e, à direita, dez barras que surgem uma a uma; a maior até o momento fica magenta e recebe a etiqueta “maior”.

**Narração:**

- Agora, alguns algoritmos clássicos. O primeiro troca os valores de duas variáveis, a e b, com a ajuda de uma variável auxiliar.
- Primeiro, aux recebe a: guardamos o valor de a. Depois, a recebe b. E, por fim, b recebe aux, que é o valor antigo de a.
- Sem a variável auxiliar, o valor de a seria perdido na segunda linha.
- O segundo encontra o maior de dez números. O algoritmo lê o primeiro número e o guarda como o maior.
- Depois, lê os outros nove, um por vez. Sempre que um número for maior que o maior atual, ele vira o novo maior. No fim, escreve o maior valor.

### Cena 24 · `busca-bolha`

**Visual:** Busca sequencial: vetor [5, 3, 8, 1], pílula “procurando: 8” e uma lupa que passa por cada caixa; as caixas diferentes ficam cinza e o 8 fica verde, com o contador de comparações. Cartão “vetor de N elementos → até N comparações”. Depois, ordenação bolha: as peças 5, 3, 8, 1 trocam de lugar fisicamente, com pares comparados em âmbar; ao fim de cada passada, a peça que chegou ao final fica verde, e o registro das três passadas aparece embaixo.

**Narração:**

- A busca sequencial percorre o vetor do início ao fim, comparando cada elemento com o valor procurado, até encontrá-lo ou chegar ao final.
- É simples, mas, em um vetor de N elementos, pode precisar de até N comparações.
- Já a ordenação bolha, o bubble sort, compara elementos vizinhos e troca os dois de lugar quando estão fora de ordem. As passadas se repetem até não haver mais trocas.
- A cada passada, o maior valor sobe para o final. Veja com cinco, três, oito e um: na primeira passada, o cinco troca com o três, e o oito troca com o um.
- Na segunda passada, o cinco troca com o um. Na terceira, o três troca com o um. E o vetor fica ordenado: um, três, cinco e oito.

### Cena 25 · `python`

**Visual:** Duas tabelas de equivalência Pseudocódigo → Python, linha a linha: LEIA/input, ESCREVA/print, atribuição (=), comparação (==), diferente (!=); SE/if, ENQUANTO/while, PARA/for i in range(1, 11), E OU NÃO/and or not, MOD DIV/% //. No fim, a linha do range acende em âmbar e entra o quadro “Pegadinha de banca” sobre o range e a indentação.

**Narração:**

- A lógica é a mesma em qualquer linguagem; muda apenas a forma de escrever. Veja a equivalência com o Python, uma das linguagens mais usadas para começar a programar.
- O LEIA vira input, e o ESCREVA vira print.
- Atenção aos sinais: a atribuição vira um sinal de igual, a comparação vira dois sinais de igual, e o diferente vira exclamação e igual.
- SE, ENQUANTO e PARA viram if, while e for. E, OU e NÃO viram and, or e not. E o MOD e o DIV viram porcentagem e duas barras.
- Pegadinha de banca: em Python, range de um a onze vai de um até dez, porque o último número nunca é incluído. E a indentação, o recuo, define os blocos, no lugar de FIMSE ou FIMPARA.

## Erros e revisão

### Cena 26 · `erros`

**Visual:** Lista dos cinco erros comuns de iniciantes, cada um com um ✗ vermelho, entrando na frase que o cita. À direita, ícone de ciclo girando sem parar, com o selo “repetição infinita”. No rodapé, quadro âmbar “Pegadinha de lógica”.

**Narração:**

- Antes da revisão, fique atento aos erros mais comuns de quem está começando: não entender o problema antes de tentar resolver, e confundir entrada com saída.
- Também é comum esquecer de atualizar o contador em um laço, montar condições erradas e não testar o algoritmo com valores reais.
- Pegadinha de lógica: se o contador nunca for atualizado, a condição nunca muda. E o programa pode entrar em repetição infinita.

### Cena 27 · `revisao`

**Visual:** Sete cartões de revisão com ícone de verificação, um por frase: Algoritmo, Operadores, Lógica, Repetição, Teste de mesa, Sub-rotinas e Python.

**Narração:**

- Hora de revisar o que você aprendeu.
- Algoritmo é uma sequência finita, ordenada e lógica de passos. E, no fluxograma, a decisão é o losango.
- DIV dá o quociente, e MOD dá o resto. E a seta é atribuição, enquanto o igual é comparação.
- Na tabela-verdade, o E só é verdadeiro se tudo for verdadeiro, e o OU só é falso se tudo for falso. Na precedência, os parênteses vêm primeiro.
- O ENQUANTO testa no início; o REPITA testa no final e executa pelo menos uma vez; e o PARA tem o número de repetições definido.
- No teste de mesa, acompanhe as variáveis volta a volta. E, em muitas linguagens, o vetor começa no índice zero.
- A função retorna valor, e o procedimento não. Por valor vai uma cópia; por referência, a própria variável. E toda recursão precisa de um caso base.
- E, no Python, o range não inclui o último número, e a indentação define os blocos.

### Cena 28 · `encerramento`

**Visual:** Bit grande à esquerda. Cartão “Pratique agora: 15 questões no final do Capítulo 8”. Cartão azul-marinho “Desafio final: Simulado — 40 questões sorteadas dos 8 capítulos (5 de cada), 60 minutos, correção comentada no final”. Selo “Série concluída: 8 de 8 capítulos”; Bit pula de alegria e acena na despedida.

**Narração:**

- Agora é a sua vez: faça as quinze questões do final do Capítulo 8 e confira a correção comentada.
- E, para fechar a série, encare o desafio final: o simulado, com quarenta questões sorteadas dos oito capítulos, cinco de cada, em sessenta minutos, com correção comentada no final.
- Parabéns por chegar até aqui! Você concluiu todos os capítulos da série.
- Boa prova, e bons estudos!
