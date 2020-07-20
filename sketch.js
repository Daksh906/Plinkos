const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles;
var particle = [];
var plinkos = [];
var divisions = [];

var gameState = "start";

var divisionHeight=300;
var score =0;
var count = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particles!=null){
      for(var i = 0;i <particle.length;i++){
        particle[i].display();
      }
    if(particles.body.position.x<300){
      
      score=score+500;
      particle=null;
      if(count>=5)gameState = "end";
    }
  }
}
function mousePressed(){
  
    count++;
    particles = new Particles(mouseX,10,10);
    console.log(particle);
    particle.push(particles);
}
