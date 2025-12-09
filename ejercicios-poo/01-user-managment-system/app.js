import { Admin } from "./src/Admin.js";
import { Editor } from "./src/Editor.js";
import { Viewer } from "./src/Viewer.js";
import { documents } from "./src/AccessController.js";

console.log("=== ADMIN ===");
const admin = new Admin("Hernan", "Coronel");
console.log(admin.createDocument(3, "Factura C"));
console.log(admin.updateDocument(3, "Factura C Actualizada"));
console.log(admin.deleteDocument(1));
admin.readDocuments();

console.log("\n=== EDITOR ===");
const editor = new Editor("Ulises", "Morales");
console.log(editor.updateDocument(2, "Factura B EDITADA"));
editor.readDocuments();

console.log("\n=== VIEWER ===");
const viewer = new Viewer("Alejandro", "Fantino");
viewer.readDocuments();

console.log("\n=== DOCUMENTOS FINALES ===");
console.log(documents);
