var playerCount = 0 
var thorimg
var narutoimg
var lightningimg
var rsimg
var backgroundImg
var backgroundimg

var isThor=false;

var gameState=0;

var player,form,car1,car2,cars=[],allPlayers

function preload() {
  thorimg=loadImage("thornormal.png");
  narutoimg=loadImage("narutonormal.png");
  backgroundImg=loadImage("background.png");
  backgroundimg = loadImage("formpic.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  /*database.ref('/').update({
    gameState:0,
    playerCount:0,
    players:{}
  })*/
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundimg);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    //game.showLeaderboard();
    //game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
