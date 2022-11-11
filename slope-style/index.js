// function collectAnimals(...animals) {  
//     console.log("animals", animals);
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "squirl"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]
function combineFruit(fruit, sweets, vegetables){
    
    return {fruit:fruit, sweets:sweets, vegetables:vegetables}
}

combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])
//=> {
 //     fruit: ["apple", "pear"],
//        sweets: ["cake", "pie"],
//        vegetables: ["carrot"]
 //    }
 function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
  parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  })


  function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}
//console.log(returnFirst("a", "b", "c", "d", "e"))

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    let [firstFav,secondFav,thirdFav] = arr
   
    return "My top three favorite activities are: " + firstFav + ", " + secondFav + ", and " + thirdFav;
}

//console.log(returnFavorites(favoriteActivities))
function combineAnimals(arr1, arr2, arr3) {
      let arr4 = [...arr1, ...arr2, ...arr3]
      return arr4
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

//console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// ["dog", "cat", "mouse", "jackolope", "platypus"]

function product(...nums) {
    return nums.reduce((acc, number) => acc * number, 1)
  }
 // console.log(product(5, 7, 2, 8, 4))

 function unshift(array, ...nums) {
    return [...array,...nums];
  }
  //console.log(unshift([1, 2, 3, 4], 5, 7, 2, 8, 4))

function populatePeople(names){
    return names.map(name=>{
        let [firstName, lastName] = name.split(" ");
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]