/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 * 
 * 整数的 数组形式  num 是按照从左到右的顺序表示其数字的数组。

例如，对于 num = 1321 ，数组形式是 [1,3,2,1] 。
给定 num ，整数的 数组形式 ，和整数 k ，返回 整数 num + k 的 数组形式 。

 

示例 1：

输入：num = [1,2,0,0], k = 34
输出：[1,2,3,4]
解释：1200 + 34 = 1234
示例 2：

输入：num = [2,7,4], k = 181
输出：[4,5,5]
解释：274 + 181 = 455
示例 3：

输入：num = [2,1,5], k = 806
输出：[1,0,2,1]
解释：215 + 806 = 1021
 
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
