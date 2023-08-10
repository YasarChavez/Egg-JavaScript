// Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] 
// y devuelve y muestre el siguiente array [6, 9, 12, 15, 18].

let matriz = [[3], [6], [9], [12], [15]];
let resultado = matriz.flat();
console.log('resultado :>> ', resultado);
resultado.shift();
console.log('resultado :>> ', resultado);
resultado.push(18);
console.log('resultado :>> ', resultado);



// FEDE
// let aux = matriz.map(function (elemento) {
//     return elemento[0] + 3;
// });
// console.log('resultado :>> ', aux);

// DECENTE
// console.log('resultado :>> ', resultado);
// resultado.shift();
// console.log('resultado :>> ', resultado);
// resultado.push(18);
// console.log('resultado :>> ', resultado);

// MANERA CROTA
// let matriz = [[3], [6], [9], [12], [15]];
// let resultado = matriz.flat();
// console.log('resultado :>> ', resultado);
// resultado.reverse();
// console.log('resultado :>> ', resultado);
// resultado.pop();
// console.log('resultado :>> ', resultado);
// resultado.reverse();
// console.log('resultado :>> ', resultado);
// resultado.push(18);
// console.log('resultado :>> ', resultado);

