

var text = document.querySelector("#header").textContent
text = "JavaScript Made This!!"
header.append(text);
// var text1 = document.querySelector("#header").textContent
// text1 = "Diane Larsen "
// header.append(text1)
// var text2 = document.querySelector("#header").textContent
// text2 = "wrote the JavaScript"
// header.append(text2)

var header1 = document.getElementById("header");
// var newP = document.createElement("p")
var html = "<p id:newP><span id= myName>Diane Larsen</span> wrote the JavaScript</p>"
header1.insertAdjacentHTML("afterend", html)
var myName = document.getElementById("myName").style.color = "orange"

// var header1 = document.getElementById("header");
// var html = "<p>My new paragraph.</p>";
// header1.insertAdjacentHTML("afterend", html);