const formulario = document.getElementById("formulario");

const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    respuesta.textContent =
        "¡Gracias por contactarme! Tu mensaje fue enviado correctamente.";

    formulario.reset();

});