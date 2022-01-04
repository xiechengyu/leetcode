/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  const str = s.split('');
  for (let i = 0; i < s.length / 2; i++) {
    let arr1 = str.slice(0), arr2 = str.slice(0);
    arr1.splice(i, 1);
    arr1 = arr1.reverse();
    arr2.splice(i, 1);
    const str1 = arr1.join(''), str2 = arr2.join('');
    if (str1 === str2) return true;
  }
  return false;
};
// @lc code=end

