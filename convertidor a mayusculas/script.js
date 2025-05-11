document.getElementById("convertir").addEventListener("click", function () {
    const texto = document.getElementById("entrada").value;
    const textoMayusculas = texto.toUpperCase();
    document.getElementById("resultado").textContent = textoMayusculas;
});
