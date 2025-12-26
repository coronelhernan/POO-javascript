import Pay from '../models/Pago.js';

export default class TransferPayment extends Pay {
  constructor(amount, cbu, bank) {
    super(amount);
    this.cbu = cbu;     
    this.bank = bank;
  }

  isValidCbu() {
    if (!this.validateCbu(this.cbu)) {
      throw new Error("CBU inválido");
    }
  }

  validateCbu(cbu) {
    return (
      typeof cbu === "string" &&
      /^\d{22}$/.test(cbu)
    );
  }

  isValidBank() {
    if (!this.validateBank(this.bank)) {
      throw new Error("Banco requerido");
    }
  }

  validateBank(bank) {
    return (
      typeof bank === "string" &&
      bank.trim().length > 0
    );
  }

  validate() {
    super.validate();
    this.isValidCbu();
    this.isValidBank();
  }

  process() {
    this.validate();
    return "Pago por transferencia confirmado";
  }
}
