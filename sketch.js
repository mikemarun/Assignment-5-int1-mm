const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;

const drawBody = Helpers.drawBody;

let engine;

let boxA;
let boxB;
let boxC;
let circleA;
let ground;
let wall1;
let wall2;


function setup() {
  createCanvas(800, 600);

  // create an engine
  engine = Engine.create();

  // create two boxes and a ground
  boxA = Bodies.rectangle(235, -420, 160, 100);
  boxB = Bodies.rectangle(300, -400, 150, 90);
  boxC = Bodies.rectangle(335, -380, 150, 90);
  circleA = Bodies.circle(370, -360, 45);
  ground = Bodies.rectangle(400, 603, 810, 10, {
    isStatic: true, angle: Math.PI * 0.0
  });
  wall1 = Bodies.rectangle(-3, 200, 10, 810, {
    isStatic: true, angle: Math.PI * 0.0
  });
  wall2 = Bodies.rectangle(803, 200, 10, 810, {
    isStatic: true, angle: Math.PI * 0.0
  });

  // add all of the bodies to the world
  World.add(engine.world, [boxA, boxB, boxC, circleA, ground, wall1, wall2]);

  // run the engine
  Engine.run(engine);
}

function draw() {
  background(255, 255, 102);
  noStroke();

  fill(133, 187, 101);
  drawBody(boxA);
  drawBody(boxC);

  fill(17, 140, 79);
  drawBody(boxB);
  drawBody(circleA);

  fill(255, 255, 102);
  drawBody(ground);
  drawBody(wall1);
  drawBody(wall2);
}
