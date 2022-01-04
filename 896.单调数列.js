/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let state = 0
  for (let i = 0; i < nums.length; i++) {
    if (!state || state === 2) {
      state = nums[i + 1] > nums[i] ? 1 : nums[i + 1] === nums[i] ? 2 : 3
      continue
    }
    if ((state === 1 && (nums[i + 1] < nums[i])) || (state === 3 && (nums[i + 1] > nums[i]))) return false
  }
  return true
};
// @lc code=end

