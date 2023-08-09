// Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
// 'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.
let personas = [];
class Persona {
    constructor(nombre, edad, sexo, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
    mostrar() {
        console.log(this.nombre, this.edad, this.sexo, this.peso, this.altura);
    }
}
const persona1 = new Persona("Juan", 25, "H", 70, 1.8);
personas.push(persona1);
const persona2 = new Persona("Maria", 23, "M", 50, 1.6);
personas.push(persona2);
console.log(personas);
personas.forEach((persona) => persona.mostrar());
console.log(typeof personas);

