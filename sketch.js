var car,wall;
var spped,weight;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,width/2);
  car.velocityX=speed;
}

function draw() {
  background(black); 
  if(wall.x-car,x<(car.width=wall.width)/2))
  {

    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509 ;
    if(deformation>180);
    {
      car.shapecolor=color(255,0,0);
    }
    if( deformation<180 && deformation>100)
  {car.shapecolor=color(230,230,0)
  
  }
  if(deformation<100)
{
 car.shapecolor=color(0,255,0);
}
  }
    drawSprites();
}