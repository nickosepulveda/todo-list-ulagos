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
                        <input type="checkbox" class="check-padding" name="" id="">
                        ${task}
                    </label>
                    <div class="align-self-center">
                    <div class="dropdown menu-dropdown" onclick="this.classList.toggle('active');">
                        <img class="img-menu" src="./static/img/3puntos.png">
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        
                        <a class="dropdown-item btn-delete" data-id="" href="#">Eliminar</a>
                        <a class="dropdown-item btn-delete" data-id="" href="#">Editar</a>
                        <a class="dropdown-item btn-delete" data-id="" href="#">Otras opciones</a>
                        
                      </div>
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
                    <input type="checkbox" name="" id="">
                    ${task}
                </label>
                <div class="align-self-center">
                <div class="dropdown menu-dropdown" onclick="this.classList.toggle('active');">
                    <img class="img-menu" src="./static/img/3puntos.png">
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    
                    <a class="dropdown-item btn-delete" data-id="" href="#">Eliminar</a>
                    <a class="dropdown-item btn-delete" data-id="" href="#">Editar</a>
                    <a class="dropdown-item btn-delete" data-id="" href="#">Otras opciones</a>
                    
                  </div>
                </div>
              </div>
            </div>
        `)
    })
    listContainer.innerHTML = tasksRender.join("");
});