export default class Product {
  constructor(id, nameProduct, priceProduct, stock) {
    this.id = id;
    this.nameProduct = nameProduct;
    this.priceProduct = priceProduct;
    this.stock = stock;

    this.validateId();
    this.validateNameProduct();
    this.validatePrice();
    this.validateStock();
  }

  // VALIDACIONES
  validateId() {
    if (!this.id && this.id !== 0) {
      throw new Error("El ID es obligatorio");
    }
  }

  validateNameProduct() {
    if (typeof this.nameProduct !== "string" || this.nameProduct.trim() === "") {
      throw new Error("El nombre del producto es obligatorio");
    }
  }

  validatePrice() {
    if (typeof this.priceProduct !== "number" || this.priceProduct <= 0) {
      throw new Error("El precio debe ser un número mayor a 0");
    }
  }

  validateStock() {
    if (typeof this.stock !== "number" || this.stock < 0) {
      throw new Error("El stock debe ser un número y no puede ser negativo");
    }
  }

  // MÉTODOS
  increaseStock() {
    this.stock += 1;
    return this.stock;
  }

  reduceStock() {
    if (this.stock - 1 < 0) {
      throw new Error("No se puede reducir stock por debajo de 0");
    }
    
    this.stock -= 1;
    return this.stock;
  }

  info() {
    return `ID: ${this.id} | Producto: ${this.nameProduct} | Precio: ${this.priceProduct} | Stock: ${this.stock}`;
  }
}
