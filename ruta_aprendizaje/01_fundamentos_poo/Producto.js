/**
 *📌 Ejercicio 2 — Clase Producto
 * Propiedades: nombre, precio
 * Métodos: aplicarDescuento(porcentaje), mostrarPrecio()
 * Validaciones: nombre obligatorio, precio > 0, porcentaje entre 1–100
 * Flujo: crear producto, aplicar 20% → 8000, aplicar 100% → 0, validar error con 120%
*/

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;

    this.validateName();
    this.validatePrice();
  }

  validateName() {
    if (typeof this.name !== "string" || this.name.trim().length === 0) {
      throw new Error("Nombre obligatorio");
    }
  }

  validatePrice() {
    if (typeof this.price !== "number" || this.price <= 0) {
      throw new Error("Precio inválido");
    }
  }

  applyDiscount(percentage) {
    if (percentage < 1 || percentage > 100) {
      throw new Error("El porcentaje debe ser entre 1 y 100");
    }

    this.price = this.price - (this.price * percentage / 100);
    return this.price;
  }

  showPrice() {
    return `Precio actual: $${this.price}`;
  }
}

// PRUEBAS
const product1 = new Product("Teclado", 10000);

console.log(product1.aplicarDescuento(20));  // → 8000
console.log(product1.aplicarDescuento(100)); // → 0
// console.log(product1.aplicarDescuento(120)); // → error
