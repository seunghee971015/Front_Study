let todoList = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];
console.log(todoList)
window.onload = function(){
    drawTodoList(document.getElementsByClassName('todo-list')[0], todoList);
}

function addTodo(){
    let todo = document.getElementById('search-input').value;

    if(todo.replace(/ /g,"") === ''){
        return;
    }

    todoList.push({
        title : todo,
        date : new Date()
    })
}