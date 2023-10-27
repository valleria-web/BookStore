import { Book } from './book.mjs';

class Comic extends Book{
    constructor(title, author, price, illustrator) {
        super(title, author, price);
        this.illustrator = illustrator;      
    }
}
export { Comic };