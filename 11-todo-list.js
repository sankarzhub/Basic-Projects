const todoList = [
  { name: "Eat", dueDate: "2025-06-20" },
  { name: "Sleep", dueDate: "2025-06-22" },
  { name: "Repeat", dueDate: "2025-06-23" },
];
renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `<div>${name}</div>
    <div> ${dueDate}</div>
    <button class="delete-todo-button" onclick="
    todoList.splice(${i},1);
    renderTodoList()
    ">Delete</button>
     `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;
  todoList.push({ name, dueDate });

  inputElement.value = "";
  renderTodoList();
}
