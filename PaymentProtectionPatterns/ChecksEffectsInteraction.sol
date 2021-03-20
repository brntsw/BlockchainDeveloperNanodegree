using SafeMath for uint256;

mapping(address => uint 256) private sales;

function safeWithdraw(uint256 amount) external {
    //Checks

    //msg.sender is the caller of the function
    require(msg.sender == tx.origin, "Contracts not allowed"); //if those are met, the caller is not a contract. It is an externally owned account (User)
    require(sales[msg.sender] >= amount, "Insufficient funds");

    //Effects
    uint256 amount = sales[msg.sender];
    sales[msg.sender] = sales[msg.sender].sub(amount);

    //Interaction
    msg.sender.transfer(amount);
}