import { AccessController, documents } from "./AccessController.js";

export class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.role = "viewer"; // por defecto
  }

  createDocument(id, title) {
    if (!AccessController.can(this, "create")) return "❌ No autorizado";

    documents.push({ id, title });
    return documents;
  }

  deleteDocument(id) {
    if (!AccessController.can(this, "delete")) return "❌ No autorizado";

    const index = documents.findIndex(d => d.id === id);
    if (index !== -1) {
      documents.splice(index, 1);
      return true;
    }
    return false;
  }

  updateDocument(id, newTitle) {
    if (!AccessController.can(this, "edit")) return "❌ No autorizado";

    const index = documents.findIndex(d => d.id === id);
    if (index !== -1) {
      documents[index].title = newTitle;
      return true;
    }
    return false;
  }

  readDocuments() {
    if (!AccessController.can(this, "read")) return "❌ No autorizado";

    console.log("📄 Documentos:", documents);
    return documents;
  }
}
