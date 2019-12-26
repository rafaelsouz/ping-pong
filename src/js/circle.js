//Propriedade do circulo
    let circleX = resoX/2 ;
    let circleY = resoY/2;
    let diam = 30;
    let radius = diam / 2;

//Velocidade X e Y do circulo
let veloX = 8;
let veloY = 8;

function showCircle(){
    circle(circleX, circleY, diam);
}

function moveCircle(){
    circleX += veloX;
    circleY += veloY;
}

function collisionBorder(){
    if ( circleX + radius >= width || circleX - radius < 0 ){
        veloX *= -1
    }

    if ( circleY + radius >= height || circleY - radius < 0){
        veloY *= -1
    }
}

function resetCircle (){
    circleX = resoX / 2;
    circleY = resoY / 2;
}
