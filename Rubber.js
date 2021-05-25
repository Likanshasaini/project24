class Rubber {
    constructor(x, y,r) {
      var options = {
        'density':12,
        'friction': 0.9,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y,50, options);
	  this.radius=50;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('black')
      fill('blue')
	  ellipseMode(RADIUS);
    ellipse(600, 540, 30, 30);
      
      pop();
    };
  };