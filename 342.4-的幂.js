/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n < 1) return false
  while (n !== 1) {
    if (n % 4 !== 0) return false
    n /= 4
  }
  return true
};
// @lc code=end

