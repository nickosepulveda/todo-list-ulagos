const tasks = [{
    id: 1,
    name: "Tarea 1",
    isCompleted: false
},
{
    id: 2,
    name: "Tarea 2",
    isCompleted: false
}
];
document.addEventListener("DOMContentLoaded", Contentloaded);

const form = document.querySelector("form");
const listContainer = document.querySelector(".list-container");

function Contentloaded(){
    TaskRender()
    form.addEventListener("submit",SubmitTask);
};
function SubmitTask(event){
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        tasks.push({
            id: tasks.length + 1,
            name: data.task,
            isCompleted: false
        });
        console.log(tasks)
        TaskRender()
    }

    function TaskRender(){
        formulario = "Tareas activas:";
    tasks.map((task) => {
        formulario = formulario + `
               <div class="item-container">
                    <label for="">
                        <input type="checkbox" class="check-box" name="" id="">
                        ${task.name}
                    </label>
                    <div class="dropdown">
                    <button>- - -</button>
                    <div class="dropdown-content">
                    <a href="#">Eliminar</a>
                    <a href="#">Editar</a>
                    </div>
                    </div>
                </div>
            `;
        })
        document.getElementById('task-id').reset();  
        listContainer.innerHTML = formulario;
};
