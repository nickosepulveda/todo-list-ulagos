//const tasks = [];
const tasks = [{
    id: 1,
    name: "hacer la tarea",
    isCompleted: false
},
{
    id: 2,
    name: "hacer la tarea denuevo",
    isCompleted: false
}
];
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
                    <label for="" style="font-family:verdana" >
                    <input type="checkbox" name="" id="">
                        ${task.name}
                    </label>
                    <input type="image" name="eliminar" class="button_eliminar" src="./static/img/56763.png" alt="text"> 
                </div>
            `)
        })
        listContainer.innerHTML = tasksRender.join("");
        document.getElementById('form').reset();
    })

    let tasksRender = tasks.map((task) => {
        return (`
            <div class="item-container">
                <label for="" style="font-family:verdana" >
                    <input type="checkbox" name="" id="">
                        ${task.name}
                    </label>
                <input type="image" name="eliminar" class="button_eliminar" src="./static/img/56763.png" alt="text"> 
            </div>
        `)
    })
    listContainer.innerHTML = tasksRender.join("");
});