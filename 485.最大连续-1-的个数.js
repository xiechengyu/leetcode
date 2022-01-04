/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  if ([...new Set(nums)].toString() === "0") return 0
  let max = 0, start = -1, end = -1
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === 1) {
      if (start < 0) start = i
      end = i
    } else {
      max = Math.max(max, end - start + 1)
      start = -1
      end = -1
    }
  }
  return max
};
// @lc code=end

