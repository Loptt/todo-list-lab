document.getElementById("newTodo").value = "";

let formTodo = document.getElementById("todoForm");

let clearButton = document.getElementById("clearButton");
let markButton = document.getElementById("markAllButton");
let deleteButton = document.getElementById("deleteButton");

let todos = document.getElementById("listOfTodos");

function setCheckboxes(value) {
    checkboxes = document.getElementsByClassName("todo-checkbox");
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = value;
        
    }
}

formTodo.addEventListener("submit", (event) => {
    let todoText = document.getElementById("newTodo").value;
    if (todoText === "") {
        console.log("TODO empty");
        return;
    }

    todos.innerHTML += `<div><input type="checkbox" class="todo-checkbox"><span>` + todoText + `</span></div>`;
    document.getElementById("newTodo").value = "";
    console.log("Todo added");
});

clearButton.addEventListener("click", (event) => {
    setCheckboxes(false);
});

markButton.addEventListener("click", (event) => {
    setCheckboxes(true);
});

deleteButton.addEventListener("click", (event) => {
    todos.innerHTML = "";
});