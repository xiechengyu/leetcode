/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  if (nums.length === 1) return 0
  const arr = nums.slice(0).sort((a, b) => b - a)
  if (arr[0] >= arr[1] * 2) return nums.indexOf(arr[0])
  return -1
};
// @lc code=end

