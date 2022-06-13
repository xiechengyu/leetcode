/*
 * @lc app=leetcode.cn id=1287 lang=javascript
 *
 * [1287] 有序数组中出现次数超过25%的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  let res = 0, count = 1
  if (arr.length < 3) return arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++
      res = arr[i]
      if (count > arr.length / 4) return res
    } else {
      res = 0
      count = 1
    }
  }
  return res
};
// @lc code=end

