// ===============================
//   ASOCIACIÓN
// ===============================
// La *asociación* es una relación entre objetos donde ambos pueden existir
// de forma independiente. Ninguno depende del otro para existir.
//
// Ejemplo: un usuario puede tener amigos, pero si eliminamos a un usuario,
// los otros siguen existiendo como objetos por separado.

class User {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

// Instancias de User (existen por separado)
const lucas = new User('Lucas', 'Castel');
const mariano = new User('Mariano', 'Bondar');

// Relación de asociación: "Lucas" tiene en su lista de amigos a Mariano.
lucas.friends = [mariano];

console.log(lucas);
console.log(mariano);


// ===============================
//   AGREGACIÓN
// ===============================
// La *agregación* es un tipo especial de asociación donde un objeto
// “contiene” a otros, pero los objetos contenidos pueden existir
// de manera independiente.
// 
// Es una relación más fuerte que la asociación, pero NO hay dependencia vital.
// Si se elimina la empresa, los empleados siguen existiendo como objetos externos.

const company = {
  name: 'Lincoln Tech',
  employees: []
};

// La empresa agrega empleados, pero los empleados existen independientemente
company.employees.push(lucas);
company.employees.push(mariano);
console.log(company);


// ===============================
//   COMPOSICIÓN
// ===============================
// La *composición* es la relación más fuerte.
// Un objeto está compuesto por otros objetos que NO pueden existir por separado.
//
// Si el objeto principal deja de existir, sus componentes también.
// No tienen vida independiente.
//
// Ejemplo: la dirección (address) forma parte del objeto person.
// No existe como entidad por sí sola fuera de la persona.

const person = {
  name: "Ryan",
  lastname: "Ray",
  address: {
    street: "123 Baker Street",
    city: "London",
    country: "United Kingdom"
  }
};

console.log(person);
