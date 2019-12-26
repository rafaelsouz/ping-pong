
//Placar
let myPoints = 0;
let enemyPoints = 0;

function showScoreboard(){
    stroke(255)
    textAlign(CENTER);
    textSize(20);
    fill(color(255, 140, 0));
    rect(383, 10, 60, 25);
    fill(255);
    text(myPoints, 413, 30);
    fill(color(255, 140, 0));
    rect(616, 10, 60, 25);
    fill(255);
    text(enemyPoints, 646, 30);
}

function addPointScoreboard(){
    if ( circleX > 985){
        myPoints += 1;
        resetCircle();
    }
    if ( circleX < 15 ){
        enemyPoints += 1;
        resetCircle();
    }
    
}
