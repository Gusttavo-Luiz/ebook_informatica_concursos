const QUESTOES_POR_CAPITULO = 5;
const DURACAO_SEGUNDOS = 60 * 60;
const AVISO_TEMPO_SEGUNDOS = 5 * 60;
const CHAVE_ULTIMO_RESULTADO = "simulado-ultimo-resultado";
const CHAVE_HISTORICO = "simulado-historico";
const LIMITE_HISTORICO = 10;

const estadoSimulado = {
  questoes: [],
  respostas: [],
  fimDaProva: 0,
  inicioDaProva: 0,
  cronometro: null,
  emAndamento: false,
};

document.addEventListener("DOMContentLoaded", () => {
  if (!window.BANCO_SIMULADO || !document.getElementById("telaInicio")) return;

  document.getElementById("totalBanco").textContent = window.BANCO_SIMULADO.length;
  mostrarUltimoResultado();

  document.getElementById("botaoIniciar").addEventListener("click", iniciarSimulado);
  document.getElementById("botaoRefazer").addEventListener("click", iniciarSimulado);
  document.getElementById("botaoFinalizar").addEventListener("click", () => finalizarSimulado(false));
  document.getElementById("botaoFinalizarTopo").addEventListener("click", () => finalizarSimulado(false));

  document.querySelectorAll(".filtro-botao").forEach((botao) => {
    botao.addEventListener("click", () => filtrarRevisao(botao.dataset.filtro));
  });

  window.addEventListener("beforeunload", (event) => {
    if (estadoSimulado.emAndamento) {
      event.preventDefault();
      event.returnValue = "";
    }
  });
});

function embaralhar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function ehCertoOuErrado(opcoes) {
  const conjunto = [...opcoes].sort().join("|");
  return conjunto === "Certo|Errado" || conjunto === "Falso|Verdadeiro";
}

function sortearQuestoes() {
  const capitulos = Object.keys(window.CAPITULOS_SIMULADO).map(Number);
  const sorteadas = [];

  capitulos.forEach((capitulo) => {
    const doCapitulo = window.BANCO_SIMULADO.filter((questao) => questao.capitulo === capitulo);
    sorteadas.push(...embaralhar(doCapitulo).slice(0, QUESTOES_POR_CAPITULO));
  });

  return embaralhar(sorteadas).map((questao) => {
    const indices = questao.opcoes.map((_, indice) => indice);
    const ordem = ehCertoOuErrado(questao.opcoes) ? indices : embaralhar(indices);
    return {
      capitulo: questao.capitulo,
      pergunta: questao.pergunta,
      opcoes: ordem.map((indice) => questao.opcoes[indice]),
      correta: ordem.indexOf(questao.correta),
      explicacao: questao.explicacao,
    };
  });
}

function mostrarTela(id) {
  ["telaInicio", "telaProva", "telaResultado"].forEach((tela) => {
    document.getElementById(tela).hidden = tela !== id;
  });
  window.scrollTo({ top: 0, behavior: "instant" });
}

function iniciarSimulado() {
  estadoSimulado.questoes = sortearQuestoes();
  estadoSimulado.respostas = new Array(estadoSimulado.questoes.length).fill(null);
  estadoSimulado.inicioDaProva = Date.now();
  estadoSimulado.fimDaProva = estadoSimulado.inicioDaProva + DURACAO_SEGUNDOS * 1000;
  estadoSimulado.emAndamento = true;

  montarProva();
  atualizarContador();
  atualizarCronometro();
  clearInterval(estadoSimulado.cronometro);
  estadoSimulado.cronometro = setInterval(atualizarCronometro, 1000);
  mostrarTela("telaProva");
}

