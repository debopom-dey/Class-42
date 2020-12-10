
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var umbrella,thunder
var maxDrops=100
var drops=[]
var thunder1,thunder2,thunder3,thunder4
function preload()
{
thunder1=loadImage("1.png")	
thunder2=loadImage("2.png")	
thunder3=loadImage("3.png")	
thunder4=loadImage("4.png")	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     umbrella= new Umbrella(150,330,150,150)
	
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  umbrella.display();
  if (frameCount%10===0){
	//for(var i=0;i<maxDrops;i++){
		drops.push(new Drop(random(0,400),0,5))
	//}
}
	for (var j=0;j<drops.length;j++){
		drops[j].display();
		drops[j].update();
	  }

  if (frameCount % 60 === 0) {
	thunder = createSprite(150,0,1,1);
	thunder.scale=0.25;
	thunder.lifetime=50
	var rand = Math.round(random(1,5));
	switch(rand){
		case 1: thunder.addImage("thunder1",thunder1);
		break;
		case 2: thunder.addImage("thunder2",thunder2);
		break;
		case 3:thunder.addImage("thunder3",thunder3);
		break;
		case 4:thunder.addImage("thunder4",thunder4);
		break;
		
	}
}
  drawSprites();
 
}



