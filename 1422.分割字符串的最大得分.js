/*
 * @lc app=leetcode.cn id=1422 lang=javascript
 *
 * [1422] 分割字符串的最大得分
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let res = 0
  for (let i = 1; i < s.length; i++) {
    const left = s.substring(0, i).match(/0/g)
    const right = s.substring(i, s.length).match(/1/g)
    const n1 = left ? left.length : 0
    const n2 = right ? right.length : 0
    res = Math.max(res, n1 + n2)
  }
  return res
};
// @lc code=end

