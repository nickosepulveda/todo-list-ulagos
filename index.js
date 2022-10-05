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

const form = document.querySelector("form");
const listContainer = document.querySelector(".list-container");

const contentLoaded = function(){
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
}

const submitTask = function(event){
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        tasks.push({
          id: tasks.length + 1,
          value: data.task,
          isDone: false
        });
        console.table(tasks)

        let render = tasks.map((task) => {
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
        listContainer.innerHTML = render.join("");
       document.getElementById("task-form").reset();
}

document.addEventListener("DOMContentLoaded", contentLoaded)
form.addEventListener("submit",submitTask)
