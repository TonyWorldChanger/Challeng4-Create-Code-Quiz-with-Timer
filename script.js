var startQuizButton = document.getElementById("app-intro")
//var nextButton = document.getElementById("next-btn")
var questionScreen = document.getElementById("question-container")
var countDown = document.getElementById("timer");
var timer;
var quizQuestions = document.getElementById("question")
var answerButtons = document.getElementById("truefalse-buttons")
var shuffledQuestions, currentQuestionIndex
var sec = 60;
var highscoresButton = document.getElementById("highscores")
var submitScreen = document.getElementById("submit-screen")
var finalScore = document.getElementById("final-score")
var submitButton = document.getElementById("submit-btn")
var submitInput = docoument.getElementById("input")


startQuizButton.addEventListener("click", startQuiz)
startQuizButton.addEventListener("click", setTime) 
submitButton.addEventListener("click", submitHighscore)
highscoresButton.addEventListener("click", () => {
    var highscoresScreen = document.getElementById("highscores-screen")
    highscoresScreen.classList.remove("hide")

})


// //nextButton.addEventListener("click", () => {
//     currentQuestionIndex++
//     nextQuestion()
// })

function startQuiz() {
    console.log("it works");
    startQuizButton.classList.add("hide")
    questionScreen.classList.remove("hide")
    //shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    quizQuestions.classList.remove("hide")
    nextQuestion()
      
    
}

function setTime() {
  timer = setInterval(() =>{
    countDown.innerHTML = "00: "+sec;
    sec --;
  }, 1000)
}

function nextQuestion() {

    showQuestion(questions[currentQuestionIndex]) 

}

function showQuestion(question) {
    if (currentQuestionIndex > questions.length) {
        submitScreen.classList.remove("hide")
        quizQuestions.classList.add("hide")
        answerButtons.classList.add("hide")
        clearInterval(timer)
        finalScore.textContent = "Your Final Score: " + (sec+1);

    }

    if (currentQuestionIndex < questions.length) {
        quizQuestions.innerText = question.question
    answerButtons.innerHTML = ""
    question.answers.forEach(answers => {
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
    
}

function selectAnswer(e) {
    var selectedButton = e.target
    // var correct = selectedButton.dataset.correct
    // setStatusClass(document.body, correct)
    // Array.from(answerButtons.children).forEach(button => {
    //     setStatusClass(button, button.dataset.correct)
    // }).
    if (selectedButton.dataset.correct) {
        currentQuestionIndex++
        nextQuestion()
    } else {
        currentQuestionIndex++
        sec -= 5;
        nextQuestion()
    }
    // nextButton.classList.remove("hide")
    // console.log("does this work", selectedButton);
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function submitHighscore () {
    var userName = input.value
    localStorage.setItem(JSON)
}



var questions = [
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

    {
        question: "True and False are called booleans.",
         answers: [
            { text: "true", correct: true },
            { text: "false", correct: false}
        ]
    },

    {
        question: "JavaScript is difficult, but worth it.",
         answers: [
            { text: "true", correct: true },
            { text: "false", correct: false}
        ]
    },
  


]