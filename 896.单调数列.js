/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 * 
 * 如果数组是单调递增或单调递减的，那么它是 单调 的。

如果对于所有 i <= j，nums[i] <= nums[j]，那么数组 nums 是单调递增的。 如果对于所有 i <= j，nums[i]> = nums[j]，那么数组 nums 是单调递减的。

当给定的数组 nums 是单调数组时返回 true，否则返回 false。

 

示例 1：

输入：nums = [1,2,2,3]
输出：true
示例 2：

输入：nums = [6,5,4,4]
输出：true
示例 3：

输入：nums = [1,3,2]
输出：false
 
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

