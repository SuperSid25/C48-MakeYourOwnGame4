var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i;
var coinGroup
var opsticleGroup
var gameState = "play"
function preload() {
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("jake1.png", "jake2.png", "jake3.png", "jake4.PNG", "jake5.png");
  coinImage = loadImage("coins.png")
  opsticleImage = loadImage("opsticals.png")
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  // Moving background
  path = createSprite(width / 2, height / 2);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 5;
  coinGroup = new Group()
  opsticleGroup = new Group()
  //creating boy running
  boy = createSprite(width / 2, height - 100, 30, 30);
  boy.addAnimation("JakeRunning", boyImg);

  // create left Boundary
  //coin=createSprite(0,0,100,800);
  //leftBoundary.visible = false;

  //create right Boundary
  //rightBoundary=createSprite(410,0,100,800);
  //rightBoundary.visible = false;
}

function draw() {
  background(0);
  if (gameState === "play") {
    path.velocityY = 4;

    // boy moving on Xaxis with mouse
    boy.x = World.mouseX;

    
    //boy.collide(leftBoundary);
    //boy.collide(rightBoundary);

    //code to reset the background
    if (path.y > height) {
      path.y = height / 2;
    }
    spawncoin()
    spawnopsticle()
    drawSprites();

    if(coinGroup.isTouching(boy)){
      coinGroup[0].destroy()
    }
    if(opsticleGroup.isTouching(boy)){
      gameState="end"
    }

  }

else if(gameState==="end"){

}
  edges = createEdgeSprites();
    boy.collide(edges[3]);
}
function spawncoin() {
  if (frameCount % 180 === 0) {
    var coin = createSprite(width / 2, 0, 40, 10)
    coin.x = Math.round(random(100, width - 100))
    coin.addImage(coinImage)
    coin.scale = 0.2
    coin.velocityY = 3
    coin.lifetime = 500
    //coin.depth=trex.depth
    //trex.depth=trex.depth+1
    coinGroup.add(coin)
  }
}

function spawnopsticle() {
  if (frameCount % 180 === 0) {
    var opsticle = createSprite(width / 2, 0, 40, 10)
    opsticle.x = Math.round(random(100, width - 100))
    opsticle.addImage(opsticleImage)
    opsticle.scale = 0.3
    opsticle.velocityY = 3
    opsticle.lifetime = 500
    opsticleGroup.add(opsticle)
  }
}

