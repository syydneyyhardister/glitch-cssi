// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, noFill, color, random,
          rect, ellipse, stroke, image, loadImage, frameRate, collideRectRect, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize, noLoop, loop, round, p5.AudioIn, loadSound, point, map, p5, 
          beginShape, vertex, endShape, translate, loadSound, createSlider, bezier, loadFont, textFont, collideCircleCircle, key*/

let backgroundColor,
  pageIsMusic,
  pageIsCreate,
  pageIsTitle,
  pageIsGame,
  fontRegular,
  lineMode,
  ellipseMode,
  dots,
  dotsHit,
  animalMode;
let isPlaying,
  intoTheUnknownColor,
  songColor,
  belleColor,
  songCurrent,
  volSlider,
  almostThereColor,
  reflectionColor,
  partOfYourWorldColor;
var intoTheUnknown;
var belle;
var reflection;
var almostThere;
var partOfYourWorld;
var doIt;
var amp;
var volHistory = [];
let strings, count, score;
//variables for lines
let hit0, curveControlPointX0, curveControlPointY0, note0playing;
let hit1, curveControlPointX1, curveControlPointY1, note1playing;
let hit2, curveControlPointX2, curveControlPointY2, note2playing;
let hit3, curveControlPointX3, curveControlPointY3, note3playing;
let hit4, curveControlPointX4, curveControlPointY4, note4playing;
let hit5, curveControlPointX5, curveControlPointY5, note5playing;
var noteE1;
var noteB;
var noteG;
var noteD;
var noteA;
var noteE2;
var cat;
var chicken;
var cow;
var dog;
var duck;
var frog;
var animals;
function preload() {
  fontRegular = loadFont(
    "https://cdn.glitch.com/bc7be72e-72b5-49c2-a4e1-3c8d81cd9bec%2Fp5hatty.ttf?v=1595961509501"
  );
  intoTheUnknown = loadSound(
    "https://cdn.glitch.com/7367f33a-8592-44d4-bcf1-7a228de9ff25%2FIdina%20Menzel%20-%20Into%20the%20Unknown.mp3?v=1595524352461"
  );
  belle = loadSound(
    "https://cdn.glitch.com/7367f33a-8592-44d4-bcf1-7a228de9ff25%2FWalt%20Disney%20-%20Belle_%20Beauty%20and%20the%20Beast.mp3?v=1595532570615"
  );
  almostThere = loadSound(
    "https://cdn.glitch.com/7367f33a-8592-44d4-bcf1-7a228de9ff25%2FAnika%20Noni%20Rose%20(Tiana)%20-%20Almost%20there%20%5BOST%20The%20Princess%20and%20the%20Frog%5D.mp3?v=1595532102048"
  );
  reflection = loadSound(
    "https://cdn.glitch.com/7367f33a-8592-44d4-bcf1-7a228de9ff25%2FLea%20Salonga%20-%20Reflection%20%7B_Mulan_%201998%7D.mp3?v=1595532805453"
  );
  partOfYourWorld = loadSound(
    "https://cdn.glitch.com/7367f33a-8592-44d4-bcf1-7a228de9ff25%2FDisney%20(OST%20The%20Little%20Mermaid)%20-%20Part%20of%20Your%20World.mp3?v=1595533606433"
  );
  doIt = loadSound(
    "https://cdn.glitch.com/bc7be72e-72b5-49c2-a4e1-3c8d81cd9bec%2FChloe%20x%20Halle%20-%20Do%20It%20(Official%20Video).mp3?v=1595948904166"
  );
  noteE1 = loadSound(
    "https://cdn.glitch.com/bc7be72e-72b5-49c2-a4e1-3c8d81cd9bec%2FE1.mp4?v=1595984464240"
  );
  noteB = loadSound(
    "https://cdn.glitch.com/bc7be72e-72b5-49c2-a4e1-3c8d81cd9bec%2FB.mp4?v=1595984469143"
  );
  noteG = loadSound(
    "https://cdn.glitch.com/bc7be72e-72b5-49c2-a4e1-3c8d81cd9bec%2FG.mp4?v=1595985195747"
  );
  noteD = loadSound(
    "https://cdn.glitch.com/bc7be72e-72b5-49c2-a4e1-3c8d81cd9bec%2FD.mp4?v=1595985202355"
  );
  noteA = loadSound(
    "https://cdn.glitch.com/bc7be72e-72b5-49c2-a4e1-3c8d81cd9bec%2FA.mp4?v=1595985374689"
  );
  noteE2 = loadSound(
    "https://cdn.glitch.com/bc7be72e-72b5-49c2-a4e1-3c8d81cd9bec%2FE2.mp4?v=1595985379536"
  );
  cat = loadSound(
    "https://cdn.glitch.com/bc7be72e-72b5-49c2-a4e1-3c8d81cd9bec%2FCAT.mp4?v=1596128910104"
  );
  chicken = loadSound(
    "https://cdn.glitch.com/bc7be72e-72b5-49c2-a4e1-3c8d81cd9bec%2FCHICKEN.mp4?v=1596128912759"
  );
  cow = loadSound(
    "https://cdn.glitch.com/bc7be72e-72b5-49c2-a4e1-3c8d81cd9bec%2FCOW.mp4?v=1596128916300"
  );
  dog = loadSound(
    "https://cdn.glitch.com/bc7be72e-72b5-49c2-a4e1-3c8d81cd9bec%2FDOG.mp4?v=1596128920352"
  );
  duck = loadSound(
    "https://cdn.glitch.com/bc7be72e-72b5-49c2-a4e1-3c8d81cd9bec%2FDUCK.mp4?v=1596128923717"
  );
  frog = loadSound(
    "https://cdn.glitch.com/bc7be72e-72b5-49c2-a4e1-3c8d81cd9bec%2FFROG.mp4?v=1596128932582"
  );
  animals = loadSound(
    "https://cdn.glitch.com/bc7be72e-72b5-49c2-a4e1-3c8d81cd9bec%2FMaroon%205%20-%20Animals.mp3?v=1596133353364"
  );
}

