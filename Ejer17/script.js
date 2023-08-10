// Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
// resultado

let vect1 = [1,2,3,4,5];

// for (let i = 0; i < 5; i++) {
//     vect1.push(Math.floor(Math.random() * 100)+1);
// }
console.log('vect1 :>> ', vect1);
for (let i = 0; i < 2; i++){
    vect1.pop();
}
console.log('vect1 :>> ', vect1);