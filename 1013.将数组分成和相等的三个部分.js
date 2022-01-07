/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  const count = arr.reduce((a, b) => a + b, 0)
  const area = count / 3
  let res = 0, time = 0
  for (let i = 0; i < arr.length; i++) {
    res += arr[i]
    if (res === area) {
      res = 0
      time++
    }
  }
  return time >= 3
};
// @lc code=end