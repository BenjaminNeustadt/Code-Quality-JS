class Transaction {
  constructor() {
    this.balance = 0;
    this.date = new Date().toLocaleDateString();
  }

  credit(amount) {
    if (amount) {
      this.balance += amount
      return { date: date, credit: amount, debit: 0, balance: this.balance}
    } else if (!amount){
      let amount = 0
      return { date: date, credit: amount, debit: 0, balance: this.balance}
    }
  }

  debit(amount) {
    if (amount) {
      this.balance -= amount
      return { date: date, credit: 0, debit: amount, balance: this.balance}
    } else if (!amount){
      let amount = 0
      return { date: date, credit: 0, debit: amount, balance: this.balance}
    }
  }
}



module.exports = Transaction;