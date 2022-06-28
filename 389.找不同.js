/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 * 
 * 给定两个字符串 s 和 t ，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

请找出在 t 中被添加的字母。

 

示例 1：

输入：s = "abcd", t = "abcde"
输出："e"
解释：'e' 是那个被添加的字母。
示例 2：

输入：s = "", t = "y"
输出："y"
 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  while (s.length > 0) {
    t = t.replace(s[0], "")
    s = s.replace(s[0], "")
  }
  return t[0]
};
// @lc code=end

