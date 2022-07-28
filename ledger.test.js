// **Given**   a client makes a deposit of 1000 on 10-01-2023
//   **And**   a deposit of 2000 on 13-01-2023
//   **And**   a withdrawal of 500 on 14-01-2023
//   **When**  she prints her bank statement
//   **Then**  she would see

// ```
// date       || credit    || debit  || balance
// 14/01/2023 ||           || 500.00 || 2500.00
// 13/01/2023 || 2000.00   ||        || 3000.00
// 10/01/2023 || 1000.00   ||        || 1000.00

const Ledger = require('./ledger');

describe('Ledger', () => {

  it('formatReport method should return empty at first', () => {
    let ledger = new Ledger();
    expect(ledger.formatReport()).toEqual([]);
  })

  it('when account credited, returns report with headers: formatted date and increment balance', () => {
    let ledger = new Ledger();
    ledger.credit(100)
    let format = ledger.formatReport();
    expect(format).toEqual([{date: new Date().toLocaleDateString(), credit: 100, debit: 0, balance: 100}])
  })

  it('when account debited, returns report with headers: formatted date and increment balance', () => {
    let ledger = new Ledger();
    ledger.debit(100)
    let format = ledger.formatReport();
    expect(format).toEqual([{date: new Date().toLocaleDateString(), credit: 0, debit: 100, balance: 100}])
  })

})