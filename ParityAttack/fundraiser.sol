pragma solidity ^0.7.4;

contract Library {
    function initWallet() public {
        // code
    }

    function addOwner(address owner) public {
        // code
    }

    function isOwner(address _addr) public returns (bool) {
        // code
    }
}

contract Wallet {
   function isOwner(address _addr) public returns (bool) {
       return _walletLibrary.delegatecall(msg.data);
   }

    //Fallback function
    fallback() external payable {
        //Delegate call
        _walletLibrary.delegatecall(msg.data);
    }

}