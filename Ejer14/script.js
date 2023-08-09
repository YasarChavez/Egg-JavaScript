// Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
// Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
// y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
// numero de páginas.

class Libro{
    constructor(ISBN, titulo, autor, numPaginas){
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;   
    }
    cargarLibro(){
        this.ISBN = prompt("Ingrese el ISBN del libro");
        this.titulo = prompt("Ingrese el titulo del libro");
        this.autor = prompt("Ingrese el autor del libro");
        this.numPaginas = prompt("Ingrese el numero de paginas del libro");
    }
    mostrarLibro(){
        console.log("ISBN: " + this.ISBN);
        console.log("Titulo: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Numero de paginas: " + this.numPaginas);
    }
}

let libro1 = new Libro("1234567890", "Titulo del libro", "Autor", "1000");

// var libro1 = new Libro();

// libro1.cargarLibro();
// console.log('libro1 :>> ', libro1);
libro1.mostrarLibro();