/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s === goal) return true
  for (let i = 1; i < s.length; i++) {
    if (s.slice(i) + s.slice(0, i) === goal) return true
  }
  return false
};
// @lc code=end

