/*
 * @lc app=leetcode.cn id=645 lang=typescript
 *
 * [645] 错误的集合
 */

// @lc code=start
function findErrorNums(nums: number[]) {
  nums.sort((a, b) => a - b)
  const nums1 = [...new Set(nums)], res: number[] = []
  for (let i = 0; i < nums.length; i++) {
    if (!res[0] && nums[i] !== nums1[i]) res[0] = nums[i];
    if (!res[1] && i + 1 !== nums1[i]) res[1] = i + 1
    if (res[0] && res[1]) break;
  }
  return res
};
// @lc code=end

