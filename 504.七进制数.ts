/*
 * @lc app=leetcode.cn id=504 lang=typescript
 *
 * [504] 七进制数
 * 
 * 给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。

 

示例 1:

输入: num = 100
输出: "202"
示例 2:

输入: num = -7
输出: "-10"
 
 */

// @lc code=start
function convertToBase7(num: number): string {
  return num.toString(7)
};
// @lc code=end

