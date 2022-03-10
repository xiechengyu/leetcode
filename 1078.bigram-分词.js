/*
 * @lc app=leetcode.cn id=1078 lang=javascript
 *
 * [1078] Bigram 分词
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  const res = []
  text = text.split(" ")
  for (let i = 0; i < text.length; i++) {
    if (!text[i + 2]) break
    if (text[i] === first && text[i + 1] === second) res.push(text[i + 2])
  }
  return res
};
// @lc code=end

