var newTodoForm = document.forms.todoForm;
newTodoForm.addEventListener("submit", function(e) {
  addTodo(e);
});

// submit.addEventListener('click', function() {
//
// })



var todos = [];

function addTodo(e) {
  e.preventDefault();//stops it from actually submitting the information
  var todoInput = document.querySelector('.todo-input').value;
  var todoClear = document.querySelector('.todo-input').value = "";
  var list = document.querySelector('ul');
  var listItem = document.createElement('li');

  todos.push(todos);
  listItem.innerHTML = todoInput;
  list.appendChild(listItem);
  console.log(todoInput);
}

console.log(todos);
