/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短补全词
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  let res = '';
  const license = licensePlate.match(/[A-z]/g).map(item => item.toLocaleLowerCase())
  for (let i = 0; i < words.length; i++) {
    if (res && res.length <= words[i].length) continue;
    const arr = license.slice(0);
    const arr1 = words[i].toLocaleLowerCase().split('');
    for (let j = 0; j < arr1.length; j++) {
      const index = arr.indexOf(arr1[j])
      if (index > -1) arr.splice(index, 1)
      if (arr.length === 0) {
        res = words[i];
        break
      }
    }
  }
  return res;
};
// @lc code=end

