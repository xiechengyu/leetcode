/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 * 
 * 对于字符串 s 和 t，只有在 s = t + ... + t（t 自身连接 1 次或多次）时，我们才认定 “t 能除尽 s”。

给定两个字符串 str1 和 str2 。返回 最长字符串 x，要求满足 x 能除尽 str1 且 X 能除尽 str2 。

 

示例 1：

输入：str1 = "ABCABC", str2 = "ABC"
输出："ABC"
示例 2：

输入：str1 = "ABABAB", str2 = "ABAB"
输出："AB"
示例 3：

输入：str1 = "LEET", str2 = "CODE"
输出：""
 
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  for (let i = 0; i < str2.length; i++) {
    const str = str2.slice(0, str2.length - i)
    if (str1.split(str).findIndex(j => j !== "") === -1 && str2.split(str).findIndex(j => j !== "") === -1) return str
  }
  return ""
};
// @lc code=end

