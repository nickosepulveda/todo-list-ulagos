const tasks = [{
    id: 1,
    name: "Task",
    isCompleted: false
},
{
    id: 2,
    name: "Task 1",
    isCompleted: false
}
];

// referencias
const form = document.querySelector("form");
const listContainer = document.querySelector(".list-container");

const contentLoaded = () =>{
    form.addEventListener("submit", submitTask);
    tasksRender();
}

const submitTask = (event) =>{
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    tasks.push({
        id: tasks.length + 1,
        name: data.task,
        isCompleted: false
    });
    tasksRender();
    document.getElementById('task-form').reset();
}

const tasksRender = () =>{
    let html = "";
    tasks.map((task) => {
    html +=`
    <div class="item-container">
        <label for="">
            <input type="checkbox" class="check-padding" name="" id="">
            ${task.name}
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
`;})
listContainer.innerHTML = html;
};

document.addEventListener("DOMContentLoaded", contentLoaded);






