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
    //resets score to 0 and writes to html
    score = 0;
    $("#score").text(score);
    //chooses random target value between 19-120 and writes to html
    targetVal = Math.floor(Math.random() * 101) + 19;
    $("#target").text(targetVal);
    //chooses random value for each crystal between 1-12
    crys1Val = Math.floor(Math.random() * 11) + 1;
    crys2Val = Math.floor(Math.random() * 11) + 1;
    crys3Val = Math.floor(Math.random() * 11) + 1;
    crys4Val = Math.floor(Math.random() * 11) + 1;
}

//Updates the score after a crystal is clicked; val is the value of the clicked crystal
function updateScore(val) {
    score = score + val;
    $("#score").text(score);
}

//Updates wins and losses
function updateWinLoss() {
    if (score === targetVal) {
        wins++;
        $("#win-count").text(wins);
        resetGame();
        return;
    }
    else if (score >= targetVal) {
        losses++;
        $("#loss-count").text(losses);
        resetGame();
        return;
    }
}

//MAIN PROCESS

//calls game start/reset function
resetGame();

//on click, call these functions
$("#crys1").on("click", function() {
    updateScore(crys1Val);
    updateWinLoss();
});

$("#crys2").on("click", function() {
    updateScore(crys2Val);
    updateWinLoss();
});

$("#crys3").on("click", function() {
    updateScore(crys3Val);
    updateWinLoss();
});

$("#crys4").on("click", function() {
    updateScore(crys4Val);
    updateWinLoss();
});






