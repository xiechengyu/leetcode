/*
 * @lc app=leetcode.cn id=1309 lang=javascript
 *
 * [1309] 解码字母到整数映射
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === "#") {
      res += String.fromCharCode(Number(s[i] + s[i + 1]) + 96)
      i += 2
    } else {
      res += String.fromCharCode(Number(s[i]) + 96)
    }
  }
  return res
};
// @lc code=end

