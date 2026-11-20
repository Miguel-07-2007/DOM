const entrada = document.getElementById("tarea")
const lista_tareas = document.getElementById("tareas")

entrada.addEventListener("keydown", function(event) {
 if (event.key === "Enter"){
    const entrada = document.getElementById("tarea")
    lista_tareas.innerHTML += `<li>Nueva tarea: ${entrada.value}</li>`
    entrada.value = ""
 }
})
