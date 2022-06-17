/*
 * @lc app=leetcode.cn id=1394 lang=javascript
 *
 * [1394] 找出数组中的幸运数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const map = new Map()
  let res = -1
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], map.has(arr[i]) ? map.get(arr[i]) + 1 : 1)
  }
  for (const [k, v] of map) {
    if (k === v) res = Math.max(res, k)
  }
  return res
};
// @lc code=end

