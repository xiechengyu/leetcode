/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  const map = new Map()
  let max = 0
  for (let i = 0; i < deck.length; i++) {
    if (!map.has(deck[i])) map.set(deck[i], 1)
    else map.set(deck[i], map.get(deck[i]) + 1)
    max = Math.max(max, map.get(deck[i]))
  }

  for (let i = 2; i <= max; i++) {
    let flag = true
    for (const j of map.values()) {
      const item = j % i === 0
      flag &&= item
      if (!item) break
    }
    if (flag) return true
  }
  return false
};

// var checkNum = function (num, k) {
//   while (num > 1) {
//     if (num % k === 0) num /= k
//     else return false
//   }
//   return true
// }
// @lc code=end

