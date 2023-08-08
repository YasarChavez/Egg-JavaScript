// Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
// de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
// para calcular el área y el perímetro se utilizan las siguientes fórmulas:
// area = PI * radio2
// perimetro = 2 * PI * radio.

const PI = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679;

function calcular(){
    let radio = parseInt(document.getElementById("radio").value);
    let area = PI * radio*radio;
    let perimetro = 2 * PI * radio;
    document.getElementById("rtoarea").innerHTML = "El área es: " + area;
    document.getElementById("rtoperimetro").innerHTML = "El perímetro es: " + perimetro;
}
