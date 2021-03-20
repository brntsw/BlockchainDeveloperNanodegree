using SafeMatch for uint256;

uint256 private enabled = block.timestamp;

modifier rateLimit(uint time) {
    require(block.timestamp >= enabled, "Rate limiting in effect");
    enabled = enabled.add(time); //increment the time using SafeMath add
    //-> It guarantees that the function that is using the modifier cannot be called if the interval has not yet elapsed
    _;
}

function safeWithDraw(uint256 amount) external rateLimit(30 minutes) {
    //TODO
}