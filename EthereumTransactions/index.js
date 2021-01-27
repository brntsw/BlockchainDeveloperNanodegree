var Web3 = require("web3") 
var EthereumTransaction = require("ethereumjs-tx").Transaction // module for creating, manipulating, and signing Ethereum transactions
var web3 = new Web3('HTTP://127.0.0.1:7545')

var sendingAddress = '0x4690b857D4A4B519A2BdEFD5807681dC53C4a23E'
var receivingAddress = '0x5449ba49ACEB069dD29E25c45E5b97457B4978b8'

web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

var rawTransaction = {
    nonce: 2, 
    to: receivingAddress, 
    gasPrice: 20000000, 
    gasLimit: 30000, 
    value: 100, 
    data: "0x" 
}

var privateKeySender = '0af7ab3b8766dd34bf560aef99e25ce74585d67df327b9e6fcf4d6bfc05bce86' 
var privateKeySenderHex = new Buffer(privateKeySender, 'hex') 
var transaction = new EthereumTransaction(rawTransaction) 
transaction.sign(privateKeySenderHex)

var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction); //Web3 is just used to send a transaction to the network