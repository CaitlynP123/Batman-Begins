const Body = Matter.Body
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var maxDrops = 200
var drops = []
var boy, boyImg
var thunder,thunder1,thunder2,thunder3,thunder4,thunderFrame

function preload(){

    thunder1 = loadImage("proc41images/images/thunderbolt/1.png")
    thunder2 = loadImage("proc41images/images/thunderbolt/2.png")
    thunder3 = loadImage("proc41images/images/thunderbolt/3.png")
    thunder4 = loadImage("proc41images/images/thunderbolt/4.png")
}

function setup(){
   createCanvas(800,700)
   engine = Engine.create()
   world = engine.world;
   
   ground = new Ground(400,675,800,50)
   
   umbrella = new Umbrella(415,415,75)
   umbrella.umbrella.visible = false

   for(var i = 0; i < maxDrops; i++){
    drops.push(new RainDrops(random(0,800), random(0,700)));
}


}

function draw(){
    background("black")

    ground.display()

    for(var i = 0; i < drops.length; i++){
        drops[i].display()
    }
    
    for(var i = 0; i < drops.length; i++){
        drops[i].update()
    }

    umbrella.display()

    Engine.update(engine)
    thunderBolts()
    drawSprites()
}   

function thunderBolts(){
    var rand = Math.round(random(1,4));
    if(frameCount % 80 == 0){
        thunderFrame = frameCount;
        thunder = createSprite(random(10,670), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.4,0.8);
    }

    if(thunderFrame + 10 == frameCount && thunder){
        thunder.destroy();
    }
}