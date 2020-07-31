// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global createCanvas, width, height, colorMode, HSB, mouseX, mouseY, pmouseX, pmouseY, mouseIsPressed, random, background, fill, color, rect, ellipse, line, stroke, noStroke, noFill, strokeWeight, abs */

let brushHue

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  strokeWeight(random(5,15));
  background(95);
}

function draw() {
  chooseColors();
  if(mouseIsPressed){
    ellipse(mouseX, mouseY, (abs(pmouseY - mouseY)), (abs(pmouseX - mouseX)));
    rect(mouseY, mouseX, (abs(pmouseX - mouseX)), (abs(pmouseY - mouseY)));
    strokeWeight(abs(pmouseX - mouseX) + abs(pmouseY - mouseY));
    //strokeWeight(random(5,15));
    //line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function chooseColors() {
  brushHue += random(100);
  if (brushHue >= 360) {
    brushHue = 0;
  }
  stroke(brushHue, random(100,200), random(50,120));
  fill(brushHue, random(100,200), random(50,120));
}

function keyPressed(){
  background(95);
}

// function mousePressed(){
//   ellipse(random(width), random(height), 30, 30);
// }