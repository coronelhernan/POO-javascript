// =======================================
//  POLIMORFISMO POR SOBRECARGA (Overloading)
// =======================================
// En lenguajes como Java o C#, la sobrecarga permite tener varias funciones con el mismo nombre
// pero con diferentes parámetros. JavaScript NO soporta sobrecarga real, pero podemos simularla.
//
// En JS, una forma de simular sobrecarga es aceptar distintos tipos de datos y manejar cada caso.
// Aquí, countItems funciona tanto con números como con strings, convirtiendo el valor a string debajo.
//
// IDEA CENTRAL: un mismo método puede comportarse diferente según el tipo de dato recibido.
// Esto es polimorfismo porque “adopta muchas formas” según el argumento.
//
// En countItems, si pasamos un número → se convierte a string → cuenta dígitos
// Si pasamos un texto → simplemente cuenta caracteres.
// ---------------------------------------

function countItems(x) {
  return x.toString().length;
}

console.log(countItems(1231));
console.log(countItems('Hola mundo'));


// Otra forma de ver la sobrecarga en JS es mediante valores por defecto.
// Si no se pasan todos los parámetros, los valores default permiten que la función siga funcionando.
//
// IDEA CENTRAL: permitir múltiples combinaciones de argumentos sin romper la función.
// En otros lenguajes serían varias funciones "sum()", pero en JS se hace con defaults.
// -----------------------------------------------

function sum(x = 0, y = 0, z = 0) {
  return x + y + z;
}

console.log(sum(5, 10));
console.log(sum(10, 20, 30));


// =======================================
//  POLIMORFISMO PARAMÉTRICO (Generics)
// =======================================
// Este polimorfismo aparece cuando un método puede trabajar con *cualquier tipo* de dato.
//
// En lenguajes como TypeScript, Java o C#, esto es gracias a los “Generics”: estructuras que funcionan
// sin importar si contienen strings, números, objetos, etc.
//
// En JavaScript no existen generics, pero como es dinámico, los objetos aceptan cualquier tipo.
//
// IDEA CENTRAL: el método no depende del *tipo*, sino de la *estructura*.
// “Puedo meter lo que sea y siempre funciona igual”.
// ---------------------------------------

function Stack() {
  this.items = [];

  this.push = function(item) {
    this.items.push(item); // funciona con cualquier tipo: string, número, boolean, objetos...
  }
};

const stack = new Stack();
stack.push('klasdlasd');

const stack2 = new Stack();
stack2.push(1000);

console.log(stack);
console.log(stack2);


// =======================================
//  POLIMORFISMO POR SUBTIPOS (Subtyping)
// =======================================
// También llamado “polimorfismo de herencia”.
//
// Permite que un objeto de una clase hija sea tratado como si fuera de la clase padre.
// Es esencial para la programación orientada a objetos clásica.
//
// Ejemplo:
//  - Programmer extiende Person
//  - Por lo tanto, un Programmer es un "tipo" de Person
//  - Podemos pasarlo a funciones que esperan un Person sin problema
//
// IDEA CENTRAL: un objeto de un subtipo puede reemplazar al tipo padre sin romper nada.
// Esto es clave para la reutilización de código y la abstracción.
// ---------------------------------------

class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  } 
};

class Programmer extends Person{
  constructor(language, name, lastname) {
    super(name, lastname); // reutiliza constructor del padre
    this.language = language;
  }
};

const john = new Person('john', 'ray');
const ryan = new Programmer('Java', 'ryan', 'ray');

console.log(john);
console.log(ryan);

// Esta función espera un "Person", pero puede recibir "Programmer" porque es un subtipo.
// Eso es polimorfismo por subtipos en acción.
function writeFullName(p) {
  console.log(p.name + " " + p.lastname);
};

writeFullName(john);
writeFullName(ryan);
