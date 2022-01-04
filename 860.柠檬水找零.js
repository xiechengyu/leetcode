/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  const map = new Map()
  for (let i = 0; i < bills.length; i++) {
    map.set(bills[i], map.has(bills[i]) ? map.get(bills[i]) + 1 : 1)
    const num5 = map.get(5) || 0, num10 = map.get(10) || 0
    if (bills[i] === 10) {
      if (num5 < 1) return false
      map.set(5, num5 - 1)
    } else if (bills[i] === 20) {
      if (num5 > 2) {
        map.set(5, num5 - 3)
        continue
      }
      if (num5 > 0 && num10 > 0) {
        map.set(5, num5 - 1)
        map.set(10, num10 - 1)
        continue
      }
      return false
    }
  }
  return true
};
// @lc code=end

