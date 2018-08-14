function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

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

    // attach the checkbox to the li
    newLi.appendChild(checkbox);
    newLi.appendChild(button);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';
    button.textContent = 'Delete';
    button.onclick = deleteItem;
  });

  function deleteItem(e) {
    // find and remove the item in the page
    var ul = document.getElementById("toDoList");
    var li = e.target.parentElement;
    ul.removeChild(li);
  }
}
window.onload = function() {
  onReady();
};
