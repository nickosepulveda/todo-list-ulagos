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
                    <label for="">
                        <input type="checkbox" class="check-box" name="" id="">
                        ${task}
                    </label>
                    <div class="dropdown">
                    <button>- - -</button>
                    <div class="dropdown-content">
                    <a href="#">Eliminar</a>
                    <a href="#">Editar</a>
                    </div>
                    </div>
                </div>
            `)
        })
        listContainer.innerHTML = tasksRender.join("");
    })

    let tasksRender = tasks.map((task) => {
        return (`
            <div class="item-container">
                    <label for="">
                        <input type="checkbox" class="check-box" name="" id="">
                        ${task}
                    </label>
                    <div class="dropdown">
                    <button>- - -</button>
                    <div class="dropdown-content">
                    <a href="#">Eliminar</a>
                    <a href="#">Editar</a>
                    </div>
                    </div>
                </div>
        `)
    })
    listContainer.innerHTML = tasksRender.join("");
});