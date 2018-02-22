//Function to have user add input and print it out with buttons
var newTodoForm = document.forms.todoForm;

newTodoForm.addEventListener("submit", function(e) {
  addTodo(e);
});
// This adds a delete button and a checkbox to each list item
var spanTodos = [];
var boxTodos = [];
var editTodos = [];
var deleteTodos = [];


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
  var editBtn = document.createElement('button');
  editBtn.type = "button";
  editBtn.id = "edit-btn";
  var deleteBtn = document.createElement('button');
  deleteBtn.type = "button";
  deleteBtn.id = "delete-btn";
  if (todoInput === '') {
    alert("You must write something!");
  } else {
    ulStill.appendChild(li);
}

  spanTodos.push(spanStill);
  boxTodos.push(checkbox);
  editTodos.push(editBtn);
  deleteTodos.push(deleteBtn);

  li.appendChild(checkbox);
  li.appendChild(spanStill);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  spanStill.innerHTML = todoInput;
  editBtn.innerHTML = "Edit";
  deleteBtn.innerHTML = "Delete";
  console.log(todoInput);

//Makes the edit button Function
var ulEdit = document.querySelector('.still-todo-list');
var editBtn = document.querySelectorAll("#edit-btn");

for (var i = 0; i < editTodos.length; i++) {
  editBtn[i].addEventListener('click', function() {
    var removeLi = this.parentNode;
    removeLi.style.display = "none";
    // var editLi = document.querySelector('li').childNodes;
    // var editValue = console.log(editLi[1]);
    var editInput = document.querySelector('.edit-input');
    // editInput.placeholder = editValue;
    editInput.placeholder = "Edit your to-do item.";
    editInput.style.borderStyle = "solid";
    editInput.style.borderWidth = "thin";
    editInput.style.borderColor = "#800000";
  });
  var editTodoForm = document.forms.editForm;

  editTodoForm.addEventListener("submit", function(e) {
    newInputTodo(e);
  });
  function newInputTodo(e) {
    e.preventDefault();
    var newUl = document.querySelector('.still-todo-list');
    var newInput = document.querySelector('.edit-input').value;
    var newClear = document.querySelector('.edit-input').value = "";
    var newLi = document.createElement('li');
    var newSpan = document.createElement('span');
    newSpan.setAttribute = ('id', 'newSpan');
    newSpan.className = "newSpan";
    var newBox = document.createElement('input');
    newBox.type = "checkbox";
    newBox.id = "newbox";
    newBox.style.marginRight = "10px";
    var newEdit = document.createElement('button');
    newEdit.type = "button";
    newEdit.id = "newEdit";
    var newDelete = document.createElement('button');
    newDelete.type = "button";
    newDelete.id = "delete-btn";

    if (newInput === '') {
      alert("You must write something!");
    } else {
      newUl.appendChild(newLi);
    }

    spanTodos.unshift(newSpan);
    boxTodos.unshift(newBox);
    editTodos.unshift(newEdit);
    deleteTodos.unshift(newDelete);

    newLi.appendChild(newBox);
    newLi.appendChild(newSpan);
    newLi.appendChild(newEdit);
    newLi.appendChild(newDelete);
    newSpan.innerHTML = newInput;
    newEdit.innerHTML = "Edit";
    newDelete.innerHTML = "Delete";
  }
}



// Makes the delete button "delete" from Todo list
var deleteBtn = document.querySelectorAll("#delete-btn");
for (var i = 0; i < deleteTodos.length; i++) {
  deleteBtn[i].addEventListener ('click', function() {
  var clearLi = this.parentElement;
  clearLi.style.display = "none";
  });
}
// Makes the checkbox button move input to Done Todo List
var checkBox = document.querySelectorAll("#checkbox");
for (var i = 0; i < boxTodos.length; i++) {
  checkBox[i].addEventListener ('click', function() {
  var clearLi = this.parentNode;
  var ulDone = document.querySelector('.done-todo-list');
  console.log(clearLi);
  ulDone.appendChild(clearLi);
  clearLi.style.textDecorationLine = "line-through";
  clearLi.style.color = "lightGrey";

  //Removes checkbox
  clearLi.setAttribute('id', 'doneItem');
  var doneBox = document.querySelector("#doneItem > #checkbox");
  if (doneBox.parentNode) {
  doneBox.parentNode.removeChild(doneBox);
}
//Removes Edit button over on Done Todo list
  var doneEdit = document.querySelector("#doneItem > #edit-btn");
  if (doneEdit.parentNode) {
    doneEdit.parentNode.removeChild(doneEdit);
  }
  });
}
}
