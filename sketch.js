var starImage, fairyImg, bgImg;
var fairy , fairyVoice;
var starGroup, star;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	engine = Engine.create();
	world = engine.world;

	//starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	//World.add(world, starBody);
	
	Engine.run(engine);

	starGroup = new Group();
	
}


function draw() {
  background(bgImg);
  Engine.update(engine);

	if (keyDown(RIGHT_ARROW)) {
		fairy.x = fairy.x + 7;
	}
	if(keyDown(LEFT_ARROW)) {
		fairy.x = fairy.x - 7;
	}

	Stars();

  drawSprites();

}

function Stars() {
	if (frameCount % 100 === 0) {
		star = Bodies.circle(100, 150, 20)
		  World.add(world, star)
		  ellipseMode(RADIUS);
  	ellipse(ball.position.x, ball.position.y, 20, 20)
	}
}
