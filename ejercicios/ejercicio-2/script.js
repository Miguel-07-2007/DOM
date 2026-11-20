const boton_sumar = document.getElementById("sumar");
const boton_reiniciar = document.getElementById("reiniciar")
const p_clicks = document.querySelector("#clicks");

boton_sumar.addEventListener("click", function () {
    let contador = parseInt(p_clicks.textContent, 10)
    p_clicks.textContent = contador += 1;
    if (contador == 10) {
        p_clicks.style.color = "green"
    }
})

boton_reiniciar.addEventListener("click", function () {
    let contador = parseInt(p_clicks.textContent, 10)
    p_clicks.textContent = 0;
    p_clicks.style.color = "black"
})
