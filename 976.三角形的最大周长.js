/*
 * @lc app=leetcode.cn id=976 lang=javascript
 *
 * [976] 三角形的最大周长
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums = nums.sort((a, b) => b - a)
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] + nums[i - 1] > nums[i - 2]) {
      return nums[i] + nums[i - 1] + nums[i - 2]
    }
  }
  return 0
};
// @lc code=end

