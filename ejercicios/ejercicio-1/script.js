const boton = document.getElementById("boton");
const span = document.querySelector("#usuario");

boton.addEventListener("click", function(event){
  const nombre = document.getElementById("nombre").value;
  event.preventDefault();
  if (nombre.endsWith("a")) {
    span.textContent = "¡Hola " + nombre + ", Bienvenida!";
  }
  else{
    span.textContent = "¡Hola " + nombre + ", Bienvenido!";
  }
  
})
