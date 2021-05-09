
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
plane1 = new Plane(400, 690, 800, 20);
hammer1 = new Hammer(200, 350, )
stone2 = new Stone(200, 300, 100, 101)
rubber2 = new Rubbber(400, 300,99)

Engine.run(engine);
}	


function draw() {
  rectMode(CENTER);
  background("cyan");
  plane1.display();
  hammer1.display();
  stone2.display();
  rubber2.display();

}



