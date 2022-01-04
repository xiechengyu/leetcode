/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g = g.sort()
  s = s.sort()
  let count = 0
  for (let i = 0; i < g.length; i++) {
    const index = s.indexOf(g[i])
    if (index > 0) {
      count++
      s.splice(index, 1)
    }
  }
  return count
};
// @lc code=end

