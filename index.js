//const tasks = ["task1", "task2"];
const tasks=[
    {
        id: 1,
        name: "hacer la cama",
        isCompleted: true
    },
    {
        id: 2,
        name: "tomar desayuno",
        isCompleted: false
    }
]
document.addEventListener("DOMContentLoaded", contentLoaded = function(){
    console.log(tasks[0])
    // referencias
    const form = document.querySelector("form");
    const listContainer = document.querySelector(".list-container");
    let i=3;
    form.addEventListener("submit", submitTask = function(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const newTask = {
            id: i++,
            name: data.task,
            isCompleted: false
        }
        tasks.push(newTask);
        

        let tasksRender = tasks.map((task) => {
            return (`
                <div class="item-container">
                    <label for="">
                        <input type="checkbox" name="" id="">
                        <span>${task.id}, tarea:${task.name}, completada:${task.isCompleted}</span>
                    </label>
                    <button type="button">≡</button>
                </div>
            `)
        })
        listContainer.innerHTML = tasksRender.join("");
        document.getElementById("my_form").reset();
    })
    let tasksRender = tasks.map((task) => {
        return (`
            <div class="item-container">
                <label for="">
                    <input type="checkbox" name="" id="">
                    <span>${task.id}, tarea:${task.name}, completada:${task.isCompleted}</span>
                </label>
                <button type="button">≡</button>
            </div>
        `)
    })
    listContainer.innerHTML = tasksRender.join("");
});