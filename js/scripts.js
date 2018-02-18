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
  var button1 = document.createElement('button');
  var button2 = document.createElement('button');
  var button3 = document.createElement('button');

  todos.push(todos);
  listItem.innerHTML = todoInput;
  button1.innerHTML = "Done";
  button2.innerHTML = "Edit";
  button3.innerHTML = "Delete";
  listItem.appendChild(button1);
  listItem.appendChild(button2);
  listItem.appendChild(button3);
  list.appendChild(listItem);
  console.log(todoInput);
}
