#!/usr/bin/env bash
# Gera uma cópia compacta do vídeo (até ~28 MB) para enviar por mensagem ou e-mail.
# Uso: _video/ferramentas/versao-envio.sh <capítulo>
set -euo pipefail
cap="$1"
pasta="$(cd "$(dirname "$0")/.." && pwd)/saida/cap$cap"
origem="$pasta/videoaula-cap$cap.mp4"
destino="$pasta/videoaula-cap$cap-envio.mp4"
limite=$((28 * 1024 * 1024))

ffmpeg -y -v error -i "$origem" -map 0 -c:v libx264 -preset slow -crf 27 -tune animation \
  -pix_fmt yuv420p -c:a aac -b:a 128k -c:s copy -movflags +faststart "$destino"

if [ "$(stat -c %s "$destino")" -gt "$limite" ]; then
  # Ainda grande: duas passadas com taxa calculada para caber no limite
  dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$origem")
  kbps=$(awk -v d="$dur" -v l="$limite" 'BEGIN { printf "%d", l * 8 / d / 1000 * 0.96 - 128 }')
  log="$pasta/ffmpeg2pass"
  ffmpeg -y -v error -i "$origem" -map 0:v -c:v libx264 -preset slow -b:v "${kbps}k" -tune animation \
    -pix_fmt yuv420p -pass 1 -passlogfile "$log" -an -f mp4 /dev/null
  ffmpeg -y -v error -i "$origem" -map 0 -c:v libx264 -preset slow -b:v "${kbps}k" -tune animation \
    -pix_fmt yuv420p -pass 2 -passlogfile "$log" -c:a aac -b:a 128k -c:s copy -movflags +faststart "$destino"
  rm -f "$log"*
fi
echo "Versão para envio: $destino ($(du -h "$destino" | cut -f1))"
