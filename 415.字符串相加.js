/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 * 
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

 

示例 1：

输入：num1 = "11", num2 = "123"
输出："134"
示例 2：

输入：num1 = "456", num2 = "77"
输出："533"
示例 3：

输入：num1 = "0", num2 = "0"
输出："0"
 


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

