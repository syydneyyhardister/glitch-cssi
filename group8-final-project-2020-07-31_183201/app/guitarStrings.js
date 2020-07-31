// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, noFill, color, random,
          rect, ellipse, stroke, image, loadImage, frameRate, collideRectRect, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize, noLoop, loop, round, p5.AudioIn, loadSound, point, map, p5, 
          beginShape, vertex, endShape, translate, loadSound, createSlider, curve, bezier*/
//Variables
let backgroundColor, strings, count;
//variables for lines
let hit0, curveControlPointX0, curveControlPointY0; 
let hit1, curveControlPointX1, curveControlPointY1; 
let hit2, curveControlPointX2, curveControlPointY2; 
let hit3, curveControlPointX3, curveControlPointY3; 
let hit4, curveControlPointX4, curveControlPointY4; 
let hit5, curveControlPointX5, curveControlPointY5; 
//songs/sounds
var song0; //this is a placeholder
function preload()
{
  song0 = loadSound("https://cdn.glitch.com/b060a2ca-59c3-4626-a175-ad33ad787aef%2FIdina%20Menzel%20-%20Into%20the%20Unknown.mp3?v=1595901698899");
}

function setup() {
  createCanvas(windowWidth-20, windowHeight - 20);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  strings = [];
  count = 100; 
  for (let i = 0; i < 6; i++)
    {
      strings.push(new GuitarString(count,100));
      count = count + 100; 
    }
  curveControlPointX0 = strings[0].x+50/2; 
  curveControlPointY0 = strings[0].y+50/2;
  curveControlPointX1 = strings[1].x+50/2; 
  curveControlPointY1 = strings[1].y+50/2;
  curveControlPointX2 = strings[2].x+50/2; 
  curveControlPointY2 = strings[2].y+50/2;
  curveControlPointX3 = strings[3].x+50/2; 
  curveControlPointY3 = strings[3].y+50/2;
  curveControlPointX4 = strings[4].x+50/2; 
  curveControlPointY4 = strings[4].y+50/2;
  curveControlPointX5 = strings[5].x+50/2; 
  curveControlPointY5 = strings[5].y+50/2;
}

function guitarStringsMove() {
  background(backgroundColor);
    stroke(0);
    noFill();
   bezier(strings[0].x+50/2, strings[0].y, curveControlPointX0, curveControlPointY0, curveControlPointX0, curveControlPointY0, strings[0].x+50/2, strings[0].height); 
   bezier(strings[1].x+50/2, strings[1].y, curveControlPointX1, curveControlPointY1, curveControlPointX1, curveControlPointY1, strings[1].x+50/2, strings[1].height); 
   bezier(strings[2].x+50/2, strings[2].y, curveControlPointX2, curveControlPointY2, curveControlPointX2, curveControlPointY2, strings[2].x+50/2, strings[2].height); 
   bezier(strings[3].x+50/2, strings[3].y, curveControlPointX3, curveControlPointY3, curveControlPointX3, curveControlPointY3, strings[3].x+50/2, strings[3].height); 
   bezier(strings[4].x+50/2, strings[4].y, curveControlPointX4, curveControlPointY4, curveControlPointX4, curveControlPointY4, strings[4].x+50/2, strings[4].height); 
   bezier(strings[5].x+50/2, strings[5].y, curveControlPointX5, curveControlPointY5, curveControlPointX5, curveControlPointY5, strings[5].x+50/2, strings[5].height); 
    noStroke();
    fill(0,0,50);
    ellipse(mouseX,mouseY,10);
    checkCollide0();
    checkCollide1();
    textSize(30)
    text("E", strings[0].x+30/2, 90);
    text("B", strings[1].x+30/2, 90);
    text("G", strings[2].x+30/2, 90);
    text("D", strings[3].x+30/2, 90);
    text("A", strings[4].x+30/2, 90);
    text("E", strings[5].x+30/2, 90);
}

function checkCollide0()
    { 
      hit0 = collideRectCircle(strings[0].x,strings[0].y,strings[0].width,strings[0].height,mouseX,mouseY,10);
      if(hit0)
       {
         curveControlPointX0 = mouseX; 
         curveControlPointY0 = mouseY;
         song0.play();
       }
      else
        {
          curveControlPointX0 = strings[0].x+50/2; 
          curveControlPointY0 = strings[0].y+50/2;
        }
      }
function checkCollide1()
{
       hit1 = collideRectCircle(strings[1].x,strings[1].y,strings[1].width,strings[1].height,mouseX,mouseY,10)
      if(hit1)
       {
         curveControlPointX1 = mouseX; 
         curveControlPointY1 = mouseY;
       }
      else
        {
          curveControlPointX1 = strings[1].x+50/2; 
          curveControlPointY1 = strings[1].y+50/2;
        }
  
        hit2 = collideRectCircle(strings[2].x,strings[2].y,strings[2].width,strings[2].height,mouseX,mouseY,10)
      if(hit2)
       {
         curveControlPointX2 = mouseX; 
         curveControlPointY2 = mouseY;
       }
      else
        {
          curveControlPointX2 = strings[2].x+50/2; 
          curveControlPointY2 = strings[2].y+50/2;
        }
  
  
   hit3 = collideRectCircle(strings[3].x,strings[3].y,strings[3].width,strings[3].height,mouseX,mouseY,10)
  if(hit3)
       {
         curveControlPointX3 = mouseX; 
         curveControlPointY3 = mouseY;
       }
      else
        {
          curveControlPointX3 = strings[3].x+50/2; 
          curveControlPointY3 = strings[3].y+50/2;
        }
  
   hit4 = collideRectCircle(strings[4].x,strings[4].y,strings[4].width,strings[4].height,mouseX,mouseY,10)
  if(hit4)
       {
         curveControlPointX4 = mouseX; 
         curveControlPointY4 = mouseY;
       }
      else
        {
          curveControlPointX4 = strings[4].x+50/2; 
          curveControlPointY4 = strings[4].y+50/2;
        }
  
     hit5 = collideRectCircle(strings[5].x,strings[5].y,strings[5].width,strings[5].height,mouseX,mouseY,10)
     if(hit5)
       {
         curveControlPointX5 = mouseX; 
         curveControlPointY5 = mouseY;
       }
      else
        {
          curveControlPointX5 = strings[5].x+50/2; 
          curveControlPointY5 = strings[5].y+50/2;
        }
}

class GuitarString
  {
    constructor(x,y){
      this.x = x;
      this.y = y; 
      this.width = 50;
      this.height = windowHeight-20;
    }
    
    
    show()
    {
      noStroke();
      fill(backgroundColor);
      rect(this.x, this.y, this.width, this.height);
      stroke(0,0,30);
      noFill();
    }
  }

class AllSongs
  {
    constructor(){
      
    }
  }




