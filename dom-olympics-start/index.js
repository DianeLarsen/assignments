

var text = document.querySelector("#header").textContent
text = "JavaScript Made This!!"
header.append(text);
header.style.fontSize = "23px"
header.style.fontWeight = "bold"

var header1 = document.getElementById("header");

var html = "<p id:newP><span id= myName>Diane Larsen</span> <b>wrote the JavaScript</b></p>"
header1.insertAdjacentHTML("afterend", html)
var myName = document.getElementById("myName").style.color = "orange"


var myClasses = document.getElementsByClassName("message left")[0].textContent = 'Twinkle, twinkle little star';
var myClasses = document.getElementsByClassName("message right")[0].textContent = 'How I wonder what you are?';
var myClasses = document.getElementsByClassName("message left")[1].textContent = 'Up above the world so high';
var myClasses = document.getElementsByClassName("message right")[1].textContent = 'Like a diamond in the sky';

var resetConvo = document.getElementById("clear-button");
resetConvo.addEventListener("click", myFunction);
var resetStyle = document.getElementById("clear-button");
resetStyle.addEventListener("click", myFunction2);
function myFunction(){

document.getElementsByClassName("message left")[0].textContent = '';
document.getElementsByClassName("message right")[0].textContent = '';
document.getElementsByClassName("message left")[1].textContent = '';
document.getElementsByClassName("message right")[1].textContent = '';
}


function myFunction2(){
    var box1 = document.getElementsByClassName('message right')[0].style.backgroundColor = "white";
    var box1 = document.getElementsByClassName('message right')[1].style.backgroundColor = "white";
    var box2 = document.getElementsByClassName('message left')[0].style.backgroundColor = "white";
    var box2 = document.getElementsByClassName('message left')[1].style.backgroundColor = "white";
// box1.style.backgroundColor = "white";
// box2.style.backgroundColor = "white";

}




