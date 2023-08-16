// Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo
// amarillo, por ejemplo)
const boton = document.getElementById("boton");
boton.addEventListener("click", resaltaPalabras);
let contador = 0;
let textoInicial = document.querySelector("#textoModificar").innerHTML;
let textoFinal = [];
function resaltaPalabras() {
  if (contador == 0) {
    contador++;
    document.getElementById("textoModificar").innerHTML = "";
    console.log(textoInicial);
    textoInicial = textoInicial.split(" ");
    textoInicial.forEach((element) => {
      if (element.length > 8) {
        textoFinal.push(
          `<span style="background-color: #FFFF00;">${element}</span>`
        );
      } else {
        textoFinal.push(element);
      }
    });
    for (let i = 0; i < textoFinal.length; i++) {
      document.getElementById("textoModificar").innerHTML +=
        textoFinal[i] + " ";
    }
    textoInicial = textoInicial.join(" ");
  }else{
    alert("Las palabras ya estan resaltadas");
  }
}
