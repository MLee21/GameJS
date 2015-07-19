//Create Canvas

var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Background Image

var bgReady = false;
var bgImage =  new Image();

bgImage.onload = function () {
  bgReady = true;
};

bgImage.src = "images/background.png";

// Ash Image

var bgReady = false;
var bgImage =  new Image();

bgImage.onload = function () {
  bgReady = true;
};

bgImage.src = "images/Ash.png";

// Pikachu Image

var bgReady = false;
var bgImage =  new Image();

bgImage.onload = function () {
  bgReady = true;
};

bgImage.src = "images/PikachuSilver.png";


// Game objects

var hero = {
  speed: 256,
  x: 0,
  y: 0
};

var monster = {
  x: 0,
  y: 0
};

var monstersCaught = 0;