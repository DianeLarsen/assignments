const addNums = document.getElementById('addNums'); // divs for style
const subtractNums = document.getElementById('subtractNums');
const multiplyNums = document.getElementById('multiplyNums');

const buttonAdd = document.getElementById("buttonAdd"); // buttons for submitting
const buttonSub = document.getElementById("buttonSub");
const buttonMul = document.getElementById("buttonMul");

const inputs = document.getElementsByTagName("input"); 

let addResults = buttonAdd.addEventListener("click", function(){
   let addNum1 = document.getElementById('addNum1').value
   let addNum2 = document.getElementById('addNum2').value
   document.querySelector("#addResults").textContent = parseInt(addNum1) + parseInt(addNum2)
   
   clearInputs()
});
let subtactResults = buttonSub.addEventListener("click", function(){
    let subNum1 = document.getElementById('subNum1').value
    let subNum2 = document.getElementById('subNum2').value
    document.querySelector("#subtractResults").textContent = parseInt(subNum1) - parseInt(subNum2)
   
    clearInputs()
 });
let multiplyResults = buttonMul.addEventListener("click", function(){
    let mulNum1 = document.getElementById('mulNum1').value
    let mulNum2 = document.getElementById('mulNum2').value
    document.querySelector("#multiplyResults").textContent = parseInt(mulNum1) * parseInt(mulNum2)
    
    clearInputs()
 });

function clearInputs(){
for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  
}
}




