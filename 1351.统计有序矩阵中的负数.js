/*
 * @lc app=leetcode.cn id=1351 lang=javascript
 *
 * [1351] 统计有序矩阵中的负数
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let res = 0
  for (let i = grid.length - 1; i >= 0; i--) {
    if (grid[i][grid[i].length - 1] > -1) break
    for (let j = grid[i].length - 1; j >= 0; j--) {
      if (grid[i][j] < 0) res++
      else continue
    }
  }
  return res
};
// @lc code=end

