"""Sintetiza a narração de cada fala com o Kokoro (voz neural, pt-BR).

Uso: python narrar.py <pasta de saída do capítulo>

Lê falas.json (gerado pelo produzir.cjs) e grava:
  audio/<hash>.wav  um arquivo por fala (cache: só sintetiza o que mudou)
  mapa.json         arquivo de áudio de cada fala
  duracoes.json     duração (s) de cada fala, por cena

Variáveis de ambiente:
  KOKORO_MODELO   caminho do kokoro .onnx
  KOKORO_VOZES    arquivo .npz com as vozes ou pasta com os .bin das vozes
  VOZ             voz (padrão: pf_dora)
  VELOCIDADE      velocidade da fala (padrão: 0.92)
"""
import hashlib
import json
import os
import pathlib
import re
import sys

import numpy as np
import soundfile as sf

PASTA = pathlib.Path(sys.argv[1])
FERRAMENTAS = pathlib.Path(__file__).resolve().parent
VOZ = os.environ.get("VOZ", "pf_dora")
VELOCIDADE = float(os.environ.get("VELOCIDADE", "0.92"))
TAXA = 24000


def carregar_pronuncia():
    regras = json.loads((FERRAMENTAS / "pronuncia.json").read_text(encoding="utf-8"))
    return [(re.compile(r"(?<![\wÀ-ÿ])" + re.escape(k) + r"(?![\wÀ-ÿ])"), v) for k, v in regras.items()]


def preparar(texto, regras):
    for padrao, troca in regras:
        texto = padrao.sub(troca, texto)
    return texto


def vozes_npz():
    origem = pathlib.Path(os.environ["KOKORO_VOZES"])
    if origem.suffix == ".npz":
        return str(origem)
    destino = PASTA / "vozes.npz"
    if not destino.exists():
        vozes = {p.stem: np.fromfile(p, dtype=np.float32).reshape(-1, 1, 256) for p in origem.glob("*.bin")}
        np.savez(destino, **vozes)
    return str(destino)


def aparar(audio, limiar=0.004, margem=0.03):
    """Remove silêncio do início e do fim, mantendo uma pequena margem."""
    ativos = np.where(np.abs(audio) > limiar)[0]
    if len(ativos) == 0:
        return audio
    m = int(margem * TAXA)
    return audio[max(0, ativos[0] - m): min(len(audio), ativos[-1] + m)]


def main():
    regras = carregar_pronuncia()
    cenas = json.loads((PASTA / "falas.json").read_text(encoding="utf-8"))
    (PASTA / "audio").mkdir(exist_ok=True)

    kokoro = None
    mapa, duracoes = [], []
    novas = 0
    for cena in cenas:
        mapa_cena, dur_cena = [], []
        for fala in cena["falas"]:
            texto = preparar(fala["falar"], regras)
            chave = hashlib.sha1(f"{VOZ}|{VELOCIDADE}|{texto}".encode()).hexdigest()[:16]
            arquivo = PASTA / "audio" / f"{chave}.wav"
            if not arquivo.exists():
                if kokoro is None:
                    from kokoro_onnx import Kokoro
                    kokoro = Kokoro(os.environ["KOKORO_MODELO"], vozes_npz())
                audio, taxa = kokoro.create(texto, voice=VOZ, speed=VELOCIDADE, lang="pt-br")
                assert taxa == TAXA
                sf.write(arquivo, aparar(audio), TAXA)
                novas += 1
            info = sf.info(arquivo)
            mapa_cena.append({"arquivo": arquivo.name, "falado": texto})
            dur_cena.append(round(info.frames / TAXA, 3))
        mapa.append(mapa_cena)
        duracoes.append(dur_cena)
        print(f"  {cena['id']}: {len(dur_cena)} falas, {sum(dur_cena):.1f} s")

    (PASTA / "mapa.json").write_text(json.dumps(mapa, ensure_ascii=False, indent=1), encoding="utf-8")
    (PASTA / "duracoes.json").write_text(json.dumps(duracoes), encoding="utf-8")
    total = sum(sum(d) for d in duracoes)
    print(f"Narração: {novas} falas sintetizadas, {total / 60:.1f} min de fala")


if __name__ == "__main__":
    main()
