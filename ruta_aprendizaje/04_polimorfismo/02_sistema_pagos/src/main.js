import CardPayment from "./models/PagoTarjeta.js";
import CashPayment from "./models/PagoEfectivo.js";
import TransferPayment from "./models/PagoTransferencia.js";

/*
* Casos de Prueba:
* Crear instancias de:
* PagoTarjeta
* PagoEfectivo
* PagoTransferencia
* Almacenarlas en un mismo arreglo
* Iterar llamando únicamente a procesar()
*/

/* =========================
   Valid Cases
   ========================= */

const cardPaymentOk = new CardPayment(
  15000,
  "4111111111111111",
  "12/30"
);

const cashPaymentOk = new CashPayment(5000);

const transferPaymentOk = new TransferPayment(
  22000,
  "1234567890123456789012",
  "Banco Prueba"
);

/* =========================
   Error Cases
   ========================= */

// Negative amount
const invalidAmountPayment = new CashPayment(-1000);

// Invalid card number
const invalidCardNumberPayment = new CardPayment(
  12000,
  "1234",
  "12/30"
);

// Expired card
const expiredCardPayment = new CardPayment(
  12000,
  "4111111111111111",
  "01/20"
);

// Invalid CBU
const invalidCBUPayment = new TransferPayment(
  18000,
  "123",
  "Banco Prueba 2"
);

// Empty bank name
const emptyBankPayment = new TransferPayment(
  18000,
  "1234567890123456789012",
  ""
);

/* =========================
   Iteration calling process() on all payments
   ========================= */

const payments = [
  cardPaymentOk,
  cashPaymentOk,
  transferPaymentOk
];

const paymentsWithError = [
  invalidAmountPayment,
  invalidCardNumberPayment,
  expiredCardPayment,
  invalidCBUPayment,
  emptyBankPayment
]

payments.forEach(payment => {
  console.log(payment.process());
});
