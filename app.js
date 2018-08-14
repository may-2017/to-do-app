function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  var todos = new Array();

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();
    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');
    let button = document.createElement('button');


    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;
    newLi.id = todos.length;
    todos.push(newLi);

    // attach the checkbox to the li
    newLi.appendChild(checkbox);
    newLi.appendChild(button);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';
    button.textContent = 'Delete';
    button.type = 'delete';
    button.onclick = deleteItem;
  });

  function deleteItem(e) {
    var id = e.target.parentElement.id;
    console.log("delete an item: " + id);
    // find and remove the item in the array


    for (var i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
        var li = e.target.parentElement;
        todos.splice(i, 1);
        break;
      }
    }

    // find and remove the item in the page
    var ul = document.getElementById("toDoList");
    var li = e.target.parentElement;
    ul.removeChild(li);
  }
}
window.onload = function() {
  onReady();
};
