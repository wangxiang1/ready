/*
 * @Author: wangxiang
 * @Date: 2020-11-06 15:07:06
 * @LastEditTime: 2020-11-06 15:11:24
 * @LastEditors: wangxiang
 * @Description: queue队列
 * @FilePath: \ready\04_数据结构和算法\03_queue.js
 */
/**
 * 队列是一种先进先出（FIFO，First In First Out）的数据结构。
 * 特点： 1、只能从尾部添加元素 2、只能从头部移除元素
 * 队列（Queue）——只用 push 和 shift 完成增删的“数组”
 */
// 空队列
const queue = [];

// 入队
queue.push('排队第1个元素')
queue.push('排队第2个元素')
queue.push('排队第3个元素')
queue.push('排队第4个元素')
queue.push('排队第5个元素')

console.log(queue);

// 出队
while (queue.length) {
  const item = queue.shift();
  console.log('出队：', item);
}

console.log(queue);