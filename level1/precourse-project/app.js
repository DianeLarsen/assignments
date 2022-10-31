//Data Types - Create variable for each data type below using the example provided for a string 
//String - denoted/represented by " " ' ' - they are great for words,language
//var firstName = "Andrew"
//console.log(firstName)

var bestDoctor = "The 9th Doctor"
console.log(bestDoctor)

////////


//Number - anything of numerical value - just a number
//var age = 90
//console.log(age)

var doctorWhos = 13
console.log(doctorWhos)

////////



//Boolean - true or false 

var is9thBest = true
console.log("Is the 9th doctor the best true or false?", is9thBest)



/////////



//Array - are denoted/represented by [] - are great for holding multple pieces of data
//use bracket notation [] here with the array you created use 

var companions = ["Susan Foreman,", "Victoria Waterfield", "Liz Shaw,", "Sarah Jane Smith,", "Peri Brown,", "Mel Bush,", "Grace Holloway,", "Rose Tyler,", "Donna Noble,", "Amy Pond,", "River Song,",  "Graham O'Brien,"]

console.log("I,",companions[3],"traveled with the doctor.")


/////////





//Object - denoted/represented by {} - great for describing something in detail - like a billing address
// use dot notation . here with the object you created .

var ninthDoctor = {
  actorName: "Christopher Eccleston",
  height: "6ft",
  companions: ["Rose", "Adam", "Captain Jack", "Jackie", "Mickey"],
  age: 58,
  clothes: {
    jacket: "black leather jacket",
    shirt: "burgundy shirt",
    pants: "black pants",
    shoes: "black timberlands"
  },
  hasTwoHearts: true
 
}
 

//////////




//Create an object - use each datatype as a property
//Use dot and bracket notation to display your knowledge
//////////
console.log(ninthDoctor.clothes.jacket)
console.log(ninthDoctor.companions[0])
console.log(ninthDoctor["height"])
console.log(ninthDoctor.actorName)


//Condtional Statement
//if (this is true){ execute this code }
//  else if (this is true) {do this code instead!}
//  else {for anything else do this here!}

//using the variable provided below create a condional statement
//Using below example below to create your own conditional statement.
var doctorsNumOneEnemy = "Dalek"

if (doctorsNumOneEnemy === "Dalek") {
  console.log("Exterminate!")
} else if (doctorsNumOneEnemy === 'Slitheen') {
  console.log("Raxacoricofallapatorius!")
} else {
  console.log("Nestene Consciousness!")
}





// /////////



//For Loops - At their most elemetary form they are just creating an number line for us; starting at a number and ending at a number - these number are represented by a single variable, named i

//for (#1Step start point; #2Step end point; #4Step howtogetthere){
//    #3Step what to do 
//} 

//i = i + 1 same i++


//Create 1 for loop

for (var i = 1; i < 14; i++) {
  console.log("I am the #",i, "doctor" )
}






function notTheBest() {
  alert("Not the Best")
}

function isTheBest() {
  alert("Is the Best")
}


//////////////////
//level 0 curriculm last 5 videos cover this material "DOM"

//1. Create button with an ID on it in HTML
//2. Call Button into JS using document and getting element by its ID
//3. Set that button equal to a variable
//4. with that variable use dot notation to access the addeventlistener method


//var newButton = document.getElementById("button-one")
//newButton.addEventListener( "click", greeting )





document.getElementById("ninth").addEventListener("click", function () { console.log("You clicked the best doctor!") })

var button = document.getElementById("button")
button.addEventListener("click", function () {console.log("The 9th Doctor is the best") },)
button.addEventListener("click",function handleClick() {button.textContent = 'The 9th Doctor!';})

function changePicture() { 
  document.getElementById("allTheDocs").src="Versions_of_the_Doctor_heart.jpg"
}



























