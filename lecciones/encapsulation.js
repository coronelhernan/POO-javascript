// ===============================
//   ENCAPSULACIÓN
// ===============================
// La encapsulación consiste en proteger los datos internos de un objeto,
// permitiendo el acceso solo a través de métodos definidos.
//
// Objetivo principal:
// - Evitar que partes externas del código modifiquen datos sensibles.
// - Controlar cómo se leen/escriben esas propiedades.
// - Ocultar detalles internos para que el objeto sea más seguro y fácil de usar.
//
// En JavaScript, antes de los campos privados de las clases (#propiedad),
// la forma clásica de encapsular era usando *closures* dentro de funciones constructoras.

function Company(name) {
  // "employees" es una variable PRIVADA.
  // No está asociada a "this", por lo tanto NO puede accederse desde afuera.
  let employees = [];

  // Esta propiedad sí es pública.
  this.name = name;

  // Métodos que actúan como "interfaces" para acceder a los datos privados.
  this.getEmployee = function() {
    return employees;
  };

  // Método controlado para agregar empleados.
  // La única forma de modificar "employees" es a través de este método.
  this.addEmployee = function(employee) {
    employees.push(employee);
  };
}

// ===============================
//   USO DE LA ENCAPSULACIÓN
// ===============================

const company = new Company('Coca Cola');
const company2 = new Company('Starbucks');

console.log(company);
console.log(company2);

// Agregamos empleados usando los métodos públicos
company.addEmployee('Joe');
company2.addEmployee('Brad');

// Se obtiene la lista mediante getters controlados
console.log(company.getEmployee());
console.log(company2.getEmployee());
