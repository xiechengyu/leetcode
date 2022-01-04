/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const map = new Map()
  let min = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < list1.length; i++) {
    const index = list2.indexOf(list1[i]), item = map.get(i + index) || []
    if (index > -1) {
      item.push(list2[index])
      map.set(i + index, item)
      min = Math.min(min, i + index)
    }
  }
  return map.get(min)
};
// @lc code=end

