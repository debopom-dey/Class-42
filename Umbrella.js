class Umbrella{
    constructor(x,y,width,height){
    var options={
        restituition:0.4,
        isStatic:true,
    }

    this.width=width
    this.height=height;
    this.image=loadImage("walking_1.png")
    this.body=Bodies.rectangle(x,y,width,height,options);
   
    World.add(world,this.body)
    }
    display(){
    var pos= this.body.position;
    push();
    translate(pos.x,pos.y)

    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height)
    pop();
    
    
    }
    }
