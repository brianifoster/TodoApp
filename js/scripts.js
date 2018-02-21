//Function to have user add input and print it out with buttons
var newTodoForm = document.forms.todoForm;

newTodoForm.addEventListener("submit", function (e) {
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
  var spanStill = document.createElement('span');
  spanStill.setAttribute = ('id', 'spanStill');
  spanStill.className = "span-still";
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

  stillTodos.push(li);

  li.appendChild(checkbox);
  li.appendChild(spanStill);
  li.appendChild(deleteBtn);
  spanStill.innerHTML = todoInput;
  deleteBtn.innerHTML = "Delete";

  // Makes the delete button "delete" from Todo list
  var deleteBtn = document.querySelectorAll("#delete-btn");
  var i;
  for (i = 0; i < stillTodos.length; i++) {
    deleteBtn[i].addEventListener('click', function () {
      var clearLi = this.parentElement;
      clearLi.style.display = "none";
    });
  }
  // Makes the checkbox button move input to Done Todo List
  
  
  
  /*
  TODO: RYEKER SAYS: The problem is that you are attaching a new event listener for EVERY li inside of your
  stillTodos array. Instead of this you COULD just go up to line 25 and attach the event listener there (every time a new check
  box is made). But you dont have to since this approach works.
  */


  var checkBox = document.querySelectorAll("#checkbox");
  var i;
  for (i = 0; i < stillTodos.length; i++) {
    checkBox[i].addEventListener('click', function () {
      var clearLi = this.parentNode;
      var ulDone = document.querySelector('.done-todo-list');
      ulDone.appendChild(clearLi);
      clearLi.setAttribute('id', 'doneItem');
      var doneBox = document.querySelector("#doneItem > #checkbox");
      if (doneBox.parentNode) {
        doneBox.parentNode.removeChild(doneBox);
      }
    });
  }
}