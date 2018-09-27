//GLOBAL VARIABLES

var crys1Val = 0;
var crys2Val = 0;
var crys3Val = 0;
var crys4Val = 0;
var targetVal = 0;
var score = 0;
var wins = 0;
var losses = 0;

//FUNCTIONS

//Initializes each new game
function resetGame() {
    //resets score to 0
    score = 0;
    //chooses random target value between 19-120
    targetVal = Math.floor(Math.random() * 101) + 19;
    //chooses random value for each crystal between 1-12
    crys1Val = Math.floor(Math.random() * 11) + 1;
    crys2Val = Math.floor(Math.random() * 11) + 1;
    crys3Val = Math.floor(Math.random() * 11) + 1;
    crys4Val = Math.floor(Math.random() * 11) + 1;
}

//Updates the score after a crystal is clicked; val is the value of the clicked crystal
function updateScore(val) {
    score = score + val;
}



