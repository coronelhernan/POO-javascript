import Book from "./Book.js";

export default class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    if (!(book instanceof Book)) {
      throw new Error("Solo se pueden agregar libros válidos");
    }

    const isDuplicate = this.books.some(b => 
      b.title.toLowerCase() === book.title.toLowerCase() &&
      b.author.toLowerCase() === book.author.toLowerCase());

    if (isDuplicate) {
      throw new Error("Libro duplicado");
    }

    this.books.push(book);
  }

  deleteBook(title) {
    const index = this.books.findIndex(b => b.title.toLowerCase() === title.toLowerCase());

    if (index === -1) {
      throw new Error("El libro no existe");
    }

    this.books.splice(index, 1);
  }

  findBookForAuthor(author) {
    const find = this.books.filter(b => b.author.toLowerCase() === author.toLowerCase());

    if (find.length === 0) {
      throw new Error("No se encontraron libros del autor");
    }

    return find;
  }

  findBookForCategory(category) {
    const find = this.books.filter(b => b.category.toLowerCase() === category.toLowerCase());

    if (find.length === 0) {
      throw new Error("No se encontraron libros de la categoría");
    }

    return find;
  }

  listSortedBooks() {
    return [...this.books].sort((a, b) => a.title.localeCompare(b.title));
  }
}
