// Escribir un programa para obtener un array de las propiedades de un objeto Persona.
// Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.
const persona = {
    nombre: 'Juan',
    edad: 25,
    sexo: 'H',
    peso: 70,
    altura: 1.75
}
const propiedadesYValores = Object.entries(persona)
console.log(propiedadesYValores);
console.log(typeof propiedadesYValores);
