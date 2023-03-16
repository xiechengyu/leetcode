/*
 * @lc app=leetcode.cn id=892 lang=typescript
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
