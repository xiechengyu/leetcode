/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 * 
 * 给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。

 

示例 1：

输入：nums = [1,1,0,1,1,1]
输出：3
解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
示例 2:

输入：nums = [1,0,1,1,0,1]
输出：2
 
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

