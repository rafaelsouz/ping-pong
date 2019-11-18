
//Resolução da tela do jogo
const resoX = 1000;
const resoY = 700;

//Propriedade do circulo
let circleX = resoX/2 ;
let circleY = resoY/2;
let diam = 30;
let radius = diam / 2;

//Velocidade X e Y do circulo
let veloX = 8;
let veloY = 8;

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

//Placar
let myPoints = 0;
let enemyPoints = 0;

function setup() {
    createCanvas(resoX, resoY);
}
  
function draw() {
    background(20);

    showCircle();
    showRacket(racketX, racketY);
    showRacket(enemyRacketX, enemyRacketY);
    showScoreboard()
    moveRacket();
    moveEnemyRacket();
    moveCircle();
    collisionBorder();
    collisionWithRacket(racketX, racketY);
    collisionWithRacket(enemyRacketX, enemyRacketY);
    addPointScoreboard();
}

function showCircle(){
    circle(circleX, circleY, diam);
}

function showRacket(x, y){
    rect(x, y, racketLength, racketHeight);
}

function moveCircle(){
    circleX += veloX;
    circleY += veloY;
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


function collisionBorder(){
    if ( circleX + radius >= width || circleX - radius < 0 ){
        veloX *= -1
    }

    if ( circleY + radius >= height || circleY - radius < 0){
        veloY *= -1
    }
}

function collisionWithRacket(x, y){
    hit = collideRectCircle(x, y, racketLength, racketHeight, circleX, circleY, radius )
    if (hit){
        veloX *= -1 
    }
}

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

function resetCircle (){
    circleX = resoX / 2;
    circleY = resoY / 2;
}
