class createDrop {
    constructor(x,y) {
      var options = {
          friction: 0.1,
          isStatic: false,
          density: 100
      }
      this.body = Bodies.circle(x,y,2.5,options);
      this.radius = 2.5;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("blue");
      ellipse(pos.x, pos.y, 5);

      if (this.body.position.y > height) {
          Matter.Body.setPosition(this.body, {x:random(0,300), y:-10});
      }
    }
  };
