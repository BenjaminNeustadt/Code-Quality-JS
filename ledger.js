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
    return console.table(this.history)
  }
  // formatting tool `console.table` will make all tests fail as will return 'undefined',
  // should be removed to make tests pass
}

module.exports = Ledger;
