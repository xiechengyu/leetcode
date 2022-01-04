/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  const len = flowerbed[1] === 1 || flowerbed[flowerbed.length - 2] === 1 ? flowerbed.length - 1 : flowerbed.length, all = len % 2 === 0 ? len / 2 : (len + 1) / 2, aready = flowerbed.reduce((prev, next) => prev + next, 0)
  return all - aready - n >= 0
};
// @lc code=end