function setup() {
  // Canvas & color settings
  createCanvas(windowWidth - 20, windowHeight - 20);
  backgroundColor = color(158.26, 46.94, 57.65);
  colorMode(HSB, 360, 100, 100);
  pageIsTitle = true;
  pageIsMusic = false;
  pageIsCreate = false;
  pageIsGame = false;
  //songs page code
  amp = new p5.Amplitude();
  isPlaying = false;
  intoTheUnknownColor = color(180, 40, 100);
  belleColor = color(70, 46, 100);
  almostThereColor = color(100, 50, 100);
  reflectionColor = color(0, 50, 90);
  partOfYourWorldColor = color(150, 65, 100);
  songColor = color(255);
  volSlider = createSlider(0, 1, 0.3, 0.1);
  volSlider.position(40, height - 20);
  lineMode = true;
  ellipseMode = false;
  //creation of strings
  strings = [];
  count = 200;
  for (let i = 0; i < 6; i++) {
    strings.push(new GuitarString(count, 100));
    count = count + 100;
  }

  curveControlPointX0 = strings[0].x + 50 / 2;
  curveControlPointY0 = strings[0].y + 50 / 2;
  curveControlPointX1 = strings[1].x + 50 / 2;
  curveControlPointY1 = strings[1].y + 50 / 2;
  curveControlPointX2 = strings[2].x + 50 / 2;
  curveControlPointY2 = strings[2].y + 50 / 2;
  curveControlPointX3 = strings[3].x + 50 / 2;
  curveControlPointY3 = strings[3].y + 50 / 2;
  curveControlPointX4 = strings[4].x + 50 / 2;
  curveControlPointY4 = strings[4].y + 50 / 2;
  curveControlPointX5 = strings[5].x + 50 / 2;
  curveControlPointY5 = strings[5].y + 50 / 2;
  //dots
  dots = [];
  for (let i = 0; i < 15; i++) {
    dots.push(new BouncyDot());
  }
  score = 0;
  animalMode = false;
}

