document.addEventListener("DOMContentLoaded", () => {
  if (!window.CAPITULOS_SIMULADO || !document.getElementById("listaCapitulos")) return;

  document.getElementById("botaoApagarProgresso").addEventListener("click", apagarProgresso);
  montarProgresso();
});

function numerosDosCapitulos() {
  return Object.keys(window.CAPITULOS_SIMULADO).map(Number);
}

function lerCapitulo(numero) {
  const pagina = `capitulo${numero}`;
  const quiz = lerArmazenamentoJSON(`quiz-resultado-${pagina}`, null);
  const respostas = quiz && quiz.respostas ? Object.values(quiz.respostas) : [];
  const concluido = lerArmazenamento(`capitulo-concluido-${pagina}`) === "true";
  const visitado = lerArmazenamento(`capitulo-visitado-${pagina}`);

  let situacao = "nao-iniciado";
  if (concluido) situacao = "concluido";
  else if (visitado || respostas.length) situacao = "andamento";

  return {
    numero,
    titulo: window.CAPITULOS_SIMULADO[numero],
    concluido,
    situacao,
    visitado,
    totalQuestoes: (window.QUESTOES_NOS_CAPITULOS || {})[numero] || (quiz && quiz.total) || 0,
    respondidas: respostas.length,
    acertos: respostas.filter(Boolean).length,
  };
}

function lerHistoricoSimulado() {
  const historico = lerArmazenamentoJSON("simulado-historico", []);
  if (Array.isArray(historico) && historico.length) return historico;

  // Resultados salvos antes de existir o histórico.
  const ultimo = lerArmazenamentoJSON("simulado-ultimo-resultado", null);
  return ultimo && typeof ultimo.acertos === "number" ? [ultimo] : [];
}

function formatarData(iso) {
  const data = new Date(iso);
  return Number.isNaN(data.getTime()) ? "—" : data.toLocaleDateString("pt-BR");
}

function formatarDuracao(segundos) {
  if (typeof segundos !== "number") return "—";
  const minutos = Math.floor(segundos / 60);
  const resto = segundos % 60;
  return `${minutos} min ${String(resto).padStart(2, "0")} s`;
}

function percentual(parte, total) {
  return total > 0 ? Math.round((parte / total) * 100) : 0;
}

function criar(tag, classe, texto) {
  const elemento = document.createElement(tag);
  if (classe) elemento.className = classe;
  if (texto !== undefined) elemento.textContent = texto;
  return elemento;
}

function montarProgresso() {
  const capitulos = numerosDosCapitulos().map(lerCapitulo);
  const historico = lerHistoricoSimulado();

  montarResumo(capitulos, historico);
  montarProximoPasso(capitulos, historico);
  montarListaCapitulos(capitulos, historico[0]);
  montarHistorico(historico);
}

function montarResumo(capitulos, historico) {
  const concluidos = capitulos.filter((capitulo) => capitulo.concluido).length;
  const emAndamento = capitulos.filter((capitulo) => capitulo.situacao === "andamento").length;
  document.getElementById("resumoCapitulos").textContent = `${concluidos} de ${capitulos.length}`;
  document.getElementById("barraCapitulos").style.width = `${percentual(concluidos, capitulos.length)}%`;
  document.getElementById("resumoCapitulosDetalhe").textContent =
    emAndamento > 0
      ? `${emAndamento} ${emAndamento === 1 ? "capítulo" : "capítulos"} em andamento`
      : concluidos === capitulos.length
        ? "Todos os capítulos concluídos"
        : "Nenhum capítulo em andamento";

  const totalQuestoes = capitulos.reduce((soma, capitulo) => soma + capitulo.totalQuestoes, 0);
  const respondidas = capitulos.reduce((soma, capitulo) => soma + capitulo.respondidas, 0);
  const acertos = capitulos.reduce((soma, capitulo) => soma + capitulo.acertos, 0);
  document.getElementById("resumoQuestoes").textContent = `${acertos} de ${totalQuestoes}`;
  document.getElementById("barraQuestoes").style.width = `${percentual(acertos, totalQuestoes)}%`;
  document.getElementById("resumoQuestoesDetalhe").textContent =
    respondidas > 0
      ? `acertadas · ${respondidas} ${respondidas === 1 ? "respondida" : "respondidas"}`
      : "Nenhuma questão respondida ainda";

  const resumoSimulado = document.getElementById("resumoSimulado");
  const detalheSimulado = document.getElementById("resumoSimuladoDetalhe");
  if (!historico.length) {
    resumoSimulado.textContent = "—";
    document.getElementById("barraSimulado").style.width = "0%";
    detalheSimulado.textContent = "Você ainda não fez o simulado";
    return;
  }

  const melhor = historico.reduce((atual, tentativa) =>
    percentual(tentativa.acertos, tentativa.total) > percentual(atual.acertos, atual.total) ? tentativa : atual
  );
  const ultimo = historico[0];
  resumoSimulado.textContent = `${melhor.acertos}/${melhor.total}`;
  document.getElementById("barraSimulado").style.width = `${percentual(melhor.acertos, melhor.total)}%`;
  detalheSimulado.textContent =
    `melhor resultado · último: ${ultimo.acertos}/${ultimo.total} em ${formatarData(ultimo.data)}`;
}

