/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
    const length = digits.length - 1;
    digits[length] += 1;
    for (let i = length; i >= 0; i--) {
        if (digits[i] > 9) {
            digits[i] = 0;
            if (digits[i - 1]) {
                digits[i - 1] += 1;
            } else {
                digits.unshift(1);
                break;
            }
        }
    }
    return digits;
};


console.log(plusOne([1,2,3]));
console.log(plusOne([4, 3, 2, 1]));

console.log(plusOne([8,9,9,9]));

console.log(plusOne([9,9,9]));

// console.log(plusOne([2,4,9,3,9]));
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,0,0,0]))