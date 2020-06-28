const Engine = MATTER.Engine;
const World  = MATTER.World;
const Bodies = MATTER.Bodies;
const Constraint = MATTER.Constraint;

var rock;

var target1,target2,target3,target4,target5;
var target6,target7,target8,target9,target10;

var catapult;

function preload() {
  backgroundImg = loadImage("animation/endgame-1.jpg");
}


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  target1 = new BLOCK(700,320,70,70);
  target2 = new BLOCK(920,320,70,70);
  target3 = new BLOCK(100,320,70,70);
  //target5 = new BLOCK(700,320,70,70);
  //target6 = new BLOCK(700,320,70,70);
  //target7 = new BLOCK(700,320,70,70);
  //target4 = new BLOCK(700,320,70,70);
  //target9 = new BLOCK(700,320,70,70);
  //target10 = new BLOCK(700,320,70,70);
  //target8 = new BLOCK(700,320,70,70);



}

function draw() {
  background(255,255,255);  
  drawSprites();
}