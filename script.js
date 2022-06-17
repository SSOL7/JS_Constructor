let list = document.getElementById('todos-list');
let addBtn = document.getElementById('todo-add-btn');
let addInput = document.getElementById('todo-input');

function createTodo() {

    let text = addInput.value;

    if (text === '') {
        alert('Please enter a todo');
        return;
    }

    let li = document.createElement("li");

    let paragraph = document.createElement('p');
    paragraph.textContent = text;

    let remove = document.createElement('span');
    remove.innerHTML = '&cross;';

    li.appendChild(paragraph);
    li.appendChild(remove);
    list.appendChild(li);

    addInput.value = '';
}

function removeTodo(removeElement) {
    removeElement.parentElement.remove();
}

function toggleComplete(inputElement) {
    if(inputElement.checked === false) {
        inputElement.style.textDecoration = 'line-through';
    } else {
        inputElement.style.textDecoration = 'none';
}
}

list.addEventListener('click', function (e) {
    switch(e.target.tagName) {
        case 'p':
            showEditInput();
            break;
        case 'SPAN':
            removeTodo(e.target);
            break;
    }
});

list.addEventListener('change', function (e) {
    if(e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
        toggleComplete(e.target);
    }
});

addBtn.addEventListener('click', createTodo);

addInput.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        createTodo();
    }
});

