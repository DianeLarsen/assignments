

var text = document.querySelector("#header").textContent
text = "JavaScript Made This!!"
header.append(text);
header.style.fontSize = "23px"
header.style.fontWeight = "bold"

var greenYellow = document.getElementById("theme-drop-down");
  var option = document.createElement("option");
  option.value = "theme-three";
  option.text = "green/yellow";
  greenYellow.add(option);

var purpleOrange = document.getElementById("theme-drop-down");
  var option = document.createElement("option");
  option.value = "theme-four";
  option.text = "purple/orange";
  purpleOrange.add(option);

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


}
function myFunctionTheme2(){
    var box1 = document.getElementsByClassName('message right')[0].style.backgroundColor = "red";
    var box1 = document.getElementsByClassName('message right')[1].style.backgroundColor = "red";
    var box2 = document.getElementsByClassName('message left')[0].style.backgroundColor = "black";
    var box2 = document.getElementsByClassName('message left')[0].style.fontColor = "white";
    var box2 = document.getElementsByClassName('message left')[1].style.backgroundColor = "black";
    var box2 = document.getElementsByClassName('message left')[1].style.fontColor = "white";
}



var selectTheme = document.getElementById("theme-drop-down");
selectTheme.addEventListener("change", selectDropdown);

function selectDropdown(){
var select = document.getElementById('theme-drop-down');
var value = select.options[select.selectedIndex].value;
if (value == "theme-one"){
    var box1 = document.getElementsByClassName('message right')[0].style.backgroundColor = "lightblue";
    var box1 = document.getElementsByClassName('message right')[1].style.backgroundColor = "lightblue";
    var box2 = document.getElementsByClassName('message left')[0].style.backgroundColor = "burlywood";
    var box2 = document.getElementsByClassName('message left')[1].style.backgroundColor = "burlywood";
    
} else if(value == "theme-two") {
    var box1 = document.getElementsByClassName('message right')[0].style.backgroundColor = "red";
    var box1 = document.getElementsByClassName('message right')[1].style.backgroundColor = "red";
    var box2 = document.getElementsByClassName('message left')[0].style.backgroundColor = "black";
    var box2 = document.getElementsByClassName('message left')[0].style.color = "white";
    var box2 = document.getElementsByClassName('message left')[1].style.backgroundColor = "black";
    var box2 = document.getElementsByClassName('message left')[1].style.color = "white";
} else if (value == "theme-three"){
 
    var box1 = document.getElementsByClassName('message right')[0].style.backgroundColor = "green";
    var box1 = document.getElementsByClassName('message right')[1].style.backgroundColor = "green";
    var box2 = document.getElementsByClassName('message left')[0].style.backgroundColor = "yellow";
    var box2 = document.getElementsByClassName('message left')[1].style.backgroundColor = "yellow";
    
} else if (value == "theme-four") {
 
    var box1 = document.getElementsByClassName('message right')[0].style.backgroundColor = "purple";
    var box1 = document.getElementsByClassName('message right')[1].style.backgroundColor = "purple";
    var box2 = document.getElementsByClassName('message left')[0].style.backgroundColor = "orange";
   
    var box2 = document.getElementsByClassName('message left')[1].style.backgroundColor = "orange";
    
}
console.log(value); 
}