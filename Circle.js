const CIRCLE_SIZE = 15;
class Circle{
    constructor(state){
        this.velocityX = (Math.random()*10) - 5;
        this.velocityY = (Math.random()*10) - 5;
        this.x = Math.random()*width;
        this.y = Math.random()*height;
        this.state = state
        if(this.state === "sick"){
            setTimeout(() =>{
            this.state = "immune";
            immuneStat +=1
            sickStat -=1;
        }, 7000)
        };
        this.touched=[];
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
        let touching = [];
        for(let i =0; i < circles.length; i++){
            if(Math.sqrt(Math.pow(circles[i].x-this.x,2)+(Math.pow(circles[i].y-this.y,2))) < CIRCLE_SIZE * 2){
                touching.push(circles[i]);
                if(circles[i].state === "sick" && this.state != "immune" && this.state != "sick")
                    if(this.state != "sick"){
                        if(Math.random() < 0.05){
                        this.state = "sick";
                        sickStat +=1
                        healthyStat -=1
                        setTimeout(() =>{
                            this.state = "immune";
                            immuneStat +=1
                            sickStat -=1;
                        }, 7000)
                        }
                    }                        
                }
        }
        for(let i = 0; i < this.touched.length; i ++){
            for(let i = 0; i < touching.length; i ++){
            }
        }
            

    }
        

}