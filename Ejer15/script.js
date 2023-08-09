/*Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
con la propiedad radio. 
Nota: Cree dos métodos para calcular el área y el perímetro. 
El radio del círculo lo proporcionará el usuario.*/

// let radio = prompt("Ingrese el radio del círculo");

// function Circulo(radio){
//     this.radio = radio;
// }
// var circulo = new Circulo(radio);

const PI = Math.PI;
let circulo = {
    radio: parseInt(prompt("Ingrese el radio del círculo")),
}
console.log(circulo);

function calcularArea(circulo){
    let area = PI * circulo.radio*circulo.radio;
    alert(area);
}
function calcularPerimetro(circulo){
    let perimetro = 2 * PI * circulo.radio;
    alert(perimetro);
}

calcularArea(circulo);
calcularPerimetro(circulo);
