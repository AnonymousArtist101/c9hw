var r, g, b;

function setup() {
  createCanvas(400,400);
  btn_red = createButton("RED");
  btn_red.position(100, 50);
  btn_red.mousePressed(red_bg);

  btn_green = createButton("GREEN");
  btn_green.position(250, 50);
  btn_green.mousePressed(green_bg);

}

function draw() 
{
 background(r, g, b);
 // var red = createSprite(100, 100, 50, 20);
 // var green = createSprite(300, 100, 50, 20);

 // drawSprites();
}

function red_bg(){
  r=200;
  g=0;
  b=0;
}

function green_bg(){
  r=0;
  g=200;
  b=0;
}



