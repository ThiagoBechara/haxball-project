const Engine = Matter.Engine; 
const Render = Matter.Render; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint; 
const Body = Matter.Body; 
const Composites = Matter.Composites; 
const Composite = Matter.Composite;

var bgIMG

var engine, world;
var line1, line2, line3, line4, line5, line6;
var ball;
var player1, ImgP1, player2, ImgP2;
var link;
var rope;

function preload(){

bgIMG=loadImage("./assets/campo-bg.png");
ImgP1=loadImage("./assets/ballRed.png");
ImgP2=loadImage("./assets/ballBlue.png");

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
  rope = new Rope(3,{x: 300, y: 10});
  

  var ball_options = {

   restitution: 0.1,
   density:0.005

  }
  ball=Bodies.circle(305,250,13, ball_options);
  Matter.Composite.add(rope.body,ball);
  
  link = new Link(rope, ball);
  
  player1=createSprite(150,200, 40, 40);
  player1.addImage("jogador1", ImgP1);
  player1.scale=0.11;
  player2=createSprite(450,200, 40, 40);
  player2.addImage("jogador2", ImgP2);
  player2.scale=0.11;
  

}

function draw() {
  background(0);
  Engine.update(engine);
  imageMode(CENTER);
  image(bgIMG, 300,200, width, height);
  stroke("gray");
  fill("yellow");

  if(ball!=null){
    player1.addImage("jogador1", ImgP1);
    player2.addImage("jogador2", ImgP2);
  }

  ellipse(ball.position.x, ball.position.y,13);

  
  if(collide(ball, player1)==true) {
    console.log("encostou")
    drop();
  }

  
  controls();

  //collide(ball, player1);
  //rope.show();

  drawSprites();
}



function controls(){

if(keyDown("UP")){
  player1.y=player1.y-4;

}

if(keyDown("DOWN")){
  player1.y=player1.y+4;
  }

if(keyDown("RIGHT")){
  player1.x=player1.x+4;
  }

if(keyDown("LEFT")){
  player1.x=player1.x-4;
      
  }

}

function collide(body, sprite){
 if(body!=null && sprite !=null){

  var d = dist(body.position.x, body.position.y, sprite.position.x, sprite.position.y);
  if(d<=20){
    return true;
    
    } 
    else{
    return false;
    }
  }

}

//quebrar a ligação
function drop(){

  //rope é a variavel corda
  rope.break();
 // link.detach();
  link = null;

}

function kickBall(){

  Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0.5, y: 2.0});
  
  }
