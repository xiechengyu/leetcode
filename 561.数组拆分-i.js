/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums = nums.sort((a, b) => a - b)
  let count = 0
  for (let i = 0; i < nums.length; i += 2) {
    count += nums[i]
  }
  return count
};
// @lc code=end

