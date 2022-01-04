/*
 * @lc app=leetcode.cn id=804 lang=javascript
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const set = new Set(), arr = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
  for (let i = 0; i < words.length; i++) {
    let item = ""
    for (let j = 0; j < words[i].length; j++) {
      item += arr[words[i][j].charCodeAt() - 97]
    }
    set.add(item)
  }
  return set.size
};
// @lc code=end

