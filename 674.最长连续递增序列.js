/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let arr = [nums[0]], len = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= arr[arr.length - 1]) arr = [];
    arr.push(nums[i]);
    len = Math.max(len, arr.length);
  }
  return len;
};

// @lc code=end

