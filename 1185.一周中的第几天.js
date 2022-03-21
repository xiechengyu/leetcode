/*
 * @lc app=leetcode.cn id=1185 lang=javascript
 *
 * [1185] 一周中的第几天
 */

// @lc code=start
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
  const a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return a[new Date(`${year}-${month}-${day}`).getDay()]
};
// @lc code=end

