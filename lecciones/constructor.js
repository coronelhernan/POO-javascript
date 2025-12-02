// Una FUNCIÓN CONSTRUCTORA es un molde para crear múltiples objetos
// del mismo tipo usando la palabra clave "new".
// No crea un objeto por sí sola, solo define CÓMO serán los objetos.

// Por convención, su nombre empieza con MAYÚSCULA (Person, User, Account, etc)
// para indicar que debe usarse con "new".

function Person() {
  // "this" representa al objeto que se va a crear en el futuro.
  // Cada propiedad que se agrega a "this" pasa a formar parte
  // del objeto final que devolverá "new".

  this.name = '';
  this.lastname = '';
  this.age = 0;

  // Los métodos también se asocian al objeto mediante "this".
  // Cada instancia tendrá su propia copia de este método.
  this.showFullName = function () {
    return `${this.name} ${this.lastname}`;
  };
}

// Al utilizar "new":
// 1. JavaScript crea un objeto vacío {}
// 2. Asigna ese objeto a "this"
// 3. Ejecuta la función Person()
// 4. Devuelve automáticamente el objeto creado

const user = new Person();

// Se modifican las propiedades SOLO de esta instancia
user.age = 22;
user.name = 'Tom';
user.lastname = 'Ryder';

// Se ejecuta un método propios de la instancia
console.log(user.showFullName());

// Se imprime el objeto completo creado a partir del constructor
console.log(user);
