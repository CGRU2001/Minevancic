var minutes = 0;
var seconds = 0;

function count(){
    var chrono;
   

    seconds++;


    if(seconds < 10){
        tmpseconds = 0;
    }
    else{
        tmpseconds = '';
    }

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes < 10){
        tmpminutes = 0;
    }
    else{
        tmpminutes = '';
    }


    document.getElementById('time').innerHTML = tmpminutes+''+minutes+':'+tmpseconds+seconds;


    
}
function startChrono(){
    document.getElementById('time').innerHTML = '00:00';
    minutes = 0;
    seconds = 0;
    chrono = setInterval(count,1000);
}
function stopChrono(){
    chrono = clearInterval(chrono);
}
function resetChrono(){
    startChrono();
}
function getTime(){
    return document.getElementById('time').innerHTML;
}
