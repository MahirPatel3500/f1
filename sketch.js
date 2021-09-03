var hockey,hockeyimg;
var line,line1,line2,line3,line2,line5,line6;
var stricker , strickerimg;
function preload(){
  hockeyimg = loadImage("images.jpg");
  strickerimg = loadImage("stricker.png")
  }



  function setup(){ 
  createCanvas(windowWidth,windowHeight);
 
  hockey = createSprite(200,300);
  hockey.addImage(hockeyimg)
  hockey.scale = 2.2
  hockey.rotate

  line = createSprite(205,300,400,10)
  line.visible = false;
  

  line1 = createSprite(1,300,18,590)
  line1.visible =false;

  line3 = createSprite(400,300,18,590)
  line3.visible = false;

  line4 = createSprite(70,10,160,10) 
  line4.visible = false; 

  line2 = createSprite(335,10,160,10)
  line2.visible = false;//

  line5 = createSprite(70,595,160,10)
  line5.visible = false;
  
  line6 = createSprite(335,595,160,10)
  line6.visible = false;
  stricker = createSprite(285,415,20,10)
  stricker.addImage(strickerimg)
  stricker.scale = 0.19
  //stricker.y = World.mouseY
  stricker.velocityX = -8
  stricker.velocityY = 8


  

}
    



function draw() {
  background(0);
  drawSprites();
  
    stricker.bounceOff(line1)
    stricker.bounceOff(line2)
    stricker.bounceOff(line3)
    stricker.bounceOff(line4)
    stricker.bounceOff(line5)
    stricker.bounceOff(line6)
}




