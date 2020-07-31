// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions. 
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

let backgroundColor, frogX, frogY, frogV, score, lives, gameIsOver, car1X, car1Y, car1V, car2X, car2Y, car2V;

function setup() {
  // Canvas & color settings
  createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  frogX = width/2;
  frogY = height*0.9;
  frogV = 20;
  score = 0;
  lives = 3;
  gameIsOver = false;
  car1X = 0;
  car1Y = 100;
  car1V = 5;
  car2X = 200;
  car2Y = 250;
  car2V = 5;
}

function draw() {
  background(backgroundColor);
  // Code for gold goal line
  fill(60, 100, 100);
  rect(0, 0, width, 50);
  // Code to display Frog
  fill(120, 100, 100);
  ellipse(frogX, frogY, 20);
  moveCars();
  drawCars();
  checkCollisions();
  checkWin();
  displayScores();
}

function keyPressed() {
  if(!gameIsOver){
    if (keyCode === UP_ARROW) {
      frogY -= frogV;
    }else if (keyCode === DOWN_ARROW) {
      frogY += frogV;
    }else if (keyCode === LEFT_ARROW) {
      frogX -= frogV;
    }else if (keyCode === RIGHT_ARROW) {
      frogX += frogV;
    }
  }
}

function moveCars() {
  if(!gameIsOver){
    // Move the car
    car1X += car1V;
    car2X += car2V
    // Reset if it moves off screen
    if(car1X >= width){
      car1X = -30;
      car1Y = random(100,height*0.4);
    }
    if(car2X >= width){
      car2X = -20;
      car2Y = random(250,height*0.8);
    }
  }
}

function drawCars() {
  // Code for car 1
  fill(0, 100, 100);
  rect(car1X, car1Y, 40, 30);
  rect(car2X, car2Y, 40, 30);
  // Code for additional cars
}

function checkCollisions() {
  // If the frog collides with the car, reset the frog and subtract a life.
  if((collideRectCircle(car1X, car1Y, 40, 30, frogX, frogY, 20)) && !gameIsOver){
    lives -= 1;
    frogX = width/2;
    frogY = height*0.9;
  }
  if((collideRectCircle(car2X, car2Y, 40, 30, frogX, frogY, 20)) && !gameIsOver){
    lives -= 1;
    frogX = width/2;
    frogY = height*0.9;
  }
  if(lives <= 0){
    gameIsOver = true;
  }
}

function checkWin() {
  // If the frog makes it into the yellow gold zone, increment the score
  // and move the frog back down to the bottom.
  if((collideRectCircle(0, 0, width, 30, frogX, frogY, 20)) && !gameIsOver){
    score += 1;
    frogX = width/2;
    frogY = height*0.9;
  }
  if(score === 1){
    car1V = 6;
    car2V = 6;
  }
  if(score === 2){
    car1V = 7;
    car2V = 7;
  }
  if(score === 3){
    car1V = 8;
    car2V = 8;
  }
  if(score === 4){
    car1V = 9;
    car2V = 9;
  }
  if(score === 5){
    win();
  }
}

function displayScores() {
  textSize(12);
  fill(0);
  // Display Lives
  text(`Lives: ${lives}`, 10, 20);
  // Display Score
  text(`Scores: ${score}`, 10, 38);
  // Display game over message if the game is over
  if(gameIsOver){
    textSize(60);
    text("GAME OVER", 70, height/2);
  }
}
function win(){
  //createCanvas(500, 500);
  //colorMode(HSB, 360, 100, 100);
  //backgroundColor(100);
  //background(backgroundColor);
  fill(170,100,100);
  rect(0,0,500,500);
  textSize(60);
  fill(0);
  text("YOU WON!!!", 70, height/2);
}