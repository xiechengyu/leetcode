/*
 * @lc app=leetcode.cn id=1413 lang=javascript
 *
 * [1413] 逐步求和得到正数的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let res = 1, count = 0
  while (true) {
    count = res
    for (let i = 0; i < nums.length; i++) {
      count += nums[i]
      if (count < 1) {
        res++
        break
      }
      if (i === nums.length - 1) return res
    }
  }
};
// @lc code=end

