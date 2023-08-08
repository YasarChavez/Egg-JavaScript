/*Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring().*/

var frase = "hola mundo";
var nuevafrase = "";

function espacios(frase) {
    for (var i = 0; i < frase.length; i++) {
        nuevafrase += frase[i] + " ";
    }
    console.log(nuevafrase);
};

espacios(frase);
