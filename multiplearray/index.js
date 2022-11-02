var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfAge(arr){
    return arr.filter(num =>{
        if(num.age > 18){return true }}).sort((a, b) => a.lastName.localeCompare(b.lastName)).map(showInfo=>{
    return "<li>"+showInfo.firstName+" "+showInfo.lastName+" is " +showInfo.age+"</li>"})
}
 console.log(sortedOfAge(peopleArray));
 
 /*
 Output:
 [
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>"
 ]
 */
 var newPeople = [
    {
        firstName: "Diane",
        lastName: "Larsen",
        age: 44
    },
    {
        firstName: "Paula",
        lastName: "Abdul",
        age: 60
    }
 ]

function newArray(arr1, arr2){
    var combinedArr = arr1.concat(arr2);
    var newStry = combinedArr.filter(str=>{ return str.lastName.charAt(str.lastName.length-1) === "y"});
    var newStra = combinedArr.filter(str=>{ return str.lastName.charAt(str.lastName.length-1) === "a"});
    
    for (let i = 0; i < newStra.length; i++) {
        const indexOfObjecta = combinedArr.findIndex(object => {
            return object.firstName === newStra[i].firstName;
        });
        combinedArr.splice(indexOfObjecta, 1);
    }
      
    for (let i = 0; i < newStry.length; i++) {
        const indexOfObjecty = combinedArr.findIndex(object => {
            return object.firstName === newStry[i].firstName;
        });
        combinedArr.splice(indexOfObjecty, 1);
    }       
combinedArr.splice(1, 1)
combinedArr.reverse()

return combinedArr

}

console.log(newArray(peopleArray, newPeople));