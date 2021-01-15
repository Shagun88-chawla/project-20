/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.bodies;*/

//var engine,world;
var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  //engine = Engine.create();
  //world = engine.world;

  speed=random(55,90);
  weight=random(400,300);

  car = createSprite(50, 200, 50, 50);
  car.velocityX=0;

  wall = createSprite(1500,200,60,height/2);
  
}

function draw() {
  background(80,80,80); 
  


if(wall.x-car.x<(car.width+wall.width)/2){
 
  var deformation=0.5 *weight *speed* speed/22509;
  if (deformation>180){
    car.shapecolour=colour(230,230,0);
  }
if(deformation<180 && deformation>100){
  car.shapecolour= colour(230,230,0);
}
if(deformation<100){
  car.shapeColor(0,255,0);
}
}

  car.velocityX = speed;

  car.display();
  drawSprites();
}