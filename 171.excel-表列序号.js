/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 * 
 * 给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回 该列名称对应的列序号 。

例如：

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

示例 1:

输入: columnTitle = "A"
输出: 1
示例 2:

输入: columnTitle = "AB"
输出: 28
示例 3:

输入: columnTitle = "ZY"
输出: 701
 
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    const map = new Map([["A", 1], ["B", 2], ["C", 3], ["D", 4], ["E", 5], ["F", 6], ["G", 7], ["H", 8], ["I", 9], ["J", 10], ["K", 11], ["L", 12], ["M", 13], ["N", 14], ["O", 15], ["P", 16], ["Q", 17], ["R", 18], ["S", 19], ["T", 20], ["U", 21], ["V", 22], ["W", 23], ["X", 24], ["Y", 25], ["Z", 26]])
    let res = 0
    for (let i = 0; i < columnTitle.length; i++) {
        res += map.get(columnTitle[columnTitle.length - 1 - i]) * (26 ** i)
    }
    return res
};
// @lc code=end

