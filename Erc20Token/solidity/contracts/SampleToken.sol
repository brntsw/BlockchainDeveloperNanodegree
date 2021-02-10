pragma solidity >=0.4.24;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract SampleToken is ERC20 {

    constructor () public ERC20("Simple Token", "SIM") {
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
    }
}