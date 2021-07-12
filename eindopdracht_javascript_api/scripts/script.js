const inputValue = document.querySelector('input');
const submitButton = document.getElementById("add");
const todosList = document.querySelector('ul');

const addTodoToLocalAPI = async () => {

    if (inputValue.value === '') {

        alert('Fill in a todo');

        return
    }
    const todo = {
        description: inputValue.value,
        done: false,
    }



    await postTodo(todo);
    await addTodosToDom();

}


submitButton.addEventListener('click', addTodoToLocalAPI);


const addTodosToDom = async () => {


    const todos = await getTodos();
    todosList.innerHTML = '';
    todos.forEach(todo => {
        const newLi = document.createElement('li');
        newLi.innerHTML = todo.description;
        const newDelButton = document.createElement("button");
        newDelButton.className = "close";
        newDelButton.id = "delBtn";
        newDelButton.innerHTML = "Done";
        newDelButton.addEventListener("click", () => {
            deleteTodo(todo._id);
            newDelButton.parentNode.remove('li')

        });
        newLi.appendChild(newDelButton);
        todosList.appendChild(newLi);


    });
}



const list = document.querySelector('ul');
list.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}, false);

