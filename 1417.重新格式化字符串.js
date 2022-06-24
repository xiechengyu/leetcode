/*
 * @lc app=leetcode.cn id=1417 lang=javascript
 *
 * [1417] 重新格式化字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  const arr1 = [], arr2 = []
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() < 58) arr1.push(s[i])
    else arr2.push(s[i])
  }
  if (Math.abs(arr1.length - arr2.length) > 1) return ""
  let max, min
  if (arr1.length > arr2.length) {
    max = arr1
    min = arr2
  } else {
    max = arr2
    min = arr1
  }
  let res = ""
  for (let i = 0; i < max.length; i++) {
    res += max[i]
    if (min[i]) res += min[i]
  }
  return res
};
// @lc code=end

