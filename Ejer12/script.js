// Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de
// dato.

var dato = 10;
const getDataType = (dato) => {return typeof dato;};
console.log(getDataType(dato));

var colores = ["rojo", "verde", "azul"];
colores.forEach((colores) => console.log(colores));

var paisesDelMundo = ["Argentina", "Brasil", "Colombia", "España", "Perú"];
paisesDelMundo.forEach((pais) => {
  if (pais === "Brasil") {
    paisesDelMundo.splice(paisesDelMundo.indexOf(pais), 1);
  }
});
console.log(paisesDelMundo);