function montarProva() {
  const lista = document.getElementById("listaQuestoes");
  lista.innerHTML = "";

  estadoSimulado.questoes.forEach((questao, indice) => {
    const card = document.createElement("article");
    card.className = "quiz-card";

    const pergunta = document.createElement("p");
    pergunta.className = "quiz-pergunta";
    pergunta.id = `simulado-q${indice + 1}`;
    pergunta.textContent = `${indice + 1}. ${questao.pergunta}`;
    card.appendChild(pergunta);

    const opcoes = document.createElement("div");
    opcoes.className = "quiz-opcoes";
    opcoes.setAttribute("role", "radiogroup");
    opcoes.setAttribute("aria-labelledby", pergunta.id);

    questao.opcoes.forEach((textoOpcao, indiceOpcao) => {
      const id = `simulado-q${indice + 1}-o${indiceOpcao + 1}`;
      const rotulo = document.createElement("label");
      rotulo.className = "quiz-opcao";
      rotulo.htmlFor = id;

      const entrada = document.createElement("input");
      entrada.type = "radio";
      entrada.id = id;
      entrada.name = `simulado-q${indice + 1}`;
      entrada.value = String(indiceOpcao);
      entrada.addEventListener("change", () => {
        estadoSimulado.respostas[indice] = indiceOpcao;
        atualizarContador();
      });

      const texto = document.createElement("span");
      texto.textContent = textoOpcao;

      rotulo.append(entrada, texto);
      opcoes.appendChild(rotulo);
    });

    card.appendChild(opcoes);
    lista.appendChild(card);
  });
}

function atualizarContador() {
  const total = estadoSimulado.questoes.length;
  const respondidas = estadoSimulado.respostas.filter((resposta) => resposta !== null).length;
  const emBranco = total - respondidas;

  document.getElementById("contadorRespondidas").textContent = `${respondidas} de ${total} respondidas`;
  document.getElementById("barraRespondidas").style.width = `${(respondidas / total) * 100}%`;
  document.getElementById("avisoEmBranco").textContent =
    emBranco > 0
      ? `Você ainda tem ${emBranco} ${emBranco === 1 ? "questão" : "questões"} em branco.`
      : "Todas as questões foram respondidas.";
}

function formatarTempo(segundos) {
  const minutos = Math.floor(segundos / 60);
  const resto = segundos % 60;
  return `${String(minutos).padStart(2, "0")}:${String(resto).padStart(2, "0")}`;
}

function atualizarCronometro() {
  const restante = Math.max(0, Math.round((estadoSimulado.fimDaProva - Date.now()) / 1000));
  const relogio = document.getElementById("tempoRestante");

  relogio.textContent = formatarTempo(restante);
  relogio.classList.toggle("simulado-tempo-alerta", restante <= AVISO_TEMPO_SEGUNDOS);

  if (restante === 0) {
    finalizarSimulado(true);
  }
}

function finalizarSimulado(tempoEsgotado) {
  if (!estadoSimulado.emAndamento) return;

  const emBranco = estadoSimulado.respostas.filter((resposta) => resposta === null).length;
  if (!tempoEsgotado && emBranco > 0) {
    const mensagem = `Você deixou ${emBranco} ${emBranco === 1 ? "questão" : "questões"} em branco. Deseja finalizar mesmo assim?`;
    if (!window.confirm(mensagem)) return;
  }

  estadoSimulado.emAndamento = false;
  clearInterval(estadoSimulado.cronometro);
  mostrarResultado(tempoEsgotado);
}

function mostrarResultado(tempoEsgotado) {
  const { questoes, respostas } = estadoSimulado;
  const total = questoes.length;
  const acertos = questoes.filter((questao, indice) => respostas[indice] === questao.correta).length;
  const emBranco = respostas.filter((resposta) => resposta === null).length;
  const erros = total - acertos - emBranco;
  const percentual = Math.round((acertos / total) * 100);
  const segundosUsados = tempoEsgotado
    ? DURACAO_SEGUNDOS
    : Math.min(DURACAO_SEGUNDOS, Math.round((Date.now() - estadoSimulado.inicioDaProva) / 1000));

  document.getElementById("resultadoAcertos").textContent = `${acertos}/${total}`;
  document.getElementById("resultadoPercentual").textContent = `${percentual}% de acertos`;

  let titulo;
  let mensagem;
  if (percentual >= 80) {
    titulo = "Excelente desempenho";
    mensagem = "Você domina a maior parte do conteúdo. Revise os pontos que errou e mantenha o ritmo com novos simulados.";
  } else if (percentual >= 60) {
    titulo = "Bom desempenho";
    mensagem = "Você está no caminho certo. Concentre a revisão nos capítulos com menor aproveitamento.";
  } else {
    titulo = "Continue estudando";
    mensagem = "Vale revisar os capítulos com menor aproveitamento e refazer as questões de cada um antes de um novo simulado.";
  }
  document.getElementById("resultadoTitulo").textContent = titulo;
  document.getElementById("resultadoMensagem").textContent = mensagem;
  document.getElementById("resultadoDetalhes").textContent =
    `${acertos} ${acertos === 1 ? "acerto" : "acertos"} · ${erros} ${erros === 1 ? "erro" : "erros"} · ` +
    `${emBranco} em branco · tempo: ${formatarTempo(segundosUsados)}` +
    (tempoEsgotado ? " (tempo esgotado)" : "");

  const capitulosFracos = montarTabelaCapitulos();
  montarRecomendacao(capitulosFracos);
  montarRevisao();
  filtrarRevisao("todas");
  salvarUltimoResultado(acertos, total, segundosUsados);
  mostrarUltimoResultado();
  mostrarTela("telaResultado");
}

