/*
Problem: 66. Plus One

Link: https://leetcode.com/problems/plus-one/
*/

// Not solved yet

// var plusOne = function (digits) {
//     const end = digits.length - 1;
//     if (digits[end] === 9 && digits.length === 1) {
//         digits[end] = 1;
//         digits.push(0);
//     }
//     else {
//         digits[end] = digits[end] + 1;
//     }
//     return digits;
// };

var plusOne = function (digits) {
    const end = digits.length - 1;

    let sum = '';
    for (let i = 0; i < digits.length; i++) {
        sum += digits[i];
    }

    return sum;
};

console.log(plusOne([9, 9]));