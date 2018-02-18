//Function to have user add input and print it out with buttons
var newTodoForm = document.forms.todoForm;
newTodoForm.addEventListener("submit", function(e) {
  addTodo(e);
});

var todos = [];

function addTodo(e) {
  e.preventDefault();
  var ulStill = document.querySelector('.todo-list');
  var todoInput = document.querySelector('.todo-input').value;
  var todoClear = document.querySelector('.todo-input').value = "";
  var li = document.createElement('li');
  var h5Todo = document.createElement('h5');
  h5Todo.className = 'header-four'
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.id = "checkbox";
  checkbox.style.margin = "auto";
  var deleteBtn = document.createElement('button');
  deleteBtn.type = "button";
  deleteBtn.id = "delete-btn";

  todos.push(todoInput);
  ulStill.appendChild(li);
  li.appendChild(h5Todo);
  li.appendChild(checkbox);
  li.appendChild(deleteBtn);
  h5Todo.innerHTML = todoInput;
  deleteBtn.innerHTML = "Delete";
  console.log(todoInput);
}
