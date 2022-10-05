const tasks = [ {id:1, name:"task1", isCompleted:"True"}, {id:2, name:"task2", isCompleted:"False"}];

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
        let i=1;

        let tasksRender = tasks.map((task) => {
            return (`
                <div class="item-container">
                    <div class="item-separator">
                        <label class="check-container">
                            <input type="checkbox" name="" id="">
                            <span class="checkmark">
                            </span>
                            <span>
                                ${i++}, ${task.name}, false
                            </span>
                        </label>
                    </div>
                        <button type="button">-</button>
                    
                </div>
            `)
        })
        listContainer.innerHTML = tasksRender.join("");

        document.getElementById('formulario').reset();
    })

    let tasksRender = tasks.map((task) => {
        return (`
            <div class="item-container">
                <div class="item-separator">
                <label class="check-container">
                    <input type="checkbox" name="" id="">
                        <span class="checkmark">
                        </span>
                        <span>
                            ${task.id}, ${task.name}, ${task.isCompleted}
                        </span>
                </label>
                </div>
                <button type="button">-</button>              
            </div>
        `)
    })
    listContainer.innerHTML = tasksRender.join("");
});