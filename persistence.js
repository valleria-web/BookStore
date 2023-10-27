const fs = require('fs');

const dataFilePath = 'books.json';

function saveBooks(books) {
  const json = JSON.stringify(books);
  fs.writeFileSync(dataFilePath, json);
}

function loadBooks() {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

module.exports = { saveBooks, loadBooks };
