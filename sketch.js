const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var line1, line2, line3, line4, line5, line6;

function setup() {
  var canvas = createCanvas(600, 400);
  engine = Engine.create();
  world = engine.world;
  line1=createSprite(300,40,500,5);
  line2=createSprite(300,360,500,5);
  line3=createSprite(50,90,5,100);
  line4=createSprite(50,310,5,100);
  line5=createSprite(550,90,5,100);
  line6=createSprite(550,310,5,100);

}

function draw() {
  background(0);
  Engine.update(engine);

  drawSprites();
}
