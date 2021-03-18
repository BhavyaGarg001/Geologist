class Rubber {
  constructor(x, y,r) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.circle(x, y,70 , options);
    this.r = 70;
    
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    strokeWeight(4)
    stroke("blue")

    fill("blue");
    ellipse(0, 0,this.r,this.r);
    pop();
  }
};
