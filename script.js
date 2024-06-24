const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está se sentindo desanimado e sem vontade de fazer as coisas que você costumava gostar. Você se isola cada vez mais e tem dificuldade de se concentrar. O que você faz?",
        alternativas: [
            {
                texto: "Ignora seus sentimentos e tenta seguir com sua vida normal.",
                afirmacao: "Continuei me sentindo cada vez pior e minha saúde mental se deteriorou. Precisei de ajuda profissional para lidar com a depressão. "
            },
            {
                texto: "Reconhece que algo está errado e busca ajuda profissional de um psicólogo ou psiquiatra.",
                afirmacao: "Procurei ajuda profissional e, com o apoio de um psicólogo, aprendi a lidar com meus sentimentos e melhorei minha qualidade de vida."
            }
        ]
    },
    {
        enunciado: "Você percebe que um amigo está se comportando de forma estranha e agressiva. Ele tem ataques de raiva frequentes e faz comentários ofensivos. Você se preocupa com ele e quer ajudá-lo. O que você faz?",
        alternativas: [
            {
                texto: "Ignora o comportamento do seu amigo e finge que não está acontecendo nada.",
                afirmacao: "Ignorei os sinais e meu amigo acabou se isolando ainda mais e se tornando ainda mais agressivo. Me arrependo de não ter feito nada para ajudá-lo."
            },
            {
                texto: "Conversa com ele sobre como está se sentindo e oferece apoio emocional, sugerindo que ele procure ajuda profissional de um psicólogo ou psiquiatra.",
                afirmacao: "Conversei com meu amigo e ele se abriu comigo sobre seus problemas. Ofeci meu apoio e o incentivei a buscar ajuda profissional. Fiquei feliz em poder ajudá-lo a dar o primeiro passo para cuidar da sua saúde mental."
            }
        ]
    },
    {
        enunciado: "Você está em um relacionamento e percebe que seu parceiro está te controlando e te isolando de seus amigos e familiares. Você se sente pressionado a fazer tudo o que ele quer e tem medo de dizer não. O que você faz?",
        alternativas: [
            {
                texto: "Continua no relacionamento mesmo que esteja se sentindo infeliz e inseguro.",
                afirmacao: "Continuei no relacionamento e minha situação piorou cada vez mais. Sofri abuso psicológico e precisei de ajuda profissional para me recuperar."
            },
            {
                texto: "Termina o relacionamento e busca apoio de amigos e familiares, buscando ajuda profissional de um psicólogo ou terapeuta de casais.",
                afirmacao: "Terminei o relacionamento e me senti aliviado por ter tomado a decisão certa. Busquei apoio de meus amigos e familiares e comecei a me recuperar da experiência traumática. Com o apoio de um psicólogo, aprendi a identificar relacionamentos abusivos e a me proteger no futuro."
            }
        ]
    },
    {
        enunciado: "Você está se sentindo ansioso e com medo de situações que antes eram comuns para você. Você tem ataques de pânico frequentes e evita sair de casa. O que você faz?",
        alternativas: [
            {
                texto: "Ignora seus sintomas e tenta lidar com eles por conta própria.",
                afirmacao: "Continuei sofrendo com os sintomas da ansiedade e minha qualidade de vida piorou cada vez mais. Precisei de ajuda profissional para lidar com o problema."
            },
            {
                texto: "Busca ajuda profissional de um psicólogo ou psiquiatra para tratar a ansiedade.",
                afirmacao: "Procurei ajuda profissional e, com o apoio de um psicólogo, aprendi a controlar minha ansiedade e melhorei minha qualidade de vida. Consegui voltar a fazer as coisas que eu gostava."
            }
        ]
    },
    {
        enunciado: "Você está se sentindo sobrecarregado com as pressões do dia a dia, trabalho, estudos e vida pessoal. Você sente que não está conseguindo dar conta de tudo e isso está afetando sua saúde mental. O que você faz? ",
        alternativas: [
            {
                texto: "Continua seguindo sua rotina mesmo que isso esteja te fazendo mal.",
                afirmacao: "Continuei me sobrecarregando e minha saúde mental piorou cada vez mais. Precisei de ajuda profissional para lidar com as consequências."
            },
            {
                texto: " Implementa mudanças em sua rotina para ter mais tempo para si mesmo, como fazer exercícios físicos, dormir bem e se alimentar de forma saudável, buscando ajuda profissional de um psicólogo se necessário.",
                afirmacao: "Fiz mudanças na minha rotina para ter mais tempo para mim mesmo e isso me ajudou a me sentir mais disposto e com mais energia. Também consegui melhorar minha qualidade de vida no geral. Se necessário, busquei ajuda profissional de um psicólogo para lidar com o estresse e a ansiedade de forma mais eficaz."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
