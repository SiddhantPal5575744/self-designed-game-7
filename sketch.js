const Engine = Matter.Engine;
const World= Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

 

var input,button;

var Input,titleImg,title,volcanoImg;
var gamestate="login";
var robot, robotImg,labImg,lab;
var mineImg,mine,teleportImg,teleport,insideMineImg,insideMine;
var teleportsound;
var g1,g2,b1,b2
var gImg1,gImg2,bImg1,bImg2;
var skyImg,sky;
var g1s,g2s,b1s,b2s;
var player;
var particles1=[]
var rockImg,lives=3,rockgroup,gameoverImg,gameover;
var mine,mineImg,hole,invisibleboundary,ground,ground2,call;
var groundImg,lol,center,centerImg,alien,alien2,alienImg;
var fighterImg,kickImg,king,kingImg,ring,ringImg;
var kingLives,ringGround,fireballImg,fireball,firegroup;
var died,flame,youwin,youwinImg,runningGround, c,pointedrock,pointedrock2,rock1Img,rock2Img;
var pointedgroup,rungroundImg,jetpackImg,jetpack,upground,upgroundImg;
var obstacle,obstacleImg,obstaclegroup,flyingboundary,upsky,upskyImg;
var playsound,jumpsound,outer,outerImg;
var lev1,lev2,lev3,score,booster,boosterImg;
// var log1,log2,m11,m12,m21,m22,cactus,log1Img,log2Img,m1Img,m2Img,cactusImg;
var cactusImg,br,lbooster,lbr,powerupsound,clearsound;
var bnumber,bn1,bn2,bn3,bn4,bn5,rbt;
var restart,upvariable,rtouching,bframe,aframe,coin,coinImg;





 








