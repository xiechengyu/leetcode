/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
 var checkPerfectNumber = function (num) {
  const arr = []
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) arr.push(i)
  }
  return num === arr.reduce((prev, next) => prev + next, 0)
};
// @lc code=end

