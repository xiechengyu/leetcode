/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  while (s.length > 0) {
    t = t.replace(s[0], "")
    s = s.replace(s[0], "")
  }
  return t[0]
};
// @lc code=end

