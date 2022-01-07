/*
 * @lc app=leetcode.cn id=997 lang=javascript
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  if (trust.length === 0) {
    if (n === 1) return 1
    else return -1
  }
  const map = new Map(), map2 = new Map(trust)
  let max = trust[0][1]
  for (let i = 0; i < trust.length; i++) {
    if (!map.has(trust[i][1])) {
      map.set(trust[i][1], [trust[i][0]])
    } else {
      map.get(trust[i][1]).push(trust[i][0])
    }
    if (map.get(trust[i][1]).length > map.get(max).length) max = trust[i][1]
  }
  if (map2.get(max)) return -1
  return map.get(max).length === n - 1 ? max : -1
};
// @lc code=end