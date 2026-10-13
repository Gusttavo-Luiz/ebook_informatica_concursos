# Identidade visual da série de videoaulas

Série: **Informática para Concursos — Videoaulas animadas**. Um vídeo por
capítulo, todos com o mesmo estilo, a mesma paleta, a mesma tipografia e o
mesmo padrão de animação.

## Estilo

- **2D plano (flat)**, com formas arredondadas, sem contornos pretos, sombras
  suaves e no máximo dois tons por objeto.
- Fundo claro e limpo, com formas decorativas grandes e translúcidas na cor do
  capítulo.
- Cada conceito vira um objeto visual: ícone, diagrama, linha do tempo,
  tabela ou situação do dia a dia. Texto na tela só para palavras-chave,
  definições, exemplos e números.
- Quadro: 1920 × 1080, 30 quadros por segundo. Margem de segurança de 120 px
  nas laterais e 90 px em cima e embaixo.

## Paleta

| Uso | Cor |
|---|---|
| Fundo | `#F5F7FB` |
| Superfície (cartões) | `#FFFFFF` |
| Texto principal | `#1A2230` |
| Texto secundário | `#4A5568` |
| Cor da série (azul-marinho do site) | `#1D4E89` |
| Resumo (azul) | fundo `#EAF1FB`, destaque `#1D4E89` |
| Pegadinha de banca (âmbar) | fundo `#FDF3E1`, destaque `#C27C0E` |
| Memorize (verde) | fundo `#E9F6EF`, destaque `#2F8A5B` |
| Acerto / erro | `#2F8A5B` / `#C2412F` |

Cada vídeo usa a **cor do capítulo**, a mesma do site, nos detalhes: formas
de fundo, rótulos, setas, destaques e transições.

| Capítulo | Cor |
|---|---|
| 1. Introdução à Informática | `#2563EB` azul |
| 2. Sistemas Operacionais | `#0F766E` verde-azulado |
| 3. Internet e Navegadores | `#4F46E5` índigo |
| 4. Pacote Office | `#15803D` verde |
| 5. Hardware | `#B45309` âmbar |
| 6. Armazenamento em Nuvem | `#0369A1` azul-céu |
| 7. Segurança da Informação | `#BE123C` rosa |
| 8. Lógica de Programação | `#A21CAF` magenta |

## Tipografia

- **Títulos:** Source Serif 4, 700.
- **Textos, rótulos e números:** Inter, 500 a 800.
- **Código e valores binários:** fonte monoespaçada.
- Tamanhos mínimos no quadro de 1080 px: título 84 px, subtítulo 44 px,
  texto 36 px, rótulo 26 px (caixa alta, espaçamento 0,12 em).

## Personagem: Bit

Apresentador da série. É um pequeno computador simpático: tela arredondada
azul-marinho com rosto (olhos e boca), antena com uma luz na cor do capítulo,
bracinhos e um suporte como corpo.

- Fala junto com a narração: a boca abre conforme o volume da voz.
- Pisca a cada 3 a 4 segundos e flutua levemente quando está parado.
- Acena na abertura e no encerramento; aponta para o conteúdo nas explicações.
- Fica no canto da tela durante os diagramas, para não competir com o
  conteúdo.

## Animação

| Elemento | Padrão |
|---|---|
| Entrada de elementos | deslizar 40 px + aparecer, 0,6 s, curva `power3.out` |
| Destaques e ícones | “pulo” suave, 0,5 s, curva `back.out(1.7)` |
| Listas | um item por vez, sincronizado com a frase que o menciona |
| Linhas e setas | desenhadas do início ao fim, 0,8 s |
| Troca de cena | cortina circular na cor do capítulo, 0,8 s |
| Saída | elementos somem juntos, 0,4 s, antes da transição |

Regra principal: **nada aparece antes de a narração mencioná-lo**. Cada
elemento entra no início da frase que fala dele.

## Estrutura de cada vídeo

1. Vinheta da série (≈ 5 s).
2. Abertura com Bit: tema do capítulo e roteiro do que será visto.
3. Blocos de conteúdo, na ordem do capítulo do e-book.
4. Quadros de “Pegadinha de banca” e “Memorize” quando o capítulo traz.
5. Revisão visual: os principais conceitos em cartões.
6. Encerramento: convite para as questões do capítulo e anúncio do próximo
   vídeo.

## Áudio

- Narração em português do Brasil, voz neural (Kokoro, voz `pf_dora`),
  velocidade levemente reduzida para facilitar o acompanhamento.
- Trilha suave gerada por código, bem abaixo da voz e abaixada
  automaticamente quando há narração.
- Efeito sonoro discreto nas trocas de cena.
- Volume final normalizado em −16 LUFS (padrão de plataformas de vídeo).

## Acessibilidade

- Legendas completas em arquivo `.srt` e embutidas no MP4 como faixa
  opcional.
- Contraste mínimo de 4,5:1 nos textos.
- Termos técnicos aparecem escritos na tela quando são falados.
