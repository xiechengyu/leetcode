/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const set = new Set(["a", "A", "E", "e", "I", "i", "O", "o", "U", "u"])
  sentence = sentence.split(" ")
  for (let i = 0; i < sentence.length; i++) {
    if (!set.has(sentence[i][0])) sentence[i] = sentence[i].slice(1) + sentence[i].slice(0, 1)
    sentence[i] += "ma" + "a".repeat(i + 1)
  }
  return sentence.join(" ")
};
// @lc code=end

