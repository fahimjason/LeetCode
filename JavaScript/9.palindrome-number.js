/*
Problem: 9. Palindrome Number

Link: https://leetcode.com/problems/palindrome-number/
*/


var isPalindrome = function (x) {
    const reverseNum = parseInt(x.toString().split('').reverse().join(''));
    if (x === reverseNum) return true;
    return false;
};