function draw() {
  titlePage();
  musicPage();
  createPage();
  gamePage();
}

function titlePage() {
  //go to home screen
  if (
    mouseIsPressed &&
    mouseX > 20 &&
    mouseX < 170 &&
    mouseY > 20 &&
    mouseY < 95
  ) {
    pageIsTitle = true;
    pageIsMusic = false;
    pageIsCreate = false;
    pageIsGame = false;
  }
  if (pageIsTitle) {
    if (isPlaying == true) {
      songCurrent.pause();
      isPlaying = false;
      songColor = color(0, 0, 100);
    }
    backgroundColor = color(158.26, 46.94, 57.65);
    background(backgroundColor);
    // Next Buttons
    //song
    stroke(255);
    fill(161.43, 24.42, 67.45);
    rect((width * 1) / 5, height - (height * 2) / 3, 300, 100);
    //create
    rect((width * 3) / 5, height - (height * 2) / 3, 300, 100);
    //game
    rect((width * 3) / 5, height - (height * 1) / 2, 300, 100);
    //animal mode
    rect((width * 1) / 5, height - (height * 1) / 2, 300, 100);
    noFill();
    stroke(255);
    textSize(70);
    strokeWeight(1.5);
    textFont(fontRegular);
    text(
      "listen",
      (width * 1) / 5 + (width * 1) / 21,
      height - (height * 3) / 5
    );
    text(
      "create",
      (width * 2) / 3 - (width * 1) / 35,
      height - (height * 3) / 5
    );
    text("game", (width * 2) / 3 - width / 35, height - height * 0.43);
    //text("animal mode", (width / 5)+ (width/200), height - height * 0.43);
    stroke(255);
    textSize(100);
    text("music box", 10, 80);
    //instructions
    textSize(50);
    text("Instructions: choose to create music or just listen!", 10, 110);
    noStroke();
    changeVolSlider();
    animalModeFun();
  }
}
//switches to music page when button is pressed
function animalModeFun() {
  noFill();
  stroke(255);
  textSize(70);
  strokeWeight(1.5);
  textFont(fontRegular);
  if (animalMode == false) {
    text("normal mode", width / 5 + width / 200, height - height * 0.43);
  } else {
    text("animal mode", width / 5 + width / 200, height - height * 0.43);
  }
  if (
    mouseIsPressed &&
    mouseX > (width * 1) / 5 &&
    mouseX < (width * 1) / 5 + 300 &&
    mouseY > height - height * 0.5 &&
    mouseY < height - (height * 1) / 2 + 100
  ) {
    if (animalMode == false) {
      animalMode = true;
    } else {
      animalMode = false;
    }
  }
}

