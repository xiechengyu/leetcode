/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
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

