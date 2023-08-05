// Construir un programa que simule un menú de opciones para realizar las cuatro
// operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
// numéricos enteros. El usuario, además, debe especificar la operación con el primer
// carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
// o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.

function calcular() {
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    var operacion = String(document.getElementById("operador").value);
    var resultado = document.getElementById("resultado");
    switch (operacion) {
        case "+":
            resultado.innerHTML = num1 + num2;
            break;
        case "-":
            resultado.innerHTML = num1 - num2;
            break;
        case "*":
            resultado.innerHTML = num1 * num2;
            break;
        case "/":
            resultado.innerHTML = num1 / num2;
            break;
    }
}
