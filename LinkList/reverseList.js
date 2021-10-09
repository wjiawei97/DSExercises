// 206: https://leetcode-cn.com/problems/reverse-linked-list/

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
// double pointer
var reverseList = function (head) {
  if (!head || !head.next) return head;

  let temp = null, pre = null, cur = head;
  while (cur) {
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
};

// recursion
var reversion = function (pre, cur) {
  if (cur === NULL) return pre;
  let temp = cur.next;
  cur.next = pre;
  return reversion(cur, temp)
}
var reverseList = function (head) {
  return reversion(null, head)
};

// recursion2
var reverse = function (head) {
  if (!head || !head.next) return head;
  let pre = reverse(head.next);
  head.next = pre.next;
  pre.next = head;
  return head;
};
var reverseList = function (head) {
  let cur = head;
  while (cur && cur.next) {
    cur = cur.next;
  }
  reverse(head);
  return cur
};