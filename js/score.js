var totalScore = 0;

function calcScore(){
    defaultMinTime = round * 3;
    let time = getTime();
    console.log(time);
    let seconds = calcSnc();

    return seconds / defaultMinTime;

}
function calcSnc(){
    score = 100;
    if(minutes > 1){
        score = 0;
    }
    else{
        if(round < 5){
            score -= (seconds *4);
        }
        else if(round < 10){
            score -= (seconds *3);
        }
        else if(round < 12){
            score -= (seconds *2);
        }else{
            score -= seconds;
        }
        
    }
    totalScore+=score;

    document.getElementById('score').innerHTML = totalScore;

}