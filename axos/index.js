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
        
        let checkbox = document.createElement('input');
        let label = document.createElement('label');
        let lineBreak = document.createElement('br');
        let imgShow = document.createElement('div');
              
            checkbox.type = "checkbox";
            // adds text to label element
            label.appendChild(document.createTextNode(`  Title: ${data[i].title}   Price : ${data[i].price}  Description:  ${data[i].description}`));
            // links label and checkbox together
            todolist.appendChild(checkbox);
            todolist.appendChild(label);
            imgShow.style.backgroundImage = data[i].imgUrl
            todolist.appendChild(imgShow);
            //creates a linebreak for clarity
            todolist.appendChild(lineBreak);

                
                
                
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
    
    axios.post("https://api.vschool.io/diane/todo", newTodo)
        .then(res => getData(res))
        .catch(err => console.log(err))
})


