const tasks = ["task1", "task2"];

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
                    <label for="" style="font-family:verdana" >
                    <input type="checkbox" name="" id="">
                        ${task.name}
                    </label>
                    <input type="image" name="eliminar" class="button_eliminar" src="./static/img/56763.png" alt="text"> 
                </div>
            `)
        })
        listContainer.innerHTML = tasksRender.join("");
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