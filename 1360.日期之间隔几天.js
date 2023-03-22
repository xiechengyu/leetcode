/*
 * @lc app=leetcode.cn id=1360 lang=javascript
 *
 * [1360] 日期之间隔几天
 * 
 * 请你编写一个程序来计算两个日期之间隔了多少天。

日期以字符串形式给出，格式为 YYYY-MM-DD，如示例所示。

 

示例 1：

输入：date1 = "2019-06-29", date2 = "2019-06-30"
输出：1
示例 2：

输入：date1 = "2020-01-15", date2 = "2019-12-31"
输出：15
 
 */

// @lc code=start
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = (date1, date2) => Math.abs((new Date(date1).getTime() - new Date(date2).getTime()) / 86400000)
// @lc code=end

