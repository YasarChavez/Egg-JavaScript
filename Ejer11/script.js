// Escribir una función que reciba un String y devuelva la palabra más larga.
// String Ejemplo: “Guia de JavaScript”
// Resultado esperado : “JavaScript”

var palabra = "Guia de JavaScript";

function palabraMasLarga(palabra) {
    var arreglo = palabra.split(" ");
    console.log(arreglo);
    var palabraMasLarga ='';
    arreglo.forEach(element => {
        if (element.length > palabraMasLarga.length) {
            palabraMasLarga = element;
        }
    });
    return palabraMasLarga;
}
console.log(palabraMasLarga(palabra));
