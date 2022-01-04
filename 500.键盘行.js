/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const res = [], set1 = new Set(["Q", "q", "W", "w", "E", "e", "R", "r", "T", "t", "Y", "y", "U", "u", "I", "i", "O", "o", "P", "p"]), set2 = new Set(["A", "a", "S", "s", "D", "d", "F", "f", "G", "g", "H", "h", "J", "j", "K", "k", "L", "l"]), set3 = new Set(["Z", "z", "X", "x", "C", "c", "V", "v", "B", "b", "N", "n", "M", "m"])
  for (let i = 0; i < words.length; i++) {
    res.push(words[i])
    const set = set1.has(words[i][0]) ? set1 : set2.has(words[i][0]) ? set2 : set3
    for (let j = 1; j < words[i].length; j++) {
      if (!set.has(words[i][j])) {
        res.pop()
        break
      }
    }
  }
  return res
};
// @lc code=end

