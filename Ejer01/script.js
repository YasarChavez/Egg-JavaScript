// Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de
// hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que
// indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario.

const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
    let respuesta = document.getElementById("input").value;
    let eldiaesta = `El día de hoy está ${respuesta}`;
    mensaje.innerHTML = eldiaesta;
});
