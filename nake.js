var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height / 2;
var dx = -1;
var dy = -2;

function drawsnake() {
    //CLEAR PATH
    ctx.clearRect(0, 0, canvas.height, canvas.width);
    ctx.beginPath();
    ctx.rect(x, y, 10, 10);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;

    //COLLISION
    if (y + dy < 0) {
        dy = -dy;
    }
    if (x + dx < 0) {
        dx = -dx;
    }
    if (y + dy == canvas.width) {
        dy = -dy;
    }
    if (x + dx == canvas.height) {
        dx = -dx;   
    }
}


function drawfood() {
    ctx.beginPath();
    ctx.rect(100, 100, 10, 10);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    drawsnake();
    drawfood();
}

setInterval(draw, 3.2);