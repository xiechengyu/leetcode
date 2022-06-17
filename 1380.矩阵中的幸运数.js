/*
 * @lc app=leetcode.cn id=1380 lang=javascript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const res = []
  for (let i = 0; i < matrix.length; i++) {
    const item = Math.min.apply(this, matrix[i]), index = matrix[i].indexOf(item);
    let max = item
    for (let j = 0; j < matrix.length; j++) {
      max = Math.max(max, matrix[j][index])
    }
    if (max === item) res.push(max)
  }
  return res
};
// @lc code=end

