/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

import { left } from "inquirer/lib/utils/readline";

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let node = head
    while (node) {
        const next = node.next
        if (next && (next.val === node.val)) {
            node.next = next.next
        } else {
            node = node.next
        }
    }
    return head
};
// @lc code=end

