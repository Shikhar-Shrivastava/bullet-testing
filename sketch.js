var wall, bullet, thickness;
var speed 
var weight

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1400,200,thickness,200);
  wall.shapeColor= "cyan";
  speed = random(223,321);
  weight= random(30,52);
  thickness= random(22,83);
  bullet = createSprite(400, 200, 20, 5);
  bullet.shapeColor="white";
}

function draw() {
  background(0);  
  bullet.velocityX= speed;
  if (wall.x-bullet.x<bullet.width/2+wall.width/2){
    bullet.velocityX= 0

    var damage = ((0.5 * weight* speed *speed)/(thickness**3));
    if(damage > 10 ){
      wall.shapeColor="red"
     text("WEAK WALL, the damage was: "+Math.round(damage),800,50,textSize(20),fill("red"))
    }
    
    if(damage<=10){
      wall.shapeColor="green"
      text("STRONG WALL, the damage was: "+Math.round(damage),800,50,textSize(20),fill("green"))
      text("bullet's velocity was: "+Math.round(speed),800,70,textSize(20),fill("green"))
      text("weight of the bullet was:"+Math.round(weight) ,800,90,textSize(20),fill("green"))
      text("the wall's thickness was: "+Math.round(thickness) ,800,110,textSize(20),fill("green"))
    }
  }
  drawSprites();
}