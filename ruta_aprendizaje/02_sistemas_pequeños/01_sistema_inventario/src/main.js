import Product from './models/Product.js';
import Inventary from './models/Inventary.js';

// Punto de entrada del sistema
console.log("🟦 Sistema de Inventario iniciado");

// Instanciando objetos
const inventary = new Inventary("Inventario Principal");
console.log("Inventario creado:", inventary.description);

// Demo
const demoProduct = new Product(1, "Producto Demo", 1000, 5);
inventary.addProduct(demoProduct);

console.log("Producto agregado al inventario:", demoProduct.info());
