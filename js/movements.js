var x = 0;
var y = 0;
var lastMov;

function left() {
    if (y != 6) {
        y++;
        repaint(x, y);
        lastMov = 'left';

    }else{
        blink();
    }

}
function right() {
    if (y != 0) {
        y--;
        repaint(x, y);
        lastMov = 'right';
    }else{
        blink();
    }

}
function up() {
    if (x != 5) {
        x++;
        repaint(x, y);
        lastMov = 'up';
    }else{
        blink();
    }

}

function down() {
    if (x != 0) {
        x--;
        repaint(x, y);
        lastMov = 'down';
    }else{
        blink();
    }

}

window.addEventListener("keydown", function (event) {
    if(event.key == 'w'){
        if(!comprobarPosiciones(x, y)){
            up();
        }
        
    }if(event.key == 'd'){
        if(!comprobarPosiciones(x, y)){
            right();
        }
    }if(event.key == 'a'){
        if(!comprobarPosiciones(x, y)){
            left();
        }
    }
    if(event.key == 's'){
        if(!comprobarPosiciones(x, y)){
            down();
        }
    }
},false);

