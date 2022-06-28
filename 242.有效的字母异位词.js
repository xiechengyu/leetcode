/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 * 
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

 

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  const map1 = new Map(), map2 = new Map()
  for (let i = 0; i < s.length; i++) {
    if (!map1.has(s[i])) map1.set(s[i], 0)
    else map1.set(s[i], map1.get(s[i]) + 1)
  }
  for (let i = 0; i < t.length; i++) {
    if (!map2.has(t[i])) map2.set(t[i], 0)
    else map2.set(t[i], map2.get(t[i]) + 1)
  }
  for (const [k, v] of map1) {
    if (map2.get(k) !== v) return false
  }
  return true
};
// @lc code=end

