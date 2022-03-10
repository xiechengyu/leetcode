/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
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

