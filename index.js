//const tasks = ["task1", "task2"];

const tasks = [
    {id: 1,
    name: "estudiar",
    isCompleted: "true"},
    {id: 2,
    name: "trabajar",
    isCompleted: "true"}
]

document.addEventListener("DOMContentLoaded", function() {
    // referencias
    const form = document.querySelector("form");
    const listContainer = document.querySelector(".list-container");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        tasks.push(data.task);
        console.log(tasks)

        let tasksRender = tasks.map((task) => {
            return (`
                <div class="item-container">
                    <label for="">
                        <input type="checkbox" name="" id="">
                        ${task.id}, tarea:${task.name}, tarea:${task.isCompleted}
                    </label>
                    <button type="button">-</button>
                </div>
            `)
        })
        listContainer.innerHTML = tasksRender.join("");

        document.getElementById('formulario').reset();
    })

    let tasksRender = tasks.map((task) => {
        return (`
            <div class="item-container">
                <label for="">
                    <input type="checkbox" name="" id="">
                    ${task.id}, tarea:${task.name}, tarea:${task.isCompleted}
                </label>
                <button type="button">-</button>
            </div>
        `)
    })
    listContainer.innerHTML = tasksRender.join("");
    
    
});