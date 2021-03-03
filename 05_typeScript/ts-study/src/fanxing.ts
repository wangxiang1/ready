/*
 * @Author: wangxiang
 * @Date: 2020-12-25 16:47:14
 * @LastEditTime: 2020-12-29 16:04:54
 * @LastEditors: wangxiang
 * @Description: 泛型
 * @FilePath: \ready\05_typeScript\ts-study\src\fanxing.ts
 */
function returnItem<T>(para: T): T {
  return para;
}

console.log(returnItem('eeee'));
console.log(returnItem(111));

// 泛型变量
function getArrayLength<T>(arg: Array<T>) {
  console.log((arg as Array<any>).length);
  return arg
}

// 泛型约束
type Params = number | string;

// 泛型类
class Stack<T extends Params>{ // 类型约束，此时只能是number和string类型
  private arr: T[] = []

  push(item: T) {
    this.arr.push(item)
  }

  pop(){
    this.arr.pop()
  }
}

const stack = new Stack()
stack.push('eee')


function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key]                           
}

const a_obj = {
  name: 'xiaomuzhu',
  id: 1
}

getValue(a_obj, 'id')
