/*
 * @lc app=leetcode.cn id=1356 lang=javascript
 *
 * [1356] 根据数字二进制下 1 的数目排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = (arr) => arr.sort((a, b) => count(a) - count(b) || a - b);

const count = (num) => num.toString(2).split("").reduce((p, c) => {
  if (c === "1") p++
  return p
}, 0)

// @lc code=end

