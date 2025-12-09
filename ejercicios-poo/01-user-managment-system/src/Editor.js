import { User } from "./User.js";

export class Editor extends User {
  constructor(name, email) {
    super(name, email);
    this.role = "editor";
  }
}
