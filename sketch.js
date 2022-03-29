
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var stand1, stand2;
var panda_img;
var slingShot;
var engine , world;
var Ground , Stand;

function preload()
{
panda_img = loadImage("panda.png")	
}

function setup() {
	createCanvas(900, 400);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
	ground = new Ground(800,height,30,30);
	stand1 = new Stand(390,300,250,10);
	stand2 = new Stand(700,200,200,10);
   
	//level one
	stone1 = new Block(300,275,30,40);
	stone2 = new Block(330,275,30,40);
	stone3 = new Block(360,275,30,40);
	stone4 = new Block(390,275,30,40);
	stone5 = new Block(420,275,30,40);
	stone6 = new Block(450,275,30,40);
	stone7 = new Block(480,275,30,40);
	//level two
	stone8 = new Block(330,235,30,40);
	stone9 = new Block(360,235,30,40);
	stone10 = new Block(390,235,30,40);
	stone11 = new Block(420,235,30,40);
	stone12 = new Block(450,235,30,40);
	//level three
	stone13 = new Block(360,195,30,40);
	stone14 = new Block(390,195,30,40);
	stone15 = new Block(420,195,30,40);
	//top
	stone16 = new Block(390,155,30,40);
  
	//set 2 for second stand
	//level one
	
   
	ball = Bodies.circle(50,200,20);
	World.add(world,ball);
  
	slingShot = new Slingshot(this.ball,{x:100,y:200});
}


function draw() {

  background(56,44,44); 
 
  imageMode(CENTER);
  image(panda_img ,ball.position.x,ball.position.y,40,40);

  stroke(0,0,0);
  fill("white");
  textSize(20);
  fill("lightyellow");
  text("Drag the Panda and Release it, to launch it towards the stones",100,30);

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(0,0,0);
  
  stone1.display();
  stone2.display();
  stone3.display();
  stone4.display();
  stone5.display();
  stone6.display();
  stone7.display();
  stone8.display();
  stone9.display();
  stone10.display();
  stone11.display();
  stone12.display();
  
  stone13.display();
  stone14.display();
  stone15.display();
  stone16.display();

  
  drawSprites();
 
}



