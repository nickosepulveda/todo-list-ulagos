const tasks = ["task1", "task2"];
const tasksOb = [{id: 1, name: 'Tarea1', iscompleted: false},{id:2,name: 'Tarea2',iscompleted: 67}]

document.addEventListener("DOMContentLoaded", function() {
    // referencias
    const form = document.querySelector("form");
    const listContainer = document.querySelector(".list-container");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        
        tasks.push(data.task);
        console.log(tasksOb)

        let tasksRender = tasks.map((task) => {
            return (`
                <div class="item-container">
                    <label for="" class="apart">
                        <input type="checkbox" name="" id="">
                        ${task}
                    </label>
                    <div class="icon"></div>
                </div>
            `)
        })
        listContainer.innerHTML = tasksRender.join("");
        
    })

    let tasksRender = tasks.map((task) => {
        return (`
            <div class="item-container">
                <label for="" class="apart">
                    <input type="checkbox" name="" id="">
                    ${task}
                </label>
                
                <div class="icon"></div>
                
            </div>
        `)
    })
    listContainer.innerHTML = tasksRender.join("");
});