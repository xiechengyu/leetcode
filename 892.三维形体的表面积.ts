/*
 * @lc app=leetcode.cn id=892 lang=typescript

给你一个 n * n 的网格 grid ，上面放置着一些 1 x 1 x 1 的正方体。每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。

放置好正方体后，任何直接相邻的正方体都会互相粘在一起，形成一些不规则的三维形体。

请你返回最终这些形体的总表面积。

注意：每个形体的底面也需要计入表面积中。

 

示例 1：


输入：grid = [[1,2],[3,4]]
输出：34
示例 2：


输入：grid = [[1,1,1],[1,0,1],[1,1,1]]
输出：32
示例 3：


输入：grid = [[2,2,2],[2,1,2],[2,2,2]]
输出：46
 
 *
 * [892] 三维形体的表面积
 */

// @lc code=start
function surfaceArea(grid: number[][]): number {
  let x = 0,
    y = 0,
    z = 0,
    v = 0;
  const map = new Map();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      v += grid[i][j];
      if (j < grid[i].length - 1) x += Math.min(grid[i][j], grid[i][j + 1]);
      if (grid[i][j]) z += grid[i][j] - 1;
      if (map.has(j)) y += Math.min(map.get(j), grid[i][j]);
      map.set(j, grid[i][j]);
    }
  }
  return 6 * v - (x + y + z) * 2;
}
// @lc code=end
