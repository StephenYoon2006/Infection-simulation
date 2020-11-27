let height = window.innerHeight-65;
let width = window.innerWidth;
let circle = new Circle();
let circles = [];
let sick = [];
let healthyStat = 99; 
let sickStat = 1;
let recoveredStat = 0;
let deadStat = 0;
let immuneStat = 0;
let start = Date.now();
let lastRectPosition = 0;
function setup(){
    let canvas = createCanvas(width,height);
    canvas.parent("simulation");
    noStroke();
    for(let i = 0; i < 99; i ++){
        setTimeout(()=>{
            let circle = new Circle("healthy");
            circles.push(circle);
        },i*100) 
    }
    for(let i = 0; i < 1; i++){
        setTimeout(()=>{
            let sickCircle = new Circle("sick");
            circles.push(sickCircle);
        }, 3000)
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
    fill("skyblue")
    text("Time: "+(Date.now()-start)/1000, width, 500);
    textAlign("right", "top");
    textSize(25)
    fill("white")
    textAlign("right","top");
    textSize(35)
    fill("lime")
    text("Healthy: " + healthyStat, width, 100)
    textAlign("right","top");
    textSize(35)
    fill("white")
    text("Immune: " + immuneStat, width, 150)
    textAlign("right","top");
    textSize(35)
    fill("red")
    text("Sick: " + sickStat, width, 200)
    textAlign("right","top");
    textSize(35)
    fill("blue")
    text("Recovered: " + recoveredStat, width, 250)
    fill("purple")
    text("Dead: " + deadStat, width, 300);
    fill("red")    
    text("Infection Rate: " +INFECTION_RATE * 100 + "%", width ,350)
    noStroke();
    fill("blue")
    text("Recovery Rate: " +RECOVERY_RATE * 100 + "%", width ,400)
    fill("white")
    text("Vaccination chance: " + Math.round(VACCINATION_CHANCE * 100)/1 + "%", width ,450)
    let healthyPercent = healthyStat;
    let sickPercent = sickStat;
    let recoveredPercent = recoveredStat;
    let deadPercent = deadStat;
    let immunePercent = immuneStat;
    if(frameCount%5===0){
        noStroke();
        fill("white");
        rect(lastRectPosition, 0,0.5, immunePercent);
        fill("blue");
        rect(lastRectPosition, immunePercent ,0.5,recoveredPercent);
        noStroke();
        fill("lime");
        rect(lastRectPosition,immunePercent +recoveredPercent, 0.5, healthyPercent);
        noStroke();
        fill("red");
        rect(lastRectPosition, immunePercent+healthyPercent+recoveredPercent, 0.5, sickPercent);
        noStroke();
        
        noStroke();
        rectangles();

    }

}

function rectangles(){
    if(lastRectPosition < width){
        lastRectPosition += 0.4;
    }
}
    




