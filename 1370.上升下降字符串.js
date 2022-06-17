/*
 * @lc app=leetcode.cn id=1370 lang=javascript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  let res = '', flag = true
  const arr = []
  for (let i = 0; i < s.length; i++) {
    const j = s[i].charCodeAt() - 97
    arr[j] = arr[j] ? arr[j] + 1 : 1
  }
  while (res.length < s.length) {
    if (flag) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] && arr[i] > 0) {
          res += String.fromCharCode(i + 97)
          arr[i] -= 1
        }
      }
      flag = false
    } else {
      for (let i = arr.length - 1; i > -1; i--) {
        if (arr[i] && arr[i] > 0) {
          res += String.fromCharCode(i + 97)
          arr[i] -= 1
        }
      }
      flag = true
    }
  }
  return res
};
// @lc code=end

