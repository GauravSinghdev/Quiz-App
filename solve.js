const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Shark", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Europe", correct: false},
            { text: "Africa", correct: false},
            { text: "Australia", correct: true}
        ]
    },
    {
        question: "Dandia is a popular dance of?",
        answers: [
            { text: "Punjab", correct: false},
            { text: "Gujrat", correct: true},
            { text: "Tamil Nadu", correct: false},
            { text: "Maharashtra", correct: false}
        ]
    },
    {
        question: "Which of the following is used in pencils?",
        answers: [
            { text: "Graphite", correct: true},
            { text: "Silicon", correct: false},
            { text: "Charcoal", correct: false},
            { text: "Phosphorous", correct: false}
        ]
    },
    {
        question: "Which scientist discovered the radioactive element radium?",
        answers: [
            { text: "Isaac Newton", correct: false},
            { text: "Albert Einstein", correct: false},
            { text: "Benjamin Franklin", correct: false},
            { text: "Mari Curie", correct: true}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("ans-btn");
const nextButton = document.getElementById("nxt-btn");

let currentQuestionIndex = 0;
let score = 0;

function showQuestions()
{
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn"); //for adding class for button
        answerButtons.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", (e) => {
            const selectedBtn = e.target;
            const isCorrect = selectedBtn.dataset.correct === "true";
            if(isCorrect){
                selectedBtn.classList.add("correct");
                score++;
            }
            else{
                selectedBtn.classList.add("incorrect");
            }
            // Array.from(answerButtons.children).forEach(button =>{
            //     if(button.dataset.correct === "true"){
            //         // button.classList.add("correct");
            //     }
            //     // button.disabled = true;
            // })
            nextButton.style.display = "";
        });
    })
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

function resetState()
{
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }

}

function startQuiz()
{
    document.getElementById("ans-btn").innerHTML = ""
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

// document.getElementsByClassName("quiz").innerHTML = "";


startQuiz();
