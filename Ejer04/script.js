// Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
// ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
// que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.

const cuadro =document.getElementById("cuadro");
const resultado = document.getElementById("resultado");
const boton = document.getElementById("boton");

boton.addEventListener("click", function(){
    verificar();
})
function verificar(){
    var valorCuadro = cuadro.value.toLowerCase(); 
    if(valorCuadro === "s" || valorCuadro === "n"){
        resultado.innerHTML = "CORRECTO";
    }else{
        resultado.innerHTML = "INCORRECTO";
    }
}