/*
 * @lc app=leetcode.cn id=1299 lang=javascript
 *
 * [1299] 将每个元素替换为右侧最大元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const res = []
  for (let i = 0; i < arr.length - 1; i++) {
    res.push(Math.max(...arr.slice(i + 1, arr.length)))
  }
  res.push(-1)
  return res
};
// @lc code=end

