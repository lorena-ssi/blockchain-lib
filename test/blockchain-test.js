'use strict'
const chai = require('chai')
const BlockchainInterface = require('../src/index.js')

// Configure chai
chai.should()
const expect = chai.expect

describe('Lorena Blockchain interface', function () {
  it('Should generate a correct class if all methods are implemented', () => {
    class TestBlockchain extends BlockchainInterface {
      connect () {}
      disconnect () {}
      registerDid () {}
      getActualDidKey () {}
      registerDidDocument () {}
      getDidDocHash () {}
      rotateKey () {}
    }

    const blockchain = new TestBlockchain()
    expect(blockchain).to.be.an('object')
  })

  it('Should generate a correct class if some methods are async', () => {
    class TestBlockchain extends BlockchainInterface {
      disconnect () {}
      registerDid () {}
      getActualDidKey () {}
      registerDidDocument () {}
      getDidDocHash () {}
      rotateKey () {}
    }
    (() => new TestBlockchain()).should.throw(Error, 'Blockchain must have function `connect`!')
  })

  it('Should generate a correct class if some methods are async', () => {
    class TestBlockchain extends BlockchainInterface {
      connect () {}
      registerDid () {}
      getActualDidKey () {}
      registerDidDocument () {}
      getDidDocHash () {}
      rotateKey () {}
    }
    (() => new TestBlockchain()).should.throw(Error, 'Blockchain must have function `disconnect`!')
  })

  it('Should generate a correct class if some methods are async', () => {
    class TestBlockchain extends BlockchainInterface {
      connect () {}
      disconnect () {}
      getActualDidKey () {}
      registerDidDocument () {}
      getDidDocHash () {}
      rotateKey () {}
    }
    (() => new TestBlockchain()).should.throw(Error, 'Blockchain must have function `registerDid`!')
  })

  it('Should generate a correct class if some methods are async', () => {
    class TestBlockchain extends BlockchainInterface {
      connect () {}
      disconnect () {}
      registerDid () {}
      registerDidDocument () {}
      getDidDocHash () {}
      rotateKey () {}
    }
    (() => new TestBlockchain()).should.throw(Error, 'Blockchain must have function `getActualDidKey`!')
  })

  it('Should generate a correct class if some methods are async', () => {
    class TestBlockchain extends BlockchainInterface {
      connect () {}
      disconnect () {}
      registerDid () {}
      getActualDidKey () {}
      getDidDocHash () {}
      rotateKey () {}
    }
    (() => new TestBlockchain()).should.throw(Error, 'Blockchain must have function `registerDidDocument`!')
  })

  it('Should generate a correct class if some methods are async', () => {
    class TestBlockchain extends BlockchainInterface {
      connect () {}
      disconnect () {}
      registerDid () {}
      getActualDidKey () {}
      registerDidDocument () {}
      rotateKey () {}
    }
    (() => new TestBlockchain()).should.throw(Error, 'Blockchain must have function `getDidDocHash`!')
  })

  it('Should generate a correct class if some methods are async', () => {
    class TestBlockchain extends BlockchainInterface {
      connect () {}
      disconnect () {}
      registerDid () {}
      getActualDidKey () {}
      registerDidDocument () {}
      getDidDocHash () {}
    }
    (() => new TestBlockchain()).should.throw(Error, 'Blockchain must have function `rotateKey`!')
  })
})
