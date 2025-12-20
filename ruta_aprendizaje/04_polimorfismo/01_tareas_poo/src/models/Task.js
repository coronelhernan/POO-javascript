export default class Task {
  constructor(title, state) {
    this.title = title;
    this.state = state;

    this.validateTitle();
    this.validateState();
  }

  // ─────────────────────────
  // Validaciones
  // ─────────────────────────

  validateTitle() {
    if (!this.isValidTitle(this.title)) {
      throw new Error("Título inválido");
    }
  }

  isValidTitle(title) {
    return (
      typeof title === "string" &&
      title.trim().length >= 3
    );
  }

  validateState() {
    if (!this.isValidState(this.state)) {
      throw new Error("Estado inválido");
    }
  }

  isValidState(state) {
    return state === "pendiente" || state === "completada";
  }

  // ─────────────────────────
  // Metodo de cambio de estado
  // ─────────────────────────

  changeStatus() {
    this.state = this.state === "pendiente"
      ? "completada"
      : "pendiente";
  }
}
