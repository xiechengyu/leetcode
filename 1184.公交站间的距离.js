/*
 * @lc app=leetcode.cn id=1184 lang=javascript
 *
 * [1184] 公交站间的距离
 */

// @lc code=start
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  if (start === destination) return 0
  if (start > destination) [start, destination] = [destination, start];
  const total = distance.reduce((acc, cur) => acc + cur),route = distance.slice(start, destination).reduce((acc, cur) => acc + cur);
  return Math.min(route, total - route);
};
// @lc code=end

