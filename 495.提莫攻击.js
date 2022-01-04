/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  const set = new Set()
  for (let i = 0; i < timeSeries.length; i++) {
    for (let j = 0; j < duration; j++) {
      set.add(timeSeries[i] + j)
    }
  }
  return set.size
};
// @lc code=end

