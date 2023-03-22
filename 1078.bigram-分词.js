/*
 * @lc app=leetcode.cn id=1078 lang=javascript
 *
 * [1078] Bigram 分词
 * 
 * 给出第一个词 first 和第二个词 second，考虑在某些文本 text 中可能以 "first second third" 形式出现的情况，其中 second 紧随 first 出现，third 紧随 second 出现。

对于每种这样的情况，将第三个词 "third" 添加到答案中，并返回答案。

 

示例 1：

输入：text = "alice is a good girl she is a good student", first = "a", second = "good"
输出：["girl","student"]
示例 2：

输入：text = "we will we will rock you", first = "we", second = "will"
输出：["we","rock"]
 
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  const res = []
  text = text.split(" ")
  for (let i = 0; i < text.length; i++) {
    if (!text[i + 2]) break
    if (text[i] === first && text[i + 1] === second) res.push(text[i + 2])
  }
  return res
};
// @lc code=end

