
/*
 * @lc app=leetcode.cn id=1128 lang=javascript
 *
 * [1128] 等价多米诺骨牌对的数量
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  let res = 0
  for (let i = 0; i < dominoes.length - 1; i++) {
    const s = dominoes[i].join("")
    for (let j = i + 1; j < dominoes.length; j++) {
      if (s === dominoes[j].join("") || s === dominoes[j].reverse().join("")) {
        res++
      }
    }
  }
  return res
};

// @lc code=end

