export default class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;

    this.validateEmail();
    this.validatePassword();
  }

  validateEmail() {
    if (!this.isValidEmail(this.email)) {
      throw new Error("Email inválido");
    }
  }

  isValidEmail(email) {
    return typeof email === 'string' && email.trim() !== '';
  }

  validatePassword() {
    if (!this.isValidPassword(this.password)) {
      throw new Error("Password inválida");
    }
  }

  isValidPassword(password) {
    return typeof password === 'string' && password.trim().length >= 6;
  }

  login(passwordIngresed) {
    if (typeof passwordIngresed !== 'string') {
      return "Password inválida";
    }

    return passwordIngresed === this.password
      ? "Login correcto"
      : "Contraseña incorrecta";
  }
}
