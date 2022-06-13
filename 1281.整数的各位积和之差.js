/*
 * @lc app=leetcode.cn id=1281 lang=javascript
 *
 * [1281] 整数的各位积和之差
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  n = n.toString();
  let a = 1, b = 0;
  for (let i = 0; i < n.length; i++) {
    a *= Number(n[i])
    b += Number(n[i])
  }
  return a - b
};
// @lc code=end

