import fs from 'fs';
import { Book } from './book.mjs';

// Crear instancias de Book
const book3 = new Book("Html", "Dev", 12);


// Crear un array para almacenar los libros
const books = [book3];

// Convertir los objetos Book a formato JSON
const booksJSON = JSON.stringify(books, null, 2); // El segundo argumento es para la indentación

// Especificar la ruta del archivo JSON
const filePath = 'books.json';

// Guardar los libros en un archivo JSON
fs.writeFileSync(filePath, booksJSON);

console.log('Libros guardados en', filePath);
