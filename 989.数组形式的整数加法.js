/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  num[num.length - 1] = num[num.length - 1] + k
  let flag = 0
  for (let j = 0; j < num.length; j++) {
    const i = num.length - 1 - j
    num[i] = num[i] + flag
    flag = 0
    if (num[i] > 9) {
      flag = parseInt(num[i] / 10)
      num[i] = num[i] % 10
      if (i === 0) {
        num.unshift(flag)
        flag = 0
      }
      continue
    }
    return num
  }
};

// @lc code=end
