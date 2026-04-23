document.addEventListener("DOMContentLoaded", () => {
  iniciarBarraDeProgresso();
  iniciarModalDosCapitulos();
  iniciarNarracao();
  iniciarControleDeLeitura();
  iniciarQuizDosCapitulos();
  validarLinksDosCapitulos();
});

function iniciarBarraDeProgresso() {
  const barra = document.getElementById("progressBar");
  if (!barra) return;

  const atualizarProgresso = () => {
    const topo = window.scrollY;
    const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
    const progresso = alturaTotal > 0 ? (topo / alturaTotal) * 100 : 0;
    barra.style.width = `${Math.min(progresso, 100)}%`;
  };

  atualizarProgresso();
  window.addEventListener("scroll", atualizarProgresso, { passive: true });
  window.addEventListener("resize", atualizarProgresso);
}

function iniciarModalDosCapitulos() {
  const cards = document.querySelectorAll(".chapter-card");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalTitle = document.getElementById("modalTitle");
  const modalPreview = document.getElementById("modalPreview");
  const btnAccess = document.getElementById("btnAccess");
  const btnBack = document.getElementById("btnBack");
  const modalClose = document.getElementById("modalClose");

  if (!cards.length || !modalOverlay || !modalTitle || !modalPreview || !btnAccess || !btnBack || !modalClose) {
    return;
  }

  let linkAtual = "";
  let cardAtual = null;

  const abrirModal = (card) => {
    const titulo = card.dataset.title || "Capítulo";
    const previa = card.dataset.preview || "Prévia indisponível.";
    const link = card.dataset.link || "#";

    modalTitle.textContent = titulo;
    modalPreview.textContent = previa;
    btnAccess.textContent = `Acessar ${titulo.split("—")[0].trim().toLowerCase()}`;
    linkAtual = link;
    cardAtual = card;

    modalOverlay.classList.add("active");
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modalClose.focus();
  };

  const fecharModal = () => {
    modalOverlay.classList.remove("active");
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (cardAtual) {
      cardAtual.focus();
    }
  };

  cards.forEach((card) => {
    card.addEventListener("click", () => abrirModal(card));

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        abrirModal(card);
      }
    });
  });

  btnAccess.addEventListener("click", () => {
    if (linkAtual && linkAtual !== "#") {
      encerrarNarracaoGlobal();
      window.location.href = linkAtual;
    }
  });

  btnBack.addEventListener("click", fecharModal);
  modalClose.addEventListener("click", fecharModal);

  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
      fecharModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modalOverlay.classList.contains("active")) {
      fecharModal();
    }
  });
}

function iniciarNarracao() {
  const botaoNarrar = document.getElementById("botaoNarrar");
  const botaoPausarNarracao = document.getElementById("botaoPausarNarracao");
  const areaLeitura = document.querySelector(".reading-card");
  const statusNarracao = document.getElementById("statusNarracao");

  if (!botaoNarrar || !botaoPausarNarracao || !areaLeitura || !("speechSynthesis" in window)) {
    return;
  }

  let narracaoIniciada = false;

  const montarTextoParaNarracao = () => {
    const elementos = areaLeitura.querySelectorAll("h1, h2, p, li, .box-dica, .box-prova, .box-resumo");
    let textoFinal = "";

    elementos.forEach((elemento) => {
      textoFinal += `${elemento.innerText}\n\n`;
    });

    return textoFinal.trim();
  };

  const atualizarBotaoPausa = () => {
    if (window.speechSynthesis.paused) {
      botaoPausarNarracao.textContent = "▶️ Continuar narração";
    } else {
      botaoPausarNarracao.textContent = "⏸ Pausar narração";
    }
  };

  const finalizarEstadoDaNarracao = (mensagem) => {
    narracaoIniciada = false;
    botaoPausarNarracao.textContent = "⏸ Pausar narração";

    if (statusNarracao) {
      statusNarracao.textContent = mensagem;
    }
  };

  botaoNarrar.addEventListener("click", () => {
    const sintetizador = window.speechSynthesis;

    if (sintetizador.speaking && sintetizador.paused) {
      sintetizador.resume();
      atualizarBotaoPausa();

      if (statusNarracao) {
        statusNarracao.textContent = "Narrando capítulo...";
      }
      return;
    }

    if (sintetizador.speaking) {
      sintetizador.cancel();
    }

    const texto = montarTextoParaNarracao();
    const falaAtual = new SpeechSynthesisUtterance(texto);

    falaAtual.lang = "pt-BR";
    falaAtual.rate = 0.95;
    falaAtual.pitch = 1;

    falaAtual.onstart = () => {
      narracaoIniciada = true;
      atualizarBotaoPausa();

      if (statusNarracao) {
        statusNarracao.textContent = "Narrando capítulo...";
      }
    };

    falaAtual.onend = () => {
      finalizarEstadoDaNarracao("Narração finalizada.");
    };

    falaAtual.onerror = () => {
      finalizarEstadoDaNarracao("Não foi possível concluir a narração.");
    };

    sintetizador.speak(falaAtual);
  });

  botaoPausarNarracao.addEventListener("click", () => {
    const sintetizador = window.speechSynthesis;

    if (!narracaoIniciada && !sintetizador.speaking) {
      if (statusNarracao) {
        statusNarracao.textContent = "Inicie a narração antes de pausar.";
      }
      return;
    }

    if (sintetizador.speaking && !sintetizador.paused) {
      sintetizador.pause();
      atualizarBotaoPausa();

      if (statusNarracao) {
        statusNarracao.textContent = "Narração pausada.";
      }
      return;
    }

    if (sintetizador.paused) {
      sintetizador.resume();
      atualizarBotaoPausa();

      if (statusNarracao) {
        statusNarracao.textContent = "Narrando capítulo...";
      }
    }
  });

  window.addEventListener("beforeunload", encerrarNarracaoGlobal);

  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      encerrarNarracaoGlobal();
    });
  });
}

