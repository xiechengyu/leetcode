/*
 * @lc app=leetcode.cn id=1154 lang=javascript
 *
 * [1154] 一年中的第几天
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  date = date.split("-")
  return ((((((new Date(date).getTime() - new Date(`${date[0]}-01-01`).getTime()) / 1000) / 60) / 60) / 24) + 1)
};
// @lc code=end

