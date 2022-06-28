/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 * 
 * 我们定义，在以下情况时，单词的大写用法是正确的：

全部字母都是大写，比如 "USA" 。
单词中所有字母都不是大写，比如 "leetcode" 。
如果单词不只含有一个字母，只有首字母大写， 比如 "Google" 。
给你一个字符串 word 。如果大写用法正确，返回 true ；否则，返回 false 。

 

示例 1：

输入：word = "USA"
输出：true
示例 2：

输入：word = "FlaG"
输出：false
 
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word.length === 1) return true
  const stage = word[0].charCodeAt(0) < 91 && word[1].charCodeAt(0) < 91 ? 1 : flag2 = word[0].charCodeAt(0) > 96 && word[1].charCodeAt(0) > 96 ? 2 : flag3 = word[0].charCodeAt(0) < 91 && word[1].charCodeAt(0) > 96 ? 3 : 0
  if (stage === 0) return false
  for (let i = 2; i < word.length; i++) {
    if (stage === 1) {
      if (word[i].charCodeAt(0) > 96) return false
    } else {
      if (word[i].charCodeAt(0) < 91) return false
    }
  }
  return true
};
// @lc code=end

