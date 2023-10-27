import { Comic } from "./comic.mjs";


const comic1 = new Comic("Spider-Man", "S.L", 6, "Steve Ditko");

const comic1Div = document.getElementById("comic1");
comic1Div.textContent = `Título: ${comic1.title}, Autor: ${comic1.author}, Precio: ${comic1.price}, Ilustrador: ${comic1.illustrator}`;


export { comic1 };
