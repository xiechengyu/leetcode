/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 * 
 * 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。

 

示例 1：


输入：root = [1,null,2,3]
输出：[3,2,1]
示例 2：

输入：root = []
输出：[]
示例 3：

输入：root = [1]
输出：[1]
 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    if (!root) return []
    let res = [], stack = [root]
    while (stack.length > 0) {
        root = stack.shift()
        res.unshift(root.val)
        if (root.left) stack.unshift(root.left)
        if (root.right) stack.unshift(root.right)
    }
    return res
};
// @lc code=end

