/*
 * @Author: wangxiang
 * @Date: 2020-11-06 15:27:50
 * @LastEditTime: 2020-11-06 15:33:12
 * @LastEditors: wangxiang
 * @Description: 链表
 * @FilePath: \ready\04_数据结构和算法\04_链表.js
 */
// 链表创建
function ListNode(value) {
  this.val = value;
  this.next = null;
}

// 创建节点 创建出了一个数据域值为1，next 结点数据域值为2的链表结点：
const node = new ListNode(1);
node.next = new ListNode(2);

// 在两个节点中间插入一个节点
// 待插入节点 node3
const node3 = new ListNode(3);
node3.next = node.next;
node.next = node3;
