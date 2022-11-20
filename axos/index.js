// GET's THE TODO's FROM THE DATABASE
function getData(){
    axios.get("https://api.vschool.io/diane/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}


// LISTS TO THE DOM
function listData(data){

    clearList()

    for(let i = 0; i < data.length; i++){
        
        const checkbox = document.createElement('input');
        const label = document.createElement('label');
        const labelTitle = document.createElement('label');
        const labelPrice = document.createElement('label');
        const labelDes = document.createElement('label');
        const lineBreak = document.createElement('br');
        const imgSpan = document.createElement('span');
        const imgShow = document.createElement('img');
        const edit = document.createElement("button");
        const del = document.createElement("button");
        const li = document.createElement("li")
        //Create button
        edit.textContent = "edit";
        del.textContent = "X";

            checkbox.type = "checkbox";
            // adds text to label element
        
            labelTitle.appendChild(document.createTextNode(data[i].title));
            labelPrice.appendChild(document.createTextNode(`   ${data[i].price || ""}  `));
            labelDes.appendChild(document.createTextNode(data[i].description));
            // links label and checkbox together
            
            label.appendChild(labelTitle);
            
            label.appendChild(labelPrice);
            
            label.appendChild(labelDes);
            

            li.appendChild(checkbox);
            li.appendChild(label);
          
            imgSpan.appendChild(imgShow);
            imgShow.src = data[i].imgUrl || ""
            
                li.appendChild(imgSpan);
            
            //creates a linebreak for clarity
            li.append(edit, del);
            
            //document.getElementById("list").append(li);
            todolist.appendChild(li);
            todolist.append(lineBreak);

            edit.classList.add("edit"); 

            del.addEventListener("click", () => {
                li.remove();
                axios.delete(`https://api.vschool.io/diane/todo/${data[i]._id}`)
                     .then(res => getData(res))
                     .catch(err => console.log(err))
              });
            
            edit.addEventListener("click", () => {
                
                const formInsert = document.createElement("form");
                const inputTitle = document.createElement("input");
                const inputPrice = document.createElement("input");
                const inputDes = document.createElement("input");
                const inputImg = document.createElement("input");
                const titleLabel = document.createElement('label');
                const priceLabel = document.createElement('label');
                const desLabel = document.createElement('label');
                const urlLabel = document.createElement('label');
                titleLabel.textContent = "  Title:  ";
                priceLabel.textContent = "  Price(USD):  ";
                desLabel.textContent = "  Description:  ";
                urlLabel.textContent = "  Image URL:  ";
                inputTitle.value = labelTitle.textContent;
                inputPrice.value = labelPrice.textContent;
                inputDes.value = labelDes.textContent;
                if (imgShow.src === "http://127.0.0.1:5500/"){
                        inputImg.value = "";   
                } else{
                inputImg.value = imgShow.src;
                }
                
                formInsert.appendChild(titleLabel);
                formInsert.appendChild(inputTitle);
                formInsert.appendChild(priceLabel);
                formInsert.appendChild(inputPrice);
                formInsert.appendChild(desLabel);
                formInsert.appendChild(inputDes);
                formInsert.appendChild(urlLabel);
                formInsert.appendChild(inputImg);
                
                        
            label.replaceWith(formInsert);
            edit.textContent = "save";

            edit.addEventListener("click", () => {
               
                labelTitle.textContent = inputTitle.value;
                labelPrice.textContent = inputPrice.value;
                labelDes.textContent = inputDes.value;
                imgShow.src = inputImg.value;
                const updateTodo = {
                    title: inputTitle.value,
                    price: inputPrice.value,
                    description: inputDes.value,
                    imgUrl: inputImg.value
                } 

                console.log(updateTodo)
                 axios.put(`https://api.vschool.io/diane/todo/${data[i]._id}`, updateTodo)
                     .then(res => getData(res))
                     .catch(err => console.log(err))
                formInsert.replaceWith(label);
                edit.textContent = "edit";
            });
           
            })
    
            
              };     
                
           //document.querySelector("#display-image").style.backgroundImage = `url(${data[i].img})`;
            //console.log(imgShow)
            
    }


function clearList(){
    const el = document.getElementById('todolist')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

getData()


// FORM FOR THE POST REQUEST
const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value || 0,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value 
    }
    
    todoForm.title.value = ""
    todoForm.price.value = ""
    todoForm.description.value = ""
    todoForm.imgUrl.value = ""
    
    axios.post("https://api.vschool.io/diane/todo", newTodo)
        .then(res => getData(res))
        .catch(err => console.log(err))
})