function montarTabelaCapitulos() {
  const corpo = document.getElementById("tabelaCapitulos");
  corpo.innerHTML = "";
  const capitulosFracos = [];

  Object.entries(window.CAPITULOS_SIMULADO).forEach(([numero, titulo]) => {
    const capitulo = Number(numero);
    const indices = estadoSimulado.questoes
      .map((questao, indice) => (questao.capitulo === capitulo ? indice : -1))
      .filter((indice) => indice >= 0);
    const acertos = indices.filter(
      (indice) => estadoSimulado.respostas[indice] === estadoSimulado.questoes[indice].correta
    ).length;
    const percentual = Math.round((acertos / indices.length) * 100);
    if (percentual < 60) capitulosFracos.push({ capitulo, titulo });

    const linha = document.createElement("tr");

    const celulaCapitulo = document.createElement("td");
    const link = document.createElement("a");
    link.href = `chapter_${capitulo}.html`;
    link.textContent = `${capitulo}. ${titulo}`;
    celulaCapitulo.appendChild(link);

    const celulaAcertos = document.createElement("td");
    celulaAcertos.textContent = `${acertos} de ${indices.length}`;

    const celulaBarra = document.createElement("td");
    const barra = document.createElement("div");
    barra.className = "resultado-barra";
    if (percentual < 60) barra.classList.add("resultado-barra-fraca");
    const preenchimento = document.createElement("span");
    preenchimento.style.width = `${percentual}%`;
    barra.appendChild(preenchimento);
    const rotulo = document.createElement("small");
    rotulo.textContent = `${percentual}%`;
    celulaBarra.append(barra, rotulo);

    linha.append(celulaCapitulo, celulaAcertos, celulaBarra);
    corpo.appendChild(linha);
  });

  return capitulosFracos;
}

function montarRecomendacao(capitulosFracos) {
  const caixa = document.getElementById("recomendacao");
  const texto = document.getElementById("recomendacaoTexto");

  if (!capitulosFracos.length) {
    caixa.hidden = true;
    return;
  }

  texto.textContent = "";
  texto.append("Seu aproveitamento ficou abaixo de 60% em: ");
  capitulosFracos.forEach(({ capitulo, titulo }, posicao) => {
    const link = document.createElement("a");
    link.href = `chapter_${capitulo}.html`;
    link.textContent = `Capítulo ${capitulo} (${titulo})`;
    texto.append(link);
    texto.append(posicao < capitulosFracos.length - 1 ? ", " : ".");
  });
  texto.append(" Releia esses capítulos e refaça as questões do final de cada um.");
  caixa.hidden = false;
}

