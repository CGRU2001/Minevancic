var round = 0;

function checkVictory() {
    if (x == 5 && y == 6) {

        return true;
    }
    return false;
}

function newRound(){
    x = 0;
    y = 0;
    round++;
    removeColor();
    removeRover();
    tablero.remove();
    tablero.fill(round);
    document.getElementById('round').innerHTML = 'Round ' + round;
    habilitarControles();
    document.getElementById('status').innerHTML = 'Playing';
    repaint(0,0);
    resetChrono();
}
function retry(){
    x = 0;
    y = 0;
    tablero.remove();
    tablero.fill(round);
    removeColor();
    document.getElementById('round').innerHTML = 'Round ' + round;
    repaint(0,0);
    habilitarControles();
    document.getElementById('status').innerHTML = 'Playing';
    resetChrono();
}

function openWinModal(){
    calcSnc();
    $('#winModal').modal('show');
}
function openLoseModal(){
    $('#loseModal').modal('show');
}

