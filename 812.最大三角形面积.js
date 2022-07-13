/*
 * @lc app=leetcode.cn id=812 lang=javascript
 *
 * [812] 最大三角形面积
 * 
 * 给定包含多个点的集合，从其中取三个点组成三角形，返回能组成的最大三角形的面积。

示例:
输入: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
输出: 2
解释: 
这五个点如下图所示。组成的橙色三角形是最大的，面积为2。



 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
function largestTriangleArea(points) {
  let max = Number.MIN_SAFE_INTEGER
  for (const point1 of points) {
    for (const point2 of points) {
      for (const point3 of points) {
        max = Math.max(max, countTriangleArea([point1, point2, point3]))
      }
    }
  }
  return max
}

function countTriangleArea(points) {
  const [[x1, y1], [x2, y2], [x3, y3]] = points
  // 海伦公式
  // 向量 正弦定理
  // return (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2
  // 左边梯形 + 右边梯形 - 底部梯形 = 顶部三角形
  return (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2
}
// @lc code=end

