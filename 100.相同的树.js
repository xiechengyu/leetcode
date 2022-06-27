/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 * 
 * 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

 

示例 1：


输入：p = [1,2,3], q = [1,2,3]
输出：true
示例 2：


输入：p = [1,2], q = [1,null,2]
输出：false
示例 3：


输入：p = [1,2,1], q = [1,1,2]
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    let stackP = [], stackQ = []
    while (p || stackP.length || q || stackQ.length) {
        if (p || q) {
            if ((!p || !q) || p.val !== q.val) return false
            stackP.push(p)
            stackQ.push(q)
            p = p.left
            q = q.left
        } else {
            p = stackP.pop()
            q = stackQ.pop()
            if (p.val !== q.val) return false
            p = p.right
            q = q.right
        }
    }
    return true
};
// @lc code=end

