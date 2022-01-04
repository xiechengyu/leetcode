/*
 * @lc app=leetcode.cn id=937 lang=javascript
 *
 * [937] 重新排列日志文件
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

