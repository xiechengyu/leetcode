/*
 * @lc app=leetcode.cn id=1399 lang=javascript
 *
 * [1399] 统计最大组的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  const map = new Map()
  let res = 0, max = 0
  for (let i = 1; i <= n; i++) {
    const a = i.toString().split("").reduce((p, v) => p + Number(v), 0)
    map.set(a, map.has(a) ? map.get(a) + 1 : 1)
    max = Math.max(max, map.get(a))
  }
  for (const v of map.values()) {
    if (v === max) res++
  }
  return res
};
// @lc code=end

