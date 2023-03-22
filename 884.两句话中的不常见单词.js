/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 * 
 * 句子 是一串由空格分隔的单词。每个 单词 仅由小写字母组成。

如果某个单词在其中一个句子中恰好出现一次，在另一个句子中却 没有出现 ，那么这个单词就是 不常见的 。

给你两个 句子 s1 和 s2 ，返回所有 不常用单词 的列表。返回列表中单词可以按 任意顺序 组织。

 

示例 1：

输入：s1 = "this apple is sweet", s2 = "this apple is sour"
输出：["sweet","sour"]
示例 2：

输入：s1 = "apple apple", s2 = "banana"
输出：["banana"]
 
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  s1 = s1.split(" ")
  s2 = s2.split(" ")
  const len = Math.max(s1.length,s2.length),res = []
  for (let i = 0; i < len; i++) {
    if(s1[i] && s1.indexOf(s1[i])===s1.lastIndexOf(s1[i])&&!s2.includes(s1[i])) res.push(s1[i])
    if(s2[i] && s2.indexOf(s2[i])===s2.lastIndexOf(s2[i])&&!s1.includes(s2[i])) res.push(s2[i])
  }
  return res
};
// @lc code=end

