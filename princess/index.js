const power = ["Dead", "Small", "Big", "Powered Up"]

class Player{
    constructor(name, totalCoins, status, hasStar){
    this.name = name;
    this.totalCoins = totalCoins;
    this.status = status;
    this.hasStar = hasStar;
    }
    
}
function setName(namePicked){
    //sets name to either Mario or Luigi
}
function gotHit(namePicked){
    //status will change from "Powered Up" to "Big" to "Small" to "Dead"
}
function gotPowerup(){
    let i = power.indexOf(Player.status);
    if(i >= 0 && i < power.length - 1){
      let nextItem = power[i + 1]
      return nextItem
    }
    
    Player.status = nextItem
    console.log(this.status)
    //add i to index of 
    //increases life and if powered up gets a start
    if (this.status == "Powered Up"){
        hasStar = true
    }else{
        hasStar = false
    }
    
    
}
function addCoin(){
    //adds to total coins
}
function print(){
    // Name: Luigi,
    // Status: Small, etc, etc
    // totalCoins: 
    // starProperties:
}



// setInterval(() => {
  function randomRange() {
    return Math.floor(Math.random() * 3);
    }
    //0: gotHit()
    //1: gotPowerup()
    //2: addCoin()
    // then print()
//}   
// }, interval);

let mario = new Player("Mario", 0 ,"Big", false)
//console.log(mario.totalCoins)
console.log(`Name: ${mario.name}\nStatus: ${mario.status}\nTotal Coins: ${mario.totalCoins}`)
//console.log(mario.gotPowerup())
console.log(mario.status)