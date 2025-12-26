import Pay from '../models/Pago.js';

export default class CardPayment extends Pay {
  constructor(amount, cardNumber, expirationDate) {
    super(amount);
    this.cardNumber = cardNumber;         
    this.expirationDate = expirationDate; 
  }

  isValidCardNumber() {
    if (!this.validateCardNumber(this.cardNumber)) {
      throw new Error("Número de tarjeta inválido");
    }
  }

  validateCardNumber(cardNumber) {
    return (
      typeof cardNumber === "string" &&
      /^\d{16}$/.test(cardNumber)
    );
  }

  isValidExpirationDate() {
    if (!this.validateExpirationDate(this.expirationDate)) {
      throw new Error("Tarjeta vencida");
    }
  }

  validateExpirationDate(expirationDate) {
    if (typeof expirationDate !== "string") return false;

    const [month, year] = expirationDate.split("/").map(Number);
    if (!month || !year || month < 1 || month > 12) return false;

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear() % 100;

    if (year < currentYear) return false;
    if (year === currentYear && month < currentMonth) return false;

    return true;
  }

  validate() {
    super.validate();
    this.isValidCardNumber();
    this.isValidExpirationDate();
  }

  process() {
    this.validate();
    return "Pago con tarjeta aprobado";
  }
}
