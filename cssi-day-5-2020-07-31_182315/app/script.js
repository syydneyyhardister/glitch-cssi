// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global createCanvas, width, height, colorMode, HSB, mouseX, mouseY, pmouseX, pmouseY, mouseIsPressed, random, background, fill, color, rect, ellipse, line, stroke, noStroke, noFill, strokeWeight, abs, createSlider, text, triangle, key*/
//references: https://p5js.org/examples/input-keyboard.html 
let brushHue, bSlider, sSlider;

function setup() {
  // Canvas & color settings
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100);
  brushHue = 180;
  strokeWeight(random(5,15));
  background(95);
  bSlider = createSlider(0, 360, 100);
  bSlider.position(20, 20);
  sSlider = createSlider(0, 360, 50);
  sSlider.position(20, 50);
  text('Brightness', bSlider.x * 2 + bSlider.width -20, 25);
  text('Saturation', sSlider.x * 2 + sSlider.width- 20, 55);
  text('Press any letter key to switch colors', 10, 80);
  text('Press any non-letter to clear screen', 10, 100);
  stroke(200,50,50);
  fill(200,50,50);
}

function draw() {
  //ellipse(250, 40, 35,35);
  //rect(290,25,30,30);
  //triangle(340, 55, 360, 20, 380, 55);
  //chooseColors();
  
  if(mouseIsPressed){
    ellipse(mouseX, mouseY, (abs(pmouseY - mouseY)), (abs(pmouseX - mouseX)));
    rect(mouseY, mouseX, (abs(pmouseX - mouseX)), (abs(pmouseY - mouseY)));
    strokeWeight(abs(pmouseX - mouseX) + abs(pmouseY - mouseY));
    strokeWeight(random(5,15));
    line(pmouseX, pmouseY, mouseX, mouseY);
   }
     
  //if((mouseX == 250)&&(mouseY == 40)&&(mouseIsPressed)){
    //ellipse(mouseX, mouseY, (abs(pmouseY - mouseY)), (abs(pmouseX - mouseX)));
    //rect(mouseY, mouseX, (abs(pmouseX - mouseX)), (abs(pmouseY - mouseY)));
    //strokeWeight(abs(pmouseX - mouseX) + abs(pmouseY - mouseY));
  
    //strokeWeight(random(5,15));
    //line(pmouseX, pmouseY, mouseX, mouseY);
  //}
}

function chooseColors() {
  const s = sSlider.value();
  const b = bSlider.value();
  brushHue += random(100);
  if (brushHue >= 360) {
    brushHue = 0;
  }
  stroke(brushHue, s, b);
  fill(brushHue, s, b);
}

function keyPressed(){
  let keyIndex = -1;
  if (key >= 'a' || key <= 'z'){
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }
  console.log(keyIndex);
if(keyIndex >= -1){
       chooseColors();
    }
  else
    {
      
      background(95);
      noStroke();
      fill(0);
      text('Brightness', bSlider.x * 2 + bSlider.width -20, 25);
      text('Saturation', sSlider.x * 2 + sSlider.width- 20, 55);
      text('Press any letter key to switch colors', 10, 80);
      text('Press non-letter to clear screen', 10, 100);
      chooseColors();
    }
}

//function mousePressed(){
//   ellipse(random(width), random(height), 30, 30);
// }