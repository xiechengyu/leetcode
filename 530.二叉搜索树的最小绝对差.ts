/*
 * @lc app=leetcode.cn id=530 lang=typescript
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getMinimumDifference(root: TreeNode | null): number {
  const stack = [], arr: number[] = []
  while (root || stack.length > 0) {
    if (root) {
      arr.push(root.val)
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      root = root.right
    }
  }
  arr.sort((a, b) => a - b)
  let res: number = arr[1] - arr[0]
  for (let i = 2; i < arr.length; i++) {
    res = Math.min(arr[i] - arr[i - 1], res)
  }
  return res
};
// @lc code=end

