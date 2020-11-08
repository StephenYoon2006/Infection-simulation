let height = window.innerHeight;
let width = window.innerWidth;
let circle = new Circle();
let circles = [];
let sick = [];
let healthyStat = 99; 
let sickStat = 1;
let immuneStat = 0;
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
        let immune = new Circle("immune")
        circles.push(immune)
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
    text("Time: "+(Date.now()-start)/1000, width, 250);
    textAlign("right", "top");
    textSize(25)
    
    fill("white")
    textAlign("right","top");
    textSize(35)
    fill("green")
    text("Healthy: " + healthyStat, width, 100)
    textAlign("right","top");
    textSize(35)
    fill("red")
    text("Sick: " + sickStat, width, 150)
    textAlign("right","top");
    textSize(35)
    fill("blue")
    text("Immune: " + immuneStat, width, 200)
    let healthyPercent = healthyStat;
    let sickPercent = sickStat;
    let immunePercent = immuneStat;
    fill("blue");
    rect(lastRectPosition, 0,0.5,immunePercent);
    fill("green");
    rect(lastRectPosition,0+immunePercent, 0.5, healthyPercent);
    fill("red");
    rect(lastRectPosition, healthyPercent+immunePercent, 0.5, sickPercent);
    fill("yellow")
    text("Infection Rate: " +INFECTION_RATE * 100 + "%", width ,300)
    rectangles();

}

function rectangles(){
    lastRectPosition += 0.5;
}
    




