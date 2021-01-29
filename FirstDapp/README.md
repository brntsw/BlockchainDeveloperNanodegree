# First DApp project

This project contains the following tools:
  - Remix
  - Ganache
  - Metamask

## **Remix**
Remix is an online integrated development environment for creating smart contracts

## **Ganache**
Ganache helps building and testing applications using local own blockchain

## **Metamask**
Metamask is a browser extension that brings Ethereum into the browser

## **1. Connecting to Remix**
First thing is going to Remix and copying the code to a file called myMessage.sol (Solidity extension):
![Screenshot](docs/remix_code.png)

## **2. Connecting Remix to Ganache UI**
Open Ganache UI and then on Remix select Web3 Provider:

![Screenshot](docs/remix_ganache.png)


In order to change the Web3 provider endpoint so it can be used Ganache, on Remix after doing step 2 it'll be shown the following:

![Screenshot](docs/external_node_request.png)

  - Change from 8545 to 7545
  - After that, click on **Deploy**

On Remix, it's going to show as successful:

![Screenshot](docs/remix_success_deploy.png)

## **3. Ganache UI**
On Ganache, it's going to show as a transaction called **Contract Creation**:

![Screenshot](docs/ganache_transaction_contract.png)

## **4. Getting the information from Remix to use on code**
In order to use the values of ABI and Address of the account, it's required to copy those from Remix.
Copying the ABI can be done as follows:

![Screenshot](docs/remix_copy_abi.png)

Then copying the Address of the acccount can be done like below:

![Screenshot](docs/remix_address_copy.png)

**IMPORTANT**: Both ABI and Address account can be obtained using the [Etherscan website](https://etherscan.io/address/0xdac17f958d2ee523a2206206994597c13d831ec7)
