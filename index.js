const tasks = [
    {
        id: 1,
        name: "Task1",
        isCompleted: false
    },
    {
        id: 2,
        name: "Task2",
        isCompleted: false
    },
];

const form = document.querySelector("form");
const listContainer = document.querySelector(".list-container");

const contentLoaded = function() {
    taskRender();
}

const submitTask = function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    tasks.push({
        id: tasks.length +1,
        name: data.task,
        isCompleted: false
    });
    taskRender();
}

const taskRender = function() {
    let taskList = tasks.map((task) => {
        return (`
            <div class="item-container">
                <label for="">
                    <input type="checkbox" name="" id="checkbox-task">
                    ${task.name}
                </label>
                <button type="button" id="button-settings" class="dropdown">...
                    <div class="dropdown-content">
                        <a>edit 1</a>
                        <a>edit 2</a>
                    </div>
                </button>
            </div>
        `)
    });
    listContainer.innerHTML = taskList.join("");
    document.querySelector('.form-horizontal').reset();
}
document.addEventListener("DOMContentLoaded", contentLoaded)
form.addEventListener("submit", submitTask)
