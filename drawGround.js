
class drawGround{
    constructor(x,angle){
        this.x=x;
        this.angle=angle;
        this.drawn=false;
        



    }


update(canvas){
    
    if(this.x>=canvas.width){
        
        this.drawn=true;
    }



}



    draw(ctx){
        if(!this.drawn){
            
            console.log("yes i drew it");



            while(this.x<canvas.width ){
            ctx.strokeStyle="green";
        ctx.moveTo(this.x, canvas.height);
    ctx.lineTo(this.x,70*Math.sin(this.angle)+(canvas.height*0.7));
    
        ctx.stroke();
    
    

    this.x++;
        this.angle+=0.01;


        }
        }else{console.log("not drawn");}

     
   


    }




};