function musicPage() {
  if (
    mouseIsPressed &&
    mouseX < (width * 1) / 5 + 300 &&
    mouseX > (width * 1) / 5 &&
    mouseY < height - (height * 2) / 3 + 100 &&
    mouseY > height - (height * 2) / 3
  ) {
    pageIsMusic = true;
    pageIsTitle = false;
    pageIsCreate = false;
    pageIsGame = false;
  }
  if (pageIsMusic) {
    background(backgroundColor);
    stroke(255);
    noFill();
    strokeWeight(1.5);
    textSize(70);
    text("home", 30, 70);
    //buttons and sound
    createSongButton(width - 110, height - 110, intoTheUnknownColor);
    createSongButton(width - 220, height - 110, almostThereColor);
    createSongButton(width - 330, height - 110, reflectionColor);
    createSongButton(width - 440, height - 110, belleColor);
    createSongButton(width - 550, height - 110, partOfYourWorldColor);
    if (
      mouseIsPressed &&
      isPlaying == false &&
      mouseY > height - 110 &&
      mouseY < height - 10
    ) {
      if (mouseX > width - 110 && mouseX < width - 10) {
        if (animalMode == true) {
          playThisSong(animals, intoTheUnknownColor);
        } else {
          playThisSong(intoTheUnknown, intoTheUnknownColor);
        }
      } else if (mouseX > width - 220 && mouseX < width - 100) {
        if (animalMode == true) {
          playThisSong(animals, almostThereColor);
        } else {
          playThisSong(almostThere, almostThereColor);
        }
      } else if (mouseX > width - 330 && mouseX < width - 220) {
        if (animalMode == true) {
          playThisSong(animals, reflectionColor);
        } else {
          playThisSong(reflection, reflectionColor);
        }
      } else if (mouseX > width - 440 && mouseX < width - 330) {
        if (animalMode == true) {
          playThisSong(animals, belleColor);
        } else {
          playThisSong(belle, belleColor);
        }
      } else if (mouseX > width - 550 && mouseX < width - 440) {
        if (animalMode == true) {
          playThisSong(animals, partOfYourWorldColor);
        } else {
          playThisSong(partOfYourWorld, partOfYourWorldColor);
        }
      }
    }
    pauseSongPlaying();
    changeVolSlider();
    stroke(255);
    //rect(volSlider.x + volSlider.width + 100, height-85, 200, 75);
    //rect(volSlider.x + volSlider.width + 310, height-85, 200, 75);
    text("circle mode", volSlider.x + volSlider.width + 100, height - 25);
    text("line mode", volSlider.x + volSlider.width + 320, height - 25);
    var vol = amp.getLevel();
    volHistory.push(vol * 4);
    if (
      mouseIsPressed &&
      mouseX > volSlider.x + volSlider.width + 100 &&
      mouseX < volSlider.x + volSlider.width + 300 &&
      mouseY > height - 85 &&
      mouseY < height - 10
    ) {
      if (lineMode == true && ellipseMode == false) {
        lineMode = false;
        ellipseMode = true;
      }
    }
    if (
      mouseIsPressed &&
      mouseX > volSlider.x + volSlider.width + 310 &&
      mouseX < volSlider.x + volSlider.width + 510 &&
      mouseY > height - 85 &&
      mouseY < height - 10
    ) {
      if (lineMode == false && ellipseMode == true) {
        lineMode = true;
        ellipseMode = false;
      }
    }
    if (lineMode == true && ellipseMode == false) {
      stroke(songColor);
      noFill();
      var currentY = map(vol, 0, 1, height, 0);
      beginShape();
      for (var i = 0; i < volHistory.length; i++) {
        var y = map(volHistory[i], 0, 1, (height * 2) / 3, 0);
        vertex(i, y);
      }
      endShape();
      if (volHistory.length > (width * 3) / 4) {
        volHistory.splice(0, 1);
      }
    } else if (lineMode == false && ellipseMode == true) {
      stroke(songColor);
      fill(songColor);
      ellipse(width / 2, height / 2, width - width / 4, vol * 2000);
      if (volHistory.length > (width * 3) / 4) {
        volHistory.splice(0, 1);
      }
    }
  }
}

function playThisSong(song, colorLine) {
  song.play();
  isPlaying = true;
  songCurrent = song;
  songColor = colorLine;
}

function createSongButton(x, y, color) {
  noStroke();
  fill(color);
  rect(x, y, 100, 100);
}

function pauseSongPlaying() {
  stroke(255);
  noFill();
  text("pause", width * 0.8 + 5, 75);
  //stroke(255);
  //rect(width*0.8, 20, 150, 75);
  if (
    isPlaying == true &&
    mouseIsPressed &&
    mouseX > width * 0.8 &&
    mouseX < width * 0.8 + 150 &&
    mouseY > 20 &&
    mouseY < 95
  ) {
    songCurrent.pause();
    isPlaying = false;
    songColor = color(0, 0, 100);
  }
}

