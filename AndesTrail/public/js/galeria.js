const perguntas = [
  {
    imagem: "../assets/imgs/peru.jpg",
    opcoes: ["Peru", "Chile", "Bolívia", "Colômbia"],
    resposta: "Peru",
    curiosidade: "Machu Picchu é uma antiga cidade Inca localizada no Peru, famosa por sua arquitetura e história."
  },
  {
    imagem: "../assets/imgs/argentina.jpg",
    opcoes: ["Argentina", "Brasil", "Paraguai", "Uruguai"],
    resposta: "Argentina",
    curiosidade: "As Cataratas do Iguaçu ficam na fronteira entre Argentina e Brasil, sendo uma das maiores quedas d'água do mundo."
  },
  {
    imagem: "../assets/imgs/bolivia.jpg",
    opcoes: ["Chile", "Bolívia", "Peru", "Argentina"],
    resposta: "Bolívia",
    curiosidade: "O Salar de Uyuni, na Bolívia, é o maior deserto de sal contínuo do mundo."
  },

  {
    imagem: "../assets/imgs/chile.jpg",
    opcoes: ["Chile", "Argentina", "Peru", "Colômbia"],
    resposta: "Chile",
    curiosidade: "Santiago é a capital do Chile, situada aos pés da Cordilheira dos Andes."
  },
  {
    imagem: "../assets/imgs/colombia.jpg",
    opcoes: ["Colômbia", "Venezuela", "Peru", "Bolívia"],
    resposta: "Colômbia",
    curiosidade: "Cartagena das Índias é uma cidade histórica na costa da Colômbia, famosa por seu centro colonial."
  },
  {
    imagem: "../assets/imgs/uruguai.jpg",
    opcoes: ["Uruguai", "Argentina", "Paraguai", "Brasil"],
    resposta: "Uruguai",
    curiosidade: "Montevidéu é a capital do Uruguai, conhecida por suas praias urbanas e arquitetura colonial."
  },
  {
    imagem: "../assets/imgs/venezuela.jpg",
    opcoes: ["Venezuela", "Colômbia", "Chile", "Brasil"],
    resposta: "Venezuela",
    curiosidade: "Caracas é a capital da Venezuela e uma das maiores cidades da América do Sul."
  },
  {
    imagem: "../assets/imgs/equador.jpg",
    opcoes: ["Equador", "Peru", "Colômbia", "Chile"],
    resposta: "Equador",
    curiosidade: "Quito, capital do Equador, é a segunda capital mais alta do mundo, localizada nos Andes."
  },
  {
    imagem: "../assets/imgs/paraguai.jpg",
    opcoes: ["Paraguai", "Bolívia", "Argentina", "Uruguai"],
    resposta: "Paraguai",
    curiosidade: "Assunção é a capital do Paraguai e uma das cidades mais antigas da América do Sul."
  }
];

var perguntaAtual = 0;
var acertos = 0;
var erros = 0;

const imagemContainer = document.getElementById('imagemContainer');
const opcoesContainer = document.getElementById('opcoesContainer');
const feedback = document.getElementById('feedback');
const proximoBtn = document.getElementById('proximoBtn');
const reiniciarBtn = document.getElementById('reiniciarBtn');
const numPergunta = document.getElementById('numPergunta');
const totalPerguntas = document.getElementById('totalPerguntas');
const acertosSpan = document.getElementById('acertos');
const errosSpan = document.getElementById('erros');
const curiosidadeContainer = document.getElementById('curiosidadeContainer');

totalPerguntas.textContent = perguntas.length;

