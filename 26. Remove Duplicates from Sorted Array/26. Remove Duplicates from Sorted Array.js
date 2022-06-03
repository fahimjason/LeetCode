/*
Problem: 26. Remove Duplicates from Sorted Array

Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
*/


var removeDuplicates = function (nums) {
    let s = 0;
    let i = 1;

    while (i < nums.length) {
        if (nums[s] !== nums[i]) {
            s += 1;
        }
        nums[s] = nums[i]
        i++;
    }
    return s + 1;
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);