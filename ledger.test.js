const Ledger = require('./ledger');

describe('Ledger', () => {

  beforeEach(() => {
    ledger = new Ledger();
    format = ledger.formatReport();
  })

  it('formatReport method should return empty at first', () => {
    expect(ledger.formatReport()).toEqual([]);
  })

  it('when account credited, returns report with headers: formatted date and increment balance', () => {
    ledger.credit(100)
    expect(format).toEqual([{date: new Date().toLocaleDateString(), credit: 100, debit: 0, balance: 100}])
  })

  it('when account debited, returns report with headers: formatted date and increment balance', () => {
    ledger.credit(300)
    ledger.debit(100)
    expect(format).toEqual([{date: new Date().toLocaleDateString(), credit: 300, debit: 0, balance: 300}, {date: new Date().toLocaleDateString(), credit: 0, debit: 100, balance: 200}])
  })

  it('increments balance, and new event cases for multiple entries', () => {
    ledger.credit(100)
    ledger.credit(800)
    expect(format).toEqual([{date: new Date().toLocaleDateString(), credit: 100, debit: 0, balance: 100}, {date: new Date().toLocaleDateString(), credit: 800, debit: 0, balance: 900}])
  })

  it('increments balance, and new event cases for multiple entries', () => {
    ledger.credit(400)
    ledger.credit(800)
    ledger.debit(500)
    expect(format).toEqual([{date: new Date().toLocaleDateString(), credit: 400, debit: 0, balance: 400}, {date: new Date().toLocaleDateString(), credit: 800, debit: 0, balance: 1200}, {date: new Date().toLocaleDateString(), credit: 0, debit: 500, balance: 700}])
  })

  it('can store floats', () => {
    ledger.credit(400.57)
    expect(format).toEqual([{date: new Date().toLocaleDateString(), credit: 400.57, debit: 0, balance: 400.57}])
  })

})