function montarRevisao() {
  const lista = document.getElementById("listaRevisao");
  lista.innerHTML = "";

  estadoSimulado.questoes.forEach((questao, indice) => {
    const resposta = estadoSimulado.respostas[indice];
    const situacao = resposta === null ? "branco" : resposta === questao.correta ? "certa" : "errada";

    const card = document.createElement("article");
    card.className = `quiz-card revisao-card revisao-${situacao}`;
    card.dataset.situacao = situacao;

    const cabecalho = document.createElement("div");
    cabecalho.className = "revisao-meta";
    const capitulo = document.createElement("span");
    capitulo.textContent = `Capítulo ${questao.capitulo} · ${window.CAPITULOS_SIMULADO[questao.capitulo]}`;
    const selo = document.createElement("span");
    selo.className = `revisao-selo revisao-selo-${situacao}`;
    selo.textContent = { certa: "Acertou", errada: "Errou", branco: "Em branco" }[situacao];
    cabecalho.append(capitulo, selo);

    const pergunta = document.createElement("p");
    pergunta.className = "quiz-pergunta";
    pergunta.textContent = `${indice + 1}. ${questao.pergunta}`;

    const opcoes = document.createElement("ul");
    opcoes.className = "revisao-opcoes";
    questao.opcoes.forEach((textoOpcao, indiceOpcao) => {
      const item = document.createElement("li");
      item.textContent = textoOpcao;
      if (indiceOpcao === questao.correta) {
        item.classList.add("revisao-opcao-correta");
        item.append(criarMarcador("resposta correta"));
      } else if (indiceOpcao === resposta) {
        item.classList.add("revisao-opcao-errada");
        item.append(criarMarcador("sua resposta"));
      }
      if (indiceOpcao === resposta && indiceOpcao === questao.correta) {
        item.lastChild.textContent = "sua resposta · correta";
      }
      opcoes.appendChild(item);
    });

    const explicacao = document.createElement("p");
    explicacao.className = "revisao-explicacao";
    explicacao.textContent = questao.explicacao;

    card.append(cabecalho, pergunta, opcoes, explicacao);
    lista.appendChild(card);
  });

  const contagem = { todas: estadoSimulado.questoes.length, erradas: 0, branco: 0 };
  lista.querySelectorAll(".revisao-card").forEach((card) => {
    if (card.dataset.situacao === "errada") contagem.erradas++;
    if (card.dataset.situacao === "branco") contagem.branco++;
  });
  const nomes = { todas: "Todas", erradas: "Erradas", branco: "Em branco" };
  document.querySelectorAll(".filtro-botao").forEach((botao) => {
    botao.textContent = `${nomes[botao.dataset.filtro]} (${contagem[botao.dataset.filtro]})`;
  });
}

function criarMarcador(texto) {
  const marcador = document.createElement("small");
  marcador.textContent = texto;
  return marcador;
}

function filtrarRevisao(filtro) {
  let visiveis = 0;
  document.querySelectorAll(".revisao-card").forEach((card) => {
    const mostrar =
      filtro === "todas" ||
      (filtro === "erradas" && card.dataset.situacao === "errada") ||
      (filtro === "branco" && card.dataset.situacao === "branco");
    card.hidden = !mostrar;
    if (mostrar) visiveis++;
  });

  document.querySelectorAll(".filtro-botao").forEach((botao) => {
    botao.setAttribute("aria-pressed", String(botao.dataset.filtro === filtro));
  });
  document.getElementById("revisaoVazia").hidden = visiveis > 0;
}

function salvarUltimoResultado(acertos, total, segundosUsados) {
  const porCapitulo = {};
  estadoSimulado.questoes.forEach((questao, indice) => {
    const capitulo = porCapitulo[questao.capitulo] || { acertos: 0, total: 0 };
    capitulo.total++;
    if (estadoSimulado.respostas[indice] === questao.correta) capitulo.acertos++;
    porCapitulo[questao.capitulo] = capitulo;
  });

  const resultado = { acertos, total, segundos: segundosUsados, porCapitulo, data: new Date().toISOString() };
  const historico = lerArmazenamentoJSON(CHAVE_HISTORICO, []);
  historico.unshift(resultado);

  gravarArmazenamento(CHAVE_ULTIMO_RESULTADO, JSON.stringify(resultado));
  gravarArmazenamento(CHAVE_HISTORICO, JSON.stringify(historico.slice(0, LIMITE_HISTORICO)));
}

function mostrarUltimoResultado() {
  const paragrafo = document.getElementById("ultimoResultado");
  const ultimo = lerArmazenamentoJSON(CHAVE_ULTIMO_RESULTADO, null);

  if (!ultimo || typeof ultimo.acertos !== "number") {
    paragrafo.hidden = true;
    return;
  }

  const data = new Date(ultimo.data).toLocaleDateString("pt-BR");
  paragrafo.textContent = `Seu último simulado: ${ultimo.acertos} de ${ultimo.total} acertos, em ${data}.`;
  paragrafo.hidden = false;
}
