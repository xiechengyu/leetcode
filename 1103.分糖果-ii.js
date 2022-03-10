/*
 * @lc app=leetcode.cn id=1103 lang=javascript
 *
 * [1103] 分糖果 II
 */

// @lc code=start
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  let n = 1, i = 0
  const res = []
  res.length = num_people
  res.fill(0, 0, num_people)
  while (candies > 0) {
    if (candies <= n) {
      res[i] += candies
      break
    }
    res[i] += n
    candies -= n
    n++
    if (i === num_people - 1) {
      i = 0
    } else {
      i++
    }
  }
  return res
};
// @lc code=end

