/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones = stones.sort((a, b) => b - a)
    const y = stones.shift()
    const x = stones.shift()
    if (x !== y) stones.push(y - x)
  }
  return stones.length > 0 ? stones[0] : 0
};
// @lc code=end

