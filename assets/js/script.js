var codeBox = document.querySelector("#code-box")
var startButton = document.querySelector("#start-quiz")
var mainPage = document.querySelector("#main")
var selectedAnswer = document.querySelector("#answer-list")
var timer = document.querySelector("#timer")

var questionNumber = 0
var timeRemaining = 60

var questionArr = ["Commonly used data types DO NOT include:", "The condition in an 'If / then statement' is enclosed with_____", "Arrays in Javascript can be used to store:", "String values must be enclosed within _____ when being assigned to variables.", "A very useful tool to use during development and debugging for printing content to the debugger is:"]

var questionOneAnswers =["strings", "booleans", "alerts", "numbers"]
var questionTwoAnswers = ["quotes", "parenthesis", "curly brackets", "square brackets"]
var questionThreeAnswers = ["numbers and strings", "other arrays", "booleans", "all of the above"]
var questionFourAnswers = ["commas", "curlybrackets", "quotes", "parenthesis"]
var questionFiveAnswers = ["javascript", "Terminal/Bash", "for loops", "console.log"]



var answerArr = [questionOneAnswers, questionTwoAnswers, questionThreeAnswers, questionFourAnswers, questionFiveAnswers]


var deleteContent = function(){
    console.log("hello")
    codeBox.remove();
};

var checkAnswer = function(){
    if (!selectedAnswer){
        var answerStatus = document.createElement("h2");
        answerStatus.className = "answer-status";
        answerStatus.className = "Incorrect!!"

    }
}


var callQuestion = function() {

   

    var questionBox = document.createElement("div");
    var questionEl = document.createElement("h2");
    questionEl.textContent = questionArr[0];
    var answerEL = document.createElement("ul");
    answerEL.className = "answer-list"
    mainPage.appendChild(questionBox);
    questionBox.appendChild(questionEl);
    questionBox.appendChild(answerEL);

    for (var i = 0; i < 4; i++){
        var answerButtonEl = document.createElement("li");
        answerButtonEl.textContent = answerArr[questionNumber][i];
        answerButtonEl.className = "answer" + i
        answerEL.appendChild(answerButtonEl)

    }

    checkAnswer()


};


var startQuiz = function(){
debugger;
    
    if (questionNumber === 0){
        deleteContent();
    }

    

    callQuestion();

    setInterval(quizTimer, 1000);
    
    function quizTimer(){
        timeRemaining = timeRemaining - 1

        if (timeRemaining <=0){
            clearInterval(timeRemaining);
            //counter ended add something here
            return;
        }

        timer.innerHTML = "time: " + (timeRemaining)
        
    }

  
    


    questionNumber++;
}












startButton.addEventListener("click", startQuiz)