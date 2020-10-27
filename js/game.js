var round = 0;

function checkVictory() {
    if (x == 5 && y == 6) {

        return true;
    }
    return false;
}

function newRound() {
    x = 0;
    y = 0;
    round++;
    removeColor();
    removeRover();
    remove();
    fill(round);
    document.getElementById('round').innerHTML = 'Round ' + round;
    habilitarControles();
    document.getElementById('status').innerHTML = 'Playing';
    repaint(0, 0);
    resetChrono();
}
function retry() {
    x = 0;
    y = 0;
    remove();
    fill(round);
    removeColor();
    document.getElementById('round').innerHTML = 'Round ' + round;
    repaint(0, 0);
    habilitarControles();
    document.getElementById('status').innerHTML = 'Playing';
    resetChrono();
}

function win() {
    if(checkVictory()){
        document.getElementById('status').innerHTML = 'You win!';
        inhabilitarControles(true);
        openWinModal();
        stopChrono();
    }

}
function lose() {
    document.getElementById('status').innerHTML = 'You lose';
    document.getElementById(x + '' + y).style.background = 'red';
    document.getElementById(x + '' + y).innerHTML = '<img src="img/explosion.png" id="exploted" alt="exploted" width="40px" height="40px">';
    openLoseModal();
    inhabilitarControles(false);
    stopChrono();
}

function openWinModal() {
    calcSnc();
    $('#winModal').modal('show');
}
function openLoseModal() {
    $('#loseModal').modal('show');
}

