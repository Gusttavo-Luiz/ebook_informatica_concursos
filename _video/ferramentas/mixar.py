"""Monta o áudio final da videoaula.

Uso: python mixar.py <pasta de saída do capítulo>

Lê agenda.json (tempos de cada fala) e mapa.json (áudio de cada fala) e grava:
  narracao.wav   só a voz, posicionada no tempo
  audio.m4a      voz + trilha + efeitos, normalizado em -16 LUFS
  envelope.json  volume da voz por quadro (anima a boca do Bit)
  legendas.srt   legendas em português
"""
import json
import pathlib
import subprocess
import sys

import numpy as np
import soundfile as sf

PASTA = pathlib.Path(sys.argv[1])
TAXA = 24000
rng = np.random.default_rng(7)


def nota(n):
    """Frequência da nota MIDI n."""
    return 440.0 * 2 ** ((n - 69) / 12)


def envelope_adsr(n, ataque, liberacao):
    e = np.ones(n)
    a, r = int(ataque * TAXA), int(liberacao * TAXA)
    e[:a] = np.linspace(0, 1, a) ** 2
    e[-r:] *= np.linspace(1, 0, r) ** 2
    return e


def trilha(duracao):
    """Fundo musical suave: acordes longos (pad) e notas de sino discretas."""
    total = int(duracao * TAXA)
    saida = np.zeros(total)
    progressao = [  # Cmaj7, Am7, Fmaj7, G6 (notas MIDI)
        [48, 60, 64, 67, 71], [45, 57, 60, 64, 67], [41, 57, 60, 64, 69], [43, 55, 59, 62, 64],
    ]
    compasso = 4.0
    t = 0.0
    i = 0
    while t < duracao:
        acorde = progressao[i % 4]
        n = int((compasso + 1.5) * TAXA)
        tt = np.arange(n) / TAXA
        som = np.zeros(n)
        for k, m in enumerate(acorde):
            f = nota(m)
            peso = 0.55 if k == 0 else 0.22
            som += peso * (np.sin(2 * np.pi * f * tt) + 0.5 * np.sin(2 * np.pi * f * 1.003 * tt + 1.3))
        som *= envelope_adsr(n, 1.2, 1.6)
        ini = int(t * TAXA)
        fim = min(total, ini + n)
        saida[ini:fim] += som[: fim - ini]
        # notas de sino (arpejo lento)
        for b, m in enumerate([acorde[2] + 12, acorde[3] + 12, acorde[4] + 12, acorde[3] + 12]):
            pos = int((t + b * 1.0) * TAXA)
            if pos >= total:
                break
            nb = int(1.6 * TAXA)
            tb = np.arange(nb) / TAXA
            sino = (np.sin(2 * np.pi * nota(m) * tb) + 0.3 * np.sin(2 * np.pi * nota(m) * 2 * tb)) * np.exp(-tb * 3.2)
            fimb = min(total, pos + nb)
            saida[pos:fimb] += 0.18 * sino[: fimb - pos]
        t += compasso
        i += 1
    return saida / (np.abs(saida).max() + 1e-9)


def vinheta():
    """Sino ascendente da abertura."""
    n = int(3.0 * TAXA)
    saida = np.zeros(n)
    for k, m in enumerate([72, 76, 79, 84]):
        pos = int((0.3 + k * 0.14) * TAXA)
        tb = np.arange(n - pos) / TAXA
        s = (np.sin(2 * np.pi * nota(m) * tb) + 0.4 * np.sin(2 * np.pi * nota(m) * 2.01 * tb)) * np.exp(-tb * 2.2)
        saida[pos:] += s * 0.5
    return saida / np.abs(saida).max()


def whoosh(dur=0.7):
    """Ruído filtrado com volume em arco: efeito de transição."""
    n = int(dur * TAXA)
    ruido = rng.standard_normal(n)
    # filtro passa-baixa variável (média móvel com janela que diminui)
    saida = np.zeros(n)
    acum = 0.0
    for k in range(n):
        alfa = 0.02 + 0.25 * (k / n)
        acum += alfa * (ruido[k] - acum)
        saida[k] = acum
    arco = np.sin(np.linspace(0, np.pi, n)) ** 2
    saida *= arco
    return saida / (np.abs(saida).max() + 1e-9)


def colocar(destino, som, inicio, ganho):
    a = int(inicio * TAXA)
    if a >= len(destino):
        return
    b = min(len(destino), a + len(som))
    destino[a:b] += som[: b - a] * ganho


def suavizar(x, ataque, liberacao):
    y = np.zeros_like(x)
    v = 0.0
    for i, a in enumerate(x):
        coef = ataque if a > v else liberacao
        v += coef * (a - v)
        y[i] = v
    return y


