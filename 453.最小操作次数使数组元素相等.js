/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小操作次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  if (nums.length === 1 || [... new Set(nums)].toString() === "0") return 0
  const count = nums.reduce((prev, next) => {
    return prev + next
  }, 0)
  return Math.abs(count - nums.length)
};
// @lc code=end

