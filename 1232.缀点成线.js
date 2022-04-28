/*
 * @lc app=leetcode.cn id=1232 lang=javascript
 *
 * [1232] 缀点成线
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  for (let i = 2; i < coordinates.length; i++) {
    const x = (coordinates[i][0] - coordinates[0][0]) / (coordinates[i][1] - coordinates[0][1]), y = (coordinates[i][0] - coordinates[1][0]) / (coordinates[i][1] - coordinates[1][1])
    if (x !== y && !((x === Infinity || x === -Infinity) && (y === Infinity || y === -Infinity))) {
      return false
    }
  }
  return true
};
// @lc code=end

