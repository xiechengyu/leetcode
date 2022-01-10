/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let res = "", count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (count) res += s[i]
      count++
    } else {
      count--
      if (count) res += s[i]
    }
  }
  return res
};
// @lc code=end

