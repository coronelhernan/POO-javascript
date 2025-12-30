import Notification from '../models/Notification.js';
export default class Email extends Notification {
  constructor(message) {
    super(message);
  }

  send() {
    this.validate();
    return `Email enviado: ${this.message}`;
  }
}
