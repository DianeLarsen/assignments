 try{
 function sum(x, y){
     //check data types first and throw error
     if((typeof x == "number")&&(typeof y == "number")){
     return x + y;
   }else{
     throw "these are not numbers"
   }
  
 } 
 console.log(sum("2",2))
 }
 catch(err){
     console.log(err)
 }







function sum2(x, y){
     //check data types first and throw error
    
     return x + y;
   }
 try{
     throw sum2(1,2)
 } 
 catch(err){
     console.log(err)
 }

 var user = {username: "sam", password: "123abc"};
 try{
function login(username, password){
    if (username != user.username){
        throw "The username is incorrect"
    } else if (password != user.password){
        throw "The password is incorrect"
    } else{
        console.log("login successful!")
    }
  //check credentials
  return (username, password)
}
console.log("check: "+login("SAM","123abc"))
 }
 catch(err){
    console.log("catch: "+ err)
 }