def legendas(agenda):
    linhas = []

    def tempo(s):
        ms = int(round(s * 1000))
        return f"{ms // 3600000:02d}:{ms // 60000 % 60:02d}:{ms // 1000 % 60:02d},{ms % 1000:03d}"

    def partes(texto, limite=84):
        """Divide a fala no menor número de blocos de até `limite` caracteres,
        com tamanhos equilibrados (evita sobra de uma palavra só)."""
        palavras = texto.split()
        k = -(-len(texto) // limite)
        comp = lambda i, j: len(" ".join(palavras[i:j]))
        # melhor[j][b] = (maior bloco, cortes) para as j primeiras palavras em b blocos
        melhor = {(0, 0): (0, [])}
        for b in range(1, k + 1):
            for j in range(1, len(palavras) + 1):
                opcoes = [(max(melhor[(i, b - 1)][0], comp(i, j)), melhor[(i, b - 1)][1] + [j])
                          for i in range(j) if (i, b - 1) in melhor]
                if opcoes:
                    melhor[(j, b)] = min(opcoes)
        cortes = [0] + melhor[(len(palavras), k)][1]
        return [" ".join(palavras[a:z]) for a, z in zip(cortes, cortes[1:])]

    n = 1
    for cena in agenda["cenas"]:
        for f in cena["falas"]:
            blocos = partes(f["texto"])
            total = sum(len(b) for b in blocos)
            t = f["inicio"]
            for b in blocos:
                d = (f["fim"] - f["inicio"]) * len(b) / total
                metade = len(b) // 2
                corte = b.rfind(" ", 0, metade + 10) if len(b) > 42 else -1
                texto = b if corte < 0 else b[:corte] + "\n" + b[corte + 1:]
                linhas.append(f"{n}\n{tempo(t)} --> {tempo(t + d)}\n{texto}\n")
                n += 1
                t += d
    return "\n".join(linhas)


def main():
    agenda = json.loads((PASTA / "agenda.json").read_text(encoding="utf-8"))
    mapa = json.loads((PASTA / "mapa.json").read_text(encoding="utf-8"))
    duracao = agenda["duracao"]
    total = int(duracao * TAXA) + TAXA

    voz = np.zeros(total)
    for cena, arquivos in zip(agenda["cenas"], mapa):
        for fala, info in zip(cena["falas"], arquivos):
            audio, taxa = sf.read(PASTA / "audio" / info["arquivo"])
            assert taxa == TAXA
            colocar(voz, audio, fala["inicio"], 1.0)
    voz /= np.abs(voz).max() + 1e-9
    voz *= 0.85
    sf.write(PASTA / "narracao.wav", voz, TAXA)

    # Envelope por quadro para a boca do Bit
    fps = agenda["fps"]
    passo = TAXA // fps
    quadros = int(duracao * fps) + 1
    rms = np.array([np.sqrt(np.mean(voz[i * passo:(i + 1) * passo] ** 2)) if i * passo < total else 0 for i in range(quadros)])
    ref = np.percentile(rms[rms > 0.01], 95) if np.any(rms > 0.01) else 1
    env = np.clip(rms / ref, 0, 1)
    env = suavizar(env, 0.7, 0.45)
    (PASTA / "envelope.json").write_text(json.dumps([round(float(v), 3) for v in env]))

    # Trilha com "ducking": abaixa quando há voz
    musica = trilha(duracao + 1)[:total]
    bloco = TAXA // 100  # 10 ms
    nb = total // bloco
    ativo = (np.abs(voz[: nb * bloco]).reshape(nb, bloco).max(axis=1) > 0.02).astype(float)
    presenca = np.interp(np.arange(total), np.arange(nb) * bloco, suavizar(ativo, 0.25, 0.012))
    musica *= 0.11 * (1 - 0.55 * presenca)
    musica[: int(5.5 * TAXA)] *= np.linspace(1.6, 1.0, int(5.5 * TAXA))
    fim_fade = int(2.5 * TAXA)
    musica[-fim_fade:] *= np.linspace(1, 0, fim_fade)

    efeitos = np.zeros(total)
    colocar(efeitos, vinheta(), 0.0, 0.32)
    w = whoosh()
    for cena in agenda["cenas"]:
        if cena["transicao"] == "cortina":
            colocar(efeitos, w, cena["inicio"] - 0.5, 0.12)
    colocar(efeitos, w, agenda["vinheta"] - 0.8, 0.12)

    mix = voz + musica + efeitos
    mix /= max(1.0, np.abs(mix).max())
    sf.write(PASTA / "mix.wav", mix.astype(np.float32), TAXA)

    subprocess.run([
        "ffmpeg", "-y", "-loglevel", "error", "-i", str(PASTA / "mix.wav"),
        "-af", "loudnorm=I=-16:TP=-1.5:LRA=11", "-ar", "48000", "-ac", "2",
        "-c:a", "aac", "-b:a", "192k", str(PASTA / "audio.m4a"),
    ], check=True)

    (PASTA / "legendas.srt").write_text(legendas(agenda), encoding="utf-8")
    print(f"Áudio: {duracao / 60:.1f} min · audio.m4a, envelope.json e legendas.srt prontos")


if __name__ == "__main__":
    main()
