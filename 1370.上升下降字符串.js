/*
 * @lc app=leetcode.cn id=1370 lang=javascript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  let res = '', flag = true
  const map = new Map(), map1 = new Map()
  s = s.split("").sort((a, b) => a - b)
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 0)
    map1.set(s[s.length - 1 - i], map1.has(s[s.length - 1 - i]) ? map1.get(s[s.length - 1 - i]) + 1 : 0)
  }
  while (res.length < s.length) {
    for (const [k, y] of map) {

    }
  }
  return res
};
// @lc code=end

