/*
 * @lc app=leetcode.cn id=1385 lang=javascript
 *
 * [1385] 两个数组间的距离值
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  let res = 0
  for (let i = 0; i < arr1.length; i++) {
    res++
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        res--
        break
      }
    }
  }
  return res
};
// @lc code=end

