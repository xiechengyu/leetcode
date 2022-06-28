/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 * 
 * 给你一个字符串数组 words ，只返回可以使用在 美式键盘 同一行的字母打印出来的单词。键盘如下图所示。

美式键盘 中：

第一行由字符 "qwertyuiop" 组成。
第二行由字符 "asdfghjkl" 组成。
第三行由字符 "zxcvbnm" 组成。
American keyboard

 

示例 1：

输入：words = ["Hello","Alaska","Dad","Peace"]
输出：["Alaska","Dad"]
示例 2：

输入：words = ["omk"]
输出：[]
示例 3：

输入：words = ["adsdf","sfd"]
输出：["adsdf","sfd"]
 


 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const res = [], set1 = new Set(["Q", "q", "W", "w", "E", "e", "R", "r", "T", "t", "Y", "y", "U", "u", "I", "i", "O", "o", "P", "p"]), set2 = new Set(["A", "a", "S", "s", "D", "d", "F", "f", "G", "g", "H", "h", "J", "j", "K", "k", "L", "l"]), set3 = new Set(["Z", "z", "X", "x", "C", "c", "V", "v", "B", "b", "N", "n", "M", "m"])
  for (let i = 0; i < words.length; i++) {
    res.push(words[i])
    const set = set1.has(words[i][0]) ? set1 : set2.has(words[i][0]) ? set2 : set3
    for (let j = 1; j < words[i].length; j++) {
      if (!set.has(words[i][j])) {
        res.pop()
        break
      }
    }
  }
  return res
};
// @lc code=end

