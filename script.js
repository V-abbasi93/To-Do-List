init()

function init() {
    var btn = document.getElementsByClassName("delete-button");
    Array.from(btn).forEach(function (element) {
        element.addEventListener('click', function () {
            element.parentNode.remove()
        });
    });
}

function addClick() {
    var task = document.querySelector("#add-input")

    if (task.value != "") {
        var toDoItem = document.createElement("li")
        var newTask = document.createElement("span")
        var deleteIcon = document.createElement("span")

        toDoItem.className = "to-do-item"
        newTask.innerHTML = task.value;

        newTask.className = "title"

        deleteIcon.innerHTML = "Delete"
        deleteIcon.className = "delete-button"

        toDoItem.appendChild(newTask);
        toDoItem.appendChild(deleteIcon);

        document.querySelector("#to-do-list").appendChild(toDoItem)

    }
    task.value = ""
    task.focus()
    init()
}