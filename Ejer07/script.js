// Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
// solicite números al usuario hasta que la suma de los números introducidos supere el
// límite inicial.
var limite = 0;
function guardarLimite() {
    limite = parseInt(document.getElementById("limite").value);
    let valorlimite = document.getElementById("valorlimite");
    valorlimite.innerHTML = "Limite " + limite;
}

var suma = 0;


function sumarNumero() {
    if (suma < limite) {
        var sumando = parseInt(document.getElementById("sumando").value);
        suma = suma + sumando;
        let valorsuma = document.getElementById("valorsuma");
        valorsuma.innerHTML = suma;
        document.getElementById("sumando").value = "";
    }
    if (suma > limite){
        alert("La suma de los números es mayor que el límite");
    }
}
