/*
Problem: 27. Remove Element

Link: https://leetcode.com/problems/remove-element/
*/


var removeElement = function (nums, val) {
    let i = 0;
    let r = 0;

    while (i < nums.length) {
        if (nums[i] !== val) {
            nums[r] = nums[i];
            r += 1;
        }
        i += 1;
    }
    return r;
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)