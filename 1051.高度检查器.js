/*
 * @lc app=leetcode.cn id=1051 lang=javascript
 *
 * [1051] 高度检查器
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let res = 0
  const arr = heights.slice(0).sort((a, b) => a - b)
  for (let i = 0; i < heights.length; i++) {
    if (arr[i] !== heights[i]) res++
  }
  return res
};
// @lc code=end

