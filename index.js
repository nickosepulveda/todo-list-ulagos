const tasks = [];
/*const tasks = [{
    id: 1,
    name: "Task1",
    isCompleted: false
},
{
    id: 2,
    name: "Task2",
    isCompleted: false
}
];
*/
document.addEventListener("DOMContentLoaded", function() {
    // referencias
    const form = document.querySelector("form");
    const listContainer = document.querySelector(".list-container");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        tasks.push({
            id: tasks.length + 1,
            name: data.task,
            isCompleted: false
        });
        console.log(tasks)

        let tasksRender = tasks.map((task) => {
            return (`
                <div class="item-container">
                    <label for="">
                        <input type="checkbox" name="" id="">
                        ${task.name}
                    </label>
                    <button class="button_eliminar" type="button">-</button>
                </div>
            `)
        })
        listContainer.innerHTML = tasksRender.join("");
    })

    let tasksRender = tasks.map((task) => {
        return (`
            <div class="item-container">
                <label for="">
                    <input type="checkbox" name="" id="">
                    ${task.name}
                </label>
                <button class="button_eliminar" type="button">-</button>
            </div>
        `)
    })
    listContainer.innerHTML = tasksRender.join("");
});