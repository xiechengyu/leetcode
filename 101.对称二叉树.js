/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 * 
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。

 

示例 1：


输入：root = [1,2,2,3,4,4,3]
输出：true
示例 2：


输入：root = [1,2,2,null,3,null,3]
输出：false
 
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    let stackP = [], stackQ = [], p = root.left, q = root.right
    while (p || stackP.length || q || stackQ.length) {
        if (p || q) {
            if ((!p || !q) || p.val !== q.val) return false
            stackP.push(p)
            stackQ.push(q)
            p = p.left
            q = q.right
        } else {
            p = stackP.pop()
            q = stackQ.pop()
            if (p.val !== q.val) return false
            p = p.right
            q = q.left
        }
    }
    return true
};
// @lc code=end

