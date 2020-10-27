
var tablero = [
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false]
];

function remove(){
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            this.tablero[i][j] = false;
        }
    }
}

function fill(round) {

    let count = 0;
            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 7; j++) {
                    if (Math.round(Math.random()) == 1) {
                        if ((i == 0 & j == 0) || (i == 5 & j == 6)) {
                            tablero[i][j] = false;
                        } else {
                            if (i > 0) {
                                if ((!tablero[i - 1][j] && !tablero[i][j - 1]))  {
                                    if(count != (round * 3)) {
                                        tablero[i][j] = true;
                                        count++;
                                    }

                                }
                            } else {
                                if (!tablero[i][j - 1]) {
                                    if(count != (round * 3)){
                                        tablero[i][j] = true;
                                        count++;
                                    }

                                }
                            }

                        }
                    }
                }


        }


    }




function hint() {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            if (comprobarPosiciones(i, j)) {
                setTimeout(function () {
                    document.getElementById(i + '' + j).style.background = 'black';
                }, 10);
                setTimeout(function () {
                    document.getElementById(i + '' + j).style.background = 'transparent';
                }, 3000);
                return true;
            }
        }
    }
    return false;
}

function comprobarPosiciones(x, y) {
    if (tablero[x][y]) {
        return true;
    }
    return false;
}

function blink() {

    setTimeout(function () {
        document.getElementById(x + '' + y).style.background = 'transparent';
    }, 200);

    setTimeout(function () {
        repaint(x, y);
    }, 400);
}

function repaint(x, y) {
    removeRover();
    if (comprobarPosiciones(x, y)) {
        lose();
    } else {

        document.getElementById(x + '' + y).style.background = 'blue';
        document.getElementById(x + '' + y).style.color = 'white';
        removeRover();
        document.getElementById(x + '' + y).innerHTML = '<img src="img/rover-lunar.svg"  alt="rover" width="40px" height="40px">';

        if (x == 4 || y == 3) {
            if (comprobarPosiciones(x + 1, y)) {
                document.getElementById(x + '' + y).style.background = 'red';
                document.getElementById(x + '' + y).style.color = 'black';
                document.getElementById(x + '' + y).innerHTML = '<img src="img/rover-lunar.svg"  alt="rover" width="40px" height="40px">';
            }
            if (comprobarPosiciones(x, y + 1)) {
                document.getElementById(x + '' + y).style.background = 'red';
                document.getElementById(x + '' + y).style.color = 'white';
                document.getElementById(x + '' + y).innerHTML = '<img src="img/rover-lunar.svg" alt="rover" width="40px" height="40px">';

            }
        }
        else if (x == 5 || y == 4) {
            if (comprobarPosiciones(x - 1, y)) {
                document.getElementById(x + '' + y).style.background = 'red';
                document.getElementById(x + '' + y).style.color = 'white';
                document.getElementById(x + '' + y).innerHTML = '<img src="img/rover-lunar.svg" alt="rover" width="40px" height="40px">';

            }
            if (comprobarPosiciones(x, y - 1)) {
                document.getElementById(x + '' + y).style.background = 'red';
                document.getElementById(x + '' + y).style.color = 'white';
                document.getElementById(x + '' + y).innerHTML = '<img src="img/rover-lunar.svg" alt="rover" width="40px" height="40px">';

            }
        }
        else {
            if (comprobarPosiciones(x + 2, y)) {
                document.getElementById(x + '' + y).style.background = 'yellow';
                document.getElementById(x + '' + y).style.color = 'black';
                document.getElementById(x + '' + y).innerHTML = '<img src="img/rover-lunar-black.svg" alt="rover" width="40px" height="40px">';

            }

            if (comprobarPosiciones(x, y + 2)) {
                document.getElementById(x + '' + y).style.background = 'yellow';
                document.getElementById(x + '' + y).style.color = 'black';
                document.getElementById(x + '' + y).innerHTML = '<img src="img/rover-lunar-black.svg" alt="rover" width="40px" height="40px">';

            }

            if (comprobarPosiciones(x + 1, y)) {
                document.getElementById(x + '' + y).style.background = 'red';
                document.getElementById(x + '' + y).style.color = 'black';
                document.getElementById(x + '' + y).innerHTML = '<img src="img/rover-lunar.svg" alt="rover" width="40px" height="40px">';

            }

            if (comprobarPosiciones(x, y + 1)) {
                document.getElementById(x + '' + y).style.background = 'red';
                document.getElementById(x + '' + y).style.color = 'white';
                document.getElementById(x + '' + y).innerHTML = '<img src="img/rover-lunar.svg" alt="rover" width="40px" height="40px">';

            }
        }


        if (checkVictory()) {
            win();
        }
    }

}
function removeColor() {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            document.getElementById(i + '' + j).style.background = 'rgba(0,0,0,0)';
            document.getElementById(i + '' + j).innerHTML = '';
        }

    }
}
function removeRover() {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            document.getElementById(i + '' + j).innerHTML = '';
        }

    }
}

