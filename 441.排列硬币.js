/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let i = 1, res = 1
  while (true) {
    res += ++i
    if (res === n) return i
    else if (res > n) return i - 1
  }
};
// @lc code=end

