/*
 * @lc app=leetcode.cn id=867 lang=typescript

给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。

矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。



 

示例 1：

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[1,4,7],[2,5,8],[3,6,9]]
示例 2：

输入：matrix = [[1,2,3],[4,5,6]]
输出：[[1,4],[2,5],[3,6]]
 
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
