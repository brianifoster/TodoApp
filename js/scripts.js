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
  let todoInput = document.querySelector('.todo-input').value;
  let todoClear = document.querySelector('.todo-input').value = "";
  todos.push(todos);
  console.log(todoInput);
}
