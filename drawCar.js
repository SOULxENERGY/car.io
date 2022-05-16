class DrawCar{

    constructor(x,y,width,height){
        console.log("i am car");
    
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.controls= new Controls();
    this.speed=0;
            this.acceleration=0.2;
            this.maxSpeed=3;
            this.friction=0.01;
            this.angle=0;
            
    
    
    
    }
    update(){
    if(this.controls.forward){
        this.speed+=this.acceleration;
        
        
    };
    
    if(this.controls.reverse){
        this.speed-=this.acceleration;
        
        
    };
    
    
    if(this.speed>this.maxSpeed){
    
    this.speed=this.maxSpeed;
    }
    
    if(this.speed<-this.maxSpeed){
    
    this.speed=-this.maxSpeed;
    };
    
    if(this.speed>0){

        
    this.speed-=this.friction;
    }
    
    if(this.speed<0){
    
    this.speed+=this.friction;
    }
    if(Math.abs(this.speed)<this.friction){
    
    this.speed=0;
    };
    
    
    if(this.controls.up){
               // this.angle+=0.03;
            }
            if(this.controls.down){
              //  this.angle-=0.03;
            }
    
    
    
    
    
    this.x+=this.speed;
   this.y =70* Math.sin(this.x*0.01)+(canvas.height*0.7);
   this.angle=   70*Math.cos(this.x*0.01)*0.01;
            
    
    
    
    
    }
    
    
    draw(ctx){
    
        ctx.save();
            ctx.translate(this.x,this.y);
            ctx.rotate(this.angle);
        ctx.beginPath();
    ctx.fillStyle="red";
    ctx.fillRect((-this.width/2),(-this.height),this.width,this.height);
    ctx.fillStyle="black";
    ctx.arc(this.width/2*0.6,this.height/18,15, 0, 2 * Math.PI);
    ctx.arc(-this.width/2*0.6,this.height/18,15, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
    
    
    
    
    }
    
    
    
    
    
    
    
    
    };
