/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  const res = []
  let curr = "", len = 1
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      curr = s[i]
      len++
      continue
    }
    if (!curr) continue
    if (len >= 3) res.push([i - len + 1, i])
    curr = ""
    len = 1
  }
  return res
};
// @lc code=end

