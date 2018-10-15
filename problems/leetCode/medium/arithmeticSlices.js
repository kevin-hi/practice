/*
 A sequence of number is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

 For example, these are arithmetic sequence:

 1, 3, 5, 7, 9
 7, 7, 7, 7
 3, -1, -5, -9
 The following sequence is not arithmetic.

 1, 1, 2, 5, 7

 A zero-indexed array A consisting of N numbers is given. A slice of that array is any pair of integers (P, Q) such that 0 <= P < Q < N.

 A slice (P, Q) of array A is called arithmetic if the sequence:
 A[P], A[p + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means that P + 1 < Q.

 The function should return the number of arithmetic slices in the array A.


 Example:

 A = [1, 2, 3, 4]

 return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.
 */

/**
 * @param {number[]} A
 * @return {number}
 */
// const numberOfArithmeticSlices = A => {
//     let s = 0;
//     const mem = [0, A[1] - A[0]];
//
//     for (let i = 2; i < A.length; i++) {
//         mem[i] = A[i] - A[i - 1];
//         for (let j = i - 1; j >= 1; j--) {
//             if (mem[j] === mem[i]) s++;
//             else break;
//         }
//     }
//
//     return s;
// };

const numberOfArithmeticSlices = A => {
    let s = 0;
    let dp = 0;

    for (let i = 2; i < A.length; i++) {
       if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
           dp = 1 + dp;
           s += dp;
       } else {
           dp = 0;
       }
    }

    return s;
};

console.log(numberOfArithmeticSlices([1, 2, 3, 4])); //3
console.log(numberOfArithmeticSlices([1,2,3,4, 5, 6, 7, 8, 9])); //28
console.log(numberOfArithmeticSlices([1, 3, 5, 7, 9])); //28
console.log(numberOfArithmeticSlices([1,2,3,8,9,10])); //2
console.log(numberOfArithmeticSlices([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));
