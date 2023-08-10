// A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
// a) Determinar cual de los dos elementos de texto es mayor
// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
// operadores necesarios para obtener un resultado true y otro resultado false
// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
// dos elementos numéricos

var valores = [true, 5, false, "hola", "adios", 2];
console.log("valores :>> ", valores);

// a) Determinar cual de los dos elementos de texto es mayor
var strings = valores.filter((elemento) => typeof elemento === "string");
console.log("strings :>> ", strings);

var stringMayor = "";

for (var i = 0; i < strings.length; i++) {
    if (strings[i].length > stringMayor.length) {
        stringMayor = strings[i];
    }
}
console.log("stringMayor :>> ", stringMayor);

// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
// operadores necesarios para obtener un resultado true y otro resultado false
booleanos = valores.filter((elemento) => typeof elemento === "boolean");

console.log("booleanos :>> ", booleanos);
console.log(booleanos[0] == booleanos[1]);
console.log(booleanos[0] != booleanos[1]);

// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
// dos elementos numéricos
var numeros = valores.filter((elemento) => typeof elemento === "number");

console.log("numeros :>> ", numeros);

console.log("suma :>> ", numeros[0] + numeros[1]);
console.log("resta :>> ", numeros[0] - numeros[1]);
console.log("multiplicacion :>> ", numeros[0] * numeros[1]);
console.log("division :>> ", numeros[0] / numeros[1]);

