/*
 * @Author: wangxiang
 * @Date: 2020-12-16 14:43:51
 * @LastEditTime: 2020-12-16 15:09:06
 * @LastEditors: wangxiang
 * @Description: 原型模式
 * @FilePath: \ready\06_设计模式\03_yuanxing.js
 */

 // class 只是个语法糖本质上还是function
class Dog{
  constructor(name, age){
    this.name = name
    this.age = age
  }

  eat(){
    console.log('吃肉...');
  }
}

// 以上class定义的类等同于如下(JavaScript 这门语言的根本就是原型模式)
function Dog1(name, age){
  this.name = name
  this.age = age
}

Dog1.prototype.eat = function () {
  console.log('吃肉...');
}

// 深拷贝
function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  let copy =  Object.prototype.toString.call(obj) === '[object Array]' ? [] : {}

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key])
    }
  }

  return copy
}

const obj1 = {name: 'wang', age: 11, work: ['ewsfs', '1232'], like: { name: 'ppp' }};
const obj2 = deepClone(obj1);
console.log(obj1, obj2);
console.log(obj1 === obj2);