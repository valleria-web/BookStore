import { Book } from "./book.mjs";

const book1 = new Book("Lluvia seca", "J.L", 15);

const book1Div = document.getElementById("book1");
book1Div.textContent = `Título: ${book1.title}, Autor: ${book1.author}, Precio: ${book1.price}`;


export { book1 };