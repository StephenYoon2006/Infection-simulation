document.getElementById("showHideStat").style.display="none";
document.getElementById("start").addEventListener("click", () =>{
    startSimulation = true;
    document.getElementById("infectionRate").style.position="relative";
    document.getElementById("infectionRate").style.top="0";
    document.getElementById("recoveryRate").style.position="relative";
    document.getElementById("recoveryRate").style.top="0";
    document.getElementById("vaccinationChance").style.position="relative";
    document.getElementById("vaccinationChance").style.top="0";
    document.getElementById("showHideStat").style.bottom="10";
    start = Date.now();
    document.getElementById("simulation");
    simulation.style.display = "block";
    document.getElementById("start").style.display = "none";
    document.getElementById("showHideStat").style.display="block";
    document.getElementById("showHideStat").addEventListener("click",()=>{
        if(showHideStat === false){
            showHideStat = true;
        }
        else if(showHideStat === true){
            showHideStat = false;
        }
    })
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
    rect(0,0,width,100)
})

document.getElementById("infectionRate").addEventListener("click",()=>{
    startSimulation = false;
    console.log(currentTime)
    let newInfectionRate = prompt("Set or change the infection rate(%): 0-100");
    if(newInfectionRate<=100 && newInfectionRate>=0){
        INFECTION_RATE = newInfectionRate/100;
    }
    if(newInfectionRate=== ""|| newInfectionRate===" "|| newInfectionRate==="  "){
        alert("Please enter a valid number");
        INFECTION_RATE=1;
    }
    startSimulation=true;
    
})
document.getElementById("recoveryRate").addEventListener("click",()=>{
    let newRecoveryRate = prompt("Set or change the recovery rate(%): 0-100");
    startSimulation = false;
    if(newRecoveryRate<=100 && newRecoveryRate>=0){
        RECOVERY_RATE = newRecoveryRate/100;
    }
    if(newRecoveryRate=== ""|| newRecoveryRate===" "|| newRecoveryRate==="  "){
        alert("Please enter a valid number");
        RECOVERY_RATE=1;
    }
    startSimulation = true;
})
document.getElementById("vaccinationChance").addEventListener("click",()=>{
    startSimulation = false;
    let newVaccinationChance = prompt("Set or change the vaccination chance(%): 0-100");
    if(newVaccinationChance<=100 && newVaccinationChance>=0){
        VACCINATION_CHANCE = newVaccinationChance/100;            
        
    } 
    if(newVaccinationChance=== ""|| newVaccinationChance===" "|| newVaccinationChance==="  "){
        alert("Please enter a valid number");
        VACCINATION_CHANCE=1;
    }
    startSimulation = true;
})