/*
 * @Author: wangxiang
 * @Date: 2020-11-06 14:17:07
 * @LastEditTime: 2020-11-06 14:57:03
 * @LastEditors: wangxiang
 * @Description: 数组测试文件
 * @FilePath: \ready\04_数据结构和算法\01_array.js
 */
// 创建一个数组
const arr = [1, 2, 3];
const arr1 = new Array(7);
// 给数组赋值一个超出数组长度的数据
arr[7] = 12;
console.log(arr); // [ 1, 2, 3, <4 empty items>, 12 ]
console.log(arr1);

// 给数组填充数据
const arr2 = new Array(7).fill(1);
console.log('填充数据:',arr2);

// 二维数组
const arr3 = [
  [1,2,3,4,5],
  [1,2,3,4,5],
  [1,2,3,4,5],
  [1,2,3,4,5],
  [1,2,3,4,5]
];
console.log('二维数组:', arr3);

// fill的局限性
const arr4 = new Array(4).fill([]);
arr4[0][0] = 1; // fill 填充的值如果是个引用数据类型，本质上填充的都是同一个对象，所以修改一个对象，所有数组内填充对象都会改变。
console.log('fill的局限性:', arr4);

// 正确的二维数组填充
const arr5 = new Array(5).fill(0).map(() => []);
arr5[0][0] = 1;
console.log('正确的二维数组填充:', arr5);

// 二维数组的访问（两层for循环）、
for (let i = 0; i < arr3.length; i++) {
  const item = arr3[i];
  for (let j = 0; j < item.length; j++) {
    const item2 = arr3[i][j];
    // console.log(item2);
  }
  
}

// 数组增加元素的方法
const arr6 = [1, 2, 3];
// 1、push-添加元素到数组的尾部
arr6.push(4);
console.log(arr6);
// 2、unshift 方法-添加元素到数组的头部
arr6.unshift(0);
console.log(arr6);
// 3、splice 方法-添加元素到数组的任何位置
arr6.splice(0, 1); // 移除第一个元素
arr6.splice(2, 1); // 移除第三个元素
arr6.splice(1, 0, 5); // 在位置1 插入一个元素5
console.log(arr6);
arr6.splice(3, 1, 6); // 在位置3 替换为元素6
console.log(arr6);

// 数组中删除元素的三种方法
const arr7 = [1, 2, 3];
// 1、pop-删除数组尾部的元素
arr7.pop();
console.log(arr7);
// 2、shift-删除数组头部的元素
arr7.shift();
console.log(arr7);
// 3、splice 方法-删除数组任意位置的元素
// arr7.slice(0, 1)
