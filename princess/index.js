const power = ["Dead", "Small", "Big", "Powered Up"]

class Player{
    constructor(name, totalCoins, status, hasStar ){
    this.name = name;
    this.totalCoins = totalCoins || 0;
    this.status = status || "Big";
    this.hasStar = hasStar || false;
    }
 }
const user = new Player

function gotPowerup(){
    if (user.status == "Powered Up" && user.hasStar == false){
        user.hasStar = true
        console.log("Congratulations!  You got a star!")
    }else if(user.status != "Powered Up"){    
        let i = power.indexOf(user.status);
        let nextItem = power[i + 1]
        user.status = nextItem
    }else{
        return
        
    }
}
function setName(){
    let randomPlayer = Math.floor(Math.random() * 100)
    if (randomPlayer < 50){
        user.name = "Mario"
    } else{
        user.name = "Luigi"
    }
}
function printIt(){
    return `Name: ${user.name}\nStatus: ${user.status}\nTotal Coins: ${user.totalCoins}`
    
}
function gotHit(){
    if (user.status == "Powered Up" && user.hasStar == true){
        console.log("Your star protected you!")
        user.hasStar = false
    }else{   
        let i = power.indexOf(user.status);
        let prevItem = power[i - 1]
        user.status = prevItem
    }
}

function addCoin(){
    return user.totalCoins++
}
function randomRange() {
    return Math.floor(Math.random() * 3);
}


setInterval(() => {
    if (user.name == undefined){
        setName()
    }
    if (user.status == "Dead"){
        console.log("You lost the game! You died!")
        console.log(printIt())
        console.log(`Your final score was ${user.totalCoins}`)
        process.exit()
    }
    console.log(printIt())
   
    if (user.hasStar == true){
        console.log("You have a star")
    }
    console.log("\n")
    randomRange() 
    if (randomRange()===0){
            gotHit()
    } else if (randomRange()===1){
            gotPowerup()
    } else {
            addCoin()
    }
    }   
, 1250);




