const Ledger = require('./ledger');

describe('Ledger', () => {

  beforeEach(() => {
    ledger = new Ledger();
    date = new Date().toLocaleDateString()
  })

  xit('formatReport method should return empty at first', () => {
    expect(ledger.formatReport()).toEqual([]);
  })

  xit('when account credited, returns report with headers: formatted date and increment balance', () => {
    ledger.credit(100)
    expect(format).toEqual([{date: new Date().toLocaleDateString(), credit: 100, debit: 0, balance: 100}])
  })

  xit('when account debited, returns report with headers: formatted date and increment balance', () => {
    ledger.credit(300)
    ledger.debit(100)
    expect(format).toEqual([{date: new Date().toLocaleDateString(), credit: 300, debit: 0, balance: 300}, {date: new Date().toLocaleDateString(), credit: 0, debit: 100, balance: 200}])
  })

  xit('increments balance, and new event cases for multiple entries', () => {
    ledger.credit(100)
    ledger.credit(800)
    expect(format).toEqual([{date: new Date().toLocaleDateString(), credit: 100, debit: 0, balance: 100}, {date: new Date().toLocaleDateString(), credit: 800, debit: 0, balance: 900}])
  })

  xit('increments balance, and new event cases for multiple entries', () => {
    ledger.credit(400)
    ledger.credit(800)
    ledger.debit(500)
    expect(format).toEqual([{date: new Date().toLocaleDateString(), credit: 400, debit: 0, balance: 400}, {date: new Date().toLocaleDateString(), credit: 800, debit: 0, balance: 1200}, {date: new Date().toLocaleDateString(), credit: 0, debit: 500, balance: 700}])
  })

  xit('can store floats', () => {
    ledger.credit(400.57)
    expect(format).toEqual([{date: new Date().toLocaleDateString(), credit: 400.57, debit: 0, balance: 400.57}])
  })

  it('returns header', () => {
    format = ledger.formatReport();
    expect(format).toEqual('date || credit || debit || balance\n')
  })

  it('returns header and events', () => {
    ledger.credit(150);
    expect(ledger.formatReport()).toEqual(`date || credit || debit || balance\n${date} || 150 || 0 || 150`)

  })

})