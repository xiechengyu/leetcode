/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let left = 0, right = nums.reduce((a, b) => a + b, -nums[0])
  if (left === right) return 0
  for (let i = 1; i < nums.length; i++) {
    left += nums[i - 1]
    right -= nums[i]
    if (left === right) return i
  }
  return -1
};
// @lc code=end

