var fixedRect, movingRect;
var gameObj1, gameObj2, gameObj3;

function setup() {
  createCanvas(1200,800);
  // fixedRect = createSprite(400, 200, 30, 50);
  // fixedRect.shapeColor = "red";
  //fixedRect.debug = true;
  movingRect = createSprite(200, 200,50,30);
  movingRect.shapeColor = "red";
 // movingRect.debug = true;

//  gameObj1 = createSprite(600, 200,30, 50);
//  gameObj1.shapeColor = "red";

//  gameObj2 = createSprite(800,200,30,50);
//  gameObj2.shapeColor = "red";


 gameObj3 = createSprite(1000,200,30,50);
 gameObj3.shapeColor = "red";


 movingRect.velocityX = 5;
gameObj3.velocityX = -5;


}

function draw() {
  background(0,0,0);  

  // movingRect.x = mouseX;
  // movingRect.y = mouseY;

  if(isTouching(movingRect,gameObj3)){
    
    movingRect.shapeColor = "green";
    gameObj3.shapeColor = "green";

  }
  else{
    movingRect.shapeColor = "red";
    gameObj3.shapeColor = "red";
  }


  bounceOff(movingRect, gameObj3);
  

  
  drawSprites();
}

