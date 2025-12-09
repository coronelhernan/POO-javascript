import { User } from "./User.js";

export class Admin extends User {
  constructor(name, email) {
    super(name, email);
    this.role = "admin";
  }
}
