/*
 * @lc app=leetcode.cn id=598 lang=typescript
 *
 * [598] 范围求和 II
 * 
 * 给你一个 m x n 的矩阵 M ，初始化时所有的 0 和一个操作数组 op ，其中 ops[i] = [ai, bi] 意味着当所有的 0 <= x < ai 和 0 <= y < bi 时， M[x][y] 应该加 1。

在 执行完所有操作后 ，计算并返回 矩阵中最大整数的个数 。

 

示例 1:



输入: m = 3, n = 3，ops = [[2,2],[3,3]]
输出: 4
解释: M 中最大的整数是 2, 而且 M 中有4个值为2的元素。因此返回 4。
示例 2:

输入: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
输出: 4
示例 3:

输入: m = 3, n = 3, ops = []
输出: 9
 


 */

// @lc code=start
function maxCount(m: number, n: number, ops: number[][]): number {
  return ops.length === 0 ? m * n : Math.min(...ops.map(i => i[0])) * Math.min(...ops.map(i => i[1]));
};
// @lc code=end
