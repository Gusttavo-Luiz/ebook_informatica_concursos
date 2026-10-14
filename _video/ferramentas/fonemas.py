"""Mostra como a voz vai ler um texto (fonemas IPA), já com pronuncia.json aplicado.

Uso: python fonemas.py "Texto da fala" ["outro texto" ...]

Serve para conferir termos técnicos e siglas sem sintetizar o áudio:
"CPU" → sˌepˌeˈu (letra por letra), "Word" → wˈoɾəd (precisa de grafia fonética).
"""
import sys

from kokoro_onnx.tokenizer import Tokenizer

from narrar import carregar_pronuncia, preparar

regras = carregar_pronuncia()
tokenizer = Tokenizer()
for texto in sys.argv[1:]:
    falado = preparar(texto, regras)
    print(f"{texto}\n  falado: {falado}\n  fonemas: {tokenizer.phonemize(falado, 'pt-br')}")
