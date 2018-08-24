function onReady() {
  let id = 0;
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    id = id + 1;
    newToDoText.value = '';
    renderTheUI();
  }
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';
    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      let button = document.createElement('button');
      button.type = 'delete';
      button.onclick = deleteItem;
      checkbox.type = "checkbox";
      newLi.textContent = toDo.title;
      newLi.id = toDo.id;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(button);button.textContent = 'Delete';
    });
    function deleteItem(e) {
      var id = e.target.parentElement.id;
      console.log("delete an item: " + id);
      // find and remove the item in the array
      var toBeDeleted = toDos.filter(toDo => toDo.id == e.target.parentElement.id);
      toBeDeleted.forEach(function(element) {
         console.log(element);
         var index = toDos.indexOf(element);
         console.log(index);
         toDos.splice(index, 1);
         renderTheUI();
      })
    }
}
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
  renderTheUI();
}
window.onload = function() {
  onReady();
};
