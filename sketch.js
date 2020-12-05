
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world
var ground,ball

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var object_options={
    isStatic:true

  }
 
  ground=Bodies.rectangle(200,390,200,20,object_options)
  World.add(world,ground);
   var ball_options={
     restitution:1.2
   }
  ball=Bodies.circle(200,100,20,ball_options)
  World.add(world,ball);
}

function draw() {
  background(0); 
  //var pos.x=object.position.x
  Engine.update(engine)
  rectMode(CENTER);
  rect(ground.position.x,ground .position.y,400,20)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20)
}