/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const map = new Map([[0, 0], [1, 1], [2, 1]])
  for (let i = 3; i <= n; i++) {
    map.set(i, map.get(i - 3) + map.get(i - 2) + map.get(i - 1))
  }
  return map.get(n)
};
// @lc code=end

