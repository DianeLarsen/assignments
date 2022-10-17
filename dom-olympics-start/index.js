
//adds text and style to header for qulifier
var text = document.querySelector("#header").textContent
text = "JavaScript Made This!!"
header.append(text);
header.style.fontSize = "23px"
header.style.fontWeight = "bold"
//adds drop box options
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

//adds next line of text and style for qulifier
var deleteStuff = document.querySelector(".messages");
deleteStuff.setAttribute('id', 'message');
var header1 = document.getElementById("header");

var html = "<p id:newP><span id= myName>Diane Larsen</span> <b>wrote the JavaScript</b></p>"
header1.insertAdjacentHTML("afterend", html)
var myName = document.getElementById("myName").style.color = "orange"

//adding new text for Bronze

var myClasses = document.getElementsByClassName("message left")[0].textContent = 'Twinkle, twinkle little star';
var myClasses = document.getElementsByClassName("message right")[0].textContent = 'How I wonder what you are?';
var myClasses = document.getElementsByClassName("message left")[1].textContent = 'Up above the world so high';
var myClasses = document.getElementsByClassName("message right")[1].textContent = 'Like a diamond in the sky';
//adding function to clear button for Bronze
var resetConvo = document.getElementById("clear-button");
resetConvo.addEventListener("click", clearBox);
var mySpecificClass = document.querySelectorAll(".message")
var mySpecificClassRight = document.querySelectorAll(".right")
var mySpecificClassLeft = document.querySelectorAll(".left")

console.log(mySpecificClass.length);

// function myFunctionClearTextBox(){
//     for (let i = 0; i < mySpecificClass.length; i++) {
//         document.querySelectorAll(".message")[i].textContent = '';
//     }
//     for (let i = 0; i < mySpecificClass.length; i++) {
//     document.querySelectorAll(".message")[i].style.backgroundColor = "transparent";
//     }

// }
function clearBox(message)
{
    document.getElementById("message").innerHTML = "";
}
//add function and add additional themnes for Silver
var selectTheme = document.getElementById("theme-drop-down");
selectTheme.addEventListener("change", selectDropdown);

function selectDropdown(){
var select = document.getElementById('theme-drop-down');
var value = select.options[select.selectedIndex].value;
if (value == "theme-one"){
    for (let i = 0; i < mySpecificClassRight.length; i++){
    document.getElementsByClassName('message right')[i].style.backgroundColor = "lightblue";
    for (let i = 0; i < mySpecificClassLeft.length; i++){
    document.getElementsByClassName('message left')[i].style.backgroundColor = "burlywood";
    }
    }
} else if(value == "theme-two") {
    for (let i = 0; i < mySpecificClassRight.length; i++){
        document.getElementsByClassName('message right')[i].style.backgroundColor = "red";
      }  for (let i = 0; i < mySpecificClassLeft.length; i++){
        document.getElementsByClassName('message left')[i].style.backgroundColor = "black";
        document.getElementsByClassName('message left')[i].style.color = "white";
        }
        
} else if (value == "theme-three"){
 
    for (let i = 0; i < mySpecificClassRight.length; i++){
        document.getElementsByClassName('message right')[i].style.backgroundColor = "green";
        }  for (let i = 0; i < mySpecificClassLeft.length; i++){
        document.getElementsByClassName('message left')[i].style.backgroundColor = "yellow"; 
        document.getElementsByClassName('message left')[i].style.color = "black";
        }
    
} else if (value == "theme-four") {
 
    for (let i = 0; i < mySpecificClassRight.length; i++){
        document.getElementsByClassName('message right')[i].style.backgroundColor = "purple";
        }  for (let i = 0; i < mySpecificClassLeft.length; i++){
        document.getElementsByClassName('message left')[i].style.backgroundColor = "orange";
        }
    
}
console.log(message.value); 
}


const submitText = document.querySelector("form[name='message'] button");
console.log(submitText)
submitText.addEventListener("click", myFunctionEnterText);
const addInput = document.querySelector('input');
let count = 2;
submitText.addEventListener("click", function() {
        count += 1;
        console.log(count);
        })
function myFunctionEnterText(e){
    e.preventDefault();
    console.log("is this working?");
    // let count = 2;
    // submitText.addEventListener("click", function() {
    //     count += 1;
    //     console.log(count);
    //   });
    if (addInput.value === '') {
        alert('Enter text please!!!');
      } else {
        var messageList = document.querySelector(".messages");
        var inputChat = document.getElementById("input");
        var chatMessages = document.createElement("div");
        chatMessages.classList.add("div.message");
        chatMessages.appendChild(document.createTextNode(inputChat.value));
        messageList.appendChild(chatMessages);
        
        if (count % 2 == 0){
            chatMessages.style.backgroundColor = "burlywood";
            chatMessages.style.alignSelf = "flex-start";
            chatMessages.style.margin = "10px 0px";
            chatMessages.style.padding = "5px"; 
            chatMessages.style.display = "flex";
            chatMessages.style.flexDirection = "column";
        } else {
            chatMessages.style.backgroundColor = "lightblue";
            chatMessages.style.alignSelf = "flex-end";
            chatMessages.style.margin = "10px 0px";
            chatMessages.style.padding = "5px";
            chatMessages.style.display = "flex";
            chatMessages.style.flexDirection = "column";

        }

}

}
//console.log(inputChat);
console.log(mySpecificClass.length);
console.log(mySpecificClass);
//mySpecificClass.splice((message.lenth+1), messageList)
console.log(mySpecificClass[0]);

//let list = document.querySelector("#app").childNodes; // node list
//list = list[0]; // selecting the first element in node list
//list.parentNode.appendChild(/* new elements */); // adding to parent of current node