function changeVolSlider() {
  textSize(50);
  stroke(255);
  noFill();
  text("Volume", 35, height - 25);
  const overallVol = volSlider.value();
  intoTheUnknown.setVolume(overallVol);
  belle.setVolume(overallVol);
  almostThere.setVolume(overallVol);
  reflection.setVolume(overallVol);
  partOfYourWorld.setVolume(overallVol);
  noteE1.setVolume(overallVol);
  noteB.setVolume(overallVol);
  noteG.setVolume(overallVol);
  noteD.setVolume(overallVol);
  noteA.setVolume(overallVol);
  noteE2.setVolume(overallVol);
  doIt.setVolume(overallVol);
  cat.setVolume(overallVol);
  chicken.setVolume(overallVol);
  cow.setVolume(overallVol);
  dog.setVolume(overallVol);
  duck.setVolume(overallVol);
  frog.setVolume(overallVol);
  animals.setVolume(overallVol);
}

function createPage() {
  if (
    mouseIsPressed &&
    mouseX > (width * 3) / 5 &&
    mouseX < (width * 3) / 5 + 300 &&
    mouseY > height - (height * 2) / 3 &&
    mouseY < height - (height * 2) / 3 + 100
  ) {
    pageIsCreate = true;
    pageIsTitle = false;
    pageIsMusic = false;
    pageIsGame = false;
  }
  if (pageIsCreate) {
    background(backgroundColor);
    changeVolSlider();
    stroke(255);
    noFill();
    strokeWeight(1.5);
    textSize(70);
    text("home", 30, 70);
    stringsMove();
  }
}

function stringsMove() {
  stroke(255);
  noFill();
  bezier(
    strings[0].x + 50 / 2,
    strings[0].y,
    curveControlPointX0,
    curveControlPointY0,
    curveControlPointX0,
    curveControlPointY0,
    strings[0].x + 50 / 2,
    strings[0].height
  );
  bezier(
    strings[1].x + 50 / 2,
    strings[1].y,
    curveControlPointX1,
    curveControlPointY1,
    curveControlPointX1,
    curveControlPointY1,
    strings[1].x + 50 / 2,
    strings[1].height
  );
  bezier(
    strings[2].x + 50 / 2,
    strings[2].y,
    curveControlPointX2,
    curveControlPointY2,
    curveControlPointX2,
    curveControlPointY2,
    strings[2].x + 50 / 2,
    strings[2].height
  );
  bezier(
    strings[3].x + 50 / 2,
    strings[3].y,
    curveControlPointX3,
    curveControlPointY3,
    curveControlPointX3,
    curveControlPointY3,
    strings[3].x + 50 / 2,
    strings[3].height
  );
  bezier(
    strings[4].x + 50 / 2,
    strings[4].y,
    curveControlPointX4,
    curveControlPointY4,
    curveControlPointX4,
    curveControlPointY4,
    strings[4].x + 50 / 2,
    strings[4].height
  );
  bezier(
    strings[5].x + 50 / 2,
    strings[5].y,
    curveControlPointX5,
    curveControlPointY5,
    curveControlPointX5,
    curveControlPointY5,
    strings[5].x + 50 / 2,
    strings[5].height
  );
  noStroke();
  fill(0, 0.4, 97.65);
  ellipse(mouseX, mouseY, 10);
  checkCollide0();
  checkCollide1();
  textSize(30);
  text("E", strings[0].x + 30 / 2, 90);
  text("B", strings[1].x + 30 / 2, 90);
  text("G", strings[2].x + 30 / 2, 90);
  text("D", strings[3].x + 30 / 2, 90);
  text("A", strings[4].x + 30 / 2, 90);
  text("E", strings[5].x + 30 / 2, 90);
}

