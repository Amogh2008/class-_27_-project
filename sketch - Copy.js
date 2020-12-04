
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,350,200,20);
	
	bob1 = new Bob(400,500,20);
	bob2 = new Bob(430,500,20);
	bob3 = new Bob(460,500,20);
	bob4 = new Bob(370,500,20);
	bob5 = new Bob(340,500,20);

	rope1 = new Rope(bob1.body, roof.body,0,-40);
	rope2 = new Rope(bob2.body, roof.body,25,-40);
	rope3 = new Rope(bob3.body, roof.body,50,-40);
	rope4 = new Rope(bob4.body, roof.body,-25,-40);
	rope5 = new Rope(bob5.body, roof.body,-60,-40);

	


	
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
  if(keyDown("UP_ARROW")){
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-4,y:-4});
}
  
  drawSprites();
 
}



