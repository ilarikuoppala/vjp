$(document).ready(initialize);

function initialize() {
  document.canvas = document.getElementById("animation");
  document.canvas.addEventListener("mousedown", onMouseDown, false);
  this.ctx = document.canvas.getContext("2d");
  this.player = new Player(100, 100, 5)
  document.player = this.player
  document.ctx = this.ctx
  document.enemies = new enemies()
  document.enemies.create(20,20,3)
  document.enemies.create(60,60,3)
  document.enemies.create(20,60,3)
  document.enemies.create(60,20,3)
  this.player.draw(this.ctx)
  this.animate = animate
  window.requestAnimationFrame(animate)
}

var framecount = 0;

function animate() {
  framecount += 1;
  clear()
  document.player.draw(document.ctx);
  document.enemies.move()
  document.enemies.draw(document.ctx)
  drawControls(document.ctx)
  window.requestAnimationFrame(animate);
}

function drawControls(ctx) {
  ctx.beginPath();
  ctx.moveTo(0,400);
  ctx.lineTo(400,400);
  ctx.moveTo(200,400);
  ctx.lineTo(200,420);
  ctx.moveTo(90,410);
  ctx.lineTo(110,410);
  ctx.moveTo(100,400);
  ctx.lineTo(100,420);
  ctx.moveTo(290,410);
  ctx.lineTo(310,410);
  ctx.stroke();
  ctx.closePath();
}

function clear() {
  document.ctx.clearRect(0, 0, document.canvas.width, document.canvas.height);
}

document.onkeydown = checkKey;

function onMouseDown(event) {
  canvas_x = event.pageX - document.canvas.offsetLeft;
  canvas_y = event.pageY - document.canvas.offsetTop;
  if (canvas_y > 400) {
    if (canvas_x > 200) {
      document.player.changeSpeed(-1)
    }
    else {document.player.changeSpeed(1)}
  }
  else { document.enemies.onClick(canvas_x,canvas_y) }

}

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
      document.player.move("up")
    }
    else if (e.keyCode == '40') {
      document.player.move("down")
    }
    else if (e.keyCode == '37') {
      document.player.move("left")
    }
    else if (e.keyCode == '39') {
      document.player.move("right")
    }

    return false;
}
