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

// Handle keyboard controls

var keysDown = {};

addEventListener("keydown", function (event) {
  keysDown[event.keyCode] = true;
}, false);

addEventListener("keyup", function (event) {
  delete keysDown[event.keyCode];
}, false);

//New Game

var reset = function () {
  hero.x = canvas.width / 2;
  hero.y = canvas.height / 2;

  monster.x = 32 + (Math.random() * (canvas.width - 64));
  monster.y = 32 + (Math.random() * (canvas.height - 64));
};


// Update objects

var update = function (modifier) {
  if (38 in keysDown) {
    hero.y -= hero.speed * modifier;
  }
  if (40 in keysDown) {
    hero.y += hero.speed * modifier;
  }
  if (37 in keysDown) {
    hero.x -= hero.speed * modifier;
  }
  if (39 in keysDown) {
    hero.x += hero.speed * modifier;
  }

  if (
    hero.x <= (monster.x + 32)
    && monster.x <= (hero.x + 32
    && hero.y <= (monster.y + 32)
    && monster.y <= (hero.y + 32)
    ) {
      ++ monsterCaught;
      reset();
    }
};