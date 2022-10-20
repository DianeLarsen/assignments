var myList = document.getElementById("list");
const form = document.addItem
var itemList = document.getElementById("title").required = true; // do not submit form unless there is something in the box
const allLi = document.getElementsByTagName('li'); // find all the li elements
var length = allLi.length; // find current length of li elements
// give all li elements this class
for (var i = 0; i < length; i++) {
    allLi[i].className = allLi[i].className + "itemLi";
    allLi[i].id = allLi[i].id + "itemLi"+i;
  }
  var allSubjectName = document.querySelectorAll(".itemLi"); // find all elements with this class
  console.log("li "+ allSubjectName.length)





const allButton = document.getElementsByTagName('button'); // find all the button elements
var length = allButton.length; // find current length of button elements

// give all even button elements these classes

for (let i = 1; i < length; i++) {
  if (i % 2 !== 0){
    allButton[i].className = allButton[i].className + "editItem";
    console.log([i])

  } else if((i % 2 == 0)){
    allButton[i].className = allButton[i].className + "deleteItem";
   console.log([i])
  
  }
}
  

  var allXName = document.querySelectorAll(".deleteItem"); 
  var allEditName = document.querySelectorAll(".editItem");// find all elements with this class
  console.log("X Button " + allXName.length);
  console.log("Edit Button " + allEditName.length);



form.addEventListener("submit", function(event){
    event.preventDefault()

    const itemInput = form.title.value; // get input from form
    let newLi = document.createElement("li"); //create li
    newLi.className += "itemLi";
    newLi.id += "itemLi";
    let divElem = document.createElement("div"); //create div
    let btnXElem = document.createElement("button"); //create X button
    let btnEditElem = document.createElement("button"); //create edit button
    btnXElem.textContent = "X"; //add text X to button
    btnXElem.className += "deleteItem";
    btnEditElem.textContent = "edit"; //add text edit to 
    btnEditElem.className += "editItem";
    btnEditElem.style.margin = "4px"; // fix the issue where the buttons are too close to each other
    divElem.textContent = itemInput; //take input and add it to list
    newLi.appendChild(divElem); // assing the div element to the li element
    newLi.appendChild(btnEditElem);  // adding the edit button to the li element
    newLi.appendChild(btnXElem);  // adding the X button to the li element
    let myList = document.getElementById("list");  //pulling the list 

    myList.prepend(newLi); //adding it to the list

       
    form.title.value = "" //clear box after completed
    let allSubjectName = document.querySelectorAll(".itemLi");
    console.log("Li" + allSubjectName.length)
    var allSubjectDelete = document.querySelectorAll(".deleteItem");
    var allSubjectEdit = document.querySelectorAll(".editItem");
    
    for (let i = 0; i < allSubjectDelete.length; i++) {
      const deleteBtn = document.getElementsByClassName("deleteItem");
     deleteBtn[i].addEventListener("click", function(e) {
        console.log("this is working")
      const tgt = e.target;
      if (tgt.classList.contains('deleteItem')) tgt.closest('li').remove();
     })
    
    }
    return(itemInput)
})
var allSubjectDelete = document.querySelectorAll(".deleteItem");
var allSubjectEdit = document.querySelectorAll(".editItem");




for (let i = 0; i <= 2; i++) {
  const deleteBtn = document.getElementsByClassName("deleteItem");
 deleteBtn[i].addEventListener("click", function(e) {
    console.log("delete this is working")
  const tgt = e.target;
  if (tgt.classList.contains('deleteItem')) tgt.closest('li').remove();
 })

}


var pullDiv = document.querySelector("li[id = itemLi0] div");
console.log(pullDiv.innerText)




//need to find a way to label new li's with unique id
//need to take text from pullDiv and put into input box and then after editing alow it to be put back into same div 

// for (let i = 0; i <= 2; i++) {
// const editItem = document.getElementsByClassName("editItem");
// editItem[i].addEventListener('click', function(e){
//   console.log("edit this is working")
//   const editItem = document.getElementsByClassName("editItem");
//   editItem[i].textContent = 'save';
//   var text = document.getElementById('title');
//   text.value = 
//   const tgt = e.target;
//   if (tgt.classList.contains('editItem')) tgt.closest('div').console.log(textContent);
  
// })
// }

// input id = title
//document.getElementById("button").addEventListener('click', function () {
//  var text = document.getElementById('text');
 // text.value += ' after clicking';
//});


// function addRemoveAttr(){
//   var contenteditable = document.getElementById('txt1').contentEditable;
  
//   if(contenteditable == 'inherit' || contenteditable == 'false'){
//    document.getElementById('txt1').contentEditable = true;
//   }else{
//    document.getElementById('txt1').contentEditable = false;
//   }
//  }
