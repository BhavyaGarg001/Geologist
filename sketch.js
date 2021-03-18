
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

    ground = new Ground(600,height,1200,20);
  
    hammer=new Hammer(10,100)
    stone=new Stone(700,320,100,100)
    rubber=new Rubber(900,450,70)
    
    
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  ground.display()
  stone.display()
  rubber.display()
  hammer.display()
  
}



