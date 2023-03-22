/*
 * @lc app=leetcode.cn id=1309 lang=javascript
 *
 * [1309] 解码字母到整数映射
 * 
 * 给你一个字符串 s，它由数字（'0' - '9'）和 '#' 组成。我们希望按下述规则将 s 映射为一些小写英文字符：

字符（'a' - 'i'）分别用（'1' - '9'）表示。
字符（'j' - 'z'）分别用（'10#' - '26#'）表示。 
返回映射之后形成的新字符串。

题目数据保证映射始终唯一。

 

示例 1：

输入：s = "10#11#12"
输出："jkab"
解释："j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
示例 2：

输入：s = "1326#"
输出："acz"
 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === "#") {
      res += String.fromCharCode(Number(s[i] + s[i + 1]) + 96)
      i += 2
    } else {
      res += String.fromCharCode(Number(s[i]) + 96)
    }
  }
  return res
};
// @lc code=end

