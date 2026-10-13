# Videoaulas animadas

Produção da série de videoaulas do e-book: um vídeo por capítulo, em animação
2D, com narração em português do Brasil, textos de destaque na tela,
legendas e trilha sonora. A pasta começa com `_` para o GitHub Pages não
publicá-la no site.

Os vídeos são feitos **por código**: cada cena é desenhada em SVG/HTML,
animada com GSAP e capturada quadro a quadro pelo Chromium; a narração é
sintetizada por uma voz neural (Kokoro) e mixada com a trilha; o ffmpeg
junta tudo em um MP4. Assim, qualquer correção no roteiro gera um vídeo novo
com um único comando, e todos os capítulos mantêm a mesma identidade visual.

## Estrutura

| Caminho | Conteúdo |
|---|---|
| `identidade-visual.md` | guia de estilo da série (cores, tipografia, personagem, animação, áudio) |
| `roteiros/capN.js` | roteiro do capítulo N: narração frase a frase e montagem de cada cena |
| `roteiros/capN.md` | roteiro do capítulo N em texto, para leitura e revisão |
| `motor/` | motor de animação (página do vídeo, estilos, personagem Bit, ícones) |
| `motor/vendor/` | GSAP e fontes Inter e Source Serif 4 (cópias locais) |
| `ferramentas/produzir.cjs` | gera a prévia ou o vídeo completo |
| `ferramentas/exportar-roteiro.cjs` | gera `roteiros/capN.md` a partir do `capN.js` |
| `ferramentas/narrar.py` | sintetiza a narração (Kokoro) |
| `ferramentas/pronuncia.json` | grafia fonética de termos técnicos usada só na voz |
| `ferramentas/mixar.py` | monta o áudio, a trilha, os efeitos, as legendas e a boca do Bit |
| `saida/` | arquivos gerados (não vão para o Git) |

## Como funciona o roteiro

Cada cena tem uma lista de **falas** e uma função **montar** que posiciona os
elementos. `c.t(i)` é o instante em que começa a fala `i`, então todo
elemento entra exatamente quando a narração fala dele:

```js
{
  id: "dados",
  secao: "Dados e informação",
  bit: { x: 1720, y: 1020, s: 0.58 },          // posição do Bit (ou null)
  falas: [
    "Dado é um valor bruto, sem contexto.",
    "Informação é o dado processado e colocado em contexto.",
  ],
  montar(c) {
    c.cartao({ icone: "numeros", titulo: "Dado" }, { left: 140, top: 330, width: 440 }, c.t(0));
    c.cartao({ icone: "lampada", titulo: "Informação" }, { left: 720, top: 330, width: 440 }, c.t(1));
  },
}
```

Uma fala pode ter texto de tela diferente do texto falado:
`{ texto: "Fetch, Decode, Execute", falar: "fétch, dicôud, éksequiut" }`.
Os termos de `pronuncia.json` são trocados automaticamente só na voz.

## Preparar o ambiente

Requisitos: Node.js com Playwright e Chromium, ffmpeg (com libx264 e aac) e
Python 3.

```bash
# Voz neural Kokoro (o pacote npm expo-kokoro já traz o modelo e as vozes pt-BR)
mkdir -p ~/kokoro && cd ~/kokoro
npm pack expo-kokoro && tar -xzf expo-kokoro-*.tgz
python3 -m venv venv && venv/bin/pip install kokoro-onnx soundfile

export PYTHON=~/kokoro/venv/bin/python
export KOKORO_MODELO=~/kokoro/package/build/kokoro-quantized.onnx
export KOKORO_VOZES=~/kokoro/package/build/voices
export VOZ=pf_dora        # ou pm_alex / pm_santa (vozes masculinas)
```

## Produzir um capítulo

Na raiz do repositório:

```bash
node _video/ferramentas/produzir.cjs 1 previa     # imagens de conferência, sem áudio (rápido)
node _video/ferramentas/produzir.cjs 1 completo   # vídeo final
```

A prévia salva uma imagem no fim de cada fala em `_video/saida/cap1/previa/`.
O modo completo gera em `_video/saida/cap1/`:

- `videoaula-cap1.mp4` — vídeo 1920 × 1080, 30 qps, H.264 + AAC, com legendas
  embutidas (faixa opcional);
- `legendas.srt` — legendas avulsas, para YouTube ou outras plataformas;
- `narracao.wav`, `mix.wav` — áudios intermediários.

A narração fica em cache: ao corrigir uma frase, só ela é sintetizada de novo.

Para atualizar o roteiro em texto (com a minutagem, se o vídeo já foi gerado):

```bash
node _video/ferramentas/exportar-roteiro.cjs 1
```

## Licenças dos componentes

- GSAP — gratuito, inclusive para uso comercial (licença padrão da GSAP).
- Inter e Source Serif 4 — SIL Open Font License.
- Kokoro (modelo de voz) — Apache 2.0.
