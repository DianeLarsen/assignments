// GET's THE TODO's FROM THE DATABASE
function getData(){
    axios.get("https://api.vschool.io/diane/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}


// LISTS THE TODO TITLES TO THE DOM
function listData(data){

    clearList()

    for(let i = 0; i < data.length; i++){
        
        const checkbox = document.createElement('input');
        const label = document.createElement('label');
        const lineBreak = document.createElement('br');
        const imgSpan = document.createElement('span');
        const imgShow = document.createElement('img');
        const edit = document.createElement("button");
        const del = document.createElement("button");

        //Create button
        edit.textContent = "edit";
        del.textContent = "X";

            checkbox.type = "checkbox";
            // adds text to label element
            label.appendChild(document.createTextNode(`  Title: ${data[i].title}   Price : ${data[i].price}  Description:  ${data[i].description}     `));
            // links label and checkbox together
            todolist.appendChild(checkbox);
            todolist.appendChild(label);
            imgSpan.appendChild(imgShow);
            imgShow.src = data[i].imgUrl
            todolist.appendChild(imgSpan);
            //creates a linebreak for clarity
            todolist.append(edit, del);
            document.getElementById("list").append(li);
            todolist.appendChild(lineBreak);

            edit.classList.add("edit");    
            del.addEventListener("click", () => {
                li.remove();
              });
            
              edit.addEventListener("click", () => {
                const input = document.createElement("input");
                input.value = div.textContent;
                div.replaceWith(input);
                edit.textContent = "save";
            
                edit.addEventListener("click", () => {
                  div.textContent = input.value;
                  input.replaceWith(div);
                  edit.textContent = "edit";
                });
              });     
                
           //document.querySelector("#display-image").style.backgroundImage = `url(${data[i].img})`;
            //console.log(imgShow)
            
    }
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
        price: todoForm.price.value,
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


