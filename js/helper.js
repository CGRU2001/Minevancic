function hide(){
    document.getElementById('start').style.display = 'none';
    document.getElementById('game').style.display = 'flex';
    document.title = 'Minevancic - Playing';
    newRound();
    
}
function inhabilitarControles(victoria) {

    document.getElementById('left').style.display = 'none';
    document.getElementById('right').style.display = 'none';
    document.getElementById('up').style.display = 'none';
    if(victoria){
        document.getElementById('next').style.display = 'inline';
    }else{
        document.getElementById('reload').style.display = 'inline';
    }

}
function habilitarControles() {
    document.getElementById('left').style.display = 'inline';
    document.getElementById('right').style.display = 'inline';
    document.getElementById('up').style.display = 'inline';
    document.getElementById('reload').style.display = 'none';
    document.getElementById('next').style.display = 'none';
}
function regen(){
    removeColor();
    retry();
    repaint(0,0);
}


