/*
 * @lc app=leetcode.cn id=697 lang=typescript
 *
 * [697] 数组的度
 * 
 * 给定一个非空且只包含非负数的整数数组 nums，数组的 度 的定义是指数组里任一元素出现频数的最大值。

你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

 

示例 1：

输入：nums = [1,2,2,3,1]
输出：2
解释：
输入数组的度是 2 ，因为元素 1 和 2 的出现频数最大，均为 2 。
连续子数组里面拥有相同度的有如下所示：
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
最短连续子数组 [2, 2] 的长度为 2 ，所以返回 2 。
示例 2：

输入：nums = [1,2,2,3,1,4,2]
输出：6
解释：
数组的度是 3 ，因为元素 2 重复出现 3 次。
所以 [2,2,3,1,4,2] 是最短子数组，因此返回 6 。
 
 */

// @lc code=start
function findShortestSubArray(nums: number[]): number {
  const map1 = new Map(),
    map2 = new Map(),
    map3 = new Map();
  let res = Number.MAX_VALUE,max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!map1.has(nums[i])) {
      map1.set(nums[i], 1);
      map2.set(nums[i], i);
    } else {
      map1.set(nums[i], map1.get(nums[i]) + 1);
    }
    map3.set(nums[i], i);
    max = Math.max(max,map1.get(nums[i]))
  }
  const arr:any[] = []
  for (const [k,v] of map1.entries()) {
    if(v===max) arr.push(k)
  }
  for (let i = 0; i < arr.length; i++) {
    res = Math.min(res,map3.get(arr[i])-map2.get(arr[i])+1)
  }
  return res;
}
// @lc code=end
