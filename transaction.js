class Transaction {
  constructor() {
    this.balance = 0;
    this.date = new Date().toLocaleDateString();
    this.history = [];
  }

   credit(amount){
    this.balance += amount
    this.history.push({
      date: this.date,
      credit: amount,
      debit: 0,
      balance: this.balance
    })
  }

  debit(amount){
    this.balance -= amount
    this.history.push({
      date: this.date,
      credit: 0,
      debit: amount,
      balance: this.balance
    })
  }

  showAll(){
    return this.history;
  }
  
}



module.exports = Transaction;