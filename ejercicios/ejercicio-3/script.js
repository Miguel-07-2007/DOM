const entrada = document.querySelector("#texto")
const resultado = document.getElementById("resultado")

entrada.addEventListener("input", function(){
    resultado.textContent = entrada.value;
})
