// Gera o roteiro de um capítulo em texto (roteiros/capN.md), para leitura e revisão.
// Uso: node _video/ferramentas/exportar-roteiro.cjs <capítulo>
// Se o vídeo já foi produzido, inclui a minutagem de cada cena (saida/capN/agenda.json).

const fs = require("fs");
const path = require("path");

const cap = process.argv[2];
if (!cap) {
  console.error("Uso: node _video/ferramentas/exportar-roteiro.cjs <capítulo>");
  process.exit(1);
}

const raiz = path.resolve(__dirname, "..");
let roteiro;
global.serie = { capitulo: (def) => { roteiro = def; } };
global.ICONES = {}; // roteiros podem registrar ícones próprios
require(path.join(raiz, "roteiros", `cap${cap}.js`));

let agenda = null;
const arqAgenda = path.join(raiz, "saida", `cap${cap}`, "agenda.json");
if (fs.existsSync(arqAgenda)) agenda = JSON.parse(fs.readFileSync(arqAgenda, "utf8"));

const textoDaFala = (f) => (typeof f === "string" ? f : f.texto);
const relogio = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

const linhas = [
  `# Videoaula — Capítulo ${roteiro.numero}: ${roteiro.titulo}`,
  "",
  "> Arquivo gerado por `ferramentas/exportar-roteiro.cjs` a partir de " +
    `\`roteiros/cap${cap}.js\`. Edite o \`.js\` e gere este arquivo de novo.`,
  "",
];
if (agenda) linhas.push(`**Duração:** ${relogio(agenda.duracao)} · **Cenas:** ${roteiro.cenas.length}`, "");

let secao = null;
roteiro.cenas.forEach((cena, i) => {
  if (cena.secao !== secao) {
    secao = cena.secao;
    linhas.push(`## ${secao}`, "");
  }
  const tempo = agenda ? ` (${relogio(agenda.cenas[i].inicio)}–${relogio(agenda.cenas[i].fim)})` : "";
  linhas.push(`### Cena ${i + 1} · \`${cena.id}\`${tempo}`, "");
  if (cena.visual) linhas.push(`**Visual:** ${cena.visual}`, "");
  linhas.push("**Narração:**", "");
  for (const f of cena.falas || []) linhas.push(`- ${textoDaFala(f).replace(/<[^>]+>/g, "")}`);
  linhas.push("");
});

const destino = path.join(raiz, "roteiros", `cap${cap}.md`);
fs.writeFileSync(destino, linhas.join("\n"));
console.log(`Roteiro salvo em ${path.relative(process.cwd(), destino)}`);
