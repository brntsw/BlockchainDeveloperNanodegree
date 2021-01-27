/*##########################
## CONFIGURATION ##
##########################*/

// -- Step 1: Set up the appropriate configuration 
var Web3 = require("web3") 
var EthereumTransaction = require("ethereumjs-tx").Transaction // module for creating, manipulating, and signing Ethereum transactions
var web3 = new Web3('HTTP://127.0.0.1:7545')

// -- Step 2: Set the sending and receiving addresses for the transaction.
var sendingAddress = '0x4690b857D4A4B519A2BdEFD5807681dC53C4a23E'
var receivingAddress = '0x5449ba49ACEB069dD29E25c45E5b97457B4978b8'

// -- Step 3: Check the balances of each address 
web3.eth.getBalance(sendingAddress).then(console.log) 
web3.eth.getBalance(receivingAddress).then(console.log)

/*##########################
## CREATE A TRANSACTION ##
##########################*/

// -- Step 4: Set up the transaction using the transaction variables as shown 
var rawTransaction = {
    nonce: 0, 
    to: receivingAddress, 
    gasPrice: 20000000, 
    gasLimit: 30000, 
    value: 100, 
    data: "0x" 
}

// -- Step 5: View the raw transaction rawTransaction

// -- Step 6: Check the new account balances (they should be the same) 
web3.eth.getBalance(sendingAddress).then(console.log) 
web3.eth.getBalance(receivingAddress).then(console.log)

// Note: They haven't changed because they need to be signed...

/*##########################
## Sign the Transaction ##
##########################*/

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender 
var privateKeySender = '0af7ab3b8766dd34bf560aef99e25ce74585d67df327b9e6fcf4d6bfc05bce86' 
var privateKeySenderHex = new Buffer(privateKeySender, 'hex') 
var transaction = new EthereumTransaction(rawTransaction) 
transaction.sign(privateKeySenderHex)

/*#########################################
## Send the transaction to the network ##
#########################################*/

// -- Step 8: Send the serialized signed transaction to the Ethereum network. 
var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction); //Web3 is just used to send a transaction to the network