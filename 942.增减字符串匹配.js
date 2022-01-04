/*
 * @lc app=leetcode.cn id=942 lang=javascript
 *
 * [942] 增减字符串匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  const res = [], len = s.length, arr = []
  for (let i = 0; i <= len; i++) {
    arr.push(i)
  }
  for (let i = 0; i < len; i++) {
    let item
    if (s[i] === "I") {
      item = arr.shift()
    } else {
      item = arr.pop()
    }
    res.push(item)
  }
  res.push(arr[0])
  return res
};
// @lc code=end

