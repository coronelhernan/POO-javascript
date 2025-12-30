export default class Notification {
  constructor(message) {
    this.message = message;
  }

  // Validaciones
  isValidMessage() {
    if(!this.validateMessage(this.message)) {
      throw new Error("Mensaje inválido");
    }
  }

  validateMessage(message) {
    return typeof message === 'string' && message.trim() !== '';
  }

  // Metodos
  validate() {
    this.isValidMessage();
  }

  send() {
    throw new Error("Método enviar() debe ser implementado");
  }
}
