/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 * 
 * 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。

元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现。

 

示例 1：

输入：s = "hello"
输出："holle"
示例 2：

输入：s = "leetcode"
输出："leotcede"
 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  s = s.split("")
  const set = new Set(["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"])
  let l = 0, r = s.length - 1
  while (l < r) {
    if (!set.has(s[l])) l++
    if (!set.has(s[r])) r--
    if (set.has(s[l]) && set.has(s[r])) {
      [s[l], s[r]] = [s[r], s[l]]
      l++
      r--
    }
  }
  return s.join("")
};

// @lc code=end

