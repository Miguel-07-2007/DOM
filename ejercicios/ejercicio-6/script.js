const peso = document.getElementById("peso_kg")
const estatura = document.querySelector("#estatura_mt")
const form = document.querySelector("form")
const resultado = document.querySelector("#resultado")

form.addEventListener("submit", function () {
    event.preventDefault();
    resultado.textContent = (
        parseFloat(peso.value) /
        (parseFloat(estatura.value) * parseFloat(estatura.value))
    ).toFixed(2)

    peso.value = ""
    estatura.value = ""
})
