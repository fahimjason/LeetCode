/*
Problem: 167. Two Sum II - Input Array Is Sorted

Link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
*/


var twoSum = function (numbers, target) {
    let start = 0;
    let end = numbers.length - 1;

    while (start < end) {
        const result = numbers[start] + numbers[end];
        if (result === target) return [start + 1, end + 1];
        else if (result < target) start++;
        else if (result > target) end--;
    }
    return [];
};