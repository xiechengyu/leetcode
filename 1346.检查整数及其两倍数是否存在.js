/*
 * @lc app=leetcode.cn id=1346 lang=javascript
 *
 * [1346] 检查整数及其两倍数是否存在
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
// var checkIfExist = function (arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] * 2 === arr[j] || arr[i] === arr[j] * 2) return true
//     }
//   }
//   return false
// };

var checkIfExist = function (arr) {
  const set = new Set()
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) return true
    else {
      set.add(arr[i] * 2)
      set.add(arr[i] / 2)
    }
  }
  return false
};
// @lc code=end