function carregarPergunta() {
  const pergunta = perguntas[perguntaAtual];

  numPergunta.textContent = perguntaAtual + 1;

  // Imagem
  imagemContainer.innerHTML = `<img src="${pergunta.imagem}" alt="Imagem do país" style="max-width: 100%; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.2);" />`;

  // Mostrar opçoes
  opcoesContainer.innerHTML = '';
  pergunta.opcoes.forEach(opcao => {
    const btn = document.createElement('button');
    btn.textContent = opcao;
    btn.classList.add('btn');
    btn.onclick = () => selecionarResposta(opcao);
    opcoesContainer.appendChild(btn);
  });

  // Limpa o feedback e as curiosidades
  feedback.textContent = '';
  curiosidadeContainer.textContent = '';

  // Esconde os botoes para proximo e reiniciar
  proximoBtn.style.display = 'none';
  reiniciarBtn.style.display = 'none';

  // Atualizar placar
  acertosSpan.textContent = acertos;
  errosSpan.textContent = erros;
}

function selecionarResposta(opcaoSelecionada) {
  const pergunta = perguntas[perguntaAtual];
  const correto = pergunta.resposta === opcaoSelecionada;

  // Bloquear todas as opções para evitar múltiplos cliques
  Array.from(opcoesContainer.children).forEach(btn => btn.disabled = true);

  if (correto) {
    acertos++;
    feedback.textContent = '✔️ Acertou! Parabéns!';
    feedback.style.color = 'green';
  } else {
    erros++;
    feedback.textContent = `❌ Errou! A resposta correta é: ${pergunta.resposta}`;
    feedback.style.color = 'red';
  }

  curiosidadeContainer.textContent = pergunta.curiosidade;
  curiosidadeContainer.style.fontStyle = 'italic';
  curiosidadeContainer.style.marginTop = '10px';

  proximoBtn.style.display = 'inline-block';
  acertosSpan.textContent = acertos;
  errosSpan.textContent = erros;
}

function proximaPergunta() {
  perguntaAtual++;

  if (perguntaAtual < perguntas.length) {
    carregarPergunta();
  } else {
    mostrarResultadoFinal();
  }
}

function mostrarResultadoFinal() {
  imagemContainer.innerHTML = '';
  opcoesContainer.innerHTML = '';
  feedback.textContent = '';
  curiosidadeContainer.textContent = '';

  const total = perguntas.length;
  const percentual = Math.round((acertos / total) * 100);
  
  var mensagem = `Você acertou ${acertos} de ${total} perguntas (${percentual}%). `;

  if (percentual === 100) {
    mensagem += 'Incrível! Você é um verdadeiro expert em destinos latino-americanos! 🌟';
  } else if (percentual >= 60) {
    mensagem += 'Muito bom! Você conhece bastante sobre esses países.';
  } else {
    mensagem += 'Que tal explorar mais sobre esses destinos? A aventura está só começando!';
  }

  feedback.textContent = mensagem;
  feedback.style.color = 'blue';

  reiniciarBtn.style.display = 'inline-block';
  proximoBtn.style.display = 'none';

  // Vai direto para o Bancooo
  enviarResultadosParaBanco(acertos, erros);
}

function reiniciarJogo() {
  perguntaAtual = 0;
  acertos = 0;
  erros = 0;
  carregarPergunta();
}

function enviarResultadosParaBanco(acertos, erros) {
    const usuario = sessionStorage.NOME_USUARIO || "Anônimo";

    fetch("/quiz/resultados", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usuario: usuario,
            acertos: acertos,
            erros: erros
        })
    })
    .then(res => {
        if (res.ok) {
            console.log("Resultados enviados com sucesso!");
        } else {
            console.error("Erro ao enviar resultados.");
        }
    })
    .catch(err => {
        console.error("Erro na requisição:", err);
    });
}

window.onload = carregarPergunta;

function carregarKPIs() {
  fetch("/quiz/kpis")
      .then(res => res.json())
      .then(dados => {
          console.log("Dados recebidos:", dados);
          document.getElementById("kpi-total-jogos").textContent = dados.totalJogos;
          document.getElementById("kpi-total-acertos").textContent = dados.totalAcertos;
          document.getElementById("kpi-total-erros").textContent = dados.totalErros;
          document.getElementById("kpi-usuario-top").textContent = dados.usuarioTop;
      })
      .catch(err => {
          console.error("Erro ao carregar KPIs:", err);
      });
}

// Chamar a função
window.onload = () => {
  carregarKPIs();
  carregarPergunta();
};