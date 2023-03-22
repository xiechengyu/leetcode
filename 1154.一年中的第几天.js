/*
 * @lc app=leetcode.cn id=1154 lang=javascript
 *
 * [1154] 一年中的第几天
 * 
 * 给你一个字符串 date ，按 YYYY-MM-DD 格式表示一个 现行公元纪年法 日期。返回该日期是当年的第几天。

 

示例 1：

输入：date = "2019-01-09"
输出：9
解释：给定日期是2019年的第九天。
示例 2：

输入：date = "2019-02-10"
输出：41
 


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

