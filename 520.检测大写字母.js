/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word.length === 1) return true
  const stage = word[0].charCodeAt(0) < 91 && word[1].charCodeAt(0) < 91 ? 1 : flag2 = word[0].charCodeAt(0) > 96 && word[1].charCodeAt(0) > 96 ? 2 : flag3 = word[0].charCodeAt(0) < 91 && word[1].charCodeAt(0) > 96 ? 3 : 0
  if (stage === 0) return false
  for (let i = 2; i < word.length; i++) {
    if (stage === 1) {
      if (word[i].charCodeAt(0) > 96) return false
    } else {
      if (word[i].charCodeAt(0) < 91) return false
    }
  }
  return true
};
// @lc code=end

