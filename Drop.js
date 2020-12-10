class Drop{
    constructor(x,y,r){
    var options={
        restituition:0.4,
        friction:0.1,
    }
    this.r=r
    this.body=Bodies.circle(x,y,this.r,options);
  
    World.add(world,this.body)
    }
    display(){
    var pos= this.body.position;
    var angle= this.body.angle
    push();
    translate(pos.x,pos.y)
    rotate(angle);
    noStroke();
    fill(33,150,243);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r)
    pop();
    
    
    }
    update(){
      if(this.body.position.y>height){
          Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
      }

    }
    }