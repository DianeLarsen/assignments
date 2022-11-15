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
            checkbox.type = "checkbox";
        let label = document.createElement('label');
            label.appendChild(document.createTextNode(`   ${data[i].title}`));
            todolist.appendChild(checkbox);
            todolist.appendChild(label);
        let lineBreak = document.createElement('br');
            todolist.appendChild(lineBreak);    
            
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
        title: todoForm.title.value
    }
    
    todoForm.title.value = ""
    
    axios.post("https://api.vschool.io/diane/todo", newTodo)
        .then(res => getData(res))
        .catch(err => console.log(err))
})


