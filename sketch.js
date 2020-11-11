var car, wall;
var speed, weight;
var Deformation;

function setup() {

  createCanvas(1200,400);

 

  car = createSprite(50, 200, 50, 50)
  wall = createSprite(1000,200, 40, 200);

  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;
}

function draw() {
  background("black");

  Deformation = (0.5 * weight * speed * speed) / 22500;
  
  console.log(Deformation);

  if(isTouching(car, wall)){
    car.velocityX = 0;
    if (Deformation > 180) {
      car.shapeColor = color(255, 0, 0);
    }
    if (Deformation > 100 && Deformation < 180) {
      car.shapeColor = color(230, 230, 0);
    }
    if (Deformation < 100) {
      car.shapeColor = color(0, 255, 0);
    }
    car.velocityX = 0;
  }

  drawSprites();
}

function isTouching(a,b){
  if(a.x - b.x < a.width/2 + b.width/2 &&
    b.x - a.x < a.width/2 + b.width/2 &&
    a.y - b.y < a.width/2 + b.width/2 &&
      b.y - a.y < a.width/2 + b.width/2){

    return true;
  }
  else{
    return false;
  }

}