// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

let brushHue, backgroundColor, coinX, coinY, score, time, gameIsOver, hit, hit1, coinA, coinB, color1, coinC, coinD, color2;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  backgroundColor = 95;
  coinX = random(width);
  coinY = random(height);
  coinA = random(width);
  coinB = random(height);
  coinC = random(width);
  coinD = random(height);
  time = 200;
  score = 0;
  gameIsOver = false;
  color1 = color(60,100,100);
  color2 = color(120,100,100);
}

function draw() {
  background(backgroundColor);
  fill(80);
  ellipse(coinX, coinY, 20);
  ellipse(mouseX, mouseY, 20);
  textSize(20);
  text(`Your score: ${score}`, 20, 20);
  text(`Time remaining:`+time, 20, 40);
  handleTime();
  if(hit = collideCircleCircle(mouseX, mouseY, 20, coinX, coinY, 20)&& !gameIsOver){
    handleCollision();
    coinX = random(width);
    coinY = random(height);
  }
  if(hit = collideCircleCircle(mouseX, mouseY, 20, coinA, coinB, 20)&& !gameIsOver){
    handleCollision();
    score += 2;
    coinA = random(width);
    coinB = random(height);  
  }
  if(hit = collideCircleCircle(mouseX, mouseY, 20, coinC, coinD, 20)&& !gameIsOver){
    handleTime();
    time += 10;
    coinC = random(width);
    coinD = random(height);
  }
  if(gameIsOver){
    fill(360,100,100);
    textSize(50);
    text(`GAME OVER!!!`, 25,225);
  }
  fill(color1);
  ellipse(coinA, coinB, 20);
  fill(color2);
  ellipse(coinC, coinD, 20);
  
}

function handleCollision() {
  // We'll write code for what happens if your character hits a coin.
  if(!gameIsOver){
    console.log(`You got a hit at ${mouseX}, ${mouseY}!`);
    score +=1;
  }
}

function handleTime() {
  // We'll write code to handle the time.
  if (time > 0) {
    time -= 1;
  }
  if(hit = collideCircleCircle(mouseX, mouseY, 20, coinC, coinD, 20)&& !gameIsOver){
    time += 10;
  }
  if(time == 0){
    gameIsOver = true;
  }
}
