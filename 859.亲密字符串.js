/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false
  if (s === goal) {
    if (s.length === 2 && s[0] !== s[1]) {
      return false
    }
    return true
  }
  let num = 0, currS = "", currG = ""
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      if (!currS && !currG) {
        currS = s[i];
        currG = goal[i]
      } else {
        if (currS !== goal[i] || currG !== s[i]) return false
      }
      num++
    }
    if (num > 2) return false
  }
  return true
};
// @lc code=end

