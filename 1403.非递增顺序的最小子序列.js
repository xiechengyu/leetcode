/*
 * @lc app=leetcode.cn id=1403 lang=javascript
 *
 * [1403] 非递增顺序的最小子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a)
  let count = nums.reduce((p, v) => p + v), s = 0
  const res = []
  for (let i = 0; i < nums.length; i++) {
    s += nums[i]
    count -= nums[i]
    res.push(nums[i])
    if (s > count) return res
  }
};
// @lc code=end

