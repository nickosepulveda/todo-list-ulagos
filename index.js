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
                    <div class="item-separator">
                        <label class="check-container">
                            <input type="checkbox" name="" id="">
                            <span class="checkmark"></span>
                            ${task}
                        </label>
                    </div>
                        <button type="button">-</button>
                    
                </div>
            `)
        })
        listContainer.innerHTML = tasksRender.join("");
    })

    let tasksRender = tasks.map((task) => {
        return (`
            <div class="item-container">
                <div class="item-separator">
                <label class="check-container">
                    <input type="checkbox" name="" id="">
                    <span class="checkmark"></span>
                    ${task}
                </label>
                </div>
                <button type="button">-</button>              
            </div>
        `)
    })
    listContainer.innerHTML = tasksRender.join("");
});