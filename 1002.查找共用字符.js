/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找共用字符
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  words = words.map(item => item.split(""))
  if (words.length === 1) return words[0]
  const res = []
  for (let i = 0; i < words[0].length; i++) {
    res.push(words[0][i])
    for (let j = 1; j < words.length; j++) {
      const index = words[j].indexOf(words[0][i])
      if (index === -1) {
        res.pop()
        break
      } else {
        words[j].splice(index, 1)
      }
    }
  }
  return res
};
// @lc code=end