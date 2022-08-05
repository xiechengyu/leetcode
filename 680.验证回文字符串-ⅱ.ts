/*
 * @lc app=leetcode.cn id=680 lang=typescript
 *
 * [680] 验证回文字符串 Ⅱ
 * 
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

 

示例 1:

输入: s = "aba"
输出: true
示例 2:

输入: s = "abca"
输出: true
解释: 你可以删除c字符。
示例 3:

输入: s = "abc"
输出: false
 
 */

// @lc code=start

function validPalindrome(s: string, canDelete: boolean = true): boolean {
  for (let left = 0, right = s.length - 1; left < right; left++, right--) {
    if (s[left] !== s[right]) return canDelete && (validPalindrome(s.slice(left + 1, right + 1), false) || validPalindrome(s.slice(left, right), false));
  }
  return true;
}
// @lc code=end

