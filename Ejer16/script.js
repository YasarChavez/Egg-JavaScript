// Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
// y los muestre por pantalla.

let vect1 = [];
let vect2 = [];


for (let i = 0; i < 5; i++) {
    vect1.push(Math.floor(Math.random() * 100)+1);
    vect2.push(Math.floor(Math.random() * 100)+1);
}


console.log('vect1 :>> ', vect1);
console.log('vect2 :>> ', vect2);