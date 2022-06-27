/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 * 
 * 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。



 

示例 1:

输入: rowIndex = 3
输出: [1,3,3,1]
示例 2:

输入: rowIndex = 0
输出: [1]
示例 3:

输入: rowIndex = 1
输出: [1,1]
 


 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let res = [[1]]
    for (let i = 1; i < rowIndex + 1; i++) {
        let item = [1]
        for (let j = 1; j < res[i - 1].length; j++) {
            item.push(res[i - 1][j] + res[i - 1][j - 1])
        }
        item.push(1)
        res.push(item)
    }
    return res.pop()
};
// @lc code=end

