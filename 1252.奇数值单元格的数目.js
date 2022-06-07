/*
 * @lc app=leetcode.cn id=1252 lang=javascript
 *
 * [1252] 奇数值单元格的数目
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  const arr = []
  let res = 0
  for (let i = 0; i < indices.length; i++) {
    const [x, y] = indices[i]
    for (let j = 0; j < m.length; j++) {
      for (let z = 0; z < n.length; z++) {
        if (x === j || y === z) {
          if (arr[j, z]) {
            arr[j, z] += 1
          } else {
            arr[j, z] = 1
          }
        }
        if (x === j && y === z) {
          arr[j, z] += 1
        }
        if (i === indices.length - 1) {
          if (arr[j, z] % 2 !== 0) res++
        }
      }
    }
  }
  return res
};
// @lc code=end

