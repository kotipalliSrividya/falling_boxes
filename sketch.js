const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var boxA=[];
var ground;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

  ground=Bodies.rectangle(200,350,400,20,{isStatic:true});
  World.add(world,ground);
}
function mousePressed(){
  boxA.push(new Boxy(mouseX,mouseY,20,20));
}
function draw() {
  background("yellow");  
  Engine.update(engine);
  fill(255);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  for(var i=0;i<boxA.length;i++){
  boxA[i].display();
  }
  
}