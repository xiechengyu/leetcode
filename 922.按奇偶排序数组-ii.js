/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const res = []
  while (nums.length > 0) {
    const item = nums.shift()
    if ((res.length % 2 === 0 && item % 2 === 0) || res.length % 2 === 1 && item % 2 === 1) {
      res.push(item)
    } else {
      nums.push(item)
    }
  }
  return res
};
// @lc code=end

