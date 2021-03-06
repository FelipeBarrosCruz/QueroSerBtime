import { expect } from 'chai'
import {invalidValue, words } from './mock'
import PrimeWord  from '../src/PrimeWord'

describe('PrimeWords', () => {

  let primeWord = null

  beforeEach(() => {
    primeWord = new PrimeWord()
  })

  it ('Expect primeWord const isn\'t to be equal null', () => {
    expect(primeWord).not.be.equal(null)
  })

  it ('Expect Mock words are string', () => {
    for (let index in words) {
      expect( (typeof words[index]) ).to.be.equal('string')
    }
  })

  it ('Expect primeWord isPrime returns an Error if argument is undefined', () => {
    expect ( (primeWord.isPrime() instanceof Error ) ).to.be.equal(true)
  })

  it ('Expect primeWord is prime return an Error if argument is invalid string', () => {
    expect( (primeWord.isPrime(invalidValue) instanceof Error) ).to.be.equal(true)
  })

  it ('Expect primeWord isPrime returns value type to be equal a boolean', () => {
    expect( (typeof primeWord.isPrime(words.primeWord)) ).to.be.equal('boolean')
    expect( (typeof primeWord.isPrime(words.nonPrimeWord)) ).to.be.equal('boolean')
  })

  it ('Expect Mock primeWord argument test isPrime to be equal a true', () => {
    expect(primeWord.isPrime(words.primeWord)).to.be.equal(true)
  })

  it('Expect Mock nonPrimeWord argument test isPrime to be equal a false', () => {
    expect(primeWord.isPrime(words.nonPrimeWord)).to.be.equal(false)
  })
})
