/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
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

