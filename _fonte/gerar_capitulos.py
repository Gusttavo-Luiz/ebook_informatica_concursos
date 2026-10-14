"""Gera as páginas chapter_N.html a partir dos arquivos em _fonte/conteudo/.

Cada capítulo tem dois arquivos:
    conteudo/capN.html  corpo do capítulo (HTML com as classes do style.css)
    conteudo/capN.quiz  questões do capítulo

Se existir videos/videoaula-capN.mp4, a página ganha o player da videoaula
(com legendas videos/videoaula-capN.vtt e capa videos/videoaula-capN.jpg).

Formato do .quiz (questões separadas por uma linha em branco):
    ? Enunciado
    - alternativa errada
    * alternativa correta
    = explicação mostrada depois da resposta

Uso, a partir da raiz do repositório:
    python3 _fonte/gerar_capitulos.py        (gera os 8 capítulos)
    python3 _fonte/gerar_capitulos.py 3 5    (gera só os capítulos 3 e 5)

O banco do simulado (simulado-dados.js) é sempre gerado de novo, com as
questões de todos os capítulos (capN.quiz) e as exclusivas do simulado
(capN.simulado.quiz).
"""
import html
import json
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
<meta content="light dark" name="color-scheme"/>
<script>try{{var tema=localStorage.getItem("tema")}}catch(e){{}}document.documentElement.dataset.tema=tema||(matchMedia("(prefers-color-scheme: dark)").matches?"escuro":"claro");</script>
</head>
<body class="chapter-page cor-{n}" data-pagina="capitulo{n}">
<div class="progress-bar" id="progressBar"></div>
<div class="reading-container">
<div class="chapter-header">
<div class="chapter-links">
<a class="back-home" href="index.html">← Página inicial</a>
<a class="back-home" href="progresso.html">Meu progresso</a>
</div>
<div class="chapter-tools">
<button aria-label="Alternar entre tema claro e escuro" class="tema-botao" id="botaoTema" type="button"><svg aria-hidden="true" class="icone-lua" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg><svg aria-hidden="true" class="icone-sol" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg></button>
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


def ler_quiz(n, arquivo="quiz"):
    """Lê conteudo/capN.quiz (questões do capítulo) ou capN.simulado.quiz."""
    texto = (ROOT / "conteudo" / f"cap{n}.{arquivo}").read_text(encoding="utf-8").strip()
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
    if arquivo == "quiz":
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


def montar_video(n):
    """Player da videoaula, se o vídeo do capítulo já foi publicado em videos/."""
    video = REPO / "videos" / f"videoaula-cap{n}.mp4"
    if not video.exists():
        return ""
    minutos = round(duracao_video(video) / 60)
    legenda = (
        f'<track kind="subtitles" label="Português" src="videos/videoaula-cap{n}.vtt" srclang="pt-BR"/>\n'
        if (REPO / "videos" / f"videoaula-cap{n}.vtt").exists() else ""
    )
    # Sem h2/p: a narração do capítulo ("Ouvir capítulo") lê só o texto da leitura.
    return (
        '<section aria-label="Videoaula do capítulo" class="videoaula">\n'
        '<div class="videoaula-cabecalho">\n'
        f'<div><span class="videoaula-rotulo">Videoaula</span><strong class="videoaula-titulo">Os conceitos do capítulo em animação</strong></div>\n'
        f'<span class="videoaula-duracao">{minutos} min · narrada e legendada</span>\n'
        '</div>\n'
        f'<video controls playsinline poster="videos/videoaula-cap{n}.jpg" preload="none">\n'
        f'<source src="videos/videoaula-cap{n}.mp4" type="video/mp4"/>\n'
        + legenda +
        '</video>\n'
        '</section>\n'
    )


def duracao_video(video):
    """Duração do MP4 em segundos, lida do cabeçalho mvhd (sem depender do ffprobe)."""
    dados = video.read_bytes()
    i = dados.find(b"mvhd")
    versao = dados[i + 4]
    if versao == 1:
        escala = int.from_bytes(dados[i + 24:i + 28], "big")
        duracao = int.from_bytes(dados[i + 28:i + 36], "big")
    else:
        escala = int.from_bytes(dados[i + 16:i + 20], "big")
        duracao = int.from_bytes(dados[i + 20:i + 24], "big")
    return duracao / escala


def gerar(n):
    corpo = (ROOT / "conteudo" / f"cap{n}.html").read_text(encoding="utf-8").strip() + "\n"
    questoes = ler_quiz(n)
    anterior = (
        '<a class="btn-secondary" href="index.html">← Voltar ao início</a>'
        if n == 1
        else f'<a class="btn-secondary" href="chapter_{n - 1}.html">← Capítulo anterior</a>'
    )
    proximo = (
        '<a class="btn-primary" href="simulado.html">Fazer o simulado final →</a>'
        if n == 8
        else f'<a class="btn-primary" href="chapter_{n + 1}.html">Próximo capítulo →</a>'
    )
    pagina = (
        HEAD.format(n=n, titulo=TITULOS[n])
        + montar_video(n)
        + corpo
        + montar_quiz(n, questoes)
        + TAIL.format(anterior=anterior, proximo=proximo)
    )
    (REPO / f"chapter_{n}.html").write_text(pagina, encoding="utf-8")
    print(f"chapter_{n}.html: {len(questoes)} questões")


def gerar_banco_simulado():
    """Gera simulado-dados.js com as questões dos capítulos e as exclusivas do simulado."""
    banco = []
    questoes_nos_capitulos = {}
    for n in TITULOS:
        questoes_nos_capitulos[str(n)] = len(ler_quiz(n))
        for arquivo in ("quiz", "simulado.quiz"):
            for q in ler_quiz(n, arquivo):
                banco.append({
                    "capitulo": n,
                    "pergunta": q["pergunta"],
                    "opcoes": q["opcoes"],
                    "correta": q["opcoes"].index(q["correta"]),
                    "explicacao": q["explicacao"],
                })
    capitulos = {str(n): titulo for n, titulo in TITULOS.items()}
    js = (
        "// Arquivo gerado por _fonte/gerar_capitulos.py. Não edite à mão.\n"
        f"window.CAPITULOS_SIMULADO = {json.dumps(capitulos, ensure_ascii=False)};\n"
        f"window.QUESTOES_NOS_CAPITULOS = {json.dumps(questoes_nos_capitulos)};\n"
        f"window.BANCO_SIMULADO = {json.dumps(banco, ensure_ascii=False, indent=1)};\n"
    )
    (REPO / "simulado-dados.js").write_text(js, encoding="utf-8")
    print(f"simulado-dados.js: {len(banco)} questões no banco")


if __name__ == "__main__":
    for arg in sys.argv[1:] or [str(i) for i in TITULOS]:
        gerar(int(arg))
    gerar_banco_simulado()
