var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height / 2;
var dx = -2;
var dy = -2;
var foodx = 57;
var foody = 100;
var edge = 10;
var foodh = 10;


function getKeyAndMove(e){				
    var key_code=e.which||e.keyCode;
    switch(key_code){
        case 37: //left arrow key
            moveLeft();
            break;
        case 38: //Up arrow key
            moveUp();
            break;
        case 39: //right arrow key
            moveRight();
            break;
        case 40: //down arrow key
            moveDown();
            break;						
    }
}
function moveLeft(){
    dx = 1;
}
function moveUp(){
    dy = -1;
}
function moveRight(){
    dx = 1;
}
function moveDown(){
    dy = 1;
}


function drawfood() {
    ctx.beginPath();
    ctx.rect(foodx, foody, 10, foodh);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function drawsnake() {
    //CLEAR PATH
    ctx.clearRect(0, 0, canvas.height, canvas.width);
    ctx.beginPath();
    ctx.rect(foodx, y, edge, edge);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;

    //COLLISION

    if (x + dx > canvas.width-edge || x + dx < 0-edge) {
        dx = -dx;
    }
    if (y + dy > canvas.height-edge || y + dy < 0-edge ) {
        dy = -dy;
    }
    //------------FOOD CONTACT COLLISION------------//
    if (y+ dy == foody && y+ dy == foodx ){
        dy = -dy;
    }

}

function draw() {
    drawsnake();
    drawfood();
}

setInterval(draw,5);
