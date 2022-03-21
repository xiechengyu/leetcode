/*
 * @lc app=leetcode.cn id=1160 lang=javascript
 *
 * [1160] 拼写单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let res = 0
  for (let i = 0; i < words.length; i++) {
    const c = chars.split("")
    for (let j = 0; j < words[i].length; j++) {
      const index = c.indexOf(words[i][j])
      if (index === -1) break
      if (j === words[i].length - 1) {
        res += words[i].length
        break
      }
      c.splice(index, 1)
    }
  }
  return res
};
// @lc code=end

