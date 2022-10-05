const tasks = [ {id:1, name:"task1", isCompleted:"true"}, {id:2, name:"task2", isCompleted:"true"}];

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
                        <input type="checkbox" name="" id="">
                        ${task.name}
                    </label>
                    <button type="button">-</button>
                </div>
            `)
        })
        listContainer.innerHTML = tasksRender.join("");
        document.getElementById('myform').reset();
    })

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
    })
    listContainer.innerHTML = tasksRender.join("");
});