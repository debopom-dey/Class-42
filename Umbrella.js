class Umbrella{
    constructor(x,y){
    var options={
        isStatic:true
    }
    this.image=loadImage("walking_1.png")
    this.umbrella=Bodies.circle(x,y,50,options);
    this.radius=50;
    World.add(world,this.body)
    }
    display(){
    var pos= this.body.position;
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height)    
    }
    }
