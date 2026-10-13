# Fonte dos capítulos

As páginas `chapter_1.html` a `chapter_8.html` são **geradas** a partir dos
arquivos desta pasta. Para mudar o texto ou as questões de um capítulo,
edite os arquivos aqui e gere as páginas de novo. Não edite os
`chapter_N.html` direto: a próxima geração sobrescreve essas edições.

A pasta começa com `_` para o GitHub Pages não publicá-la no site.

## Arquivos

| Arquivo | Conteúdo |
|---|---|
| `gerar_capitulos.py` | script que monta as páginas |
| `conteudo/capN.html` | corpo do capítulo N |
| `conteudo/capN.quiz` | questões do capítulo N (aparecem na página do capítulo e no simulado) |
| `conteudo/capN.simulado.quiz` | questões exclusivas do simulado, do capítulo N |

O cabeçalho, os botões de narração, o bloco de questões, a navegação
anterior/próximo e o rodapé são iguais em todos os capítulos e ficam no
script. Os títulos dos capítulos estão na variável `TITULOS`.

## Como gerar as páginas

Requer Python 3, sem bibliotecas extras. Na raiz do repositório:

```bash
python3 _fonte/gerar_capitulos.py        # gera os 8 capítulos
python3 _fonte/gerar_capitulos.py 4      # gera só o capítulo 4
```

O script também gera sempre o `simulado-dados.js`, o banco de questões do
simulado final, juntando as questões de todos os `capN.quiz` e
`capN.simulado.quiz`.

Depois, confira a página no navegador e faça o commit dos arquivos de
`_fonte/` junto com os `chapter_N.html` gerados.

## Como escrever o corpo do capítulo (`capN.html`)

É HTML comum. As classes do `style.css` disponíveis:

| Elemento | Uso |
|---|---|
| `<h2>`, `<h3>` | seções e subseções |
| `<p class="chapter-intro">` | parágrafo de abertura, em destaque |
| `<div class="box-resumo"><strong>Resumo estratégico</strong><p>…</p></div>` | quadro azul de resumo |
| `<div class="box-prova"><strong>Pegadinha de banca</strong><p>…</p></div>` | quadro âmbar de alerta |
| `<div class="box-dica"><strong>Memorize</strong><p>…</p></div>` | quadro verde de memorização |
| `<table class="comparison-table">` | tabelas |
| `<div class="pseudocode-card"><h3>Título</h3><pre>…</pre></div>` | blocos de código ou exemplos |
| `<div class="flow-steps">` com `<div class="flow-step">` | passos numerados |
| `<section class="figure-card">` com `<div class="figure-grid three">` (ou `four`) | figura ilustrativa em blocos |
| `<span class="inline-code">` | código no meio do texto |

Dentro de `<pre>` e do texto, escreva `<` como `&lt;` e `>` como `&gt;`.

Cada capítulo tem uma cor própria: o script coloca a classe `cor-N` na
página, e as figuras, tabelas, passos numerados e o selo do capítulo usam
essa cor automaticamente, nos temas claro e escuro. As cores ficam nas
variáveis `--cap-1` a `--cap-8` do `style.css`.

## Como escrever as questões (`capN.quiz` e `capN.simulado.quiz`)

Cada questão tem um enunciado (`?`), as alternativas (`-` para errada,
`*` para a correta, exatamente uma) e a explicação (`=`). Separe as
questões com uma linha em branco:

```
? Quantos bits formam 1 byte?
- 4
* 8
- 16
= 1 byte = 8 bits. Quatro bits formam um nibble.

? Julgue o item: “Todo software livre é necessariamente gratuito”.
- Certo
* Errado
= Software livre se refere à liberdade de uso, estudo, modificação e distribuição, não ao preço.
```

- Nas questões, escreva `<` e `>` normalmente (o script converte).
- Escreva as alternativas na ordem que quiser: o script gira a lista para
  a correta não cair sempre na mesma letra. Questões Certo/Errado e
  Verdadeiro/Falso mantêm a ordem.
- O script para com uma mensagem de erro se uma questão não tiver
  enunciado, explicação ou exatamente uma alternativa correta, ou se
  tiver alternativas repetidas.

## Simulado final

A página `simulado.html` sorteia, a cada tentativa, 5 questões de cada
capítulo do banco (40 no total) e embaralha a ordem das questões e das
alternativas. Para o sorteio variar bastante, mantenha pelo menos 5
questões por capítulo no banco; quanto mais questões, mais variado fica
o simulado. A quantidade por capítulo e o tempo de prova ficam no início
do `simulado.js` (`QUESTOES_POR_CAPITULO` e `DURACAO_SEGUNDOS`).

## Progresso do aluno

A página `progresso.html` lê o que fica guardado no navegador do aluno
(`localStorage`), sem servidor nem login. Por isso o progresso vale só
para aquele navegador e dispositivo. As chaves usadas são:

| Chave | Gravada por | Conteúdo |
|---|---|---|
| `capitulo-concluido-capituloN` | botão “Marcar capítulo como concluído” | `"true"` ou `"false"` |
| `capitulo-visitado-capituloN` | abrir o capítulo | data do último acesso |
| `quiz-resultado-capituloN` | responder às questões do capítulo | acerto ou erro da última resposta de cada questão |
| `simulado-ultimo-resultado` | finalizar o simulado | nota da última tentativa |
| `simulado-historico` | finalizar o simulado | últimas 10 tentativas, com acertos por capítulo |

O botão “Apagar meu progresso” remove todas essas chaves.
