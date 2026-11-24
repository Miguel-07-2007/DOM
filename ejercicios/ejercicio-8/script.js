const producto = document.getElementById("producto");
const lista = document.getElementById("lista");
const form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    lista.innerHTML += `<li>${producto.value}</li>`;
    producto.value = "";
})