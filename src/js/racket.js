
//Propriedades da raquete
let racketX = 30;
let racketY = 300;

let racketLength = 10;
let racketHeight = 150;
let hit = false;

//Propriedades da raquete inimiga
let enemyRacketX = 960;
let enemyRacketY = 300;
let enemyRacketVeloY; 

function showRacket(x, y){
    rect(x, y, racketLength, racketHeight);
}

function moveRacket(){
    if (keyIsDown(UP_ARROW) && racketY > 15 ){
        racketY -=10;
    }
    if (keyIsDown(DOWN_ARROW) && racketY < resoY - 160){
        racketY +=10;
    }
}

function moveEnemyRacket(){

    enemyRacketVeloY = circleY - enemyRacketY - racketLength / 2 - 30
    if (circleY < 580 ){
        enemyRacketY += enemyRacketVeloY
    }
}


function collisionWithRacket(x, y){
    hit = collideRectCircle(x, y, racketLength, racketHeight, circleX, circleY, radius )
    if (hit){
        veloX *= -1 
    }
}
