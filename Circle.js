const CIRCLE_SIZE = 15;
let INFECTION_RATE = 1;
let RECOVERY_RATE = 1;
const REINFECTION_RATE = 0.90;
const RERECOVERED_RATE = 0.55;
let VACCINATION_CHANCE = 0.3;
function isInArray(element, array){ 
    for(let i = 0; i < array.length; i ++){
        if(element === array[i]){
            return true;
        }
    }
    return false; 
}
let copyArray = array =>{
    let newArray = [];
    for(let i = 0; i < array.length; i ++){
        newArray.push(array[i]);
    }
    return newArray
}
class Circle{
    constructor(state){
        this.velocityX = (Math.random()*10) - 5;
        this.velocityY = (Math.random()*10) - 5;
        this.x = Math.random()*width;
        this.y = Math.random()*(height-100 - CIRCLE_SIZE) + 100 + CIRCLE_SIZE;
        this.state = state
        setTimeout(() =>{
            if(this.state === "healthy"){
                healthyStat-=1;
                this.state = "dead";
                deadStat += 1;
            }
            if(this.state === "sick"){
                sickStat -=1;
                this.state = "dead";
                deadStat += 1;
            }
            if(this.state === "recovered"){
                recoveredStat -=1;
                this.state = "dead";
                deadStat += 1;
            }
            if(this.state === "immune"){
                immuneStat -=1;
                this.state = "dead";
                deadStat += 1;
            }
            if(Math.random()<VACCINATION_CHANCE){
                let circle = new Circle("immune");
                circles.push(circle);
                immuneStat +=1;
            }
            
            if(Math.random()>=VACCINATION_CHANCE){
                let circle = new Circle("healthy");
                circles.push(circle);
                healthyStat +=1 
            }
            
        }, 15000)

        if(this.state === "sick"){
            setTimeout(() =>{
                if(this.state ==="sick"){
                    if(Math.random()<RECOVERY_RATE){
                    this.state = "recovered";
                    recoveredStat +=1
                    sickStat -=1;
                    // setTimeout(() =>{
                    //     if(Math.random()< REINFECTION_RATE){
                    //         this.state = "sick";
                    //         recoveredStat -=1;
                    //         sickStat +=1
                    //         setTimeout(() =>{
                    //             if(Math.random() < RERECOVERED_RATE){
                    //                 this.state = "recovered";
                    //                 recoveredStat +=1;
                    //                 sickStat -=1
                    //             }
                    //         }, 5000)
                    //     }
                    // }, 3000)
                    }
                }
                // else{
                //     this.state = "dead";
                //     deadStat +=1;
                //     sickStat-=1;
                    
                // }
            
            }, 7000)
        }
                
        this.touched=[];
    }

    draw(){
        if(this.state === "sick"){
            fill("red");
            ellipse(this.x, this.y, CIRCLE_SIZE, CIRCLE_SIZE)
        }
        if(this.state === "healthy"){
            fill("lime");
            ellipse(this.x, this.y, CIRCLE_SIZE, CIRCLE_SIZE)
        }
        if(this.state === "recovered"){
            fill("blue");
            ellipse(this.x, this.y, CIRCLE_SIZE, CIRCLE_SIZE)
        }
        if(this.state === "dead"){
            fill("black");
            noStroke();
            ellipse(this.x, this.y, CIRCLE_SIZE, CIRCLE_SIZE);
        }
        if(this.state === "immune"){
            fill("white");
            ellipse(this.x, this.y, CIRCLE_SIZE, CIRCLE_SIZE)
        }
    }

    update(){
        this.x += this.velocityX;
        this.y += this.velocityY;
        console.log(startSimulation);
        if(this.x > width || this.x < 0){
            this.velocityX = -this.velocityX
        }
        if(this.y > height || this.y < 100 + CIRCLE_SIZE){
            this.velocityY = -this.velocityY
        }
        let touching = [];
        for(let i =0; i < circles.length; i++){
            if(Math.sqrt(Math.pow(circles[i].x-this.x,2)+(Math.pow(circles[i].y-this.y,2))) < CIRCLE_SIZE * 2){
                touching.push(circles[i]);
            }
        }
        for(let i = 0; i < this.touched.length; i ++){
            if(this.touched[i] !== touching[i]){
                if(this.touched[i].state !== "recovered" && this.touched[i].state !== "healthy" && this.touched[i].state !== "dead" && this.touched[i].state !== "immune"){
                    if(this.state !== "sick" && this.state !== "recovered" && this.state !== "dead" && this.state !== "immune"){
                        if(Math.random() < INFECTION_RATE){
                        this.state = "sick";
                        sickStat +=1
                        healthyStat -=1
                        setTimeout(() =>{
                            if(this.state === "sick"){
                                if(Math.random() < RECOVERY_RATE ){
                                    this.state = "recovered";
                                    recoveredStat +=1
                                    sickStat -=1;
                                    // setTimeout(() =>{
                                    //     if(Math.random()< REINFECTION_RATE){
                                    //         this.state = "sick";
                                    //         recoveredStat -=1;
                                    //         sickStat +=1
                                    //         setTimeout(() =>{
                                    //             if(Math.random() < RERECOVERED_RATE){
                                    //                 this.state = "recovered";
                                    //                 recoveredStat +=1;
                                    //                 sickStat -=1
                                    //             }
                                    //         }, 5000)
                                    //     }
                                    // }, 3000)
                                }
                                // else{
                                //     this.state = "dead"
                                //     deadStat +=1;
                                //     sickStat -=1;
                                // }
                            }
                        }, 7000)
                        }  
                    }
                                      
                }
            }
            
        }
        this.touched = copyArray(touching);
            

    }
        

}