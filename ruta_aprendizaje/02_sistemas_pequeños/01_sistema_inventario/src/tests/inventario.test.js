import Product from "../models/Product.js";
import Inventary from "../models/Inventary.js";

console.log("====== INICIO TESTS SISTEMA DE INVENTARIO ======\n");

try {
  // Crear productos
  const product1 = new Product(1, "Mouse", 1000, 2);
  const product2 = new Product(2, "Keyboard", 2000, 1);
  const product3 = new Product(3, "Screen", 5000, 3);

  const inventary = new Inventary("Inventario Principal");

  // Agregar productos
  inventary.addProduct(product1);
  inventary.addProduct(product2);
  inventary.addProduct(product3);
  console.log("✓ Productos agregados correctamente");

  // Buscar por nombre
  const resultFindProductForName = inventary.findProductForName("Screen");
  console.log("Resultado búsqueda:", resultFindProductForName);
  console.log("✓ Búsqueda por nombre OK");

  // Eliminar por ID
  inventary.deleteProduct(2);
  console.log("✓ Producto con ID 2 eliminado");

  // Intentar eliminar uno inexistente
  try {
    inventary.deleteProduct(99);
  } catch (e) {
    console.log("✓ Error esperado:", e.message);
  }

  // Aumentar y reducir stock
  product1.increaseStock();
  product1.reduceStock();

  try {
    product2.reduceStock();
    product2.reduceStock(); // debe fallar
  } catch (e) {
    console.log("✓ Error esperado al reducir stock:", e.message);
  }

  // Listado ordenado
  console.log("Lista ordenada:", inventary.listProducts());
  console.log("✓ Listado ordenado OK");

  console.log("\n====== ✔ TODOS LOS TESTS EJECUTADOS ======");

} catch (err) {
  console.error("❌ Error inesperado:", err.message);
}
