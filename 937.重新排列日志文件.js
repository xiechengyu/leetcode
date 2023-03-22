/*
 * @lc app=leetcode.cn id=937 lang=javascript
 *
 * [937] 重新排列日志文件
 * 
 * 给你一个日志数组 logs。每条日志都是以空格分隔的字串，其第一个字为字母与数字混合的 标识符 。

有两种不同类型的日志：

字母日志：除标识符之外，所有字均由小写字母组成
数字日志：除标识符之外，所有字均由数字组成
请按下述规则将日志重新排序：

所有 字母日志 都排在 数字日志 之前。
字母日志 在内容不同时，忽略标识符后，按内容字母顺序排序；在内容相同时，按标识符排序。
数字日志 应该保留原来的相对顺序。
返回日志的最终顺序。

 

示例 1：

输入：logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
输出：["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
解释：
字母日志的内容都不同，所以顺序为 "art can", "art zero", "own kit dig" 。
数字日志保留原来的相对顺序 "dig1 8 1 5 1", "dig2 3 6" 。
示例 2：

输入：logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
输出：["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
 
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  let zimu = [], shuzi = []
  for (let i = 0; i < logs.length; i++) {
    const str = logs[i].slice(logs[i].indexOf(" ") + 1)
    if (/\d/.test(str[0])) {
      shuzi.push(logs[i])
      continue
    }
    zimu.push(logs[i])
  }
  zimu = zimu.sort((a, b) => {
    const a1 = a.slice(a.indexOf(" ") + 1), b1 = b.slice(b.indexOf(" ") + 1)
    const n = a1.localeCompare(b1)
    if (n === 0) return a.localeCompare(b)
    else return n
  })
  return [...zimu, ...shuzi]
};
// @lc code=end

