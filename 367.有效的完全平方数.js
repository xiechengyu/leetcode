/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let res = 1
  while (res * res <= num) {
    if (res * res === num) return true
    res++
  }
  return false
};
// @lc code=end

