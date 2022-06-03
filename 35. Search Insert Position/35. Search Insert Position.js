/*
Problem: 35. Search Insert Position

Link: https://leetcode.com/problems/search-insert-position/
*/

var searchInsert = function (nums, target) {
    let result;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            result = i;
        }
        else if (target > nums[i]) {
            result = i + 1;
        }
    }

    if (!result && target === 0) {
        result = 0;
    }
    else if (!result) {
        result = nums.length;
    }

    return result;
};