/*Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring().*/

var frase = prompt("Ingrese una frase: ");
var nuevafrase = "";
function espacios() {
    for (var i = 0; i < frase.length; i++) {
        nuevafrase += frase[i] + " ";
    }
    console.log(nuevafrase);
}

// espacios();

// let frase = prompt("Ingrese una frase");
// let espacios = "";

// for (let i = 0; i < frase.length; i++) {
//     espacios += frase.substring(i, i + 1) + " ";
// }

// console.log(`Frase con espacios: ${espacios}`);