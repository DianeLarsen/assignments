axios.get('https://swapi.dev/api/people/1/')
  .then(function (response) {
    // handle success
    console.log(response.data.name);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })



const arr1 = [ 1, 3, 5 ]
const arr2= [ 2, 4, 6 ]
const arr3 = [...arr1, ...arr2 ]
console.log(arr3)


const people = [ "John", "Adam", "Amber" ]

function peopleElements(arr) {
    return arr.map(name => `<h1>${name}</h1}`)
 }


console.log(peopleElements(people))
// "Expected Output: [ "<h1>John</h1>", "<h1>Adam</h1>", "<h1>Amber</h1>" ]
