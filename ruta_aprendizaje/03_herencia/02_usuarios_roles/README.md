# 🧪 Prueba Técnica --- Usuarios por Rol (Herencia)

Este ejercicio simula una **prueba técnica real**, centrada en la
creación de usuarios con distintos roles, utilizando **herencia**,
**reutilización de lógica** y **especialización de comportamiento**.

------------------------------------------------------------------------

## 📌 Objetivo General

Desarrollar un sistema de usuarios donde cada rol tenga permisos
específicos, partiendo de una clase base común.

El sistema debe permitir: - Autenticación básica - Diferenciar permisos
por rol - Reutilizar lógica compartida - Escalar fácilmente nuevos roles

------------------------------------------------------------------------

## 🏗️ Estructura del Proyecto (recomendada)

    usuarios-roles/
    │
    ├── src/
    │   ├── models/
    │   │   ├── Usuario.js
    │   │   ├── Admin.js
    │   │   ├── Editor.js
    │   │   └── Viewer.js
    │   │
    │   └── main.js
    │
    ├── tests/
    │   └── usuarios.test.js   (opcional)
    │
    └── README.md

------------------------------------------------------------------------

# 🟦 Ejercicio --- Usuarios por Rol

## 1️⃣ Clase Usuario (Base)

### 📗 Propiedades obligatorias

  Propiedad   Tipo     Requerido   Descripción
  ----------- -------- ----------- ------------------------
  email       string   ✔           Email del usuario
  password    string   ✔           Contraseña del usuario

------------------------------------------------------------------------

### 🟧 Validaciones obligatorias

1.  **Email válido**
    -   No vacío
    -   Error: `throw new Error("Email inválido")`
2.  **Password válida**
    -   Mínimo 6 caracteres
    -   Error: `throw new Error("Password inválida")`

------------------------------------------------------------------------

### 📘 Método obligatorio

#### `login(passwordIngresada)`

-   Compara con la contraseña almacenada
-   Retorna:
    -   `"Login correcto"`
    -   `"Contraseña incorrecta"`

------------------------------------------------------------------------

## 2️⃣ Clase Admin (extends Usuario)

### 📘 Método obligatorio

#### `getPermisos()`

Devuelve:

    "Puede leer, editar y borrar"

------------------------------------------------------------------------

## 3️⃣ Clase Editor (extends Usuario)

### 📘 Método obligatorio

#### `getPermisos()`

Devuelve:

    "Puede leer y editar"

------------------------------------------------------------------------

## 4️⃣ Clase Viewer (extends Usuario)

### 📘 Método obligatorio

#### `getPermisos()`

Devuelve:

    "Solo puede leer"

------------------------------------------------------------------------

# 🧪 Casos de Prueba Obligatorios

1.  Crear:
    -   1 Admin
    -   1 Editor
    -   1 Viewer
2.  Guardarlos en un array mezclado
3.  Iterar llamando `getPermisos()`
4.  Probar:
    -   Login exitoso
    -   Login fallido

------------------------------------------------------------------------

# 🎯 Resultado Esperado

Un sistema de usuarios bien modelado que demuestre: - Herencia
correcta - Separación de responsabilidades - Código escalable - Nivel
esperado en entrevistas técnicas

------------------------------------------------------------------------

Prueba técnica superada ✔️
