const Transaction = require('./transaction');

describe('Transaction', () => {

  beforeEach(() => {
    date = new Date().toLocaleDateString();
  })

  describe('Credit', () => {

    it('returns balance of 0 when amount undefined', () => {
      transaction = new Transaction();
      expect(transaction.credit()).toEqual({
        date: date,
        credit: 0,
        debit: 0,
        balance: 0
      })
    })

    it('returns balance of 50 when 50 is added', () => {
      transaction = new Transaction();
      expect(transaction.credit(50)).toEqual({
        date: date,
        credit: 50,
        debit: 0,
        balance: 50
      })
    })
  })

  describe('Debit', () => {

    it('returns balance of -50 when 50 is deducted', () => {
      transaction = new Transaction();
      expect(transaction.debit(50)).toEqual({
        date: date,
        credit: 0,
        debit: 50,
        balance: -50
      })
      
    })
  })
})