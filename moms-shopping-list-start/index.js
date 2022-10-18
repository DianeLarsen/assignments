var newLi = document.createElement("li")
newLi.textContent = "3"
var myList = document.getElementById("list")
myList.append(newLi)

const form = document.addItem

form.addEventListener("submit", function(event){
    event.preventDefault()
    const itemInput = form.title.value
    var newLi = document.createElement("li")
    newLi.textContent = itemInput
    var myList = document.getElementById("list")
    myList.append(newLi)
    form.title.value = ""
})