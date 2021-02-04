class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Begin');
      this.greeting = createElement('h2');
     // this.title = createElement('h1');
      this.request=createElement('h2');
      this.intromine = createElement('h2');
      this.mine1 = createElement('h2');
      this.danger1 = createElement('h2');
      this.intohole = createElement('h2');
      this.score=createElement('h1');
      this.center = createElement('h2');
      this.fight = createElement('h2');
      this.run = createElement('h2');
      this.jump = createElement('h2');
      this.up = createElement('h2');
      
      
    
      //this.background=loadImage("Volcano.png");
      this.name=null;
   
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
     // this.title.hide();
      this.request.hide();
      this.intromine.hide();
   
    }
  
    display(){
        background(volcanoImg);
       
      //  image(this.background,displayWidth/2,displayHeight/2,10,10)
     // this.title.html("Journey to the center of the Earth");
      this.request.html("Please enter your name" );
      this.request.style('color','#ffffff');
      
   
    //  this.title.position(displayWidth/2 -200, 50);
      this.request.position(displayWidth/2 -50, 200);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);

      this.intromine.html("Robot:  You might be wondering what just happened, we actually teleported at octradedalisis diamond mine which will the starting  point on our journey to the center of the earth I hope we will have a lot of fun! ")
     this.intromine.position( displayWidth/2-200,displayHeight/2-200);
     this.intromine.style('color','#ffffff');
     this.intromine.hide();

     this.mine1.html( "Robot:Wow this is a beatiful place and look what there are diamonds all around!")
     this.mine1.position(displayWidth/2 - 300, displayHeight/4);
     this.mine1.hide();
     this.mine1.style('color','#ffffff');

     this.danger1.html("Robot: Oh no this is a landslide save yourself from the rocks or you will be killed!,use the arrow keys to move")
     this.danger1.position(displayWidth/2 - 300, displayHeight/4);
     this.danger1.hide();
     this.danger1.style('color','#ffffff');

     this.intohole.html("Robot:Thankfully we were saved now go to the right to continue our journey");
     this.intohole.position(displayWidth/2 - 300, displayHeight/4);
     this.intohole.style('color','#ffffff');
     this.intohole.hide();

    
     this.score.html("Score:  "+score);
     this.score.position(displayWidth/2 - 300, displayHeight/2);
     this.score.style('color','#ffffff');
     this.score.hide();
    
     this.center.html("Robot:Ooh that was a really long fall but look I can't believe my eyes we are at the center of the earth and just look at these creatures they were supposed to extinct millions of years ago");
     this.center.position(displayWidth/2 - 300, displayHeight/4);
     this.center.style('color','#ffffff');
     this.center.hide();

     this.fight.html("Robot: Oh no this seems to be thier king we need to fight him off now "+player.name+" let the warrior inside you rise and fight him off use the K key to kick");
     this.fight.position(displayWidth/2 - 300, displayHeight/4);
     this.fight.style('color','#ffffff');
     this.fight.hide();
      
     this.fight.html("Robot: Oh no this seems to be thier king we need to fight him off now "+player.name+" let the warrior inside you rise and fight him off use the K key to kick");
     this.fight.position(displayWidth/2 - 300, displayHeight/4);
     this.fight.style('color','#ffffff');
     this.fight.hide();

     this.run.html("Robot: Wow you defeated him now we have to encounter a thorny cave use the up arrow key to jump");
     this.run.position(displayWidth/2 - 300, displayHeight/4);
     this.run.style('color','#ffffff');
     this.run.hide();

     this.jump.html("Robot:Now we have to jump from this platform to the other one use the right and the up arrow keys to move and jump");
     this.jump.position(displayWidth/2 - 300, displayHeight/4);
     this.jump.style('color','#ffffff');
     this.jump.hide();

     this.up.html("Robot:Finally we have reached th volcanic duct from where we can use our jetpack and fly away");
     this.up.position(displayWidth/2 - 300, displayHeight/4);
     this.up.style('color','#ffffff');
     this.up.hide();
 

  
      this.button.mousePressed(()=>{
      this.input.hide();
        gamestate="lobby";
        this.button.hide();
      //  this.title.hide();
        this.request.hide();
        this.name = this.input.value();
       
        this.greeting.html("Hello " + this.name+" I am Robotechnosis a robot made by Professor Chemicalo Scienceman. I will be your guide in our Journey To the Centre of the Earth.In this game there are three levels you have to survive a landslide , battle an alien and finnaly run through a cave of stalagstites and stalagmites.Press SPACE to start")
        this.greeting.position(displayWidth/2 - 300, displayHeight/4);

    

       
       
       // var name=this.name;
      });

      if(gamestate==="login"){
        this.button.show();
        this.request.show();
        this.input.show();
        this.danger1.hide();
      }

      if(gamestate==="lobby"){
        this.greeting.show();
      }

      
      if(gamestate==="character pick"){
        this.greeting.hide();
      }

      if(gamestate==="mineEntrance"){
        this.intromine.show();
        this.danger1.hide();
      }

      
      if(gamestate==="insidemine"){
        this.mine1.show();
      }

      if(gamestate==="landslide"){
        this.danger1.show();
      }

      if(gamestate==="inHole"){
        this.intohole.show();
      }

      if(gamestate==="jump"){
        this.jump.show();
      }

      if(gamestate==="falling"){
        this.jump.hide();
      }
  
       
    //   if(gamestate==="score"){
    //  this.score.show();
    //  score=lev1+lev2+lev3;
    //   }

      if(gamestate==="center"){
      this.center.show();
      } 

      if(gamestate==="fight"){
        this.center.hide()
        this.fight.show();
      }

      if(gamestate==="ring"){
        this.fight.hide();
      }

      if(gamestate==="run"){
        this.run.show();

      }

      if(gamestate==="rockland"){
        this.run.hide();
      }

      if(gamestate==="up"){
        this.up.show();
      }

      if(gamestate==="outside"){
        this.up.hide();
      }

    }

    

    
  }
  