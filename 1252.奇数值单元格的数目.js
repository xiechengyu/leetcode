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
  const arr = [];
  let res = 0;
  for (let i = 0; i < indices.length; i++) {
    const [x, y] = indices[i]
    for (let j = 0; j < m; j++) {
      if (i === 0) arr.push([])
      for (let z = 0; z < n; z++) {
        if (i === 0) arr[j].push(0)
        if (x === j || y === z) {
          arr[j][z] += 1
        }
        if (x === j && y === z) {
          arr[j][z] += 1
        }
        if (i === indices.length - 1) {
          if (arr[j][z] % 2 !== 0) res++
        }
      }
    }
  }
  return res
};
// @lc code=end

