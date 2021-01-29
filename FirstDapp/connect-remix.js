const Web3 = require('web3')
const web3 = new Web3('HTTP://127.0.0.1:7545')

web3.eth.getTransactionCount("0x4690b857D4A4B519A2BdEFD5807681dC53C4a23E").then(console.log);