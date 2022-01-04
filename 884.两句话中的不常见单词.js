/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  s1 = s1.split(" ")
  s2 = s2.split(" ")
  const len = Math.max(s1.length,s2.length),res = []
  for (let i = 0; i < len; i++) {
    if(s1[i] && s1.indexOf(s1[i])===s1.lastIndexOf(s1[i])&&!s2.includes(s1[i])) res.push(s1[i])
    if(s2[i] && s2.indexOf(s2[i])===s2.lastIndexOf(s2[i])&&!s1.includes(s2[i])) res.push(s2[i])
  }
  return res
};
// @lc code=end