function checkCollide0() {
  hit0 = collideRectCircle(
    strings[0].x,
    strings[0].y,
    strings[0].width,
    strings[0].height,
    mouseX,
    mouseY,
    10
  );
  if (hit0) {
    curveControlPointX0 = mouseX;
    curveControlPointY0 = mouseY;

    if (note0playing == false) {
      if (animalMode == true) {
        frog.play();
      } else {
        noteE1.play();
      }
      note0playing = true;
    }
  } else {
    curveControlPointX0 = strings[0].x + 50 / 2;
    curveControlPointY0 = strings[0].y + 50 / 2;
    note0playing = false;
  }
}

function checkCollide1() {
  hit1 = collideRectCircle(
    strings[1].x,
    strings[1].y,
    strings[1].width,
    strings[1].height,
    mouseX,
    mouseY,
    10
  );
  if (hit1) {
    curveControlPointX1 = mouseX;
    curveControlPointY1 = mouseY;
    if (note1playing == false) {
      if (animalMode == true) {
        cat.play();
      } else {
        noteB.play();
      }
      note1playing = true;
    }
  } else {
    curveControlPointX1 = strings[1].x + 50 / 2;
    curveControlPointY1 = strings[1].y + 50 / 2;
    note1playing = false;
  }

  hit2 = collideRectCircle(
    strings[2].x,
    strings[2].y,
    strings[2].width,
    strings[2].height,
    mouseX,
    mouseY,
    10
  );
  if (hit2) {
    curveControlPointX2 = mouseX;
    curveControlPointY2 = mouseY;
    if (note2playing == false) {
      if (animalMode == true) {
        chicken.play();
      } else {
        noteG.play();
      }
      note2playing = true;
    }
  } else {
    curveControlPointX2 = strings[2].x + 50 / 2;
    curveControlPointY2 = strings[2].y + 50 / 2;
    note2playing = false;
  }

  hit3 = collideRectCircle(
    strings[3].x,
    strings[3].y,
    strings[3].width,
    strings[3].height,
    mouseX,
    mouseY,
    10
  );
  if (hit3) {
    curveControlPointX3 = mouseX;
    curveControlPointY3 = mouseY;
    if (note3playing == false) {
      if (animalMode == true) {
        cow.play();
      } else {
        noteD.play();
      }
      note3playing = true;
    }
  } else {
    curveControlPointX3 = strings[3].x + 50 / 2;
    curveControlPointY3 = strings[3].y + 50 / 2;
    note3playing = false;
  }

  hit4 = collideRectCircle(
    strings[4].x,
    strings[4].y,
    strings[4].width,
    strings[4].height,
    mouseX,
    mouseY,
    10
  );
  if (hit4) {
    curveControlPointX4 = mouseX;
    curveControlPointY4 = mouseY;
    if (note4playing == false) {
      if (animalMode == true) {
        dog.play();
      } else {
        noteA.play();
      }
      note4playing = true;
    }
  } else {
    curveControlPointX4 = strings[4].x + 50 / 2;
    curveControlPointY4 = strings[4].y + 50 / 2;
    note4playing = false;
  }

  hit5 = collideRectCircle(
    strings[5].x,
    strings[5].y,
    strings[5].width,
    strings[5].height,
    mouseX,
    mouseY,
    10
  );
  if (hit5) {
    curveControlPointX5 = mouseX;
    curveControlPointY5 = mouseY;
    if (note5playing == false) {
      if (animalMode == true) {
        duck.play();
      } else {
        noteE2.play();
      }
      note5playing = true;
    }
  } else {
    curveControlPointX5 = strings[5].x + 50 / 2;
    curveControlPointY5 = strings[5].y + 50 / 2;
    note5playing = false;
  }
}

class GuitarString {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = windowHeight - 20;
  }

  show() {
    noStroke();
    fill(backgroundColor);
    rect(this.x, this.y, this.width, this.height);
    stroke(0, 0, 30);
    noFill();
  }
}

