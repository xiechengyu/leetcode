/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let countA = 0, countL = 0, prev
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") countA++
    if (s[i] === "L") {
      countL++
    } else {
      countL = 0
    }
    if (countA > 1 || countL > 2) return false
    prev = s[i]
  }
  return true
};
// @lc code=end

