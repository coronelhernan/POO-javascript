import Pay from '../models/Pago.js';

export default class CashPayment extends Pay {
  constructor(amount) {
    super(amount);
  }

  process() {
    this.validate();
    return "Pago en efectivo registrado"
  }
}