function encerrarNarracaoGlobal() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function iniciarControleDeLeitura() {
  const botaoConcluir = document.getElementById("botaoConcluirCapitulo");
  const statusLeitura = document.getElementById("statusLeitura");
  const body = document.body;
  const nomeDaPagina = body.dataset.pagina;

  if (!botaoConcluir || !statusLeitura || !nomeDaPagina) {
    return;
  }

  const chave = `capitulo-concluido-${nomeDaPagina}`;

  const atualizarStatus = () => {
    const concluido = localStorage.getItem(chave) === "true";

    if (concluido) {
      statusLeitura.textContent = "Status: capítulo concluído.";
      botaoConcluir.textContent = "Marcar como não concluído";
      botaoConcluir.dataset.concluido = "true";
    } else {
      statusLeitura.textContent = "Status: leitura em andamento.";
      botaoConcluir.textContent = "Marcar capítulo como concluído";
      botaoConcluir.dataset.concluido = "false";
    }
  };

  botaoConcluir.addEventListener("click", () => {
    const estaConcluido = botaoConcluir.dataset.concluido === "true";
    localStorage.setItem(chave, String(!estaConcluido));
    atualizarStatus();
  });

  atualizarStatus();
}

function validarLinksDosCapitulos() {
  const cards = document.querySelectorAll(".chapter-card[data-link]");
  const links = Array.from(cards).map((card) => card.dataset.link);
  const linksDuplicados = links.filter((link, indice) => links.indexOf(link) !== indice);

  if (linksDuplicados.length) {
    console.warn("Existem links duplicados nos capítulos:", [...new Set(linksDuplicados)]);
  }
}


function iniciarQuizDosCapitulos() {
  const quizzes = document.querySelectorAll(".quiz-card");
  if (!quizzes.length) return;

  quizzes.forEach((quiz, indice) => {
    const botaoValidar = quiz.querySelector(".quiz-validar");
    const botaoLimpar = quiz.querySelector(".quiz-limpar");
    const feedback = quiz.querySelector(".quiz-feedback");
    const opcoes = quiz.querySelectorAll('input[type="radio"]');
    const respostaCorreta = quiz.dataset.resposta;
    const explicacao = quiz.dataset.explicacao || "";

    if (!botaoValidar || !botaoLimpar || !feedback || !opcoes.length) {
      return;
    }

    botaoValidar.addEventListener("click", () => {
      const selecionada = quiz.querySelector('input[type="radio"]:checked');

      quiz.classList.remove("quiz-correto", "quiz-incorreto");

      if (!selecionada) {
        feedback.textContent = "Selecione uma alternativa antes de responder.";
        feedback.className = "quiz-feedback quiz-feedback-aviso";
        return;
      }

      const acertou = selecionada.value === respostaCorreta;

      if (acertou) {
        quiz.classList.add("quiz-correto");
        feedback.textContent = `✅ Correto. ${explicacao}`;
        feedback.className = "quiz-feedback quiz-feedback-correto";
      } else {
        quiz.classList.add("quiz-incorreto");
        feedback.textContent = `❌ Incorreto. Resposta certa: ${respostaCorreta}. ${explicacao}`;
        feedback.className = "quiz-feedback quiz-feedback-incorreto";
      }
    });

    botaoLimpar.addEventListener("click", () => {
      opcoes.forEach((opcao) => {
        opcao.checked = false;
      });
      quiz.classList.remove("quiz-correto", "quiz-incorreto");
      feedback.textContent = "";
      feedback.className = "quiz-feedback";
    });
  });
}
