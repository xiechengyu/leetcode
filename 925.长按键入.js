/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let curr = 0
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === name[curr]) continue
    if (typed[i] === name[curr + 1]) {
      curr++
      continue
    }
    return false
  }
  return true
};
// @lc code=end

