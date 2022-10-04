const tasks = ["task1", "task2"];
/* Objeto Tareas */
const tasksOb = [{id: 1, name: 'Tarea1', iscompleted: false},{id:2,name: 'Tarea2',iscompleted: false}]

document.addEventListener("DOMContentLoaded", function() {
    // referencias
    const form = document.querySelector("form");
    const listContainer = document.querySelector(".list-container");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        /* Agregando objeto con propiedades */
        tasksOb.push({id: tasksOb.length+1, name: data.task, iscompleted: false});
        

        let tasksRender = tasksOb.map((prop) => {
            return (`
                <div class="item-container">
                    <label for="" class="apart">
                        <input type="checkbox" name="" id="">
                        
                        Nombre:${ ' '+prop.name}
                    </label>
                    <div class="icon"></div>
                </div>
            `)
        })
        listContainer.innerHTML = tasksRender.join("");
        /**2 ejercicio */
        document.getElementById('form-horizontal').reset();
    })

    let tasksRender = tasksOb.map((prop) => {
        return (`
            <div class="item-container">
                <label for="" class="apart">
                    <input type="checkbox" name="" id="">
                    Nombre:${' '+prop.name}
                </label>
                
                <div class="icon"></div>
                
            </div>
        `)
    })
    listContainer.innerHTML = tasksRender.join("");
});