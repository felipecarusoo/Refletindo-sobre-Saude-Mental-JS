const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você nota um desânimo profundo, perda de interesse em atividades que amava e extrema dificuldade de concentração. O isolamento tem se tornado constante. Como decide agir?",
        alternativas: [
            {
                texto: "Tenta ignorar os sentimentos e força a barra para manter a rotina como se nada estivesse acontecendo.",
                afirmacao: "Ao reprimir seus sentimentos, o peso emocional se acumulou e o esgotamento se tornou inevitável. "
            },
            {
                texto: "Reconhece o momento vulnerável e busca ajuda profissional com um psicólogo ou psiquiatra.",
                afirmacao: "Reconhecer sua vulnerabilidade e buscar ajuda profissional permitiu desenvolver ferramentas saudáveis de autocuidado. "
            }
        ]
    },
    {
        enunciado: "Um amigo próximo demonstra comportamentos atípicos, episódios de raiva e isolamento frequente. Você percebe o sofrimento dele. O que faz?",
        alternativas: [
            {
                texto: "Prefere não se envolver, acreditando que ele resolverá a situação sozinho no tempo dele.",
                afirmacao: "A falta de apoio acabou aprofundando o isolamento do seu amigo, tornando a recuperação mais difícil. "
            },
            {
                texto: "Abre um espaço seguro para conversar, oferece escuta empática e sugere o acompanhamento de um profissional.",
                afirmacao: "Ao oferecer uma escuta sem julgamentos, você ajudou seu amigo a dar o primeiro passo para cuidar da própria mente. "
            }
        ]
    },
    {
        enunciado: "Em um relacionamento, você percebe comportamentos de controle, manipulação e o afastamento progressivo de amigos e familiares. Qual o seu posicionamento?",
        alternativas: [
            {
                texto: "Permanece na relação por medo do término ou na esperança de que a outra pessoa mude.",
                afirmacao: "Continuar em um ambiente tóxico comprometeu sua autoestima e exigiu um longo processo de reconstrução pessoal. "
            },
            {
                texto: "Decide encerrar o relacionamento e busca suporte na sua rede de apoio e em acompanhamento terapêutico.",
                afirmacao: "Estabelecer limites e romper com a dinâmica abusiva trouxe de volta sua autonomia e liberdade emocional. "
            }
        ]
    },
    {
        enunciado: "Crises de ansiedade e o medo constante de certas situações começam a limitar sua rotina e suas saídas de casa. Como encara isso?",
        alternativas: [
            {
                texto: "Tenta lidar com os sintomas por conta própria e evita encarar os gatilhos emocionais.",
                afirmacao: "Ignorar os sinais da ansiedade fez com que o medo passasse a governar suas escolhas diárias por um longo tempo. "
            },
            {
                texto: "Busca auxílio especializado para entender as causas da ansiedade e aprender a gerenciar as crises.",
                afirmacao: "Com o tratamento adequado, você compreendeu seus gatilhos e retomou o controle sobre sua própria trajetória. "
            }
        ]
    },
    {
        enunciado: "As pressões diárias de trabalho, estudos e vida pessoal acumulam de forma sufocante. O cansaço físico e mental é extremo. Qual é a sua decisão?",
        alternativas: [
            {
                texto: "Mantém a rotina acelerada e ignora o esgotamento para não parecer improdutivo.",
                afirmacao: "Ignorar o limite do próprio corpo resultou em um colapso emocional, provando que o descanso também é essencial."
            },
            {
                texto: "Reorganiza prioridades, estabelece limites saudáveis e inclui pausas reais no seu dia a dia.",
                afirmacao: "Priorizar seu bem-estar e redefinir seus limites transformou sua relação com o tempo e com a produtividade."
            }
        ]
    }
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
    caixaPerguntas.textContent = "Reflexão sobre a sua jornada:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();