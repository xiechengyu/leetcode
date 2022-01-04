/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  return new Array(n + 1).fill(0).map((item, index) => {
    const num = index.toString(2)
    let count = item
    for (let i = 0; i < num.length; i++) {
      if (num[i] === "1") count++
    }
    return count
  })
};
// @lc code=end

