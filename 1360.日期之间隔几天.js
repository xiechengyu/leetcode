/*
 * @lc app=leetcode.cn id=1360 lang=javascript
 *
 * [1360] 日期之间隔几天
 */

// @lc code=start
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = (date1, date2) => Math.abs((new Date(date1).getTime() - new Date(date2).getTime()) / 86400000)
// @lc code=end

