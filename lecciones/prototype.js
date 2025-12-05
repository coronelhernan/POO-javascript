// ===============================
// USO DE PROTOTYPE
// ===============================
// "prototype" permite agregar métodos al constructor
// SIN que se dupliquen en cada instancia.
// Todos los objetos creados con "new" compartirán este método.

function Person(name, lastname) {
  this.name = name;
  this.lastname = lastname;
  this.displayName = function() {
    return `${name} ${lastname}`;
  };
};

// Instanciando el constructor
const adam = new Person("Adam", "Sandler");
const marty = new Person("Marty", "Mcfly");
console.log(adam.displayName());

// Agregando metodos a un constructor con "Prototype"
Person.prototype.greet = function() {
  return `Hello ${this.name}`;
}

console.log(adam);