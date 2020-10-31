let height = window.innerHeight;
let width = window.innerWidth;
let circle = new Circle();
let circles = [];
let sick = [];
let healthyStat = 99; 
let sickStat = 1;
let immuneStat = 0;
let start = Date.now();

function setup(){
    createCanvas(width,height);
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
}

function draw(){
    background("black");
    for(let i = 0; i < circles.length; i ++){
        circles[i].draw();
        circles[i].update();
    }
    textAlign("right", "top");
    textSize(35)
    fill("white")
    text((Date.now()-start)/1000, width, 0);
    textAlign("right", "top");
    textSize(25)
    
    fill("white")
    textAlign("right","top");
    textSize(35)
    text("Healthy: " + healthyStat, width, 100)
    textAlign("right","top");
    textSize(35)
    text("Sick: " + sickStat, width, 150)
    textAlign("right","top");
    textSize(35)
    text("Immune: " + immuneStat, width, 200)
    
}
    




