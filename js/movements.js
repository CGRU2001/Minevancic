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

