var startQuizButton = document.getElementById("app-intro")
var nextButton = document.getElementById("next-btn")
var questionScreen = document.getElementById("question-container")
var countDown = document.getElementById("timer");
var timer;
var quizQuestions = document.getElementById("question")
var answerButtons = document.getElementById("truefalse-buttons")
var shuffledQuestions, currentQuestionIndex


startQuizButton.addEventListener("click", startQuiz)
startQuizButton.addEventListener("click", setTime) 
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    nextQuestion()
})

function startQuiz() {
    console.log("it works");
    startQuizButton.classList.add("hide")
    questionScreen.classList.remove("hide")
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    quizQuestions.classList.remove("hide")
    nextQuestion()
    
    
}

function setTime() {
  var sec = 60;
  timer = setInterval(() =>{
    countDown.innerHTML = "00: "+sec;
    sec --;
  }, 1000)
}

function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    quizQuestions.innerText = question.question
    quizQuestions.answers.forEach(answers => {
        var button = document.createElement("button")
        button.innerText = answers.text
        button.classList.add("btn")
        if (answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtons.appendChild(button)
    })

}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove("hide")
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("correct")
}


var question = [
    {
        question: "Characters inside of quotations are called a string.",
         answers: [
            { text: "true", correct: true },
            { text: "false", correct: false}
        ]
    },
    {
        question: "Numbers inside of quotations are called a string.",
         answers: [
            { text: "true", correct: true },
            { text: "false", correct: false}
        ]
    },



]