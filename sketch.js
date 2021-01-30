var moving_rect,fixed_rect;

var ball;
var bat;

function setup() {
  createCanvas(1000,800);
  moving_rect = createSprite(200, 70, 80,30);
  moving_rect.shapeColor = "yellow";
  moving_rect.velocityX = 4;
  
  fixed_rect = createSprite(200,200,50,80);
  fixed_rect.shapeColor = "yellow";

ball = createSprite(300,200,50,50);
ball.shapeColor = "pink";

bat = createSprite(700,50,50,100);
bat.shapeColor = "brown";
bat.velocityX = -2;
}

function draw() {
  background(255,255,255);  
 // moving_rect.x = mouseX;
  //moving_rect.y = mouseY;
  console.log(moving_rect.x-fixed_rect.x);

//if (isTouching(moving_rect,bat)) {
  //moving_rect.shapeColor = "red";
  //bat.shapeColor = "green";
//} else {
  //moving_rect.shapeColor = "yellow";
  //bat.shapeColor = "yellow";
//}

if (bounceOff(moving_rect,bat)) {
  Text("bouncing off",500,200);
}

//collide(moving_rect,bat);

  drawSprites();

}

function isTouching(object1,object2) {
  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2 
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
  } else {
    return false;
  }
}


function collide(object1,object2) {
  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2 
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      object1.velocityX = 0;
}
}

function bounceOff(object1,object2) {
  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * -1;
      object2.velocityX = object2.velocityX * -1;
    }    
  if( object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
     object1.velocityY = object1.velocityY * -1;
     object2.velocityY = object2.velocityY * -1;
}
}



