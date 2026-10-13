"""Gera as páginas chapter_N.html a partir dos arquivos em _fonte/conteudo/.

Cada capítulo tem dois arquivos:
    conteudo/capN.html  corpo do capítulo (HTML com as classes do style.css)
    conteudo/capN.quiz  questões do capítulo

Formato do .quiz (questões separadas por uma linha em branco):
    ? Enunciado
    - alternativa errada
    * alternativa correta
    = explicação mostrada depois da resposta

Uso, a partir da raiz do repositório:
    python3 _fonte/gerar_capitulos.py        (gera os 8 capítulos)
    python3 _fonte/gerar_capitulos.py 3 5    (gera só os capítulos 3 e 5)
"""
import html
import pathlib
import random
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent
REPO = ROOT.parent

TITULOS = {
    1: "Introdução à Informática",
    2: "Sistemas Operacionais",
    3: "Internet e Navegadores",
    4: "Pacote Office",
    5: "Hardware",
    6: "Armazenamento em Nuvem",
    7: "Segurança da Informação",
    8: "Lógica de Programação",
}

HEAD = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Capítulo {n} — {titulo}</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&amp;display=swap" rel="stylesheet"/>
<link href="style.css" rel="stylesheet"/>
</head>
<body class="chapter-page" data-pagina="capitulo{n}">
<div class="progress-bar" id="progressBar"></div>
<div class="reading-container">
<div class="chapter-header">
<a class="back-home" href="index.html">← Voltar para a página inicial</a>
<div class="chapter-tools">
<button class="audio-button" id="botaoNarrar" type="button">Ouvir capítulo</button>
<button class="audio-button" id="botaoPausarNarracao" type="button">Pausar narração</button>
<button class="btn-primary" id="botaoConcluirCapitulo" type="button">Marcar capítulo como concluído</button>
</div>
</div>
<article class="reading-card">
<span class="chapter-badge">Capítulo {n}</span>
<h1>{titulo}</h1>
<div class="chapter-meta">
<span class="chapter-status" id="statusLeitura">Status: leitura em andamento.</span>
<span class="chapter-status" id="statusNarracao">Narração pronta para uso.</span>
</div>
"""

TAIL = """<div class="chapter-navigation">
{anterior}
{proximo}
</div>
</article>
<footer class="page-footer">
<p>Informática para Concursos · E-book</p>
</footer>
</div>
<script src="script.js"></script>
</body>
</html>
"""


def ler_quiz(n):
    texto = (ROOT / "conteudo" / f"cap{n}.quiz").read_text(encoding="utf-8").strip()
    questoes = []
    for bloco in re.split(r"\n\s*\n", texto):
        q = {"pergunta": None, "opcoes": [], "correta": None, "explicacao": ""}
        for linha in bloco.strip().splitlines():
            tipo, conteudo = linha[:1], linha[1:].strip()
            if tipo == "?":
                q["pergunta"] = conteudo
            elif tipo in "-*":
                q["opcoes"].append(conteudo)
                if tipo == "*":
                    if q["correta"] is not None:
                        sys.exit(f"cap{n}: duas corretas em: {q['pergunta']}")
                    q["correta"] = conteudo
            elif tipo == "=":
                q["explicacao"] = conteudo
            else:
                sys.exit(f"cap{n}: linha inválida: {linha!r}")
        if not q["pergunta"] or q["correta"] is None or len(q["opcoes"]) < 2 or not q["explicacao"]:
            sys.exit(f"cap{n}: questão incompleta: {bloco!r}")
        if len(set(q["opcoes"])) != len(q["opcoes"]):
            sys.exit(f"cap{n}: alternativas repetidas em: {q['pergunta']}")
        questoes.append(q)
    distribuir_corretas(n, questoes)
    return questoes


def distribuir_corretas(n, questoes):
    """Gira as alternativas para a correta não cair sempre na mesma letra.

    Mantém a ordem relativa das alternativas; não mexe em Certo/Errado e
    Verdadeiro/Falso. A semente fixa torna o resultado reproduzível.
    """
    rng = random.Random(f"capitulo-{n}")
    alvos = []
    for q in questoes:
        opcoes = q["opcoes"]
        if set(opcoes) in ({"Certo", "Errado"}, {"Verdadeiro", "Falso"}):
            continue
        if not alvos:
            alvos = list(range(len(opcoes)))
            rng.shuffle(alvos)
        alvo = alvos.pop() % len(opcoes)
        atual = opcoes.index(q["correta"])
        desloc = (atual - alvo) % len(opcoes)
        q["opcoes"] = opcoes[desloc:] + opcoes[:desloc]


def montar_quiz(n, questoes):
    e = lambda s: html.escape(s, quote=True)
    partes = [
        f'<section class="quiz-section" data-capitulo="{n}">',
        '<div class="quiz-header">',
        '<span class="chapter-badge">Questões do capítulo</span>',
        "<h2>Teste seu entendimento</h2>",
        f"<p>São {len(questoes)} questões no estilo das bancas. Responda cada uma e veja na hora a correção comentada.</p>",
        "</div>",
    ]
    for i, q in enumerate(questoes, 1):
        partes.append(
            f'<article class="quiz-card" data-explicacao="{e(q["explicacao"])}" data-resposta="{e(q["correta"])}">'
        )
        partes.append(f'<p class="quiz-pergunta">{i}. {e(q["pergunta"])}</p>')
        partes.append('<div class="quiz-opcoes">')
        for j, opcao in enumerate(q["opcoes"], 1):
            ident = f"cap{n}-q{i}-o{j}"
            partes.append(
                f'<label class="quiz-opcao" for="{ident}">'
                f'<input id="{ident}" name="cap{n}-q{i}" type="radio" value="{e(opcao)}"/>'
                f"<span>{e(opcao)}</span></label>"
            )
        partes.append("</div>")
        partes.append(
            '<div class="quiz-acoes">'
            '<button class="btn-primary quiz-validar" type="button">Responder</button>'
            '<button class="btn-secondary quiz-limpar" type="button">Limpar</button>'
            "</div>"
        )
        partes.append('<p aria-live="polite" class="quiz-feedback"></p>')
        partes.append("</article>")
    partes.append("</section>")
    return "\n".join(partes) + "\n"


def gerar(n):
    corpo = (ROOT / "conteudo" / f"cap{n}.html").read_text(encoding="utf-8").strip() + "\n"
    questoes = ler_quiz(n)
    anterior = (
        '<a class="btn-secondary" href="index.html">← Voltar ao início</a>'
        if n == 1
        else f'<a class="btn-secondary" href="chapter_{n - 1}.html">← Capítulo anterior</a>'
    )
    proximo = (
        '<a class="btn-primary" href="index.html">Voltar ao início →</a>'
        if n == 8
        else f'<a class="btn-primary" href="chapter_{n + 1}.html">Próximo capítulo →</a>'
    )
    pagina = (
        HEAD.format(n=n, titulo=TITULOS[n])
        + corpo
        + montar_quiz(n, questoes)
        + TAIL.format(anterior=anterior, proximo=proximo)
    )
    (REPO / f"chapter_{n}.html").write_text(pagina, encoding="utf-8")
    print(f"chapter_{n}.html: {len(questoes)} questões")


if __name__ == "__main__":
    for arg in sys.argv[1:] or [str(i) for i in TITULOS]:
        gerar(int(arg))
