
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var roof,roofImg;
var bob1,bob2,bob3,bob4,bob5;
var r1,r2,r3,r4,r5

function preload()
{
	roofImg=loadImage("wood2.png")
}

function setup() {
	createCanvas(800, 500);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=Bodies.rectangle(400,100,300,20,{isStatic:true})
	World.add(world,roof)

	bob1 =new Bob(300,300)
	bob2=new Bob(350,300)
	bob3=new Bob(400,300)
	bob4=new Bob(450,300)
	bob5=new Bob(500,300)

	


	r1=new Rope(bob1.body,roof,-100)
	
	r2=new Rope(bob2.body,roof,-50)
	r3=new Rope(bob3.body,roof,0)
	r4=new Rope(bob4.body,roof,50)
	r5=new Rope(bob5.body,roof,100)
	

	//Engine.run(engine);
	
	
}


function draw() {
 
  background("aquamarine");
 Engine.update(engine);
  //rectMode(CENTER)
  imageMode(CENTER)
  image(roofImg,roof.position.x,roof.position.y,300,20)
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  //line(bob3.body.position.x,bob3.body.position.y,roof.body.position.x,roof.body.position.y)
	r1.display()
	r2.display()
	r3.display()
	r4.display()
	r5.display()
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:50, y:-50})
	}
}

