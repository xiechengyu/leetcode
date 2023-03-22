/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找共用字符
 * 
 * 给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（ 包括重复字符），并以数组形式返回。你可以按 任意顺序 返回答案。
 

示例 1：

输入：words = ["bella","label","roller"]
输出：["e","l","l"]
示例 2：

输入：words = ["cool","lock","cook"]
输出：["c","o"]
 
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