const canvas = document.getElementById("myCanvas");
const canvas1 = document.getElementById("myCanvas1");
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
canvas1.height=window.innerHeight;
canvas1.width=window.innerWidth;


const ctx = canvas.getContext("2d");
const ctx1=canvas1.getContext("2d");


let ground= new drawGround(0,0);
let car = new DrawCar(50,500,100,50);






function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)

    ground.draw(ctx1);
    ground.update(canvas1);
    car.draw(ctx);
    car.update();
    

    requestAnimationFrame(animate)

}
animate();