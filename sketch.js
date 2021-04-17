var engine, world;
var stick,stick1,stick2;
var dustbinSprite,dustbinImg;
var backgroundSprite,backgroundImg;
var paper,paperImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  dustbinImg = loadImage("Dustbin.png");
  backgroundImg = loadImage("swacch.png");
  paperImg = loadImage("banana.c.png");

}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 500, 10);
  
  paper.scale = 0.2;

  ground = new Ground(400, 580, 12000, 20);
  
  stick = new Dustbin(1000, 520, 20, 100);
  stick1 = new Dustbin(1040, 560, 100, 20);
  stick2 = new Dustbin(1080, 520, 20, 100);

  dustbinSprite = createSprite(1020,500,50,80)
  dustbinSprite.addImage(dustbinImg);
  dustbinSprite.scale = 0.6;

 


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
background("blue");
 
  
  Engine.update(engine);

  paper.display();

  ground.display();

  stick.display();
  stick1.display();
  stick2.display();

  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW ) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})

  }
}