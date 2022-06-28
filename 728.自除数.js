/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 * 
 * 自除数 是指可以被它包含的每一位数整除的数。

例如，128 是一个 自除数 ，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。
自除数 不允许包含 0 。

给定两个整数 left 和 right ，返回一个列表，列表的元素是范围 [left, right] 内所有的 自除数 。

 

示例 1：

输入：left = 1, right = 22
输出：[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
示例 2:

输入：left = 47, right = 85
输出：[48,55,66,77]
 
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const arr = []
  for (let i = left; i <= right; i++) {
    const str = i.toString()
    let flag = true
    for (let j = 0; j < str.length; j++) {
      const item = Number(str[j])
      if (item === 0 || i % item !== 0) flag = false
    }
    if (flag) arr.push(i)
  }
  return arr
};
// @lc code=end

