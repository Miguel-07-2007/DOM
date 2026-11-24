// Entradas
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const edad = document.getElementById("edad");
// Formulario
const form = document.getElementById("form");
// Mensajes
const registro_correcto = document.getElementById("registro-correcto");
const msg_nombre = document.getElementById("msg-nombre");
const msg_email = document.getElementById("msg-email");
const msg_edad = document.getElementById("msg-edad");

form.addEventListener ("submit",function(event){
event.preventDefault();

let registro_valido = true;

msg_nombre.textContent = "";
msg_email.textContent = "";
msg_edad.textContent = "";

if (nombre.value == "") {
    msg_nombre.textContent = "Debes ingresar el nombre";
    registro_valido = false;
}

if (!email.value.includes("@") || !email.value.includes(".com")) {
    msg_email.textContent = "Ingresa un correo válido";
    registro_valido = false;
}

if (edad.value == "" || parseInt(edad.value) < 18){
    msg_edad.textContent = "Debes ingresar una edad válida";
    registro_valido = false;
}

if (registro_valido == true) {
    registro_correcto.textContent = "Haz enviado tu información exitosamente"
}

})
