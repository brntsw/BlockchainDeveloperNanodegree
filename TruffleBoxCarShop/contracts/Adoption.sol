// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

//A contract in the sense of Solidity is a collection of code 
//(its functions) and data (its state) that resides at a specific 
//address on the Ethereum blockchain

contract Adoption {
    //Public variables have automatic getter methods
    address[16] public adopters; //Addresses are Ethereum addresses, stored as 20 byte values

    function adopt(uint petId) public returns (uint) {
        require(petId >= 0 && petId <= 15);

        adopters[petId] = msg.sender;

        return petId;
    }

    function getAdopters() public view returns (address[16] memory) {
        //memory gives the data location for the variable
        //View means that the function will not modify the state of the contract
        return adopters;
    }
}