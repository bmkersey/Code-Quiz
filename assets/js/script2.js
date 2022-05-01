var players = []


var playerObj = {
    name: "",
    score:""
}



var printScores = function(){
    debugger;
    var player = localStorage.getItem("player")

    playerObj = JSON.parse(player)
    console.log(playerObj)
    players.push(playerObj)

    for (var i = 0; i < players.length;i++){
        var orderedEl = document.createElement("li")
        orderedEl.id = 
    }    

}













printScores();