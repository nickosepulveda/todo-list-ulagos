//const tasks = ["task1", "task2"];
const tasks=[
    {
        id: 1,
        name: "hacer la cama",
        isCompleted: "True"
    },
    {
        id: 2,
        name: "tomar desayuno",
        isCompleted: "False"
    }
]
document.addEventListener("DOMContentLoaded", function() {
    console.log(tasks[0])
    // referencias
    const form = document.querySelector("form");
    const listContainer = document.querySelector(".list-container");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        tasks.push(data.task);
        

        let tasksRender = tasks.map((task) => {
            return (`
                <div class="item-container">
                    <label for="">
                        <input type="checkbox" name="" id="">
                        <span>${task.id}, tarea:${task.name}, tarea:${task.isCompleted}</span>
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
                    <span>${task.id}, tarea:${task.name}, tarea:${task.isCompleted}</span>
                </label>
                <button type="button">≡</button>
            </div>
        `)
    })
    listContainer.innerHTML = tasksRender.join("");
});