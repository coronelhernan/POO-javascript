# 🧪 Prueba Técnica --- Sistema de Inventario (POO en JavaScript)

Este ejercicio simula una **prueba técnica real**, enfocada en
Programación Orientada a Objetos con JavaScript, modelado de datos,
validaciones y separación por módulos.

------------------------------------------------------------------------

## 📌 Objetivo General

Implementar un **Sistema de Inventario básico**, utilizando clases,
módulos y buenas prácticas de diseño.

Debes crear: - Una clase `Producto` - Una clase `Inventario` - Un
proyecto con estructura organizada - Casos de prueba obligatorios

------------------------------------------------------------------------

## 🏗️ Estructura del Proyecto (recomendada)

    inventario-poo/
    │
    ├── src/
    │   ├── models/
    │   │   ├── Producto.js
    │   │   └── Inventario.js
    │   └── main.js
    │
    ├── tests/
    │   └── inventario.test.js    (opcional, si quieres agregar pruebas)
    │
    └── README.md

------------------------------------------------------------------------

# 🟦 Ejercicio --- Sistema de Inventario (Nivel Técnico Básico--Intermedio)

## 1️⃣ Clase Producto

### 📗 Propiedades obligatorias

  Propiedad   Tipo            Requerido   Descripción
  ----------- --------------- ----------- -----------------------
  `id`        string/number   ✔           Identificador único
  `nombre`    string          ✔           Nombre del producto
  `precio`    number          ✔           Debe ser mayor a 0
  `stock`     number          ✔           No puede ser negativo

------------------------------------------------------------------------

### 📘 Métodos obligatorios

#### `aumentarStock(cantidad)`

-   `cantidad` debe ser mayor a 0.
-   Suma al stock actual.

#### `reducirStock(cantidad)`

-   `cantidad` debe ser mayor a 0.
-   No puede dejar stock negativo → lanzar error.

#### `info()`

Retorna un string con la información del producto, por ejemplo:

    "ID: 1 | Producto: Mouse | Precio: $5000 | Stock: 12"

------------------------------------------------------------------------

### ✔️ Validaciones obligatorias

-   `precio` debe ser mayor que 0.\

-   `stock` debe ser un número ≥ 0.\

-   `nombre` obligatorio.\

-   `id` obligatorio.\

-   No permitir reducir más stock del disponible.\

-   Si una validación falla:

        throw new Error("Mensaje descriptivo")

------------------------------------------------------------------------

## 2️⃣ Clase Inventario

### 📗 Propiedad interna

  Propiedad     Tipo    Descripción
  ------------- ------- ---------------------------------
  `productos`   array   Lista de instancias de Producto

------------------------------------------------------------------------

### 📘 Métodos obligatorios

#### `agregarProducto(producto)`

-   Debe recibir **una instancia de Producto**.
-   Validar que `producto.id` no exista ya.
-   Si el ID existe → lanzar error.
-   Si todo está OK → agregar al array.

------------------------------------------------------------------------

#### `buscarPorNombre(nombre)`

-   Retorna **todas las coincidencias**.
-   Comparación insensible a mayúsculas/minúsculas.
-   Si no encuentra nada → retornar array vacío.

------------------------------------------------------------------------

#### `eliminarProducto(id)`

-   Si `id` no existe → lanzar error:

        throw new Error("Producto no encontrado")

-   Si existe → eliminarlo del array.

------------------------------------------------------------------------

#### `listarProductos()`

-   Retorna todos los productos
-   Ordenados alfabéticamente por nombre.

Ejemplo de salida:

    [ProductoA, ProductoB, ProductoC]

------------------------------------------------------------------------

# 🧪 Casos de Prueba Obligatorios

1.  Crear **tres productos**:
    -   Ej: Mouse, Teclado, Monitor
2.  Agregarlos al inventario.
3.  Buscar un producto por nombre.
4.  Eliminar 1 producto por `id`.
5.  Intentar eliminar uno inexistente → lanzar error.
6.  Aumentar stock de un producto.
7.  Reducir stock hasta dejarlo en 0.
8.  Intentar reducir más stock del disponible → error esperado.
9.  Mostrar `listarProductos()` ordenado.

------------------------------------------------------------------------

# 📝 Requisitos Técnicos Mínimos

-   El código debe estar modularizado en carpetas.
-   Las clases deben exportarse correctamente.
-   No usar librerías externas.
-   El código debe ser limpio y entendible.
-   Se deben usar **errores descriptivos**.

------------------------------------------------------------------------

# ⭐ Extra (Opcional para nivel más alto)

-   Agregar categorías a los productos.
-   Sistema de logs (stock modificado, producto agregado, etc).
-   Persistencia en localStorage.
-   Clase `Proveedor`.

------------------------------------------------------------------------

# 🎯 Resultado esperado

Un proyecto funcional que demuestre dominio de:

-   Clases e instancias
-   Encapsulación
-   Validaciones
-   Manejo de errores
-   Modularización
-   Modelado de sistemas reales

------------------------------------------------------------------------

¡Buena práctica! 🚀
