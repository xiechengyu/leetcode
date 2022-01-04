/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false
  const max = Math.max(...arr)
  const index = arr.indexOf(max)
  if (index !== arr.lastIndexOf(max)) return false
  for (let i = 0; i < arr.length; i++) {
    if (i < index) {
      if (arr[i] >= arr[i + 1]) return false
    } else if ((i > index)) {
      if (arr[i] <= arr[i + 1]) return false
    }
  }
  return true
};
// @lc code=end

