
//Resolução da tela do jogo
const resoX = 1000;
const resoY = 700;

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


