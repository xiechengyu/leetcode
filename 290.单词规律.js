/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 * 
 * 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

 

示例1:

输入: pattern = "abba", str = "dog cat cat dog"
输出: true
示例 2:

输入:pattern = "abba", str = "dog cat cat fish"
输出: false
示例 3:

输入: pattern = "aaaa", str = "dog cat cat dog"
输出: false
 
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  s = s.split(" ")
  if (pattern.length !== s.length) return false
  const map1 = new Map(), map2 = new Map()
  for (let i = 0; i < pattern.length; i++) {
    if (!map1.has(pattern[i])) map1.set(pattern[i], s[i])
    else {
      if (map1.get(pattern[i]) !== s[i]) return false
    }
    if (!map2.has(s[i])) map2.set(s[i], pattern[i])
    else {
      if (map2.get(s[i]) !== pattern[i]) return false
    }
  }
  return true
};
// @lc code=end

