/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let m = 0, n = numbers.length - 1
    while (true) {
        if (numbers[m] + numbers[n] > target) {
            n--
        } else if (numbers[m] + numbers[n] < target) {
            m++
        } else {
            return [m + 1, n + 1]
        }
    }
};
// @lc code=end

