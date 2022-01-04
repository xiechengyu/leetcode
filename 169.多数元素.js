/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums.sort((a, b) => a - b)
    return nums.length % 2 === 0 ? nums[nums.length / 2] : nums[(nums.length - 1) / 2]
};
// @lc code=end

