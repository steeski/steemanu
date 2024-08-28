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
                texto: "Você pode escolher qualquer poder que quiser, porém toda sua família morre",
                afirmacao: "Parabéns,além de orfão egoista"
            },
            {
                texto: "Você só poderá falar com minhoca, porém toda sua família vive",
                afirmacao: "Tomara que você goste de terra"
            }
        ]

    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativa: [
            {
                texto: "Ter todo o dinheiro que quiser, mas a Amazônia morre",
                afirmacao: "Oq adianta não vai ter qualidade de vida?"
            },
            {
                texto: "Você pode salvar a Amazônia, mas você nunca mais terá nenhum real na conta",
                afirmacao: "Vai viver de favor mas a amazonia agradece"
            }
        ]

    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativa: [
            {
                texto: "A internet do mundo todo para, mas você consegue inventar algo e se torna a pessoa mais rica da história",
                afirmacao: "EGOISTAAA"
            },
            {
                texto: "A Nasa te contrata para o cargo mais alto da empresa, mas metade da população morre por conta do seu trabalho",
                afirmacao: "Os outros não importam neh... ZÉ RUELA"
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