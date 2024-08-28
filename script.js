const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const alternativas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativa: [
            {
                texto: "Descobrir a cura do câncer, porém você ficará com uma doença incurável e tem pouco tempo de vida",
                afirmacao: "Parabéns você salvou milhares de pessoas no mundo, e ganhou o premio nobel"
            },
            {
                texto: "Ter todo o dinheiro do mundo com uma empresa multimilionária, mas um parente seu importante tá com uma doença incurável",
                afirmacao: "Perdeu seu ente que você amava muito, para ficar rico com dinheiro sujo."
            }
        ]

    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativa: [
            {
                texto: "Você será o(a)  presidente de um país, porém o país está com nível extremo de poluição no ar e muitas pessoas estão com problema respiratório",
                afirmacao: "Você virou genocida"
            },
            {
                texto: "Você será da marinha, porém está tendo guerras marítimas e morrendo muitas pessoas e animais marinhos e sua única opção é se entregar pro inimigo.",
                afirmacao: "O inimigo não te matou e você virou um herói"
            }
        ]

    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativa: [
            {
                texto: "Você criou uma inteligência artificial para ajudar na polícia, porém esse robô se virou contra o mundo por conta de maus tratos e abuso de poder. Sua única opção é a guerra de humanos x máquinas",
                afirmacao: "Você vai criar uma IA e uma arma para combater e salvar o mundo e os robos vão se render"
            },
            {
                texto: "Você descobriu um vírus da antiguidade por conta das tecnologias avançadas, porém o vírus saiu fora do controle e sua única chance é fugir do planeta sozinho com três desconhecidos.  ",
                afirmacao: "Você escolheu fugir e um dos desconhecidos era um assassino."
            }
        ]

    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas() {
    if (atual >= alternativas.length) {
        mostraResultado();
        return;
    }




    perguntaAtual = alternativas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}


function mostraAlternativas() {
    for (const opção of perguntaAtual.alternativa) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = opção.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(opção));
        caixaAlternativas.appendChild(botaoAlternativa);

    }

    function respostaSelecionada(opção) {
        const afirmacoes = opção.afirmacao;
        historiaFinal += afirmacoes + " ";

        atual++;
        mostraPerguntas();

    }


}

function mostraResultado() {
    caixaPerguntas.textContent = "Em resumo você escolheu...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}




mostraPerguntas();