/**
 * @param {string} s
 * @return {boolean}
 * @method 栈
 */
var isValid = function (s) {
    if (s.length % 2) return false

    const stack = []
    for (const symbol of s) {
        switch (symbol) {
            case "(":
            case "[":
            case "{":
                stack.push(symbol)
                break
            case ")":
                if (stack.pop() !== "(") return false
                break
            case "]":
                if (stack.pop() !== "[") return false
                break
            case "}":
                if (stack.pop() !== "{") return false
                break
            default:
                break
        }
    }

    return stack.length === 0
};




/**
 * @param {string} s
 * @return {boolean}
 * @method 栈（简化）
 * @ref https://programmercarl.com/0020.%E6%9C%89%E6%95%88%E7%9A%84%E6%8B%AC%E5%8F%B7.html
 */
var isValid = function (s) {
    if (s.length % 2) return false

    const stack = []
    const map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    for (const symbol of s) {
        if (symbol in map) {
            stack.push(map[symbol])
        }
        else {
            if (symbol !== stack.pop())
                return false
        }
    }

    return stack.length === 0
};