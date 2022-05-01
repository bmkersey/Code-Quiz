var codeBox = document.querySelector("#code-box")
var startButton = document.querySelector("#start-quiz")
var mainPage = document.querySelector("#main")
var answer1Btn = document.querySelector(".answer0")
var answer2Btn = document.querySelector(".answer1")
var answer3Btn= document.querySelector(".answer2")
var answer4Btn= document.querySelector(".answer3")

var timer = document.querySelector("#timer")

var highScore = 0
var questionNumber = 0
var timeRemaining = 60

var questionArr = ["Commonly used data types DO NOT include:", "The condition in an 'If / then statement' is enclosed with_____", "Arrays in Javascript can be used to store:", "String values must be enclosed within _____ when being assigned to variables.", "A very useful tool to use during development and debugging for printing content to the debugger is:"]

var questionOneAnswers =["strings", "booleans", "alerts", "numbers"]
var questionTwoAnswers = ["quotes", "parenthesis", "curly brackets", "square brackets"]
var questionThreeAnswers = ["numbers and strings", "other arrays", "booleans", "all of the above"]
var questionFourAnswers = ["commas", "curlybrackets", "quotes", "parenthesis"]
var questionFiveAnswers = ["javascript", "Terminal/Bash", "for loops", "console.log"]

var correctAnswer0 =[false, false, true, false]
var correctAnswer1 =[false, true, false, false]
var correctAnswer2 =[false, false, false, true]
var correctAnswer3 =[false, false, true, false]
var correctAnswer4 =[false, false, false, true]

var correctAnswerArr= [correctAnswer0,correctAnswer1,correctAnswer2,correctAnswer3,correctAnswer4]

var answerArr = [questionOneAnswers, questionTwoAnswers, questionThreeAnswers, questionFourAnswers, questionFiveAnswers]


var deleteContent = function(){
    var codeBox = document.querySelector("#code-box")
    console.log("hello");
    codeBox.remove();
};



var saveData = function(){
    debugger;
    highScore = timeRemaining
    localStorage.setItem("highscore", JSON.stringify(highScore));
    var initialInput = intials.value
    localStorage.setItem("initials", initialInput)
}

var endGame = function(){
  
    
    var endGameEl = document.createElement("div");
    endGameEl.id = "code-box";
    var congrats = document.createElement("h2");
    congrats.className = "";
    congrats.textContent = "Congratulations!! your score is:" + timeRemaining;
    var highScoreMessageEl = document.createElement("p")
    highScoreMessageEl.className = "end-game-p";
    highScoreMessageEl.innerHTML = "Enter you initials:"
    var initialEl = document.createElement("input");
    initialEl.id = "intials"
    var submitButtonEl = document.createElement("button");
    submitButtonEl.id = "high-score"
    submitButtonEl.textContent = "Submit"
    submitButtonEl.type = "submit";
    mainPage.appendChild(endGameEl);
    endGameEl.appendChild(congrats);
    endGameEl.appendChild(highScoreMessageEl)
    endGameEl.appendChild(initialEl);
    endGameEl.appendChild(submitButtonEl);
   var highScoreButton = document.querySelector("#high-score")
   highScoreButton.addEventListener("click", saveData)
    
    
}

var checkAnswer = function(event){


    var answerValue = event.target.value
    console.log(answerValue)

    if (answerValue === "false"){

        
        var answerStatus = document.createElement("h2");
        answerStatus.className = "answer-status";
        answerStatus.textContent = "Incorrect!!";
        var selectedAnswer = document.querySelector(".answer-list");
        selectedAnswer.appendChild(answerStatus);
        

        timeRemaining = timeRemaining -5;
        questionNumber++;

        
        deleteContent();

        callQuestion();
        return;

    } else {
        var answerStatus = document.createElement("h2");
        answerStatus.className = "answer-status";
        answerStatus.textContent = "Correct!!";
        var selectedAnswer = document.querySelector(".answer-list");
        selectedAnswer.appendChild(answerStatus);
        questionNumber++;
        
        deleteContent();

        callQuestion();

    }
}


var callQuestion = function() {

   if (questionNumber > 4) {
       endGame();
       return;
   }

    var questionBox = document.createElement("div");
    questionBox.id = "code-box"
    var questionEl = document.createElement("h2");
    questionEl.textContent = questionArr[questionNumber];
    var answerEL = document.createElement("div");
    answerEL.className = "answer-list"
    mainPage.appendChild(questionBox);
    questionBox.appendChild(questionEl);
    questionBox.appendChild(answerEL);

    for (var i = 0; i < 4; i++){
        var answerButtonEl = document.createElement("button");
        answerButtonEl.textContent = answerArr[questionNumber][i];
        answerButtonEl.id = "answer" + i;
        answerButtonEl.className = "button";
        answerButtonEl.value = correctAnswerArr[questionNumber][i];
        answerEL.appendChild(answerButtonEl);

    };
    
    var answer1Btn = document.querySelector("#answer0");
    var answer2Btn = document.querySelector("#answer1");
    var answer3Btn= document.querySelector("#answer2");
    var answer4Btn= document.querySelector("#answer3");
    answer1Btn.addEventListener("click", checkAnswer);
    answer2Btn.addEventListener("click", checkAnswer);
    answer3Btn.addEventListener("click", checkAnswer);
    answer4Btn.addEventListener("click", checkAnswer);


    // assignCorrect();
   

};


var startQuiz = function(){

    
    if (questionNumber === 0){
        deleteContent();
    }

    
    
  
    var quizTimer = function(){
        timeRemaining = timeRemaining - 1
    
        if (timeRemaining <= 0){
            clearInterval(myInterval);
            
            
            endGame();
            
            
        }else if (questionNumber >= questionArr.length){
            clearInterval(myInterval);
            
        }else {
            timer.innerHTML = "time: " + (timeRemaining)
        };
      
    };
    
    var myInterval = setInterval(quizTimer, 1000);

    callQuestion();
    
    
    


  

    
}












startButton.addEventListener("click", startQuiz);

