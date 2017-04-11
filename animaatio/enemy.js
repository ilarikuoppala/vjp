function enemies() {
  document.enemyList = []

  this.create = function(x, y, speed) {
    document.enemyList[document.enemyList.length] = new Enemy(x, y, speed)
  }
  this.move = function() {
    for (i = 0; i < document.enemyList.length; i++) {
      document.enemyList[i].move(randInt(4))
    }
  }
  this.draw = function(ctx) {
      for (i = 0; i < document.enemyList.length; i++) {
        document.enemyList[i].draw(ctx)
      }
    }
  this.onClick = function(x, y) {
    for (i = 0; i < document.enemyList.length; i++) {
      if (document.enemyList[i].x <= x && document.enemyList[i].x + 40 > x &&
          document.enemyList[i].y <= y && document.enemyList[i].y + 40 > y) {
            document.enemyList.splice(i,1)
          }

    }
  }

}

function randInt(i) {
   return Math.floor((Math.random() * i));
}

function Enemy(x,y,speed) {
  this.defaultX = x
  this.defaultY = y
  this.defaultSpeed = speed
  this.img = new Image();
  this.img.src = "animaatio/pacman.png"
  this.reset = reset
  this.reset()

  this.draw = draw
  this.move = function move(direction) {
    switch (direction) {
        case 0:
          if (this.y>=0) {this.y -= this.speed;}
          break;
        case 1:
          if (this.y+40<400) { this.y += this.speed;}
          break;
        case 2:
          if (this.x>=0) { this.x -= this.speed; }
          break;
        case 3:
          if (this.x+40<400) { this.x += this.speed; }
          break;
    }
  }


  this.pacman = sprite({
      context: document.ctx,
      width: 440,
      height: 40,
      image: this.img,
      numberOfFrames: 10,
      ticksPerFrame: 4
  });


}
