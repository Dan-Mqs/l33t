/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome (x) {
    const numbers = x.toString().split('');

    for (let i = 0; i <= numbers.length/2; i++) {
        if (numbers[i] !== numbers.at(-i-1)) return false;
    }
    return true;
};