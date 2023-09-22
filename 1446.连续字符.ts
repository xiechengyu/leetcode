/*
 * @lc app=leetcode.cn id=1446 lang=typescript
 *
 * [1446] 连续字符
 * 
 * 给你一个字符串 s ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。

请你返回字符串 s 的 能量。

 

示例 1：

输入：s = "leetcode"
输出：2
解释：子字符串 "ee" 长度为 2 ，只包含字符 'e' 。
示例 2：

输入：s = "abbcccddddeeeeedcba"
输出：5
解释：子字符串 "eeeee" 长度为 5 ，只包含字符 'e' 。
 
 */

// @lc code=start
function maxPower(s: string): number {
  let max = 1,
    curr = s[0],
    len = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === curr) {
      len++;
      if (i === s.length - 1) {
        max = Math.max(max, len);
      }
      continue;
    }
    curr = s[i];
    max = Math.max(max, len);
    len = 1;
  }
  return max;
}
// @lc code=end