function preload(){
volcanoImg=loadImage("Volcano.png");
titleImg=loadImage("Title.png");
robotImg=loadImage("Robot.png");
labImg=loadImage("lab.png");
mineImg=loadImage("MineEntrance.png");
teleportImg=loadImage("teleport2.png")
teleportsound=loadSound("teleport.mp3")

gImg1=loadImage("Girl1.png");
gImg2=loadImage("Girl2.png");
bImg1=loadImage("Boy1.png");
bImg2=loadImage("Boy2.png");

skyImg=loadImage("sky.png");
insideMineImg=loadImage("insideMine.png");

rockImg=loadImage("stone.png");
gameoverImg=loadImage("gameover.png");
caveImg=loadImage("cave.png");
groundImg=loadImage("ground.png");
centerImg=loadImage("center.png");
alienImg=loadImage("alien.png");
fighterImg=loadImage("fighter.png");
kickImg=loadImage("kick.png");
kingImg=loadImage("king.png");
ringImg=loadImage("ring.png");
fireballImg=loadImage("fireball.png");
flame=loadSound("flame.mp3");
died=loadSound("monster dead.mp3");
youwinImg=loadImage("you win.png");
rock1Img=loadImage("rock up.png");
rock2Img=loadImage("rock down.png");
rungroundImg=loadImage("running ground.PNG");
jetpackImg=loadImage("jetpack.png");
upgroundImg=loadImage("upfloor.png");
obstacleImg=loadImage("obstacle.png");
upskyImg=loadImage("upsky.png");
playsound=loadSound("playing.mp3");
jumpsound=loadSound("jump.mp3");
outerImg=loadImage("out.PNG");
// log1Img=loadImage("log1.png");
// log2Img=loadImage("log2.png");
// m1Img=loadImage("m1.png");
// m2Img=loadImage("m2.png");
cactusImg=loadImage("cactus.png");
boosterImg=loadImage("booster.png");
powerupsound=loadSound("powerup.wav");
coinImg=loadImage("coin.png");
// clearsound=loadsound("levelclear.wav")
 }

 function setup(){
   textFont("cellestar");
  //  edges=createSprite();
   

createCanvas(displayWidth,displayHeight);
     engine = Engine.create();
    world = engine.world;
    Input=new Form()

    call=displayWidth+displayWidth/2-800;
  

   //making backgrounds
 teleport=createSprite(displayWidth/2, displayHeight/2,displayWidth.displayHeight);
teleport.addImage(teleportImg);
teleport.visible=false;
teleport.scale=1.5;

lab=createSprite(displayWidth/2,displayHeight/2);
lab.addImage(labImg);
lab.scale=2.4;




sky=createSprite(displayWidth/2,displayHeight/2-150);
sky.addImage(skyImg);
sky.visible=false;
sky.scale=4;

mine=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
mine.addImage(mineImg);
mine.scale=1.72;
mine.visible=false;

insideMine=createSprite(displayWidth/2,displayHeight/2);
insideMine.addImage(insideMineImg);
insideMine.visible=false;
insideMine.scale=2.5;

youwin=createSprite(displayWidth/2,displayHeight/2);
youwin.addImage(youwinImg);
youwin.visible=false;
youwin.scale=2;



   //creating buttons for selecting character
   g1s=createButton('select');
   g1s.position(displayWidth/2-230,displayHeight/2+290);
   g1s.mousePressed(characterg1);
   g1s.hide();
  
   g2s=createButton('select');
   g2s.position(displayWidth/2-130,displayHeight/2+290);
   g2s.mousePressed(characterg2);
   g2s.hide();
  
   b1s=createButton('select');
   b1s.position(displayWidth/2+170,displayHeight/2+290);
   b1s.mousePressed(characterb1);
   b1s.hide();
   
   b2s=createButton('select');
   b2s.position(displayWidth/2+270,displayHeight/2+290);
   b2s.mousePressed(characterb2);
   b2s.hide();
 


   //journey title
title=createSprite(displayWidth/2+50, 100);
title.addImage(titleImg);

//character choosing sprites
g1=createSprite(displayWidth/2-200,displayHeight/2+230);
g1.addImage(gImg1);
g1.visible=false;
g1.scale=0.3;

g2=createSprite(displayWidth/2-100,displayHeight/2+230);
g2.addImage(gImg2);
g2.visible=false;
g2.scale=0.3;

b1=createSprite(displayWidth/2+200,displayHeight/2+230);
b1.addImage(bImg1);
b1.visible=false;
b1.scale=0.3;


b2=createSprite(displayWidth/2+300,displayHeight/2+230);
b2.addImage(bImg2);
b2.visible=false;
b2.scale=0.3;


//min players
robot=createSprite(displayWidth/2-300, 550);
robot.addImage(robotImg);
robot.scale=2.2;

player=createSprite(displayWidth/2-100, 550);
 player.visible=false;
 player.scale=0.4;
//  player.debug=true;
 

  rockgroup=createGroup();

  gameover=createSprite(displayWidth/2-200,displayHeight/2,10,10);
  gameover.addImage(gameoverImg);
  gameover.visible=false;

cave=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
// cave.addImage(caveImg);
cave.shapeColor="black";
cave.visible=false;
// cave.scale=3;

hole=createSprite(displayWidth/2-80,displayHeight-50,250,150);
hole.visible=false;
hole.shapeColor="black";
hole.dubug=true;

invisibleboundary=createSprite(0,displayHeight/2+300,5,displayHeight);
invisibleboundary.visible=false;
invisibleboundary.shapeColor="red";

jumper=createSprite(displayWidth,displayHeight/2+300,50,displayHeight);
jumper.visible=false;
jumper.shapeColor="red";

ground=createSprite(displayWidth/2-450,670,displayWidth,8);
ground.visible=false;
ground.addImage(groundImg);
ground.shapeColor="red";
 
ground2=createSprite(displayWidth/2+300,670,displayWidth,8);
ground2.visible=false;
ground2.addImage(groundImg);
ground2.shapeColor="red";

wall1=createSprite(0,displayHeight/2,displayWidth,8);
wall1.visible=false;
wall1.addImage(groundImg);
wall1.shapeColor="red";
wall1.scale=4;
wall1.rotation=90;
 
wall2=createSprite(displayWidth,displayHeight/2,displayWidth,8);
wall2.visible=false;
wall2.addImage(groundImg);
wall2.shapeColor="red";
wall2.scale=4;
wall2.rotation=270;


center=createSprite(displayWidth/2,displayHeight/2,displayWidth,8);
center.visible=false;
center.addImage(centerImg);

alien=createSprite(displayWidth/2+300,player.y,displayWidth,8);
alien.visible=false;
alien.addImage(alienImg);
alien.shapeColor="red";
alien.scale=0.5;


alien2=createSprite(displayWidth/2-300,player.y+10,displayWidth,8);
alien2.visible=false;
alien2.addImage(alienImg);
alien2.shapeColor="red";
alien2.scale=-0.5;
alien2.rotatation=180;

ring=createSprite(displayWidth/2,displayHeight/2);
ring.addImage(ringImg);
ring.scale=2.4;
ring.visible=false;


king=createSprite(300,player.y+10,displayWidth,8);
king.visible=false;
king.addImage(kingImg);
king.shapeColor="red";
king.scale=1;

ringGround=createSprite(displayWidth/2,displayHeight/2+300,displayWidth,10);
 ring.shapeColor="red";
ringGround.visible=false;

firegroup=createGroup();

youwin=createSprite(displayWidth/2,displayHeight/2);
youwin.addImage(youwinImg);
youwin.visible=false;
youwin.scale=4;

runningGround=createSprite(displayWidth/2,displayHeight/2+500,displayWidth,10);
runningGround.addImage(rungroundImg);
runningGround.visible=false;
runningGround.scale=2;

jetpack=createSprite(player.x,player.y,10,8);
jetpack.visible=false;
jetpack.addImage(jetpackImg);
jetpack.shapeColor="red";
jetpack.scale=1;

upground=createSprite(displayWidth/2,displayHeight/2);
upground.addImage(upgroundImg);
upground.visible=false;
upground.scale=3.2;

flyingboundary=createSprite(displayWidth/2,10,displayWidth,50);
 flyingboundary.visible=false;
 flyingboundary.shapeColor="red";

 upsky=createSprite(displayWidth/2,displayHeight/2);
 upsky.addImage(upskyImg);
 upsky.visible=false;
 upsky.scale=3.2;

 outer=createSprite(displayWidth/2,displayHeight/2);
 outer.addImage(outerImg);
 outer.visible=false;
 outer.scale=2;
 
 pointedgroup=createGroup();
 obstaclegroup=createGroup();

//  m11=createSprite(200,displayHeight/2+200,10,8);
//  m11.visible=false;
//  m11.addImage(m1Img);
//  m11.shapeColor="red";
//  m11.scale=1;
lbooster=createSprite(random(20,displayWidth-20),displayHeight/2,10,8);
lbooster.visible=false;
lbooster.addImage(boosterImg);
// lbooster.shapeColor="red";
lbooster.scale=0.1;
boostergroup=createGroup();

bn1=createSprite(displayWidth/2,displayHeight/2);
bn1.addImage(boosterImg);
bn1.visible=false;
bn1.scale=0.3;

bn2=createSprite(displayWidth/2-70,displayHeight/2);
bn2.addImage(boosterImg);
bn2.visible=false;
bn2.scale=0.3;

bn3=createSprite(displayWidth/2-140,displayHeight/2);
bn3.addImage(boosterImg);
bn3.visible=false;
bn3.scale=0.3;

bn4=createSprite(displayWidth/2+70,displayHeight/2);
bn4.addImage(boosterImg);
bn4.visible=false;
bn4.scale=0.3;

bn5=createSprite(displayWidth/2+140,displayHeight/2);
bn5.addImage(boosterImg);
bn5.visible=false;
bn5.scale=0.3;

// restart=createSprite(displayWidth/2+140,displayHeight/2);
// resta.addImage(boosterImg);
// bn5.visible=false;
// bn5.scale=0.3;

coingroup=createGroup();


}

 function draw(){
   background("white");
  Engine.update(engine);
   console.log(gamestate);
 

  if(gamestate==="login"){
    robot.visible=false;
    lab.visible=false;
    title.visible=true;
    player.rotation=0;
    lives=3;
    kingLives=5;
    player.x=displayWidth/2-100;
     
   

  }
 

if(gamestate==="lobby"){
   lab.visible=true;
  //  volcanoImg.visible=false;
 
    title.visible=false;
   robot.visible=true;
   
   


   if(keyDown('space')){
     gamestate="character pick";
   }
}

if(gamestate==="character pick"){
  sky.visible=true;
  g1.visible=true;
  g2.visible=true;
  b1.visible=true;
  b2.visible=true;
  lab.visible=false;
  robot.visible=false;
  g1s.show();
  g2s.show();
  b1s.show();
  b2s.show();
}
if(gamestate==="teleport"){
  teleport.visible=true;
  lab.visible=false;
  robot.visible=false;
   setTimeout(mineEntrance,1000);
   
  teleportsound.play();
  

}

if(gamestate==='mineEntrance'){
  player.visible=true;
  player.rotationSpeed=0;
  gameover.visible=false;
 mine.visible=true;
 insideMine.visible=false;
  teleportsound.stop();
  teleport.visible=false;
  

  robot.visible=true;
  player.visible=true;

  robot.depth=mine.depth+1;
  player.depth=mine.depth+1;

setTimeout(minechanger,2000)
   
  
}

if(gamestate==="insidemine"){
  insideMine.visible=true;
  mine.visible=false;
  setTimeout(landslidechanger,2000)
  
   bframe=6000;

  }

  if(gamestate==="landslide"){
    landslidecoin();
    aframe=frameCount;
    // console.log("Rate "+frameRate)
    // console.log("Count"+frameCount)
   
    player.bounce(invisibleboundary);
    
    
    effectlandslide();
    if(keyDown("RIGHT_ARROW")&&lbr!=1){
      player.x=player.x+4;
    }
    if(keyDown("LEFT_ARROW")&&lbr!=1){
      player.x=player.x-4;
    }

    // if(player.isTouching(rockgroup)){
    //   rtouching=1;
    //   lives=lives-1;
     

    // }

    if(lives<=0){
      console.log("dead");
      gamestate='buried in landslide';
    }

    lbooster.y=500;
    


 
    if(player.isTouching(lbooster)){
      lbr=1;
      bnumber=1;
      lbooster.visible=false;
      if(rbt!="touched"){
      powerupsound.play();
   setTimeout(powerupstop,750)
      }
   rbt="touched";
    
    }
    if(keyDown("RIGHT_ARROW")&&lbr===1){
      player.x=player.x+8;
    }
    if(keyDown("LEFT_ARROW")&&lbr===1){
      player.x=player.x-8;
    }

    
      setTimeout(intoTheHole,20000);


  
  
    
 

  }

//   if(gamestate==="buried in landslide"){
     
//     player.rotationSpeed=10;
//     gameover.visible=true;
//   setTimeout(loginchanger,3000);
 
   
//  }
 
  

  

if(gamestate==="inHole"){
  // clearsound.play();
  // setTimeout(clearstop,2000);
  lev=100;
  player.collide(ground);
  rockgroup.destroyEach();
  insideMine.visible=true;
  // player.x=displayWidth/2;
  // robot.x=displayWidth/2-50;
setTimeout(jumpchanger,3000);
    
}

if(gamestate==="jump"){
  console.log(player.y);
  lbooster.visible=true;
  lbooster.x=ground2.x;
  lbooster.y=ground.y-50;
  player.velocityX=0
  robot.velocityX=0;
  player.collide(ground);
  player.collide(ground2);
   
  cave.visible=true;
  ground.visible=true;
  ground2.visible=true;
  //  player.depth=cave.depth+1;
  // robot.depth=cave.depth+1;
player.depth=hole.depth+1;
robot.depth=hole.depth+1;
   hole.visible=true;
 
   if(keyDown('UP_ARROW')){
    player.velocityY=-8;
    
    }
    player.velocityY=player.velocityY+0.3;
    
  if(keyDown("RIGHT_ARROW")&&player.x>=40){
    robot.x=robot.x+4;
    player.x=player.x+4;

   }

    
    if(keyDown("RIGHT_ARROW")){
    player.x=player.x+2;
    robot.x=robot.x+2;
    
 }

   if(player.isTouching(hole)&&gamestate==="jump"){
     gamestate="falling";
    }

     }

     if(gamestate==="falling"){
        console.log("hi");
        lbooster.visible=false;
       player.velocityY=0;
      
      hole.visible=false;

      player.x=displayWidth/2-200;
      robot.x=displayWidth/2+200;
      ground.visible=false;
      ground2.visible=false;

      wall1.visible=true;
      wall2.visible=true;

      wall1.velocityY=-10;
      wall2.velocityY=-10;

      if(wall1.y<0){
        wall1.y=displayHeight/2;
      }

      
      if(wall2.y<0){
        wall2.y=displayHeight/2;
      }
      setTimeout(centerchanger,7000);
      }

      if(gamestate==="center"){
cave.visible=true;
alien2.rotation=0;
ground.visible=false;
ground2.visible=false;
center.visible=true;
player.depth=center.depth+1;
robot.depth=center.depth+1;
ground.depth=center.depth+1;

alien.visible=true;
alien2.visible=true;
alien.depth=player.depth+1;
alien.depth=robot.depth+1;

alien2.depth=player.depth+1;
alien2.depth=robot.depth+1;

 
  alien.velocityX=-5;
  alien2.velocityX=-5;

  player.y=displayHeight/2+200;
  player.x=displayWidth/2;
 

setTimeout(kingchanger,3000);


  }

  if(gamestate==="fight"){
    player.addImage(fighterImg);
    player.scale=2;
    ground.depth=ring.depth+1;
    player.y=displayHeight/2+200;
    player.x=displayWidth/2;

    player.setCollider("rectangle",0,0,50,70);
    
    setTimeout(ringchanger,3000);
    lev2=55;

}

  if(gamestate==="ring"){
    console.log("lev2 "+lev2);
   
    console.log(kingLives);
    // ringGround.debug=true;
    player.depth=ring.depth+1;
    player.y=displayHeight/2+200;
   
player.x!=king.x;
//  player.collide(ringGround);
    ring.visible=true;
    ringGround.visible=true;
    robot.visible=false;

robot.depth=ring.depth+1;
king.depth=ring.depth+1;

king.debug=true;

if(keyWentDown("k")){
  player.addImage(kickImg);
  lev2=lev2-5;
}else{
  player.addImage(fighterImg);
}

if(keyWentDown("k")&&player.isTouching(king)){
  lev2=lev2-1;
  player.addImage(kickImg);
  kingLives=kingLives-5;
} 

if(keyDown("RIGHT_ARROW")){
  player.x=player.x+4;
}
if(keyDown("LEFT_ARROW")){
  player.x=player.x-4;
}

if(keyDown('UP_ARROW')){
  player.velocityY=-8;
  
  }
  player.velocityY=player.velocityY+0.3;

if(kingLives>=1){
  flamethrower();
}


 
 
// if(player.isTouching(firegroup)){
//   gamestate="hit by fireball";
// }

if(kingLives<1){
  king.visible=false;
  console.log("dead");
  gamestate="you win";
  monstersound();


  // setTimeout(youwinRemover,6000);

}
}

if(gamestate==="hit by fireball"){
  player.rotationSpeed=10;
  gameover.visible=true;
  gameover.depth=ring.depth+1;
  setTimeout(loginchanger,4000);
}

  if(gamestate==="you win"){
    setTimeout(monsteroff,1000);
    player.collide(ringGround);
     
    setTimeout(youwinShower,3000);
    setTimeout(runchanger,6000)
  }

  if(gamestate==="run"){
    ringGround.scale=5;
    player.setCollider("rectangle",0,0,200,250);
    player.y=displayHeight/2+150;
    robot.y=displayHeight/2+300;
    ringGround.addImage(rungroundImg);
    ringGround.y=displayHeight+100;

    cave.visible=true;
    cave.depth=center.depth+1;

    // ringGround.visible=true;
    youwin.visible=false;
    ring.visible=false;
    robot.visible=true;
    // center.visible=true;

    if(c===1){
      player.addImage(gImg1);
    }

    if(c===2){
      player.addImage(gImg2);
    }

    if(c===3){
      player.addImage(bImg1);
    }

    if(c===4){
      player.addImage(bImg2);
    }
    player.scale=0.4;
    setTimeout(rocklandchanger,3000);
lev3=40;
  }

if(gamestate==="rockland"){
  robot.visible=false;
 
 player.collide(ringGround);
 
  ringGround.visible=true;
 player.x=displayWidth/2-400;

 
  rockspawn();
  rockspawn1();
  if(keyWentDown('UP_ARROW')&&player.y>530&&br!=3){
    player.velocityY=-17;
    jumpsound.play();
    setTimeout(jumpstop,1000);
    lev3=lev3-4;
    } 
    player.velocityY=player.velocityY+0.7;

    ringGround.velocityX=-12;
    if(ringGround.x<0){  
      ringGround.x=displayWidth/2;
      
    }
    // if(player.isTouching(pointedgroup)){
    //   gamestate="pricked";
    //   pointedgroup.setVelocityXEach(0);
    // }

  
  boostergiver();

  if(player.isTouching(boostergroup)){
    br=3;
    boostergroup.destroyEach();
   bnumber=bnumber+1;
    player.y=displayHeight/2+150
    powerupplay();
    setTimeout(powerupstop,750)
    
  }
  if(keyWentDown('UP_ARROW')&&player.y>530&&br===3){
    player.velocityY=-20;
    jumpsound.play();
    setTimeout(jumpstop,1000);
    
    lev3=lev3-4;
    } 
//  boostergroup.depthEach(cave.depth+1);
setTimeout(upchanger,20000);

}

if(gamestate==="pricked"){
 

  gameover.depth=cave.depth+1;
  player.collide(ringGround);
  player.velocityY=0;
  gameover.visible=true;
  player.rotationSpeed=5;
  setTimeout(loginchanger,3000);
}

if(gamestate==="up"){
  player.scale=0.4;
  // playsound.stop();
  // player.velocityY=0;
  upground.visible=true;
   //depth
  player.depth=jetpack.depth+1;
  
  player.depth=upground.depth+2;
  jetpack.depth=upground.depth+1;
  
  //positions
   player.y=displayHeight/2+150
   player.x=displayWidth/2;
   robot.x=displayWidth/2+150;
   jetpack.x=player.x;
   jetpack.y=player.y;
   ringGround.y=displayWidth+350;

   //visible true
//  player.visible=true;
 jetpack.visible=true;
 robot.visible=true;
 ringGround.visible=false;
 
  cave.visible=false;

   
  // setTimeout(flyingchanger,3000);s
  setTimeout(endchanger,8000)

  
}


//  if(gamestate==="flying"){
//   jetpack.visible=true;
//   upground.visible=true;
//   // upsky.visible=true;
//   robot.visible=false;
//   jetpack.x=player.x;
//   jetpack.y=player.y;
//   // player.depth=upsky.depth+2;
//   // jetpack.depth=upsky.depth+1;
// player.velocityY=-5;
// // if(keyDown("RIGHT_ARROW")){
//   //   player.x=player.x+7;
//   // }
//   // if(keyDown("LEFT_ARROW")){
//   //   player.x=player.x-7;
//   // }

  
// //  obstaclegiver();

// //  if(player.isTouching(obstaclegroup)){
// //    gamestate="slabbed";
// //  }
// setTimeout(endchanger,3000);
// }
 
if(gamestate==="outside"){
  jetpack.visible=true;
  upground.visible=false;
  outer.visible=true;
  player.depth=outer.depth+2;
  jetpack.depth=outer.depth+1;
  upsky.visible=false;
  player.y=displayHeight/2+100;
  player.x=displayWidth/2-300;
  jetpack.x=player.x;
  jetpack.y=player.y;
 
setTimeout(scoreShower,3000);
}

if(gamestate==="score"){
 text("hello",displayWidth/2,displayHeight/2+300);
 center.visible=false;
 insideMine.visible=false;
  
  // cave.visible=true;
 
  jetpack.visible=false;
  player.visible=false;
//   if(bnumber/1===1){
// bn1.visible=true;
//   }

//   if(bnumber/2===1){
//     bn2.visible=true;
// bn4.visible=true;
// }

// if(bnumber/3===1){
//   bn2.visible=true;
// bn4.visible=true;
// bn1.visible=true;
// }


}


Input.display();
title.display();
drawSprites();
 }

 

