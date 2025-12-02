// "Object" es el constructor base de TODOS los objetos en JavaScript.
// Usar "new Object()" crea un objeto vacío.
// En la práctica es equivalente a usar {} pero más antiguo.

const person = new Object();
console.log(person);

// Al pasar un valor a "new Object()", JavaScript lo convierte
// en un OBJETO ENVOLTORIO (String, Number o Boolean).

const string = new Object("Hola ");

// Ahora "string" ya no es un primitivo, es un OBJETO,
// por lo tanto puede tener métodos y propiedades propias.

string.greet = function () {
  // "this" hace referencia al objeto String creado
  return this + "mundo";
};

// Se ejecuta el método agregado dinámicamente
console.log(string.greet());


const yugiohCharacter = {
  name : 'Seto',
  lastname : 'Kaiba',
  favoriteMonster : 'Eyes Blue Dragon'
};

// Keys
console.log(Object.keys(yugiohCharacter));

// Values
console.log(Object.values(yugiohCharacter));
