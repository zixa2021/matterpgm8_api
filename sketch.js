const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var arr = [[1,2],[3,4],["ZIXA","practical","learning","system"]];
console.log(arr);



function preload(){
    bg = loadImage("img/bg.jpg")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
   //bird
    bird = new Bird(50,50,50,50);
    
    //ground
    ground = new Ground(600,390,1200,10);
    
    //boxes
    box1 = new Box(800,380,100,100);
    box2 = new Box(800,320,100,100);
    box3 = new Box(800,280,100,100);

    //pig
    pig = new Pig(800,250,50,50);

    //constraint
    var options={
            bodyA:bird.body,
            pointB:{x:100,y:100},
            stiffness: 0.04,
            length: 10
    }
        rope = Constraint.create(options);
        World.add(world, rope);
}

function draw(){

    background(bg);
    
    Engine.update(engine);
    

    ground.display();

    bird.display();
    box1.display();
    box2.display();
    box3.display();

    pig.display();



    if(rope.bodyA){
    strokeWeight(2);
    line(100,100,bird.body.position.x,bird.body.position.y)}
    //currenttime();
}

function mouseDragged(){
    Matter.Body.setPosition( bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    rope.bodyA = null;
}
/*async function currenttime(){
      var time =  await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
      var jsontime=await time.json();
      var date = jsontime.datetime;
      var currentdate = date.slice(0,16);
      console.log(currentdate);
      fill("black");
      text("Date and Time: "+currentdate,200,200);
    }*/