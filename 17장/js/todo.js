const todoInput = document.querySelector('#todo-input');
const addButton = document.querySelector('#add-button');
const todoList = document.querySelector('#todo-list');

document.addEventListener("DOMContentLoaded",getLocal);
addButton.addEventListener('click',addTodo);
todoList.addEventListener('click',manageTodo);

function addTodo(e){
    e.preventDefault();

const newDiv = document.createElement('div');
newDiv.classList.add('todo');
const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-content');
newDiv.appendChild(newTodo);
saveToLocal(todoInput.value);

const completButton = document.createElement('button');
completButton.innerText = '완료';
completButton.classList.add('complete-button');
newDiv.appendChild(completButton);

const deleteButton = document.createElement('button');
deleteButton.innerText = '삭제';
deleteButton.classList.add('delete-button');
newDiv.appendChild(deleteButton);

todoList.appendChild(newDiv);

todoInput.value = "";   //입력창 초기화 
}

function saveToLocal(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
}

function getLocal(){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];    
    }else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }

todos.forEach(function(todo){
        const newDiv = document.createElement('div');
        newDiv.classList.add('todo');
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-content');
        newDiv.appendChild(newTodo);

        const completButton = document.createElement('button');
        completButton.innerText = '완료';
        completButton.classList.add('complete-button');
        newDiv.appendChild(completButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = '삭제';
        deleteButton.classList.add('delete-button');
        newDiv.appendChild(deleteButton);
        todoList.appendChild(newDiv);

        todoInput.value = "";
    });
}
function manageTodo(e){
    const whichButton = e.target.classList[0];
    if(whichButton ==='complete-button'){
        const todo = e.target.parentElement;
        todo.children[0].classList.toggle('completed');
    }
    else if(whichButton === 'delete-button'){
        const todo = e.target.parentElement;
        removeLocal(todo);
        todo.remove();
    }
}

function removeLocal(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    }else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    const index = todos.indexOf(todo.children[0].innerText);
    todos.splice(index,1);
    localStorage.getItem('todos',JSON.stringify(todos));
}