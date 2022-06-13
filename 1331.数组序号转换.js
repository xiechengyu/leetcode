/*
 * @lc app=leetcode.cn id=1331 lang=javascript
 *
 * [1331] 数组序号转换
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const a = [...new Set([...arr].sort((a, b) => a - b))], res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(a.indexOf(arr[i]) + 1)
  }
  return res
};
// @lc code=end

