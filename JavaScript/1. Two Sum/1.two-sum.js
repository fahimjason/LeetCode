/*
Problem: 1. Two Sum

Link: https://leetcode.com/problems/two-sum/
*/


var twoSum = function (nums, target) {

    const matchedNum = {}
    for (const num in nums) {
        const potentialMatch = nums.indexOf(target - nums[num]);
        if (potentialMatch in matchedNum) {
            return [potentialMatch, num]
        } else {
            matchedNum[num] = true;
        }
    }
    return [];
};