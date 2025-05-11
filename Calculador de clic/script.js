let contador = 0;

const boton = document.querySelector("button");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
    contador++;
    resultado.textContent = `Número de clics: ${contador}`;
});
