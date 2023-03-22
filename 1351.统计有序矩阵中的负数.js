/*
 * @lc app=leetcode.cn id=1351 lang=javascript
 *
 * [1351] 统计有序矩阵中的负数
 * 
 * 给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。 请你统计并返回 grid 中 负数 的数目。

 

示例 1：

输入：grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
输出：8
解释：矩阵中共有 8 个负数。
示例 2：

输入：grid = [[3,2],[1,0]]
输出：0
 


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

