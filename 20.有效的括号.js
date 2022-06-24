/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 * 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
示例 4：

输入：s = "([)]"
输出：false
示例 5：

输入：s = "{[]}"
输出：true
 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = new Map([[")", "("], ["}", "{"], ["]", "["]]), stack = []
  stack.push(s[0])
  for (let i = 1; i < s.length; i++) {
    if (map.get(s[i]) && stack[stack.length - 1] && map.get(s[i]) === stack[stack.length - 1]) stack.pop()
    else stack.push(s[i])
  }
  return stack.length === 0
};
// @lc code=end

