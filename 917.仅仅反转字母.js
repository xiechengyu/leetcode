/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 * 
 * 给你一个字符串 s ，根据下述规则反转字符串：

所有非英文字母保留在原有位置。
所有英文字母（小写或大写）位置反转。
返回反转后的 s 。

 

示例 1：

输入：s = "ab-cd"
输出："dc-ba"
示例 2：

输入：s = "a-bC-dEf-ghIj"
输出："j-Ih-gfE-dCba"
示例 3：

输入：s = "Test1ng-Leet=code-Q!"
输出："Qedo1ct-eeLg=ntse-T!"
 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  s = s.split("")
  let start = 0, end = s.length - 1
  while (start < end) {
    const flagStart = /[a-z]/i.test(s[start]),
      flagEnd = /[a-z]/i.test(s[end]);
    if (flagStart && flagEnd) {
      [s[start], s[end]] = [s[end], s[start]]
      start++
      end--
      continue
    }
    if (!flagStart) start++
    if (!flagEnd) end--
  }
  return s.join("")
};
// @lc code=end

