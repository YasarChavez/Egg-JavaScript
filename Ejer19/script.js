///COSA DEL DIABLO 


/*
Realizar un programa en JavaScript donde se creen dos arreglos: el primero será un arreglo 
A de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. 
El programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
de 20.*/

let A = [];
let B = [];

for (var i = 0; i < 50; i++) {
    A.push(Math.floor(Math.random() * 100));
}
console.log('A :>> ', A);
// function compare(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// } //LINTERNAMENTE HACE ESTO
A.sort(function (a, b){
    return a - b;
});
console.log('A :>> ', A);


//Arreglo B
B=A.slice(0, 10);
console.log('B :>> ', B);
// B.push(A.slice(0, 10));
// console.log('B :>> ', B);

for (let i = 0; i < 10; i++) {
    B.push(0.5);
}
// B.flat();
console.log('B :>> ', B);





