
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ground1,ground2,ground3,ground4;
var bad1,bad2,bad3,bad4;
var win;
var bg_img;
var ball;
var ballImg;
var blower;
var post1,post2;

var isGameOver = false;


function preload(){
bg_img = loadImage("background.png");
ballImg = loadImage("ball.png");
}



function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  /*blower = createImg("balloon.png");
  blower.position(450,500);
  blower.size(100,100);
  blower.mouseClicked(blow);*/



  var ball_options={
    restitution:0.8
  }
  
  
  ground = new Ground(640,550,770,20);
  ground1 = new Ground(1200,100,2000,20);
  ground2 = new Ground(5,250,10,300);
  ground3 = new Ground(1200,400,20,320);
  ground4 = new Ground(55,550,140,20)
  bad1 = new Ground(1120,550,200,20);
  bad2 = new Ground(100,100,200,20);
  bad3 = new Ground(5,470,10,150)
  bad4 = new Ground(1200,180,20,140);
  post1 = new Ground(130,490,10,130)
  post2 = new Ground(250,490,10,130)
  win = new Ground(190,550,120,20);





  ball = Bodies.circle(500,220,20,ball_options);
  World.add(engine.world, ball)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}


function draw() 
{
  background(51);
  image(bg_img,0,0,1200,690)

  push();
  imageMode(CENTER);
  if(ball!=null){
    image(ballImg,ball.position.x,ball.position.y,70,70);
  }
  pop();

  Engine.update(engine);
  ground.show();
  ground1.show();
  ground2.show();
  ground3.show();
  ground4.show();
  bad1.show();
  bad2.show();
  bad3.show();
  bad4.show();
  post1.show();
  post2.show();
  win.show();

  /*if(collide(ball,bad1)==true)
  {
    isGameOver = true;
    gameOver();
  }*/

  
/*if(keyIsDown("DOWN_ARROW")){
  blow();
}*/
  
}

function keyPressed(){

  if(keyCode==UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.02})
  }



}

function key(){

  if(keyCode==DOWN_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.02})
  }



}

function keyPr(){

  if(keyCode==RIGHT_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0})
  }

}


function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              World.remove(engine.world,ball);
               ball = null;
               return true; 
            }
            else{
              return false;
            }
         }
}



function gameOver() {
  swal(
    {
      title: `Game Over!!!`,
      text: "Thanks for playing!!",
      imageUrl:
        "https://raw.githubusercontent.com/whitehatjr/PiratesInvasion/main/assets/boat.png",
      imageSize: "150x150",
      confirmButtonText: "Play Again"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}
