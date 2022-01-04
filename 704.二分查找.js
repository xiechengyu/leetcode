/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  let start = 0,
    end = nums.length - 1;
  if (nums[start] === target) return start;
  if (nums[end] === target) return end;
  while (start !== end) {
    const mid = start + Math.floor((end - start + 1) / 2);
    if (nums[mid] > target) end = mid - 1;
    else if (nums[mid] < target) start = mid;
    else return mid;
  }
  return -1;
};
// @lc code=end

