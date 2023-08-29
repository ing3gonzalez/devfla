const categorySelect = document.getElementById("category");
const difficultySelect = document.getElementById("difficulty");
const typeSelect = document.getElementById("type");
const generateButton = document.getElementById("generate");
const quizContainer = document.getElementById("quiz");
const scoreContainer = document.getElementById("score");
const newTriviaButton = document.getElementById("newTrivia");

let score = 0;

generateButton.addEventListener("click", generateTrivia);
newTriviaButton.addEventListener("click", generateTrivia);

function generateTrivia() {
    quizContainer.innerHTML = "";
    score = 0;
    scoreContainer.textContent = `Puntaje: ${score}`;

    const category = categorySelect.value;
    const difficulty = difficultySelect.value;
    const type = typeSelect.value;

//   fetch(`./trivia.json/category=${category}&difficulty=${difficulty}&type=${type}`) agregar categorias https://opentdb.com/api_category.php
fetch("trivia.json")
        .then(response => response.json())
        .then(data => {
            const questions = data.results;
            questions.forEach((question, index) => {
                const quizCard = document.createElement("div");
                quizCard.classList.add("quiz-card");
                quizCard.innerHTML = `
                    <h3>Pregunta ${index + 1}:</h3>
                    <p>${question.question}</p>
                    <ul>
                        ${question.incorrect_answers.map(answer => `<li>${answer}</li>`).join("")}
                        <li>${question.correct_answer}</li>
                    </ul>
                `;
                quizCard.addEventListener("click", () => checkAnswer(quizCard, question.correct_answer));
                quizContainer.appendChild(quizCard);
            });
        });
}

function checkAnswer(card, correctAnswer) {
    if (!card.classList.contains("answered")) {
        card.classList.add("answered");
        if (correctAnswer === "True" || correctAnswer === "False") {
            correctAnswer = correctAnswer.toLowerCase();
        }
        if (card.innerText.includes(correctAnswer)) {
            card.style.backgroundColor = "lightgreen";
            score += 100;
            scoreContainer.textContent = `Puntaje: ${score}`;
        } else {
            card.style.backgroundColor = "lightcoral";
        }
    }
}
