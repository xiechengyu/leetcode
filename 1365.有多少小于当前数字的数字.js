/*
 * @lc app=leetcode.cn id=1365 lang=javascript
 *
 * [1365] 有多少小于当前数字的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const res = []
  for (let i = 0; i < nums.length; i++) {
    let c = 0
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] > nums[j]) c++
      if (j === nums.length - 1) {
        res.push(c)
        c = 0
      }
    }
  }
  return res
};
// @lc code=end

