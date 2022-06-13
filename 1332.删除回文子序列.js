/*
 * @lc app=leetcode.cn id=1332 lang=javascript
 *
 * [1332] 删除回文子序列
 */

// @lc code=start
/**
//  * @param {string} s
//  * @return {number}
//  */
// const removePalindromeSub = (s) => {
//   let res = 0, i = 0
//   while (s.length > 0) {
//     const a = s.substring(0, s.length - i)
//     if (a.split('').reverse().join('')) {
//       res++
//       s = s.substring(s.length - i, s.length)
//       i = 0
//     } else {
//       i++
//     }
//   }
//   return res
// };

/**
 * @param {string} s
 * @return {number}
 */
const removePalindromeSub = s => s === s.split('').reverse().join('') ? 1 : 2

// @lc code=end

