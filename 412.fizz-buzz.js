/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let arr = []
  for (let i = 1; i <= n; i++) {
    let num
    if (i % 3 === 0 && i % 5 === 0) {
      num = 'FizzBuzz';
    } else if (i % 3 === 0) {
      num = 'Fizz';
    } else if (i % 5 === 0) {
      num = "Buzz"
    } else {
      num = i.toString()
    }
    arr.push(num)
  }
  return arr
};
// @lc code=end

