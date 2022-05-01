var scoreList = document.querySelector("#high-score-list")
var backBtn = document.querySelector("#go-back")
var clearBtn = document.querySelector("#clear")

var players = [];
var playersImport = []
var playerObj = {
    name: "",
    score:""
};

var goBack =function(){
    location.href = "./index.html"
};


var clearScores = function(){
    localStorage.clear()
    scoreList.remove()
}


var printScores = function(){
    debugger;

    
    playersImport = localStorage.getItem("scorelist");
    playersImport = JSON.parse(playersImport)
    var player = localStorage.getItem("player");
    
    if (playersImport==null){
        playersImport = [];
    }
    
   

    playerObj = JSON.parse(player);
    console.log(playerObj);
    playersImport.push(playerObj);
    

    for (var i = 0; i < playersImport.length;i++){
        var orderedEl = document.createElement("li")
        orderedEl.id = "player" + (i)
        orderedEl.textContent = playersImport[i].name + " - " + playersImport[i].score
        scoreList.appendChild(orderedEl)
        

    }
    
    
    
    
    localStorage.setItem("scorelist", JSON.stringify(playersImport))

    

}













printScores();
backBtn.addEventListener("click", goBack)
clearBtn.addEventListener("click", clearScores)