/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  if (mat[0].length * mat.length !== r * c) return mat;
  const res = [];
  let item = [];
  mat = mat.flat();
  for (let i = 0; i < mat.length; i++) {
    if (item.length < c) item.push(mat[i]);
    if (item.length === c) {
      res.push(item);
      item = [];
    }
  }
  return res;
};
// @lc code=end

