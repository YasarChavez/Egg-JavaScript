// Escribir un programa para obtener un array de las propiedades de un objeto Persona.
// Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.

class Persona {
    constructor(nombre, edad, sexo, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}
let persona = new Persona("Juan", 25, "H", 70, 1.75);

let prop = Object.getOwnPropertyNames(persona);

console.log(prop);


// let personas ={
//     nombre: 'Juan',
//     edad: 25,
//     sexo: 'H',
//     peso: 70,
//     altura: 1.75
// }

// let prop=Object.keys(personas);
// console.log(prop);

// let prop=[];

// for(let key in personas){
//     prop.push(key);
// }
// for (const key in object) {

// }

// console.log(prop);