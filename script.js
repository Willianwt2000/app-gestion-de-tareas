const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault()
    const input = document.querySelector("[data-form-input]");
    //creacion de cardsList
    const task = document.createElement("li")
    task.classList.add("card")
    //Limpiar input
    const value = input.value;
    input.value = "";

    const list = document.querySelector("[data-list]")
    //crear variable content - contenido
    const content = `
    <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>
    `
    //Agregando elemento li...
    task.innerHTML = content

    list.appendChild(task);
    console.log(content);
};

console.log(btn);

//Arrow functiopn o funciones flechas -funciones anonimas
btn.addEventListener("click", createTask)