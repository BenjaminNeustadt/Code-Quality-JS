const Transaction = require('./transaction');

class Ledger {
  constructor(transaction){
    this.date = new Date().toLocaleDateString();
    this.transaction = transaction
  }

  formatReport(){
    const ledger = transaction.showAll().reverse().map(n => `${ Object.values(n).join(' || ') }`)
    .join('\n')
    return 'date || credit || debit || balance\n' + ledger
  }
}

module.exports = Ledger;


const transaction = new Transaction();
transaction.credit(150);
transaction.credit(1300);
const ledger = new Ledger(transaction);
console.log(ledger.formatReport());
