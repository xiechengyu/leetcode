/*
 * @lc app=leetcode.cn id=1232 lang=javascript
 *
 * [1232] 缀点成线
 * 
 * 给定一个数组 coordinates ，其中 coordinates[i] = [x, y] ， [x, y] 表示横坐标为 x、纵坐标为 y 的点。请你来判断，这些点是否在该坐标系中属于同一条直线上。

 

示例 1：



输入：coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
输出：true
示例 2：



输入：coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
输出：false
 
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

