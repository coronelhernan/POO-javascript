/**
 * 📌 Ejercicio 1 — Clase Persona
 * Propiedades: nombre, edad
 * Métodos: presentarse()
 * Validaciones: nombre >= 2 caracteres, edad > 0
 * Flujo: crear personas, presentarse, validar error con edad negativa
 */

class Persona {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    // Ejecutar validaciones obligatorias para asegurar integridad de datos.
    this.validateName();
    this.validateAge();
  }

  
  // Valida que el nombre sea un string y tenga al menos 2 caracteres.
  validateName() {
    if (typeof this.name !== "string" || this.name.length < 2) {
      throw new Error("Nombre inválido");
    }
  }

  // Valida que la edad sea un número y sea mayor que cero.
  validateAge() {
    if (typeof this.age !== "number" || this.age <= 0) {
      throw new Error("Edad inválida");
    }
  }
   
  // Devuelve la presentación de la persona.
  toIntroduceOneSelf() {
    return `Hola me llamo ${this.name} y tengo ${this.age} años`;
  }
}

// Instanciano válida
const person1 = new Persona("Juan", 20);
console.log(person1);
console.log(person1.toIntroduceOneSelf());

// Instancia inválida
// const personaErronea = new Persona("A", -5);
// console.log(personaErronea);
