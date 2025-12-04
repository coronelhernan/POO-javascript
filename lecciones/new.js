// La palabra clave "new" permite crear una nueva instancia (objeto)
// a partir de una función constructora.

// Esta función actúa como un CONSTRUCTOR.
// Un constructor es un "molde" para crear objetos.
function Person() {
  "use strict"; 
  // "use strict" activa el modo estricto: evita errores silenciosos
  // y bloquea comportamientos peligrosos con "this".

  // "this" hace referencia al objeto que se va a crear con "new"
  this.name = '';
  this.lastname = '';
}

// Aquí SI usamos "new", por lo tanto:
// 1. Se crea un objeto vacío {}
// 2. "this" apunta a ese nuevo objeto
// 3. Se asignan las propiedades
// 4. Se devuelve el objeto automáticamente
const person = new Person();

console.log(person);
// Resultado esperado:
// { name: "", lastname: "" }

// SI NO COLOCAMOS "new":
// Person() se ejecuta como una función normal.
// En modo estricto, "this" será undefined,
// por lo tanto dará error al intentar hacer:
// this.name = ''

// const person2 = Person();
// console.log(person2);


// "mankid" es un objeto literal que contiene una función llamada "Person"
const mankid = {
  Person: function () {
    "use strict";
    this.name = '';
    this.lastname = '';
  }
};

// Acá estás llamando la función SIN "new"
const person3 = mankid.Person();

console.log(person3); 
// Resultado: undefined (porque la función no retorna nada)

console.log(mankid);
