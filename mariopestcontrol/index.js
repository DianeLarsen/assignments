const buttonAdd = document.getElementById("totalCost");

let submitTotal = buttonAdd.addEventListener("click", function findTotal(){
    let goomba = document.getElementById("goombas").value * 5;
    let bobombs = document.getElementById("bobOmbs").value * 7;
    let cheepcheep = document.getElementById("cheeps").value * 11;
    document.querySelector("#totalDue").textContent = parseInt(goomba) + parseInt(bobombs) + parseInt(cheepcheep)
    //clearInputs()
}
)

const inputs = document.getElementsByTagName("input"); 
function clearInputs(){
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
      
    }
}