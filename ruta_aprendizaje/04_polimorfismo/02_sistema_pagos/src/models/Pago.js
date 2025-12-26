export default class Pay {
  constructor(amount) {
    this.amount = amount;
  }

  /*  =====================
      Validaciones
      =====================
  */

  isValidAmount() {
    if (!this.validateAmount(this.amount)) {
      throw new Error("Monto inválido");
    }
  }

  validateAmount(amount) {
    return (typeof amount === 'number' && amount > 0);
  }

  /*  =====================
      Metodos
      =====================
  */

  validate() {
    this.isValidAmount();
  }

  process() {
    throw new Error("Método procesar() debe ser implementado")
  }
}
