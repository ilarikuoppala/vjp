
function Player(x,y,speed) {
  this.defaultX = x
  this.defaultY = y
  this.defaultSpeed = speed
  this.img = new Image();
  this.img.src = "animaatio/pacman.png"
  this.reset = reset
  this.reset()

  this.draw = draw
  this.move = move
  this.changeSpeed = changeSpeed

  this.pacman = sprite({
      context: document.ctx,
      width: 440,
      height: 40,
      image: this.img,
      numberOfFrames: 10,
      ticksPerFrame: 4
  });


}

function reset() {
  this.x = this.defaultX
  this.y = this.defaultY
  this.speed = this.defaultSpeed
}

function draw(ctx, direction) {
  this.pacman.context = ctx
  this.pacman.update(direction)
  this.pacman.render(this.x, this.y)
}

function move(direction) {
  switch (direction) {
      case "up":
        if (this.y>=0) {this.y -= this.speed; this.draw(document.ctx, direction)}
        break;
      case "down":
        if (this.y+40<400) { this.y += this.speed;this.draw(document.ctx, direction)}
        break;
      case "left":
        if (this.x>=0) { this.x -= this.speed;this.draw(document.ctx, direction) }
        break;
      case "right":
        if (this.x+40<400) { this.x += this.speed;this.draw(document.ctx, direction) }
        break;
  }
}

function changeSpeed(amount) {
  this.speed += amount;
  if (this.speed < 1) {
    this.speed = 1;
  }
}

function sprite (options) {

  var that = {},
    frameIndex = 0,
    tickCount = 0,
    ticksPerFrame = options.ticksPerFrame || 0,
    numberOfFrames = options.numberOfFrames || 1;

  that.context = options.context;
  that.width = options.width;
  that.height = options.height;
  that.image = options.image;

  that.update = function (direction) {
    if (direction == undefined) {
      tickCount += 1;
      if (tickCount > 100) {
        tickCount = 0;
      }
      if (tickCount === 50) {
        frameIndex = 6;
      } else { if (tickCount === 0) {frameIndex = 5;}}
    } else {
      if (direction === "up") {
        frameIndex = 1;
      }
      if (direction === "right") {
        frameIndex = 2;
      }
      if (direction === "down") {
        frameIndex = 3;
      }
      if (direction === "left") {
        frameIndex = 4;
      }
      tickCount = -10; // Estetään lepoanimaatiota aktivoitumasta liikkeen aikana
    }
  };

  that.render = function (x,y) {

    // Draw the animation
    that.context.drawImage(
      that.image,
      frameIndex * that.width / numberOfFrames,
      0,
      that.width / numberOfFrames,
      that.height,
      x,
      y,
      that.width / numberOfFrames,
      that.height);
  };

  return that;
}
