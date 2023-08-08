/*Escribir una función flecha que reciba una palabra y la devuelva al revés.*/

var str = "Hola";
var separador = str.split('');
console.log("Separadas");
console.log(separador);
var reverse = separador.reverse();
console.log("Reversadas");
console.log(reverse);
// Concatenamos
var nuevaPalabra = reverse.join('');
console.log("Nueva Palabra")
console.log(nuevaPalabra);



var palabraUsuario = prompt("Ingrese una palabra");
function reverseString() {
    var nuevaPalabraUsurio =palabraUsuario.split('').reverse().join('');
    alert(nuevaPalabraUsurio);
}
reverseString();