/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length === 0) return true
  let index = 0
  while (index < t.length) {
    if (t.substr(0, s.length) === s) return true
    if (s[index] === t[index]) {
      index++
      continue
    }
    t = t.replace(t[index], "")
  }
  return false
};
// @lc code=end

