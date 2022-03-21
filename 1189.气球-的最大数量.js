/*
 * @lc app=leetcode.cn id=1189 lang=javascript
 *
 * [1189] “气球” 的最大数量
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const map = new Map([['b', 0], ['a', 0], ['l', 0], ['o', 0], ['n', 0]])
  for (let i = 0; i < text.length; i++) {
    if (map.has(text[i])) map.set(text[i], map.get(text[i]) + 1)
  }
  let res = 0
  while (true) {
    if (map.get('b') >= 1 && map.get('a') >= 1 && map.get('l') >= 2 && map.get('o') >= 2 && map.get('n') >= 1) {
      res++
      map.set('b', map.get('b') - 1)
      map.set('a', map.get('a') - 1)
      map.set('l', map.get('l') - 2)
      map.set('o', map.get('o') - 2)
      map.set('n', map.get('n') - 1)
    } else {
      return res
    }
  }
};
// @lc code=end

