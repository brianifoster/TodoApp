//Function to have user add input and print it out with buttons
var newTodoForm = document.forms.todoForm;

newTodoForm.addEventListener("submit", function(e) {
  addTodo(e);
});
// This adds a delete button and a checkbox to each list item
var stillTodos = [];

// This adds input from the user into a ul
function addTodo(e) {
  e.preventDefault();
  var ulStill = document.querySelector('.still-todo-list');
  var todoInput = document.querySelector('.todo-input').value;
  var todoClear = document.querySelector('.todo-input').value = "";

  var li = document.createElement('li');
  var labelStill = document.createElement('label');
  labelStill.setAttribute = ('id', 'labelStill');
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.id = "checkbox";
  checkbox.style.marginRight = "10px";
  var deleteBtn = document.createElement('button');
  deleteBtn.type = "button";
  deleteBtn.id = "delete-btn";
  if (todoInput === '') {
    alert("You must write something!");
  } else {
    ulStill.appendChild(li);
}

  stillTodos.push(todoInput);

  li.appendChild(checkbox);
  li.appendChild(labelStill);
  li.appendChild(deleteBtn);
  labelStill.innerHTML = todoInput;
  deleteBtn.innerHTML = "Delete";
  console.log(todoInput);
}

// function boxChecked() {
//   if(document.querySelector('#checkbox').checked = true)
//
// }
