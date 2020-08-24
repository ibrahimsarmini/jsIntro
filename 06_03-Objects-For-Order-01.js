
function moveX (){
    // v it's written from the perspectiv of
    this.x += 10; // an object
}

let ball = {
    x:0,
    y:0,
    moveX // means => moveX: moveX
}

ball.moveX();

let paddle = {
    x: 0,
    y: 0,
    moveX
}

paddle.moveX();

let allObjects = [ball, paddle];

for ( let i = 0; i < allObjects.length; i++ ){
    allObjects[i].moveX();
}

for ( let obj of allObjects ){
    obj.moveX();
}

allObjects.forEach(
    obj => obj.moveX()
);