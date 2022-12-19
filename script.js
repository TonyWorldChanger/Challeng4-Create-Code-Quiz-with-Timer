var startQuizButton = document.getElementById("app-intro")
var questionScreen = document.getElementById("question-container")
var countDown = document.getElementById("timer");
var timer;

startQuizButton.addEventListener("click", startQuiz)
startQuizButton.addEventListener("click", setTime) 

function startQuiz() {
    console.log("it works");
    startQuizButton.classList.add("hide")
    questionScreen.classList.remove("hide")
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

}

var question = [
    {
        question: "Characters inside of quotations are called a string.",
         answers: [
            { text: "true", correct: true },
            { text: "false", correct: false}
        ]
    }

]