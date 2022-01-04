/*
 * @lc app=leetcode.cn id=762 lang=javascript
 *
 * [762] 二进制表示中质数个计算置位
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  const map = new Map();
  let res = 0;
  for (let i = left; i <= right; i++) {
    if (isPrime(i.toString(2).match(/1/g).length, map)) res++;
  }
  return res;
};

/**
 * @param {number} num
 * @param {Map<string,boolean>} map
 * @return {boolean}
 */
var isPrime = function (num, map) {
  if (num === 1) return false;
  if (map.has(num)) return map.get(num);
  map.set(num, true);
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      map.set(num, false);
      break;
    }
  }
  return map.get(num);
};
// @lc code=end
