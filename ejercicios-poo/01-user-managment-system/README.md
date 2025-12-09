
# 📘 Sistema de Gestión de Usuarios (Roles y Permisos)

## 📝 Descripción General
Este proyecto consiste en implementar un sistema básico de gestión de usuarios utilizando **Programación Orientada a Objetos (POO) en JavaScript**.  
El objetivo es simular un entorno donde distintos tipos de usuarios poseen distintos **roles**, **permisos**, y **capacidades operativas**, aplicando conceptos fundamentales como:

- Herencia  
- Polimorfismo  
- Encapsulación  
- Composición

## 🎯 Objetivo General
Construir un módulo de usuarios con roles diferenciados y un sistema de permisos que valide acciones antes de ejecutarlas.

## 🧱 Requerimientos Funcionales

### 1. Clase base: `User`
Debe incluir:
- `name`
- `email`
- `role` (por defecto `"viewer"`)

### 2. Clases hijas
#### 👑 Admin  
- Permisos: `create`, `edit`, `delete`, `read`

#### ✏️ Editor  
- Permisos: `edit`, `read`

#### 👁️ Viewer  
- Solo puede `read`

### 3. AccessController
Debe incluir un método:
`can(user, action)` → retorna true o false.

### 4. Sistema de Logs
Registrar:
- usuario  
- acción  
- resultado  
- timestamp  

## 📁 Estructura Recomendada
```
/01-user-management/
│── index.html
│── app.js
├── /src/
│   ├── User.js
│   ├── Admin.js
│   ├── Editor.js
│   ├── Viewer.js
│   ├── AccessController.js
│   └── Logger.js
└── README.md
```

## 🧪 Casos de Uso
- Crear usuarios
- Validar permisos
- Registrar logs de acciones

## ⭐ Extras
- UI opcional
- Logs persistentes
- Sistema de permisos dinámicos
