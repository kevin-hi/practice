/*

    Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

    Example:

    MovingAverage m = new MovingAverage(3);
    m.next(1) = 1
    m.next(10) = (1 + 10) / 2
    m.next(3) = (1 + 10 + 3) / 3
    m.next(5) = (10 + 3 + 5) / 3

 */

/**
 * Initialize your data structure here.
 * @param {number} size
 */
const MovingAverage = function(size) {
    this.store = [];
    this.size = size;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.store.length >= this.size) this.store.shift();
    this.store.push(val);
    console.log(this.store);
    return this.store.reduce((a, b) => a + b, 0)/this.store.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = Object.create(MovingAverage).createNew(size)
 * var param_1 = obj.next(val)
 */

const m = new MovingAverage(3);
console.log(m.next(1));
console.log(m.next(10));
console.log(m.next(3));
console.log(m.next(5));