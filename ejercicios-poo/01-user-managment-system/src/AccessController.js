// Arreglo básico de documentos (simula base de datos global)
export const documents = [
  { id: 1, title: "Contrato A" },
  { id: 2, title: "Factura B" },
];

// Permisos por rol
export const ROLE_PERMISSIONS = {
  admin: ["create", "edit", "delete", "read"],
  editor: ["edit", "read"],
  viewer: ["read"]
};

export class AccessController {
  static can(user, action) {
    const role = user.role;
    const allowed = ROLE_PERMISSIONS[role].includes(action);

    console.log(`🔐 Check: ${user.name} (${role}) puede "${action}"? → ${allowed}`);
    return allowed;
  }
}
