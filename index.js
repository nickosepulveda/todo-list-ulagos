const storage = new Storage(new LocalStorage);
const tasksOnSession = storage.get("tasks")

let tasks = tasksOnSession? tasksOnSession : [];

const form = document.querySelector("#tasks-form");
const listContainer = document.querySelector("#tasks-list-container");
const totalStats = document.querySelector("#total-tasks");
const completedStats = document.querySelector("#completed-tasks");

const stateTask = (() => {
    const refreshStorage = (tasks) => {
        storage.set("tasks", tasks);
    }
    const addTask = (title) => {
        const newTask = {
            id: Math.random().toString(16).slice(2),
            name: title,
            isCompleted: false
        };
        console.log(newTask)
        tasks.push(newTask);

        refreshStorage(tasks);

        return newTask;
    }
    const removeTask = (id) => {
        tasks = tasks.filter(t => t.id != id);

        refreshStorage(tasks);
    }
    const completedTask = (id, status) => {
        let index = tasks.findIndex(t => t.id == id);
        tasks[index]["isCompleted"] = status;

        refreshStorage(tasks);
    }


    return { addTask, removeTask, completedTask }
})();

const tasksRender = (tasksToRender) => {
    const createActionButton = (itemContainer) => {
        let buttonEl = document.createElement("button");
        buttonEl.type = "button"
        buttonEl.append("-")
        buttonEl.onclick = () =>{
            const idEl = itemContainer.id.split("-")[1];
            itemContainer.remove()
            
            stateTask.removeTask(idEl)
        }

        return buttonEl;
    }
    const createLabelEl = (task) => {
        let labelEl = document.createElement("label");
        let inputEl = document.createElement("input");
        inputEl.type = "checkbox"
        inputEl.name = `task-status-${task.id}`
        inputEl.checked = task.isCompleted
        inputEl.addEventListener("change", (e)=>{
            let id = e.target.name.split("-")[2];
            stateTask.completedTask(id, e.target.checked)
            tasksRender([])
        })

        labelEl.appendChild(inputEl);
        labelEl.append(` ${task.name}`)

        return labelEl;
    }
    const createItemContainer = (task) => {
        let itemContainer = document.createElement("div");
        itemContainer.className = "item-container"
        itemContainer.id = `task-${task.id}`

        itemContainer.appendChild(createLabelEl(task));
        itemContainer.appendChild(createActionButton(itemContainer));

        return itemContainer;
    }


    tasksToRender.forEach((task) => {
        const itemContainer = createItemContainer(task)

        listContainer.appendChild(itemContainer);
    })
    let taskCompleted = tasks.filter(t => t.isCompleted === true);
    completedStats.innerText = taskCompleted.length;
    totalStats.innerText = tasks.length;
}

const submitTask = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    let newTask = stateTask.addTask(data.task)

    tasksRender([newTask]);

    form.reset();
}

const contentLoaded = () => {
    tasksRender(tasks);
}

document.addEventListener("DOMContentLoaded", contentLoaded);
form.addEventListener("submit", submitTask)