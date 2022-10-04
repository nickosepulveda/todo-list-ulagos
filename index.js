//const tasks = [];
const tasks = [{
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
const form = document.querySelector("form");
const listContainer = document.querySelector(".list-container");

document.addEventListener("DOMContentLoaded", function() {
    // referencias
    taskRender()
    form.addEventListener("submit",submitTask);
});

function submitTask(event){
    event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        tasks.push({
            id: tasks.length + 1,
            name: data.task,
            isCompleted: false
        });
        console.log(tasks)
        taskRender()
}

function taskRender(){
    let li="";
    tasks.map((task) => {
        li += `
            <div class="item-container">
                <label for="">
                    <input type="checkbox" name="" id="">
                    ${task.name}
                </label>
                <input type="image" name="eliminar" class="button_eliminar" src="./static/img/56763.png" alt="text"> 
            </div>
        `
    })
    listContainer.innerHTML = li;
    document.getElementById('form').reset();
    
};
//<button class="button_eliminar" style="background: url(./static/img/56763.png) type="button-eliminar">-</button>