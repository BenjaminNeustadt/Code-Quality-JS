class Ledger {
  constructor(){
    this.history = [];
    this.date = new Date().toLocaleDateString();
    this.balance = 0;
  }

  credit(amount){
    this.balance += amount
    this.history.push({date: this.date, credit: amount, debit: 0, balance: this.balance})
  }

  debit(amount){
    this.balance -= amount
    this.history.push({date: this.date, credit: 0, debit: amount , balance: this.balance})
  }

  formatReport(){
    return (this.history)
  }
}

module.exports = Ledger;