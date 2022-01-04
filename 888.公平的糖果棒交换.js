/*
 * @lc app=leetcode.cn id=888 lang=javascript
 *
 * [888] 公平的糖果棒交换
 */

// @lc code=start
/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  const a = aliceSizes.reduce((a, b) => a + b, 0), b = bobSizes.reduce((a, b) => a + b, 0), diff = (a - b) >> 1, set = new Set(aliceSizes)
  for (let i = 0; i < bobSizes.length; i++) {
    if(set.has(bobSizes[i]+diff))  return [bobSizes[i]+diff,bobSizes[i]]  
  }
};
// @lc code=end

