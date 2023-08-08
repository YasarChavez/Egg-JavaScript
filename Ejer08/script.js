/*Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos.*/

var numeroMaximo = 0;
var numeroMinimo = 10000000000000000;
var cantidadNumeros = 0;
var numeroPromedio = 0;
var promedio = 0;

while (true) {
    var numero = parseInt(prompt("Ingrese un número: "));
    if (numero == 0) {
        break;
    }
    if (numero > numeroMaximo) {
        numeroMaximo = numero;
        cantidadNumeros++;
        numeroPromedio += numero;
    }
    if (numero < numeroMinimo) {
        numeroMinimo = numero;
        cantidadNumeros++;
        numeroPromedio += numero;
    }
    
}
alert("El numero maximo fue:" + numeroMaximo);
alert("El numero minimo fue:" + numeroMinimo);
alert("La cantidad de números ingresados es: " + cantidadNumeros);
alert("El promedio de todos los números es: "+ (promedio = numeroPromedio / cantidadNumeros));

var object = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 25,
    altura: 1.75,
    peso: 70,
}
for (const key in object) {
    console.log(key);
}