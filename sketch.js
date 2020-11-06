var fixedrectangle,movingrectangle;
function setup() {
  createCanvas(800,400);
  fixedrectangle=createSprite(200, 200, 50, 80);
  movingrectangle=createSprite(400, 200, 80, 30);
  movingrectangle.shapeColor=("red");
  fixedrectangle.shapeColor=("red");
}

function draw() {
  background(255,255,255);
   movingrectangle.x=World.mouseX;
   movingrectangle.y=World.mouseY; 
   if(movingrectangle.x-fixedrectangle.x < fixedrectangle.width/2+movingrectangle.width/2 && fixedrectangle.x-movingrectangle.x < fixedrectangle.width/2+movingrectangle.width/2 && movingrectangle.y-fixedrectangle.y < fixedrectangle.height/2+movingrectangle.height/2 && fixedrectangle.y-movingrectangle.y < fixedrectangle.height/2+movingrectangle.height/2){
    movingrectangle.shapeColor=("green");
  fixedrectangle.shapeColor=("green");
   }
   else{
    movingrectangle.shapeColor=("red");
    fixedrectangle.shapeColor=("red");
   }
  drawSprites();
}
