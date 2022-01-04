/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  paragraph = paragraph.toLocaleLowerCase().replace(/[^a-z|\s|\,]/g, "").split(/\s|\,/)
  let res = "", count = 0, map = new Map()
  for (let i = 0; i < paragraph.length; i++) {
    if (!paragraph[i]) continue
    if (!banned.includes(paragraph[i])) {
      map.set(paragraph[i], map.has(paragraph[i]) ? map.get(paragraph[i]) + 1 : 1)
      const num = map.get(paragraph[i])
      if (num > count) {
        res = paragraph[i]
        count = num
      }
    }
  }
  return res
};
// @lc code=end

