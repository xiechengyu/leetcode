/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let max = nums.slice(0, k).reduce((a, b) => a + b, 0) / k, curr = max
  for (let i = k; i < nums.length; i++) {
    curr += (nums[i] - nums[i - k]) / k
    max = Math.max(max, curr)
  }
  return max
};
// @lc code=end

