var myList = document.getElementById("list");
const form = document.addItem
var itemList = document.getElementById("title").required = true; // do not submit form unless there is something in the box
const all = document.getElementsByTagName('li'); // find all the li elements
var length = all.length; // find current length of li elements
// give all li elements this class
for (var i = 0; i < length; i++) {
    all[i].className = all[i].className + "itemLi";
  }
  var allSubjectName = document.querySelectorAll(".itemLi"); // find all elements with this class
  console.log("li"+ allSubjectName.length)

//   const all1 = document.getElementsByTagName('li.div'); // find all the li elements
// var length = all.length; // find current length of li elements
// // give all li elements this class
// for (var i = 0; i < length; i++) {
//     all1[i].className = all1[i].className + "divList";
//   }
//   var allSubjectName1 = document.querySelectorAll(".divList"); // find all elements with this class
//   console.log("div" + allSubjectName1.length)

form.addEventListener("submit", function(event){
    event.preventDefault()

    const itemInput = form.title.value; // get input from form
    var newLi = document.createElement("li"); //create li
    newLi.className += "itemLi";
    var divElem = document.createElement("div"); //create div
    var btnXElem = document.createElement("button"); //create X button
    var btnEditElem = document.createElement("button"); //create edit button
    btnXElem.textContent = "X"; //add text X to button
    btnXElem.className += "deleteItem";
    btnEditElem.textContent = "edit"; //add text edit to 
    btnEditElem.className += "editItem";
    btnEditElem.style.margin = "4px"; // fix the issue where the buttons are too close to each other
    divElem.textContent = itemInput; //take input and add it to list
    newLi.appendChild(divElem); // assing the div element to the li element
    newLi.appendChild(btnEditElem);  // adding the edit button to the li element
    newLi.appendChild(btnXElem);  // adding the X button to the li element
    var myList = document.getElementById("list");  //pulling the list 
    // var randomLine = document.querySelector("hr")
    myList.append(newLi); //adding it to the list
    myList.insertBefore(newLi, myList.children[3]) // supposed to add the next item before the hr element but adds 
    console.log(itemInput)
    
    form.title.value = "" //clear box after completed
    var allSubjectName = document.querySelectorAll(".itemLi");
    console.log(allSubjectName.length)
})
// function deleteBtn() {
//     var myList2 = document.getElementsByTagName("li");
//     for (var i = 0; i < myList2.length; i++) {
//         btnXElem.onclick = this.parentElement.style.display = "none";
//     }
//   }

// may be using this to set up edit somehow
// const allLi = document.getElementsByTagName('li');
// var length = allLi.length;
// var allSubjectName = document.querySelectorAll(".editItem");
// for (var i = 0; i < length; i++) {
//     allLi[i].className = allLi[i].className + " editItem";
//   }

  
  // a way to delete li's maybe
  
//    for (var index = 0; index <allSubjectName.length; index++){
//       allSubjectName[index].addEventListener("click", function(){
//          this.classList.toggle("active");
//       });
//       allSubjectName[index].querySelector(".deleteItem").addEventListener("click",
//       function(){
//          this.closest(".itemLi").remove();
//       });
      
//    }
  
// btnXElem.addEventListener("click", function(event){
//     event.preventDefault()
//     btnXElem.parentElement.style.display = "none";
// }

// need help adding it before the hr element
// need to find a way to delete items on the list
// need to find a way to edit items on the list, change the edit button to save until saved
