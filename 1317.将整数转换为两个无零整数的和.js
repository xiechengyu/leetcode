/*
 * @lc app=leetcode.cn id=1317 lang=javascript
 *
 * [1317] 将整数转换为两个无零整数的和
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
  for (let i = 1; i < (n / 2) + 1; i++) {
    if (!i.toString().includes('0') && !(n - i).toString().includes('0')) return [i, n - i]
  }
};
// @lc code=end

