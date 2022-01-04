/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const nums = [...nums1, ...nums2].sort((a, b) => b - a)
    if (nums.length % 2 === 0) {
        const end = nums.length / 2
        return ((nums[end - 1] + nums[end]) / 2).toFixed(5).toString().padEnd(5, "0")
    } else {
        return nums[(nums.length - 1) / 2] + ".00000"
    }
};
// @lc code=end

