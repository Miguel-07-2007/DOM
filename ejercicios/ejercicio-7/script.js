const contrasena = document.getElementById("contrasena");
const p = document.getElementById("p");

contrasena.addEventListener("input", function () {
    const longitud = contrasena.value.length;

    if (longitud < 6) {
        p.textContent = "Contraseña muy corta";
        p.style.color = "red";
    } else if (longitud <= 9) {
        p.textContent = "Contraseña aceptable";
        p.style.color = "orange";
    } else {
        p.textContent = "Contraseña fuerte";
        p.style.color = "green";
    }
});