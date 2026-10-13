// Produz a videoaula de um capítulo.
//
//   node _video/ferramentas/produzir.cjs 1 previa     → imagens de conferência (sem áudio)
//   node _video/ferramentas/produzir.cjs 1 completo   → narração, mixagem e MP4 final
//
// Requisitos: Playwright + Chromium, ffmpeg, Python com kokoro-onnx (veja _video/README.md).

const { spawnSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const playwright = (() => {
  try { return require("playwright"); } catch (e) {
    const global = spawnSync("npm", ["root", "-g"]).stdout.toString().trim();
    return require(path.join(global, "playwright"));
  }
})();

const RAIZ = path.resolve(__dirname, "..");
const cap = process.argv[2] || "1";
const etapa = process.argv[3] || "previa";
const SAIDA = path.join(RAIZ, "saida", `cap${cap}`);
const PYTHON = process.env.PYTHON || "python3";
fs.mkdirSync(SAIDA, { recursive: true });

function executar(cmd, args) {
  console.log(`$ ${cmd} ${args.join(" ")}`);
  const r = spawnSync(cmd, args, { stdio: "inherit" });
  if (r.status !== 0) throw new Error(`${cmd} terminou com código ${r.status}`);
}

async function abrir(navegador) {
  const pagina = await navegador.newPage({ viewport: { width: 1920, height: 1080 } });
  const erros = [];
  pagina.on("pageerror", (e) => erros.push(String(e)));
  pagina.on("console", (m) => { if (m.type() === "error") erros.push(m.text()); });
  await pagina.goto(`file://${path.join(RAIZ, "motor", "video.html")}?cap=${cap}`);
  await pagina.waitForFunction(() => window.PRONTO === true, null, { timeout: 30000 });
  return { pagina, erros };
}

async function previa() {
  const navegador = await playwright.chromium.launch();
  const { pagina, erros } = await abrir(navegador);
  const agenda = await pagina.evaluate(() => construir(null));
  const pasta = path.join(SAIDA, "previa");
  fs.rmSync(pasta, { recursive: true, force: true });
  fs.mkdirSync(pasta, { recursive: true });
  let n = 0;
  const instantes = [[2.5, "vinheta"]];
  agenda.cenas.forEach((c, ic) => {
    c.falas.forEach((f, i) => instantes.push([f.fim - 0.05, `${String(ic + 1).padStart(2, "0")}-${c.id}-fala${i}`]));
  });
  for (const [t, nome] of instantes) {
    await pagina.evaluate((t) => irPara(t), t);
    await pagina.screenshot({ path: path.join(pasta, `${String(n++).padStart(3, "0")}-${nome}.jpg`), type: "jpeg", quality: 80 });
  }
  console.log(`Prévia: ${n} imagens em ${pasta} · duração estimada ${(agenda.duracao / 60).toFixed(1)} min`);
  if (erros.length) console.log("Erros na página:", erros);
  await navegador.close();
}

async function completo() {
  const navegador = await playwright.chromium.launch();
  let { pagina, erros } = await abrir(navegador);

  // 1. Narração
  const falas = await pagina.evaluate(() => falasDoRoteiro());
  fs.writeFileSync(path.join(SAIDA, "falas.json"), JSON.stringify(falas, null, 1));
  executar(PYTHON, ["-I", path.join(__dirname, "narrar.py"), SAIDA]);
  const duracoes = JSON.parse(fs.readFileSync(path.join(SAIDA, "duracoes.json"), "utf8"));

  // 2. Linha do tempo com as durações reais
  const agenda = await pagina.evaluate((d) => construir(d), duracoes);
  fs.writeFileSync(path.join(SAIDA, "agenda.json"), JSON.stringify(agenda, null, 1));

  // 3. Mixagem do áudio, envelope da boca do Bit e legendas
  executar(PYTHON, ["-I", path.join(__dirname, "mixar.py"), SAIDA]);
  const envelope = JSON.parse(fs.readFileSync(path.join(SAIDA, "envelope.json"), "utf8"));
  await pagina.evaluate((e) => definirEnvelope(e), envelope);

  // 4. Quadros → ffmpeg
  const total = Math.ceil(agenda.duracao * agenda.fps);
  const video = path.join(SAIDA, `videoaula-cap${cap}.mp4`);
  const ff = spawn("ffmpeg", [
    "-y", "-loglevel", "error",
    "-f", "image2pipe", "-framerate", String(agenda.fps), "-c:v", "mjpeg", "-i", "-",
    "-i", path.join(SAIDA, "audio.m4a"),
    "-i", path.join(SAIDA, "legendas.srt"),
    "-map", "0:v", "-map", "1:a", "-map", "2:s",
    "-c:v", "libx264", "-preset", "medium", "-crf", "20", "-tune", "animation", "-pix_fmt", "yuv420p",
    "-c:a", "copy", "-c:s", "mov_text", "-metadata:s:s:0", "language=por",
    "-movflags", "+faststart", "-t", agenda.duracao.toFixed(3), video,
  ], { stdio: ["pipe", "inherit", "inherit"] });
  ff.stdin.on("error", () => {});
  const fimFF = new Promise((r) => ff.on("close", r));
  let ffAberto = true;
  fimFF.then(() => { ffAberto = false; });

  const inicio = Date.now();
  for (let q = 0; q < total; q++) {
    await pagina.evaluate((t) => irPara(t), q / agenda.fps);
    const img = await pagina.screenshot({ type: "jpeg", quality: 92 });
    if (!ffAberto) throw new Error(`ffmpeg encerrou antes do quadro ${q}`);
    if (!ff.stdin.write(img)) await Promise.race([new Promise((r) => ff.stdin.once("drain", r)), fimFF]);
    if (q % 300 === 0) {
      const seg = (Date.now() - inicio) / 1000;
      console.log(`quadro ${q}/${total} · ${(q / Math.max(seg, 1)).toFixed(1)} q/s`);
    }
  }
  ff.stdin.end();
  await fimFF;
  if (erros.length) console.log("Erros na página:", erros);
  await navegador.close();
  console.log(`Vídeo pronto: ${video} (${(agenda.duracao / 60).toFixed(1)} min)`);
}

(etapa === "completo" ? completo() : previa()).catch((e) => { console.error(e); process.exit(1); });
