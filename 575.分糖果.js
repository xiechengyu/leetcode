/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const len = candyType.length
  candyType = [...new Set(candyType)]
  return Math.min(len / 2, candyType.length)
};
// @lc code=end

