var startQuizButton = document.getElementById("start-quiz")
var questionScreen = document.getElementById("question-screen")

startQuizButton.addEventListener("click", startQuiz)

function startQuiz() {
    console.log("it works");
    startQuizButton.classList.add("hide")
    questionScreen.classList.remove("hide")

}

function nextQuestion() {

}

function selectAnswer() {

}