const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const gravity = 1;

var player;

canvas.width = innerWidth;
canvas.height = innerHeight;

class Player{
    constructor(x,y,xv,yv,xa,ya){
       this.x = x;
       this.y = y;
       this.xv = xv;
       this.yv = yv; 
       this.xa = xa;
       this.ya = ya
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, 50, 0, Math.PI * 2, false);
        ctx.fillStyle = "red";
        ctx.fill();
    }

    update() {
        this.draw();
        if(this.yv <= 0){
            this.y -= this.yv;
        }else{
            this.y += this.yv;
        }
        if(this.xv <= 0){
            this.x -= this.xv;
        }else{
            this.x += this.xv;
        }
        this.yv += this.ya;
        this.xv += this.xa;
        this.yv -= gravity;
        if(this.y >= canvas.height-50){
            this.yv = 0;
            this.y = canvas.height - 50;
        }
    }
}

function init(){
    player = new Player(canvas.height - 200, 200, 0, 0, 0 ,0);
    player.draw();

    addEventListener("keyDown", (e) =>{
        player.y += 20;
    });

    animate();
}

function animate(){
    requestAnimationFrame(animate);
    
    ctx.fillStyle = "rgba(255,255,255)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    player.update();
}

init();