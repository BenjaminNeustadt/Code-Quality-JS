const Ledger = require('./ledger');

describe('Ledger', () => {

  beforeEach(() => {
    ledger = new Ledger();
    date = new Date().toLocaleDateString()
  })

  xit('returns header', () => {
    format = ledger.formatReport();
    expect(format)
    .toEqual('date || credit || debit || balance\n')
  })

  xit('returns header and one credit event', () => {
    ledger.credit(150);
    expect(ledger.formatReport())
    .toEqual(`date || credit || debit || balance\n${date} || 150 || 0 || 150`)
  })

  xit('increments balance when debit events occur (in reverse chrono order)', () => {
    ledger.credit(200)
    ledger.credit(200)
    expect(ledger.formatReport())
    .toEqual(`date || credit || debit || balance\n${date} || 200 || 0 || 400\n${date} || 200 || 0 || 200`)
  })

  xit('decrement balance when debit called after credit', () => {
    ledger.credit(800)
    ledger.debit(100)
    expect(ledger.formatReport())
    .toEqual(`date || credit || debit || balance\n${date} || 0 || 100 || 700\n${date} || 800 || 0 || 800`)
  })

  xit('can return floats', () => {
    ledger.credit(400.57)
    expect(ledger.formatReport())
    .toEqual(`date || credit || debit || balance\n${date} || 400.57 || 0 || 400.57`)
  })
})