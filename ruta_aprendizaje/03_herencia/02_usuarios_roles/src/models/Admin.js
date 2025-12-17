import User from '../models/User.js';

export default class Admin extends User {
  constructor(email, password) {
    super(email, password);
  }

  getPermits() {
    return "Puede leer, editar y borrar";
  }
}
