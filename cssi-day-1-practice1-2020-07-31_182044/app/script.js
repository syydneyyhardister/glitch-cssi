/* global createCanvas, background, ellipse, rect, noFill, strokeWeight, stroke */

function setup() {
  // Code here runs only once
  createCanvas(1350, 800);
}

function draw() {
  // Code here runs continuously
  background(220);

  noFill();
  strokeWeight(60);
  //red ring
  stroke(255,0,0);
  ellipse(365, 360, 400, 400);
  //white ring
  stroke(255,255,255);
  ellipse(365, 360, 330, 330);
  //red ring
  stroke(255,0,0);
  ellipse(365, 360, 270, 270);
  //blue ring
  fill(0,0,255);
  stroke(0,0,255);
  ellipse(365, 360, 210, 210);
  //star
  star();  
  
  
  //windows logo
  windows();
  
}
function star(){
  strokeWeight(10);
  stroke(255);
  fill(255,255,255);
  beginShape();
  vertex(480,330);
  vertex(400,330);
  vertex(365,245);
  vertex(330,330);
  vertex(250,330);
  vertex(315,385);
  vertex(290,455);
  vertex(365,415);
  vertex(440,455);
  vertex(415,385);
  endShape(CLOSE);
}

function windows(){
  strokeWeight(10);
  stroke(246,83,20);
  fill(246,83,20);
  beginShape();
  vertex(650,250);
  vertex(650,100);
  vertex(850,80);
  vertex(850,230);
  endShape(CLOSE);
  
  strokeWeight(10);
  stroke(124,187,0);
  fill(124,187,0);
  beginShape();
  vertex(880,75);
  vertex(880,225);
  vertex(1080,205);
  vertex(1080,55);
  endShape(CLOSE);
  
  strokeWeight(10);
  stroke(0,161,241);
  fill(0,161,241);
  beginShape();
  vertex(650,280);
  vertex(650,430);
  vertex(850,410);
  vertex(850,260);
  endShape(CLOSE);
  
  strokeWeight(10);
  stroke(255,187,0);
  fill(255,187,0);
  beginShape();
  vertex(880,255);
  vertex(880,405);
  vertex(1080,385);
  vertex(1080,235);
  endShape(CLOSE);
}