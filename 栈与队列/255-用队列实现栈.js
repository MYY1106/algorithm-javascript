// /**
//  * @method 两个队列
//  * @ref https://programmercarl.com/0225.%E7%94%A8%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E6%A0%88.html
//  */
// var MyStack = function () {
//     this.queue1 = []
//     this.queue2 = []
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function (x) {
//     this.queue1.push(x)
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.pop = function () {
//     if (this.empty()) return null

//     if (this.queue1.length === 0) {
//         [this.queue1, this.queue2] = [this.queue2, this.queue1]
//     }

//     while (this.queue1.length > 1)
//         this.queue2.push(this.queue1.shift())

//     return this.queue1.shift()
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.top = function () {
//     const x = this.pop()
//     this.push(x)
//     return x
// };

// /**
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function () {
//     return this.queue1.length === 0 && this.queue2.length === 0
// };






/**
 * @method 一个队列
 * @ref https://programmercarl.com/0225.%E7%94%A8%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E6%A0%88.html
 */

var MyStack = function () {
    this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    let count = 0
    while (count !== this.queue.length - 1) {
        this.queue.push(this.queue.shift()) // 将 除了最后一个元素的所有元素 全部重新插入到队尾
        count++
    }
    return this.queue.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    const x = this.pop()
    this.push(x)
    return x
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return !this.queue.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */