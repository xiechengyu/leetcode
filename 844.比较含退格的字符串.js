/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 * 
 * 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。

注意：如果对空文本输入退格字符，文本继续为空。

 

示例 1：

输入：s = "ab#c", t = "ad#c"
输出：true
解释：s 和 t 都会变成 "ac"。
示例 2：

输入：s = "ab##", t = "c#d#"
输出：true
解释：s 和 t 都会变成 ""。
示例 3：

输入：s = "a#c", t = "b"
输出：false
解释：s 会变成 "c"，但 t 仍然是 "b"。
 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const len = Math.max(s.length,t.length)
  let strS = "", strT = ""
  for (let i = 0; i < len; i++) {
    if (s[i] === "#") {
      strS = strS.slice(0, strS.length - 1)
    } else {
      strS += s[i] || ""
    }
    if (t[i] === "#") {
      strT = strT.slice(0, strT.length - 1)
    } else {
      strT += t[i] || ""
    }
  }
  return strS === strT
};
// @lc code=end

