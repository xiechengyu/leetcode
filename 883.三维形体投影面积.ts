/*
 * @lc app=leetcode.cn id=883 lang=typescript
 *
 * [883] 三维形体投影面积
 */

// @lc code=start
function projectionArea(grid: number[][]): number {
  let x = 0,
    y = 0,
    z = 0;
  const map = new Map();
  for (let i = 0; i < grid.length; i++) {
    x += Math.max(...grid[i]);
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) z++;
      map.set(j, map.has(j) ? Math.max(map.get(j), grid[i][j]) : grid[i][j]);
    }
  }
  for (const v of map.values()) {
    y += v;
  }
  return x + y + z;
}
// @lc code=end
