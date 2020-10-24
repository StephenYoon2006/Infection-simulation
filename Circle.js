const CIRCLE_SIZE = 15;
class Circle{
    constructor(state){
        this.velocityX = (Math.random()*10) - 5;
        this.velocityY = (Math.random()*10) - 5;
        this.x = Math.random()*width;
        this.y = Math.random()*height;
        this.state = state
    }

    draw(){
        if(this.state === "sick"){
            fill("red");
            ellipse(this.x, this.y, CIRCLE_SIZE, CIRCLE_SIZE)
            
        }
        if(this.state === "healthy"){
            fill("green");
            ellipse(this.x, this.y, CIRCLE_SIZE, CIRCLE_SIZE)
        }
        if(this.state === "immune"){
            fill("blue");
            ellipse(this.x, this.y, CIRCLE_SIZE, CIRCLE_SIZE)
        }
    }

    update(){
        this.x += this.velocityX;
        this.y += this.velocityY;
        if(this.x > width || this.x < 0){
            this.velocityX = -this.velocityX
        }
        if(this.y > height || this.y < 0){
            this.velocityY = -this.velocityY
        }
        for(let i =0; i < circles.length; i++){
            if(Math.sqrt(Math.pow(circles[i].x-this.x,2)+(Math.pow(circles[i].y-this.y,2))) < CIRCLE_SIZE * 2){
                if(circles[i].state === "sick" && this.state != "immune" && this.state != "sick"){
                    this.state = "sick";  
                    if(this.state === "sick"){
                        sickStat +=1
                        healthyStat -=1
                    }                         
                    }
            }
        }
    }
}