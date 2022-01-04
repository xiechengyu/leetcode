/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    for (let j = 1; j < nums.length;) {
        if (nums[0] === nums[j]) {
            nums.splice(j, 1)
            nums.shift()
            j = 1
        } else {
            j++
        }
    }
    return nums[0]
};
// @lc code=end

