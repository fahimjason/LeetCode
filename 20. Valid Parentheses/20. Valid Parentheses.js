/*
Problem: 20. Valid Parentheses
Link: https://leetcode.com/problems/valid-parentheses/
*/

const isValid = s => {
    let stack = [];
    const pairsHashMap = { "(": ")", "{": "}", "[": "]" };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (pairsHashMap[char]) {
            stack.push(char);
        }
        else if (pairsHashMap[stack.pop()] !== char) {
            return false;
        }
    }

    return stack.length === 0;
};