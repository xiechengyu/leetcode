/*
 * @lc app=leetcode.cn id=1200 lang=javascript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr = arr.sort((a, b) => a - b)
  let c = Number.MAX_VALUE, res = []
  for (let i = 1; i < arr.length; i++) {
    const v = arr[i] - arr[i - 1]
    if (v > c) continue
    else if (v < c) {
      res = []
      c = v
    }
    res.push([arr[i - 1], arr[i]])
  }
  return res
};
// @lc code=end

