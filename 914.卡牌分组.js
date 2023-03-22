/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 * 
 * 给定一副牌，每张牌上都写着一个整数。

此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

每组都有 X 张牌。
组内所有的牌上都写着相同的整数。
仅当你可选的 X >= 2 时返回 true。

 

示例 1：

输入：deck = [1,2,3,4,4,3,2,1]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
示例 2：

输入：deck = [1,1,1,2,2,2,3,3]
输出：false
解释：没有满足要求的分组。

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

