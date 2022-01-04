/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const len = Math.max(s.length,t.length)
  let strS = "", strT = ""
  for (let i = 0; i < len; i++) {
    if (s[i] === "#") {
      strS = strS.slice(0, strS.length - 1)
    } else {
      strS += s[i] || ""
    }
    if (t[i] === "#") {
      strT = strT.slice(0, strT.length - 1)
    } else {
      strT += t[i] || ""
    }
  }
  return strS === strT
};
// @lc code=end

