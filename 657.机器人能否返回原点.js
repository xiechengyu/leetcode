/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  const map = new Map()
  for (let i = 0; i < moves.length; i++) {
    if (!map.has(moves[i])) map.set(moves[i], 0)
    else map.set(moves[i], map.get(moves[i]) + 1)
  }
  return map.get("U") === map.get("D") && map.get("L") === map.get("R")
};
// @lc code=end

