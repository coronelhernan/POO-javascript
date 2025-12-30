import Notification from '../models/Notification.js';
export default class Push extends Notification {
  constructor(message) {
    super(message);
  }

  send() {
    this.validate();
    return `Notifiacion push enviada: ${this.message}`;
  }
}
