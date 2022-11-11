 var name = "John"
 var age = 101

 function runForLoop(pets) {
     var petObjects = []
     for (var i = 0; i < pets.length; i++) {
         let pet = { type: pets[i] }
         let name;
         if (pets[i] === "cat") {
             name = "fluffy"
         } else {
             name = "spot"
         }
         console.log("pet name: ", name)
         pet.name = name
         petObjects.push(pet)
     }
     console.log("man name: ", name)
     return petObjects
 }

 runForLoop(["cat", "dog"])


 const carrots = ["bright orange", "ripe", "rotten"]

 function mapVegetables(arr) {
     return arr.map(carrot =>{ return{ type: "carrot", name: carrot }})
 }
 const people = [
     {
         name: "Princess Peach",
         friendly: false
     },
     {
         name: "Luigi",
         friendly: true
     },
     {
         name: "Mario",
         friendly: true
     },
     {
         name: "Bowser",
         friendly: false
     }
 ]

 function filterForFriendly(arr) {
     return arr.filter(person=> person.friendly)
 }
 console.log(filterForFriendly(people))

 function doMathSum(a, b) {
     return a + b
 }

 var produceProduct = (a, b) => a * b

 console.log(produceProduct(1,2))
 console.log(doMathSum(3,4))
 let person = {firstName: "Jane", lastName: "Doe", age: 100}
 console.log(`Hi ${person.firstName} ${person.lastName}, how does it feel to be ${person.age}?`)

 const animals = [
     {
         type: "dog",
         name: "theodore"
     },
     {
         type: "cat",
         name: "whiskers"
     },
     {
         type: "pig",
         name: "piglette"
     },
     {
         type: "dog",
         name: "sparky"
     }
  ];

  function filterForDogs(arr) {
      return arr.filter(animal => animal.type === "dog")
  }
  console.log(filterForDogs(animals))


 let greeting = (location,name) => `Hi ${name}!\nWelcome to ${location}.\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`

 console.log(greeting("Hawaii", "Janice"))

// Hi Janice!

// Welcome to Hawaii. 

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.
