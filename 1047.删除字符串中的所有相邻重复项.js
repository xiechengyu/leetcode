/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const res = []
  for (let i = 0; i < s.length; i++) {
    if (res[res.length - 1] !== s[i]) {
      res.push(s[i])
    } else {
      res.pop()
    }
  }
  return res.join("")
};
// @lc code=end

