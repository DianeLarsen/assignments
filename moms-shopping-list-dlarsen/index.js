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

var counterLi = 0
var counterDiv = 0


form.addEventListener("submit", function(event) {
    event.preventDefault()

    let itemInput = form.title.value; // get input from form
    let newLi = document.createElement("li"); //create li
    newLi.className += "itemLi"; // give new li a class name
    newLi.setAttribute("id", "itemLi" + counterLi ++); // give new li a unique ID
    let divElem = document.createElement("div"); //create div
    divElem.setAttribute("id", "itemDiv" + counterDiv ++); // give new div a unique ID
    let btnXElem = document.createElement("button"); //create X button
    let btnEditElem = document.createElement("button"); //create edit button
    btnXElem.textContent = "X"; //add text X to button
    btnXElem.className += "deleteItem"; // give delete button a class
    btnEditElem.textContent = "edit"; //add text edit to 
    btnEditElem.className += "editItem"; // give edit button a class
    btnEditElem.style.margin = "4px"; // fix the issue where the buttons are too close to each other
    divElem.textContent = itemInput; //take input and add it to list
    newLi.appendChild(divElem); // adding the div element to the li element
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
        console.log("delete is working")
      const tgt = e.target;

      if (tgt.classList.contains('deleteItem')) tgt.closest('li').remove();
     })
     
     for (let i = 0; i < allSubjectEdit.length; i++) {
      //const editBtn = document.getElementsByClassName("editItem");
      allSubjectEdit[i].addEventListener("click", function(e){
        console.log("target: ", e.target.closest('li').children[0])
        // let item = e.target.closest('li').children[0]
        console.log("allsubjectEdit: ", allSubjectEdit[i])
          console.log("editbutn clicked,id:",allSubjectEdit[i].parentElement.children[0].getAttribute('id'))
          const pullId= e.target.closest('li').children[0].getAttribute('id')
          const pullDiv = document.getElementById(pullId);
          pullDiv.setAttribute("contenteditable","true");
          pullDiv.style.border = "thin solid #0000FF"
          /// create a new input field, 
          // append it to the li
          // add a save btn
          // add an eventlister to the save btn 
            // inside of event lisener: 
            // take the text from the new input field 
            // pullDiv.textContent = inputField.value
          // let text = pullDiv.textContent
          // form.title.value = text
          
          
          //const editItem = document.getElementsByClassName("editItem");
          allSubjectEdit[i].textContent = 'save';
          if (allSubjectEdit[i].textContent == 'save'){
            console.log("edit is working")
            allSubjectEdit[i].addEventListener("click", function(){
            //itemInput = form.title.value; // get input from form
            pullDiv.setAttribute("contenteditable","false");
            pullDiv.style.border = null   
            allSubjectEdit[i].textContent = 'edit';
             })
          }
        })
        // return(itemInput)
      }
    }
  })
    
          
        



  


//can only edit once, how to make it edit more