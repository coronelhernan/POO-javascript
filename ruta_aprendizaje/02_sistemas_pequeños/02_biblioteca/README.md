# 🧪 Prueba Técnica --- Gestor de Biblioteca (POO en JavaScript)

Este ejercicio simula una **prueba técnica real**, centrada en
Programación Orientada a Objetos, modelado de entidades, validaciones de
negocio y organización del proyecto.

------------------------------------------------------------------------

## 📌 Objetivo General

Desarrollar un **Gestor de Biblioteca**, capaz de administrar libros
mediante clases, aplicando buenas prácticas de POO y estructura de
proyecto.

El sistema debe permitir: - Registrar libros - Evitar duplicados -
Buscar libros por distintos criterios - Eliminar libros - Listar libros
ordenados

------------------------------------------------------------------------

## 🏗️ Estructura del Proyecto (recomendada)

    biblioteca-poo/
    │
    ├── src/
    │   ├── models/
    │   │   ├── Libro.js
    │   │   └── Biblioteca.js
    │   │
    │   └── main.js
    │
    ├── tests/
    │   └── biblioteca.test.js   (opcional)
    │
    └── README.md

------------------------------------------------------------------------

# 🟦 Ejercicio --- Gestor de Biblioteca

## 1️⃣ Clase Libro

### 📗 Propiedades obligatorias

  Propiedad     Tipo     Requerido   Descripción
  ------------- -------- ----------- ---------------------
  `titulo`      string   ✔           Título del libro
  `autor`       string   ✔           Autor del libro
  `anio`        number   ✔           Año de publicación
  `categoria`   string   ✔           Categoría del libro

------------------------------------------------------------------------

### 🟧 Validaciones obligatorias

1.  **Título válido**
    -   Mínimo 2 caracteres
    -   Error: `throw new Error("Título inválido")`
2.  **Autor obligatorio**
    -   Error: `throw new Error("Autor inválido")`
3.  **Año válido**
    -   Entre 1500 y el año actual
    -   Error: `throw new Error("Año inválido")`
4.  **Categoría obligatoria**
    -   Error: `throw new Error("Categoría inválida")`

------------------------------------------------------------------------

### 📘 Métodos obligatorios

#### `descripcion()`

Devuelve:

    "Titulo (Anio) — Autor"

------------------------------------------------------------------------

## 2️⃣ Clase Biblioteca

### 📗 Propiedad

-   `libros = []`

------------------------------------------------------------------------

### 📘 Métodos obligatorios

#### `agregarLibro(libro)`

-   No permitir libros con mismo título y autor
-   Comparación case-insensitive
-   Error: `throw new Error("Libro duplicado")`

#### `eliminarLibro(titulo)`

-   Eliminar libro exacto
-   Error si no existe

#### `buscarPorAutor(autor)`

-   Retornar todos los libros del autor

#### `buscarPorCategoria(categoria)`

-   Retornar libros por categoría

#### `listarOrdenados()`

-   Retornar libros ordenados alfabéticamente

------------------------------------------------------------------------

# 🧪 Casos de Prueba

1.  Agregar 5 libros de distintos autores
2.  Buscar por autor
3.  Buscar por categoría
4.  Eliminar libro
5.  Intentar agregar libro duplicado → error

------------------------------------------------------------------------

# 🎯 Resultado esperado

Un gestor de biblioteca funcional y bien estructurado.

¡Éxitos! 🚀
