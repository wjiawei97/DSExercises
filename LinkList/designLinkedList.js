// 707: https://leetcode-cn.com/problems/design-linked-list/

class LinkedNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}
var MyLinkedList = function () {
  this._size = 0;
  this._dummyHead = new LinkedNode(0, null);
}


MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index > this._size - 1) {
    return -1;
  }
  let p = this._dummyHead.next;
  while (index--) {
    p = p.next;
  }
  return p.val;
}

MyLinkedList.prototype.addAtHead = function (val) {
  const node = new ListNode(val, null);
  this._size++;
  node.next = this._dummyHead.next;
  this._dummyHead.next = node;
}
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new ListNode(val, null);
  this._size++;
  let p = this._dummyHead;
  while (p.next !== null) {
    p = p.next;
  }
  p.next = node;
}

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this._size) {
    return;
  }
  let p = this._dummyHead;
  while (index--) {
    p = p.next;
  }
  p.next = new LinkedNode(val, p.next);
  this._size++;
}
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this._size || index < 0) {
    return;
  }
  let p = this._dummyHead;
  while (index--) {
    p = p.next;
  }
  p.next = p.next.next;
  this._size--;
};

let myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);
console.log(myLinkedList.get(1));