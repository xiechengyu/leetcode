/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 * 
 * 给定一个非负整数数组 nums，  nums 中一半整数是 奇数 ，一半整数是 偶数 。

对数组进行排序，以便当 nums[i] 为奇数时，i 也是 奇数 ；当 nums[i] 为偶数时， i 也是 偶数 。

你可以返回 任何满足上述条件的数组作为答案 。

 

示例 1：

输入：nums = [4,2,5,7]
输出：[4,5,2,7]
解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
示例 2：

输入：nums = [2,3]
输出：[2,3]
 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const res = []
  while (nums.length > 0) {
    const item = nums.shift()
    if ((res.length % 2 === 0 && item % 2 === 0) || res.length % 2 === 1 && item % 2 === 1) {
      res.push(item)
    } else {
      nums.push(item)
    }
  }
  return res
};
// @lc code=end

