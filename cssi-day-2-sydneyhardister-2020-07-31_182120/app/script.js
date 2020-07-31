/* global createCanvas, background, loadImage, image */

let dvdImage, x, xVelocity, y, yVelocity, tint, bluImage, a, b, aVelocity, bVelocity, disImage, c, d, cVelocity, dVelocity, wbImage, e, f, eVelocity, fVelocity;


function setup(){
  createCanvas(800, 600);
  // We only want to load the logo once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  bluImage = loadImage("https://cdn.glitch.com/5754bb70-d547-4a62-9b60-ee95ddfafd2e%2Fbluray.jpg?v=1594148394993");
  disImage = loadImage("https://cdn.glitch.com/5754bb70-d547-4a62-9b60-ee95ddfafd2e%2Fdisney.jpg?v=1594148399830");
  wbImage = loadImage("https://cdn.glitch.com/5754bb70-d547-4a62-9b60-ee95ddfafd2e%2Fwarner.jpg?v=1594150475696");
  x = 50;
  xVelocity = 4
  y = 50;
  yVelocity = 4;
  a = 50;
  aVelocity = 8;
  b = 500
  bVelocity = 8;
  c = 600;
  cVelocity = 6;
  d = 50;
  dVelocity = 6;
  e = 600;
  eVelocity = 10;
  f = 400;
  fVelocity = 10;
}

function draw(){
  background(153, 255, 255, 150);
  
  //establishes x bounds
  if (x >= 600){
    xVelocity = -4;
    background(255, 255, 153);
  }else if (x <= 0){
    xVelocity = +4;
    background(255, 255, 153);
  }
  
  //establishes y bounds
  if (y >= 450){
    yVelocity = -4;
    background(255, 255, 153);
  }else if (y <= 0){
    yVelocity = +4;
    background(255, 255, 153);
  }
  
  x = x + xVelocity;
  y = y + yVelocity;
  
  
  if (a >= 650){
    aVelocity = -8;
    background(255, 153, 153);
  }else if (a <= 0){
    aVelocity = +8;
    background(255, 153, 153);
  }
  //establishes y bounds
  if (b >= 500){
    bVelocity = -8;
    background(255, 153, 153);
  }else if (b <= 0){
    bVelocity = +8;
    background(255, 153, 153);
  }
  
  a = a + aVelocity;
  b = b + bVelocity;
  
  
  if (c >= 650){
    cVelocity = -6;
    background(255, 153, 255);
  }else if (c <= 0){
    cVelocity = +6;
    background(255, 153, 255);
  }
  //establishes y bounds
  if (d >= 480){
    dVelocity = -6;
    background(255, 153, 255);
  }else if (d <= 0){
    dVelocity = +6;
    background(255, 153, 255);
  }
  
  c = c + cVelocity;
  d = d + dVelocity;
  
  
  if (e >= 650){
    eVelocity = -10;
    background(179, 255, 153);
  }else if (e <= 0){
    eVelocity = +10;
    background(179, 255, 153);
  }
  //establishes y bounds
  if (f >= 500){
    fVelocity = -10;
    background(179, 255, 153);
  }else if (f <= 0){
    fVelocity = +10;
    background(179, 255, 153);
  }
  
  e = e + eVelocity;
  f = f + fVelocity;
  // Draw the logo at the new position.
  image(dvdImage, x, y, 200, 150); 
  image(bluImage, a, b, 150, 100);
  image(disImage, c, d, 150, 120);
  image(wbImage, e, f, 150, 100);
  
}