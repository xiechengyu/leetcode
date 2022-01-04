/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const len = Math.max(num1.length, num2.length),
    len1 = num1.length,
    len2 = num2.length;
  let res = '',
    flag = 0;
  for (let i = 1; i <= len; i++) {
    let n =
      (Number(num1[len1 - i]) || 0) + (Number(num2[len2 - i]) || 0) + flag;
    if (n >= 10) {
      n -= 10;
      flag = 1;
    } else {
      flag = 0;
    }
    res = n + res;
  }
  return `${flag || ''}${res}`;
};
// @lc code=end

