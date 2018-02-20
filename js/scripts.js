//Function to have user add input and print it out with buttons
var newTodoForm = document.forms.todoForm;

newTodoForm.addEventListener("submit", function(e) {
  addTodo(e);
});

var stillTodos = [];

/* This adds input from the user into a ul
and then add a checkbox and a delete button */
function addTodo(e) {
  e.preventDefault();
  var ulStill = document.querySelector('.still-todo-list');
  var todoInput = document.querySelector('.todo-input').value;
  var todoClear = document.querySelector('.todo-input').value = "";

  if(todoInput.value == null) {
    document.querySelector('.submit').disabled = true;
  } else {
    document.querySelector('.submit').disabled = false;
  var li = document.createElement('li');
  var h5Still = document.createElement('h5');
  h5Still.className = 'header-four'
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.id = "checkbox";
  checkbox.style.margin = "auto";
  var deleteBtn = document.createElement('button');
  deleteBtn.type = "button";
  deleteBtn.id = "delete-btn";

  stillTodos.push(todoInput);
  ulStill.appendChild(li);
  li.appendChild(h5Still);
  li.appendChild(checkbox);
  li.appendChild(deleteBtn);
  h5Still.innerHTML = todoInput;
  deleteBtn.innerHTML = "Delete";
  console.log(todoInput);
  }
}
