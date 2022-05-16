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
   this.y =70* Math.sin(this.x*0.01)+(canvas.height*0.7-(this.height+15/2));
            
    
    
    
    
    }
    
    
    draw(ctx){
    
        ctx.save();
            ctx.translate(this.x,this.y);
            ctx.rotate(-this.angle1);
        ctx.beginPath();
    ctx.fillStyle="red";
    ctx.fillRect(0,0,this.width,this.height);
    ctx.fillStyle="black";
    ctx.arc((this.width*0.8),this.height,15, 0, 2 * Math.PI);
    ctx.arc((this.width*0.2),this.height,15, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
    
    
    
    
    }
    
    
    
    
    
    
    
    
    };
