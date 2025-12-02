// "this" hace referencia al objeto que está ejecutando el método en ese momento.
// Permite acceder y modificar sus propias propiedades internas.
// En este caso, "this.amount" significa: el "amount" del objeto "account".
// Si no se usara "this", JavaScript buscaría una variable externa en lugar
// de la propiedad del objeto, rompiendo el comportamiento correcto.


const user = {
  name : "Juan",
  lastname: "Perez",
  age: 30,
  showFullName() {
    return `${this.name} ${this.lastname}`
  }
}

//console.log(user.showFullName())

const account = {
  number : "0913209123931901",
  amount: 100,
  deposit(quantity) {
    this.amount = this.amount + quantity;
  }, 
  withdraw(quantity) {
    this.amount = this.amount - quantity;
  }
}

account.deposit(100);
account.deposit(50);
account.deposit(70);
console.log(account);

account.withdraw(80);
account.withdraw(100);
console.log(account);
