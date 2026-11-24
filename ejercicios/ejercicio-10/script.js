const luz_verde = document.getElementById("luz_verde");
const luz_amarilla = document.getElementById("luz_amarilla");
const luz_roja = document.getElementById("luz_roja");

const luces = document.querySelectorAll(".circulo");

const boton_verde = document.querySelector("#verde");
const boton_amarillo = document.querySelector("#amarillo");
const boton_rojo = document.querySelector("#rojo");

const msg = document.querySelector("#msg");

function apagarLuces() {
    luces.forEach(function(luz) {
        luz.style.backgroundColor = "black";
    });
}

boton_verde.addEventListener("click", function(){
    apagarLuces();
    luz_verde.style.backgroundColor = "green";
    msg.textContent = "Puede Pasar";
})

boton_amarillo.addEventListener("click", function(){
    apagarLuces();
    luz_amarilla.style.backgroundColor = "yellow";
    msg.textContent = "Precaución";
})

boton_rojo.addEventListener("click", function(){
    apagarLuces();
    luz_roja.style.backgroundColor = "red";
    msg.textContent = "Pare";
})
