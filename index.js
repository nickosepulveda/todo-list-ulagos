const tasks = [
  {
    id: 1,
    value: "Lorem",
    isDone: false
  },
  {
    id: 2,
    value: "Ipsum",
    isDone: false
  }

];

document.addEventListener("DOMContentLoaded", function() {
    // referencias
    const form = document.querySelector("form");
    const listContainer = document.querySelector(".list-container");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        tasks.push({
          id: tasks.length++,
          value: data.task,
          isDone: false
        });
        console.log(tasks)

        let tasksRender = tasks.map((task) => {
            return (`
                <div class="item-container">
                    <label for="">
                        <input type="checkbox" name="" id="">
                        ${task.value}
                    </label>
                    <button type="button">...</button>
                </div>
            `)
        })
        listContainer.innerHTML = tasksRender.join("");
        document.getElementById("task-form").reset();
    })

    let tasksRender = tasks.map((task) => {
        return (`
            <div class="item-container">
                <label for="">
                    <input type="checkbox" name="" id="">
                    ${task.value}
                </label>
                <button type="button">...</button>
            </div>
        `)
    })
    listContainer.innerHTML = tasksRender.join("");
});
