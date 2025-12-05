// ===============================
// DECLARACIÓN DE UNA CLASE EN JAVASCRIPT
// ===============================
// Las clases son una forma más moderna y clara de crear moldes de objetos.
// Funcionan sobre el mismo sistema de prototipos, pero con sintaxis mejorada.
//
// Importante:
// - A diferencia de las funciones constructoras, las clases NO se pueden
//   ejecutar antes de declararlas (no tienen hoisting).
// - El "constructor" es el método que se ejecuta automáticamente
//   cuando se usa "new".

class Person {
  constructor(name, lastname) {
    // El constructor recibe los parámetros necesarios para inicializar el objeto.
    // "this" representa a la instancia que se está creando.
    this.name = name;
    this.lastname = lastname;
  }

  // Los métodos definidos dentro de la clase NO se copian por cada instancia.
  // Se agregan automáticamente al prototype de la clase.
  // Todas las instancias comparten estos métodos.
  greet() {
    return `Hello, I am ${this.name} ${this.lastname}`;
  }
}

// ===============================
// CREACIÓN DE INSTANCIAS
// ===============================
// "new Person(...)" crea un objeto basado en la clase Person.
// Cada instancia tiene sus propias propiedades, pero comparte métodos.

const person = new Person('Adam', 'Sandler');
const person2 = new Person('Alex', 'Hubago');

// Se pueden ver las instancias como objetos individuales
console.log(person);
console.log(person2);

// Llamada a un método que está en el prototype de la clase
console.log(person2.greet());
