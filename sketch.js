var recta,rectb

function setup() {
  createCanvas(800,400);
  recta=createSprite(400, 200, 50, 50);
  recta.shapeColor="green"
  rectb=createSprite(400, 200, 80, 30);
  rectb.shapeColor="green"
}

function draw() {
  background(255,255,255);  

rectb.x=World.mouseX
rectb.y=World.mouseY

if(rectb.x-recta.x < recta.width/2 + rectb.width/2
   && recta.x-rectb.x < recta.width/2 + rectb.width/2 
   && rectb.y-recta.y < recta.width/2 + rectb.width/2
   && recta.y-rectb.y < recta.width/2 + rectb.width/2 )

   {recta.shapeColor="red"
   rectb.shapeColor="red"
   }
else {
  recta.shapeColor="blue"
  rectb.shapeColor="blue"
}
  drawSprites();


}