function montarProximoPasso(capitulos, historico) {
  const titulo = document.getElementById("proximoTitulo");
  const texto = document.getElementById("proximoTexto");
  const link = document.getElementById("proximoLink");
  const pendente = capitulos.find((capitulo) => !capitulo.concluido);

  if (pendente) {
    const comecou = pendente.situacao === "andamento";
    titulo.textContent = `${comecou ? "Continue" : "Comece"} pelo Capítulo ${pendente.numero}: ${pendente.titulo}`;
    texto.textContent =
      pendente.respondidas > 0
        ? `Você já respondeu ${pendente.respondidas} de ${pendente.totalQuestoes} questões deste capítulo. Termine a leitura, refaça as que errou e marque o capítulo como concluído.`
        : "Leia o conteúdo, responda às questões do final e marque o capítulo como concluído.";
    link.href = `chapter_${pendente.numero}.html`;
    link.textContent = `${comecou ? "Continuar" : "Começar"} o Capítulo ${pendente.numero}`;
    return;
  }

  titulo.textContent = "Todos os capítulos concluídos";
  texto.textContent = historico.length
    ? "Faça um novo simulado para medir sua evolução. Cada tentativa sorteia questões diferentes."
    : "Agora é hora de testar o que aprendeu no simulado final, com tempo de prova e correção comentada.";
  link.href = "simulado.html";
  link.textContent = historico.length ? "Fazer novo simulado" : "Fazer o simulado";
}

function montarListaCapitulos(capitulos, ultimoSimulado) {
  const lista = document.getElementById("listaCapitulos");
  lista.innerHTML = "";
  const nomesSituacao = { concluido: "Concluído", andamento: "Em andamento", "nao-iniciado": "Não iniciado" };

  capitulos.forEach((capitulo) => {
    const card = criar("article", `progresso-capitulo progresso-${capitulo.situacao}`);

    const info = criar("div", "progresso-capitulo-info");
    const topo = criar("div", "progresso-capitulo-topo");
    topo.append(
      criar("span", "chapter-number", `Capítulo ${String(capitulo.numero).padStart(2, "0")}`),
      criar("span", `progresso-situacao progresso-situacao-${capitulo.situacao}`, nomesSituacao[capitulo.situacao])
    );

    const titulo = criar("h3");
    const link = criar("a", "", capitulo.titulo);
    link.href = `chapter_${capitulo.numero}.html`;
    titulo.appendChild(link);

    const dados = criar("dl", "progresso-capitulo-dados");
    const questoes =
      capitulo.respondidas > 0
        ? `${capitulo.acertos} de ${capitulo.totalQuestoes} acertadas`
        : "nenhuma respondida";
    const noSimulado = ultimoSimulado && ultimoSimulado.porCapitulo && ultimoSimulado.porCapitulo[capitulo.numero];
    [
      ["Questões", questoes],
      ["Último simulado", noSimulado ? `${noSimulado.acertos} de ${noSimulado.total}` : "—"],
      ["Último acesso", capitulo.visitado ? formatarData(capitulo.visitado) : "—"],
    ].forEach(([rotulo, valor]) => {
      const item = criar("div");
      item.append(criar("dt", "", rotulo), criar("dd", "", valor));
      dados.appendChild(item);
    });

    info.append(topo, titulo, dados);

    const botao = criar(
      "button",
      capitulo.concluido ? "btn-secondary" : "btn-primary",
      capitulo.concluido ? "Desmarcar" : "Marcar como concluído"
    );
    botao.type = "button";
    botao.setAttribute(
      "aria-label",
      `${capitulo.concluido ? "Desmarcar" : "Marcar como concluído"}: Capítulo ${capitulo.numero}`
    );
    botao.addEventListener("click", () => {
      gravarArmazenamento(`capitulo-concluido-capitulo${capitulo.numero}`, String(!capitulo.concluido));
      montarProgresso();
    });

    card.append(info, botao);
    lista.appendChild(card);
  });
}

function montarHistorico(historico) {
  const area = document.getElementById("historicoSimulado");
  area.innerHTML = "";

  if (!historico.length) {
    const vazio = criar("div", "progresso-vazio");
    vazio.appendChild(criar("p", "", "Você ainda não fez o simulado final. Quando fizer, cada tentativa aparece aqui."));
    const link = criar("a", "btn-secondary", "Fazer o simulado");
    link.href = "simulado.html";
    vazio.appendChild(link);
    area.appendChild(vazio);
    return;
  }

  const tabela = criar("table", "comparison-table progresso-historico");
  const cabecalho = criar("thead");
  const linhaCabecalho = criar("tr");
  ["Data", "Acertos", "Aproveitamento", "Tempo"].forEach((rotulo) => linhaCabecalho.appendChild(criar("th", "", rotulo)));
  cabecalho.appendChild(linhaCabecalho);

  const corpo = criar("tbody");
  historico.forEach((tentativa) => {
    const linha = criar("tr");
    linha.append(
      criar("td", "", formatarData(tentativa.data)),
      criar("td", "", `${tentativa.acertos} de ${tentativa.total}`),
      criar("td", "", `${percentual(tentativa.acertos, tentativa.total)}%`),
      criar("td", "", formatarDuracao(tentativa.segundos))
    );
    corpo.appendChild(linha);
  });

  tabela.append(cabecalho, corpo);
  area.appendChild(tabela);
  if (historico.length > 1) {
    area.appendChild(criar("p", "progresso-nota", `Mostrando as últimas ${historico.length} tentativas, da mais recente para a mais antiga.`));
  }
}

function apagarProgresso() {
  if (!window.confirm("Apagar todo o seu progresso deste navegador? Não é possível desfazer.")) return;

  numerosDosCapitulos().forEach((numero) => {
    ["capitulo-concluido", "capitulo-visitado", "quiz-resultado"].forEach((prefixo) => {
      removerArmazenamento(`${prefixo}-capitulo${numero}`);
    });
  });
  removerArmazenamento("simulado-historico");
  removerArmazenamento("simulado-ultimo-resultado");

  montarProgresso();
}
