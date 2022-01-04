/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function (s, k) {
  s = s.split('');
  for (let i = 0; i < s.length; i += 2 * k) {
    const len = Math.min(s.slice(i).length, k);
    for (let j = 0; j < len / 2; j++) {
      [s[i + j], s[i + len - 1 - j]] = [s[i + len - 1 - j], s[i + j]];
    }
  }
  return s.join("")
};
// @lc code=end