function gamePage() {
  if (
    mouseIsPressed &&
    mouseX > (width * 3) / 5 &&
    mouseX < (width * 3) / 5 + 300 &&
    mouseY > height - (height * 1) / 2 &&
    mouseY < height - (height * 1) / 2 + 100
  ) {
    pageIsGame = true;
    pageIsCreate = false;
    pageIsTitle = false;
    pageIsMusic = false;
  }
  if (pageIsGame == true) {
    background(backgroundColor);
    changeVolSlider();
    stroke(255);
    noFill();
    strokeWeight(1.5);
    textSize(70);
    text("home", 30, 70);
    textSize(40);
    text("score: " + score, width - 140, 40);
    text("press any letter key to add more dots", width * 0.5, height - 50);
    text("press any non-letter key to clear dots", width * 0.5, height - 20);
    for (let i = 0; i < dots.length; i++) {
      dots[i].float();
      dots[i].display();
    }
    fill(255);
    ellipse(mouseX, mouseY, 20);
    gameCollideDot();
  }
}

function gameCollideDot() {
  for (let i = 0; i < dots.length; i++) {
    dotsHit = collideCircleCircle(
      mouseX,
      mouseY,
      20,
      dots[i].x,
      dots[i].y,
      dots[i].r
    );
    if (dotsHit) {
      if (dots[i].dotsSound == 0) {
        if (animalMode == true) {
          frog.play();
        } else {
          noteE1.play();
        }
      } else if (dots[i].dotsSound == 1) {
        if (animalMode == true) {
          cat.play();
        } else {
          noteB.play();
        }
      } else if (dots[i].dotsSound == 2) {
        if (animalMode == true) {
          chicken.play();
        } else {
          noteG.play();
        }
      } else if (dots[i].dotsSound == 3) {
        if (animalMode == true) {
          cow.play();
        } else {
          noteD.play();
        }
      } else if (dots[i].dotsSound == 4) {
        if (animalMode == true) {
          dog.play();
        } else {
          noteA.play();
        }
      } else if (dots[i].dotsSound == 5) {
        if (animalMode == true) {
          duck.play();
        } else {
          noteE2.play();
        }
      }
      dots[i].x = random(width);
      dots[i].y = random(height);
      dots[i].r = random(5, 12);
      dots[i].color = color(random(360), 50, 100);
      dots[i].masterXvelocity = random(0.5, 3);
      dots[i].masterYvelocity = random(0.5, 3);
      score++;
    }
  }
}

class BouncyDot {
  constructor() {
    // Randomly generate position
    this.x = random(width);
    this.y = random(height);
    // Randomly generate radius
    this.r = random(5, 12);
    // Randomly generate color
    this.color = color(random(360), 50, 100);
    // Randomly generate a master velocity (broken into components)...
    this.masterXvelocity = random(0.5, 3);
    this.masterYvelocity = random(0.5, 3);
    // ...and use those as starting velocities.
    this.xVelocity = this.masterXvelocity;
    this.yVelocity = this.masterYvelocity;
    this.dotsSound = round(random(0, 5));
  }

  float() {
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    // Standard bounce code - like the DVD logo, but for spheres.
    if (this.x + this.r > width) {
      this.xVelocity = -1 * this.masterXvelocity;
    }
    if (this.x - this.r < 0) {
      this.xVelocity = this.masterXvelocity;
    }
    if (this.y + this.r > height) {
      this.yVelocity = -1 * this.masterYvelocity;
    }
    if (this.y - this.r < 0) {
      this.yVelocity = this.masterYvelocity;
    }
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }
}
function keyPressed() {
  let keyIndex = -1;
  if (key >= "a" || key <= "z") {
    keyIndex = key.charCodeAt(0) - "a".charCodeAt(0);
  }
  //console.log(keyIndex);
  if (keyIndex >= -1) {
    dots.push(new BouncyDot());
  } else {
    dots.splice(0, dots.length);
  }
}
