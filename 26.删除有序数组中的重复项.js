/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length;) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i - 1, 1)
        } else {
            i++
        }
    }
    return nums.length
};
// @lc code=end

