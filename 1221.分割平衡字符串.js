/*
 * @lc app=leetcode.cn id=1221 lang=javascript
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let res = 0, r = 0, l = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') r++
    else l++
    if (r === l) {
      res++
      r = 0
      l = 0
    }
  }
  return res
};
// @lc code=end

