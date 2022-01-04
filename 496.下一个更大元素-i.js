/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const res = [], max = Math.max(...nums2)
  for (let i = 0; i < nums1.length; i++) {
    const index = nums2.indexOf(nums1[i])
    if (nums1[i] === max || index === nums2.length - 1) {
      res.push(-1)
      continue
    }
    for (let j = index + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        res.push(nums2[j])
        break
      } else {
        if (j === nums2.length - 1) res.push(-1)
      }
    }
  }
  return res
};
// @lc code=end

