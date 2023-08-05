// Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
// En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.
var boton = document.getElementById("calcular");
var rto = document.getElementById("rto");

boton.addEventListener("click", paroimpar);
function paroimpar(){
    var numero = parseInt(document.getElementById("numero").value);
    if(numero == 0){
        rto.innerHTML = "no es par ni impar";
    }else if(numero % 2 == 0){
        rto.innerHTML = "es par";
    }else{
       rto.innerHTML = "es impar";
    }
}