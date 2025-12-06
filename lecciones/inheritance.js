// ===============================
//   HERENCIA
// ===============================
// La herencia permite crear clases basadas en otras clases existentes,
// reutilizando propiedades y métodos.
// Una clase "hija" hereda todo lo que la clase "padre" expone públicamente.
//
// Beneficios:
// - Reutilización de código.
// - Especialización de clases.
// - Evita duplicar lógica común.
//
// En JavaScript la herencia se implementa con "extends".

class Person {
  constructor(name, lastname) {
    // Propiedades comunes a todas las personas
    this.name = name;
    this.lastname = lastname;
    this.age = null;
  }
}

// ===============================
//   PROGRAMMER -> HEREDA DE PERSON
// ===============================
// Programmer heredará todas las propiedades de Person.
// Además, puede agregar nuevas propiedades o métodos.
// 
// "extends" indica que Programmer es una subclase de Person.
// "super()" llama al constructor de la clase padre.

class Programmer extends Person {
  constructor(language, name, lastname) {
    // Llamamos al constructor de "Person" con los valores correspondientes
    super(name, lastname);

    // Propiedad nueva específica de la clase Programmer
    this.language = language;
  }
}

// ===============================
//   CREACIÓN DE INSTANCIAS
// ===============================

const person = new Person('Ben', 'Stifler');
console.log(person); // Instancia con name, lastname y age

const programmer = new Programmer('SQL', 'Joe', 'Zuckerberg');
console.log(programmer);
// Tiene: name, lastname, age (heredados) + language (propio)
