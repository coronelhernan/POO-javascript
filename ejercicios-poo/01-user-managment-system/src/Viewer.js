import { User } from "./User.js";

export class Viewer extends User {
  constructor(name, email) {
    super(name, email);
    this.role = "viewer";
  }
}
