var counter;
var secs=5;
var clicks = 0;
var highScore = localStorage.getItem('highScore' || 0);
document.getElementById("highScore").innerHTML=highScore

function countClicks(){

    if( !counter ){//counter is not set

        counter = setInterval(timer, 1000);

    } else {

        document.getElementById('click').value = ++clicks;
        document.getElementById('timerCountdown').innerHTML = clicks;
    }
    highScores()
}

function timer(){
    secs--;
    if (secs <= 0){
        clearInterval(counter);
        document.getElementById("click").disabled = true;
        document.getElementById("seconds").innerHTML=0;
        return;
    }
    document.getElementById("seconds").innerHTML=secs;
    
}

function highScores() {
    if (clicks > highScore) {
        highScore = parseInt(clicks);
        localStorage.setItem('highScore', highScore);
    }
    document.getElementById("highScore").innerHTML=highScore
}