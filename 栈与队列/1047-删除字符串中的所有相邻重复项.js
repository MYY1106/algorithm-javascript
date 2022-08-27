/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    const stack = [];

    for (const letter of s) {
        stack[stack.length - 1] === letter ? stack.pop() : stack.push(letter);
    }

    return stack.join("");
};