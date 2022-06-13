/*
 * @lc app=leetcode.cn id=1304 lang=javascript
 *
 * [1304] 和为零的N个唯一整数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  const res = []
  let count = 0
  for (let i = 1; i < n; i++) {
    res.push(i)
    count += i
  }
  res.push(-count)
  return res
};
// @lc code=end

