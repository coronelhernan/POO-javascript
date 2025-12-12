import Product from "./Product.js";

export default class Inventary {
  constructor(description) {
    this.products = [];
    this.description = description;
  }

  addProduct(product) {
    if (!(product instanceof Product)) {
      throw new Error("Solo puedes agregar productos válidos");
    }

    const exists = this.products.find(p => p.id === product.id);
    
    if (exists) {
      throw new Error("El producto ya existe en el inventario");
    }

    this.products.push(product);
    return this.products;
  }

  findProductForName(name) {
    return this.products.filter(p => p.nameProduct.toLowerCase() === name.toLowerCase());
  }

  deleteProduct(id) {
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1) throw new Error("Producto no encontrado");

    this.products.splice(index, 1);
    return this.products[index];
  }

  listProducts() {
    return this.products.sort((a, b) => a.nameProduct.localeCompare(b.nameProduct));
  }
}
