/**
 * @param {string[]} tokens
 * @return {number}
 * @method 栈
 */
var evalRPN = function (tokens) {
    const stack = [];
    for (const x of tokens) {
        if (isNaN(Number(x))) {
            const num1 = stack.pop();
            const num2 = stack.pop();
            switch (x) {
                case "+":
                    stack.push(parseInt(num2 + num1));
                    break;
                case "-":
                    stack.push(parseInt(num2 - num1));
                    break;
                case "*":
                    stack.push(parseInt(num2 * num1));
                    break;
                case "/":
                    stack.push(parseInt(num2 / num1));
                    break;
                default:
                    break;
            }
        } else {
            stack.push(Number(x));
        }
    }

    return stack.pop()
};




/**
 * @param {string[]} tokens
 * @return {number}
 * @method 栈（简化）
 */
var evalRPN = function (tokens) {
    const stack = [];
    const map = {
        "+": (a, b) => b + a,
        "-": (a, b) => b - a,
        "*": (a, b) => b * a,
        "/": (a, b) => b / a
    }
    for (const x of tokens) {
        if (isNaN(Number(x))) {
            stack.push(parseInt(map[x](stack.pop(), stack.pop())))
        } else {
            stack.push(Number(x));
        }
    }

    return stack.pop()
};