// selecting necessary elements
const form = document.querySelector(".input-field");
const input = document.querySelector("input");
const taskList = document.querySelector(".task-list");

function addTask(event){
    event.preventDefault(); // prevent page from reloading on form submission
    const inputValue = input.value;
    console.log(inputValue);

    const listItem = document.createElement("li");
    const taskDiv = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const taskName = document.createElement("span");
    taskName.innerText = inputValue;

    const deleteButton = document.createElement("button");
    // adding classes to create elemnts
    taskDiv.classList.add("task-info");
    deleteButton.classList.add("delete");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    
    // append the necessary elements to ul and li
    taskList.appendChild(listItem);
    listItem.appendChild(taskDiv);
    listItem.appendChild(deleteButton);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskName);

}

// event listener to add, edit and delete tasks
form.addEventListener("submit", addTask);