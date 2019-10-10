var w = window.innerWidth;
var h = window.innerHeight;

function setup() {
  createCanvas(window.screen.width, window.screen.height);
}

function draw() {
  basics();
  texts();
  keepWindowSizeUpToDate();
}

function basics() {
  background(100);
  rectMode(CORNER);
  fill(200);
  rect(0, 0, w, h/4);
}

function texts() {
  // Header
  fill(0);
  textAlign(CENTER);
  textSize(40);
  text("Pairorg Help Bot", w/2, h/7);

  // Version Tag
  fill(0);
  textAlign(CENTER);
  textSize(15);
  text("Beta 0.1", w/15, (h/15)*14);
}

function keepWindowSizeUpToDate() {
  w = window.innerWidth;
  h = window.innerHeight;
}
