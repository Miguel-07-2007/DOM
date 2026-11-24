const nombre = document.getElementById("nombre");
const profesion = document.getElementById("profesion");
const url = document.getElementById("url");
const llenar_nombre = document.getElementById("llenar-nombre");
const llenar_profesion = document.getElementById("llenar-profesion");
const llenar_url = document.getElementById("campo-img");

nombre.addEventListener("input", function(){
    llenar_nombre.textContent = nombre.value
})

profesion.addEventListener("input", function(){
    llenar_profesion.textContent = profesion.value
})

url.addEventListener("input", function(){
    llenar_url.textContent = ""
    llenar_url.innerHTML = `<img src="${url.value}" class="img-fluid rounded" alt="Tu foto">`
})
