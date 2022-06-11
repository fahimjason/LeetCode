/*
Problem: 125. Valid Palindrome
Link: https://leetcode.com/problems/valid-palindrome/
*/

var isPalindrome = function (s) {
    // Sanitize the input sting
    s = s.toLowerCase().replace(/[\W_]/g, "");

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};