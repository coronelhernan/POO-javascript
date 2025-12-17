import User from '../models/User.js';

export default class Viewer extends User {
  constructor(email, password) {
    super(email, password);
  }

  getPermits() {
    return "Solo puede leer";
  }
}
