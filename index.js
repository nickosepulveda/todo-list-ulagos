const storage = new Storage();
const tasksOnSession = storage.get("tasks")

const tasks = tasksOnSession? tasksOnSession : [];

const form = document.querySelector("#tasks-form");
const listContainer = document.querySelector("#tasks-list-container");

const tasksRender = (tasks) => {
    const createActionButton = (itemContainer) => {
        let buttonEl = document.createElement("button");
        buttonEl.type = "button"
        buttonEl.append("-")
        buttonEl.onclick = () =>{
            const idEl = itemContainer.id.split("-")[1];
            itemContainer.remove()
            
            tasks = tasks.filter(t => t.id != idEl);
            storage.set("tasks", tasks);
        }

        return buttonEl;
    }
    const createLabelEl = (task) => {
        let labelEl = document.createElement("label");
        let inputEl = document.createElement("input");
        inputEl.type = "checkbox"

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


    tasks.forEach((task) => {
        const itemContainer = createItemContainer(task)

        listContainer.appendChild(itemContainer);
    })
}

const submitTask = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newElement = {
        id: tasks.length + 1,
        name: data.task,
        isCompleted: false
    };

    tasks.push(newElement);
    storage.set("tasks", tasks);

    tasksRender([newElement]);

    form.reset();
}

const contentLoaded = () => {
    tasksRender(tasks);
}

document.addEventListener("DOMContentLoaded", contentLoaded);
form.addEventListener("submit", submitTask)