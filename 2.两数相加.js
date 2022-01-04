/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let out = new ListNode()
    while (l1 || l2) {
        const value = l1 ? l1.value : 0 + l2 ? l2.value : 0
        if (value > 10) {
            out.value = value
            l1.next.value += 1
        } else {
            out.value = value - 10
        }
    }
    return out
};
// @lc code=end

