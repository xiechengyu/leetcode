/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  arr = arr.sort((a, b) => a - b)
  const map = new Map()
  let curr = 0
  for (let i = 0; i < arr.length; i++) {
    curr++
    if (arr[i] === arr[i + 1]) continue
    if (map.has(curr)) return false
    map.set(curr, arr[i])
    curr = 0
  }
  return true
};
// @lc code=end

