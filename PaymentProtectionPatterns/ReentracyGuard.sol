using SafeMath for uint256;

uint256 private counter = 1;

modifier entrancyGuard() {
    counter = counter.add(1);
    uint256 guard = counter;
    _; //Function gets called
    //-> Let's imagine the function is subject to a reentrancy attack. As a result it loops back and calls entrancyGuard again
    //-> The function gets called and the process repeats. As this happens, the require function is not called. It will be called after the function has completed executing which may be 1 time or x times
    //-> When it comes back, it checks the value of guard and compare it to counter
        // -> because it is a state variable, will have been incremented, maliciously called by an external contract
        // -> however, guard will keep its state value and compare to counter. That will immediately fail because the counter value will be significantly far ahead of guard had the function called repeatedly
    require(guard == counter, "That is not allowed");
}

function safeWithdraw(uint256 amount) external entrancyGuard() {
    //TODO
}