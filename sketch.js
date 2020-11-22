var white1 , white2 , white3;
var paper1;
var ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() 
{
 createCanvas(800, 700);
 
	engine = Engine.create();
  world = engine.world;
  

  ground1 = new ground (400,650,800,20);

	paper1 = new Paper (200,200,10);

	white1=	new Dustbin (605,580,20,100);
	white2=	new Dustbin (785,580,20,100);
	white3=	new Dustbin (695,620,200,20);
	
	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background(0);

  white1.display();
  white2.display();
  white3.display();

  paper1.display();

  ground1.display();

  
  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW)
{
   Matter.Body.applyForce(paper1.body,paper1.body.position, {x:10, y:-10})
}

}


