class Bob {
    constructor(x, y, radius) {
      var options = {
          'isStatic':false,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.width = width;
      this.radius = radius;

      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
     ellipseMode(CENTER);
      fill(225);
      ellipse(0,0, this.radius);
      pop();
    }
  };
  
