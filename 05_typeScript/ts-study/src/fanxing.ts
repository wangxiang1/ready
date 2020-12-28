/*
 * @Author: wangxiang
 * @Date: 2020-12-25 16:47:14
 * @LastEditTime: 2020-12-25 18:00:25
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
