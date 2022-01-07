
/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  while (k > 0) {
    const min = Math.min(...nums)
    const i = nums.indexOf(min)
    nums[i] = -nums[i]
    k--
  }
  return nums.reduce((a, b) => a + b, 0)
};
// @lc code=end

