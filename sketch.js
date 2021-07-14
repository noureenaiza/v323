const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower;
var ground;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    tower = new Tower(200, 200, 5, 300);
    tower.scale = 0.01

    ground = new Ground(0,height-1, width*2, 1)   
    
}

function draw(){
    background(0);
    Engine.update(engine);
    tower.display();
    ground.display();
    
}
