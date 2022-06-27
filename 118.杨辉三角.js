/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 * 
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。



 

示例 1:

输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
示例 2:

输入: numRows = 1
输出: [[1]]
 
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = [[1]]
    for (let i = 1; i < numRows; i++) {
        let item = [1]
        for (let j = 1; j < res[i - 1].length; j++) {
            item.push(res[i - 1][j] + res[i - 1][j - 1])
        }
        item.push(1)
        res.push(item)
    }
    return res
};
// @lc code=end

