/* global createCanvas, colorMode, HSB, noStroke, color, background, fill, ellipse, text, stroke, line, width, height, mouseX, mouseY */

// We'll use variables for most of our colors in this code-along.
let backgroundColor, color1, color2, textColor, globalS, globalB, colora, colorb, colorc, colord, rect;

function setup() {
  // Canvas & color settings
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  globalS = 100;
  globalB = 100;

  // When used with only one argument, the color mode is greyscale.
  // 0 is black and 100 is white.
  backgroundColor = color(95);
  textColor = color(20);
  // When used with three arguments, the function takes, in this order:
  // HUE - 0 to 360 degrees on a color wheel - 0 is red, 120 is green and 240
  //       is blue.
  // SATURATION - 0 is no color (greyscale), and 100 is as bold as possible.
  // BRIGHTNESS - 0 is no light (black), and 100 is as bright as possible.
  color1 = color(0, globalS, globalB);
  color2 = color(200, globalS, globalB);
  colora = color(240, 100, 100);
  colorb = color(60, 100, 100);
  colorc = color(120, 100, 100);
  colord = color(300, 100, 150);
}

function draw() {
  background(backgroundColor);
  // Call the drawCenterLine function here to run the three lines of code
  // contained in that function.
  drawCenterLine();
  drawMidLine();
  if((mouseX > (width/2))||(mouseY > (height/2))){
    nightMode();
  }else{
    dayMode();
  }
  // The red and blue circles:
  fill(color1);
  ellipse(width/4,height/2, 50);
  fill(color2);
  ellipse(width*3/4 , height/2, 50);
  
  //corner ellipses
  fill(colora);
  ellipse(0, 0, width/2);
  fill(colorb);
  ellipse(height,0, width/2);
  fill(colorc);
  ellipse(0, width, width/2);
  fill(colord);
  ellipse(height,width, width/2);
  // The grey circle and the text:
  fill(textColor);
  ellipse(mouseX, mouseY, 50);
  text("Flip the switch ("+mouseX+", "+ mouseY+")", 20, 20); 

}

function drawCenterLine() {
  // This function will turn stroke on, draw the line, and then turn stroke
  // back off.
  // Remember a line segment in p5.js has four arguments: x1, y1, x2, y2
  stroke(textColor);
  line(width/2, 0, width/2, height);
  noStroke();
}
function drawMidLine() {
  stroke(textColor);
  line(0, height/2, width, height/2);
  noStroke();
}

function nightMode(){
  backgroundColor = color(20);
  textColor = color(95);
  color1 = color(200, globalS, globalB);
  color2 = color(0, globalS, globalB);
  colora = color(240, 100, 100);
  colorb = color(60, 100, 100);
  colorc = color(120, 100, 100);
  colord = color(300, 100, 150);
  
}
function dayMode(){
  backgroundColor = color(95);
  textColor = color(20);
  color1 = color(0, globalS, globalB);
  color2 = color(200, globalS, globalB);
  colora = color(300, 100, 150);
  colorb = color(120, 100, 100);
  colorc = color(60, 100, 100);
  colord = color(240, 100, 100);
}