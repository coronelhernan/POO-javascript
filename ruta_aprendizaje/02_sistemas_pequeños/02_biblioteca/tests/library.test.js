import Book from '../src/models/Book.js';
import Library from '../src/models/Library.js';

describe('Gestor de Biblioteca', () => {
  let library;

  beforeEach(() => {
    library = new Library();
  });

  test('agregar 5 libros correctamente', () => {
    library.addBook(new Book('Clean Code', 'Robert Martin', 2008, 'Programming'));
    library.addBook(new Book('DDD', 'Eric Evans', 2003, 'Programming'));
    library.addBook(new Book('1984', 'George Orwell', 1949, 'Novel'));
    library.addBook(new Book('Animal Farm', 'George Orwell', 1945, 'Novel'));
    library.addBook(new Book('Sapiens', 'Yuval Harari', 2011, 'History'));

    expect(library.books.length).toBe(5);
  });

  test('buscar libros por autor', () => {
    library.addBook(new Book('1984', 'George Orwell', 1949, 'Novel'));
    library.addBook(new Book('Animal Farm', 'George Orwell', 1945, 'Novel'));

    const resultFind = library.findBookForAuthor('George Orwell');
    expect(resultFind.length).toBe(2);
  })

  test('buscar libros por categoria', () => {
    library.addBook(new Book('Sapiens', 'Yuval Harari', 2011, 'History'));
    const resultFind = library.findBookForCategory('History');
    expect(resultFind.length).toBe(1);
  })
 
  test('eliminar un libro existente', () => {
    library.addBook(new Book('1984', 'George Orwell', 1949, 'Novel'));
    library.deleteBook('1984');

    expect(library.books.length).toBe(0);
  });

  test('no permite agregar libros duplicados', () => {
    library.addBook(new Book('1984', 'George Orwell', 1949, 'Novel'));

    expect(() => {
      library.addBook(new Book('1984', 'George Orwell', 1949, 'Novel'));
    }).not.toThrow();
  });
});
