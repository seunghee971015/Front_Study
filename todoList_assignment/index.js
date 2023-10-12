function addTodo(ev) {

    let inputText = document.getElementById('bar').value;

    if (inputText.trim() === '') {
        alert('추가바람');
        return;
    }
   
    if(!ev || ev.keyCode === 13){
        let plusTodo = document .createElement('li');
        plusTodo.innerText = inputText;
    
        let todoList = document.getElementById('to-do-list');
        todoList.appendChild(plusTodo);

        
        
        let deleteBtn = document.createElement('button');
        deleteBtn.id = 'delete-btn';
        deleteBtn.onclick = function () {
            deleteBtn.parentNode.remove();
        };
        plusTodo.appendChild(deleteBtn);



        document.getElementById('bar').value = '';
    }

    
    
}






