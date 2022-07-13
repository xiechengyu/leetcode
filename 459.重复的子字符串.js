/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 * 
 * 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。

 

示例 1:

输入: s = "abab"
输出: true
解释: 可由子串 "ab" 重复两次构成。
示例 2:

输入: s = "aba"
输出: false
示例 3:

输入: s = "abcabcabcabc"
输出: true
解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)
 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length === 1) return false
  let n = ""
  for (let i = 0; i < s.length / 2; i++) {
    n = s.substring(0, i + 1)
    if (s.length % n.length !== 0) continue
    if (n.repeat(s.length / n.length) === s) return true
  }
  return false
};
// @lc code=end

