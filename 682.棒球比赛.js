/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let res = 0, arr = [];
  for (let i = 0; i < ops.length; i++) {
    let item = 0;
    if (ops[i] === '+') item = arr[arr.length - 1] + arr[arr.length - 2];
    else if (ops[i] === 'D') item = arr[arr.length - 1] * 2;
    else if (ops[i] === 'C') {
      const del = arr.pop();
      res -= Number(del);
      continue
    } else item = Number(ops[i]);
    arr.push(item);
    res += item;
  }
  return res;
};
// @lc code=end

