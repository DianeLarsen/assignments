// 1) Turn an array of numbers into a total of all the numbers**


function total(arr) {
   return arr.reduce(function(final, num){
    return final + num;
   })
   
}

console.log(total([1,2,3])); // 6





// 2) Turn an array of numbers into a long string of all those numbers.**


function stringConcat(arr) {
    return arr.reduce(function(final, num){
        return final+""+num
       })
}

console.log(stringConcat([1,2,3])); // "123"





// 3) Turn an array of voter objects into a count of how many people voted**


function totalVotes(arr) {
    return arr.reduce(function(final, voter){
        if(voter.voted){
            final++
        }
        return final
    }, 0)
       
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7



// Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.
 



// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once**


function shoppingSpree(arr) {
    return arr.reduce(function(final, num){
        return final + num.price;
       }, 0)
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005





// 5) Given an array of arrays, flatten them into a single array**


function flatten(arr) {
    return arr.reduce(function(flat, toFlatten){
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];



// Note: Take a look at Array.concat() to help with this one
 



// 6) Given an array of potential voters, return an object representing the results of the vote**

//Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    return arr.reduce(function(final, voter){
        if((voter.voted)&&(voter.age<26)){
          final.numYoungVotes++
        }else if((voter.voted)&&(voter.age>35)){  
            final.numOldVotesPeople++
        }else if((voter.voted)){
            final.numMidVotesPeople++
        }
        if(voter.age>35){
            final.numOldsPeople++
        }else if(voter.age<26){
            final.numYoungPeople++
        }else {
            final.numMidsPeople++
        }
        return final
    }, { numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 0,
        numMidsPeople: 0,
        numOldVotesPeople: 0,
        numOldsPeople: 0
      })
      
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/

// ### **Extra credit**

// Using AJAX, do a GET request to your own Github repositories endpoint. The URL will be `https://api.github.com/users/<YOUR GITHUB USERNAME HERE>/repos`.

// Once you get the data, use `.reduce()` to figure out how many `watchers` you have across all of your repositories. Don't be too disappointed if the number is 0. You're still new at this :)

// > Note: If you've learned how to use the axios library, you can do this in node. Otherwise, you'll want to run this code in the browser's JavaScript context and either use XMLHttpRequest or jQuery's AJAX methods, meaning you'll need an HTML page and an associated script tag for your JavaScript.
// >