var codeBox = document.querySelector("#code-box")
var startButton = document.querySelector("#start-quiz")
var mainPage = document.querySelector("#main")

questionNumber = 0

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


var callQuestion = function() {
    var questionBox = document.createElement("div");
    var questionEl = document.createElement("h2");
    questionEl.textContent = questionArr[0];
    var answerEL = document.createElement("ul");
    mainPage.appendChild(questionBox);
    questionBox.appendChild(questionEl);
    questionBox.appendChild(answerEL);

    for (var i = 0; i < 4; i++){
        var answerButtonEl = document.createElement("li");
        answerButtonEl.textContent = answerArr[i][i];
        answerButtonEl.className = "answer" + i
        questionBox.appendChild(answerButtonEl)

    }


};


var startQuiz = function(){
debugger;
    if (questionNumber === 0){
        deleteContent();
    }
    callQuestion();

    

  
    


    questionNumber++;
}












startButton.addEventListener("click", startQuiz)