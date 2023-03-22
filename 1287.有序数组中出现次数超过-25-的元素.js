/*
 * @lc app=leetcode.cn id=1287 lang=javascript
 *
 * [1287] 有序数组中出现次数超过25%的元素
 * 
 * 给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25%。

请你找到并返回这个整数

 

示例：

输入：arr = [1,2,2,6,6,6,6,7,10]
输出：6
 
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

