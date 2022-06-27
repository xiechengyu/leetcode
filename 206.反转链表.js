/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 * 
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 

示例 1：


输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
示例 2：


输入：head = [1,2]
输出：[2,1]
示例 3：

输入：head = []
输出：[]
 
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
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function (head) {
//   const res = new ListNode(), stack = []
//   while (head) {
//     stack.unshift(head.val)
//     head = head.next
//   }
//   if (stack.length === 0) return res.next
//   res.next = new ListNode()
//   let node = res.next
//   for (let i = 0; i < stack.length; i++) {
//     node.val = stack[i]
//     if (i < stack.length - 1) node.next = new ListNode()
//     node = node.next
//   }
//   return res.next
// };

var reverseList = function (head) {
  let prev = null, curr = head
  while (curr) {
      const after = curr.next
      curr.next = prev
      prev = curr
      curr = after
  }
  return prev
};
// @lc code=end

