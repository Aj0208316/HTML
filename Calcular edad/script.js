document.getElementById("Formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const anio = parseInt(document.getElementById("nacimiento").value);
    const anioActual = new Date().getFullYear();

    if (isNaN(anio) || anio < 1900 || anio > anioActual) {
        document.getElementById("resultado").textContent = "Por favor, ingresa un año válido.";
    } else {
        const edad = anioActual - anio;
        document.getElementById("resultado").textContent = `Tu edad es ${edad} años.`;
    }
});

