/*
 * @lc app=leetcode.cn id=1437 lang=typescript
 *
 * [1437] 是否所有 1 都至少相隔 k 个元素
 * 
 * 给你一个由若干 0 和 1 组成的数组 nums 以及整数 k。如果所有 1 都至少相隔 k 个元素，则返回 True ；否则，返回 False 。

 

示例 1：



输入：nums = [1,0,0,0,1,0,0,1], k = 2
输出：true
解释：每个 1 都至少相隔 2 个元素。
示例 2：



输入：nums = [1,0,0,1,0,1], k = 2
输出：false
解释：第二个 1 和第三个 1 之间只隔了 1 个元素。
示例 3：

输入：nums = [1,1,1,1,1], k = 0
输出：true
示例 4：

输入：nums = [0,1,0,1], k = 1
输出：true
 
 */

// @lc code=start
function kLengthApart(nums: number[], k: number): boolean {
  let prev = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (prev !== -1 && i - prev - 1 < k) return false;
      prev = i;
    }
  }
  return true;
}
// @lc code=end
