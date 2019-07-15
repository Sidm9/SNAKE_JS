var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height / 2;
var dx = -7;
var dy = -8;
var foodx = 100;
var foody = 100;
var foodw = 50;
var foodh = 50;
function drawfood() {
    ctx.beginPath();
    ctx.rect(foodx, foody, foodw, foodh);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

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

    if (x + dx > canvas.width || x + dx < 0) {
        dx = -dx;
    }
    if (y + dy > canvas.height || y + dy < 0) {
        dy = -dy;
    }
    //------------FOOD CONTACT COLLISION------------//
  /*  if (y + dy < foody) {
        dy = -dy;
    }
    if (x + dx > foodw || x + dx < foodx) {
        dx = -dx;
    }
    if (y + dy > foodh || y + dy < foody) {
        dy = -dy;
    }
*/
}

function draw() {
    drawsnake();
    drawfood();
}

setInterval(draw, 20);
