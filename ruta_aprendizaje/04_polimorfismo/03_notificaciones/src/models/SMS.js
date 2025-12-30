import Notification from './Notification.js';
export default class SMS extends Notification {
  constructor(message) {
    super(message);
  }

  send() {
    this.validate();
    return `SMS enviado: ${this.message}`;
  }
}
