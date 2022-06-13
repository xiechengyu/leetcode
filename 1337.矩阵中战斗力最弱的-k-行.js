/*
 * @lc app=leetcode.cn id=1337 lang=javascript
 *
 * [1337] 矩阵中战斗力最弱的 K 行
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const arr = []
  for (let i = 0; i < mat.length; i++) {
    let c = 0
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) {
        arr.push({ i, c })
        c = 0
        break
      } else {
        c++
        if (c === mat[i].length) {
          arr.push({ i, c })
          c = 0
        }
      }
    }
  }
  return arr.sort((a, b) => a.c - b.c).slice(0, k).map((item) => item.i)

};
// @lc code=end

