let elem = document.getElementById("menu-item1")
console.log("Elem: ",elem);
let elemItens = document.getElementById("menu-itens1")
console.log("elemItens: ",elemItens);

function entrei() {
    console.log("entrei em cima do elemento");
    elemItens.classList.remove("menu-subitens-hidden")
}

function mover() {
    console.log("movimentando em cima do elemento");
}

function sai() {
    console.log("sai de cima do elemento");
    elemItens.classList.add("menu-subitens-hidden")
}

elem.addEventListener("mouseenter", entrei);
//elem.addEventListener("mousemove", mover);
elemItens.addEventListener("mouseleave", sai);

const data = [
    {
        question: "Qual é a principal fonte de energia renovável que aproveita a luz do sol?",
        a: "Energia eólica",
        b: "Energia solar",
        c: "Energia hidrelétrica",
        d: "Energia geotérmica",
        correct: "b",
    },
    {
        question: "Qual fonte de energia limpa utiliza o vento para gerar eletricidade?",
        a: "Energia solar",
        b: "Energia eólica",
        c: "Energia hidrelétrica",
        d: "Energia nuclear",
        correct: "b",
    },
    {
        question: "Qual é a vantagem da energia hidrelétrica?",
        a: "É cara de manter",
        b: "Depende de combustíveis fósseis",
        c: "Gera poluição",
        d: "É renovável e tem baixo custo de operação",
        correct: "d",
    },
    {
        question: "Qual tipo de energia é gerado a partir do calor da Terra?",
        a: "Energia geotérmica",
        b: "Energia eólica",
        c: "Energia solar",
        d: "Energia hidrelétrica",
        correct: "a",
    },
    {
        question: "Qual tecnologia permite a utilização de dejetos orgânicos para produzir biogás?",
        a: "Energia solar",
        b: "Energia eólica",
        c: "Biomassa",
        d: "Energia nuclear",
        correct: "c",
    },
    {
        question: "Qual é o principal benefício das fontes de energia renováveis?",
        a: "São abundantes e reduzem a emissão de gases de efeito estufa",
        b: "São mais baratas que todas as outras fontes",
        c: "Não exigem manutenção",
        d: "Estão disponíveis apenas em áreas rurais",
        correct: "a",
    },
    {
        question: "Qual tecnologia de energia limpa utiliza espelhos para concentrar calor e gerar eletricidade?",
        a: "Painéis solares fotovoltaicos",
        b: "Energia eólica",
        c: "Energia solar concentrada (CSP)",
        d: "Energia hidrelétrica",
        correct: "c",
    },
    {
        question: "Qual fonte de energia renovável depende do ciclo das marés e das correntes oceânicas?",
        a: "Energia solar",
        b: "Energia eólica",
        c: "Energia das marés",
        d: "Energia geotérmica",
        correct: "c",
    },
    {
        question: "Qual é o impacto ambiental mais comum das usinas hidrelétricas?",
        a: "Emissão de CO2",
        b: "Desmatamento e alagamento de áreas naturais",
        c: "Poluição do ar",
        d: "Poluição da água",
        correct: "b",
    },
    {
        question: "Qual é a energia limpa gerada através da decomposição de matéria orgânica?",
        a: "Energia solar",
        b: "Biomassa",
        c: "Energia nuclear",
        d: "Energia geotérmica",
        correct: "b",
    },
];


const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const optionC = document.getElementById('optionC');
const optionD = document.getElementById('optionD');

const submitBtn = document.querySelector('.submit');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = data[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    optionA.innerText = currentQuizData.a;
    optionB.innerText = currentQuizData.b;
    optionC.innerText = currentQuizData.c;
    optionD.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

function getSelect() {
    let answer;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelect();

    if (answer) {
        if (answer === data[currentQuiz].correct) {
            score++;
        }
    }
    currentQuiz++;

    if (currentQuiz < data.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `
            <h2>Você respondeu ${score}/${data.length} Questões Corretas!</h2>
            <button onclick="location.reload()">Reiniciar</button>
        `;
    }
});

loadQuiz();