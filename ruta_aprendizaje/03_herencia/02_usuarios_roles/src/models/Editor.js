import User from '../models/User.js';

export default class Editor extends User {
  constructor(email, password) {
    super(email, password);
  }

  getPermits() {
    return "Puede leer y editar";
  }
}
