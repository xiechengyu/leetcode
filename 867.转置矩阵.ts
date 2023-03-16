/*
 * @lc app=leetcode.cn id=867 lang=typescript
 *
 * [867] 转置矩阵
 */

// @lc code=start
function transpose(matrix: number[][]): number[][] {
  const res: number[][] = [];
  while (res.length < matrix[0].length) {
    res.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      res[j][i] = matrix[i][j];
    }
  }
  return res;
}
// @lc code=end
