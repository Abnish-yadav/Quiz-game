const questions = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Paris", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    }
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    choicesElement.innerHTML = "";
    currentQuestion.choices.forEach(choice => {
        const choiceButton = document.createElement('button');
        choiceButton.textContent = choice;
        choiceButton.onclick = function() {
            checkAnswer(choice);
        };
        choicesElement.appendChild(choiceButton);
    });
}

function checkAnswer(choice) {
    const currentQuestion = questions[currentQuestionIndex];
    if (choice === currentQuestion.answer) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert("You have completed the quiz!");
    }
}

displayQuestion();
