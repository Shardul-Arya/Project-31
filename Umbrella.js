class Umbrella{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic': true
        }
        this.body = Bodies.circle(x, y, 100, options);
        this.radius=100;
        this.image = loadImage("walking_1.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        ellipseMode(CENTER);
        fill(0);
        ellipse(pos.x, pos.y, 200);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 250, 250);
        pop();
      }
}