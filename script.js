var startQuizButton = document.getElementById("start-quiz")
var questionScreen = document.getElementById("question-screen")
var countDown = document.getElementById("timer");
var timer;

startQuizButton.addEventListener("click", startQuiz)
startQuizButton.addEventListener("click", setTime) 

function startQuiz() {
    console.log("it works");
    
}

function setTime() {
  var sec = 60;
  timer = setInterval(() =>{
    countDown.innerHTML = "00: "+sec;
    sec --;
  }, 1000)
}

