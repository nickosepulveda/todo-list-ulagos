const tasks = [{
    id: 1,
    name: "test1", 
    isCompleted: false
},
{
    id: 2,
    name: "test2",
    isCompleted: false
}];

const form = document.querySelector("form");
const listContainer = document.querySelector(".list-container");

//i.contentLoaded que sea pasada como argumento a addEventListener de DOMContentLoaded (mover codigo actual dentro).
//ii.submitTask que sea pasada como argumento a addEventListener de submit (mover codigo actual dentro).
//iii.tasksRender que realice la generacion del html a inyectar dentro de listContainer.

document.addEventListener("DOMContentLoaded", contentloaded);
form.addEventListener("submit",submitTask);    
// referencias
function contentloaded(){
    tasksRender();
};
function submitTask(event){ 
    event.preventDefault();
        
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    tasks.push({
        id: tasks.length+1,
        name: data.task,
        isCompleted: false
    });
    console.log(tasks)
    tasksRender();
};
const tasksRender = function(){
    let tasksRender = tasks.map((task) => {
        return (`
            <div class="item-container">
                <label for="">
                    <input type="checkbox" name="" id="">
                    ${task.name}
                </label>
                <button type="button">-</button>
            </div>
        `)
    });
    listContainer.innerHTML = tasksRender.join("");
    document.getElementById('form').reset();
}; 
    //listContainer.innerHTML = tasksRender.join("");
    
