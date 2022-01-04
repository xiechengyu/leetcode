/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = nums => nums.map(item => Math.pow(item, 2)).sort((a, b) => a - b)
// @lc code=end

