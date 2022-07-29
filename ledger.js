class Ledger {
  constructor(){
    this.history = [];
    this.date = new Date().toLocaleDateString();
    this.balance = 0;
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

  formatReport(){
    const ledger = this.history.reverse().map(n => `${ Object.values(n).join(' || ') }`)
    .join('\n')
    return 'date || credit || debit || balance\n' + ledger
  }
}

module.exports = Ledger;

// const statement = new Ledger();
// statement.credit(150);
// statement.credit(1300);
// statement.debit(150);
// console.log(statement.formatReport());
