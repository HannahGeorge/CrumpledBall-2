class Paper {
    constructor(x, y) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction: 0.5,
          density: 2
      }
      this.body = Bodies.circle(x, y, 15, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("pictures/paper.png")
      World.add(world, this.body);
      
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 36, 36);
      pop();
    }
}