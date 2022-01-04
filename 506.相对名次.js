/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const map = new Map([[1, "Gold Medal"], [2, "Silver Medal"], [3, "Bronze Medal"]])
  const arr = score
    .map((value, index) => ({ value, index }))
    .sort((a, b) => b.value - a.value);
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res[arr[i].index] = map.get(i + 1) || (i + 1).toString()
  }
  return res;
};
// @lc code=end

