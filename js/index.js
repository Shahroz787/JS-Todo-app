/**
 * Title : Todo application using JavaScript DOM
 * Description : All the functions are related to todo process.
 * Author : Sariful Islam (Sahed)
 * Date : 03/29/2022
 */


//All the necessary DOM references from html
const newTask = document.getElementById("new-task");
const form = document.querySelector("form");
const incompleteTask = document.getElementById("items");
const completeUl = document.querySelector(".complete-list ul");


//All the functions below
let createTask = function(task) {
    let listItem = document.createElement("li");
    let checkBox = document.createElement("input");
    let label = document.createElement("label");


    label.innerText = task;
    checkBox.type = "checkbox";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}




let addTask = function (event) {
    event.preventDefault();

    let listItem = createTask(newTask.value);
    incompleteTask.appendChild(listItem);
    newTask.value = "";
    bindInCompleteItems(listItem, completeTask);
}


let completeTask = function () {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = "delete";
    listItem.appendChild(deleteBtn);

    let checkbox = listItem.querySelector("input[type='checkbox']");
    checkbox.remove();

    completeUl.appendChild(listItem);

    bindCompleteItems( listItem, deleteTask );
}



let deleteTask = function () {
    let listItem = this.parentNode;
let ul = listItem.parentNode;
ul.removeChild(listItem);

}



let bindInCompleteItems = function ( taskItem, checkBoxClick ) {
let checkbox = taskItem.querySelector(`input[type="checkbox"]`);
checkbox.onchange = checkBoxClick;
}


let bindCompleteItems = function ( taskItem, deleteButtonClick ) {
let deleteButton = taskItem.querySelector(".delete");

deleteButton.onclick = deleteButtonClick;
}

for ( let i = 0; i < incompleteTask.children.length; i++) {
    bindInCompleteItems( incompleteTask.children[i], completeTask );
}

for ( let i = 0; i < completeUl.children.length; i++) {
    bindCompleteItems( completeUl.children[i], deleteTask );
}


//All the Event Listener are here
form.addEventListener("submit" , addTask);