/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let res = 0
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) res++
  }
  return res
};
// @lc code=end