//chosen character functions 
 function characterg1(){
   g1.visible=false;
   g2.visible=false;
   b1.visible=false;
   b2.visible=false;
   sky.visible=false;
   g1s.hide();
   g2s.hide();
   b1s.hide();
   b2s.hide();
   gamestate="teleport";
   player.addImage(gImg1);
    c=1;

   }

   function characterg2(){
    g1.visible=false;
    g2.visible=false;
    b1.visible=false;
    b2.visible=false;
    sky.visible=false;
    g1s.hide();
   g2s.hide();
   b1s.hide();
   b2s.hide();
    gamestate="teleport";
    player.addImage(gImg2);
    c=2
    }

    function characterb1(){
      g1.visible=false;
      g2.visible=false;
      b1.visible=false;
      b2.visible=false;
      sky.visible=false;
      g1s.hide();
   g2s.hide();
   b1s.hide();
   b2s.hide();
      gamestate="teleport";
      player.addImage(bImg1);
      c=3
   
      }

      function characterb2(){
        g1.visible=false;
        g2.visible=false;
        b1.visible=false;
        b2.visible=false;
        sky.visible=false;
        g1s.hide();
   g2s.hide();
   b1s.hide();
   b2s.hide();
        gamestate="teleport";
        player.addImage(bImg2);
        c=4
     
        }


  //switching gamestate functions
  function loginchanger(){
    cave.visible=false;
    gamestate='login';
    player.rotationSpeed=0;
    pointedgroup.destroyEach();
    player.visible=false;
    robot.visible=false;
    gameover.visible=false;
    insideMine.visible=false;
    robot.x=displayWidth/2-300
    robot.y=550
    player.rotation=0;
   
    kingLives=5;
  ringGround.visible=false;
  king.visible=false;
  ring.visible=false;
  center.visible=false;

  obstaclegroup.destroyEach();
  upsky.visible=false;
  // player.visible=false;
  // robot.visible=false;
  jetpack.visible=false;
  
   }

   function mineEntrance(){
    
      gamestate=  'mineEntrance';
      player.rotationSpeed=0;
      gameover.visible=false;
      insideMine.visible=false;
     }

   function minechanger(){
     gamestate="insidemine";
   }

   function landslidechanger(){
     gamestate="landslide";
     lbooster.visible=true;
 
   }

   // landslide effect
   function effectlandslide(){
     if(frameCount%10===0){
       var rocks=createSprite(random(0,displayWidth),0,10,10);
       rocks.addImage(rockImg);
       rocks.scale=0.1;
       rocks.velocityY=8;
       rocks.lifetime=displayWidth/8+30;
       rockgroup.add(rocks);

     }

     }

     function flamethrower(){
      if(frameCount%100===0){
        fireball=createSprite(displayWidth/2-300,displayHeight/2+200,10,10);
        fireball.addImage(fireballImg);
        fireball.scale=2;
        fireball.velocityY=random(2,3);
        fireball.velocityX=5;
        fireball.lifetime=displayWidth/8+30;
        firegroup.add(fireball);
        flame.play();
        
 
      }
      

       }

     function intoTheHole(){
       gamestate="inHole";
       insideMine.visible=false;
       rockgroup.visible=false;
       
    }

    function centerchanger(){
      gamestate="center";
    }

    function isTouching(object1,object2){
      if (object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x - object1.x < object2.width/2 + object1.width/2
        && object1.y - object2.y < object2.height/2 + object1.height/2
        && object2.y - object2.y < object2.height/2 + object1.height/2) {
        
        return true;
      }
      else {
        return false;
      } 
    }

    function kingchanger(){
      king.visible=true;
      gamestate="fight";
    }

    function mover(){
      ground.y=ground.y+10;
      ground2.y=ground2.y+10;
    }

    function ringchanger(){
      gamestate="ring";
    }

    function stopflame(){
      flame.stop();
    }

    function youwinShower(){
      youwin.visible=true;
      died.stop();
    }

    function youwinRemover(){
      youwin.visible=false;
      
    }

    function runchanger(){
      gamestate="run";
     }

     function rocklandchanger(){
       gamestate= "rockland";
      //  setTimeout(playplay,2000);
      score=300;
      
     }

    
     function rockspawn(){
      if(frameCount%100===0){
        pointedrock=createSprite(displayWidth,displayHeight/2+215,10,10);
       pointedrock.scale=0.75;
        pointedrock.velocityX=-12;
        pointedrock.lifetime=displayWidth/2;
        pointedgroup.add(pointedrock);
        pointedrock.addImage(cactusImg);
        
         
 
      }
      

       }

       function rockspawn1(){
        if(frameCount%150===0){
          pointedrock2=createSprite(displayWidth,displayHeight/2-300,10,10);
         pointedrock2.scale=0.75;
          pointedrock2.velocityX=-12;
          pointedrock2.lifetime=displayWidth/2;
          pointedgroup.add(pointedrock2);
          pointedrock2.addImage(rock2Img);
          
           
   
        }
      }
  
      function upchanger(){
        gamestate="up";
        
        pointedgroup.destroyEach();
      }

      function monstersound(){
        died.play();
      }
      function monsteroff(){
        died.stop();
      }

      function flyingchanger(){
        player.velocityY=-5;

      }

      function obstaclegiver(){
if(frameCount%60===0){
obstacle=createSprite(random(100,displayWidth-100),0,10,10);
obstacle.addImage(obstacleImg);
obstacle.lifeTime=displayHeight/2;
obstacle.velocityY=5;
obstacle.scale=3;
obstaclegroup.add(obstacle);
}
   }
 

 function jumpchanger(){
 player.x=50;
 robot.x=15;

 gamestate="jump";
 }

 function playplay(){
   playsound.play();
 }

 function jumpstop(){
  jumpsound.stop();
 }

 function endchanger(){
   gamestate="outside";
 }

 function scoreShower(){
   gamestate="score";
   upground.visible=false;
  outer.visible=false;
 }

 function boostergiver(){
  if(frameCount%250===0){
  booster=createSprite(displayWidth,displayHeight/2+50,10,10);
  booster.addImage(boosterImg);
  booster.lifetime=displayHeight/2;
  booster.velocityX=-12;
  booster.scale=0.1;
  booster.depth=cave.depth+1;
  boostergroup.add(booster);
   
  }
     }

function powerupstop(){
powerupsound.stop();
}

function powerupplay(){
  powerupsound.play();
}

// function clearplay(){

//   clearsound.play();
// }

// function clearstop(){
//   clearsound.stop();
// }

// function rockplay(){
//   upvariable=setTimeout(upchanger,20000);
// }

// function rockstop(){
//   clearTimeout(upvariable);
// }


function landslidecoin(){
  if(frameCount%50===0){
    coin=createSprite(random(50,displayWidth-50),0,10,10)
    coin.addImage(coinImg);
    coin.velocityY=8;
    coin.scale=0.4
    coin.lifeTime=displayHeight/4;
    coin.depth=insideMine.depth+1;
    coingroup.add(coin);
  }
}