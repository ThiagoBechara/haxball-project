const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgIMG

var engine, world;
var line1, line2, line3, line4, line5, line6;
var ball;
var player1, player2;

function preload(){

bgIMG=loadImage("./assets/campo-bg.png");

}

function setup() {
  var canvas = createCanvas(600, 400);
  engine = Engine.create();
  world = engine.world;
  line1=createSprite(305,35,540,5);
  line1.visible=false;
  line2=createSprite(305,375,540,5);
  line2.visible=false;
  line3=createSprite(35,85,5,100);
  line3.visible=false;
  line4=createSprite(35,325,5,100);
  line4.visible=false;
  line5=createSprite(575,85,5,100);
  line5.visible=false;
  line6=createSprite(575,325,5,100);
  line6.visible=false;

  var ball_options = {

   restitution: 0.90,
   isStatic: true

  }
  ball=Bodies.circle(305,200,13, ball_options);
  World.add(world, ball);
  

}

function draw() {
  background(0);
  Engine.update(engine);
  imageMode(CENTER);
  image(bgIMG, 300,200, width, height);
  stroke("gray");
  fill("yellow");
  ellipse(ball.position.x, ball.position.y,13);
  

  drawSprites();
}

function kickBall(){

Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0.5, y: 2.0});

}
