export default class Book {
  constructor(title, author, yearOfPublication, category) {
    this.title = title;
    this.author = author;
    this.yearOfPublication = yearOfPublication;
    this.category = category;

    this.validateName();
    this.validateAuthor();
    this.validateYearOfPublication();
    this.validateCategory();
  }

  validateName() {
    if (typeof this.title !== 'string' || this.title.trim().length < 2) {
      throw new Error("Título inválido");
    }
  }

  validateAuthor() {
    if (typeof this.author !== 'string' || this.author.trim() === '') {
      throw new Error("Autor inválido");
    }
  }

  validateYearOfPublication() {
    const currentYear = new Date().getFullYear();
    if ( typeof this.yearOfPublication !== 'number' || this.yearOfPublication < 1500 || this.yearOfPublication > currentYear) {
      throw new Error("Año inválido");
    }
  }

  validateCategory() {
    if (typeof this.category !== 'string' || this.category.trim() === '') {
      throw new Error("Categoría inválida");
    }
  }

  description() {
    return `${this.title} (${this.yearOfPublication}) — ${this.author}`;
  }
}
