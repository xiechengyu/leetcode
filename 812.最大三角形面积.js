/*
 * @lc app=leetcode.cn id=812 lang=javascript
 *
 * [812] 最大三角形面积
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  let l = 0, w = 0
  for (let i = 1; i < points.length; i++) {
    l = Math.max(l, points[i][0] > points[i - 1][0] ? points[i][0] - points[i - 1][0] : points[i - 1][0] - points[i][0])
    w = Math.max(w, points[i][1] > points[i - 1][1] ? points[i][1] - points[i - 1][1] : points[i - 1][1] - points[i][1])
  }
  return (l * w) / 2
};
// @lc code=end

