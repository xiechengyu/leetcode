/*
 * @lc app=leetcode.cn id=1408 lang=javascript
 *
 * [1408] 数组中的字符串匹配
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const res = []
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      let item
      if (words[i].includes(words[j])) item = words[j]
      else if (words[j].includes(words[i])) item = words[i]
      if (item && !res.includes(item)) res.push(item);
    }
  }
  return res
};
// @lc code=end

