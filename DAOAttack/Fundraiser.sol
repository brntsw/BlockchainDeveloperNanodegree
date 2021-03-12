pragma solidity ^0.7.4;

contract Fundraiser {
    mapping(address=>uint) balances;

    function withdrawCoins(){
        uint withdrawAmount = balances[msg.sender];
        balances[msg.sender] = 0; // This is CORRECT :)
        Wallet wallet = Wallet(msg.sender);
        wallet.payout.value(withdrawAmount)(); //ISSUE
        // balances[msg.sender] = 0; -> This line is the cause of the hack
    }

    function getBalance() returns (uint) {
        return address(this).balance;
    }

    function contribute() payable {
        balances[msg.sender] += msg.value;
    }

    function() payable {

    }
}

contract Wallet {

    Fundraiser fundraiser;
    uint recursion = 20;

    function Wallet(address fundraiserAddress) {
        fundraiser = Fundraiser(fundraiserAddress);
    }

    function contribute(uint amount) {
        fundraiser.contribute.value(amount)();
    }

    function withdraw(){
        fundraiser.withdrawCoins();
    }

    function getBalance() constant returns (uint) {
        return address(this).balance;
    }

    function payout() payable {
        if(recursion > 0) {
            recursion--;
            fundraiser.withdrawCoins();
        }
    }

    function() payable {

    }
}