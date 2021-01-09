// Module Alias
const { Engine, World, Bodies, Body, Constraint, Composites } = Matter;
let world, engine;

// Declaring the Objects
let blocks = [];
let ground1, ground2, ground3, ground4, ball, rope, slider;

function setup() {
  createCanvas(1400, 600);

  // The Engien and World
  engine = Engine.create();
  world = engine.world;

  // Blocks
  for (let x = 600; x < 900; x += 50) {
    for (let y = 50; y < 500; y += 50) {
      let block = new Block(x, y, 40, 40);
      blocks.push(block);
    }
  }

  // Boundries
  ground1 = new Ground(0, 580, width, 40);
  ground2 = new Ground(0, 0, width, 20);
  ground3 = new Ground(0, 10, 20, height);
  ground4 = new Ground(1380, 10, 20, height);

  // Ball
  ball = new Ball(200, 200, 80, 80);

  // Rope
  rope = new Rope(ball.body, { x: 450, y: 50 });

  // Slider
  createP("Rope Lenght");
  slider = createSlider(250, 550, 450);

  // Engine
  Engine.run(engine);
}

function draw() {
  // Background
  background(24, 24, 29);

  // Shwoing the Obejcts.
  ground1.show();
  ground2.show();
  ground3.show();
  ground4.show();

  for (const block of blocks) {
    block.show();
  }

  ball.display();
  rope.display();

  // Instructions
  fill(236, 112, 76);
  textSize(24);
  textFont("VT323");
  text("Drag the Wreking ball to smash the Blocks", width / 2 - 160, 140);
  // Title
  fill(143, 45, 86);
  textSize(104);
  text("Wreking ball", width / 2 - 200, 100);
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
