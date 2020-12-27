const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(140,350,50,50);
    box2 = new Box(240,350,50,50);
    box3 = new Box(140,250,50,50);
    box4 = new Box(240,250,50,50);
    box5 = new Box(190,200,45,45)
    pig1 = new Pig(190,350);
    pig2 = new Pig(190,250);
    log1 = new Log(190,330,150,PI/2)
    log2 = new Log(190,235,150,PI/2);
    log3 = new Log(160,220,100,PI/6);
    log4 = new Log(200,220,100,-PI/6);
    bird1 = new Bird(30,30);
    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
    ground.display();
}