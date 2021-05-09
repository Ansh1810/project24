class Rubbber {
    constructor(x,y,r) {
      var options = {
        'restitution':0.3,
        'friction':5,
        'density':1
      }
      this.body = Bodies.circle(x,y,r,options);
    
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("blue");
      stroke("black");
      ellipse(pos.x, pos.y, this.r, this.r);
    }
  };