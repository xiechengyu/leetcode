/*
 * @lc app=leetcode.cn id=404 lang=typescript
 *
 * [404] 左叶子之和
 * 
 * 给定二叉树的根节点 root ，返回所有左叶子之和。

 

示例 1：



输入: root = [3,9,20,null,null,15,7] 
输出: 24 
解释: 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
示例 2:

输入: root = [1]
输出: 0
 
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
function sumOfLeftLeaves(root: TreeNode | null, isLeftNode = false): number {
  if (!root) return 0;
  if (isLeftNode && !root.left && !root.right) return root.val;
  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right);
}
// @lc code=end

