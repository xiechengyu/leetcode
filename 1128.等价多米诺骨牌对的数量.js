
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
  let res = 0, map = new Map()
  for (let i = 0; i < dominoes.length; i++) {
    const s = dominoes[i][0] < dominoes[i][1] ? `${dominoes[i][0]}${dominoes[i][1]}` : `${dominoes[i][1]}${dominoes[i][0]}`
    if (!map.has(s)) {
      map.set(s, 0)
      continue
    }
    const c = map.get(s) + 1
    map.set(s, c)
    res += c
  }
  return res
};

// @lc code=end

