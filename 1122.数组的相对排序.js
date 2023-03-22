/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 * 
 * 给你两个数组，arr1 和 arr2，arr2 中的元素各不相同，arr2 中的每个元素都出现在 arr1 中。

对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

 

示例 1：

输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
输出：[2,2,2,1,4,3,3,9,6,7,19]
示例  2:

输入：arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
输出：[22,28,8,6,17,44]
 
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const res = []
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length;) {
      if (arr1[j] === arr2[i]) {
        res.push(arr1[j])
        arr1.splice(j, 1)
      } else {
        j++
      }
    }
  }
  arr1.sort((a, b) => a - b)
  return [...res, ...arr1]
};
// @lc code=end

