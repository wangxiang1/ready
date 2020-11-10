/*
 * @Author: wangxiang
 * @Date: 2020-11-06 14:57:36
 * @LastEditTime: 2020-11-06 15:06:32
 * @LastEditors: wangxiang
 * @Description: Stack(栈)
 * @FilePath: \ready\04_数据结构和算法\02_stack.js
 */
/**
 * 栈是一种后进先出(LIFO，Last In First Out)的数据结构
 * 特点：1、只允许从尾部添加元素  2、只允许从尾部删除元素
 * 用数组 pop和push实现栈
 */
// 初始状态，栈空
const stack = [];

// 入栈
stack.push('元素1')
stack.push('元素2')
stack.push('元素3')
stack.push('元素4')
stack.push('元素5')
stack.push('元素6')

console.log('stack:', stack);

// 出栈
while (stack.length) {
  const item = stack.pop();
  console.log('出栈元素：', item);
}

console.log('stack:', stack);