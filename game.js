let height = window.innerHeight;
let width = window.innerWidth;
let circle = new Circle();
let circles = [];
let sick = [];
let healthyStat = 99; 
let sickStat = 1;
let recoveredStat = 0;
let deadStat = 0;
let start = Date.now();
let lastRectPosition = 0;
function setup(){
    createCanvas(width,height);
    noStroke();
    for(let i = 0; i < 99; i ++){
        let circle = new Circle("healthy");
        circles.push(circle);
    }
    for(let i = 0; i < 1; i++){
        let sickCircle = new Circle("sick");
        circles.push(sickCircle);
    }
    for(let i = 0; i < 0; i ++){
        let recovered = new Circle("recovered")
        circles.push(recovered)
    }
    fill("grey");
    rect(0,0,width,100);
}

function draw(){
    fill("black");
    rect(0,100,width,height-100)
    for(let i = 0; i < circles.length; i ++){
        circles[i].draw();
        circles[i].update();
    }
    textAlign("right", "top");
    textSize(35)
    fill("white")
    text("Time: "+(Date.now()-start)/1000, width, 300);
    textAlign("right", "top");
    textSize(25)
    
    fill("white")
    textAlign("right","top");
    textSize(35)
    fill("lime")
    text("Healthy: " + healthyStat, width, 100)
    textAlign("right","top");
    textSize(35)
    fill("red")
    text("Sick: " + sickStat, width, 150)
    textAlign("right","top");
    textSize(35)
    fill("blue")
    text("Recovered: " + recoveredStat, width, 200)
    fill("purple")
    text("Dead: " + deadStat, width, 250);
    let healthyPercent = healthyStat;
    let sickPercent = sickStat;
    let recoveredPercent = recoveredStat;
    let deadPercent = deadStat;
    noStroke();
    fill("blue");
    rect(lastRectPosition, 0,0.5,recoveredPercent);
    noStroke();
    fill("lime");
    rect(lastRectPosition,0+recoveredPercent, 0.5, healthyPercent);
    noStroke();
    fill("red");
    rect(lastRectPosition, healthyPercent+recoveredPercent, 0.5, sickPercent);
    noStroke();
    fill("purple");
    rect(lastRectPosition, healthyPercent+recoveredPercent+sickPercent, 0.5, deadPercent);
    noStroke();
    fill("yellow")
    text("Infection Rate: " +INFECTION_RATE * 100 + "%", width ,350)
    noStroke();
    fill("lime")
    text("Recovery Rate: " +RECOVERY_RATE * 100 + "%", width ,400)
    rectangles();
}

function rectangles(){
    if(lastRectPosition < width){
        lastRectPosition += 0.65;
    }
}
    




