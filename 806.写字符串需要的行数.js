/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let res = [1, 0]
  for (let i = 0; i < s.length; i++) {
    const item = widths[s[i].charCodeAt() - 97]
    if (res[1] + item <= 100) {
      res[1] += item
      continue
    }
    res[0]++
    res[1] = item
  }
  return res
};
// @lc code=end

