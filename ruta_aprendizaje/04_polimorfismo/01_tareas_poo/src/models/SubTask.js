import Task from "../models/Task.js";

export default class SubTask extends Task {
  constructor(title, state, parentTask) {
    super(title, state);

    if (!(parentTask instanceof Task)) {
      throw new Error("La subtarea debe tener una tarea padre válida");
    }

    this.parentTask = parentTask;
  }

  changeStatus() {
    // Solo validar cuando se intenta completar
    if (this.state === "pendiente" && this.parentTask.state !== "completada") {
      throw new Error("La tarea padre no está completada");
    }

    super.changeStatus();
  }
}
