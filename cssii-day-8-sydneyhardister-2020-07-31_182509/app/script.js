// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions. 
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

let drop1, drop2, drop3, drop4, drop5, drop6, grass1;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100,100,100);
  // Variables for droplet 1

  drop1 = new RainDrop();
  drop2 = new RainDrop();
  drop3 = new RainDrop();
  drop4 = new RainDrop();
  drop5 = new RainDrop();
  drop6 = new RainDrop();
  
  grass1 = new Grass(width/2, 20);
  
  
}

function draw() {
  background(0, 0, 95);
  //// Code for droplet 1
  // Move droplet 1
 
  drop1.dropAndShow();
  drop2.dropAndShow();
  drop3.dropAndShow();
  drop4.dropAndShow();
  drop5.dropAndShow();
  drop6.dropAndShow();
  
  grass1.show();
}

class RainDrop{
  constructor(){
    this.x = random(width);
    this.y = 0;
    this.d = random(10,15);
    this.c = random(15,25);
    this.fallSpeed = random(5,12);

  }
  
  show(){
    noStroke();
    fill(random(50,80), 100, 100);
    ellipse(this.x, this.y, this.d, this.c);
  }
  
  drip(){
    this.y += this.fallSpeed;
    // If it goes off the screen...
    if (this.y > height) {
      // ...reset it...
      this.y = 0;
      // ...and move it somewhere random.
      this.x = random(width);
    }
  }
  
  dropAndShow(){
    this.drip();
    this.show();
  }
}

class Grass{
  constructor(x, h){
    this.x = x;
    this.h = h;
    this.img = loadImage("https://cdn.glitch.com/292364ba-ab39-4adc-9c02-a776bf382c99%2Fgrass.png?v=1594837284474"); 
  }
  grow(increase){
    this.h += increase;
  }
  show(){
    image(this.img, 0, height/2, width, height/2);
  }
  
}